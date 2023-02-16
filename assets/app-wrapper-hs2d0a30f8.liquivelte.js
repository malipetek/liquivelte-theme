import { SvelteComponent, init, safe_not_equal, create_component, claim_component, mount_component, transition_in, transition_out, destroy_component, getContext, beforeUpdate, assign, exclude_internal_props, create_slot, element, space, claim_element, children, detach, claim_space, attr, insert_hydration, append_hydration, action_destroyer, update_slot_base, get_all_dirty_from_scope, get_slot_changes, run_all, onMount, noop, group_outros, check_outros, empty, text, claim_text, set_data } from './liquivelte-svelte-hs532e1aa9.liquivelte.js';
import { f7ready, f7 } from './framework7-liquivelte-hsa0091f48.liquivelte.js';
import { View } from './framework7-liquivelte-view-hs8daa1a0c.liquivelte.js';
import { App } from './framework7-liquivelte-app-hs8daa1a0c.liquivelte.js';
import { Badge } from './framework7-liquivelte-badge-hs8daa1a0c.liquivelte.js';
import { Link } from './framework7-liquivelte-link-hs8daa1a0c.liquivelte.js';
import { Navbar } from './framework7-liquivelte-navbar-hs8daa1a0c.liquivelte.js';
import { Page } from './framework7-liquivelte-page-hs8daa1a0c.liquivelte.js';
import { Searchbar } from './framework7-liquivelte-searchbar-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';
import { Toolbar } from './framework7-liquivelte-toolbar-hs8daa1a0c.liquivelte.js';
import { Icon } from './header-hs09f16584.liquivelte.js';
import { cartStore } from './store.js-hs6c336c77.liquivelte.js';
import './framework7-liquivelte-popup-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-login-screen-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-sheet-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-popover-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-panel-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-routable-modals-hs8daa1a0c.liquivelte.js';
import './liquivelte-liquid-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-use-icon-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-icon-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-nav-left-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-nav-title-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-nav-right-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-page-content-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-preloader-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-utils-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-params-list-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-list-item-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-list-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-accordion-content-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-block-title-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-block-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-button-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-col-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-row-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-stepper-hs8daa1a0c.liquivelte.js';
import './framework7-liquivelte-appbar-hs8daa1a0c.liquivelte.js';

var src = {exports: {}};

(function (module) {
var colorList = {
  // modifier
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  // color
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],
  // Bright color
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  // bgColor
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  // bgColor - legacy styles
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],
  // Bright bgColor
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49],
};
if (typeof process === 'undefined' || !process.env) { var process = { env: {}, argv: ['--color'] }; }
var isDisabled = process.env.NO_COLOR || process.argv.includes('--no-color');
var isSupported = !isDisabled && (process.env.FORCE_COLOR ||
  process.platform === 'win32' ||
  process.argv.includes('--color') ||
  (eval(`require('tty')`).isatty(1) && process.env.TERM !== 'dumb') ||
  process.env.CI);
var TObject = typeof Reflect === 'undefined' ? Object : Reflect;
function extend(fn, useGetter) {
  if (useGetter && typeof Proxy !== 'undefined') {
    return new Proxy(fn, {
      get(target, key) {
        if (!target[key] && (key in colorList)) target[key] = extend(function p(s) { return fn(color[key](s)) }, true);
        return target[key];
      }
    });
  }
  Object.keys(colorList).forEach(function (key) {
    if (useGetter) {
      TObject.defineProperty(fn, key, {
        get() { return extend(function m(s) { return fn(color[key](s)) }, true) }
      });
    } else if (!fn[key]) fn[key] = extend(function m(s) { return fn(color[key](s)) }, true);
  });
  return fn;
}
function replaceClose(str, open, close, idx) {
  var start = str.substring(0, idx) + open;
  var rest = str.substring(idx + close.length);
  var nextIdx = rest.indexOf(close);
  return start + (~nextIdx ? replaceClose(rest, open, close, nextIdx) : rest);
}
function getFn(colorType) {
  var cfg = colorList[colorType];
  if (!cfg || !isSupported) return function (str) { return String(str) };
  var open = cfg[0], close = cfg[1];
  return function (str) {
    if (str === '' || str == null) return '';
    str = '' + str;
    var idx = str.indexOf(close, open.length);
    return open + (~idx ? replaceClose(str, open, close, idx) : str) + close;
  }
}
function color(str, colorType) { return getFn(colorType)(str); }
color.list = colorList;
function init() {
  Object.keys(colorList).forEach(function (key) { clc[key] = color[key] = extend(getFn(key), false); });
}
var clc = {
  color: color,
  list: colorList,
  log(str, colorType) { console.log(color(str, colorType)); },
  isSupported() { return isSupported },
  enable() { isSupported = true; init(); },
  disable() { isSupported = false; init(); },
  strip(str) { return str.replace(/\x1b\[\d+m/gm, '') },
};
Object.keys(colorList).forEach(function (key) {
  colorList[key] = colorList[key].map(function (n) { return '\x1b[' + n + 'm' });
  clc.log[key] = function () {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) arr.push(arguments[i]);
    console.log(color[key](arr.join(' ')));
  };
});
init();
module.exports = clc;
}(src));

var clc = src.exports;

const {
  log,
  color,
  list,
  isSupported,
  disable,
  enable,
  strip,
  // modifier
  reset,
  bold,
  dim,
  italic,
  underline,
  inverse,
  hidden,
  strikethrough,
  black,
  // color
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  gray,
  grey,
  // Bright color
  redBright,
  greenBright,
  yellowBright,
  blueBright,
  magentaBright,
  cyanBright,
  whiteBright,
  // bgColor
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  // bgColor - legacy styles
  blackBG,
  redBG,
  greenBG,
  yellowBG,
  blueBG,
  magentaBG,
  cyanBG,
  whiteBG,
  // Bright bgColor
  bgBlackBright,
  bgRedBright,
  bgGreenBright,
  bgYellowBright,
  bgBlueBright,
  bgMagentaBright,
  bgCyanBright,
  bgWhiteBright,
} = clc;

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/src/snippets/app-wrapper.liquivelte generated by Svelte v3.50.0 */
const get_footer_slot_changes = dirty => ({});
const get_footer_slot_context = ctx => ({});
const get_header_slot_changes = dirty => ({});
const get_header_slot_context = ctx => ({});

// (8068:8) {#if initialized }
function create_if_block_1(ctx) {
	let searchbar;
	let current;

	searchbar = new Searchbar({
			props: {
				classes: "searchbar",
				customSearch: true,
				backdrop: true,
				expandable: true,
				disableButton: true
			}
		});

	searchbar.$on("searchbarEnable", /*searchBarStatusChange*/ ctx[4]);
	searchbar.$on("searchbarDisable", /*searchBarStatusChange*/ ctx[4]);

	return {
		c() {
			create_component(searchbar.$$.fragment);
		},
		l(nodes) {
			claim_component(searchbar.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(searchbar, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(searchbar.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(searchbar.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(searchbar, detaching);
		}
	};
}

// (8067:6) <Navbar  position="top" hidden="{searchClosed}" >
function create_default_slot_8(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*initialized*/ ctx[2] && create_if_block_1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*initialized*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*initialized*/ 4) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (8061:4) <Page  name="main" classes="main-page" >
function create_default_slot_7(ctx) {
	let div1;
	let div0;
	let t;
	let navbar;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	navbar = new Navbar({
			props: {
				position: "top",
				hidden: /*searchClosed*/ ctx[3],
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if (default_slot) default_slot.c();
			t = space();
			create_component(navbar.$$.fragment);
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { liveslot: true });
			var div0_nodes = children(div0);
			if (default_slot) default_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			this.h();
		},
		h() {
			attr(div0, "liveslot", "main");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			insert_hydration(target, t, anchor);
			mount_component(navbar, target, anchor);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(/*persistingchild*/ ctx[5].call(null, div1, 'main'));
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}

			const navbar_changes = {};
			if (dirty & /*searchClosed*/ 8) navbar_changes.hidden = /*searchClosed*/ ctx[3];

			if (dirty & /*$$scope, initialized*/ 1028) {
				navbar_changes.$$scope = { dirty, ctx };
			}

			navbar.$set(navbar_changes);
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(navbar.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			transition_out(navbar.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (default_slot) default_slot.d(detaching);
			if (detaching) detach(t);
			destroy_component(navbar, detaching);
			mounted = false;
			dispose();
		}
	};
}

// (8060:2) <View  main classes="mainview" browserHistoryInitialMatch="{true}" loadInitialPage="{false}" data-url="{ request.path }" browserHistory="{true}" browserHistorySeparator="{""}" >
function create_default_slot_6(ctx) {
	let page;
	let current;

	page = new Page({
			props: {
				name: "main",
				classes: "main-page",
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(page.$$.fragment);
		},
		l(nodes) {
			claim_component(page.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(page, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const page_changes = {};

			if (dirty & /*$$scope, searchClosed, initialized*/ 1036) {
				page_changes.$$scope = { dirty, ctx };
			}

			page.$set(page_changes);
		},
		i(local) {
			if (current) return;
			transition_in(page.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(page.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(page, detaching);
		}
	};
}

// (8083:4) <Link   >
function create_default_slot_5(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				name: "giftbox",
				width: "25",
				color: "green"
			}
		});

	return {
		c() {
			create_component(icon.$$.fragment);
		},
		l(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icon, detaching);
		}
	};
}

// (8089:8) {#if cart.items }
function create_if_block(ctx) {
	let badge;
	let current;

	badge = new Badge({
			props: {
				color: "green",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(badge.$$.fragment);
		},
		l(nodes) {
			claim_component(badge.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(badge, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const badge_changes = {};

			if (dirty & /*$$scope, cart*/ 1025) {
				badge_changes.$$scope = { dirty, ctx };
			}

			badge.$set(badge_changes);
		},
		i(local) {
			if (current) return;
			transition_in(badge.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(badge.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(badge, detaching);
		}
	};
}

// (8090:10) <Badge  color="green" >
function create_default_slot_4(ctx) {
	let t_value = /*cart*/ ctx[0].items.length + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		l(nodes) {
			t = claim_text(nodes, t_value);
		},
		m(target, anchor) {
			insert_hydration(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*cart*/ 1 && t_value !== (t_value = /*cart*/ ctx[0].items.length + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (8086:4) <Link  small popupOpen=".cart-popup" classes="display-flex z-[601] w-[72px]"  >
function create_default_slot_3(ctx) {
	let div;
	let icon;
	let t;
	let current;

	icon = new Icon({
			props: {
				name: "icon-cart",
				width: "30",
				color: "white"
			}
		});

	let if_block = /*cart*/ ctx[0].items && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			create_component(icon.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(icon.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "icon cart-icon");
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			mount_component(icon, div, null);
			append_hydration(div, t);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p(ctx, dirty) {
			if (/*cart*/ ctx[0].items) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*cart*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(icon);
			if (if_block) if_block.d();
		}
	};
}

// (8094:4) <Link   >
function create_default_slot_2(ctx) {
	let icon;
	let current;
	icon = new Icon({ props: { name: "icon-account" } });

	return {
		c() {
			create_component(icon.$$.fragment);
		},
		l(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icon, detaching);
		}
	};
}

// (8082:2) <Toolbar  position="{'bottom'}" classes="z-[5500] toolbar-bottom" >
function create_default_slot_1(ctx) {
	let link0;
	let t0;
	let link1;
	let t1;
	let link2;
	let current;

	link0 = new Link({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	link1 = new Link({
			props: {
				small: true,
				popupOpen: ".cart-popup",
				classes: "display-flex z-[601] w-[72px]",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	link2 = new Link({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(link0.$$.fragment);
			t0 = space();
			create_component(link1.$$.fragment);
			t1 = space();
			create_component(link2.$$.fragment);
		},
		l(nodes) {
			claim_component(link0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(link1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(link2.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(link0, target, anchor);
			insert_hydration(target, t0, anchor);
			mount_component(link1, target, anchor);
			insert_hydration(target, t1, anchor);
			mount_component(link2, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const link0_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				link0_changes.$$scope = { dirty, ctx };
			}

			link0.$set(link0_changes);
			const link1_changes = {};

			if (dirty & /*$$scope, cart*/ 1025) {
				link1_changes.$$scope = { dirty, ctx };
			}

			link1.$set(link1_changes);
			const link2_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				link2_changes.$$scope = { dirty, ctx };
			}

			link2.$set(link2_changes);
		},
		i(local) {
			if (current) return;
			transition_in(link0.$$.fragment, local);
			transition_in(link1.$$.fragment, local);
			transition_in(link2.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(link0.$$.fragment, local);
			transition_out(link1.$$.fragment, local);
			transition_out(link2.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(link0, detaching);
			if (detaching) detach(t0);
			destroy_component(link1, detaching);
			if (detaching) detach(t1);
			destroy_component(link2, detaching);
		}
	};
}

// (8047:0) <App  theme="auto"    autoDarkMode="{true}"     iosTranslucentBars="{false}" iosTranslucentModals="{false}"    name="My App"    id="com.demoapp.test"    routes="{routes}"    viewMainClass="mainview"    >
function create_default_slot(ctx) {
	let div1;
	let div0;
	let t0;
	let view;
	let t1;
	let toolbar;
	let t2;
	let div3;
	let div2;
	let current;
	let mounted;
	let dispose;
	const header_slot_template = /*#slots*/ ctx[9].header;
	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[10], get_header_slot_context);

	view = new View({
			props: {
				main: true,
				classes: "mainview",
				browserHistoryInitialMatch: true,
				loadInitialPage: false,
				"data-url": /*request*/ ctx[1].path,
				browserHistory: true,
				browserHistorySeparator: "",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			}
		});

	toolbar = new Toolbar({
			props: {
				position: 'bottom',
				classes: "z-[5500] toolbar-bottom",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	const footer_slot_template = /*#slots*/ ctx[9].footer;
	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[10], get_footer_slot_context);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if (header_slot) header_slot.c();
			t0 = space();
			create_component(view.$$.fragment);
			t1 = space();
			create_component(toolbar.$$.fragment);
			t2 = space();
			div3 = element("div");
			div2 = element("div");
			if (footer_slot) footer_slot.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { liveslot: true });
			var div0_nodes = children(div0);
			if (header_slot) header_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t0 = claim_space(nodes);
			claim_component(view.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(toolbar.$$.fragment, nodes);
			t2 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", {});
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { liveslot: true });
			var div2_nodes = children(div2);
			if (footer_slot) footer_slot.l(div2_nodes);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "liveslot", "header");
			attr(div1, "class", "appbar");
			attr(div2, "liveslot", "footer");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);

			if (header_slot) {
				header_slot.m(div0, null);
			}

			insert_hydration(target, t0, anchor);
			mount_component(view, target, anchor);
			insert_hydration(target, t1, anchor);
			mount_component(toolbar, target, anchor);
			insert_hydration(target, t2, anchor);
			insert_hydration(target, div3, anchor);
			append_hydration(div3, div2);

			if (footer_slot) {
				footer_slot.m(div2, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(/*persistingchild*/ ctx[5].call(null, div1, 'header')),
					action_destroyer(/*persistingchild*/ ctx[5].call(null, div3, 'footer'))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (header_slot) {
				if (header_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						header_slot,
						header_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(header_slot_template, /*$$scope*/ ctx[10], dirty, get_header_slot_changes),
						get_header_slot_context
					);
				}
			}

			const view_changes = {};
			if (dirty & /*request*/ 2) view_changes["data-url"] = /*request*/ ctx[1].path;

			if (dirty & /*$$scope, searchClosed, initialized*/ 1036) {
				view_changes.$$scope = { dirty, ctx };
			}

			view.$set(view_changes);
			const toolbar_changes = {};

			if (dirty & /*$$scope, cart*/ 1025) {
				toolbar_changes.$$scope = { dirty, ctx };
			}

			toolbar.$set(toolbar_changes);

			if (footer_slot) {
				if (footer_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						footer_slot,
						footer_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(footer_slot_template, /*$$scope*/ ctx[10], dirty, get_footer_slot_changes),
						get_footer_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(header_slot, local);
			transition_in(view.$$.fragment, local);
			transition_in(toolbar.$$.fragment, local);
			transition_in(footer_slot, local);
			current = true;
		},
		o(local) {
			transition_out(header_slot, local);
			transition_out(view.$$.fragment, local);
			transition_out(toolbar.$$.fragment, local);
			transition_out(footer_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (header_slot) header_slot.d(detaching);
			if (detaching) detach(t0);
			destroy_component(view, detaching);
			if (detaching) detach(t1);
			destroy_component(toolbar, detaching);
			if (detaching) detach(t2);
			if (detaching) detach(div3);
			if (footer_slot) footer_slot.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	let app;
	let current;

	app = new App({
			props: {
				theme: "auto",
				autoDarkMode: true,
				iosTranslucentBars: false,
				iosTranslucentModals: false,
				name: "My App",
				id: "com.demoapp.test",
				routes: /*routes*/ ctx[6],
				viewMainClass: "mainview",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(app.$$.fragment);
		},
		l(nodes) {
			claim_component(app.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(app, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const app_changes = {};

			if (dirty & /*$$scope, cart, request, searchClosed, initialized*/ 1039) {
				app_changes.$$scope = { dirty, ctx };
			}

			app.$set(app_changes);
		},
		i(local) {
			if (current) return;
			transition_in(app.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(app.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(app, detaching);
		}
	};
}

function fc(e, t, r) {
	const n = e.find(e => e === t);

	return n || e.reduce((e, n) => {
		let o = Math.abs(e - t), i = Math.abs(n - t);

		return "higher" === r
		? n > t && i <= o ? n : e
		: "lower" === r ? n < t && i <= o ? n : e : void 0;
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { importsSeek = 'lower' } = $$props;
	let themeImports = getContext('svelteProps') || {};
	getContext('lec') || {};
	(() => window.cicR = $$props.resetCicR ? 1 : window.cicR + 1)();
	const cic = window.cicR;
	let { cart = themeImports['cart'].find(e => e.component_index == fc(themeImports['cart'].map(e => e.component_index), cic, importsSeek)).value } = $$props;

	cartStore.subscribe(state => {
		if (state) {
			$$invalidate(0, cart = state);
		}
	});

	// import { Workbox } from 'workbox-window';
	const request = {};

	let { requestƒƒpath } = $$props;

	try {
		request = request || {};
	} catch(e) {
		
	} /*whatever*/

	request.path = themeImports['requestƒƒpath'].find(e => e.component_index == fc(themeImports['requestƒƒpath'].map(e => e.component_index), cic, importsSeek)).value;

	// console.log('request ', request);
	let live_slot_cache = new Map();

	let firstRun = true;
	let initialized = false;
	let searchClosed = true;
	let dynamicPageElements = [];

	function searchBarStatusChange(e) {
		const searchbar = e.detail[0];

		if (searchbar.enabled) {
			$$invalidate(3, searchClosed = false);
		} else {
			$$invalidate(3, searchClosed = true);
		}
	}

	beforeUpdate(() => {
		if (firstRun) {
			firstRun = false;

			[...document.querySelectorAll('[liveslot]')].forEach(element => {
				if (!live_slot_cache.has(element.getAttribute('liveslot'))) {
					live_slot_cache.set(element.getAttribute('liveslot'), element);

					if (element.isConnected) {
						element.parentNode.removeChild(element);
					}
				}
			});
		}

		onMount(() => {
			$$invalidate(2, initialized = true);

			f7ready(() => {
				f7.views.main.on('pageMounted', ({ route, pageEl }) => {
					console.log('page is mounting', route.path, route.params, route.query);
					Shopify.designMode = true;

					[
						...pageEl.querySelectorAll('[liquivelte-eval], .liquivelte-prop-script')
					].forEach(element => {
						window.propScriptForDesignMode = element;
						eval(element.textContent);
					});

					Shopify.designMode = false;
					document.dispatchEvent(new CustomEvent('view-loaded', { detail: { document: pageEl } }));
				}); // console.log('page mounted ', pageData);

				f7.views.main.on('pageBeforeIn', ({ route, pageEl }) => {
					log.green('page pageBeforeIn', route.path, JSON.stringify(route.params), JSON.stringify(route.query));
					setCurrentPage({ route });
					dynamicPageElements.forEach(el => pageEl.append(el));
					dynamicPageElements = [];
				});

				f7.views.main.on('pageBeforeOut', ({ route, pageEl, ...rest }) => {
					console.log('page pageBeforeOut', route, rest);

					dynamicPageElements = [...pageEl.children].filter(el => {
						return !el.matches('.page-content');
					});
				}); // setCurrentPage({route});
			});
		});

		// if(!live_slot_cache.has('[liveslot]')) {
		//   ls_cache = document.querySelector('.liveslot');
		// if(ls_cache.isConnected) { ls_cache.parentNode.removeChild(ls_cache); }
		// }
		console.log('oh shit, the wrapper component is about to update');

		return false;
	});

	function persistingchild(node, slotname) {
		if (node.children[0] !== live_slot_cache.get(slotname)) {
			node.replaceChild(live_slot_cache.get(slotname), node.children[0]);
		}
	}

	// onMount(() => {
	//   if ('serviceWorker' in navigator) {    
	//     const wb = new Workbox('/a/sw/Development%20(e34f7f-muhammets-air)/sw.js', {
	//       scope: '/'
	//     });
	//     wb.register();
	//   }
	// })
	const route_to_source = path => {
		const entries = [
			{
				regexp: '/products',
				source: 'theme.product.liquivelte'
			},
			{
				regexp: '/collections',
				source: 'theme.collection.liquivelte'
			},
			{
				regexp: '/pages',
				source: 'theme.page.liquivelte'
			},
			{
				regexp: '/',
				source: 'theme.index.liquivelte'
			}
		];

		const entry = entries.find(entry => {
			return new RegExp(entry.regexp, 'i').test(path);
		}) || {};

		return entry.source;
	};

	function setCurrentPage({ route, JSname, CSSname }) {
		const source = route ? route_to_source(route.path) : 'unknown_source';
		JSname = JSname || `${source}.js`;
		CSSname = CSSname || `${source}.css`;
		const scriptEntry = liquivelte_main_scripts_registry.get(JSname);

		if (!scriptEntry.loaded) {
			// does not export anything
			import(scriptEntry.src.split('?')[0]).then(() => {
				liquivelte_main_scripts_registry.set(JSname, { loaded: true });
			});
		}

		const styleEntry = liquivelte_main_styles_registry.get(CSSname);

		if (!styleEntry.node) {
			const linkNode = document.createElement('link');
			linkNode.rel = 'stylesheet';
			linkNode.href = styleEntry.href;
			liquivelte_main_styles_registry.set(CSSname, { ...styleEntry, node: linkNode });
			styleEntry.node = linkNode;
		}

		document.head.appendChild(styleEntry.node);
		liquivelte_main_styles_registry.set(CSSname, { ...styleEntry, loaded: true });

		styleEntry.node.addEventListener('load', () => {
			console.log('style loaded ', styleEntry.node.href);

			[...liquivelte_main_styles_registry].forEach(([key, entry]) => {
				if (key !== CSSname && entry.loaded && entry.node?.isConnected) {
					entry.node.remove();
					liquivelte_main_styles_registry.set(key, { ...entry, loaded: false });
				}
			});
		});
	}

	const ROUTER_CACHE = new Map();

	const clientSideRouter = ({ app, to, resolve }, ...rest) => {
		const { path } = to;
		let contentPromise;

		if (ROUTER_CACHE.has(path)) {
			contentPromise = (async () => ROUTER_CACHE.get(path))();
		} else {
			contentPromise = fetch(path).then(res => res.text());
		}

		contentPromise.then(async content => {
			if (!ROUTER_CACHE.has(path)) {
				ROUTER_CACHE.set(path, content);
			}

			const template = document.createElement('template');
			template.innerHTML = content;
			const fragment = template.content;
			const pageJS = fragment.querySelector('script[src*="liquivelte.js"]');
			const pageCSS = fragment.querySelector('link[href*="liquivelte.css"]');
			let [JSsrc] = pageJS.src.split('?');
			let [CSSsrc] = pageCSS.href.split('?');

			try {
				JSsrc = new URL(pageJS.src).pathname;
				CSSsrc = new URL(pageCSS.href).pathname;
			} catch(err) {
				
			} // will fail in safari

			JSsrc.replace(/^.*\/assets\//, '');
			const CSSname = CSSsrc.replace(/^.*\/assets\//, '');
			const cssEntry = liquivelte_main_styles_registry.get(CSSname);
			liquivelte_main_styles_registry.set(CSSname, { ...cssEntry, href: CSSsrc, node: pageCSS });
			resolve({ content });
		});
	};

	const routes = [
		{
			path: '/(products|collections|pages)/:handle',
			async: clientSideRouter,
			options: { transition: 'f7-dive' }
		},
		{
			path: '/',
			async: clientSideRouter,
			options: { transition: 'f7-dive' }
		}
	];

	$$self.$$set = $$new_props => {
		$$invalidate(22, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ('importsSeek' in $$new_props) $$invalidate(7, importsSeek = $$new_props.importsSeek);
		if ('cart' in $$new_props) $$invalidate(0, cart = $$new_props.cart);
		if ('requestƒƒpath' in $$new_props) $$invalidate(8, requestƒƒpath = $$new_props.requestƒƒpath);
		if ('$$scope' in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$props = exclude_internal_props($$props);

	return [
		cart,
		request,
		initialized,
		searchClosed,
		searchBarStatusChange,
		persistingchild,
		routes,
		importsSeek,
		requestƒƒpath,
		slots,
		$$scope
	];
}

class App_wrapper extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			importsSeek: 7,
			cart: 0,
			requestƒƒpath: 8
		});
	}
}

export { App_wrapper as default };
