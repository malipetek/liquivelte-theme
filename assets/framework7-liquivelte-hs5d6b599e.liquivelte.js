import { onMount, onDestroy, SvelteComponent, init, safe_not_equal, space, empty, claim_space, insert_hydration, transition_in, group_outros, transition_out, check_outros, detach, create_component, claim_component, mount_component, destroy_component, getContext, setContext, beforeUpdate } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { Popup } from './framework7-liquivelte-popup-hs8daa1a0c.liquivelte.js';
import { View } from './framework7-liquivelte-view-hs8daa1a0c.liquivelte.js';
import { Login_screen } from './framework7-liquivelte-login-screen-hs8daa1a0c.liquivelte.js';
import { Sheet } from './framework7-liquivelte-sheet-hs8daa1a0c.liquivelte.js';
import { Popover } from './framework7-liquivelte-popover-hs8daa1a0c.liquivelte.js';
import { Panel } from './framework7-liquivelte-panel-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';

function noUndefinedProps(obj) {
  const o = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== 'undefined') o[key] = obj[key];
  });
  return o;
}
function isStringProp(val) {
  return typeof val === 'string' && val !== '';
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}
function now() {
  return Date.now();
}
function extend() {
  let deep = true;
  let to;
  let from;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof args[0] === 'boolean') {
    [deep, to] = args;
    args.splice(0, 2);
    from = args;
  } else {
    [to] = args;
    args.splice(0, 1);
    from = args;
  }
  for (let i = 0; i < from.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null) {
      const keysArray = Object.keys(Object(nextSource));
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (!deep) {
            to[nextKey] = nextSource[nextKey];
          } else if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function classNames() {
  const classes = [];
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  args.forEach(arg => {
    if (typeof arg === 'object' && arg.constructor === Object) {
      Object.keys(arg).forEach(key => {
        if (arg[key]) classes.push(key);
      });
    } else if (arg) classes.push(arg);
  });
  const uniqueClasses = [];
  classes.forEach(c => {
    if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c);
  });
  return uniqueClasses.join(' ');
}
function createEmitter(createEventDispatcher, props) {
  const dispatch = createEventDispatcher();
  const emit = (events, argsArray) => {
    if (!events || !events.trim().length || typeof events !== 'string') return;
    events.trim().split(' ').forEach(event => {
      const eventName = (event || '').trim();
      if (!eventName) return;
      const propName = `on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`;
      dispatch(eventName, argsArray);
      if (typeof props[propName] === 'function') {
        if (!Array.isArray(argsArray)) props[propName](...[argsArray]);else props[propName](...(argsArray || []));
      }
    });
  };
  return emit;
}
let routerIdCounter = 0;
let routerComponentIdCounter = 0;
function unsetRouterIds() {
  routerIdCounter = 0;
  routerComponentIdCounter = 0;
}
function getRouterId() {
  routerIdCounter += 1;
  return `${now()}_${routerIdCounter}`;
}
function getComponentId() {
  routerComponentIdCounter += 1;
  return `${now()}_${routerComponentIdCounter}`;
}
function plainText(text) {
  if (typeof text === 'undefined' || text === null) return '';
  return text;
}

/* eslint-disable import/no-mutable-exports */
let f7;

/* eslint-disable no-restricted-globals */
const app = typeof window !== 'undefined' && window.Framework7ComponentsApp ? window.Framework7ComponentsApp : {
  Framework7: undefined,
  f7: undefined,
  f7events: undefined,
  theme: {},
  f7routers: {
    views: [],
    tabs: [],
    modals: null
  }
};
if (typeof window !== 'undefined') {
  window.Framework7ComponentsApp = app;
}
/* eslint-enable no-restricted-globals */

app.setInstance = instance => {
  f7 = instance;
};
const setTheme = () => {
  if (!app.f7) return;
  app.theme.ios = app.f7.theme === 'ios';
  app.f7.theme === 'ios';
  app.theme.md = app.f7.theme === 'md';
  app.f7.theme === 'md';
  app.theme.aurora = app.f7.theme === 'aurora';
  app.f7.theme === 'aurora';
};
const cleanup = () => {
  unsetRouterIds();
  delete app.theme.ios;
  delete app.theme.md;
  delete app.theme.aurora;
  app.f7routers.views = [];
  app.f7routers.tabs = [];
  app.f7routers.modals = null;
};
const f7initEvents = () => {
  app.f7events = new app.Framework7.Events();
};
const f7init = function (rootEl, params, init) {
  if (params === void 0) {
    params = {};
  }
  if (init === void 0) {
    init = true;
  }
  const f7Params = extend({}, params, {
    el: rootEl,
    init
  });
  if (typeof params.store !== 'undefined') f7Params.store = params.store;
  if (!f7Params.routes) f7Params.routes = [];
  if (f7Params.userAgent && (f7Params.theme === 'auto' || !f7Params.theme)) {
    const device = app.Framework7.getDevice({
      userAgent: f7Params.userAgent
    }, true);
    app.theme.ios = !!device.ios;
    app.theme.aurora = device.desktop && device.electron;
    app.theme.md = !app.theme.ios && !app.theme.aurora;
  }
  // eslint-disable-next-line
  if (app.f7 && typeof window !== 'undefined') return;

  // eslint-disable-next-line
  if (typeof window === 'undefined') cleanup();
  const instance = new app.Framework7(f7Params);
  app.f7 = instance;
  f7 = instance;
  app.setInstance(instance);
  setTheme();
  if (instance.initialized) {
    app.f7 = instance;
    f7 = instance;
    app.setInstance(instance);
    app.f7events.emit('ready', app.f7);
  } else {
    instance.on('init', () => {
      app.f7 = instance;
      f7 = instance;
      app.setInstance(instance);
      app.f7events.emit('ready', app.f7);
    });
  }
};
const f7ready = callback => {
  if (!callback) return;
  if (app.f7 && app.f7.initialized) callback(app.f7);else {
    app.f7events.once('ready', callback);
  }
};

function colorClasses(props) {
  const {
    color,
    colorTheme,
    textColor,
    bgColor,
    borderColor,
    rippleColor,
    dark
  } = props;
  return {
    dark,
    [`color-${color}`]: color,
    [`color-theme-${colorTheme}`]: colorTheme,
    [`text-color-${textColor}`]: textColor,
    [`bg-color-${bgColor}`]: bgColor,
    [`border-color-${borderColor}`]: borderColor,
    [`ripple-color-${rippleColor}`]: rippleColor
  };
}
function routerAttrs(props) {
  const {
    force,
    reloadCurrent,
    reloadPrevious,
    reloadAll,
    reloadDetail,
    animate,
    ignoreCache,
    routeTabId,
    view,
    transition,
    openIn
  } = props;
  let dataAnimate;
  if ('animate' in props && typeof animate !== 'undefined') {
    dataAnimate = animate.toString();
  }
  let dataReloadDetail;
  if ('reloadDetail' in props && typeof reloadDetail !== 'undefined') {
    dataReloadDetail = reloadDetail.toString();
  }
  return {
    'data-force': force || undefined,
    'data-reload-current': reloadCurrent || undefined,
    'data-reload-all': reloadAll || undefined,
    'data-reload-previous': reloadPrevious || undefined,
    'data-reload-detail': dataReloadDetail,
    'data-animate': dataAnimate,
    'data-ignore-cache': ignoreCache || undefined,
    'data-route-tab-id': routeTabId || undefined,
    'data-view': isStringProp(view) ? view : undefined,
    'data-transition': isStringProp(transition) ? transition : undefined,
    'data-open-in': isStringProp(openIn) ? openIn : undefined
  };
}
function routerClasses(props) {
  const {
    back,
    linkBack,
    external,
    preventRouter
  } = props;
  return {
    back: back || linkBack,
    external,
    'prevent-router': preventRouter
  };
}
function actionsAttrs(props) {
  const {
    searchbarEnable,
    searchbarDisable,
    searchbarClear,
    searchbarToggle,
    panelOpen,
    panelClose,
    panelToggle,
    popupOpen,
    popupClose,
    actionsOpen,
    actionsClose,
    popoverOpen,
    popoverClose,
    loginScreenOpen,
    loginScreenClose,
    sheetOpen,
    sheetClose,
    sortableEnable,
    sortableDisable,
    sortableToggle,
    cardOpen,
    cardClose
  } = props;
  return {
    'data-searchbar': isStringProp(searchbarEnable) && searchbarEnable || isStringProp(searchbarDisable) && searchbarDisable || isStringProp(searchbarClear) && searchbarClear || isStringProp(searchbarToggle) && searchbarToggle || undefined,
    'data-panel': isStringProp(panelOpen) && panelOpen || isStringProp(panelClose) && panelClose || isStringProp(panelToggle) && panelToggle || undefined,
    'data-popup': isStringProp(popupOpen) && popupOpen || isStringProp(popupClose) && popupClose || undefined,
    'data-actions': isStringProp(actionsOpen) && actionsOpen || isStringProp(actionsClose) && actionsClose || undefined,
    'data-popover': isStringProp(popoverOpen) && popoverOpen || isStringProp(popoverClose) && popoverClose || undefined,
    'data-sheet': isStringProp(sheetOpen) && sheetOpen || isStringProp(sheetClose) && sheetClose || undefined,
    'data-login-screen': isStringProp(loginScreenOpen) && loginScreenOpen || isStringProp(loginScreenClose) && loginScreenClose || undefined,
    'data-sortable': isStringProp(sortableEnable) && sortableEnable || isStringProp(sortableDisable) && sortableDisable || isStringProp(sortableToggle) && sortableToggle || undefined,
    'data-card': isStringProp(cardOpen) && cardOpen || isStringProp(cardClose) && cardClose || undefined
  };
}
function actionsClasses(props) {
  const {
    searchbarEnable,
    searchbarDisable,
    searchbarClear,
    searchbarToggle,
    panelOpen,
    panelClose,
    panelToggle,
    popupOpen,
    popupClose,
    actionsClose,
    actionsOpen,
    popoverOpen,
    popoverClose,
    loginScreenOpen,
    loginScreenClose,
    sheetOpen,
    sheetClose,
    sortableEnable,
    sortableDisable,
    sortableToggle,
    cardOpen,
    cardPreventOpen,
    cardClose,
    menuClose
  } = props;
  return {
    'searchbar-enable': searchbarEnable || searchbarEnable === '',
    'searchbar-disable': searchbarDisable || searchbarDisable === '',
    'searchbar-clear': searchbarClear || searchbarClear === '',
    'searchbar-toggle': searchbarToggle || searchbarToggle === '',
    'panel-close': panelClose || panelClose === '',
    'panel-open': panelOpen || panelOpen === '',
    'panel-toggle': panelToggle || panelToggle === '',
    'popup-close': popupClose || popupClose === '',
    'popup-open': popupOpen || popupOpen === '',
    'actions-close': actionsClose || actionsClose === '',
    'actions-open': actionsOpen || actionsOpen === '',
    'popover-close': popoverClose || popoverClose === '',
    'popover-open': popoverOpen || popoverOpen === '',
    'sheet-close': sheetClose || sheetClose === '',
    'sheet-open': sheetOpen || sheetOpen === '',
    'login-screen-close': loginScreenClose || loginScreenClose === '',
    'login-screen-open': loginScreenOpen || loginScreenOpen === '',
    'sortable-enable': sortableEnable || sortableEnable === '',
    'sortable-disable': sortableDisable || sortableDisable === '',
    'sortable-toggle': sortableToggle || sortableToggle === '',
    'card-close': cardClose || cardClose === '',
    'card-open': cardOpen || cardOpen === '',
    'card-prevent-open': cardPreventOpen || cardPreventOpen === '',
    'menu-close': menuClose || menuClose === ''
  };
}

const ignoreProps = ['color', 'colorTheme', 'textColor', 'bgColor', 'borderColor', 'rippleColor', 'dark', 'force', 'reloadCurrent', 'reloadPrevious', 'reloadAll', 'reloadDetail', 'animate', 'ignoreCache', 'routeTabId', 'view', 'transition', 'openIn', 'back', 'linkBack', 'external', 'preventRouter', 'searchbarEnable', 'searchbarDisable', 'searchbarClear', 'searchbarToggle', 'panelOpen', 'panelClose', 'panelToggle', 'popupOpen', 'popupClose', 'actionsOpen', 'actionsClose', 'popoverOpen', 'popoverClose', 'loginScreenOpen', 'loginScreenClose', 'sheetOpen', 'sheetClose', 'sortableEnable', 'sortableDisable', 'sortableToggle', 'cardOpen', 'cardClose'];
function restProps(rest) {
  if (rest === void 0) {
    rest = {};
  }
  const props = {};
  Object.keys(rest).filter(prop => !ignoreProps.includes(prop)).forEach(key => {
    if (key.indexOf('on') !== 0) {
      props[key] = rest[key];
    }
  });
  return props;
}

const modalStateClasses = function (_temp) {
  let {
    isOpened,
    isClosing
  } = _temp === void 0 ? {} : _temp;
  return {
    'modal-in': isOpened && !isClosing,
    'modal-out': isClosing
  };
};

const getRouterInitialComponent = (router, initialComponent) => {
  let initialComponentData;
  const {
    initialUrl
  } = router.getInitialUrl();
  const initialRoute = router.findMatchingRoute(initialUrl);
  let routeProps = {};
  if (initialRoute && initialRoute.route && initialRoute.route.options) {
    routeProps = initialRoute.route.options.props;
  }
  const isMasterRoute = route => {
    if (route.master === true) return true;
    if (typeof route.master === 'function') return route.master(router.app);
    return false;
  };
  if (initialRoute && initialRoute.route && (initialRoute.route.component || initialRoute.route.asyncComponent) && !isMasterRoute(initialRoute.route)) {
    initialComponentData = {
      component: initialRoute.route.component || initialRoute.route.asyncComponent,
      initialComponent,
      id: getComponentId(),
      isAsync: !!initialRoute.route.asyncComponent,
      props: {
        f7route: initialRoute,
        f7router: router,
        ...initialRoute.params,
        ...routeProps
      }
    };
  }
  return {
    initialPage: initialComponentData,
    initialRoute
  };
};

// eslint-disable-next-line
const useTab = (getEl, emit) => {
  const onTabShow = el => {
    if (getEl() !== el) return;
    emit('tabShow', [el]);
  };
  const onTabHide = el => {
    if (getEl() !== el) return;
    emit('tabHide', [el]);
  };
  const attachEvents = () => {
    if (!getEl()) return;
    f7ready(() => {
      f7.on('tabShow', onTabShow);
      f7.on('tabHide', onTabHide);
    });
  };
  const detachEvents = () => {
    if (!f7) return;
    f7.off('tabShow', onTabShow);
    f7.off('tabHide', onTabHide);
  };
  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents();
  });
};

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-liquivelte/shared/router-open-in-component.liquivelte generated by Svelte v3.50.0 */

function create_if_block_4(ctx) {
	let popup;
	let current;

	popup = new Popup({
			props: {
				className: "popup-router-open-in",
				"data-url": /*url*/ ctx[2],
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(popup.$$.fragment);
		},
		l(nodes) {
			claim_component(popup.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(popup, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const popup_changes = {};
			if (dirty & /*url*/ 4) popup_changes["data-url"] = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) popup_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, viewSelector, url, lec*/ 269) {
				popup_changes.$$scope = { dirty, ctx };
			}

			popup.$set(popup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(popup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(popup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(popup, detaching);
		}
	};
}

// (23:2) <Popup  className="popup-router-open-in" data-url={url}     lec={lec} >
function create_default_slot_4(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				linksView: /*viewSelector*/ ctx[3],
				url: /*url*/ ctx[2],
				ignoreOpenIn: true,
				lec: /*lec*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};
			if (dirty & /*viewSelector*/ 8) view_changes.linksView = /*viewSelector*/ ctx[3];
			if (dirty & /*url*/ 4) view_changes.url = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) view_changes.lec = /*lec*/ ctx[0];
			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

// (27:0) {#if openIn === 'loginScreen' }
function create_if_block_3(ctx) {
	let loginscreen;
	let current;

	loginscreen = new Login_screen({
			props: {
				className: "login-screen-router-open-in",
				"data-url": /*url*/ ctx[2],
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(loginscreen.$$.fragment);
		},
		l(nodes) {
			claim_component(loginscreen.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(loginscreen, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const loginscreen_changes = {};
			if (dirty & /*url*/ 4) loginscreen_changes["data-url"] = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) loginscreen_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, viewSelector, url, lec*/ 269) {
				loginscreen_changes.$$scope = { dirty, ctx };
			}

			loginscreen.$set(loginscreen_changes);
		},
		i(local) {
			if (current) return;
			transition_in(loginscreen.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(loginscreen.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(loginscreen, detaching);
		}
	};
}

// (28:2) <LoginScreen  className="login-screen-router-open-in" data-url={url}     lec={lec} >
function create_default_slot_3(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				linksView: /*viewSelector*/ ctx[3],
				url: /*url*/ ctx[2],
				ignoreOpenIn: true,
				lec: /*lec*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};
			if (dirty & /*viewSelector*/ 8) view_changes.linksView = /*viewSelector*/ ctx[3];
			if (dirty & /*url*/ 4) view_changes.url = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) view_changes.lec = /*lec*/ ctx[0];
			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

// (32:0) {#if openIn === 'sheet' }
function create_if_block_2(ctx) {
	let sheet;
	let current;

	sheet = new Sheet({
			props: {
				className: "sheet-modal-router-open-in",
				"data-url": /*url*/ ctx[2],
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(sheet.$$.fragment);
		},
		l(nodes) {
			claim_component(sheet.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(sheet, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const sheet_changes = {};
			if (dirty & /*url*/ 4) sheet_changes["data-url"] = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) sheet_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, viewSelector, url, lec*/ 269) {
				sheet_changes.$$scope = { dirty, ctx };
			}

			sheet.$set(sheet_changes);
		},
		i(local) {
			if (current) return;
			transition_in(sheet.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(sheet.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(sheet, detaching);
		}
	};
}

// (33:2) <Sheet  className="sheet-modal-router-open-in" data-url={url}     lec={lec} >
function create_default_slot_2(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				linksView: /*viewSelector*/ ctx[3],
				url: /*url*/ ctx[2],
				ignoreOpenIn: true,
				lec: /*lec*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};
			if (dirty & /*viewSelector*/ 8) view_changes.linksView = /*viewSelector*/ ctx[3];
			if (dirty & /*url*/ 4) view_changes.url = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) view_changes.lec = /*lec*/ ctx[0];
			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

// (37:0) {#if openIn === 'popover' }
function create_if_block_1(ctx) {
	let popover;
	let current;

	popover = new Popover({
			props: {
				className: "popover-router-open-in",
				targetEl: /*targetEl*/ ctx[4],
				"data-url": /*url*/ ctx[2],
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(popover.$$.fragment);
		},
		l(nodes) {
			claim_component(popover.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(popover, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const popover_changes = {};
			if (dirty & /*targetEl*/ 16) popover_changes.targetEl = /*targetEl*/ ctx[4];
			if (dirty & /*url*/ 4) popover_changes["data-url"] = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) popover_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, viewSelector, url, lec*/ 269) {
				popover_changes.$$scope = { dirty, ctx };
			}

			popover.$set(popover_changes);
		},
		i(local) {
			if (current) return;
			transition_in(popover.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(popover.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(popover, detaching);
		}
	};
}

// (38:2) <Popover  className="popover-router-open-in" {targetEl} data-url={url}     lec={lec} >
function create_default_slot_1(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				linksView: /*viewSelector*/ ctx[3],
				url: /*url*/ ctx[2],
				ignoreOpenIn: true,
				lec: /*lec*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};
			if (dirty & /*viewSelector*/ 8) view_changes.linksView = /*viewSelector*/ ctx[3];
			if (dirty & /*url*/ 4) view_changes.url = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) view_changes.lec = /*lec*/ ctx[0];
			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

// (42:0) {#if openIn.indexOf('panel') === 0 }
function create_if_block(ctx) {
	let panel;
	let current;

	panel = new Panel({
			props: {
				side: /*side*/ ctx[5],
				effect: /*effect*/ ctx[6],
				className: "panel-router-open-in",
				"data-url": /*url*/ ctx[2],
				lec: /*lec*/ ctx[0],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(panel.$$.fragment);
		},
		l(nodes) {
			claim_component(panel.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(panel, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const panel_changes = {};
			if (dirty & /*side*/ 32) panel_changes.side = /*side*/ ctx[5];
			if (dirty & /*effect*/ 64) panel_changes.effect = /*effect*/ ctx[6];
			if (dirty & /*url*/ 4) panel_changes["data-url"] = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) panel_changes.lec = /*lec*/ ctx[0];

			if (dirty & /*$$scope, viewSelector, url, lec*/ 269) {
				panel_changes.$$scope = { dirty, ctx };
			}

			panel.$set(panel_changes);
		},
		i(local) {
			if (current) return;
			transition_in(panel.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(panel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(panel, detaching);
		}
	};
}

// (43:2) <Panel  {side} {effect} className="panel-router-open-in" data-url={url}     lec={lec} >
function create_default_slot(ctx) {
	let view;
	let current;

	view = new View({
			props: {
				linksView: /*viewSelector*/ ctx[3],
				url: /*url*/ ctx[2],
				ignoreOpenIn: true,
				lec: /*lec*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(view.$$.fragment);
		},
		l(nodes) {
			claim_component(view.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const view_changes = {};
			if (dirty & /*viewSelector*/ 8) view_changes.linksView = /*viewSelector*/ ctx[3];
			if (dirty & /*url*/ 4) view_changes.url = /*url*/ ctx[2];
			if (dirty & /*lec*/ 1) view_changes.lec = /*lec*/ ctx[0];
			view.$set(view_changes);
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;
	let show_if = /*openIn*/ ctx[1].indexOf('panel') === 0;
	let if_block4_anchor;
	let current;
	let if_block0 = /*openIn*/ ctx[1] === 'popup' && create_if_block_4(ctx);
	let if_block1 = /*openIn*/ ctx[1] === 'loginScreen' && create_if_block_3(ctx);
	let if_block2 = /*openIn*/ ctx[1] === 'sheet' && create_if_block_2(ctx);
	let if_block3 = /*openIn*/ ctx[1] === 'popover' && create_if_block_1(ctx);
	let if_block4 = show_if && create_if_block(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			t2 = space();
			if (if_block3) if_block3.c();
			t3 = space();
			if (if_block4) if_block4.c();
			if_block4_anchor = empty();
		},
		l(nodes) {
			if (if_block0) if_block0.l(nodes);
			t0 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			t1 = claim_space(nodes);
			if (if_block2) if_block2.l(nodes);
			t2 = claim_space(nodes);
			if (if_block3) if_block3.l(nodes);
			t3 = claim_space(nodes);
			if (if_block4) if_block4.l(nodes);
			if_block4_anchor = empty();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_hydration(target, t0, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_hydration(target, t1, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert_hydration(target, t2, anchor);
			if (if_block3) if_block3.m(target, anchor);
			insert_hydration(target, t3, anchor);
			if (if_block4) if_block4.m(target, anchor);
			insert_hydration(target, if_block4_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*openIn*/ ctx[1] === 'popup') {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*openIn*/ 2) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*openIn*/ ctx[1] === 'loginScreen') {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*openIn*/ 2) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(t1.parentNode, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*openIn*/ ctx[1] === 'sheet') {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*openIn*/ 2) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_2(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(t2.parentNode, t2);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*openIn*/ ctx[1] === 'popover') {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty & /*openIn*/ 2) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_1(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(t3.parentNode, t3);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			if (dirty & /*openIn*/ 2) show_if = /*openIn*/ ctx[1].indexOf('panel') === 0;

			if (show_if) {
				if (if_block4) {
					if_block4.p(ctx, dirty);

					if (dirty & /*openIn*/ 2) {
						transition_in(if_block4, 1);
					}
				} else {
					if_block4 = create_if_block(ctx);
					if_block4.c();
					transition_in(if_block4, 1);
					if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
				}
			} else if (if_block4) {
				group_outros();

				transition_out(if_block4, 1, 1, () => {
					if_block4 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block3);
			transition_in(if_block4);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block3);
			transition_out(if_block4);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach(t0);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach(t1);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach(t2);
			if (if_block3) if_block3.d(detaching);
			if (detaching) detach(t3);
			if (if_block4) if_block4.d(detaching);
			if (detaching) detach(if_block4_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { lec } = $$props;
	let { openIn } = $$props;
	let { url } = $$props;
	let { viewSelector } = $$props;
	let { targetEl } = $$props;
	let { side } = $$props;
	let { effect } = $$props;

	$$self.$$set = $$props => {
		if ('lec' in $$props) $$invalidate(0, lec = $$props.lec);
		if ('openIn' in $$props) $$invalidate(1, openIn = $$props.openIn);
		if ('url' in $$props) $$invalidate(2, url = $$props.url);
		if ('viewSelector' in $$props) $$invalidate(3, viewSelector = $$props.viewSelector);
		if ('targetEl' in $$props) $$invalidate(4, targetEl = $$props.targetEl);
		if ('side' in $$props) $$invalidate(5, side = $$props.side);
		if ('effect' in $$props) $$invalidate(6, effect = $$props.effect);
	};

	return [lec, openIn, url, viewSelector, targetEl, side, effect];
}

class Router_open_in_component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			lec: 0,
			openIn: 1,
			url: 2,
			viewSelector: 3,
			targetEl: 4,
			side: 5,
			effect: 6
		});
	}
}

const routerOpenIn = (router, url, options) => {
  const navigateOptions = {
    url,
    route: {
      path: url,
      options: {
        ...options,
        openIn: undefined,
        props: {
          ...(options.props || {}),
          url,
          openIn: options.openIn,
          viewSelector: router.view.selector
        }
      }
    }
  };
  const params = {
    ...options
  };
  params.component = Router_open_in_component;
  if (options.openIn === 'popup') {
    navigateOptions.route.popup = params;
  }
  if (options.openIn === 'loginScreen') {
    navigateOptions.route.loginScreen = params;
  }
  if (options.openIn === 'sheet') {
    navigateOptions.route.sheet = params;
  }
  if (options.openIn === 'popover') {
    params.targetEl = options.clickedEl || options.targetEl;
    navigateOptions.route.popover = params;
    navigateOptions.route.options.props.targetEl = params.targetEl;
  }
  if (options.openIn.indexOf('panel') >= 0) {
    const parts = options.openIn.split(':');
    navigateOptions.route.options.props.side = parts[1] || 'left';
    navigateOptions.route.options.props.effect = parts[2] || 'cover';
    navigateOptions.route.panel = params;
  }
  return router.navigate(navigateOptions);
};

/* eslint no-underscore-dangle: "off" */
const getChildrenArray = el => {
  const arr = [];
  for (let i = 0; i < el.children.length; i += 1) {
    arr.push(el.children[i]);
  }
  return arr;
};
const hasSameChildren = (childrenBefore, childrenAfter) => {
  if (childrenBefore.length !== childrenAfter.length) return false;
  const set = new Set([...childrenBefore, ...childrenAfter]);
  if (set.size === childrenBefore.length) return true;
  return false;
};
var componentsRouter = {
  proto: {
    openIn(router, navigateUrl, options) {
      return routerOpenIn(router, navigateUrl, options);
    },
    pageComponentLoader(_ref) {
      let {
        routerEl,
        component,
        options,
        resolve,
        reject
      } = _ref;
      const router = this;
      const routerId = router.id;
      const el = routerEl;
      let viewRouter;
      app.f7routers.views.forEach(data => {
        if (data.el && data.el === routerEl || data.routerId && data.routerId === routerId) {
          viewRouter = data;
        }
      });
      if (!viewRouter) {
        reject();
        return;
      }
      const pageData = {
        component,
        id: getComponentId(),
        props: extend({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };
      let resolved;
      const childrenBefore = getChildrenArray(el);
      function onDidUpdate(componentRouterData) {
        if (componentRouterData !== viewRouter || resolved) return;
        const childrenAfter = getChildrenArray(el);
        if (hasSameChildren(childrenBefore, childrenAfter)) return;
        app.f7events.off('viewRouterDidUpdate', onDidUpdate);
        const pageEl = el.children[el.children.length - 1];
        pageData.el = pageEl;
        resolve(pageEl);
        resolved = true;
      }
      app.f7events.on('viewRouterDidUpdate', onDidUpdate);
      viewRouter.pages.push(pageData);
      viewRouter.setPages(viewRouter.pages);
    },
    removePage($pageEl) {
      if (!$pageEl) return;
      const router = this;
      let f7Page;
      if ('length' in $pageEl && $pageEl[0]) f7Page = $pageEl[0].f7Page;else f7Page = $pageEl.f7Page;
      if (f7Page && f7Page.route && f7Page.route.route && f7Page.route.route.keepAlive) {
        router.app.$($pageEl).remove();
        return;
      }
      let viewRouter;
      app.f7routers.views.forEach(data => {
        if (data.el && data.el === router.el) {
          viewRouter = data;
        }
      });
      let pageEl;
      if ('length' in $pageEl) {
        // Dom7
        if ($pageEl.length === 0) return;
        pageEl = $pageEl[0];
      } else {
        pageEl = $pageEl;
      }
      if (!pageEl) return;
      let pageComponentFound;
      viewRouter.pages.forEach((page, index) => {
        if (page.el === pageEl) {
          pageComponentFound = true;
          viewRouter.pages.splice(index, 1);
          viewRouter.setPages(viewRouter.pages);
        }
      });
      if (!pageComponentFound) {
        pageEl.parentNode.removeChild(pageEl);
      }
    },
    tabComponentLoader(_temp) {
      let {
        tabEl,
        component,
        options,
        resolve,
        reject
      } = _temp === void 0 ? {} : _temp;
      const router = this;
      if (!tabEl) reject();
      let tabRouter;
      app.f7routers.tabs.forEach(tabData => {
        if (tabData.el && tabData.el === tabEl) {
          tabRouter = tabData;
        }
      });
      if (!tabRouter) {
        reject();
        return;
      }
      const id = getComponentId();
      const tabContent = {
        id,
        component,
        props: extend({
          f7route: options.route,
          f7router: router
        }, options.route.route && options.route.route.tab && options.route.route.tab.options && options.route.route.tab.options.props || {}, options.route.params, options.props || {})
      };
      let resolved;
      function onDidUpdate(componentRouterData) {
        if (componentRouterData !== tabRouter || resolved) return;
        app.f7events.off('tabRouterDidUpdate', onDidUpdate);
        const tabContentEl = tabEl.children[0];
        resolve(tabContentEl);
        resolved = true;
      }
      app.f7events.on('tabRouterDidUpdate', onDidUpdate);
      tabRouter.setTabContent(tabContent);
    },
    removeTabContent(tabEl) {
      if (!tabEl) return;
      let tabRouter;
      app.f7routers.tabs.forEach(tabData => {
        if (tabData.el && tabData.el === tabEl) {
          tabRouter = tabData;
        }
      });
      if (!tabRouter) {
        tabEl.innerHTML = ''; // eslint-disable-line
        return;
      }
      tabRouter.setTabContent(null);
    },
    modalComponentLoader(_temp2) {
      let {
        component,
        options,
        resolve,
        reject
      } = _temp2 === void 0 ? {} : _temp2;
      const router = this;
      const modalsRouter = app.f7routers.modals;
      if (!modalsRouter) {
        reject();
        return;
      }
      const modalData = {
        component,
        id: getComponentId(),
        props: extend({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };
      let resolved;
      function onDidUpdate() {
        if (resolved) return;
        app.f7events.off('modalsRouterDidUpdate', onDidUpdate);
        const modalEl = modalsRouter.el.children[modalsRouter.el.children.length - 1];
        modalData.el = modalEl;
        resolve(modalEl);
        resolved = true;
      }
      app.f7events.on('modalsRouterDidUpdate', onDidUpdate);
      modalsRouter.modals.push(modalData);
      modalsRouter.setModals(modalsRouter.modals);
    },
    removeModal(modalEl) {
      const modalsRouter = app.f7routers.modals;
      if (!modalsRouter) return;
      let modalDataToRemove;
      modalsRouter.modals.forEach(modalData => {
        if (modalData.el === modalEl) modalDataToRemove = modalData;
      });
      modalsRouter.modals.splice(modalsRouter.modals.indexOf(modalDataToRemove), 1);
      modalsRouter.setModals(modalsRouter.modals);
    }
  }
};

// eslint-disable-next-line
const Framework7Svelte = {
  name: 'sveltePlugin',
  installed: false,
  install(params) {
    if (params === void 0) {
      params = {};
    }
    const Framework7 = this;
    app.Framework7 = Framework7;
    if (Framework7Svelte.installed) return;
    Framework7Svelte.installed = true;
    f7initEvents();
    const {
      theme: paramsTheme,
      userAgent
    } = params;
    if (paramsTheme === 'md') {
      app.theme.md = true;
    }
    if (paramsTheme === 'ios') {
      app.theme.md = true;
    }
    if (paramsTheme === 'aurora') {
      app.theme.md = true;
    }

    // eslint-disable-next-line
    const needThemeCalc = typeof window === 'undefined' ? !!userAgent : true;
    if (needThemeCalc && (!paramsTheme || paramsTheme === 'auto')) {
      const device = Framework7.getDevice({
        userAgent
      }, true);
      app.theme.ios = !!device.ios;
      app.theme.ios;
      app.theme.aurora = device.desktop && device.electron;
      app.theme.aurora;
      app.theme.md = !app.theme.ios && !app.theme.aurora;
      app.theme.md;
    }
    f7ready(() => {
      setTheme();
    });
    Framework7.Router.use(componentsRouter);
  }
};

const useTooltip = (el, props) => {
  let f7Tooltip = null;
  const {
    tooltip,
    tooltipTrigger
  } = props;
  if (el && tooltip) {
    f7ready(() => {
      f7Tooltip = app.f7.tooltip.create({
        targetEl: el,
        text: tooltip,
        trigger: tooltipTrigger
      });
    });
  }
  return {
    update(_temp) {
      let {
        tooltip: value
      } = _temp === void 0 ? {} : _temp;
      if (!value && f7Tooltip) {
        f7Tooltip.destroy();
        f7Tooltip = null;
        return;
      }
      if (value && !f7Tooltip && app.f7) {
        f7Tooltip = app.f7.tooltip.create({
          targetEl: el,
          text: value,
          trigger: tooltipTrigger
        });
        return;
      }
      if (!value || !f7Tooltip) return;
      f7Tooltip.setText(value);
    },
    destroy() {
      if (f7Tooltip && f7Tooltip.destroy) {
        f7Tooltip.destroy();
        f7Tooltip = null;
      }
    }
  };
};

const useRouteProps = (el, routeProps) => {
  if (el && routeProps) {
    el.f7RouteProps = routeProps;
  }
  return {
    update(newValue) {
      if (el && el.f7RouteProps && !newValue) delete el.f7RouteProps;else if (el && newValue) el.f7RouteProps = newValue;
    },
    destroy() {
      if (el && routeProps) {
        delete el.f7RouteProps;
      }
    }
  };
};

const useIcon = function (props) {
  if (props === void 0) {
    props = {};
  }
  const {
    icon,
    iconMaterial,
    iconF7,
    iconMd,
    iconIos,
    iconAurora,
    iconColor,
    iconSize,
    iconBadge,
    badgeColor,
    iconBadgeColor
  } = props;
  if (icon || iconMaterial || iconF7 || iconMd || iconIos || iconAurora) {
    return {
      props: {
        material: iconMaterial,
        f7: iconF7,
        icon,
        md: iconMd,
        ios: iconIos,
        aurora: iconAurora,
        color: iconColor,
        size: iconSize
      },
      badge: iconBadge || iconBadge === 0 ? {
        props: {
          color: badgeColor || iconBadgeColor
        },
        content: iconBadge
      } : null
    };
  }
  return null;
};

const useTheme = set => {
  const t = app.f7 ? app.theme : null;
  if (!app.f7) {
    f7ready(() => {
      set(app.theme);
    });
  }
  return t;
};

// eslint-disable-next-line
const useSmartSelect = (props, setInstance, getEl) => {
  let f7SmartSelect;
  onMount(() => {
    f7ready(() => {
      if (props.smartSelect) {
        const ssParams = extend({
          el: getEl()
        }, props.smartSelectParams || {});
        f7SmartSelect = app.f7.smartSelect.create(ssParams);
        setInstance(f7SmartSelect);
      }
    });
  });
  onDestroy(() => {
    if (f7SmartSelect && f7SmartSelect.destroy) {
      f7SmartSelect.destroy();
    }
    f7SmartSelect = null;
    setInstance(f7SmartSelect);
  });
};

// eslint-disable-next-line
const getReactiveContext = (name, setValue) => {
  const ctx = getContext(name);
  if (!ctx) return undefined;
  const {
    value,
    subscribe,
    unsubscribe
  } = ctx;
  subscribe(setValue);
  onDestroy(() => {
    unsubscribe(setValue);
  });
  return value;
};

// eslint-disable-next-line
const setReactiveContext = (name, getValue) => {
  const contextCallbacks = [];
  const contextSubscribe = callback => {
    contextCallbacks.push(callback);
  };
  const contextUnsubscribe = callback => {
    if (contextCallbacks.indexOf(callback) >= 0) {
      contextCallbacks.splice(contextCallbacks.indexOf, callback);
    }
  };
  const contextRunCallbacks = () => {
    contextCallbacks.forEach(callback => {
      callback(getValue());
    });
  };
  setContext(name, {
    value: getValue(),
    subscribe: contextSubscribe,
    unsubscribe: contextUnsubscribe
  });
  beforeUpdate(() => {
    contextRunCallbacks();
  });
};

/**
 * Framework7 Liquivelte 7.0.9
 * Build full featured iOS & Android apps using Framework7 & Svelte
 * https://framework7.io/svelte/
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 18, 2022
 */

export { Framework7Svelte, actionsAttrs, actionsClasses, app, classNames, colorClasses, createEmitter, extend, f7init, f7ready, getReactiveContext, getRouterId, getRouterInitialComponent, isStringProp, modalStateClasses, noUndefinedProps, plainText, restProps, routerAttrs, routerClasses, setReactiveContext, useIcon, useRouteProps, useSmartSelect, useTab, useTheme, useTooltip };
