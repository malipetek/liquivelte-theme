<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

import { onMount } from "svelte";
import { trapFocus } from '../scripts/utils.js';

export let container, mainDetailsToggle, breakpoint;
export let bindEvents = function () { _bindEvents.apply(arguments[0], arguments); };
export let onKeyUp = function () { _onKeyUp.apply(arguments[0], arguments); };
export let onSummaryClick = function () { _onSummaryClick.apply(arguments[0], arguments); };
export let openMenuDrawer = function () { _openMenuDrawer.apply(arguments[0], arguments); };
export let closeMenuDrawer = function () { _closeMenuDrawer.apply(arguments[0], arguments); };
export let onFocusOut = function () { _onFocusOut.apply(arguments[0], arguments); };
export let onCloseButtonClick = function () { _onCloseButtonClick.apply(arguments[0], arguments); };
export let closeSubmenu = function () { _closeSubmenu.apply(arguments[0], arguments); };
export let closeAnimation = function () { _closeAnimation.apply(arguments[0], arguments); };

onMount(() => {
    mainDetailsToggle = container.querySelector('details');
  
    if (navigator.platform === 'iPhone') document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
  
    container.addEventListener('keyup', onKeyUp.bind(_onKeyUp));
    container.addEventListener('focusout', onFocusOut.bind(_onFocusOut));
    bindEvents.call(bindEvents.bind(_bindEvents));

  });

  function _bindEvents() {
    container.querySelectorAll('summary').forEach(summary => summary.addEventListener('click', onSummaryClick.bind(_onSummaryClick)));
    container.querySelectorAll('button').forEach(button => button.addEventListener('click', onCloseButtonClick.bind(_onCloseButtonClick)));
  }

  function _onKeyUp(event) {
    if(event.code.toUpperCase() !== 'ESCAPE') return;

    const openDetailsElement = event.target.closest('details[open]');
    if(!openDetailsElement) return;

    openDetailsElement === mainDetailsToggle ? closeMenuDrawer.call(_closeMenuDrawer, event, mainDetailsToggle.querySelector('summary')) : closeSubmenu.call(_closeSubmenu, openDetailsElement);
  }

  function _onSummaryClick(event) {
    const summaryElement = event.currentTarget;
    const detailsElement = summaryElement.parentNode;
    const isOpen = detailsElement.hasAttribute('open');
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function addTrapFocus() {
      trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector('button'));
      summaryElement.nextElementSibling.removeEventListener('transitionend', addTrapFocus);
    }

    if (detailsElement === mainDetailsToggle) {
      if(isOpen) event.preventDefault();
      isOpen ? closeMenuDrawer.call(_closeMenuDrawer, event, summaryElement) : openMenuDrawer.call(_openMenuDrawer, summaryElement);
    } else {
      setTimeout(() => {
        detailsElement.classList.add('menu-opening');
        summaryElement.setAttribute('aria-expanded', true);
        !reducedMotion || reducedMotion.matches ? addTrapFocus() : summaryElement.nextElementSibling.addEventListener('transitionend', addTrapFocus);
      }, 100);
    }
  }

  function _openMenuDrawer(summaryElement) {
    setTimeout(() => {
      mainDetailsToggle.classList.add('menu-opening');
    });
    summaryElement.setAttribute('aria-expanded', true);
    trapFocus(this.mainDetailsToggle, summaryElement);
    document.body.classList.add(`overflow-hidden-${breakpoint}`);
  }

  function _closeMenuDrawer(event, elementToFocus = false) {
    if (event === undefined) return;

    mainDetailsToggle.classList.remove('menu-opening');
    mainDetailsToggle.querySelectorAll('details').forEach(details =>  {
      details.removeAttribute('open');
      details.classList.remove('menu-opening');
    });
    document.body.classList.remove(`overflow-hidden-${breakpoint}`);
    removeTrapFocus(elementToFocus);
    closeAnimation.call(_closeAnimation, mainDetailsToggle);
  }

  function _onFocusOut(event) {
    setTimeout(() => {
      if (mainDetailsToggle.hasAttribute('open') && !mainDetailsToggle.contains(document.activeElement)) closeMenuDrawer.call(_closeMenuDrawer);
    });
  }

  function _onCloseButtonClick(event) {
    const detailsElement = event.currentTarget.closest('details');
    closeSubmenu.call(_closeSubmenu, detailsElement);
  }

  function _closeSubmenu(detailsElement) {
    detailsElement.classList.remove('menu-opening');
    detailsElement.querySelector('summary').setAttribute('aria-expanded', false);
    removeTrapFocus(detailsElement.querySelector('summary'));
    closeAnimation.call(_closeAnimation, detailsElement);
  }

  function _closeAnimation(detailsElement) {
    let animationStart;

    const handleAnimation = (time) => {
      if (animationStart === undefined) {
        animationStart = time;
      }

      const elapsedTime = time - animationStart;

      if (elapsedTime < 400) {
        window.requestAnimationFrame(handleAnimation);
      } else {
        detailsElement.removeAttribute('open');
        if (detailsElement.closest('details[open]')) {
          trapFocus(detailsElement.closest('details[open]'), detailsElement.querySelector('summary'));
        }
      }
    }

    window.requestAnimationFrame(handleAnimation);
  }

</script>

<div bind:this="{container}">
  <slot />
</div>