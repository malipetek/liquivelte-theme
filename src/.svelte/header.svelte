
<script>
  import cachedLiquid from 'liquivelte-liquid.js';
  export let lec;
  const liquid = cachedLiquid(lec);
  let index = 0;

export let rawinclude_548f9315;
export let rawinclude_76fe91f8;
export let rawinclude_b7c846d6;
export let rawinclude_5513f9e2;
export let rawinclude_2041cdf9;
export let rawinclude_7f9a5b3f;
export let rawinclude_d7392808;
export let rawinclude_32303a26;
export let rawinclude_f7398384;
export let rawinclude_1c46a520;
export let rawinclude_102fa95c;
export let rawinclude_46d75d50;
export let rawinclude_2fe7f822;
export let rawinclude_0cce0950;
export let rawinclude_18d5c954;
export let rawinclude_53f2ac54;
export let rawinclude_679e0e24;
export let rawinclude_3be65912;
export let rawinclude_602baf9d;
  import { cartStore, cartOpen } from '../scripts/store.module.js';
  export let shop;
  export let shop$name; 
shop.name = shop$name;
  const section = {};
  export let section$settings; 
section.settings = section$settings;
  export let menu_json;
  section.settings.menu = JSON.parse(menu_json);

  export let routes;
  export let request;

  export let account_url;
  export let account_text;

  console.log('section header ', section);
</script>

<style>
  header-drawer {
    justify-self: start;
    margin-left: -1.2rem;
  }

  .header__heading-logo {
    max-width: var(--section-settings-logo_width);
  }

  @media screen and (min-width: 990px) {
    header-drawer {
      display: none;
    }
  }

  .menu-drawer-container {
    display: flex;
  }

  .list-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list-menu--inline {
    display: inline-flex;
    flex-wrap: wrap;
  }

  summary.list-menu__item {
    padding-right: 2.7rem;
  }

  .list-menu__item {
    display: flex;
    align-items: center;
    line-height: calc(1 + 0.3 / var(--font-body-scale));
  }

  .list-menu__item--link {
    text-decoration: none;
    padding-bottom: 1rem;
    padding-top: 1rem;
    line-height: calc(1 + 0.8 / var(--font-body-scale));
  }

  @media screen and (min-width: 750px) {
    .list-menu__item--link {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
  }
  .header {
    padding-top: var(--section-settings-padding_top); /* {{  | times: 0.5 | round: 0 }}px; */
    padding-bottom: var(--section-settings-padding_bottom); /* {{  | times: 0.5 | round: 0 }}px; */
  }

  .section-header {
    margin-bottom: var(--section-settings-margin_bottom); /* | times: 0.75 | round: 0 }}px; */
  }

  @media screen and (min-width: 750px) {
    .section-header {
      margin-bottom: var(--section-settings-margin_bottom);
    }
  }

  @media screen and (min-width: 990px) {
    .header {
      padding-top: var(--section-settings-padding_top);
      padding-bottom: var(--section-settings-padding_bottom);
    }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <symbol id="icon-search" viewbox="0 0 18 19" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
  </symbol>

  <symbol id="icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </symbol>
</svg>
<div class="header-wrapper color-{ section.settings.color_scheme } gradient" class:header-wrapper--border-bottom="{ section.settings.show_line_separator }">
  <header class="header header--{ section.settings.logo_position } header--mobile-{ section.settings.mobile_logo_position } page-width" class:header--has-menu="{ section.settings.menu }">
    {#if section.settings.menu != '' }
      <header-drawer data-breakpoint="tablet">
        <details id="Details-menu-drawer-container" class="menu-drawer-container">
          <summary class="header__icon header__icon--menu header__icon--summary link focus-inset" aria-label="{ sections.header.menu }">
            <span>
              {@html rawinclude_548f9315[index || 0]}
              {@html rawinclude_76fe91f8[index || 0]}
            </span>
          </summary>
          <div id="menu-drawer" class="gradient menu-drawer motion-reduce" tabindex="-1">
            <div class="menu-drawer__inner-container">
              <div class="menu-drawer__navigation-container">
                <nav class="menu-drawer__navigation">
                  <ul class="menu-drawer__menu has-submenu list-menu" role="list">
                    {#each  section.settings.menu.links as lnk, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( section.settings.menu.links).length - 1,
  rindex: ( section.settings.menu.links).length - index,
  rindex0: ( section.settings.menu.links).length - index - 1,
  length: ( section.settings.menu.links).length,
} }
                      <li>
                        {#if lnk.links != '' }
                          <details id="Details-menu-drawer-menu-item-{ forloop.index }">
                            <summary class="menu-drawer__menu-item list-menu__item link link--text focus-inset" class:menu-drawer__menu-item--active="{ lnk.child_active }" >
                              { liquid.escape(link.title) }
                              {@html rawinclude_b7c846d6[index || 0]}
                              {@html rawinclude_5513f9e2[index || 0]}
                            </summary>
                            <div id="link-{ liquid.escape(lnk.handle) }" class="menu-drawer__submenu has-submenu gradient motion-reduce" tabindex="-1">
                              <div class="menu-drawer__inner-submenu">
                                <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                                  {@html rawinclude_b7c846d6[index || 0]}
                                  { liquid.escape(lnk.title) }
                                </button>
                                <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1">
                                  {#each  link.links as childlk, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === ( link.links).length - 1,
  rindex: ( link.links).length - index,
  rindex0: ( link.links).length - index - 1,
  length: ( link.links).length,
} }
                                    <li>
                                      {#if childlink.links == '' }
                                        <a href="{ childlink.url }" class="menu-drawer__menu-item link link--text list-menu__item focus-inset" class:menu-drawer__menu-item--active="{ childlink.current }" >
                                          { liquid.escape(childlink.title) }
                                        </a>
                                      {:else}
                                        <details id="Details-menu-drawer-submenu-{ forloop.index }">
                                          <summary class="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                                            { liquid.escape(childlink.title) }
                                            {@html rawinclude_b7c846d6[index || 0]}
                                            {@html rawinclude_5513f9e2[index || 0]}
                                          </summary>
                                          <div id="childlink-{ liquid.escape(childlink.handle) }" class="menu-drawer__submenu has-submenu gradient motion-reduce">
                                            <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                                              {@html rawinclude_b7c846d6[index || 0]}
                                              { liquid.escape(childlink.title) }
                                            </button>
                                            <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1">
                                              {#each k in childlink.links as grandchildl, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in childlink.links).length - 1,
  rindex: (k in childlink.links).length - index,
  rindex0: (k in childlink.links).length - index - 1,
  length: (k in childlink.links).length,
} }
                                                <li>
                                                  <a href="{ grandchildlink.url }" class="menu-drawer__menu-item link link--text list-menu__item focus-inset" class:menu-drawer__menu-item--active="{ grandchildlink.current }" >
                                                    { liquid.escape(grandchildlink.title) }
                                                  </a>
                                                </li>
                                              {/each}
                                            </ul>
                                          </div>
                                        </details>
                                      {/if}
                                    </li>
                                  {/each}
                                </ul>
                              </div>
                            </div>
                          </details>
                        {:else}
                          <a href="{ lnk.url }" class="menu-drawer__menu-item list-menu__item link link--text focus-inset" class:menu-drawer__menu-item--active="{ lnk.current }">
                            { liquid.escape(link.title) }
                          </a>
                        {/if}
                      </li>
                    {/each}
                  </ul>
                </nav>
                <div class="menu-drawer__utility-links">
                  {#if shop.customer_accounts_enabled }
                    <a href="{ account_url }" class="menu-drawer__account link focus-inset h5">
                      {@html rawinclude_2041cdf9[index || 0]}
                      { account_text }
                    </a>
                  {/if}
                  <ul class="list list-social list-unstyled" role="list">
                    {#if settings.social_twitter_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_twitter_link }" class="list-social__link link">
                          {@html rawinclude_7f9a5b3f[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.twitter') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_facebook_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_facebook_link }" class="list-social__link link">
                          {@html rawinclude_d7392808[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.facebook') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_pinterest_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_pinterest_link }" class="list-social__link link">
                          {@html rawinclude_32303a26[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.pinterest') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_instagram_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_instagram_link }" class="list-social__link link">
                          {@html rawinclude_f7398384[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.instagram') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_tiktok_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_tiktok_link }" class="list-social__link link">
                          {@html rawinclude_1c46a520[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.tiktok') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_tumblr_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_tumblr_link }" class="list-social__link link">
                          {@html rawinclude_102fa95c[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.tumblr') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_snapchat_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_snapchat_link }" class="list-social__link link">
                          {@html rawinclude_46d75d50[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.snapchat') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_youtube_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_youtube_link }" class="list-social__link link">
                          {@html rawinclude_2fe7f822[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.youtube') }</span>
                        </a>
                      </li>
                    {/if}
                    {#if settings.social_vimeo_link != '' }
                      <li class="list-social__item">
                        <a href="{ settings.social_vimeo_link }" class="list-social__link link">
                          {@html rawinclude_0cce0950[index || 0]}
                          <span class="visually-hidden">{ liquid.t('general.social.links.vimeo') }</span>
                        </a>
                      </li>
                    {/if}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </details>
      </header-drawer>
    {/if}

    {#if section.settings.logo_position == 'top-center' || section.settings.menu == '' }
      <details-modal class="header__search">
        <details>
          <summary class="header__icon header__icon--search header__icon--summary link focus-inset modal__toggle" aria-haspopup="dialog" aria-label="{ liquid.t('general.search.search') }">
            <span>
              <svg class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-search">
              </svg>
              <svg class="modal__toggle-close icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-close">
              </svg>
            </span>
          </summary>
          <div class="search-modal modal__content gradient" role="dialog" aria-modal="true" aria-label="{ liquid.t('general.search.search') }">
            <div class="modal-overlay"></div>
            <div class="search-modal__content" class:search-modal__content-top="{ settings.inputs_shadow_vertical_offset != 0 && settings.inputs_shadow_vertical_offset < 0 }" class:search-modal__content-bottom="{ settings.inputs_shadow_vertical_offset == 0 || settings.inputs_shadow_vertical_offset > 0 }" tabindex="-1">
                <predictive-search class="search-modal__form" data-loading-text="{ liquid.t('accessibility.loading') }">
                <form action="{ routes.search_url }" method="get" role="search" class="search search-modal__form">
                  <div class="field">
                    {#if settings.predictive_search_enabled }
                    <input class="search__input field__input"
                      id="Search-In-Modal-1"
                      type="search"
                      name="q"
                      value=""
                      placeholder="{ liquid.t('general.search.search') }"
                        role="combobox"
                        aria-expanded="false"
                        aria-owns="predictive-search-results-list"
                        aria-controls="predictive-search-results-list"
                        aria-haspopup="listbox"
                        aria-autocomplete="list"
                        autocorrect="off"
                        autocomplete="off"
                        autocapitalize="off"
                        spellcheck="false"
                        >
                        {:else}
                        <input class="search__input field__input"
                          id="Search-In-Modal-1"
                          type="search"
                          name="q"
                          value=""
                          placeholder="{ liquid.t('general.search.search') }"
                            >
                        {/if}
                    <label class="field__label" for="Search-In-Modal-1">{ liquid.t('general.search.search') }</label>
                    <input type="hidden" name="options[prefix]" value="last">
                    <button class="search__button field__button" aria-label="{ liquid.t('general.search.search') }">
                      <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                        <use href="#icon-search">
                      </svg>
                    </button>
                  </div>

                  {#if settings.predictive_search_enabled }
                    <div class="predictive-search predictive-search--header" tabindex="-1" data-predictive-search>
                      <div class="predictive-search__loading-state">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                          <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                        </svg>
                      </div>
                    </div>

                    <span class="predictive-search-status visually-hidden" role="status" aria-hidden="true"></span>
                  {/if}
                </form>
                </predictive-search>
              <button type="button" class="modal__close-button link link--text focus-inset" aria-label="{ liquid.t('accessibility.close') }">
                <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                  <use href="#icon-close">
                </svg>
              </button>
            </div>
          </div>
        </details>
      </details-modal>
    {/if}

    {#if section.settings.logo_position != 'middle-center' }
      {#if request.page_type == 'index' }
        <h1 class="header__heading">
          <a href="{ routes.root_url }" class="header__heading-link link link--text focus-inset">
            {#if section.settings.logo != '' }
              {@html logo_html || ''}
            {:else}
              <span class="h2">{ shop.name }</span>
            {/if}
          </a>
        </h1>
      {:else}
        <a href="{ routes.root_url }" class="header__heading-link link link--text focus-inset">
          {#if section.settings.logo != '' }
            {@html logo_html || ''}
          {:else}
            <span class="h2">{ shop.name }</span>
          {/if}
        </a>
      {/if}
    {/if}

    {#if section.settings.menu != '' }
      {#if section.settings.menu_type_desktop == 'dropdown' }
        <nav class="header__inline-menu">
          <ul class="list-menu list-menu--inline" role="list">
            {#each k in section.settings.menu.links as l, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in section.settings.menu.links).length - 1,
  rindex: (k in section.settings.menu.links).length - index,
  rindex0: (k in section.settings.menu.links).length - index - 1,
  length: (k in section.settings.menu.links).length,
} }
              <li>
                {#if link.links != '' }
                  <header-menu>
                    <details id="Details-HeaderMenu-{ forloop.index }">
                      <summary class="header__menu-item list-menu__item link focus-inset">
                        <span class:header__active-menu-item="{ link.child_active }">{ liquid.escape(link.title) }</span>
                        {@html rawinclude_5513f9e2[index || 0]}
                      </summary>
                      <ul id="HeaderMenu-MenuList-{ forloop.index }" class="header__submenu list-menu list-menu--disclosure gradient caption-large motion-reduce global-settings-popup" role="list" tabindex="-1">
                        {#each k in link.links as childl, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in link.links).length - 1,
  rindex: (k in link.links).length - index,
  rindex0: (k in link.links).length - index - 1,
  length: (k in link.links).length,
} }
                          <li>
                            {#if childlink.links == '' }
                              <a href="{ childlink.url }" class="header__menu-item list-menu__item link link--text focus-inset caption-large" class:list-menu__item--active="{ childlink.current }">
                                { liquid.escape(childlink.title) }
                              </a>
                            {:else}
                              <details id="Details-HeaderSubMenu-{ forloop.index }">
                                <summary class="header__menu-item link link--text list-menu__item focus-inset caption-large">
                                  <span>{ liquid.escape(childlink.title) }</span>
                                  {@html rawinclude_5513f9e2[index || 0]}
                                </summary>
                                <ul id="HeaderMenu-SubMenuList-{ forloop.index }" class="header__submenu list-menu motion-reduce">
                                  {#each k in childlink.links as grandchildl, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in childlink.links).length - 1,
  rindex: (k in childlink.links).length - index,
  rindex0: (k in childlink.links).length - index - 1,
  length: (k in childlink.links).length,
} }
                                    <li>
                                      <a href="{ grandchildlink.url }" class="header__menu-item list-menu__item link link--text focus-inset caption-large" class:list-menu__item--active="{ grandchildlink.current }" >
                                        { liquid.escape(grandchildlink.title) }
                                      </a>
                                    </li>
                                  {/each}
                                </ul>
                              </details>
                            {/if}
                          </li>
                        {/each}
                      </ul>
                    </details>
                  </header-menu>
                {:else}
                  <a href="{ link.url }" class="header__menu-item list-menu__item link link--text focus-inset">
                    <span class:header__active-menu-item="{ link.current }">{ liquid.escape(link.title) }</span>
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </nav>
      {:else}
        <nav class="header__inline-menu">
          <ul class="list-menu list-menu--inline" role="list">
            {#each k in section.settings.menu.links as l, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in section.settings.menu.links).length - 1,
  rindex: (k in section.settings.menu.links).length - index,
  rindex0: (k in section.settings.menu.links).length - index - 1,
  length: (k in section.settings.menu.links).length,
} }
              <li>
                {#if link.links != '' }
                  <header-menu>
                    <details id="Details-HeaderMenu-{ forloop.index }" class="mega-menu">
                      <summary class="header__menu-item list-menu__item link focus-inset">
                        <span class:header__active-menu-item="{ link.child_active }">{ liquid.escape(link.title) }</span>
                        {@html rawinclude_5513f9e2[index || 0]}
                      </summary>
                      <div id="MegaMenu-Content-{ forloop.index }" class="mega-menu__content gradient motion-reduce global-settings-popup" tabindex="-1">
                        <ul class="mega-menu__list page-width" class:mega-menu__list--condensed="{ link.levels == 1 }" role="list">
                          {#each k in link.links as childl, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in link.links).length - 1,
  rindex: (k in link.links).length - index,
  rindex0: (k in link.links).length - index - 1,
  length: (k in link.links).length,
} }
                            <li>
                              <a href="{ childlink.url }" class="mega-menu__link mega-menu__link--level-2 link" class:mega-menu__link--active="{ childlink.current }">
                                { liquid.escape(childlink.title) }
                              </a>
                              {#if childlink.links != '' }
                                <ul class="list-unstyled" role="list">
                                  {#each k in childlink.links as grandchildl, index  }
{@const forloop = {
  first: index === 0,
  index: index + 1,
  index0: index,
  last: index === (k in childlink.links).length - 1,
  rindex: (k in childlink.links).length - index,
  rindex0: (k in childlink.links).length - index - 1,
  length: (k in childlink.links).length,
} }
                                    <li> 
                                      <a href="{ grandchildlink.url }" class="mega-menu__link link" class:mega-menu__link--active="{ grandchildlink.current }">
                                        { liquid.escape(grandchildlink.title) }
                                      </a>
                                    </li>
                                  {/each}
                                </ul>
                              {/if}
                            </li>
                          {/each}
                        </ul>
                      </div>
                    </details>
                  </header-menu>
                {:else}
                  <a href="{ link.url }" class="header__menu-item list-menu__item link link--text focus-inset" >
                    <span class:header__active-menu-item="{ link.current }">{ liquid.escape(link.title) }</span>
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </nav>
      {/if}
    {/if}

    {#if section.settings.logo_position == 'middle-center' }
      {#if request.page_type == 'index' }
        <h1 class="header__heading">
          <a href="{ routes.root_url }" class="header__heading-link link link--text focus-inset">
            {#if section.settings.logo != '' }
             {@html logo_html || ''}
            {:else}
              <span class="h2">{ shop.name }</span>
            {/if}
          </a>
        </h1>
      {:else}
        <a href="{ routes.root_url }" class="header__heading-link link link--text focus-inset">
          {#if section.settings.logo != '' }
           {@html logo_html || ''}
          {:else}
            <span class="h2">{ shop.name }</span>
          {/if}
        </a>
      {/if}
    {/if}

    <div class="header__icons">
      <details-modal class="header__search">
        <details>
          <summary class="header__icon header__icon--search header__icon--summary link focus-inset modal__toggle" aria-haspopup="dialog" aria-label="{ liquid.t('general.search.search') }">
            <span>
              <svg class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-search">
              </svg>
              <svg class="modal__toggle-close icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-close">
              </svg>
            </span>
          </summary>
          <div class="search-modal modal__content gradient" role="dialog" aria-modal="true" aria-label="{ liquid.t('general.search.search') }">
            <div class="modal-overlay"></div>
            <div class="search-modal__content" class:search-modal__content-top="{ settings.inputs_shadow_vertical_offset != 0 && settings.inputs_shadow_vertical_offset < 0 }" class:search-modal__content-bottom="{ settings.inputs_shadow_vertical_offset == 0 || settings.inputs_shadow_vertical_offset > 0 }" tabindex="-1">
                <predictive-search class="search-modal__form" >
                <form action="{ routes.search_url }" method="get" role="search" class="search search-modal__form">
                  <div class="field">
                      {#if settings.predictive_search_enabled }
                        <input class="search__input field__input"
                          id="Search-In-Modal"
                          type="search"
                          name="q"
                          value=""
                          placeholder="{ liquid.t('general.search.search') }"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="predictive-search-results-list"
                          aria-controls="predictive-search-results-list"
                          aria-haspopup="listbox"
                          aria-autocomplete="list"
                          autocorrect="off"
                          autocomplete="off"
                          autocapitalize="off"
                          spellcheck="false"
                          >
                        {:else}
                          <input class="search__input field__input"
                            id="Search-In-Modal"
                            type="search"
                            name="q"
                            value=""
                            placeholder="{ liquid.t('general.search.search') }"
                            >
                        
                      {/if}
                    <label class="field__label" for="Search-In-Modal">{ liquid.t('general.search.search') }</label>
                    <input type="hidden" name="options[prefix]" value="last">
                    <button class="search__button field__button" aria-label="{ liquid.t('general.search.search') }">
                      <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                        <use href="#icon-search">
                      </svg>
                    </button>
                  </div>

                  {#if settings.predictive_search_enabled }
                    <div class="predictive-search predictive-search--header" tabindex="-1" data-predictive-search>
                      <div class="predictive-search__loading-state">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                          <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                        </svg>
                      </div>
                    </div>

                    <span class="predictive-search-status visually-hidden" role="status" aria-hidden="true"></span>
                  {/if}
                </form>
                </predictive-search>
              <button type="button" class="search-modal__close-button modal__close-button link link--text focus-inset" aria-label="{ liquid.t('accessibility.close') }">
                <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                  <use href="#icon-close">
                </svg>
              </button>
            </div>
          </div>
        </details>
      </details-modal>

      {#if shop.customer_accounts_enabled }
        <a href="{ account_url }" class="header__icon header__icon--account link focus-inset" class:small-hide="{ section.settings.menu != '' }">
          {@html rawinclude_2041cdf9[index || 0]}
          <span class="visually-hidden">
            { account_text }
          </span>
        </a>
      {/if}

      <a href="{ routes.cart_url }" class="header__icon header__icon--cart link focus-inset" id="cart-icon-bubble">
          {#if cart.items.length == 0 }
            {@html rawinclude_18d5c954[index || 0]}
          {:else}
            {@html rawinclude_53f2ac54[index || 0]}
          {/if}
        <span class="visually-hidden">{ liquid.t('templates.cart.cart') }</span>
        {#if cart.items.length > 0 }
          <div class="cart-count-bubble">
            {#if cart.item_count < 100 }
              <span aria-hidden="true">{ cart.item_count }</span>
            {/if}
            <span class="visually-hidden">{ liquid.t('sections.header.cart_count', count, cart.item_count) }</span>
          </div>
        {/if}
      </a>
    </div>
  </header>
</div>

{#if settings.cart_type == "notification" }
  {@html rawinclude_679e0e24[index || 0]}
{/if}

{@html rawinclude_3be65912[index || 0]}

{#if request.page_type == 'index' }
  {@html rawinclude_602baf9d[index || 0]}
{/if}




