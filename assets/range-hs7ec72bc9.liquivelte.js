import { $ as $$1, methods, getWindow, getDocument } from './framework7-liquivelte-get-params-hs6b273664.liquivelte.js';
import { htm } from './htm.js-hs8daa1a0c.liquivelte.js';

// eslint-disable-next-line
Object.keys(methods).forEach(methodName => {
  if (methodName === '$') return;
  $$1.fn[methodName] = methods[methodName];
});
var $ = $$1;

let uniqueNum = 0;
function uniqueNumber() {
  uniqueNum += 1;
  return uniqueNum;
}
function id(mask, map) {
  if (mask === void 0) {
    mask = 'xxxxxxxxxx';
  }
  if (map === void 0) {
    map = '0123456789abcdef';
  }
  const length = map.length;
  return mask.replace(/x/g, () => map[Math.floor(Math.random() * length)]);
}
const mdPreloaderContent = `
  <span class="preloader-inner">
    <svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="16"></circle>
    </svg>
  </span>
`.trim();
const iosPreloaderContent = `
  <span class="preloader-inner">
    ${[0, 1, 2, 3, 4, 5, 6, 7].map(() => '<span class="preloader-inner-line"></span>').join('')}
  </span>
`.trim();
const auroraPreloaderContent = `
  <span class="preloader-inner">
    <span class="preloader-inner-circle"></span>
  </span>
`;
function eventNameToColonCase(eventName) {
  let hasColon;
  return eventName.split('').map((char, index) => {
    if (char.match(/[A-Z]/) && index !== 0 && !hasColon) {
      hasColon = true;
      return `:${char.toLowerCase()}`;
    }
    return char.toLowerCase();
  }).join('');
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no setter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function requestAnimationFrame(callback) {
  const window = getWindow();
  return window.requestAnimationFrame(callback);
}
function cancelAnimationFrame(frameId) {
  const window = getWindow();
  return window.cancelAnimationFrame(frameId);
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function nextFrame$1(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}
function now() {
  return Date.now();
}
function parseUrlQuery(url) {
  const window = getWindow();
  const query = {};
  let urlToParse = url || window.location.href;
  let i;
  let params;
  let param;
  let length;
  if (typeof urlToParse === 'string' && urlToParse.length) {
    urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
    params = urlToParse.split('&').filter(paramsPart => paramsPart !== '');
    length = params.length;
    for (i = 0; i < length; i += 1) {
      param = params[i].replace(/#\S+/g, '').split('=');
      query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param.slice(1).join('=')) || '';
    }
  }
  return query;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = window.getComputedStyle(el, null);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function serializeObject(obj, parents) {
  if (parents === void 0) {
    parents = [];
  }
  if (typeof obj === 'string') return obj;
  const resultArray = [];
  const separator = '&';
  let newParents;
  function varName(name) {
    if (parents.length > 0) {
      let parentParts = '';
      for (let j = 0; j < parents.length; j += 1) {
        if (j === 0) parentParts += parents[j];else parentParts += `[${encodeURIComponent(parents[j])}]`;
      }
      return `${parentParts}[${encodeURIComponent(name)}]`;
    }
    return encodeURIComponent(name);
  }
  function varValue(value) {
    return encodeURIComponent(value);
  }
  Object.keys(obj).forEach(prop => {
    let toPush;
    if (Array.isArray(obj[prop])) {
      toPush = [];
      for (let i = 0; i < obj[prop].length; i += 1) {
        if (!Array.isArray(obj[prop][i]) && typeof obj[prop][i] === 'object') {
          newParents = parents.slice();
          newParents.push(prop);
          newParents.push(String(i));
          toPush.push(serializeObject(obj[prop][i], newParents));
        } else {
          toPush.push(`${varName(prop)}[]=${varValue(obj[prop][i])}`);
        }
      }
      if (toPush.length > 0) resultArray.push(toPush.join(separator));
    } else if (obj[prop] === null || obj[prop] === '') {
      resultArray.push(`${varName(prop)}=`);
    } else if (typeof obj[prop] === 'object') {
      // Object, convert to named array
      newParents = parents.slice();
      newParents.push(prop);
      toPush = serializeObject(obj[prop], newParents);
      if (toPush !== '') resultArray.push(toPush);
    } else if (typeof obj[prop] !== 'undefined' && obj[prop] !== '') {
      // Should be string or plain value
      resultArray.push(`${varName(prop)}=${varValue(obj[prop])}`);
    } else if (obj[prop] === '') resultArray.push(varName(prop));
  });
  return resultArray.join(separator);
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}
function merge() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  const to = args[0];
  args.splice(0, 1);
  const from = args;
  for (let i = 0; i < from.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null) {
      const keysArray = Object.keys(Object(nextSource));
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}
function extend() {
  let deep = true;
  let to;
  let from;
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (typeof args[0] === 'boolean') {
    deep = args[0];
    to = args[1];
    args.splice(0, 2);
    from = args;
  } else {
    to = args[0];
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
function colorHexToRgb(hex) {
  const h = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return result ? result.slice(1).map(n => parseInt(n, 16)) : null;
}
function colorRgbToHex(r, g, b) {
  const result = [r, g, b].map(n => {
    const hex = n.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }).join('');
  return `#${result}`;
}
function colorRgbToHsl(r, g, b) {
  r /= 255; // eslint-disable-line
  g /= 255; // eslint-disable-line
  b /= 255; // eslint-disable-line
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h;
  if (d === 0) h = 0;else if (max === r) h = (g - b) / d % 6;else if (max === g) h = (b - r) / d + 2;else if (max === b) h = (r - g) / d + 4;
  const l = (min + max) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (h < 0) h = 360 / 60 + h;
  return [h * 60, s, l];
}
function colorHslToRgb(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs(hp % 2 - 1));
  let rgb1;
  if (Number.isNaN(h) || typeof h === 'undefined') {
    rgb1 = [0, 0, 0];
  } else if (hp <= 1) rgb1 = [c, x, 0];else if (hp <= 2) rgb1 = [x, c, 0];else if (hp <= 3) rgb1 = [0, c, x];else if (hp <= 4) rgb1 = [0, x, c];else if (hp <= 5) rgb1 = [x, 0, c];else if (hp <= 6) rgb1 = [c, 0, x];
  const m = l - c / 2;
  return rgb1.map(n => Math.max(0, Math.min(255, Math.round(255 * (n + m)))));
}
function colorHsbToHsl(h, s, b) {
  const HSL = {
    h,
    s: 0,
    l: 0
  };
  const HSB = {
    h,
    s,
    b
  };
  HSL.l = (2 - HSB.s) * HSB.b / 2;
  HSL.s = HSL.l && HSL.l < 1 ? HSB.s * HSB.b / (HSL.l < 0.5 ? HSL.l * 2 : 2 - HSL.l * 2) : HSL.s;
  return [HSL.h, HSL.s, HSL.l];
}
function colorHslToHsb(h, s, l) {
  const HSB = {
    h,
    s: 0,
    b: 0
  };
  const HSL = {
    h,
    s,
    l
  };
  const t = HSL.s * (HSL.l < 0.5 ? HSL.l : 1 - HSL.l);
  HSB.b = HSL.l + t;
  HSB.s = HSL.l > 0 ? 2 * t / HSB.b : HSB.s;
  return [HSB.h, HSB.s, HSB.b];
}
function colorThemeCSSProperties() {
  let hex;
  let rgb;
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  if (args.length === 1) {
    hex = args[0];
    rgb = colorHexToRgb(hex);
  } else if (args.length === 3) {
    rgb = args;
    hex = colorRgbToHex(...rgb);
  }
  if (!rgb) return {};
  const hsl = colorRgbToHsl(...rgb);
  const hslShade = [hsl[0], hsl[1], Math.max(0, hsl[2] - 0.08)];
  const hslTint = [hsl[0], hsl[1], Math.max(0, hsl[2] + 0.08)];
  const shade = colorRgbToHex(...colorHslToRgb(...hslShade));
  const tint = colorRgbToHex(...colorHslToRgb(...hslTint));
  return {
    '--f7-theme-color': hex,
    '--f7-theme-color-rgb': rgb.join(', '),
    '--f7-theme-color-shade': shade,
    '--f7-theme-color-tint': tint
  };
}
function bindMethods(instance, obj) {
  Object.keys(obj).forEach(key => {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(subKey => {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }
    instance[key] = obj[key];
  });
}
function flattenArray() {
  const arr = [];
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }
  args.forEach(arg => {
    if (Array.isArray(arg)) arr.push(...flattenArray(...arg));else arr.push(arg);
  });
  return arr;
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  uniqueNumber: uniqueNumber,
  id: id,
  mdPreloaderContent: mdPreloaderContent,
  iosPreloaderContent: iosPreloaderContent,
  auroraPreloaderContent: auroraPreloaderContent,
  eventNameToColonCase: eventNameToColonCase,
  deleteProps: deleteProps,
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame,
  nextTick: nextTick,
  nextFrame: nextFrame$1,
  now: now,
  parseUrlQuery: parseUrlQuery,
  getTranslate: getTranslate,
  serializeObject: serializeObject,
  isObject: isObject,
  merge: merge,
  extend: extend,
  colorHexToRgb: colorHexToRgb,
  colorRgbToHex: colorRgbToHex,
  colorRgbToHsl: colorRgbToHsl,
  colorHslToRgb: colorHslToRgb,
  colorHsbToHsl: colorHsbToHsl,
  colorHslToHsb: colorHslToHsb,
  colorThemeCSSProperties: colorThemeCSSProperties,
  bindMethods: bindMethods,
  flattenArray: flattenArray
});

let support;
function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }(),
    intersectionObserver: function checkObserver() {
      return 'IntersectionObserver' in window;
    }()
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCalculated;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    iphone: false,
    ipod: false,
    ipad: false,
    edge: false,
    ie: false,
    firefox: false,
    macos: false,
    windows: false,
    cordova: !!window.cordova,
    electron: false,
    capacitor: !!window.Capacitor,
    nwjs: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS|iPhone;\sCPU\sOS)\s([\d_]+)/);
  const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
  const edge = ua.indexOf('Edge/') >= 0;
  const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
  const windows = platform === 'Win32';
  const electron = ua.toLowerCase().indexOf('electron') >= 0;
  const nwjs = typeof nw !== 'undefined' && typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.nw !== 'undefined';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }
  device.ie = ie;
  device.edge = edge;
  device.firefox = firefox;

  // Android
  if (android) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.ipod = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || window.navigator.standalone)) || window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  device.webview = device.webView;
  device.standalone = device.webView;

  // Desktop
  device.desktop = !(device.ios || device.android) || electron || nwjs;
  if (device.desktop) {
    device.electron = electron;
    device.nwjs = nwjs;
    device.macos = macos;
    device.windows = windows;
    if (device.macos) {
      device.os = 'macos';
    }
    if (device.windows) {
      device.os = 'windows';
    }
  }

  // Pixel Ratio
  device.pixelRatio = window.devicePixelRatio || 1;

  // Color Scheme
  const DARK = '(prefers-color-scheme: dark)';
  const LIGHT = '(prefers-color-scheme: light)';
  device.prefersColorScheme = function prefersColorTheme() {
    let theme;
    if (window.matchMedia && window.matchMedia(LIGHT).matches) {
      theme = 'light';
    }
    if (window.matchMedia && window.matchMedia(DARK).matches) {
      theme = 'dark';
    }
    return theme;
  };

  // Export object
  return device;
}
function getDevice(overrides, reset) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCalculated || reset) {
    deviceCalculated = calcDevice(overrides);
  }
  return deviceCalculated;
}

class EventsClass {
  constructor(parents) {
    if (parents === void 0) {
      parents = [];
    }
    const self = this;
    self.eventsParents = parents;
    self.eventsListeners = {};
  }
  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  }
  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  }
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  }
  emit() {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    let eventsParents;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
      eventsParents = self.eventsParents;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
      eventsParents = args[0].local ? [] : args[0].parents || self.eventsParents;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    const localEvents = eventsArray.map(eventName => eventName.replace('local::', ''));
    const parentEvents = eventsArray.filter(eventName => eventName.indexOf('local::') < 0);
    localEvents.forEach(event => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach(eventHandler => {
          handlers.push(eventHandler);
        });
        handlers.forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    if (eventsParents && eventsParents.length > 0) {
      eventsParents.forEach(eventsParent => {
        eventsParent.emit(parentEvents, ...data);
      });
    }
    return self;
  }
}
var EventsClass$1 = EventsClass;

class Framework7Class extends EventsClass$1 {
  constructor(params, parents) {
    if (params === void 0) {
      params = {};
    }
    if (parents === void 0) {
      parents = [];
    }
    super(parents);
    const self = this;
    self.params = params;
    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(eventName => {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  // eslint-disable-next-line
  useModuleParams(module, instanceParams) {
    if (module.params) {
      const originalParams = {};
      Object.keys(module.params).forEach(paramKey => {
        if (typeof instanceParams[paramKey] === 'undefined') return;
        originalParams[paramKey] = extend({}, instanceParams[paramKey]);
      });
      extend(instanceParams, module.params);
      Object.keys(originalParams).forEach(paramKey => {
        extend(instanceParams[paramKey], originalParams[paramKey]);
      });
    }
  }
  useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(moduleName => {
      const module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        extend(instanceParams, module.params);
      }
    });
  }
  useModule(moduleName, moduleParams) {
    if (moduleName === void 0) {
      moduleName = '';
    }
    if (moduleParams === void 0) {
      moduleParams = {};
    }
    const instance = this;
    if (!instance.modules) return;
    const module = typeof moduleName === 'string' ? instance.modules[moduleName] : moduleName;
    if (!module) return;

    // Extend instance methods and props
    if (module.instance) {
      Object.keys(module.instance).forEach(modulePropName => {
        const moduleProp = module.instance[modulePropName];
        if (typeof moduleProp === 'function') {
          instance[modulePropName] = moduleProp.bind(instance);
        } else {
          instance[modulePropName] = moduleProp;
        }
      });
    }
    // Add event listeners
    if (module.on && instance.on) {
      Object.keys(module.on).forEach(moduleEventName => {
        instance.on(moduleEventName, module.on[moduleEventName]);
      });
    }
    // Add vnode hooks
    if (module.vnode) {
      if (!instance.vnodeHooks) instance.vnodeHooks = {};
      Object.keys(module.vnode).forEach(vnodeId => {
        Object.keys(module.vnode[vnodeId]).forEach(hookName => {
          const handler = module.vnode[vnodeId][hookName];
          if (!instance.vnodeHooks[hookName]) instance.vnodeHooks[hookName] = {};
          if (!instance.vnodeHooks[hookName][vnodeId]) instance.vnodeHooks[hookName][vnodeId] = [];
          instance.vnodeHooks[hookName][vnodeId].push(handler.bind(instance));
        });
      });
    }
    // Module create callback
    if (module.create) {
      module.create.bind(instance)(moduleParams);
    }
  }
  useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(moduleName => {
      const moduleParams = modulesParams[moduleName] || {};
      instance.useModule(moduleName, moduleParams);
    });
  }
  static set components(components) {
    const Class = this;
    if (!Class.use) return;
    Class.use(components);
  }
  static installModule(module) {
    const Class = this;
    if (!Class.prototype.modules) Class.prototype.modules = {};
    const name = module.name || `${Object.keys(Class.prototype.modules).length}_${now()}`;
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(key => {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(key => {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      module.install.apply(Class, params);
    }
    return Class;
  }
  static use(module) {
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach(m => Class.installModule(m));
      return Class;
    }
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    return Class.installModule(module, ...params);
  }
}
var Framework7Class$1 = Framework7Class;

function ConstructorMethods(parameters) {
  if (parameters === void 0) {
    parameters = {};
  }
  const {
    defaultSelector,
    constructor: Constructor,
    domProp,
    app,
    addMethods
  } = parameters;
  const methods = {
    create() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (app) return new Constructor(app, ...args);
      return new Constructor(...args);
    },
    get(el) {
      if (el === void 0) {
        el = defaultSelector;
      }
      if (el instanceof Constructor) return el;
      const $el = $(el);
      if ($el.length === 0) return undefined;
      return $el[0][domProp];
    },
    destroy(el) {
      const instance = methods.get(el);
      if (instance && instance.destroy) return instance.destroy();
      return undefined;
    }
  };
  if (addMethods && Array.isArray(addMethods)) {
    addMethods.forEach(methodName => {
      methods[methodName] = function (el) {
        if (el === void 0) {
          el = defaultSelector;
        }
        const instance = methods.get(el);
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        if (instance && instance[methodName]) return instance[methodName](...args);
        return undefined;
      };
    });
  }
  return methods;
}

function ModalMethods(parameters) {
  if (parameters === void 0) {
    parameters = {};
  }
  const {
    defaultSelector,
    constructor: Constructor,
    app
  } = parameters;
  const methods = extend(ConstructorMethods({
    defaultSelector,
    constructor: Constructor,
    app,
    domProp: 'f7Modal'
  }), {
    open(el, animate, targetEl) {
      let $el = $(el);
      if ($el.length > 1 && targetEl) {
        // check if same modal in other page
        const $targetPage = $(targetEl).parents('.page');
        if ($targetPage.length) {
          $el.each(modalEl => {
            const $modalEl = $(modalEl);
            if ($modalEl.parents($targetPage)[0] === $targetPage[0]) {
              $el = $modalEl;
            }
          });
        }
      }
      if ($el.length > 1) {
        $el = $el.eq($el.length - 1);
      }
      if (!$el.length) return undefined;
      let instance = $el[0].f7Modal;
      if (!instance) {
        const params = $el.dataset();
        instance = new Constructor(app, {
          el: $el,
          ...params
        });
      }
      return instance.open(animate);
    },
    close(el, animate, targetEl) {
      if (el === void 0) {
        el = defaultSelector;
      }
      let $el = $(el);
      if (!$el.length) return undefined;
      if ($el.length > 1) {
        // check if close link (targetEl) in this modal
        let $parentEl;
        if (targetEl) {
          const $targetEl = $(targetEl);
          if ($targetEl.length) {
            $parentEl = $targetEl.parents($el);
          }
        }
        if ($parentEl && $parentEl.length > 0) {
          $el = $parentEl;
        } else {
          $el = $el.eq($el.length - 1);
        }
      }
      let instance = $el[0].f7Modal;
      if (!instance) {
        const params = $el.dataset();
        instance = new Constructor(app, {
          el: $el,
          ...params
        });
      }
      return instance.close(animate);
    }
  });
  return methods;
}

const fetchedModules = [];
function loadModule(moduleToLoad) {
  const Framework7 = this;
  const window = getWindow();
  const document = getDocument();
  return new Promise((resolve, reject) => {
    const app = Framework7.instance;
    let modulePath;
    let moduleObj;
    let moduleFunc;
    if (!moduleToLoad) {
      reject(new Error('Framework7: Lazy module must be specified'));
      return;
    }
    function install(module) {
      Framework7.use(module);
      if (app) {
        app.useModuleParams(module, app.params);
        app.useModule(module);
      }
    }
    if (typeof moduleToLoad === 'string') {
      const matchNamePattern = moduleToLoad.match(/([a-z0-9-]*)/i);
      if (moduleToLoad.indexOf('.') < 0 && matchNamePattern && matchNamePattern[0].length === moduleToLoad.length) {
        if (!app || app && !app.params.lazyModulesPath) {
          reject(new Error('Framework7: "lazyModulesPath" app parameter must be specified to fetch module by name'));
          return;
        }
        modulePath = `${app.params.lazyModulesPath}/${moduleToLoad}/${moduleToLoad}.lazy.js`;
      } else {
        modulePath = moduleToLoad;
      }
    } else if (typeof moduleToLoad === 'function') {
      moduleFunc = moduleToLoad;
    } else {
      // considering F7-Plugin object
      moduleObj = moduleToLoad;
    }
    if (moduleFunc) {
      const module = moduleFunc(Framework7, false);
      if (!module) {
        reject(new Error("Framework7: Can't find Framework7 component in specified component function"));
        return;
      }
      // Check if it was added
      if (Framework7.prototype.modules && Framework7.prototype.modules[module.name]) {
        resolve();
        return;
      }
      // Install It
      install(module);
      resolve();
    }
    if (moduleObj) {
      const module = moduleObj;
      if (!module) {
        reject(new Error("Framework7: Can't find Framework7 component in specified component"));
        return;
      }
      // Check if it was added
      if (Framework7.prototype.modules && Framework7.prototype.modules[module.name]) {
        resolve();
        return;
      }
      // Install It
      install(module);
      resolve();
    }
    if (modulePath) {
      if (fetchedModules.indexOf(modulePath) >= 0) {
        resolve();
        return;
      }
      fetchedModules.push(modulePath);
      const scriptLoad = new Promise((resolveScript, rejectScript) => {
        Framework7.request.get(modulePath, scriptContent => {
          const callbackId = id();
          const callbackLoadName = `f7_component_loader_callback_${callbackId}`;
          const scriptEl = document.createElement('script');
          scriptEl.innerHTML = `window.${callbackLoadName} = function (Framework7, Framework7AutoInstallComponent) {return ${scriptContent.trim()}}`;
          $('head').append(scriptEl);
          const componentLoader = window[callbackLoadName];
          delete window[callbackLoadName];
          $(scriptEl).remove();
          const module = componentLoader(Framework7, false);
          if (!module) {
            rejectScript(new Error(`Framework7: Can't find Framework7 component in ${modulePath} file`));
            return;
          }

          // Check if it was added
          if (Framework7.prototype.modules && Framework7.prototype.modules[module.name]) {
            resolveScript();
            return;
          }

          // Install It
          install(module);
          resolveScript();
        }, (xhr, status) => {
          rejectScript(xhr, status);
        });
      });
      const styleLoad = new Promise(resolveStyle => {
        Framework7.request.get(modulePath.replace('.lazy.js', app.rtl ? '.rtl.css' : '.css').replace('.js', app.rtl ? '.rtl.css' : '.css'), styleContent => {
          const styleEl = document.createElement('style');
          styleEl.innerHTML = styleContent;
          $('head').append(styleEl);
          resolveStyle();
        }, () => {
          resolveStyle();
        });
      });
      Promise.all([scriptLoad, styleLoad]).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    }
  });
}

/* eslint-disable prefer-rest-params */
function jsx(tag, props) {
  const attrs = props || {};
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const children = args || [];
  const attrsString = Object.keys(attrs).map(attr => {
    if (attr[0] === '_') {
      if (attrs[attr]) return attr.replace('_', '');
      return '';
    }
    return `${attr}="${attrs[attr]}"`;
  }).filter(attr => !!attr).join(' ');
  if (['path', 'img', 'circle', 'polygon', 'line', 'input'].indexOf(tag) >= 0) {
    return `<${tag} ${attrsString} />`.trim();
  }
  const childrenContent = children.filter(c => !!c).map(c => Array.isArray(c) ? c.join('') : c).join('');
  return `<${tag} ${attrsString}>${childrenContent}</${tag}>`.trim();
}

/* eslint-disable no-underscore-dangle */
class Framework7 extends Framework7Class$1 {
  constructor(params) {
    if (params === void 0) {
      params = {};
    }
    super(params);
    // eslint-disable-next-line
    if (Framework7.instance && typeof window !== 'undefined') {
      throw new Error("Framework7 is already initialized and can't be initialized more than once");
    }
    const device = getDevice({
      userAgent: params.userAgent || undefined
    });
    const support = getSupport();
    const passedParams = extend({}, params);

    // App Instance
    const app = this;
    app.device = device;
    app.support = support;
    const w = getWindow();
    const d = getDocument();
    Framework7.instance = app;

    // Default
    const defaults = {
      version: '1.0.0',
      id: 'io.framework7.myapp',
      el: 'body',
      theme: 'auto',
      language: w.navigator.language,
      routes: [],
      name: 'Framework7',
      lazyModulesPath: null,
      initOnDeviceReady: true,
      init: true,
      autoDarkMode: false,
      iosTranslucentBars: true,
      iosTranslucentModals: true,
      component: undefined,
      componentUrl: undefined,
      userAgent: null,
      url: null
    };

    // Extend defaults with modules params
    app.useModulesParams(defaults);

    // Extend defaults with passed params
    app.params = extend(defaults, params);
    extend(app, {
      // App Id
      id: app.params.id,
      // App Name
      name: app.params.name,
      // App version
      version: app.params.version,
      // Routes
      routes: app.params.routes,
      // Lang
      language: app.params.language,
      // Theme
      theme: function getTheme() {
        if (app.params.theme === 'auto') {
          if (device.ios) return 'ios';
          if (device.desktop && device.electron) return 'aurora';
          return 'md';
        }
        return app.params.theme;
      }(),
      // Initially passed parameters
      passedParams,
      online: w.navigator.onLine
    });
    if (params.store) app.params.store = params.store;

    // Save Root
    if (app.$el && app.$el[0]) {
      app.$el[0].f7 = app;
    }

    // Install Modules
    app.useModules();

    // Init Store
    app.initStore();

    // Init
    if (app.params.init) {
      if (device.cordova && app.params.initOnDeviceReady) {
        $(d).on('deviceready', () => {
          app.init();
        });
      } else {
        app.init();
      }
    }

    // Return app instance
    return app;
  }
  mount(rootEl) {
    const app = this;
    const window = getWindow();
    const document = getDocument();
    const $rootEl = $(rootEl || app.params.el).eq(0);
    app.$el = $rootEl;
    if (app.$el && app.$el[0]) {
      app.el = app.$el[0];
      app.el.f7 = app;
      app.rtl = $rootEl.css('direction') === 'rtl';
    }

    // Auto Dark Mode
    const DARK = '(prefers-color-scheme: dark)';
    const LIGHT = '(prefers-color-scheme: light)';
    app.mq = {};
    if (window.matchMedia) {
      app.mq.dark = window.matchMedia(DARK);
      app.mq.light = window.matchMedia(LIGHT);
    }
    app.colorSchemeListener = function colorSchemeListener(_ref) {
      let {
        matches,
        media
      } = _ref;
      if (!matches) {
        return;
      }
      const html = document.querySelector('html');
      if (media === DARK) {
        html.classList.add('dark');
        app.darkMode = true;
        app.emit('darkModeChange', true);
      } else if (media === LIGHT) {
        html.classList.remove('dark');
        app.darkMode = false;
        app.emit('darkModeChange', false);
      }
    };
    app.emit('mount');
  }
  initStore() {
    const app = this;
    if (typeof app.params.store !== 'undefined' && app.params.store.__store) {
      app.store = app.params.store;
    } else {
      app.store = app.createStore(app.params.store);
    }
  }
  enableAutoDarkMode() {
    const window = getWindow();
    const document = getDocument();
    if (!window.matchMedia) return;
    const app = this;
    const html = document.querySelector('html');
    if (app.mq.dark && app.mq.light) {
      app.mq.dark.addListener(app.colorSchemeListener);
      app.mq.light.addListener(app.colorSchemeListener);
    }
    if (app.mq.dark && app.mq.dark.matches) {
      html.classList.add('dark');
      app.darkMode = true;
      app.emit('darkModeChange', true);
    } else if (app.mq.light && app.mq.light.matches) {
      html.classList.remove('dark');
      app.darkMode = false;
      app.emit('darkModeChange', false);
    }
  }
  disableAutoDarkMode() {
    const window = getWindow();
    if (!window.matchMedia) return;
    const app = this;
    if (app.mq.dark) app.mq.dark.removeListener(app.colorSchemeListener);
    if (app.mq.light) app.mq.light.removeListener(app.colorSchemeListener);
  }
  initAppComponent(callback) {
    const app = this;
    app.router.componentLoader(app.params.component, app.params.componentUrl, {
      componentOptions: {
        el: app.$el[0]
      }
    }, el => {
      app.$el = $(el);
      app.$el[0].f7 = app;
      app.$elComponent = el.f7Component;
      app.el = app.$el[0];
      if (callback) callback();
    }, () => {});
  }
  init(rootEl) {
    const app = this;
    app.mount(rootEl);
    const init = () => {
      if (app.initialized) return;
      app.$el.addClass('framework7-initializing');

      // RTL attr
      if (app.rtl) {
        $('html').attr('dir', 'rtl');
      }

      // Auto Dark Mode
      if (app.params.autoDarkMode) {
        app.enableAutoDarkMode();
      }

      // Watch for online/offline state
      const window = getWindow();
      window.addEventListener('offline', () => {
        app.online = false;
        app.emit('offline');
        app.emit('connection', false);
      });
      window.addEventListener('online', () => {
        app.online = true;
        app.emit('online');
        app.emit('connection', true);
      });

      // Root class
      app.$el.addClass('framework7-root');

      // Theme class
      $('html').removeClass('ios md aurora').addClass(app.theme);

      // iOS Translucent
      const device = app.device;
      if (app.params.iosTranslucentBars && app.theme === 'ios' && device.ios) {
        $('html').addClass('ios-translucent-bars');
      }
      if (app.params.iosTranslucentModals && app.theme === 'ios' && device.ios) {
        $('html').addClass('ios-translucent-modals');
      }

      // Init class
      nextFrame$1(() => {
        app.$el.removeClass('framework7-initializing');
      });
      // Emit, init other modules
      app.initialized = true;
      app.emit('init');
    };
    if (app.params.component || app.params.componentUrl) {
      app.initAppComponent(() => {
        init();
      });
    } else {
      init();
    }
    return app;
  }

  // eslint-disable-next-line
  loadModule() {
    return Framework7.loadModule(...arguments);
  }

  // eslint-disable-next-line
  loadModules() {
    return Framework7.loadModules(...arguments);
  }
  getVnodeHooks(hook, id) {
    const app = this;
    if (!app.vnodeHooks || !app.vnodeHooks[hook]) return [];
    return app.vnodeHooks[hook][id] || [];
  }

  // eslint-disable-next-line
  get $() {
    return $;
  }
  static get Dom7() {
    return $;
  }
  static get $() {
    return $;
  }
  static get device() {
    return getDevice();
  }
  static get support() {
    return getSupport();
  }
  static get Class() {
    return Framework7Class$1;
  }
  static get Events() {
    return EventsClass$1;
  }
}
Framework7.$jsx = jsx;
Framework7.ModalMethods = ModalMethods;
Framework7.ConstructorMethods = ConstructorMethods;
Framework7.loadModule = loadModule;
Framework7.loadModules = function loadModules(modules) {
  return Promise.all(modules.map(module => Framework7.loadModule(module)));
};
var Framework7$1 = Framework7;

/* eslint-disable max-classes-per-file */
const globals = {};
let jsonpRequests = 0;
class RequestResponse {
  constructor(obj) {
    Object.assign(this, obj);
  }
}
class RequestError extends Error {
  constructor(obj) {
    super();
    Object.assign(this, obj);
  }
}
const request = requestOptions => new Promise((resolve, reject) => {
  const window = getWindow();
  const document = getDocument();
  const globalsNoCallbacks = extend({}, globals);
  'beforeCreate beforeOpen beforeSend error complete success statusCode'.split(' ').forEach(callbackName => {
    delete globalsNoCallbacks[callbackName];
  });
  const defaults = extend({
    url: window.location.toString(),
    method: 'GET',
    data: false,
    async: true,
    cache: true,
    user: '',
    password: '',
    headers: {},
    xhrFields: {},
    statusCode: {},
    processData: true,
    dataType: 'text',
    contentType: 'application/x-www-form-urlencoded',
    timeout: 0
  }, globalsNoCallbacks);
  let proceedRequest;
  const options = extend({}, defaults, requestOptions);
  if (requestOptions.abortController) {
    options.abortController = requestOptions.abortController;
  }
  if (options.abortController && options.abortController.canceled) {
    reject(new RequestError({
      options,
      status: 'canceled',
      message: 'canceled'
    }));
    return;
  }

  // Function to run XHR callbacks and events
  function fireCallback(callbackName) {
    /*
    Callbacks:
    beforeCreate (options),
    beforeOpen (xhr, options),
    beforeSend (xhr, options),
    error (xhr, status, message),
    complete (xhr, status),
    success (response, status, xhr),
    statusCode ()
    */
    let globalCallbackValue;
    let optionCallbackValue;
    for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }
    if (globals[callbackName]) {
      globalCallbackValue = globals[callbackName](...data);
    }
    if (options[callbackName]) {
      optionCallbackValue = options[callbackName](...data);
    }
    if (typeof globalCallbackValue !== 'boolean') globalCallbackValue = true;
    if (typeof optionCallbackValue !== 'boolean') optionCallbackValue = true;
    if (options.abortController && options.abortController.canceled && (callbackName === 'beforeCreate' || callbackName === 'beforeOpen' || callbackName === 'beforeSend')) {
      return false;
    }
    return globalCallbackValue && optionCallbackValue;
  }

  // Before create callback
  proceedRequest = fireCallback('beforeCreate', options);
  if (proceedRequest === false) {
    reject(new RequestError({
      options,
      status: 'canceled',
      message: 'canceled'
    }));
    return;
  }

  // For jQuery guys
  if (options.type) options.method = options.type;

  // Parameters Prefix
  let paramsPrefix = options.url.indexOf('?') >= 0 ? '&' : '?';

  // UC method
  const method = options.method.toUpperCase();

  // Data to modify GET URL
  if ((method === 'GET' || method === 'HEAD' || method === 'OPTIONS' || method === 'DELETE') && options.data) {
    let stringData;
    if (typeof options.data === 'string') {
      // Should be key=value string
      if (options.data.indexOf('?') >= 0) stringData = options.data.split('?')[1];else stringData = options.data;
    } else {
      // Should be key=value object
      stringData = serializeObject(options.data);
    }
    if (stringData.length) {
      options.url += paramsPrefix + stringData;
      if (paramsPrefix === '?') paramsPrefix = '&';
    }
  }

  // JSONP
  if (options.dataType === 'json' && options.url.indexOf('callback=') >= 0) {
    const callbackName = `f7jsonp_${Date.now() + (jsonpRequests += 1)}`;
    let abortTimeout;
    const callbackSplit = options.url.split('callback=');
    let requestUrl = `${callbackSplit[0]}callback=${callbackName}`;
    if (callbackSplit[1].indexOf('&') >= 0) {
      const addVars = callbackSplit[1].split('&').filter(el => el.indexOf('=') > 0).join('&');
      if (addVars.length > 0) requestUrl += `&${addVars}`;
    }

    // Create script
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.onerror = function onerror() {
      clearTimeout(abortTimeout);
      fireCallback('error', null, 'scripterror', 'scripterror');
      reject(new RequestError({
        options,
        status: 'scripterror',
        message: 'scripterror'
      }));
      fireCallback('complete', null, 'scripterror');
    };
    script.src = requestUrl;

    // Handler
    window[callbackName] = function jsonpCallback(data) {
      clearTimeout(abortTimeout);
      fireCallback('success', data);
      script.parentNode.removeChild(script);
      script = null;
      delete window[callbackName];
      resolve(new RequestResponse({
        options,
        data
      }));
    };
    document.querySelector('head').appendChild(script);
    if (options.timeout > 0) {
      abortTimeout = setTimeout(() => {
        script.parentNode.removeChild(script);
        script = null;
        fireCallback('error', null, 'timeout', 'timeout');
        reject(new RequestError({
          options,
          status: 'timeout',
          message: 'timeout'
        }));
      }, options.timeout);
    }
    return;
  }

  // Cache for GET/HEAD requests
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS' || method === 'DELETE') {
    if (options.cache === false) {
      options.url += `${paramsPrefix}_nocache${Date.now()}`;
    }
  }

  // Create XHR
  const xhr = new XMLHttpRequest();
  if (options.abortController) {
    let aborted = false;
    options.abortController.onAbort = () => {
      if (aborted) return;
      aborted = true;
      xhr.abort();
      reject(new RequestError({
        options,
        xhr,
        status: 'canceled',
        message: 'canceled'
      }));
    };
  }

  // Save Request URL
  xhr.requestUrl = options.url;
  xhr.requestParameters = options;

  // Before open callback
  proceedRequest = fireCallback('beforeOpen', xhr, options);
  if (proceedRequest === false) {
    reject(new RequestError({
      options,
      xhr,
      status: 'canceled',
      message: 'canceled'
    }));
    return;
  }

  // Open XHR
  xhr.open(method, options.url, options.async, options.user, options.password);

  // Create POST Data
  let postData = null;
  if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && options.data) {
    if (options.processData) {
      const postDataInstances = [ArrayBuffer, Blob, Document, FormData];
      // Post Data
      if (postDataInstances.indexOf(options.data.constructor) >= 0) {
        postData = options.data;
      } else {
        // POST Headers
        const boundary = `---------------------------${Date.now().toString(16)}`;
        if (options.contentType === 'multipart/form-data') {
          xhr.setRequestHeader('Content-Type', `multipart/form-data; boundary=${boundary}`);
        } else {
          xhr.setRequestHeader('Content-Type', options.contentType);
        }
        postData = '';
        let data = serializeObject(options.data);
        if (options.contentType === 'multipart/form-data') {
          data = data.split('&');
          const newData = [];
          for (let i = 0; i < data.length; i += 1) {
            newData.push(`Content-Disposition: form-data; name="${data[i].split('=')[0]}"\r\n\r\n${data[i].split('=')[1]}\r\n`);
          }
          postData = `--${boundary}\r\n${newData.join(`--${boundary}\r\n`)}--${boundary}--\r\n`;
        } else if (options.contentType === 'application/json') {
          postData = JSON.stringify(options.data);
        } else {
          postData = data;
        }
      }
    } else {
      postData = options.data;
      xhr.setRequestHeader('Content-Type', options.contentType);
    }
  }
  if (options.dataType === 'json' && (!options.headers || !options.headers.Accept)) {
    xhr.setRequestHeader('Accept', 'application/json');
  }

  // Additional headers
  if (options.headers) {
    Object.keys(options.headers).forEach(headerName => {
      if (typeof options.headers[headerName] === 'undefined') return;
      xhr.setRequestHeader(headerName, options.headers[headerName]);
    });
  }

  // Check for crossDomain
  if (typeof options.crossDomain === 'undefined') {
    options.crossDomain =
    // eslint-disable-next-line
    /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) && RegExp.$2 !== window.location.host;
  }
  if (!options.crossDomain) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }
  if (options.xhrFields) {
    extend(xhr, options.xhrFields);
  }

  // Handle XHR
  xhr.onload = function onload() {
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
      let responseData;
      if (options.dataType === 'json') {
        let parseError;
        try {
          responseData = JSON.parse(xhr.responseText);
        } catch (err) {
          parseError = true;
        }
        if (!parseError) {
          fireCallback('success', responseData, xhr.status, xhr);
          resolve(new RequestResponse({
            options,
            data: responseData,
            status: xhr.status,
            xhr
          }));
        } else {
          fireCallback('error', xhr, 'parseerror', 'parseerror');
          reject(new RequestError({
            options,
            xhr,
            status: 'parseerror',
            message: 'parseerror'
          }));
        }
      } else {
        responseData = xhr.responseType === 'text' || xhr.responseType === '' ? xhr.responseText : xhr.response;
        fireCallback('success', responseData, xhr.status, xhr);
        resolve(new RequestResponse({
          options,
          data: responseData,
          status: xhr.status,
          xhr
        }));
      }
    } else {
      fireCallback('error', xhr, xhr.status, xhr.statusText);
      reject(new RequestError({
        options,
        xhr,
        status: xhr.status,
        message: xhr.statusText
      }));
    }
    if (options.statusCode) {
      if (globals.statusCode && globals.statusCode[xhr.status]) globals.statusCode[xhr.status](xhr);
      if (options.statusCode[xhr.status]) options.statusCode[xhr.status](xhr);
    }
    fireCallback('complete', xhr, xhr.status);
  };
  xhr.onerror = function onerror() {
    fireCallback('error', xhr, xhr.status, xhr.status);
    reject(new RequestError({
      options,
      xhr,
      status: xhr.status,
      message: xhr.statusText
    }));
    fireCallback('complete', xhr, 'error');
  };

  // Timeout
  if (options.timeout > 0) {
    xhr.timeout = options.timeout;
    xhr.ontimeout = () => {
      fireCallback('error', xhr, 'timeout', 'timeout');
      reject(new RequestError({
        options,
        xhr,
        status: 'timeout',
        message: 'timeout'
      }));
      fireCallback('complete', xhr, 'timeout');
    };
  }

  // Ajax start callback
  proceedRequest = fireCallback('beforeSend', xhr, options);
  if (proceedRequest === false) {
    reject(new RequestError({
      options,
      xhr,
      status: 'canceled',
      message: 'canceled'
    }));
    return;
  }

  // Send XHR
  xhr.send(postData);
});
function requestShortcut(method) {
  let [url, data, success, error, dataType] = [];
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (typeof args[1] === 'function') {
    [url, success, error, dataType] = args;
  } else {
    [url, data, success, error, dataType] = args;
  }
  [success, error].forEach(callback => {
    if (typeof callback === 'string') {
      dataType = callback;
      if (callback === success) success = undefined;else error = undefined;
    }
  });
  dataType = dataType || (method === 'json' || method === 'postJSON' ? 'json' : undefined);
  const requestOptions = {
    url,
    method: method === 'post' || method === 'postJSON' ? 'POST' : 'GET',
    data,
    success,
    error,
    dataType
  };
  if (method === 'postJSON') {
    extend(requestOptions, {
      contentType: 'application/json',
      processData: false,
      crossDomain: true,
      data: typeof data === 'string' ? data : JSON.stringify(data)
    });
  }
  return request(requestOptions);
}
Object.assign(request, {
  get: function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return requestShortcut('get', ...args);
  },
  post: function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return requestShortcut('post', ...args);
  },
  json: function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return requestShortcut('json', ...args);
  },
  getJSON: function () {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    return requestShortcut('json', ...args);
  },
  postJSON: function () {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    return requestShortcut('postJSON', ...args);
  }
});
request.abortController = () => {
  const contoller = {
    canceled: false,
    onAbort: null,
    abort() {
      contoller.canceled = true;
      if (contoller.onAbort) contoller.onAbort();
    }
  };
  return contoller;
};
request.setup = function setup(options) {
  if (options.type && !options.method) {
    extend(options, {
      method: options.type
    });
  }
  extend(globals, options);
};
var request$1 = request;

var DeviceModule = {
  name: 'device',
  static: {
    getDevice
  },
  on: {
    init() {
      const document = getDocument();
      const device = getDevice();
      const classNames = [];
      const html = document.querySelector('html');
      const metaStatusbar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      if (!html) return;
      if (device.standalone && device.ios && metaStatusbar && metaStatusbar.content === 'black-translucent') {
        classNames.push('device-full-viewport');
      }

      // Pixel Ratio
      classNames.push(`device-pixel-ratio-${Math.floor(device.pixelRatio)}`);
      // OS classes
      if (device.os && !device.desktop) {
        classNames.push(`device-${device.os}`);
      } else if (device.desktop) {
        classNames.push('device-desktop');
        if (device.os) {
          classNames.push(`device-${device.os}`);
        }
      }
      if (device.cordova) {
        classNames.push('device-cordova');
      }
      if (device.capacitor) {
        classNames.push('device-capacitor');
      }

      // Add html classes
      classNames.forEach(className => {
        html.classList.add(className);
      });
    }
  }
};

var SupportModule = {
  name: 'support',
  static: {
    getSupport
  }
};

var UtilsModule = {
  name: 'utils',
  proto: {
    utils
  },
  static: {
    utils
  }
};

var ResizeModule = {
  name: 'resize',
  create() {
    const app = this;
    app.getSize = () => {
      if (!app.el) return {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      const offset = app.$el.offset();
      const [width, height, left, top] = [app.el.offsetWidth, app.el.offsetHeight, offset.left, offset.top];
      app.width = width;
      app.height = height;
      app.left = left;
      app.top = top;
      return {
        width,
        height,
        left,
        top
      };
    };
  },
  on: {
    init() {
      const app = this;
      const window = getWindow();

      // Get Size
      app.getSize();

      // Emit resize
      window.addEventListener('resize', () => {
        app.emit('resize');
      }, false);

      // Emit orientationchange
      window.addEventListener('orientationchange', () => {
        app.emit('orientationchange');
      });
    },
    orientationchange() {
      const document = getDocument();
      const device = getDevice();
      // Fix iPad weird body scroll
      if (device.ipad) {
        document.body.scrollLeft = 0;
        setTimeout(() => {
          document.body.scrollLeft = 0;
        }, 0);
      }
    },
    resize() {
      const app = this;
      app.getSize();
    }
  }
};

/* eslint no-param-reassign: "off" */
var RequestModule = {
  name: 'request',
  proto: {
    request: request$1
  },
  static: {
    request: request$1
  }
};

/* eslint-disable no-nested-ternary */
function initTouch() {
  const app = this;
  const device = getDevice();
  const support = getSupport();
  const window = getWindow();
  const document = getDocument();
  const params = app.params.touch;
  const useRipple = params[`${app.theme}TouchRipple`];
  if (device.ios && device.webView) {
    // Strange hack required for iOS 8 webview to work on inputs
    window.addEventListener('touchstart', () => {});
  }
  let touchStartX;
  let touchStartY;
  let targetElement;
  let isMoved;
  let tapHoldFired;
  let tapHoldTimeout;
  let preventClick;
  let activableElement;
  let activeTimeout;
  let rippleWave;
  let rippleTarget;
  let rippleTimeout;
  function findActivableElement(el) {
    const target = $(el);
    const parents = target.parents(params.activeStateElements);
    if (target.closest('.no-active-state').length) {
      return null;
    }
    let activable;
    if (target.is(params.activeStateElements)) {
      activable = target;
    }
    if (parents.length > 0) {
      activable = activable ? activable.add(parents) : parents;
    }
    if (activable && activable.length > 1) {
      const newActivable = [];
      let preventPropagation;
      for (let i = 0; i < activable.length; i += 1) {
        if (!preventPropagation) {
          newActivable.push(activable[i]);
          if (activable.eq(i).hasClass('prevent-active-state-propagation') || activable.eq(i).hasClass('no-active-state-propagation')) {
            preventPropagation = true;
          }
        }
      }
      activable = $(newActivable);
    }
    return activable || target;
  }
  function isInsideScrollableView(el) {
    const pageContent = el.parents('.page-content');
    return pageContent.length > 0;
  }
  function addActive() {
    if (!activableElement) return;
    activableElement.addClass('active-state');
  }
  function removeActive() {
    if (!activableElement) return;
    activableElement.removeClass('active-state');
    activableElement = null;
  }

  // Ripple handlers
  function findRippleElement(el) {
    const rippleElements = params.touchRippleElements;
    const $el = $(el);
    if ($el.is(rippleElements)) {
      if ($el.hasClass('no-ripple')) {
        return false;
      }
      return $el;
    }
    if ($el.parents(rippleElements).length > 0) {
      const rippleParent = $el.parents(rippleElements).eq(0);
      if (rippleParent.hasClass('no-ripple')) {
        return false;
      }
      return rippleParent;
    }
    return false;
  }
  function createRipple($el, x, y) {
    if (!$el) return;
    rippleWave = app.touchRipple.create(app, $el, x, y);
  }
  function removeRipple() {
    if (!rippleWave) return;
    rippleWave.remove();
    rippleWave = undefined;
    rippleTarget = undefined;
  }
  function rippleTouchStart(el) {
    rippleTarget = findRippleElement(el);
    if (!rippleTarget || rippleTarget.length === 0) {
      rippleTarget = undefined;
      return;
    }
    const inScrollable = isInsideScrollableView(rippleTarget);
    if (!inScrollable) {
      removeRipple();
      createRipple(rippleTarget, touchStartX, touchStartY);
    } else {
      clearTimeout(rippleTimeout);
      rippleTimeout = setTimeout(() => {
        removeRipple();
        createRipple(rippleTarget, touchStartX, touchStartY);
      }, 80);
    }
  }
  function rippleTouchMove() {
    clearTimeout(rippleTimeout);
    removeRipple();
  }
  function rippleTouchEnd() {
    if (!rippleWave && rippleTarget && !isMoved) {
      clearTimeout(rippleTimeout);
      createRipple(rippleTarget, touchStartX, touchStartY);
      setTimeout(removeRipple, 0);
    } else {
      removeRipple();
    }
  }

  // Mouse Handlers
  function handleMouseDown(e) {
    const $activableEl = findActivableElement(e.target);
    if ($activableEl) {
      $activableEl.addClass('active-state');
      if ('which' in e && e.which === 3) {
        setTimeout(() => {
          $('.active-state').removeClass('active-state');
        }, 0);
      }
    }
    if (useRipple) {
      touchStartX = e.pageX;
      touchStartY = e.pageY;
      rippleTouchStart(e.target, e.pageX, e.pageY);
    }
  }
  function handleMouseMove() {
    if (!params.activeStateOnMouseMove) {
      $('.active-state').removeClass('active-state');
    }
    if (useRipple) {
      rippleTouchMove();
    }
  }
  function handleMouseUp() {
    $('.active-state').removeClass('active-state');
    if (useRipple) {
      rippleTouchEnd();
    }
  }
  function handleTouchCancel() {
    targetElement = null;

    // Remove Active State
    clearTimeout(activeTimeout);
    clearTimeout(tapHoldTimeout);
    if (params.activeState) {
      removeActive();
    }

    // Remove Ripple
    if (useRipple) {
      rippleTouchEnd();
    }
  }
  let isScrolling;
  let isSegmentedStrong = false;
  let segmentedStrongEl = null;
  const touchMoveActivableIos = '.dialog-button, .actions-button';
  let isTouchMoveActivable = false;
  let touchmoveActivableEl = null;
  function handleTouchStart(e) {
    isMoved = false;
    tapHoldFired = false;
    preventClick = false;
    isScrolling = undefined;
    if (e.targetTouches.length > 1) {
      if (activableElement) removeActive();
      return true;
    }
    if (e.touches.length > 1 && activableElement) {
      removeActive();
    }
    if (params.tapHold) {
      if (tapHoldTimeout) clearTimeout(tapHoldTimeout);
      tapHoldTimeout = setTimeout(() => {
        if (e && e.touches && e.touches.length > 1) return;
        tapHoldFired = true;
        e.preventDefault();
        preventClick = true;
        $(e.target).trigger('taphold', e);
        app.emit('taphold', e);
      }, params.tapHoldDelay);
    }
    targetElement = e.target;
    touchStartX = e.targetTouches[0].pageX;
    touchStartY = e.targetTouches[0].pageY;
    isSegmentedStrong = e.target.closest('.segmented-strong .button-active, .segmented-strong .tab-link-active');
    isTouchMoveActivable = app.theme === 'ios' && e.target.closest(touchMoveActivableIos);
    if (isSegmentedStrong) {
      segmentedStrongEl = isSegmentedStrong.closest('.segmented-strong');
    }
    if (params.activeState) {
      activableElement = findActivableElement(targetElement);
      if (activableElement && !isInsideScrollableView(activableElement)) {
        addActive();
      } else if (activableElement) {
        activeTimeout = setTimeout(addActive, 80);
      }
    }
    if (useRipple) {
      rippleTouchStart(targetElement);
    }
    return true;
  }
  function handleTouchMove(e) {
    let touch;
    let distance;
    let shouldRemoveActive = true;
    if (e.type === 'touchmove') {
      touch = e.targetTouches[0];
      distance = params.touchClicksDistanceThreshold;
    }
    const touchCurrentX = e.targetTouches[0].pageX;
    const touchCurrentY = e.targetTouches[0].pageY;
    if (typeof isScrolling === 'undefined') {
      isScrolling = !!(isScrolling || Math.abs(touchCurrentY - touchStartY) > Math.abs(touchCurrentX - touchStartX));
    }
    if (isTouchMoveActivable || !isScrolling && isSegmentedStrong && segmentedStrongEl) {
      if (e.cancelable) e.preventDefault();
    }
    if (!isScrolling && isSegmentedStrong && segmentedStrongEl) {
      const elementFromPoint = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
      const buttonEl = elementFromPoint.closest('.segmented-strong .button:not(.button-active):not(.tab-link-active)');
      if (buttonEl && segmentedStrongEl.contains(buttonEl)) {
        $(buttonEl).trigger('click', 'f7Segmented');
        targetElement = buttonEl;
      }
    }
    if (distance && touch) {
      const pageX = touch.pageX;
      const pageY = touch.pageY;
      if (Math.abs(pageX - touchStartX) > distance || Math.abs(pageY - touchStartY) > distance) {
        isMoved = true;
      }
    } else {
      isMoved = true;
    }
    if (isMoved) {
      preventClick = true;
      // Keep active state on touchMove (for dialog and actions buttons)
      if (isTouchMoveActivable) {
        const elementFromPoint = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        touchmoveActivableEl = elementFromPoint.closest(touchMoveActivableIos);
        if (touchmoveActivableEl && activableElement && activableElement[0] === touchmoveActivableEl) {
          shouldRemoveActive = false;
        } else if (touchmoveActivableEl) {
          setTimeout(() => {
            activableElement = findActivableElement(touchmoveActivableEl);
            addActive();
          });
        }
      }
      if (params.tapHold) {
        clearTimeout(tapHoldTimeout);
      }
      if (params.activeState && shouldRemoveActive) {
        clearTimeout(activeTimeout);
        removeActive();
      }
      if (useRipple) {
        rippleTouchMove();
      }
    }
  }
  function handleTouchEnd(e) {
    isScrolling = undefined;
    isSegmentedStrong = false;
    segmentedStrongEl = null;
    isTouchMoveActivable = false;
    clearTimeout(activeTimeout);
    clearTimeout(tapHoldTimeout);
    if (touchmoveActivableEl) {
      $(touchmoveActivableEl).trigger('click', 'f7TouchMoveActivable');
      touchmoveActivableEl = null;
    }
    if (document.activeElement === e.target) {
      if (params.activeState) removeActive();
      if (useRipple) {
        rippleTouchEnd();
      }
      return true;
    }
    if (params.activeState) {
      addActive();
      setTimeout(removeActive, 0);
    }
    if (useRipple) {
      rippleTouchEnd();
    }
    if (params.tapHoldPreventClicks && tapHoldFired || preventClick) {
      if (e.cancelable) e.preventDefault();
      preventClick = true;
      return false;
    }
    return true;
  }
  function handleClick(e) {
    const isOverswipe = e && e.detail && e.detail === 'f7Overswipe';
    const isSegmented = e && e.detail && e.detail === 'f7Segmented';
    // eslint-disable-next-line
    const isTouchMoveActivable = e && e.detail && e.detail === 'f7TouchMoveActivable';
    let localPreventClick = preventClick;
    if (targetElement && e.target !== targetElement) {
      if (isOverswipe || isSegmented || isTouchMoveActivable) {
        localPreventClick = false;
      } else {
        localPreventClick = true;
      }
    } else if (isTouchMoveActivable) {
      localPreventClick = false;
    }
    if (params.tapHold && params.tapHoldPreventClicks && tapHoldFired) {
      localPreventClick = true;
    }
    if (localPreventClick) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
    if (params.tapHold) {
      tapHoldTimeout = setTimeout(() => {
        tapHoldFired = false;
      }, device.ios || device.androidChrome ? 100 : 400);
    }
    preventClick = false;
    targetElement = null;
    return !localPreventClick;
  }
  function emitAppTouchEvent(name, e) {
    app.emit({
      events: name,
      data: [e]
    });
  }
  function appClick(e) {
    emitAppTouchEvent('click', e);
  }
  function appTouchStartActive(e) {
    emitAppTouchEvent('touchstart touchstart:active', e);
  }
  function appTouchMoveActive(e) {
    emitAppTouchEvent('touchmove touchmove:active', e);
  }
  function appTouchEndActive(e) {
    emitAppTouchEvent('touchend touchend:active', e);
  }
  function appTouchStartPassive(e) {
    emitAppTouchEvent('touchstart:passive', e);
  }
  function appTouchMovePassive(e) {
    emitAppTouchEvent('touchmove:passive', e);
  }
  function appTouchEndPassive(e) {
    emitAppTouchEvent('touchend:passive', e);
  }
  const passiveListener = support.passiveListener ? {
    passive: true
  } : false;
  const passiveListenerCapture = support.passiveListener ? {
    passive: true,
    capture: true
  } : true;
  const activeListener = support.passiveListener ? {
    passive: false
  } : false;
  const activeListenerCapture = support.passiveListener ? {
    passive: false,
    capture: true
  } : true;
  document.addEventListener('click', appClick, true);
  if (support.passiveListener) {
    document.addEventListener(app.touchEvents.start, appTouchStartActive, activeListenerCapture);
    document.addEventListener(app.touchEvents.move, appTouchMoveActive, activeListener);
    document.addEventListener(app.touchEvents.end, appTouchEndActive, activeListener);
    document.addEventListener(app.touchEvents.start, appTouchStartPassive, passiveListenerCapture);
    document.addEventListener(app.touchEvents.move, appTouchMovePassive, passiveListener);
    document.addEventListener(app.touchEvents.end, appTouchEndPassive, passiveListener);
  } else {
    document.addEventListener(app.touchEvents.start, e => {
      appTouchStartActive(e);
      appTouchStartPassive(e);
    }, true);
    document.addEventListener(app.touchEvents.move, e => {
      appTouchMoveActive(e);
      appTouchMovePassive(e);
    }, false);
    document.addEventListener(app.touchEvents.end, e => {
      appTouchEndActive(e);
      appTouchEndPassive(e);
    }, false);
  }
  if (support.touch) {
    app.on('click', handleClick);
    app.on('touchstart', handleTouchStart);
    app.on('touchmove', handleTouchMove);
    app.on('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchCancel, {
      passive: true
    });
  } else if (params.activeState) {
    app.on('touchstart', handleMouseDown);
    app.on('touchmove', handleMouseMove);
    app.on('touchend', handleMouseUp);
    document.addEventListener('pointercancel', handleMouseUp, {
      passive: true
    });
  }
  document.addEventListener('contextmenu', e => {
    if (params.disableContextMenu && (device.ios || device.android || device.cordova || window.Capacitor && window.Capacitor.isNative)) {
      e.preventDefault();
    }
    if (useRipple) {
      if (activableElement) removeActive();
      rippleTouchEnd();
    }
  });
}
var TouchModule = {
  name: 'touch',
  params: {
    touch: {
      // Clicks
      touchClicksDistanceThreshold: 5,
      // ContextMenu
      disableContextMenu: false,
      // Tap Hold
      tapHold: false,
      tapHoldDelay: 750,
      tapHoldPreventClicks: true,
      // Active State
      activeState: true,
      activeStateElements: 'a, button, label, span, .actions-button, .stepper-button, .stepper-button-plus, .stepper-button-minus, .card-expandable, .menu-item, .link, .item-link, .accordion-item-toggle',
      activeStateOnMouseMove: false,
      mdTouchRipple: true,
      iosTouchRipple: false,
      auroraTouchRipple: false,
      touchRippleElements: '.ripple, .link, .item-link, .list-button, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell:not(.input-cell), .notification-close-button, .stepper-button, .stepper-button-minus, .stepper-button-plus, .menu-item-content, .list.accordion-list .accordion-item-toggle',
      touchRippleInsetElements: '.ripple-inset, .icon-only, .searchbar-disable-button, .input-clear-button, .notification-close-button, .md .navbar .link.back'
    }
  },
  create() {
    const app = this;
    const support = getSupport();
    extend(app, {
      touchEvents: {
        start: support.touch ? 'touchstart' : support.pointerEvents ? 'pointerdown' : 'mousedown',
        move: support.touch ? 'touchmove' : support.pointerEvents ? 'pointermove' : 'mousemove',
        end: support.touch ? 'touchend' : support.pointerEvents ? 'pointerup' : 'mouseup'
      }
    });
  },
  on: {
    init: initTouch
  }
};

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    }
                    else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

const History = {
  queue: [],
  clearQueue() {
    if (History.queue.length === 0) return;
    const currentQueue = History.queue.shift();
    currentQueue();
  },
  routerQueue: [],
  clearRouterQueue() {
    if (History.routerQueue.length === 0) return;
    const currentQueue = History.routerQueue.pop();
    const {
      router,
      stateUrl,
      action
    } = currentQueue;
    let animate = router.params.animate;
    if (router.params.browserHistoryAnimate === false) animate = false;
    if (action === 'back') {
      router.back({
        animate,
        browserHistory: false
      });
    }
    if (action === 'load') {
      router.navigate(stateUrl, {
        animate,
        browserHistory: false
      });
    }
  },
  handle(e) {
    if (History.blockPopstate) return;
    const app = this;
    // const mainView = app.views.main;
    let state = e.state;
    History.previousState = History.state;
    History.state = state;
    History.allowChange = true;
    History.clearQueue();
    state = History.state;
    if (!state) state = {};
    app.views.forEach(view => {
      const router = view.router;
      let viewState = state[view.id];
      if (!viewState && view.params.browserHistory) {
        viewState = {
          url: view.router.history[0]
        };
      }
      if (!viewState) return;
      const stateUrl = viewState.url || undefined;
      let animate = router.params.animate;
      if (router.params.browserHistoryAnimate === false) animate = false;
      if (stateUrl !== router.url) {
        if (router.history.indexOf(stateUrl) >= 0) {
          // Go Back
          if (router.allowPageChange) {
            router.back({
              animate,
              browserHistory: false
            });
          } else {
            History.routerQueue.push({
              action: 'back',
              router
            });
          }
        } else if (router.allowPageChange) {
          // Load page
          router.navigate(stateUrl, {
            animate,
            browserHistory: false
          });
        } else {
          History.routerQueue.unshift({
            action: 'load',
            stateUrl,
            router
          });
        }
      }
    });
  },
  initViewState(viewId, viewState) {
    const window = getWindow();
    const newState = extend({}, History.state || {}, {
      [viewId]: viewState
    });
    History.state = newState;
    window.history.replaceState(newState, '');
  },
  push(viewId, viewState, url) {
    const window = getWindow();
    const document = getDocument();
    /* eslint-disable no-param-reassign */
    if (url.substr(-3) === '#!/') {
      url = url.replace('#!/', '');
      if (url === '') {
        url = document.location.href;
        if (url.includes('#!/')) {
          url = document.location.href.split('#!/')[0];
        }
      }
    }
    /* eslint-enable no-param-reassign */
    if (!History.allowChange) {
      History.queue.push(() => {
        History.push(viewId, viewState, url);
      });
      return;
    }
    History.previousState = History.state;
    const newState = extend({}, History.previousState || {}, {
      [viewId]: viewState
    });
    History.state = newState;
    window.history.pushState(newState, '', url);
  },
  replace(viewId, viewState, url) {
    const window = getWindow();
    if (url.substr(-3) === '#!/') {
      // eslint-disable-next-line
      url = url.replace('#!/', '');
    }
    if (!History.allowChange) {
      History.queue.push(() => {
        History.replace(viewId, viewState, url);
      });
      return;
    }
    History.previousState = History.state;
    const newState = extend({}, History.previousState || {}, {
      [viewId]: viewState
    });
    History.state = newState;
    window.history.replaceState(newState, '', url);
  },
  go(index) {
    const window = getWindow();
    History.allowChange = false;
    window.history.go(index);
  },
  back() {
    const window = getWindow();
    History.allowChange = false;
    window.history.back();
  },
  allowChange: true,
  previousState: {},
  state: {},
  blockPopstate: true,
  init(app) {
    const window = getWindow();
    const document = getDocument();
    History.state = window.history.state;
    $(window).on('load', () => {
      setTimeout(() => {
        History.blockPopstate = false;
      }, 0);
    });
    if (document.readyState && document.readyState === 'complete') {
      History.blockPopstate = false;
    }
    $(window).on('popstate', History.handle.bind(app));
  }
};
var History$1 = History;

function SwipeBack(r) {
  const router = r;
  const {
    $el,
    $navbarsEl,
    app,
    params
  } = router;
  const support = getSupport();
  const device = getDevice();
  let isTouched = false;
  let isMoved = false;
  const touchesStart = {};
  let isScrolling;
  let $currentPageEl = [];
  let $previousPageEl = [];
  let viewContainerWidth;
  let touchesDiff;
  let allowViewTouchMove = true;
  let touchStartTime;
  let $currentNavbarEl = [];
  let $previousNavbarEl = [];
  let dynamicNavbar;
  let $pageShadowEl;
  let $pageOpacityEl;
  let animatableNavEls;
  const paramsSwipeBackAnimateShadow = params[`${app.theme}SwipeBackAnimateShadow`];
  const paramsSwipeBackAnimateOpacity = params[`${app.theme}SwipeBackAnimateOpacity`];
  const paramsSwipeBackActiveArea = params[`${app.theme}SwipeBackActiveArea`];
  const paramsSwipeBackThreshold = params[`${app.theme}SwipeBackThreshold`];
  const transformOrigin = app.rtl ? 'right center' : 'left center';
  const transformOriginTitleLarge = app.rtl ? 'calc(100% - var(--f7-navbar-large-title-padding-left) - var(--f7-safe-area-left)) center' : 'calc(var(--f7-navbar-large-title-padding-left) + var(--f7-safe-area-left)) center';
  function animatableNavElements() {
    const els = [];
    const inverter = app.rtl ? -1 : 1;
    const currentNavIsTransparent = $currentNavbarEl.hasClass('navbar-transparent') && !$currentNavbarEl.hasClass('navbar-large') && !$currentNavbarEl.hasClass('navbar-transparent-visible');
    const currentNavIsLarge = $currentNavbarEl.hasClass('navbar-large');
    const currentNavIsCollapsed = $currentNavbarEl.hasClass('navbar-large-collapsed');
    const currentNavIsLargeTransparent = $currentNavbarEl.hasClass('navbar-large-transparent') || $currentNavbarEl.hasClass('navbar-large') && $currentNavbarEl.hasClass('navbar-transparent');
    const previousNavIsTransparent = $previousNavbarEl.hasClass('navbar-transparent') && !$previousNavbarEl.hasClass('navbar-large') && !$previousNavbarEl.hasClass('navbar-transparent-visible');
    const previousNavIsLarge = $previousNavbarEl.hasClass('navbar-large');
    const previousNavIsCollapsed = $previousNavbarEl.hasClass('navbar-large-collapsed');
    const previousNavIsLargeTransparent = $previousNavbarEl.hasClass('navbar-large-transparent') || $previousNavbarEl.hasClass('navbar-large') && $previousNavbarEl.hasClass('navbar-transparent');
    const fromLarge = currentNavIsLarge && !currentNavIsCollapsed;
    const toLarge = previousNavIsLarge && !previousNavIsCollapsed;
    const $currentNavElements = $currentNavbarEl.find('.left, .title, .right, .subnavbar, .fading, .title-large, .navbar-bg');
    const $previousNavElements = $previousNavbarEl.find('.left, .title, .right, .subnavbar, .fading, .title-large, .navbar-bg');
    let activeNavBackIconText;
    let previousNavBackIconText;
    if (params.iosAnimateNavbarBackIcon) {
      if ($currentNavbarEl.hasClass('sliding') || $currentNavbarEl.find('.navbar-inner.sliding').length) {
        activeNavBackIconText = $currentNavbarEl.find('.left').find('.back .icon + span').eq(0);
      } else {
        activeNavBackIconText = $currentNavbarEl.find('.left.sliding').find('.back .icon + span').eq(0);
      }
      if ($previousNavbarEl.hasClass('sliding') || $previousNavbarEl.find('.navbar-inner.sliding').length) {
        previousNavBackIconText = $previousNavbarEl.find('.left').find('.back .icon + span').eq(0);
      } else {
        previousNavBackIconText = $previousNavbarEl.find('.left.sliding').find('.back .icon + span').eq(0);
      }
      if (activeNavBackIconText.length) {
        $previousNavElements.each(el => {
          if (!$(el).hasClass('title')) return;
          el.f7NavbarLeftOffset += activeNavBackIconText.prev('.icon')[0].offsetWidth;
        });
      }
    }
    $currentNavElements.each(navEl => {
      const $navEl = $(navEl);
      const isSubnavbar = $navEl.hasClass('subnavbar');
      const isLeft = $navEl.hasClass('left');
      const isTitle = $navEl.hasClass('title');
      const isBg = $navEl.hasClass('navbar-bg');
      if ((isTitle || isBg) && currentNavIsTransparent) return;
      if (!fromLarge && $navEl.hasClass('.title-large')) return;
      const el = {
        el: navEl
      };
      if (fromLarge) {
        if (isTitle) return;
        if ($navEl.hasClass('title-large')) {
          if (els.indexOf(el) < 0) els.push(el);
          el.overflow = 'visible';
          $navEl.find('.title-large-text').each(subNavEl => {
            els.push({
              el: subNavEl,
              transform: progress => `translateX(${progress * 100 * inverter}%)`
            });
          });
          return;
        }
      }
      if (toLarge) {
        if (!fromLarge) {
          if ($navEl.hasClass('title-large')) {
            if (els.indexOf(el) < 0) els.push(el);
            el.opacity = 0;
          }
        }
        if (isLeft) {
          if (els.indexOf(el) < 0) els.push(el);
          el.opacity = progress => 1 - progress ** 0.33;
          $navEl.find('.back span').each(subNavEl => {
            els.push({
              el: subNavEl,
              'transform-origin': transformOrigin,
              transform: progress => `translateX(calc(${progress} * (var(--f7-navbarTitleLargeOffset) - var(--f7-navbarLeftTextOffset)))) translateY(calc(${progress} * (var(--f7-navbar-large-title-height) - var(--f7-navbar-large-title-padding-vertical) / 2))) scale(${1 + 1 * progress})`
            });
          });
          return;
        }
      }
      if (isBg) {
        if (els.indexOf(el) < 0) els.push(el);
        if (!fromLarge && !toLarge) {
          if (currentNavIsCollapsed) {
            if (currentNavIsLargeTransparent) {
              el.className = 'ios-swipeback-navbar-bg-large';
            }
            el.transform = progress => `translateX(${100 * progress * inverter}%) translateY(calc(-1 * var(--f7-navbar-large-title-height)))`;
          } else {
            el.transform = progress => `translateX(${100 * progress * inverter}%)`;
          }
        }
        if (!fromLarge && toLarge) {
          el.className = 'ios-swipeback-navbar-bg-large';
          el.transform = progress => `translateX(${100 * progress * inverter}%) translateY(calc(-1 * ${1 - progress} * var(--f7-navbar-large-title-height)))`;
        }
        if (fromLarge && toLarge) {
          el.transform = progress => `translateX(${100 * progress * inverter}%)`;
        }
        if (fromLarge && !toLarge) {
          el.transform = progress => `translateX(${100 * progress * inverter}%) translateY(calc(-${progress} * var(--f7-navbar-large-title-height)))`;
        }
        return;
      }
      if ($navEl.hasClass('title-large')) return;
      const isSliding = $navEl.hasClass('sliding') || $navEl.parents('.navbar-inner.sliding').length;
      if (els.indexOf(el) < 0) els.push(el);
      if (!isSubnavbar || isSubnavbar && !isSliding) {
        el.opacity = progress => 1 - progress ** 0.33;
      }
      if (isSliding) {
        let transformTarget = el;
        if (isLeft && activeNavBackIconText.length && params.iosAnimateNavbarBackIcon) {
          const textEl = {
            el: activeNavBackIconText[0]
          };
          transformTarget = textEl;
          els.push(textEl);
        }
        transformTarget.transform = progress => {
          let activeNavTranslate = progress * transformTarget.el.f7NavbarRightOffset;
          if (device.pixelRatio === 1) activeNavTranslate = Math.round(activeNavTranslate);
          if (isSubnavbar && currentNavIsLarge) {
            return `translate3d(${activeNavTranslate}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)`;
          }
          return `translate3d(${activeNavTranslate}px,0,0)`;
        };
      }
    });
    $previousNavElements.each(navEl => {
      const $navEl = $(navEl);
      const isSubnavbar = $navEl.hasClass('subnavbar');
      const isLeft = $navEl.hasClass('left');
      const isTitle = $navEl.hasClass('title');
      const isBg = $navEl.hasClass('navbar-bg');
      if ((isTitle || isBg) && previousNavIsTransparent) return;
      const el = {
        el: navEl
      };
      if (toLarge) {
        if (isTitle) return;
        if (els.indexOf(el) < 0) els.push(el);
        if ($navEl.hasClass('title-large')) {
          el.opacity = 1;
          el.overflow = 'visible';
          $navEl.find('.title-large-text').each(subNavEl => {
            els.push({
              el: subNavEl,
              'transform-origin': transformOriginTitleLarge,
              opacity: progress => progress ** 3,
              transform: progress => `translateX(calc(${1 - progress} * (var(--f7-navbarLeftTextOffset) - var(--f7-navbarTitleLargeOffset)))) translateY(calc(${progress - 1} * var(--f7-navbar-large-title-height) + ${1 - progress} * var(--f7-navbar-large-title-padding-vertical))) scale(${0.5 + progress * 0.5})`
            });
          });
          return;
        }
      }
      if (isBg) {
        if (els.indexOf(el) < 0) els.push(el);
        if (!fromLarge && !toLarge) {
          if (previousNavIsCollapsed) {
            if (previousNavIsLargeTransparent) {
              el.className = 'ios-swipeback-navbar-bg-large';
            }
            el.transform = progress => `translateX(${(-100 + 100 * progress) * inverter}%) translateY(calc(-1 * var(--f7-navbar-large-title-height)))`;
          } else {
            el.transform = progress => `translateX(${(-100 + 100 * progress) * inverter}%)`;
          }
        }
        if (!fromLarge && toLarge) {
          el.transform = progress => `translateX(${(-100 + 100 * progress) * inverter}%) translateY(calc(-1 * ${1 - progress} * var(--f7-navbar-large-title-height)))`;
        }
        if (fromLarge && !toLarge) {
          el.className = 'ios-swipeback-navbar-bg-large';
          el.transform = progress => `translateX(${(-100 + 100 * progress) * inverter}%) translateY(calc(-${progress} * var(--f7-navbar-large-title-height)))`;
        }
        if (fromLarge && toLarge) {
          el.transform = progress => `translateX(${(-100 + 100 * progress) * inverter}%)`;
        }
        return;
      }
      if ($navEl.hasClass('title-large')) return;
      const isSliding = $navEl.hasClass('sliding') || $previousNavbarEl.children('.navbar-inner.sliding').length;
      if (els.indexOf(el) < 0) els.push(el);
      if (!isSubnavbar || isSubnavbar && !isSliding) {
        el.opacity = progress => progress ** 3;
      }
      if (isSliding) {
        let transformTarget = el;
        if (isLeft && previousNavBackIconText.length && params.iosAnimateNavbarBackIcon) {
          const textEl = {
            el: previousNavBackIconText[0]
          };
          transformTarget = textEl;
          els.push(textEl);
        }
        transformTarget.transform = progress => {
          let previousNavTranslate = transformTarget.el.f7NavbarLeftOffset * (1 - progress);
          if (device.pixelRatio === 1) previousNavTranslate = Math.round(previousNavTranslate);
          if (isSubnavbar && previousNavIsLarge) {
            return `translate3d(${previousNavTranslate}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)`;
          }
          return `translate3d(${previousNavTranslate}px,0,0)`;
        };
      }
    });
    return els;
  }
  function setAnimatableNavElements(_temp) {
    let {
      progress,
      reset,
      transition,
      reflow
    } = _temp === void 0 ? {} : _temp;
    const styles = ['overflow', 'transform', 'transform-origin', 'opacity'];
    if (transition === true || transition === false) {
      for (let i = 0; i < animatableNavEls.length; i += 1) {
        const el = animatableNavEls[i];
        if (el && el.el) {
          if (transition === true) el.el.classList.add('navbar-page-transitioning');
          if (transition === false) el.el.classList.remove('navbar-page-transitioning');
        }
      }
    }
    if (reflow && animatableNavEls.length && animatableNavEls[0] && animatableNavEls[0].el) {
      // eslint-disable-next-line
      animatableNavEls[0].el._clientLeft = animatableNavEls[0].el.clientLeft;
    }
    for (let i = 0; i < animatableNavEls.length; i += 1) {
      const el = animatableNavEls[i];
      if (el && el.el) {
        if (el.className && !el.classNameSet && !reset) {
          el.el.classList.add(el.className);
          el.classNameSet = true;
        }
        if (el.className && reset) {
          el.el.classList.remove(el.className);
        }
        for (let j = 0; j < styles.length; j += 1) {
          const styleProp = styles[j];
          if (el[styleProp]) {
            if (reset) {
              el.el.style[styleProp] = '';
            } else if (typeof el[styleProp] === 'function') {
              el.el.style[styleProp] = el[styleProp](progress);
            } else {
              el.el.style[styleProp] = el[styleProp];
            }
          }
        }
      }
    }
  }
  function handleTouchStart(e) {
    const swipeBackEnabled = params[`${app.theme}SwipeBack`];
    if (!allowViewTouchMove || !swipeBackEnabled || isTouched || app.swipeout && app.swipeout.el || !router.allowPageChange) return;
    if ($(e.target).closest('.range-slider, .calendar-months').length > 0) return;
    if ($(e.target).closest('.page-master, .page-master-detail').length > 0 && params.masterDetailBreakpoint > 0 && app.width >= params.masterDetailBreakpoint) return;
    isMoved = false;
    isTouched = true;
    isScrolling = undefined;
    touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    touchStartTime = now();
    dynamicNavbar = router.dynamicNavbar;
  }
  function handleTouchMove(e) {
    if (!isTouched) return;
    const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (typeof isScrolling === 'undefined') {
      isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x)) || pageX < touchesStart.x && !app.rtl || pageX > touchesStart.x && app.rtl;
    }
    if (isScrolling || e.f7PreventSwipeBack || app.preventSwipeBack) {
      isTouched = false;
      return;
    }
    if (!isMoved) {
      // Calc values during first move fired
      let cancel = false;
      const target = $(e.target);
      const swipeout = target.closest('.swipeout');
      if (swipeout.length > 0) {
        if (!app.rtl && swipeout.find('.swipeout-actions-left').length > 0) cancel = true;
        if (app.rtl && swipeout.find('.swipeout-actions-right').length > 0) cancel = true;
      }
      $currentPageEl = target.closest('.page');
      if ($currentPageEl.hasClass('no-swipeback') || target.closest('.no-swipeback, .card-opened').length > 0) cancel = true;
      $previousPageEl = $el.find('.page-previous:not(.stacked)');
      if ($previousPageEl.length > 1) {
        $previousPageEl = $previousPageEl.eq($previousPageEl.length - 1);
      }
      let notFromBorder = touchesStart.x - $el.offset().left > paramsSwipeBackActiveArea;
      viewContainerWidth = $el.width();
      if (app.rtl) {
        notFromBorder = touchesStart.x < $el.offset().left - $el[0].scrollLeft + (viewContainerWidth - paramsSwipeBackActiveArea);
      } else {
        notFromBorder = touchesStart.x - $el.offset().left > paramsSwipeBackActiveArea;
      }
      if (notFromBorder) cancel = true;
      if ($previousPageEl.length === 0 || $currentPageEl.length === 0) cancel = true;
      if (cancel) {
        isTouched = false;
        return;
      }
      if (paramsSwipeBackAnimateShadow) {
        $pageShadowEl = $currentPageEl.find('.page-shadow-effect');
        if ($pageShadowEl.length === 0) {
          $pageShadowEl = $('<div class="page-shadow-effect"></div>');
          $currentPageEl.append($pageShadowEl);
        }
      }
      if (paramsSwipeBackAnimateOpacity) {
        $pageOpacityEl = $previousPageEl.find('.page-opacity-effect');
        if ($pageOpacityEl.length === 0) {
          $pageOpacityEl = $('<div class="page-opacity-effect"></div>');
          $previousPageEl.append($pageOpacityEl);
        }
      }
      if (dynamicNavbar) {
        $currentNavbarEl = $navbarsEl.find('.navbar-current:not(.stacked)');
        $previousNavbarEl = $navbarsEl.find('.navbar-previous:not(.stacked)');
        if ($previousNavbarEl.length > 1) {
          $previousNavbarEl = $previousNavbarEl.eq($previousNavbarEl.length - 1);
        }
        animatableNavEls = animatableNavElements();
      }

      // Close/Hide Any Picker
      if ($('.sheet.modal-in').length > 0 && app.sheet) {
        app.sheet.close($('.sheet.modal-in'));
      }
    }
    e.f7PreventSwipePanel = true;
    isMoved = true;
    app.preventSwipePanelBySwipeBack = true;
    e.preventDefault();

    // RTL inverter
    const inverter = app.rtl ? -1 : 1;

    // Touches diff
    touchesDiff = (pageX - touchesStart.x - paramsSwipeBackThreshold) * inverter;
    if (touchesDiff < 0) touchesDiff = 0;
    const percentage = Math.min(Math.max(touchesDiff / viewContainerWidth, 0), 1);

    // Swipe Back Callback
    const callbackData = {
      percentage,
      progress: percentage,
      currentPageEl: $currentPageEl[0],
      previousPageEl: $previousPageEl[0],
      currentNavbarEl: $currentNavbarEl[0],
      previousNavbarEl: $previousNavbarEl[0]
    };
    $el.trigger('swipeback:move', callbackData);
    router.emit('swipebackMove', callbackData);

    // Transform pages
    let currentPageTranslate = touchesDiff * inverter;
    let previousPageTranslate = (touchesDiff / 5 - viewContainerWidth / 5) * inverter;
    if (!app.rtl) {
      currentPageTranslate = Math.min(currentPageTranslate, viewContainerWidth);
      previousPageTranslate = Math.min(previousPageTranslate, 0);
    } else {
      currentPageTranslate = Math.max(currentPageTranslate, -viewContainerWidth);
      previousPageTranslate = Math.max(previousPageTranslate, 0);
    }
    if (device.pixelRatio === 1) {
      currentPageTranslate = Math.round(currentPageTranslate);
      previousPageTranslate = Math.round(previousPageTranslate);
    }
    router.swipeBackActive = true;
    $([$currentPageEl[0], $previousPageEl[0]]).addClass('page-swipeback-active');
    $currentPageEl.transform(`translate3d(${currentPageTranslate}px,0,0)`);
    if (paramsSwipeBackAnimateShadow) $pageShadowEl[0].style.opacity = 1 - 1 * percentage;
    if (app.theme === 'ios') {
      $previousPageEl.transform(`translate3d(${previousPageTranslate}px,0,0)`);
    }
    if (paramsSwipeBackAnimateOpacity) $pageOpacityEl[0].style.opacity = 1 - 1 * percentage;

    // Dynamic Navbars Animation
    if (!dynamicNavbar) return;
    setAnimatableNavElements({
      progress: percentage
    });
  }
  function handleTouchEnd() {
    app.preventSwipePanelBySwipeBack = false;
    if (!isTouched || !isMoved) {
      isTouched = false;
      isMoved = false;
      return;
    }
    isTouched = false;
    isMoved = false;
    router.swipeBackActive = false;
    const $pages = $([$currentPageEl[0], $previousPageEl[0]]);
    $pages.removeClass('page-swipeback-active');
    if (touchesDiff === 0) {
      $pages.transform('');
      if ($pageShadowEl && $pageShadowEl.length > 0) $pageShadowEl.remove();
      if ($pageOpacityEl && $pageOpacityEl.length > 0) $pageOpacityEl.remove();
      if (dynamicNavbar) {
        setAnimatableNavElements({
          reset: true
        });
      }
      return;
    }
    const timeDiff = now() - touchStartTime;
    let pageChanged = false;
    // Swipe back to previous page
    if (timeDiff < 300 && touchesDiff > 10 || timeDiff >= 300 && touchesDiff > viewContainerWidth / 2) {
      $currentPageEl.removeClass('page-current').addClass(`page-next${app.theme !== 'ios' ? ' page-next-on-right' : ''}`);
      $previousPageEl.removeClass('page-previous').addClass('page-current').removeAttr('aria-hidden');
      if ($pageShadowEl) $pageShadowEl[0].style.opacity = '';
      if ($pageOpacityEl) $pageOpacityEl[0].style.opacity = '';
      if (dynamicNavbar) {
        router.setNavbarPosition($currentNavbarEl, 'next');
        router.setNavbarPosition($previousNavbarEl, 'current', false);
      }
      pageChanged = true;
    }
    // Reset custom styles
    // Add transitioning class for transition-duration
    $pages.addClass('page-transitioning page-transitioning-swipeback');
    if (device.ios) {
      // eslint-disable-next-line
      $currentPageEl[0]._clientLeft = $currentPageEl[0].clientLeft;
    }
    $pages.transform('');
    if (dynamicNavbar) {
      setAnimatableNavElements({
        progress: pageChanged ? 1 : 0,
        transition: true,
        reflow: !!device.ios
      });
    }
    allowViewTouchMove = false;
    router.allowPageChange = false;

    // Swipe Back Callback
    const callbackData = {
      currentPageEl: $currentPageEl[0],
      previousPageEl: $previousPageEl[0],
      currentNavbarEl: $currentNavbarEl[0],
      previousNavbarEl: $previousNavbarEl[0]
    };
    if (pageChanged) {
      // Update Route
      router.currentRoute = $previousPageEl[0].f7Page.route;
      router.currentPage = $previousPageEl[0];

      // Page before animation callback
      router.pageCallback('beforeOut', $currentPageEl, $currentNavbarEl, 'current', 'next', {
        route: $currentPageEl[0].f7Page.route,
        swipeBack: true
      });
      router.pageCallback('beforeIn', $previousPageEl, $previousNavbarEl, 'previous', 'current', {
        route: $previousPageEl[0].f7Page.route,
        swipeBack: true
      }, $currentPageEl[0]);
      $el.trigger('swipeback:beforechange', callbackData);
      router.emit('swipebackBeforeChange', callbackData);
    } else {
      $el.trigger('swipeback:beforereset', callbackData);
      router.emit('swipebackBeforeReset', callbackData);
    }
    $currentPageEl.transitionEnd(() => {
      $pages.removeClass('page-transitioning page-transitioning-swipeback');
      if (dynamicNavbar) {
        setAnimatableNavElements({
          reset: true,
          transition: false
        });
      }
      allowViewTouchMove = true;
      router.allowPageChange = true;
      if (pageChanged) {
        // Update History
        if (router.history.length === 1) {
          router.history.unshift(router.url);
        }
        router.history.pop();
        router.saveHistory();

        // Update push state
        if (params.browserHistory) {
          History$1.back();
        }

        // Page after animation callback
        router.pageCallback('afterOut', $currentPageEl, $currentNavbarEl, 'current', 'next', {
          route: $currentPageEl[0].f7Page.route,
          swipeBack: true
        });
        router.pageCallback('afterIn', $previousPageEl, $previousNavbarEl, 'previous', 'current', {
          route: $previousPageEl[0].f7Page.route,
          swipeBack: true
        });

        // Remove Old Page
        if (params.stackPages && router.initialPages.indexOf($currentPageEl[0]) >= 0) {
          $currentPageEl.addClass('stacked');
          if (dynamicNavbar) {
            $currentNavbarEl.addClass('stacked');
          }
        } else {
          router.pageCallback('beforeRemove', $currentPageEl, $currentNavbarEl, 'next', {
            swipeBack: true
          });
          router.removePage($currentPageEl);
          if (dynamicNavbar) {
            router.removeNavbar($currentNavbarEl);
          }
        }
        $el.trigger('swipeback:afterchange', callbackData);
        router.emit('swipebackAfterChange', callbackData);
        router.emit('routeChanged', router.currentRoute, router.previousRoute, router);
        if (params.preloadPreviousPage) {
          router.back(router.history[router.history.length - 2], {
            preload: true
          });
        }
      } else {
        $el.trigger('swipeback:afterreset', callbackData);
        router.emit('swipebackAfterReset', callbackData);
      }
      if ($pageShadowEl && $pageShadowEl.length > 0) $pageShadowEl.remove();
      if ($pageOpacityEl && $pageOpacityEl.length > 0) $pageOpacityEl.remove();
    });
  }
  function attachEvents() {
    const passiveListener = app.touchEvents.start === 'touchstart' && support.passiveListener ? {
      passive: true,
      capture: false
    } : false;
    $el.on(app.touchEvents.start, handleTouchStart, passiveListener);
    app.on('touchmove:active', handleTouchMove);
    app.on('touchend:passive', handleTouchEnd);
  }
  function detachEvents() {
    const passiveListener = app.touchEvents.start === 'touchstart' && support.passiveListener ? {
      passive: true,
      capture: false
    } : false;
    $el.off(app.touchEvents.start, handleTouchStart, passiveListener);
    app.off('touchmove:active', handleTouchMove);
    app.off('touchend:passive', handleTouchEnd);
  }
  attachEvents();
  router.on('routerDestroy', detachEvents);
}

function redirect(direction, route, options) {
  const router = this;
  const r = route.route.redirect;
  const method = direction === 'forward' ? 'navigate' : 'back';
  if (options.initial && router.params.browserHistory) {
    options.replaceState = true; // eslint-disable-line
    options.history = true; // eslint-disable-line
  }

  function redirectResolve(redirectUrl, redirectOptions) {
    if (redirectOptions === void 0) {
      redirectOptions = {};
    }
    router.allowPageChange = true;
    router[method](redirectUrl, extend({}, options, redirectOptions));
  }
  function redirectReject() {
    router.allowPageChange = true;
  }
  if (typeof r === 'function') {
    router.allowPageChange = false;
    const redirectUrl = r.call(router, {
      router,
      to: route,
      resolve: redirectResolve,
      reject: redirectReject,
      direction,
      app: router.app
    });
    if (redirectUrl && typeof redirectUrl === 'string') {
      router.allowPageChange = true;
      return router[method](redirectUrl, options);
    }
    return router;
  }
  return router[method](r, options);
}

function processQueue(router, routerQueue, routeQueue, to, from, resolve, reject, direction) {
  const queue = [];
  if (Array.isArray(routeQueue)) {
    queue.push(...routeQueue);
  } else if (routeQueue && typeof routeQueue === 'function') {
    queue.push(routeQueue);
  }
  if (routerQueue) {
    if (Array.isArray(routerQueue)) {
      queue.push(...routerQueue);
    } else {
      queue.push(routerQueue);
    }
  }
  function next() {
    if (queue.length === 0) {
      resolve();
      return;
    }
    const queueItem = queue.shift();
    queueItem.call(router, {
      router,
      to,
      from,
      resolve() {
        next();
      },
      reject() {
        reject();
      },
      direction,
      app: router.app
    });
  }
  next();
}
function processRouteQueue(to, from, resolve, reject, direction) {
  const router = this;
  function enterNextRoute() {
    if (to && to.route && (router.params.routesBeforeEnter || to.route.beforeEnter)) {
      router.allowPageChange = false;
      processQueue(router, router.params.routesBeforeEnter, to.route.beforeEnter, to, from, () => {
        router.allowPageChange = true;
        resolve();
      }, () => {
        reject();
      }, direction);
    } else {
      resolve();
    }
  }
  function leaveCurrentRoute() {
    if (from && from.route && (router.params.routesBeforeLeave || from.route.beforeLeave)) {
      router.allowPageChange = false;
      processQueue(router, router.params.routesBeforeLeave, from.route.beforeLeave, to, from, () => {
        router.allowPageChange = true;
        enterNextRoute();
      }, () => {
        reject();
      }, direction);
    } else {
      enterNextRoute();
    }
  }
  leaveCurrentRoute();
}

function appRouterCheck(router, method) {
  if (!router.view) {
    throw new Error(`Framework7: it is not allowed to use router methods on global app router. Use router methods only on related View, e.g. app.views.main.router.${method}(...)`);
  }
}

function asyncComponent(router, component, resolve, reject) {
  function resolvePromise(componentPromise) {
    componentPromise.then(c => {
      // eslint-disable-next-line
      resolve({
        component: c.default || c._default || c
      });
    }).catch(err => {
      reject();
      throw new Error(err);
    });
  }
  if (component instanceof Promise) {
    resolvePromise(component);
    return;
  }
  const asyncComponentResult = component.call(router);
  if (asyncComponentResult instanceof Promise) {
    resolvePromise(asyncComponentResult);
  } else {
    resolve({
      component: asyncComponentResult
    });
  }
}

function refreshPage() {
  const router = this;
  appRouterCheck(router, 'refreshPage');
  return router.navigate(router.currentRoute.url, {
    ignoreCache: true,
    reloadCurrent: true
  });
}
function forward(router, el, forwardOptions) {
  if (forwardOptions === void 0) {
    forwardOptions = {};
  }
  const document = getDocument();
  const $el = $(el);
  const app = router.app;
  const view = router.view;
  const options = extend(false, {
    animate: router.params.animate,
    browserHistory: true,
    replaceState: false,
    history: true,
    reloadCurrent: router.params.reloadPages,
    reloadPrevious: false,
    reloadAll: false,
    clearPreviousHistory: false,
    reloadDetail: router.params.reloadDetail,
    on: {}
  }, forwardOptions);
  const masterDetailEnabled = router.params.masterDetailBreakpoint > 0;
  const isMaster = masterDetailEnabled && options.route && options.route.route && (options.route.route.master === true || typeof options.route.route.master === 'function' && options.route.route.master(app, router));
  let masterPageEl;
  let otherDetailPageEl;
  let detailsInBetweenRemoved = 0;
  let currentRouteIsModal = router.currentRoute.modal;
  let modalType;
  if (!currentRouteIsModal) {
    'popup popover sheet loginScreen actions customModal panel'.split(' ').forEach(modalLoadProp => {
      if (router.currentRoute && router.currentRoute.route && router.currentRoute.route[modalLoadProp]) {
        currentRouteIsModal = true;
        modalType = modalLoadProp;
      }
    });
  }
  if (currentRouteIsModal) {
    const modalToClose = router.currentRoute.modal || router.currentRoute.route.modalInstance || app[modalType].get();
    const previousUrl = router.history[router.history.length - 2];
    let previousRoute = router.findMatchingRoute(previousUrl);
    if (!previousRoute && previousUrl) {
      previousRoute = {
        url: previousUrl,
        path: previousUrl.split('?')[0],
        query: parseUrlQuery(previousUrl),
        route: {
          path: previousUrl.split('?')[0],
          url: previousUrl
        }
      };
    }
    router.modalRemove(modalToClose);
  }
  const dynamicNavbar = router.dynamicNavbar;
  const $viewEl = router.$el;
  const $newPage = $el;
  const reload = options.reloadPrevious || options.reloadCurrent || options.reloadAll;
  let $oldPage;
  let $navbarsEl;
  let $newNavbarEl;
  let $oldNavbarEl;
  router.allowPageChange = false;
  if ($newPage.length === 0) {
    router.allowPageChange = true;
    return router;
  }
  if ($newPage.length) {
    // Remove theme elements
    router.removeThemeElements($newPage);
  }
  if (dynamicNavbar) {
    $newNavbarEl = $newPage.children('.navbar');
    $navbarsEl = router.$navbarsEl;
    if ($newNavbarEl.length === 0 && $newPage[0] && $newPage[0].f7Page) {
      // Try from pageData
      $newNavbarEl = $newPage[0].f7Page.$navbarEl;
    }
  }

  // Save Keep Alive Cache
  if (options.route && options.route.route && options.route.route.keepAlive && !options.route.route.keepAliveData) {
    options.route.route.keepAliveData = {
      pageEl: $el[0]
    };
  }

  // Pages In View
  const $pagesInView = $viewEl.children('.page:not(.stacked)').filter(pageInView => pageInView !== $newPage[0]);

  // Navbars In View
  let $navbarsInView;
  if (dynamicNavbar) {
    $navbarsInView = $navbarsEl.children('.navbar:not(.stacked)').filter(navbarInView => navbarInView !== $newNavbarEl[0]);
  }

  // Exit when reload previous and only 1 page in view so nothing ro reload
  if (options.reloadPrevious && $pagesInView.length < 2) {
    router.allowPageChange = true;
    return router;
  }

  // Find Detail' master page
  let isDetail;
  let reloadDetail;
  let isDetailRoot;
  if (masterDetailEnabled && !options.reloadAll) {
    for (let i = 0; i < $pagesInView.length; i += 1) {
      if (!masterPageEl && $pagesInView[i].classList.contains('page-master')) {
        masterPageEl = $pagesInView[i];
        continue; // eslint-disable-line
      }
    }

    isDetail = !isMaster && masterPageEl;
    if (isDetail) {
      // Find Other Detail
      if (masterPageEl) {
        for (let i = 0; i < $pagesInView.length; i += 1) {
          if ($pagesInView[i].classList.contains('page-master-detail')) {
            otherDetailPageEl = $pagesInView[i];
            continue; // eslint-disable-line
          }
        }
      }
    }

    reloadDetail = isDetail && options.reloadDetail && app.width >= router.params.masterDetailBreakpoint && masterPageEl;
  }
  if (isDetail) {
    isDetailRoot = !otherDetailPageEl || reloadDetail || options.reloadAll || options.reloadCurrent;
  }

  // New Page
  let newPagePosition = 'next';
  if (options.reloadCurrent || options.reloadAll || reloadDetail) {
    newPagePosition = 'current';
  } else if (options.reloadPrevious) {
    newPagePosition = 'previous';
  }
  $newPage.removeClass('page-previous page-current page-next').addClass(`page-${newPagePosition}${isMaster ? ' page-master' : ''}${isDetail ? ' page-master-detail' : ''}${isDetailRoot ? ' page-master-detail-root' : ''}`).removeClass('stacked').trigger('page:unstack').trigger('page:position', {
    position: newPagePosition
  });
  router.emit('pageUnstack', $newPage[0]);
  router.emit('pagePosition', $newPage[0], newPagePosition);
  if (isMaster || isDetail) {
    $newPage.trigger('page:role', {
      role: isMaster ? 'master' : 'detail',
      root: !!isDetailRoot
    });
    router.emit('pageRole', $newPage[0], {
      role: isMaster ? 'master' : 'detail',
      detailRoot: !!isDetailRoot
    });
  }
  if (dynamicNavbar && $newNavbarEl.length) {
    $newNavbarEl.removeClass('navbar-previous navbar-current navbar-next').addClass(`navbar-${newPagePosition}${isMaster ? ' navbar-master' : ''}${isDetail ? ' navbar-master-detail' : ''}${isDetailRoot ? ' navbar-master-detail-root' : ''}`).removeClass('stacked');
    $newNavbarEl.trigger('navbar:position', {
      position: newPagePosition
    });
    router.emit('navbarPosition', $newNavbarEl[0], newPagePosition);
    if (isMaster || isDetail) {
      router.emit('navbarRole', $newNavbarEl[0], {
        role: isMaster ? 'master' : 'detail',
        detailRoot: !!isDetailRoot
      });
    }
  }

  // Find Old Page
  if (options.reloadCurrent || reloadDetail) {
    if (reloadDetail) {
      $oldPage = $pagesInView.filter(pageEl => !pageEl.classList.contains('page-master'));
      if (dynamicNavbar) {
        $oldNavbarEl = $($oldPage.map(pageEl => app.navbar.getElByPage(pageEl)));
      }
      if ($oldPage.length > 1 && masterPageEl) {
        detailsInBetweenRemoved = $oldPage.length - 1;
        $(masterPageEl).removeClass('page-master-stacked').trigger('page:masterunstack');
        router.emit('pageMasterUnstack', masterPageEl);
        if (dynamicNavbar) {
          $(app.navbar.getElByPage(masterPageEl)).removeClass('navbar-master-stacked');
          router.emit('navbarMasterUnstack', app.navbar.getElByPage(masterPageEl));
        }
      }
    } else {
      $oldPage = $pagesInView.eq($pagesInView.length - 1);
      if (dynamicNavbar) {
        $oldNavbarEl = $(app.navbar.getElByPage($oldPage));
      }
    }
  } else if (options.reloadPrevious) {
    $oldPage = $pagesInView.eq($pagesInView.length - 2);
    if (dynamicNavbar) {
      // $oldNavbarEl = $navbarsInView.eq($pagesInView.length - 2);
      $oldNavbarEl = $(app.navbar.getElByPage($oldPage));
    }
  } else if (options.reloadAll) {
    $oldPage = $pagesInView.filter(pageEl => pageEl !== $newPage[0]);
    if (dynamicNavbar) {
      $oldNavbarEl = $navbarsInView.filter(navbarEl => navbarEl !== $newNavbarEl[0]);
    }
  } else {
    let removedPageEls = [];
    let removedNavbarEls = [];
    if ($pagesInView.length > 1) {
      let i = 0;
      for (i = 0; i < $pagesInView.length - 1; i += 1) {
        if (masterPageEl && $pagesInView[i] === masterPageEl) {
          $pagesInView.eq(i).addClass('page-master-stacked');
          $pagesInView.eq(i).trigger('page:masterstack');
          router.emit('pageMasterStack', $pagesInView[i]);
          if (dynamicNavbar) {
            $(app.navbar.getElByPage(masterPageEl)).addClass('navbar-master-stacked');
            router.emit('navbarMasterStack', app.navbar.getElByPage(masterPageEl));
          }
          continue; // eslint-disable-line
        }

        const oldNavbarEl = app.navbar.getElByPage($pagesInView.eq(i));
        if (router.params.stackPages) {
          $pagesInView.eq(i).addClass('stacked');
          $pagesInView.eq(i).trigger('page:stack');
          router.emit('pageStack', $pagesInView[i]);
          if (dynamicNavbar) {
            $(oldNavbarEl).addClass('stacked');
          }
        } else {
          // Page remove event
          removedPageEls.push($pagesInView[i]);
          router.pageCallback('beforeRemove', $pagesInView[i], $navbarsInView && $navbarsInView[i], 'previous', undefined, options);
          router.removePage($pagesInView[i]);
          if (dynamicNavbar && oldNavbarEl) {
            removedNavbarEls.push(oldNavbarEl);
            router.removeNavbar(oldNavbarEl);
          }
        }
      }
    }
    $oldPage = $viewEl.children('.page:not(.stacked)').filter(pageEl => pageEl !== $newPage[0] && removedPageEls.indexOf(pageEl) < 0);
    if (dynamicNavbar) {
      $oldNavbarEl = $navbarsEl.children('.navbar:not(.stacked)').filter(navbarEl => navbarEl !== $newNavbarEl[0] && removedNavbarEls.indexOf(removedNavbarEls) < 0);
    }
    removedPageEls = [];
    removedNavbarEls = [];
  }
  if (isDetail && !options.reloadAll) {
    if ($oldPage.length > 1 || reloadDetail) {
      $oldPage = $oldPage.filter(pageEl => !pageEl.classList.contains('page-master'));
    }
    if ($oldNavbarEl && ($oldNavbarEl.length > 1 || reloadDetail)) {
      $oldNavbarEl = $oldNavbarEl.filter(navbarEl => !navbarEl.classList.contains('navbar-master'));
    }
  }

  // Push State
  if (router.params.browserHistory && (options.browserHistory || options.replaceState) && !options.reloadPrevious) {
    const browserHistoryRoot = router.params.browserHistoryRoot || '';
    History$1[options.reloadCurrent || reloadDetail && otherDetailPageEl || options.reloadAll || options.replaceState ? 'replace' : 'push'](view.id, {
      url: options.route.url
    }, browserHistoryRoot + router.params.browserHistorySeparator + options.route.url);
  }
  if (!options.reloadPrevious) {
    // Current Page & Navbar
    router.currentPageEl = $newPage[0];
    if (dynamicNavbar && $newNavbarEl.length) {
      router.currentNavbarEl = $newNavbarEl[0];
    } else {
      delete router.currentNavbarEl;
    }

    // Current Route
    router.currentRoute = options.route;
  }

  // Update router history
  const url = options.route.url;
  if (options.history) {
    if (((options.reloadCurrent || reloadDetail && otherDetailPageEl) && router.history.length) > 0 || options.replaceState) {
      if (reloadDetail && detailsInBetweenRemoved > 0) {
        router.history = router.history.slice(0, router.history.length - detailsInBetweenRemoved);
      }
      router.history[router.history.length - (options.reloadPrevious ? 2 : 1)] = url;
    } else if (options.reloadPrevious) {
      router.history[router.history.length - 2] = url;
    } else if (options.reloadAll) {
      router.history = [url];
    } else {
      router.history.push(url);
    }
  }
  router.saveHistory();

  // Insert new page and navbar
  const newPageInDom = $newPage.parents(document).length > 0;
  const f7Component = $newPage[0].f7Component;
  if (options.reloadPrevious) {
    if (f7Component && !newPageInDom) {
      f7Component.mount(componentEl => {
        $(componentEl).insertBefore($oldPage);
      });
    } else {
      $newPage.insertBefore($oldPage);
    }
    if (dynamicNavbar && $newNavbarEl.length) {
      if ($newNavbarEl.find('.title-large').length) {
        $newNavbarEl.addClass('navbar-large');
      }
      if ($oldNavbarEl.length) {
        $newNavbarEl.insertBefore($oldNavbarEl);
      } else {
        if (!router.$navbarsEl.parents(document).length) {
          router.$el.prepend(router.$navbarsEl);
        }
        $navbarsEl.append($newNavbarEl);
      }
    }
  } else {
    if ($oldPage.next('.page')[0] !== $newPage[0]) {
      if (f7Component && !newPageInDom) {
        f7Component.mount(componentEl => {
          $viewEl.append(componentEl);
        });
      } else {
        $viewEl.append($newPage[0]);
      }
    }
    if (dynamicNavbar && $newNavbarEl.length) {
      if ($newNavbarEl.find('.title-large').length) {
        $newNavbarEl.addClass('navbar-large');
      }
      if (!router.$navbarsEl.parents(document).length) {
        router.$el.prepend(router.$navbarsEl);
      }
      $navbarsEl.append($newNavbarEl[0]);
    }
  }
  if (!newPageInDom) {
    router.pageCallback('mounted', $newPage, $newNavbarEl, newPagePosition, reload ? newPagePosition : 'current', options, $oldPage);
  } else if (options.route && options.route.route && options.route.route.keepAlive && !$newPage[0].f7PageMounted) {
    $newPage[0].f7PageMounted = true;
    router.pageCallback('mounted', $newPage, $newNavbarEl, newPagePosition, reload ? newPagePosition : 'current', options, $oldPage);
  }

  // Remove old page
  if ((options.reloadCurrent || reloadDetail) && $oldPage.length > 0) {
    if (router.params.stackPages && router.initialPages.indexOf($oldPage[0]) >= 0) {
      $oldPage.addClass('stacked');
      $oldPage.trigger('page:stack');
      router.emit('pageStack', $oldPage[0]);
      if (dynamicNavbar) {
        $oldNavbarEl.addClass('stacked');
      }
    } else {
      // Page remove event
      router.pageCallback('beforeOut', $oldPage, $oldNavbarEl, 'current', undefined, options);
      router.pageCallback('afterOut', $oldPage, $oldNavbarEl, 'current', undefined, options);
      router.pageCallback('beforeRemove', $oldPage, $oldNavbarEl, 'current', undefined, options);
      router.removePage($oldPage);
      if (dynamicNavbar && $oldNavbarEl && $oldNavbarEl.length) {
        router.removeNavbar($oldNavbarEl);
      }
    }
  } else if (options.reloadAll) {
    $oldPage.each((pageEl, index) => {
      const $oldPageEl = $(pageEl);
      const $oldNavbarElEl = $(app.navbar.getElByPage($oldPageEl));
      if (router.params.stackPages && router.initialPages.indexOf($oldPageEl[0]) >= 0) {
        $oldPageEl.addClass('stacked');
        $oldPageEl.trigger('page:stack');
        router.emit('pageStack', $oldPageEl[0]);
        if (dynamicNavbar) {
          $oldNavbarElEl.addClass('stacked');
        }
      } else {
        // Page remove event
        if ($oldPageEl.hasClass('page-current')) {
          router.pageCallback('beforeOut', $oldPage, $oldNavbarEl, 'current', undefined, options);
          router.pageCallback('afterOut', $oldPage, $oldNavbarEl, 'current', undefined, options);
        }
        router.pageCallback('beforeRemove', $oldPageEl, $oldNavbarEl && $oldNavbarEl.eq(index), 'previous', undefined, options);
        router.removePage($oldPageEl);
        if (dynamicNavbar && $oldNavbarElEl.length) {
          router.removeNavbar($oldNavbarElEl);
        }
      }
    });
  } else if (options.reloadPrevious) {
    if (router.params.stackPages && router.initialPages.indexOf($oldPage[0]) >= 0) {
      $oldPage.addClass('stacked');
      $oldPage.trigger('page:stack');
      router.emit('pageStack', $oldPage[0]);
      if (dynamicNavbar) {
        $oldNavbarEl.addClass('stacked');
      }
    } else {
      // Page remove event
      router.pageCallback('beforeRemove', $oldPage, $oldNavbarEl, 'previous', undefined, options);
      router.removePage($oldPage);
      if (dynamicNavbar && $oldNavbarEl && $oldNavbarEl.length) {
        router.removeNavbar($oldNavbarEl);
      }
    }
  }

  // Load Tab
  if (options.route.route.tab) {
    router.tabLoad(options.route.route.tab, extend({}, options, {
      history: false,
      browserHistory: false
    }));
  }

  // Check master detail
  if (masterDetailEnabled) {
    view.checkMasterDetailBreakpoint();
  }

  // Page init and before init events
  router.pageCallback('init', $newPage, $newNavbarEl, newPagePosition, reload ? newPagePosition : 'current', options, $oldPage);
  if (options.reloadCurrent || options.reloadAll || reloadDetail) {
    router.allowPageChange = true;
    router.pageCallback('beforeIn', $newPage, $newNavbarEl, newPagePosition, 'current', options);
    $newPage.removeAttr('aria-hidden');
    if (dynamicNavbar && $newNavbarEl) {
      $newNavbarEl.removeAttr('aria-hidden');
    }
    router.pageCallback('afterIn', $newPage, $newNavbarEl, newPagePosition, 'current', options);
    if (options.reloadCurrent && options.clearPreviousHistory) router.clearPreviousHistory();
    if (reloadDetail) {
      router.setPagePosition($(masterPageEl), 'previous');
      if (masterPageEl.f7Page && masterPageEl.f7Page.navbarEl) {
        router.setNavbarPosition($(masterPageEl.f7Page.navbarEl), 'previous');
      }
    }
    return router;
  }
  if (options.reloadPrevious) {
    router.allowPageChange = true;
    return router;
  }

  // Before animation event
  router.pageCallback('beforeOut', $oldPage, $oldNavbarEl, 'current', 'previous', options);
  router.pageCallback('beforeIn', $newPage, $newNavbarEl, 'next', 'current', options);

  // Animation
  function afterAnimation() {
    router.setPagePosition($newPage, 'current', false);
    router.setPagePosition($oldPage, 'previous', !$oldPage.hasClass('page-master'));
    if (dynamicNavbar) {
      router.setNavbarPosition($newNavbarEl, 'current', false);
      router.setNavbarPosition($oldNavbarEl, 'previous', !$oldNavbarEl.hasClass('navbar-master'));
    }
    // After animation event
    router.allowPageChange = true;
    router.pageCallback('afterOut', $oldPage, $oldNavbarEl, 'current', 'previous', options);
    router.pageCallback('afterIn', $newPage, $newNavbarEl, 'next', 'current', options);
    let keepOldPage = (router.params.preloadPreviousPage || router.params[`${app.theme}SwipeBack`]) && !isMaster;
    if (!keepOldPage) {
      if ($newPage.hasClass('smart-select-page') || $newPage.hasClass('photo-browser-page') || $newPage.hasClass('autocomplete-page') || $newPage.hasClass('color-picker-page')) {
        keepOldPage = true;
      }
    }
    if (!keepOldPage) {
      if (router.params.stackPages) {
        $oldPage.addClass('stacked');
        $oldPage.trigger('page:stack');
        router.emit('pageStack', $oldPage[0]);
        if (dynamicNavbar) {
          $oldNavbarEl.addClass('stacked');
        }
      } else if (!($newPage.attr('data-name') && $newPage.attr('data-name') === 'smart-select-page')) {
        // Remove event
        router.pageCallback('beforeRemove', $oldPage, $oldNavbarEl, 'previous', undefined, options);
        router.removePage($oldPage);
        if (dynamicNavbar && $oldNavbarEl.length) {
          router.removeNavbar($oldNavbarEl);
        }
      }
    }
    if (options.clearPreviousHistory) router.clearPreviousHistory();
    router.emit('routeChanged', router.currentRoute, router.previousRoute, router);
    if (router.params.browserHistory) {
      History$1.clearRouterQueue();
    }
  }
  function setPositionClasses() {
    router.setPagePosition($oldPage, 'current', false);
    router.setPagePosition($newPage, 'next', false);
    if (dynamicNavbar) {
      router.setNavbarPosition($oldNavbarEl, 'current', false);
      router.setNavbarPosition($newNavbarEl, 'next', false);
    }
  }
  if (options.animate && !(isMaster && app.width >= router.params.masterDetailBreakpoint)) {
    const delay = router.params[`${router.app.theme}PageLoadDelay`];
    let transition = router.params.transition;
    if (options.transition) transition = options.transition;
    if (!transition && router.currentRoute && router.currentRoute.route) {
      transition = router.currentRoute.route.transition;
    }
    if (!transition && router.currentRoute && router.currentRoute.route.options) {
      transition = router.currentRoute.route.options.transition;
    }
    if (transition) {
      $newPage[0].f7PageTransition = transition;
    }
    if (delay) {
      setTimeout(() => {
        setPositionClasses();
        router.animate($oldPage, $newPage, $oldNavbarEl, $newNavbarEl, 'forward', transition, () => {
          afterAnimation();
        });
      }, delay);
    } else {
      setPositionClasses();
      router.animate($oldPage, $newPage, $oldNavbarEl, $newNavbarEl, 'forward', transition, () => {
        afterAnimation();
      });
    }
  } else {
    afterAnimation();
  }
  return router;
}
function load(router, loadParams, loadOptions, ignorePageChange) {
  if (loadParams === void 0) {
    loadParams = {};
  }
  if (loadOptions === void 0) {
    loadOptions = {};
  }
  if (!router.allowPageChange && !ignorePageChange) return router;
  const params = loadParams;
  const options = loadOptions;
  const {
    url,
    content,
    el,
    pageName,
    component,
    componentUrl
  } = params;
  if (!options.reloadCurrent && options.route && options.route.route && options.route.route.parentPath && router.currentRoute.route && router.currentRoute.route.parentPath === options.route.route.parentPath) {
    // Do something nested
    if (options.route.url === router.url) {
      router.allowPageChange = true;
      return false;
    }
    // Check for same params
    let sameParams = Object.keys(options.route.params).length === Object.keys(router.currentRoute.params).length;
    if (sameParams) {
      // Check for equal params name
      Object.keys(options.route.params).forEach(paramName => {
        if (!(paramName in router.currentRoute.params) || router.currentRoute.params[paramName] !== options.route.params[paramName]) {
          sameParams = false;
        }
      });
    }
    if (sameParams) {
      if (options.route.route.tab) {
        return router.tabLoad(options.route.route.tab, options);
      }
      return false;
    }
    if (!sameParams && options.route.route.tab && router.currentRoute.route.tab && router.currentRoute.parentPath === options.route.parentPath) {
      return router.tabLoad(options.route.route.tab, options);
    }
  }
  if (options.route && options.route.url && router.url === options.route.url && !(options.reloadCurrent || options.reloadPrevious) && !router.params.allowDuplicateUrls) {
    router.allowPageChange = true;
    return false;
  }
  if (!options.route && url) {
    options.route = router.parseRouteUrl(url);
    extend(options.route, {
      route: {
        url,
        path: url
      }
    });
  }

  // Component Callbacks
  function resolve(pageEl, newOptions) {
    return forward(router, pageEl, extend(options, newOptions));
  }
  function reject() {
    router.allowPageChange = true;
    return router;
  }
  if (url || componentUrl || component) {
    router.allowPageChange = false;
  }

  // Proceed
  if (content) {
    forward(router, router.getPageEl(content), options);
  } else if (el) {
    // Load page from specified HTMLElement or by page name in pages container
    forward(router, router.getPageEl(el), options);
  } else if (pageName) {
    // Load page by page name in pages container
    forward(router, router.$el.children(`.page[data-name="${pageName}"]`).eq(0), options);
  } else if (component || componentUrl) {
    // Load from component (F7/Vue/React/...)
    try {
      router.pageComponentLoader({
        routerEl: router.el,
        component,
        componentUrl,
        options,
        resolve,
        reject
      });
    } catch (err) {
      router.allowPageChange = true;
      throw err;
    }
  } else if (url) {
    // Load using XHR
    if (router.xhrAbortController) {
      router.xhrAbortController.abort();
      router.xhrAbortController = false;
    }
    router.xhrRequest(url, options).then(pageContent => {
      forward(router, router.getPageEl(pageContent), options);
    }).catch(() => {
      router.allowPageChange = true;
    });
  }
  return router;
}
function navigate(navigateParams, navigateOptions) {
  if (navigateOptions === void 0) {
    navigateOptions = {};
  }
  const router = this;
  if (router.swipeBackActive) return router;
  let url;
  let createRoute;
  let name;
  let path;
  let query;
  let params;
  let route;
  if (typeof navigateParams === 'string') {
    url = navigateParams;
  } else {
    url = navigateParams.url;
    createRoute = navigateParams.route;
    name = navigateParams.name;
    path = navigateParams.path;
    query = navigateParams.query;
    params = navigateParams.params;
  }
  if (name || path) {
    url = router.generateUrl({
      path,
      name,
      params,
      query
    });
    if (url) {
      return router.navigate(url, navigateOptions);
    }
    return router;
  }
  const app = router.app;
  appRouterCheck(router, 'navigate');
  if (url === '#' || url === '') {
    return router;
  }
  let navigateUrl = url.replace('./', '');
  if (navigateUrl[0] !== '/' && navigateUrl.indexOf('#') !== 0) {
    const currentPath = router.currentRoute.parentPath || router.currentRoute.path;
    navigateUrl = ((currentPath ? `${currentPath}/` : '/') + navigateUrl).replace('///', '/').replace('//', '/');
  }
  if (createRoute) {
    route = extend(router.parseRouteUrl(navigateUrl), {
      route: extend({}, createRoute)
    });
  } else {
    route = router.findMatchingRoute(navigateUrl);
  }
  if (!route) {
    return router;
  }
  if (route.route && route.route.viewName) {
    const anotherViewName = route.route.viewName;
    const anotherView = app.views[anotherViewName];
    if (!anotherView) {
      throw new Error(`Framework7: There is no View with "${anotherViewName}" name that was specified in this route`);
    }
    if (anotherView !== router.view) {
      return anotherView.router.navigate(navigateParams, navigateOptions);
    }
  }
  if (route.route.redirect) {
    return redirect.call(router, 'forward', route, navigateOptions);
  }
  const options = {};
  if (route.route.options) {
    extend(options, route.route.options, navigateOptions);
  } else {
    extend(options, navigateOptions);
  }
  if (options.openIn && (!router.params.ignoreOpenIn || router.params.ignoreOpenIn && router.history.length > 0)) {
    return router.openIn(router, navigateUrl, options);
  }
  options.route = route;
  function resolve() {
    let routerLoaded = false;
    'popup popover sheet loginScreen actions customModal panel'.split(' ').forEach(modalLoadProp => {
      if (route.route[modalLoadProp] && !routerLoaded) {
        routerLoaded = true;
        router.modalLoad(modalLoadProp, route, options, 'forward');
      }
    });
    if (route.route.keepAlive && route.route.keepAliveData) {
      load(router, {
        el: route.route.keepAliveData.pageEl
      }, options, false);
      routerLoaded = true;
    }
    'url content component pageName el componentUrl'.split(' ').forEach(pageLoadProp => {
      if (route.route[pageLoadProp] && !routerLoaded) {
        routerLoaded = true;
        load(router, {
          [pageLoadProp]: route.route[pageLoadProp]
        }, options, false);
      }
    });
    if (routerLoaded) return;
    // Async
    function asyncResolve(resolveParams, resolveOptions) {
      router.allowPageChange = false;
      let resolvedAsModal = false;
      'popup popover sheet loginScreen actions customModal panel'.split(' ').forEach(modalLoadProp => {
        if (resolveParams[modalLoadProp]) {
          resolvedAsModal = true;
          const modalRoute = extend({}, route, {
            route: resolveParams
          });
          router.allowPageChange = true;
          router.modalLoad(modalLoadProp, modalRoute, extend(options, resolveOptions), 'forward');
        }
      });
      if (resolvedAsModal) return;
      load(router, resolveParams, extend(options, resolveOptions), true);
    }
    function asyncReject() {
      router.allowPageChange = true;
    }
    if (route.route.async) {
      router.allowPageChange = false;
      route.route.async.call(router, {
        router,
        to: options.route,
        from: router.currentRoute,
        resolve: asyncResolve,
        reject: asyncReject,
        direction: 'forward',
        app
      });
    }
    if (route.route.asyncComponent) {
      asyncComponent(router, route.route.asyncComponent, asyncResolve, asyncReject);
    }
  }
  function reject() {
    router.allowPageChange = true;
  }
  if (router.params.masterDetailBreakpoint > 0 && route.route.masterRoute) {
    // load detail route
    let preloadMaster = true;
    let masterLoaded = false;
    if (router.currentRoute && router.currentRoute.route) {
      if ((router.currentRoute.route.master === true || typeof router.currentRoute.route.master === 'function' && router.currentRoute.route.master(app, router)) && (router.currentRoute.route === route.route.masterRoute || router.currentRoute.route.path === route.route.masterRoute.path)) {
        preloadMaster = false;
      }
      if (router.currentRoute.route.masterRoute && (router.currentRoute.route.masterRoute === route.route.masterRoute || router.currentRoute.route.masterRoute.path === route.route.masterRoute.path)) {
        preloadMaster = false;
        masterLoaded = true;
      }
    }
    if (preloadMaster || masterLoaded && navigateOptions.reloadAll) {
      router.navigate({
        path: route.route.masterRoute.path,
        params: route.params || {}
      }, {
        animate: false,
        reloadAll: navigateOptions.reloadAll,
        reloadCurrent: navigateOptions.reloadCurrent,
        reloadPrevious: navigateOptions.reloadPrevious,
        browserHistory: !navigateOptions.initial,
        history: !navigateOptions.initial,
        once: {
          pageAfterIn() {
            router.navigate(navigateParams, extend({}, navigateOptions, {
              animate: false,
              reloadAll: false,
              reloadCurrent: false,
              reloadPrevious: false,
              history: !navigateOptions.initial,
              browserHistory: !navigateOptions.initial
            }));
          }
        }
      });
      return router;
    }
  }
  processRouteQueue.call(router, route, router.currentRoute, () => {
    if (route.route.modules) {
      app.loadModules(Array.isArray(route.route.modules) ? route.route.modules : [route.route.modules]).then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    } else {
      resolve();
    }
  }, () => {
    reject();
  }, 'forward');

  // Return Router
  return router;
}

function tabLoad(tabRoute, loadOptions) {
  if (loadOptions === void 0) {
    loadOptions = {};
  }
  const router = this;
  const options = extend({
    animate: router.params.animate,
    browserHistory: true,
    history: true,
    parentPageEl: null,
    preload: false,
    on: {}
  }, loadOptions);
  let currentRoute;
  let previousRoute;
  if (options.route) {
    // Set Route
    if (!options.preload && options.route !== router.currentRoute) {
      previousRoute = router.previousRoute;
      router.currentRoute = options.route;
    }
    if (options.preload) {
      currentRoute = options.route;
      previousRoute = router.currentRoute;
    } else {
      currentRoute = router.currentRoute;
      if (!previousRoute) previousRoute = router.previousRoute;
    }

    // Update Browser History
    if (router.params.browserHistory && options.browserHistory && !options.reloadPrevious) {
      History$1[router.params.browserHistoryTabs](router.view.id, {
        url: options.route.url
      }, (router.params.browserHistoryRoot || '') + router.params.browserHistorySeparator + options.route.url);
    }

    // Update Router History
    if (options.history) {
      router.history[Math.max(router.history.length - 1, 0)] = options.route.url;
      router.saveHistory();
    }
  }

  // Show Tab
  const $parentPageEl = $(options.parentPageEl || router.currentPageEl);
  let tabEl;
  if ($parentPageEl.length && $parentPageEl.find(`#${tabRoute.id}`).length) {
    tabEl = $parentPageEl.find(`#${tabRoute.id}`).eq(0);
  } else if (router.view.selector) {
    tabEl = `${router.view.selector} #${tabRoute.id}`;
  } else {
    tabEl = `#${tabRoute.id}`;
  }
  const tabShowResult = router.app.tab.show({
    tabEl,
    animate: options.animate,
    tabRoute: options.route
  });
  const {
    $newTabEl,
    $oldTabEl,
    animated,
    onTabsChanged
  } = tabShowResult;
  if ($newTabEl && $newTabEl.parents('.page').length > 0 && options.route) {
    const tabParentPageData = $newTabEl.parents('.page')[0].f7Page;
    if (tabParentPageData && options.route) {
      tabParentPageData.route = options.route;
    }
  }

  // Tab Content Loaded
  function onTabLoaded(contentEl) {
    // Remove theme elements
    router.removeThemeElements($newTabEl);
    let tabEventTarget = $newTabEl;
    if (typeof contentEl !== 'string') tabEventTarget = $(contentEl);
    tabEventTarget.trigger('tab:init tab:mounted', tabRoute);
    router.emit('tabInit tabMounted', $newTabEl[0], tabRoute);
    if ($oldTabEl && $oldTabEl.length) {
      if (animated) {
        onTabsChanged(() => {
          router.emit('routeChanged', router.currentRoute, router.previousRoute, router);
          if (router.params.unloadTabContent) {
            router.tabRemove($oldTabEl, $newTabEl, tabRoute);
          }
        });
      } else {
        router.emit('routeChanged', router.currentRoute, router.previousRoute, router);
        if (router.params.unloadTabContent) {
          router.tabRemove($oldTabEl, $newTabEl, tabRoute);
        }
      }
    }
  }
  if ($newTabEl[0].f7RouterTabLoaded) {
    if (!$oldTabEl || !$oldTabEl.length) return router;
    if (animated) {
      onTabsChanged(() => {
        router.emit('routeChanged', router.currentRoute, router.previousRoute, router);
      });
    } else {
      router.emit('routeChanged', router.currentRoute, router.previousRoute, router);
    }
    return router;
  }

  // Load Tab Content
  function loadTab(loadTabParams, loadTabOptions) {
    // Load Tab Props
    const {
      url,
      content,
      el,
      component,
      componentUrl
    } = loadTabParams;
    // Component/Template Callbacks
    function resolve(contentEl) {
      router.allowPageChange = true;
      if (!contentEl) return;
      if (typeof contentEl === 'string') {
        $newTabEl.html(contentEl);
      } else {
        $newTabEl.html('');
        if (contentEl.f7Component) {
          contentEl.f7Component.mount(componentEl => {
            $newTabEl.append(componentEl);
          });
        } else {
          $newTabEl.append(contentEl);
        }
      }
      $newTabEl[0].f7RouterTabLoaded = true;
      onTabLoaded(contentEl);
    }
    function reject() {
      router.allowPageChange = true;
      return router;
    }
    if (content) {
      resolve(content);
    } else if (el) {
      resolve(el);
    } else if (component || componentUrl) {
      // Load from component (F7/Vue/React/...)
      try {
        router.tabComponentLoader({
          tabEl: $newTabEl[0],
          component,
          componentUrl,
          options: loadTabOptions,
          resolve,
          reject
        });
      } catch (err) {
        router.allowPageChange = true;
        throw err;
      }
    } else if (url) {
      // Load using XHR
      if (router.xhrAbortController) {
        router.xhrAbortController.abort();
        router.xhrAbortController = false;
      }
      router.xhrRequest(url, loadTabOptions).then(tabContent => {
        resolve(tabContent);
      }).catch(() => {
        router.allowPageChange = true;
      });
    }
  }
  let hasContentLoadProp;
  'url content component el componentUrl'.split(' ').forEach(tabLoadProp => {
    if (tabRoute[tabLoadProp]) {
      hasContentLoadProp = true;
      loadTab({
        [tabLoadProp]: tabRoute[tabLoadProp]
      }, options);
    }
  });

  // Async
  function asyncResolve(resolveParams, resolveOptions) {
    loadTab(resolveParams, extend(options, resolveOptions));
  }
  function asyncReject() {
    router.allowPageChange = true;
  }
  if (tabRoute.async) {
    tabRoute.async.call(router, {
      router,
      to: currentRoute,
      from: previousRoute,
      resolve: asyncResolve,
      reject: asyncReject,
      app: router.app
    });
  } else if (tabRoute.asyncComponent) {
    asyncComponent(router, tabRoute.asyncComponent, asyncResolve, asyncReject);
  } else if (!hasContentLoadProp) {
    router.allowPageChange = true;
  }
  return router;
}
function tabRemove($oldTabEl, $newTabEl, tabRoute) {
  const router = this;
  let hasTabComponentChild;
  if ($oldTabEl[0]) {
    $oldTabEl[0].f7RouterTabLoaded = false;
    delete $oldTabEl[0].f7RouterTabLoaded;
  }
  $oldTabEl.children().each(tabChild => {
    if (tabChild.f7Component) {
      hasTabComponentChild = true;
      $(tabChild).trigger('tab:beforeremove', tabRoute);
      tabChild.f7Component.destroy();
    }
  });
  if (!hasTabComponentChild) {
    $oldTabEl.trigger('tab:beforeremove', tabRoute);
  }
  router.emit('tabBeforeRemove', $oldTabEl[0], $newTabEl[0], tabRoute);
  router.removeTabContent($oldTabEl[0], tabRoute);
}

function modalLoad(modalType, route, loadOptions, direction) {
  if (loadOptions === void 0) {
    loadOptions = {};
  }
  const router = this;
  const app = router.app;
  const isPanel = modalType === 'panel';
  const modalOrPanel = isPanel ? 'panel' : 'modal';
  const options = extend({
    animate: router.params.animate,
    browserHistory: true,
    history: true,
    on: {},
    once: {}
  }, loadOptions);
  const modalParams = extend({}, route.route[modalType]);
  const modalRoute = route.route;
  const routeCallback = (modal, name) => {
    const {
      on,
      once
    } = options;
    let callback;
    if (name === 'open') {
      callback = on.modalOpen || once.modalOpen || on.panelOpen || once.panelOpen;
    }
    if (name === 'close') {
      callback = on.modalClose || once.modalClose || on.panelClose || once.panelClose;
    }
    if (name === 'closed') {
      callback = on.modalClosed || once.modalClosed || on.panelClosed || once.panelClosed;
    }
    if (callback) callback(modal);
  };
  function onModalLoaded() {
    // Create Modal
    const modal = app[modalType].create(modalParams);
    modalRoute.modalInstance = modal;
    const hasEl = modal.el;
    function closeOnSwipeBack() {
      modal.close();
    }
    modal.on(`${modalOrPanel}Open`, () => {
      if (!hasEl) {
        // Remove theme elements
        router.removeThemeElements(modal.el);

        // Emit events
        modal.$el.trigger(`${modalType.toLowerCase()}:init ${modalType.toLowerCase()}:mounted`, route, modal);
        router.emit(`${!isPanel ? 'modalInit' : ''} ${modalType}Init ${modalType}Mounted`, modal.el, route, modal);
      }
      router.once('swipeBackMove', closeOnSwipeBack);
      routeCallback(modal, 'open');
    });
    modal.on(`${modalOrPanel}Close`, () => {
      router.off('swipeBackMove', closeOnSwipeBack);
      if (!modal.closeByRouter) {
        router.back();
      }
      routeCallback(modal, 'close');
    });
    modal.on(`${modalOrPanel}Closed`, () => {
      modal.$el.trigger(`${modalType.toLowerCase()}:beforeremove`, route, modal);
      modal.emit(`${!isPanel ? 'modalBeforeRemove ' : ''}${modalType}BeforeRemove`, modal.el, route, modal);
      const modalComponent = modal.el.f7Component;
      routeCallback(modal, 'closed');
      if (modalComponent) {
        modalComponent.destroy();
      }
      nextTick(() => {
        if (modalComponent || modalParams.component || modalParams.asyncComponent) {
          router.removeModal(modal.el);
        }
        modal.destroy();
        delete modal.route;
        delete modalRoute.modalInstance;
      });
    });
    if (options.route) {
      // Update Browser History
      if (router.params.browserHistory && options.browserHistory) {
        History$1.push(router.view.id, {
          url: options.route.url,
          modal: modalType
        }, (router.params.browserHistoryRoot || '') + router.params.browserHistorySeparator + options.route.url);
      }

      // Set Route
      if (options.route !== router.currentRoute) {
        modal.route = extend(options.route, {
          modal
        });
        router.currentRoute = modal.route;
      }

      // Update Router History
      if (options.history && !options.reloadCurrent) {
        router.history.push(options.route.url);
        router.saveHistory();
      }
    }
    if (hasEl) {
      // Remove theme elements
      router.removeThemeElements(modal.el);

      // Emit events
      modal.$el.trigger(`${modalType.toLowerCase()}:init ${modalType.toLowerCase()}:mounted`, route, modal);
      router.emit(`${modalOrPanel}Init ${modalType}Init ${modalType}Mounted`, modal.el, route, modal);
    }

    // Open
    modal.open(options.animate === false || options.animate === true ? options.animate : undefined);
  }

  // Load Modal Content
  function loadModal(loadModalParams, loadModalOptions) {
    // Load Modal Props
    const {
      url,
      content,
      component,
      componentUrl
    } = loadModalParams;

    // Component/Template Callbacks
    function resolve(contentEl) {
      if (contentEl) {
        if (typeof contentEl === 'string') {
          modalParams.content = contentEl;
        } else if (contentEl.f7Component) {
          contentEl.f7Component.mount(componentEl => {
            modalParams.el = componentEl;
            app.$el.append(componentEl);
          });
        } else {
          modalParams.el = contentEl;
        }
        onModalLoaded();
      }
    }
    function reject() {
      router.allowPageChange = true;
      return router;
    }
    if (content) {
      resolve(content);
    } else if (component || componentUrl) {
      // Load from component (F7/Vue/React/...)
      try {
        router.modalComponentLoader({
          rootEl: app.el,
          component,
          componentUrl,
          options: loadModalOptions,
          resolve,
          reject
        });
      } catch (err) {
        router.allowPageChange = true;
        throw err;
      }
    } else if (url) {
      // Load using XHR
      if (router.xhrAbortController) {
        router.xhrAbortController.abort();
        router.xhrAbortController = false;
      }
      router.xhrRequest(url, loadModalOptions).then(modalContent => {
        modalParams.content = modalContent;
        onModalLoaded();
      }).catch(() => {
        router.allowPageChange = true;
      });
    } else {
      onModalLoaded();
    }
  }
  let foundLoadProp;
  'url content component el componentUrl template'.split(' ').forEach(modalLoadProp => {
    if (modalParams[modalLoadProp] && !foundLoadProp) {
      foundLoadProp = true;
      loadModal({
        [modalLoadProp]: modalParams[modalLoadProp]
      }, options);
    }
  });
  if (!foundLoadProp && modalType === 'actions') {
    onModalLoaded();
  }

  // Async
  function asyncResolve(resolveParams, resolveOptions) {
    loadModal(resolveParams, extend(options, resolveOptions));
  }
  function asyncReject() {
    router.allowPageChange = true;
  }
  if (modalParams.async) {
    modalParams.async.call(router, {
      router,
      to: options.route,
      from: router.currentRoute,
      resolve: asyncResolve,
      reject: asyncReject,
      direction,
      app
    });
  }
  if (modalParams.asyncComponent) {
    asyncComponent(router, modalParams.asyncComponent, asyncResolve, asyncReject);
  }
  return router;
}
function modalRemove(modal) {
  extend(modal, {
    closeByRouter: true
  });
  modal.close();
}

function backward(router, el, backwardOptions) {
  const device = getDevice();
  const document = getDocument();
  const $el = $(el);
  const app = router.app;
  const view = router.view;
  const options = extend(false, {
    animate: router.params.animate,
    browserHistory: true,
    replaceState: false
  }, backwardOptions);
  const masterDetailEnabled = router.params.masterDetailBreakpoint > 0;
  const isMaster = masterDetailEnabled && options.route && options.route.route && (options.route.route.master === true || typeof options.route.route.master === 'function' && options.route.route.master(app, router));
  let masterPageEl;
  let masterPageRemoved;
  const dynamicNavbar = router.dynamicNavbar;
  const $newPage = $el;
  const $oldPage = router.$el.children('.page-current');
  const initialPreload = $oldPage.length === 0 && options.preload;
  const currentIsMaster = masterDetailEnabled && $oldPage.hasClass('page-master');
  if ($newPage.length) {
    // Remove theme elements
    router.removeThemeElements($newPage);
  }
  let $navbarsEl;
  let $newNavbarEl;
  let $oldNavbarEl;
  if (dynamicNavbar) {
    $newNavbarEl = $newPage.children('.navbar');
    $navbarsEl = router.$navbarsEl;
    if ($newNavbarEl.length === 0 && $newPage[0] && $newPage[0].f7Page) {
      // Try from pageData
      $newNavbarEl = $newPage[0].f7Page.$navbarEl;
    }
    $oldNavbarEl = $navbarsEl.find('.navbar-current');
  }
  router.allowPageChange = false;
  if ($newPage.length === 0 || $oldPage.length === 0 && !options.preload) {
    router.allowPageChange = true;
    return router;
  }

  // Remove theme elements
  router.removeThemeElements($newPage);

  // Save Keep Alive Cache
  if (options.route && options.route.route && options.route.route.keepAlive && !options.route.route.keepAliveData) {
    options.route.route.keepAliveData = {
      pageEl: $el[0]
    };
  }

  // Pages In View
  let isDetail;
  let isDetailRoot;
  if (masterDetailEnabled) {
    const $pagesInView = router.$el.children('.page:not(.stacked)').filter(pageInView => pageInView !== $newPage[0]);

    // Find Detail' master page
    for (let i = 0; i < $pagesInView.length; i += 1) {
      if (!masterPageEl && $pagesInView[i].classList.contains('page-master')) {
        masterPageEl = $pagesInView[i];
        continue; // eslint-disable-line
      }
    }

    isDetail = !isMaster && masterPageEl && router.history.indexOf(options.route.url) > router.history.indexOf(masterPageEl.f7Page.route.url);
    if (!isDetail && !isMaster && masterPageEl && masterPageEl.f7Page && options.route.route.masterRoute) {
      isDetail = options.route.route.masterRoute.path === masterPageEl.f7Page.route.route.path;
    }
  }
  if (isDetail && masterPageEl && masterPageEl.f7Page) {
    isDetailRoot = router.history.indexOf(options.route.url) - router.history.indexOf(masterPageEl.f7Page.route.url) === 1;
  }

  // New Page
  $newPage.addClass(`page-${initialPreload ? 'current' : 'previous'}${isMaster ? ' page-master' : ''}${isDetail ? ' page-master-detail' : ''}${isDetailRoot ? ' page-master-detail-root' : ''}`).removeClass('stacked').removeAttr('aria-hidden').trigger('page:unstack').trigger('page:position', {
    position: initialPreload ? 'current' : 'previous'
  });
  router.emit('pageUnstack', $newPage[0]);
  router.emit('pagePosition', $newPage[0], initialPreload ? 'current' : 'previous');
  if (isMaster || isDetail) {
    $newPage.trigger('page:role', {
      role: isMaster ? 'master' : 'detail',
      root: !!isDetailRoot
    });
    router.emit('pageRole', $newPage[0], {
      role: isMaster ? 'master' : 'detail',
      detailRoot: !!isDetailRoot
    });
  }
  if (dynamicNavbar && $newNavbarEl.length > 0) {
    $newNavbarEl.addClass(`navbar-${initialPreload ? 'current' : 'previous'}${isMaster ? ' navbar-master' : ''}${isDetail ? ' navbar-master-detail' : ''}${isDetailRoot ? ' navbar-master-detail-root' : ''}`).removeClass('stacked').removeAttr('aria-hidden');
    $newNavbarEl.trigger('navbar:position', {
      position: initialPreload ? 'current' : 'previous'
    });
    router.emit('navbarPosition', $newNavbarEl[0], initialPreload ? 'current' : 'previous');
    if (isMaster || isDetailRoot) {
      router.emit('navbarRole', $newNavbarEl[0], {
        role: isMaster ? 'master' : 'detail',
        detailRoot: !!isDetailRoot
      });
    }
  }

  // Remove previous page in case of "forced"
  let backIndex;
  if (options.force) {
    if ($oldPage.prev('.page-previous:not(.stacked)').length > 0 || $oldPage.prev('.page-previous').length === 0) {
      if (router.history.indexOf(options.route.url) >= 0) {
        backIndex = router.history.length - router.history.indexOf(options.route.url) - 1;
        router.history = router.history.slice(0, router.history.indexOf(options.route.url) + 2);
        view.history = router.history;
      } else if (router.history[[router.history.length - 2]]) {
        router.history[router.history.length - 2] = options.route.url;
      } else {
        router.history.unshift(router.url);
      }
      if (backIndex && router.params.stackPages) {
        $oldPage.prevAll('.page-previous').each(pageToRemove => {
          const $pageToRemove = $(pageToRemove);
          let $navbarToRemove;
          if (dynamicNavbar) {
            // $navbarToRemove = $oldNavbarEl.prevAll('.navbar-previous').eq(index);
            $navbarToRemove = $(app.navbar.getElByPage($pageToRemove));
          }
          if ($pageToRemove[0] !== $newPage[0] && $pageToRemove.index() > $newPage.index()) {
            if (router.initialPages.indexOf($pageToRemove[0]) >= 0) {
              $pageToRemove.addClass('stacked');
              $pageToRemove.trigger('page:stack');
              router.emit('pageStack', $pageToRemove[0]);
              if (dynamicNavbar) {
                $navbarToRemove.addClass('stacked');
              }
            } else {
              router.pageCallback('beforeRemove', $pageToRemove, $navbarToRemove, 'previous', undefined, options);
              if ($pageToRemove[0] === masterPageEl) {
                masterPageRemoved = true;
              }
              router.removePage($pageToRemove);
              if (dynamicNavbar && $navbarToRemove.length > 0) {
                router.removeNavbar($navbarToRemove);
              }
            }
          }
        });
      } else {
        const $pageToRemove = $oldPage.prev('.page-previous:not(.stacked)');
        let $navbarToRemove;
        if (dynamicNavbar) {
          // $navbarToRemove = $oldNavbarEl.prev('.navbar-inner:not(.stacked)');
          $navbarToRemove = $(app.navbar.getElByPage($pageToRemove));
        }
        if (router.params.stackPages && router.initialPages.indexOf($pageToRemove[0]) >= 0) {
          $pageToRemove.addClass('stacked');
          $pageToRemove.trigger('page:stack');
          router.emit('pageStack', $pageToRemove[0]);
          $navbarToRemove.addClass('stacked');
        } else if ($pageToRemove.length > 0) {
          router.pageCallback('beforeRemove', $pageToRemove, $navbarToRemove, 'previous', undefined, options);
          if ($pageToRemove[0] === masterPageEl) {
            masterPageRemoved = true;
          }
          router.removePage($pageToRemove);
          if (dynamicNavbar && $navbarToRemove.length) {
            router.removeNavbar($navbarToRemove);
          }
        }
      }
    }
  }

  // Insert new page
  const newPageInDom = $newPage.parents(document).length > 0;
  const f7Component = $newPage[0].f7Component;
  function insertPage() {
    if (initialPreload) {
      if (!newPageInDom && f7Component) {
        f7Component.mount(componentEl => {
          router.$el.append(componentEl);
        });
      } else {
        router.$el.append($newPage);
      }
    }
    if ($newPage.next($oldPage).length === 0) {
      if (!newPageInDom && f7Component) {
        f7Component.mount(componentEl => {
          $(componentEl).insertBefore($oldPage);
        });
      } else {
        $newPage.insertBefore($oldPage);
      }
    }
    if (dynamicNavbar && $newNavbarEl.length) {
      if ($newNavbarEl.find('.title-large').length) {
        $newNavbarEl.addClass('navbar-large');
      }
      $newNavbarEl.insertBefore($oldNavbarEl);
      if ($oldNavbarEl.length > 0) {
        $newNavbarEl.insertBefore($oldNavbarEl);
      } else {
        if (!router.$navbarsEl.parents(document).length) {
          router.$el.prepend(router.$navbarsEl);
        }
        $navbarsEl.append($newNavbarEl);
      }
    }
    if (!newPageInDom) {
      router.pageCallback('mounted', $newPage, $newNavbarEl, 'previous', 'current', options, $oldPage);
    } else if (options.route && options.route.route && options.route.route.keepAlive && !$newPage[0].f7PageMounted) {
      $newPage[0].f7PageMounted = true;
      router.pageCallback('mounted', $newPage, $newNavbarEl, 'previous', 'current', options, $oldPage);
    }
  }
  if (options.preload) {
    // Insert Page
    insertPage();
    // Tab route
    if (options.route.route.tab) {
      router.tabLoad(options.route.route.tab, extend({}, options, {
        history: false,
        browserHistory: false,
        preload: true
      }));
    }
    if (isMaster) {
      $newPage.removeClass('page-master-stacked').trigger('page:masterunstack');
      router.emit('pageMasterUnstack', $newPage[0]);
      if (dynamicNavbar) {
        $(app.navbar.getElByPage($newPage)).removeClass('navbar-master-stacked');
        router.emit('navbarMasterUnstack', app.navbar.getElByPage($newPage));
      }
    }
    // Page init and before init events
    router.pageCallback('init', $newPage, $newNavbarEl, 'previous', 'current', options, $oldPage);
    if (initialPreload) {
      router.pageCallback('beforeIn', $newPage, $newNavbarEl, 'current', undefined, options);
      router.pageCallback('afterIn', $newPage, $newNavbarEl, 'current', undefined, options);
    }
    const $previousPages = $newPage.prevAll('.page-previous:not(.stacked):not(.page-master)');
    if ($previousPages.length > 0) {
      $previousPages.each(pageToRemove => {
        const $pageToRemove = $(pageToRemove);
        let $navbarToRemove;
        if (dynamicNavbar) {
          // $navbarToRemove = $newNavbarEl.prevAll('.navbar-previous:not(.stacked)').eq(index);
          $navbarToRemove = $(app.navbar.getElByPage($pageToRemove));
        }
        if (router.params.stackPages && router.initialPages.indexOf(pageToRemove) >= 0) {
          $pageToRemove.addClass('stacked');
          $pageToRemove.trigger('page:stack');
          router.emit('pageStack', $pageToRemove[0]);
          if (dynamicNavbar) {
            $navbarToRemove.addClass('stacked');
          }
        } else {
          router.pageCallback('beforeRemove', $pageToRemove, $navbarToRemove, 'previous', undefined);
          router.removePage($pageToRemove);
          if (dynamicNavbar && $navbarToRemove.length) {
            router.removeNavbar($navbarToRemove);
          }
        }
      });
    }
    router.allowPageChange = true;
    return router;
  }

  // History State
  if (!(device.ie || device.edge || device.firefox && !device.ios)) {
    if (router.params.browserHistory && options.browserHistory) {
      if (options.replaceState) {
        const browserHistoryRoot = router.params.browserHistoryRoot || '';
        History$1.replace(view.id, {
          url: options.route.url
        }, browserHistoryRoot + router.params.browserHistorySeparator + options.route.url);
      } else if (backIndex) {
        History$1.go(-backIndex);
      } else {
        History$1.back();
      }
    }
  }

  // Update History
  if (options.replaceState) {
    router.history[router.history.length - 1] = options.route.url;
  } else {
    if (router.history.length === 1) {
      router.history.unshift(router.url);
    }
    router.history.pop();
  }
  router.saveHistory();

  // Current Page & Navbar
  router.currentPageEl = $newPage[0];
  if (dynamicNavbar && $newNavbarEl.length) {
    router.currentNavbarEl = $newNavbarEl[0];
  } else {
    delete router.currentNavbarEl;
  }

  // Current Route
  router.currentRoute = options.route;

  // History State
  if (device.ie || device.edge || device.firefox && !device.ios) {
    if (router.params.browserHistory && options.browserHistory) {
      if (options.replaceState) {
        const browserHistoryRoot = router.params.browserHistoryRoot || '';
        History$1.replace(view.id, {
          url: options.route.url
        }, browserHistoryRoot + router.params.browserHistorySeparator + options.route.url);
      } else if (backIndex) {
        History$1.go(-backIndex);
      } else {
        History$1.back();
      }
    }
  }

  // Insert Page
  insertPage();

  // Load Tab
  if (options.route.route.tab) {
    router.tabLoad(options.route.route.tab, extend({}, options, {
      history: false,
      browserHistory: false
    }));
  }

  // Check master detail

  if (masterDetailEnabled && (currentIsMaster || masterPageRemoved)) {
    view.checkMasterDetailBreakpoint(false);
  }

  // Page init and before init events
  router.pageCallback('init', $newPage, $newNavbarEl, 'previous', 'current', options, $oldPage);

  // Before animation callback
  router.pageCallback('beforeOut', $oldPage, $oldNavbarEl, 'current', 'next', options);
  router.pageCallback('beforeIn', $newPage, $newNavbarEl, 'previous', 'current', options);

  // Animation
  function afterAnimation() {
    // Set classes
    router.setPagePosition($newPage, 'current', false);
    router.setPagePosition($oldPage, 'next', true);
    if (dynamicNavbar) {
      router.setNavbarPosition($newNavbarEl, 'current', false);
      router.setNavbarPosition($oldNavbarEl, 'next', true);
    }

    // After animation event
    router.pageCallback('afterOut', $oldPage, $oldNavbarEl, 'current', 'next', options);
    router.pageCallback('afterIn', $newPage, $newNavbarEl, 'previous', 'current', options);

    // Remove Old Page
    if (router.params.stackPages && router.initialPages.indexOf($oldPage[0]) >= 0) {
      $oldPage.addClass('stacked');
      $oldPage.trigger('page:stack');
      router.emit('pageStack', $oldPage[0]);
      if (dynamicNavbar) {
        $oldNavbarEl.addClass('stacked');
      }
    } else {
      router.pageCallback('beforeRemove', $oldPage, $oldNavbarEl, 'next', undefined, options);
      router.removePage($oldPage);
      if (dynamicNavbar && $oldNavbarEl.length) {
        router.removeNavbar($oldNavbarEl);
      }
    }
    router.allowPageChange = true;
    router.emit('routeChanged', router.currentRoute, router.previousRoute, router);

    // Preload previous page
    const preloadPreviousPage = router.params.preloadPreviousPage || router.params[`${app.theme}SwipeBack`];
    if (preloadPreviousPage && router.history[router.history.length - 2] && !isMaster) {
      router.back(router.history[router.history.length - 2], {
        preload: true
      });
    }
    if (router.params.browserHistory) {
      History$1.clearRouterQueue();
    }
  }
  function setPositionClasses() {
    router.setPagePosition($oldPage, 'current');
    router.setPagePosition($newPage, 'previous', false);
    if (dynamicNavbar) {
      router.setNavbarPosition($oldNavbarEl, 'current');
      router.setNavbarPosition($newNavbarEl, 'previous', false);
    }
  }
  if (options.animate && !(currentIsMaster && app.width >= router.params.masterDetailBreakpoint)) {
    let transition = router.params.transition;
    if ($oldPage[0] && $oldPage[0].f7PageTransition) {
      transition = $oldPage[0].f7PageTransition;
      delete $oldPage[0].f7PageTransition;
    }
    if (options.transition) transition = options.transition;
    if (!transition && router.previousRoute && router.previousRoute.route) {
      transition = router.previousRoute.route.transition;
    }
    if (!transition && router.previousRoute && router.previousRoute.route && router.previousRoute.route.options) {
      transition = router.previousRoute.route.options.transition;
    }
    setPositionClasses();
    router.animate($oldPage, $newPage, $oldNavbarEl, $newNavbarEl, 'backward', transition, () => {
      afterAnimation();
    });
  } else {
    afterAnimation();
  }
  return router;
}
function loadBack(router, backParams, backOptions, ignorePageChange) {
  if (!router.allowPageChange && !ignorePageChange) return router;
  const params = backParams;
  const options = backOptions;
  const {
    url,
    content,
    el,
    pageName,
    component,
    componentUrl
  } = params;
  if (options.route.url && router.url === options.route.url && !(options.reloadCurrent || options.reloadPrevious) && !router.params.allowDuplicateUrls) {
    return false;
  }
  if (!options.route && url) {
    options.route = router.parseRouteUrl(url);
  }

  // Component Callbacks
  function resolve(pageEl, newOptions) {
    return backward(router, pageEl, extend(options, newOptions));
  }
  function reject() {
    router.allowPageChange = true;
    return router;
  }
  if (url || componentUrl || component) {
    router.allowPageChange = false;
  }

  // Proceed
  if (content) {
    backward(router, router.getPageEl(content), options);
  } else if (el) {
    // Load page from specified HTMLElement or by page name in pages container
    backward(router, router.getPageEl(el), options);
  } else if (pageName) {
    // Load page by page name in pages container
    backward(router, router.$el.children(`.page[data-name="${pageName}"]`).eq(0), options);
  } else if (component || componentUrl) {
    // Load from component (F7/Vue/React/...)
    try {
      router.pageComponentLoader({
        routerEl: router.el,
        component,
        componentUrl,
        options,
        resolve,
        reject
      });
    } catch (err) {
      router.allowPageChange = true;
      throw err;
    }
  } else if (url) {
    // Load using XHR
    if (router.xhrAbortController) {
      router.xhrAbortController.abort();
      router.xhrAbortController = false;
    }
    router.xhrRequest(url, options).then(pageContent => {
      backward(router, router.getPageEl(pageContent), options);
    }).catch(() => {
      router.allowPageChange = true;
    });
  }
  return router;
}
function back() {
  const router = this;
  const device = getDevice();
  if (router.swipeBackActive) return router;
  let navigateUrl;
  let navigateOptions;
  let route;
  if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'object') {
    navigateOptions = (arguments.length <= 0 ? undefined : arguments[0]) || {};
  } else {
    navigateUrl = arguments.length <= 0 ? undefined : arguments[0];
    navigateOptions = (arguments.length <= 1 ? undefined : arguments[1]) || {};
  }
  const {
    name,
    params,
    query
  } = navigateOptions;
  if (name) {
    navigateUrl = router.generateUrl({
      name,
      params,
      query
    });
    if (navigateUrl) {
      return router.back(navigateUrl, extend({}, navigateOptions, {
        name: null,
        params: null,
        query: null
      }));
    }
    return router;
  }
  const app = router.app;
  appRouterCheck(router, 'back');
  let currentRouteIsModal = router.currentRoute.modal;
  let modalType;
  if (!currentRouteIsModal) {
    'popup popover sheet loginScreen actions customModal panel'.split(' ').forEach(modalLoadProp => {
      if (router.currentRoute.route[modalLoadProp]) {
        currentRouteIsModal = true;
        modalType = modalLoadProp;
      }
    });
  }
  if (currentRouteIsModal && !navigateOptions.preload) {
    const modalToClose = router.currentRoute.modal || router.currentRoute.route.modalInstance || app[modalType].get();
    const previousUrl = router.history[router.history.length - 2];
    let previousRoute;
    // check if previous route is modal too
    if (modalToClose && modalToClose.$el) {
      const prevOpenedModals = modalToClose.$el.prevAll('.modal-in');
      if (prevOpenedModals.length && prevOpenedModals[0].f7Modal) {
        const modalEl = prevOpenedModals[0];
        // check if current router not inside of the modalEl
        if (!router.$el.parents(modalEl).length) {
          previousRoute = modalEl.f7Modal.route;
        }
      }
    }
    if (!previousRoute) {
      previousRoute = router.findMatchingRoute(previousUrl);
    }
    if (!previousRoute && previousUrl) {
      previousRoute = {
        url: previousUrl,
        path: previousUrl.split('?')[0],
        query: parseUrlQuery(previousUrl),
        route: {
          path: previousUrl.split('?')[0],
          url: previousUrl
        }
      };
    }
    if (!navigateUrl || navigateUrl.replace(/[# ]/g, '').trim().length === 0) {
      if (!previousRoute || !modalToClose) {
        return router;
      }
    }
    const forceOtherUrl = navigateOptions.force && previousRoute && navigateUrl;
    if (previousRoute && modalToClose) {
      const isBrokenBrowserHistory = device.ie || device.edge || device.firefox && !device.ios;
      const needHistoryBack = router.params.browserHistory && navigateOptions.browserHistory !== false;
      const currentRouteWithoutBrowserHistory = router.currentRoute && router.currentRoute.route && router.currentRoute.route.options && router.currentRoute.route.options.browserHistory === false;
      if (needHistoryBack && !isBrokenBrowserHistory && !currentRouteWithoutBrowserHistory) {
        History$1.back();
      }
      router.currentRoute = previousRoute;
      router.history.pop();
      router.saveHistory();
      if (needHistoryBack && isBrokenBrowserHistory && !currentRouteWithoutBrowserHistory) {
        History$1.back();
      }
      router.modalRemove(modalToClose);
      if (forceOtherUrl) {
        router.navigate(navigateUrl, {
          reloadCurrent: true
        });
      }
    } else if (modalToClose) {
      router.modalRemove(modalToClose);
      if (navigateUrl) {
        router.navigate(navigateUrl, {
          reloadCurrent: true
        });
      }
    }
    return router;
  }
  let $previousPage = router.$el.children('.page-current').prevAll('.page-previous:not(.page-master)').eq(0);
  let skipMaster;
  if (router.params.masterDetailBreakpoint > 0) {
    const classes = [];
    router.$el.children('.page').each(pageEl => {
      classes.push(pageEl.className);
    });
    const $previousMaster = router.$el.children('.page-current').prevAll('.page-master').eq(0);
    if ($previousMaster.length) {
      const expectedPreviousPageUrl = router.history[router.history.length - 2];
      const expectedPreviousPageRoute = router.findMatchingRoute(expectedPreviousPageUrl);
      if (expectedPreviousPageRoute && $previousMaster[0].f7Page && expectedPreviousPageRoute.route === $previousMaster[0].f7Page.route.route) {
        $previousPage = $previousMaster;
        if (!navigateOptions.preload) {
          skipMaster = app.width >= router.params.masterDetailBreakpoint;
        }
      }
    }
  }
  if (!navigateOptions.force && $previousPage.length && !skipMaster) {
    if (router.params.browserHistory && $previousPage[0].f7Page && router.history[router.history.length - 2] !== $previousPage[0].f7Page.route.url) {
      router.back(router.history[router.history.length - 2], extend(navigateOptions, {
        force: true
      }));
      return router;
    }
    const previousPageRoute = $previousPage[0].f7Page.route;
    if (navigateOptions.preload && $previousPage.hasClass('stacked')) {
      loadBack(router, {
        el: $previousPage
      }, extend(navigateOptions, {
        route: previousPageRoute
      }));
      return router;
    }
    processRouteQueue.call(router, previousPageRoute, router.currentRoute, () => {
      loadBack(router, {
        el: $previousPage
      }, extend(navigateOptions, {
        route: previousPageRoute
      }));
    }, () => {}, 'backward');
    return router;
  }

  // Navigate URL
  if (navigateUrl === '#') {
    navigateUrl = undefined;
  }
  if (navigateUrl && navigateUrl[0] !== '/' && navigateUrl.indexOf('#') !== 0) {
    navigateUrl = ((router.path || '/') + navigateUrl).replace('//', '/');
  }
  if (!navigateUrl && router.history.length > 1) {
    navigateUrl = router.history[router.history.length - 2];
  }
  if (skipMaster && !navigateOptions.force && router.history[router.history.length - 3]) {
    return router.back(router.history[router.history.length - 3], extend({}, navigateOptions || {}, {
      force: true,
      animate: false
    }));
  }
  if (skipMaster && !navigateOptions.force) {
    return router;
  }

  // Find route to load
  route = router.findMatchingRoute(navigateUrl);
  if (!route) {
    if (navigateUrl) {
      route = {
        url: navigateUrl,
        path: navigateUrl.split('?')[0],
        query: parseUrlQuery(navigateUrl),
        route: {
          path: navigateUrl.split('?')[0],
          url: navigateUrl
        }
      };
    }
  }
  if (!route) {
    return router;
  }
  if (route.route.redirect) {
    return redirect.call(router, 'backward', route, navigateOptions);
  }
  const options = {};
  if (route.route.options) {
    extend(options, route.route.options, navigateOptions);
  } else {
    extend(options, navigateOptions);
  }
  options.route = route;
  let backForceLoaded;
  if (options.force && router.params.stackPages) {
    router.$el.children('.page-previous.stacked').each(pageEl => {
      if (pageEl.f7Page && pageEl.f7Page.route && pageEl.f7Page.route.url === route.url) {
        backForceLoaded = true;
        loadBack(router, {
          el: pageEl
        }, options);
      }
    });
    if (backForceLoaded) {
      return router;
    }
  }
  function resolve() {
    let routerLoaded = false;
    if (route.route.keepAlive && route.route.keepAliveData) {
      loadBack(router, {
        el: route.route.keepAliveData.pageEl
      }, options);
      routerLoaded = true;
    }
    'url content component pageName el componentUrl'.split(' ').forEach(pageLoadProp => {
      if (route.route[pageLoadProp] && !routerLoaded) {
        routerLoaded = true;
        loadBack(router, {
          [pageLoadProp]: route.route[pageLoadProp]
        }, options);
      }
    });
    if (routerLoaded) return;
    // Async
    function asyncResolve(resolveParams, resolveOptions) {
      router.allowPageChange = false;
      loadBack(router, resolveParams, extend(options, resolveOptions), true);
    }
    function asyncReject() {
      router.allowPageChange = true;
    }
    if (route.route.async) {
      router.allowPageChange = false;
      route.route.async.call(router, {
        router,
        to: route,
        from: router.currentRoute,
        resolve: asyncResolve,
        reject: asyncReject,
        direction: 'backward',
        app
      });
    }
    if (route.route.asyncComponent) {
      asyncComponent(router, route.route.asyncComponent, asyncResolve, asyncReject);
    }
  }
  function reject() {
    router.allowPageChange = true;
  }
  if (options.preload) {
    resolve();
  } else {
    processRouteQueue.call(router, route, router.currentRoute, () => {
      if (route.route.modules) {
        app.loadModules(Array.isArray(route.route.modules) ? route.route.modules : [route.route.modules]).then(() => {
          resolve();
        }).catch(() => {
          reject();
        });
      } else {
        resolve();
      }
    }, () => {
      reject();
    }, 'backward');
  }

  // Return Router
  return router;
}

function clearPreviousPages(router) {
  appRouterCheck(router, 'clearPreviousPages');
  const app = router.app;
  const dynamicNavbar = router.dynamicNavbar;
  const $pagesToRemove = router.$el.children('.page').filter(pageInView => {
    if (router.currentRoute && (router.currentRoute.modal || router.currentRoute.panel)) return true;
    return pageInView !== router.currentPageEl;
  });
  $pagesToRemove.each(pageEl => {
    const $oldPageEl = $(pageEl);
    const $oldNavbarEl = $(app.navbar.getElByPage($oldPageEl));
    if (router.params.stackPages && router.initialPages.indexOf($oldPageEl[0]) >= 0) {
      $oldPageEl.addClass('stacked');
      if (dynamicNavbar) {
        $oldNavbarEl.addClass('stacked');
      }
    } else {
      // Page remove event
      router.pageCallback('beforeRemove', $oldPageEl, $oldNavbarEl, 'previous', undefined, {});
      router.removePage($oldPageEl);
      if (dynamicNavbar && $oldNavbarEl.length) {
        router.removeNavbar($oldNavbarEl);
      }
    }
  });
}
function clearPreviousHistory() {
  const router = this;
  appRouterCheck(router, 'clearPreviousHistory');
  const url = router.history[router.history.length - 1];
  clearPreviousPages(router);
  router.history = [url];
  router.view.history = [url];
  router.saveHistory();
}
 // eslint-disable-line

class Router extends Framework7Class$1 {
  constructor(app, view) {
    super({}, [typeof view === 'undefined' ? app : view]);
    const router = this;

    // Is App Router
    router.isAppRouter = typeof view === 'undefined';
    if (router.isAppRouter) {
      // App Router
      extend(false, router, {
        app,
        params: app.params.view,
        routes: app.routes || [],
        cache: app.cache
      });
    } else {
      // View Router
      extend(false, router, {
        app,
        view,
        viewId: view.id,
        id: view.params.routerId,
        params: view.params,
        routes: view.routes,
        history: view.history,
        scrollHistory: view.scrollHistory,
        cache: app.cache,
        dynamicNavbar: app.theme === 'ios' && view.params.iosDynamicNavbar,
        initialPages: [],
        initialNavbars: []
      });
    }

    // Install Modules
    router.useModules();

    // AllowPageChage
    router.allowPageChange = true;

    // Current Route
    let currentRoute = {};
    let previousRoute = {};
    Object.defineProperty(router, 'currentRoute', {
      enumerable: true,
      configurable: true,
      set(newRoute) {
        if (newRoute === void 0) {
          newRoute = {};
        }
        previousRoute = extend({}, currentRoute);
        currentRoute = newRoute;
        if (!currentRoute) return;
        router.url = currentRoute.url;
        router.emit('routeChange', newRoute, previousRoute, router);
      },
      get() {
        return currentRoute;
      }
    });
    Object.defineProperty(router, 'previousRoute', {
      enumerable: true,
      configurable: true,
      get() {
        return previousRoute;
      },
      set(newRoute) {
        previousRoute = newRoute;
      }
    });
    return router;
  }
  mount() {
    const router = this;
    const view = router.view;
    const document = getDocument();
    extend(false, router, {
      tempDom: document.createElement('div'),
      $el: view.$el,
      el: view.el,
      $navbarsEl: view.$navbarsEl,
      navbarsEl: view.navbarsEl
    });
    router.emit('local::mount routerMount', router);
  }
  animatableNavElements($newNavbarEl, $oldNavbarEl, toLarge, fromLarge, direction) {
    const router = this;
    const dynamicNavbar = router.dynamicNavbar;
    const animateIcon = router.params.iosAnimateNavbarBackIcon;
    let newNavEls;
    let oldNavEls;
    function animatableNavEl($el, $navbarInner) {
      const isSliding = $el.hasClass('sliding') || $navbarInner.hasClass('sliding');
      const isSubnavbar = $el.hasClass('subnavbar');
      const needsOpacityTransition = isSliding ? !isSubnavbar : true;
      const $iconEl = $el.find('.back .icon');
      let isIconLabel;
      if (isSliding && animateIcon && $el.hasClass('left') && $iconEl.length > 0 && $iconEl.next('span').length) {
        $el = $iconEl.next('span'); // eslint-disable-line
        isIconLabel = true;
      }
      return {
        $el,
        isIconLabel,
        leftOffset: $el[0].f7NavbarLeftOffset,
        rightOffset: $el[0].f7NavbarRightOffset,
        isSliding,
        isSubnavbar,
        needsOpacityTransition
      };
    }
    if (dynamicNavbar) {
      newNavEls = [];
      oldNavEls = [];
      $newNavbarEl.children('.navbar-inner').children('.left, .right, .title, .subnavbar').each(navEl => {
        const $navEl = $(navEl);
        if ($navEl.hasClass('left') && fromLarge && direction === 'forward') return;
        if ($navEl.hasClass('title') && toLarge) return;
        newNavEls.push(animatableNavEl($navEl, $newNavbarEl.children('.navbar-inner')));
      });
      if (!($oldNavbarEl.hasClass('navbar-master') && router.params.masterDetailBreakpoint > 0 && router.app.width >= router.params.masterDetailBreakpoint)) {
        $oldNavbarEl.children('.navbar-inner').children('.left, .right, .title, .subnavbar').each(navEl => {
          const $navEl = $(navEl);
          if ($navEl.hasClass('left') && toLarge && !fromLarge && direction === 'forward') return;
          if ($navEl.hasClass('left') && toLarge && direction === 'backward') return;
          if ($navEl.hasClass('title') && fromLarge) {
            return;
          }
          oldNavEls.push(animatableNavEl($navEl, $oldNavbarEl.children('.navbar-inner')));
        });
      }
      [oldNavEls, newNavEls].forEach(navEls => {
        navEls.forEach(navEl => {
          const n = navEl;
          const {
            isSliding,
            $el
          } = navEl;
          const otherEls = navEls === oldNavEls ? newNavEls : oldNavEls;
          if (!(isSliding && $el.hasClass('title') && otherEls)) return;
          otherEls.forEach(otherNavEl => {
            if (otherNavEl.isIconLabel) {
              const iconTextEl = otherNavEl.$el[0];
              n.leftOffset += iconTextEl ? iconTextEl.offsetLeft || 0 : 0;
            }
          });
        });
      });
    }
    return {
      newNavEls,
      oldNavEls
    };
  }
  animate($oldPageEl, $newPageEl, $oldNavbarEl, $newNavbarEl, direction, transition, callback) {
    const router = this;
    if (router.params.animateCustom) {
      router.params.animateCustom.apply(router, [$oldPageEl, $newPageEl, $oldNavbarEl, $newNavbarEl, direction, callback]);
      return;
    }
    const dynamicNavbar = router.dynamicNavbar;
    const ios = router.app.theme === 'ios';
    if (transition) {
      const routerCustomTransitionClass = `router-transition-custom router-transition-${transition}-${direction}`;
      // Animate
      const onCustomTransitionDone = () => {
        router.$el.removeClass(routerCustomTransitionClass);
        if (dynamicNavbar && router.$navbarsEl.length) {
          if ($newNavbarEl) {
            router.$navbarsEl.prepend($newNavbarEl);
          }
          if ($oldNavbarEl) {
            router.$navbarsEl.prepend($oldNavbarEl);
          }
        }
        if (callback) callback();
      };
      (direction === 'forward' ? $newPageEl : $oldPageEl).animationEnd(onCustomTransitionDone);
      if (dynamicNavbar) {
        if ($newNavbarEl && $newPageEl) {
          router.setNavbarPosition($newNavbarEl, '');
          $newNavbarEl.removeClass('navbar-next navbar-previous navbar-current');
          $newPageEl.prepend($newNavbarEl);
        }
        if ($oldNavbarEl && $oldPageEl) {
          router.setNavbarPosition($oldNavbarEl, '');
          $oldNavbarEl.removeClass('navbar-next navbar-previous navbar-current');
          $oldPageEl.prepend($oldNavbarEl);
        }
      }
      router.$el.addClass(routerCustomTransitionClass);
      return;
    }

    // Router Animation class
    const routerTransitionClass = `router-transition-${direction} router-transition`;
    let newNavEls;
    let oldNavEls;
    let fromLarge;
    let toLarge;
    let toDifferent;
    let oldIsLarge;
    let newIsLarge;
    if (ios && dynamicNavbar) {
      const betweenMasterAndDetail = router.params.masterDetailBreakpoint > 0 && router.app.width >= router.params.masterDetailBreakpoint && ($oldNavbarEl.hasClass('navbar-master') && $newNavbarEl.hasClass('navbar-master-detail') || $oldNavbarEl.hasClass('navbar-master-detail') && $newNavbarEl.hasClass('navbar-master'));
      if (!betweenMasterAndDetail) {
        oldIsLarge = $oldNavbarEl && $oldNavbarEl.hasClass('navbar-large');
        newIsLarge = $newNavbarEl && $newNavbarEl.hasClass('navbar-large');
        fromLarge = oldIsLarge && !$oldNavbarEl.hasClass('navbar-large-collapsed');
        toLarge = newIsLarge && !$newNavbarEl.hasClass('navbar-large-collapsed');
        toDifferent = fromLarge && !toLarge || toLarge && !fromLarge;
      }
      const navEls = router.animatableNavElements($newNavbarEl, $oldNavbarEl, toLarge, fromLarge, direction);
      newNavEls = navEls.newNavEls;
      oldNavEls = navEls.oldNavEls;
    }
    function animateNavbars(progress) {
      if (!(ios && dynamicNavbar)) return;
      if (progress === 1) {
        if (toLarge) {
          $newNavbarEl.addClass('router-navbar-transition-to-large');
          $oldNavbarEl.addClass('router-navbar-transition-to-large');
        }
        if (fromLarge) {
          $newNavbarEl.addClass('router-navbar-transition-from-large');
          $oldNavbarEl.addClass('router-navbar-transition-from-large');
        }
      }
      newNavEls.forEach(navEl => {
        const $el = navEl.$el;
        const offset = direction === 'forward' ? navEl.rightOffset : navEl.leftOffset;
        if (navEl.isSliding) {
          if (navEl.isSubnavbar && newIsLarge) {
            // prettier-ignore
            $el[0].style.setProperty('transform', `translate3d(${offset * (1 - progress)}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)`, 'important');
          } else {
            $el.transform(`translate3d(${offset * (1 - progress)}px,0,0)`);
          }
        }
      });
      oldNavEls.forEach(navEl => {
        const $el = navEl.$el;
        const offset = direction === 'forward' ? navEl.leftOffset : navEl.rightOffset;
        if (navEl.isSliding) {
          if (navEl.isSubnavbar && oldIsLarge) {
            $el.transform(`translate3d(${offset * progress}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)`);
          } else {
            $el.transform(`translate3d(${offset * progress}px,0,0)`);
          }
        }
      });
    }

    // AnimationEnd Callback
    function onDone() {
      if (router.dynamicNavbar) {
        if ($newNavbarEl) {
          $newNavbarEl.removeClass('router-navbar-transition-to-large router-navbar-transition-from-large');
          $newNavbarEl.addClass('navbar-no-title-large-transition');
          nextFrame$1(() => {
            $newNavbarEl.removeClass('navbar-no-title-large-transition');
          });
        }
        if ($oldNavbarEl) {
          $oldNavbarEl.removeClass('router-navbar-transition-to-large router-navbar-transition-from-large');
        }
        if ($newNavbarEl.hasClass('sliding') || $newNavbarEl.children('.navbar-inner.sliding').length) {
          $newNavbarEl.find('.title, .left, .right, .left .icon, .subnavbar').transform('');
        } else {
          $newNavbarEl.find('.sliding').transform('');
        }
        if ($oldNavbarEl.hasClass('sliding') || $oldNavbarEl.children('.navbar-inner.sliding').length) {
          $oldNavbarEl.find('.title, .left, .right, .left .icon, .subnavbar').transform('');
        } else {
          $oldNavbarEl.find('.sliding').transform('');
        }
      }
      router.$el.removeClass(routerTransitionClass);
      if (callback) callback();
    }
    (direction === 'forward' ? $newPageEl : $oldPageEl).animationEnd(() => {
      onDone();
    });

    // Animate
    if (dynamicNavbar) {
      // Prepare Navbars
      animateNavbars(0);
      nextFrame$1(() => {
        // Add class, start animation
        router.$el.addClass(routerTransitionClass);
        if (toDifferent) {
          // eslint-disable-next-line
          router.el._clientLeft = router.el.clientLeft;
        }
        animateNavbars(1);
      });
    } else {
      // Add class, start animation
      router.$el.addClass(routerTransitionClass);
    }
  }
  removeModal(modalEl) {
    const router = this;
    router.removeEl(modalEl);
  }
  // eslint-disable-next-line
  removeTabContent(tabEl) {
    const $tabEl = $(tabEl);
    $tabEl.html('');
  }
  removeNavbar(el) {
    const router = this;
    router.removeEl(el);
  }
  removePage(el) {
    const $el = $(el);
    const f7Page = $el && $el[0] && $el[0].f7Page;
    const router = this;
    if (f7Page && f7Page.route && f7Page.route.route && f7Page.route.route.keepAlive) {
      $el.remove();
      return;
    }
    router.removeEl(el);
  }
  removeEl(el) {
    if (!el) return;
    const router = this;
    const $el = $(el);
    if ($el.length === 0) return;
    $el.find('.tab').each(tabEl => {
      $(tabEl).children().each(tabChild => {
        if (tabChild.f7Component) {
          $(tabChild).trigger('tab:beforeremove');
          tabChild.f7Component.destroy();
        }
      });
    });
    if ($el[0].f7Component && $el[0].f7Component.destroy) {
      $el[0].f7Component.destroy();
    }
    if (!router.params.removeElements) {
      return;
    }
    if (router.params.removeElementsWithTimeout) {
      setTimeout(() => {
        $el.remove();
      }, router.params.removeElementsTimeout);
    } else {
      $el.remove();
    }
  }
  getPageEl(content) {
    const router = this;
    if (typeof content === 'string') {
      router.tempDom.innerHTML = content;
    } else {
      if ($(content).hasClass('page')) {
        return content;
      }
      router.tempDom.innerHTML = '';
      $(router.tempDom).append(content);
    }
    return router.findElement('.page', router.tempDom);
  }
  findElement(stringSelector, container, notStacked) {
    const router = this;
    const view = router.view;
    const app = router.app;

    // Modals Selector
    const modalsSelector = '.popup, .dialog, .popover, .actions-modal, .sheet-modal, .login-screen, .page';
    const $container = $(container);
    let selector = stringSelector;
    if (notStacked) selector += ':not(.stacked)';
    let found = $container.find(selector).filter(el => $(el).parents(modalsSelector).length === 0);
    if (found.length > 1) {
      if (typeof view.selector === 'string') {
        // Search in related view
        found = $container.find(`${view.selector} ${selector}`);
      }
      if (found.length > 1) {
        // Search in main view
        found = $container.find(`.${app.params.viewMainClass} ${selector}`);
      }
    }
    if (found.length === 1) return found;

    // Try to find not stacked
    if (!notStacked) found = router.findElement(selector, $container, true);
    if (found && found.length === 1) return found;
    if (found && found.length > 1) return $(found[0]);
    return undefined;
  }
  flattenRoutes(routes) {
    if (routes === void 0) {
      routes = this.routes;
    }
    const router = this;
    let flattenedRoutes = [];
    routes.forEach(route => {
      let hasTabRoutes = false;
      if ('tabs' in route && route.tabs) {
        const mergedPathsRoutes = route.tabs.map(tabRoute => {
          const tRoute = extend({}, route, {
            path: `${route.path}/${tabRoute.path}`.replace('///', '/').replace('//', '/'),
            parentPath: route.path,
            tab: tabRoute
          });
          delete tRoute.tabs;
          delete tRoute.routes;
          return tRoute;
        });
        hasTabRoutes = true;
        flattenedRoutes = flattenedRoutes.concat(router.flattenRoutes(mergedPathsRoutes));
      }
      if ('detailRoutes' in route) {
        const mergedPathsRoutes = route.detailRoutes.map(detailRoute => {
          const dRoute = extend({}, detailRoute);
          dRoute.masterRoute = route;
          dRoute.masterRoutePath = route.path;
          return dRoute;
        });
        flattenedRoutes = flattenedRoutes.concat(route, router.flattenRoutes(mergedPathsRoutes));
      }
      if ('routes' in route) {
        const mergedPathsRoutes = route.routes.map(childRoute => {
          const cRoute = extend({}, childRoute);
          cRoute.path = `${route.path}/${cRoute.path}`.replace('///', '/').replace('//', '/');
          return cRoute;
        });
        if (hasTabRoutes) {
          flattenedRoutes = flattenedRoutes.concat(router.flattenRoutes(mergedPathsRoutes));
        } else {
          flattenedRoutes = flattenedRoutes.concat(route, router.flattenRoutes(mergedPathsRoutes));
        }
      }
      if (!('routes' in route) && !('tabs' in route && route.tabs) && !('detailRoutes' in route)) {
        flattenedRoutes.push(route);
      }
    });
    return flattenedRoutes;
  }

  // eslint-disable-next-line
  parseRouteUrl(url) {
    if (!url) return {};
    const query = parseUrlQuery(url);
    const hash = url.split('#')[1];
    const params = {};
    const path = url.split('#')[0].split('?')[0];
    return {
      query,
      hash,
      params,
      url,
      path
    };
  }
  generateUrl(parameters) {
    if (parameters === void 0) {
      parameters = {};
    }
    if (typeof parameters === 'string') {
      return parameters;
    }
    const {
      name,
      path,
      params,
      query
    } = parameters;
    if (!name && !path) {
      throw new Error('Framework7: "name" or "path" parameter is required');
    }
    const router = this;
    const route = name ? router.findRouteByKey('name', name) : router.findRouteByKey('path', path);
    if (!route) {
      if (name) {
        throw new Error(`Framework7: route with name "${name}" not found`);
      } else {
        throw new Error(`Framework7: route with path "${path}" not found`);
      }
    }
    const url = router.constructRouteUrl(route, {
      params,
      query
    });
    if (!url) {
      throw new Error(`Framework7: can't construct URL for route with name "${name}"`);
    }
    return url;
  }

  // eslint-disable-next-line
  constructRouteUrl(route, _temp) {
    let {
      params,
      query
    } = _temp === void 0 ? {} : _temp;
    const {
      path
    } = route;
    const toUrl = compile(path);
    let url;
    try {
      url = toUrl(params || {});
    } catch (error) {
      throw new Error(`Framework7: error constructing route URL from passed params:\nRoute: ${path}\n${error.toString()}`);
    }
    if (query) {
      if (typeof query === 'string') url += `?${query}`;else if (Object.keys(query).length) url += `?${serializeObject(query)}`;
    }
    return url;
  }
  findTabRouteUrl(tabEl) {
    const router = this;
    const $tabEl = $(tabEl);
    const parentPath = router.currentRoute.route.parentPath;
    const tabId = $tabEl.attr('id');
    const flattenedRoutes = router.flattenRoutes(router.routes);
    let foundTabRouteUrl;
    flattenedRoutes.forEach(route => {
      if (route.parentPath === parentPath && route.tab && route.tab.id === tabId) {
        if (router.currentRoute.params && Object.keys(router.currentRoute.params).length > 0) {
          foundTabRouteUrl = router.constructRouteUrl(route, {
            params: router.currentRoute.params,
            query: router.currentRoute.query
          });
        } else {
          foundTabRouteUrl = route.path;
        }
      }
    });
    return foundTabRouteUrl;
  }
  findRouteByKey(key, value) {
    const router = this;
    const routes = router.routes;
    const flattenedRoutes = router.flattenRoutes(routes);
    let matchingRoute;
    flattenedRoutes.forEach(route => {
      if (matchingRoute) return;
      if (route[key] === value) {
        matchingRoute = route;
      }
    });
    return matchingRoute;
  }
  findMatchingRoute(url) {
    if (!url) return undefined;
    const router = this;
    const routes = router.routes;
    const flattenedRoutes = router.flattenRoutes(routes);
    const {
      path,
      query,
      hash,
      params
    } = router.parseRouteUrl(url);
    let matchingRoute;
    flattenedRoutes.forEach(route => {
      if (matchingRoute) return;
      const keys = [];
      const pathsToMatch = [route.path];
      if (route.alias) {
        if (typeof route.alias === 'string') pathsToMatch.push(route.alias);else if (Array.isArray(route.alias)) {
          route.alias.forEach(aliasPath => {
            pathsToMatch.push(aliasPath);
          });
        }
      }
      let matched;
      pathsToMatch.forEach(pathToMatch => {
        if (matched) return;
        matched = pathToRegexp(pathToMatch, keys).exec(path);
      });
      if (matched) {
        keys.forEach((keyObj, index) => {
          if (typeof keyObj.name === 'number') return;
          const paramValue = matched[index + 1];
          if (typeof paramValue === 'undefined' || paramValue === null) {
            params[keyObj.name] = paramValue;
          } else {
            params[keyObj.name] = decodeURIComponent(paramValue);
          }
        });
        let parentPath;
        if (route.parentPath) {
          parentPath = path.split('/').slice(0, route.parentPath.split('/').length - 1).join('/');
        }
        matchingRoute = {
          query,
          hash,
          params,
          url,
          path,
          parentPath,
          route,
          name: route.name
        };
      }
    });
    return matchingRoute;
  }

  // eslint-disable-next-line
  replaceRequestUrlParams(url, options) {
    if (url === void 0) {
      url = '';
    }
    if (options === void 0) {
      options = {};
    }
    let compiledUrl = url;
    if (typeof compiledUrl === 'string' && compiledUrl.indexOf('{{') >= 0 && options && options.route && options.route.params && Object.keys(options.route.params).length) {
      Object.keys(options.route.params).forEach(paramName => {
        const regExp = new RegExp(`{{${paramName}}}`, 'g');
        compiledUrl = compiledUrl.replace(regExp, options.route.params[paramName] || '');
      });
    }
    return compiledUrl;
  }
  removeFromXhrCache(url) {
    const router = this;
    const xhrCache = router.cache.xhr;
    let index = false;
    for (let i = 0; i < xhrCache.length; i += 1) {
      if (xhrCache[i].url === url) index = i;
    }
    if (index !== false) xhrCache.splice(index, 1);
  }
  xhrRequest(requestUrl, options) {
    const router = this;
    const params = router.params;
    const {
      ignoreCache
    } = options;
    let url = requestUrl;
    let hasQuery = url.indexOf('?') >= 0;
    if (params.passRouteQueryToRequest && options && options.route && options.route.query && Object.keys(options.route.query).length) {
      url += `${hasQuery ? '&' : '?'}${serializeObject(options.route.query)}`;
      hasQuery = true;
    }
    if (params.passRouteParamsToRequest && options && options.route && options.route.params && Object.keys(options.route.params).length) {
      url += `${hasQuery ? '&' : '?'}${serializeObject(options.route.params)}`;
      hasQuery = true;
    }
    if (url.indexOf('{{') >= 0) {
      url = router.replaceRequestUrlParams(url, options);
    }
    // should we ignore get params or not
    if (params.xhrCacheIgnoreGetParameters && url.indexOf('?') >= 0) {
      url = url.split('?')[0];
    }
    return new Promise((resolve, reject) => {
      if (params.xhrCache && !ignoreCache && url.indexOf('nocache') < 0 && params.xhrCacheIgnore.indexOf(url) < 0) {
        for (let i = 0; i < router.cache.xhr.length; i += 1) {
          const cachedUrl = router.cache.xhr[i];
          if (cachedUrl.url === url) {
            // Check expiration
            if (now() - cachedUrl.time < params.xhrCacheDuration) {
              // Load from cache
              resolve(cachedUrl.content);
              return;
            }
          }
        }
      }
      router.xhrAbortController = router.app.request.abortController();
      router.app.request({
        abortController: router.xhrAbortController,
        url,
        method: 'GET',
        beforeSend(xhr) {
          router.emit('routerAjaxStart', xhr, options);
        },
        complete(xhr, status) {
          router.emit('routerAjaxComplete', xhr);
          if (status !== 'error' && status !== 'timeout' && xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
            if (params.xhrCache && xhr.responseText !== '') {
              router.removeFromXhrCache(url);
              router.cache.xhr.push({
                url,
                time: now(),
                content: xhr.responseText
              });
            }
            router.emit('routerAjaxSuccess', xhr, options);
            resolve(xhr.responseText);
          } else {
            router.emit('routerAjaxError', xhr, options);
            reject(xhr);
          }
        },
        error(xhr) {
          router.emit('routerAjaxError', xhr, options);
          reject(xhr);
        }
      });
    });
  }
  setNavbarPosition($el, position, ariaHidden) {
    const router = this;
    $el.removeClass('navbar-previous navbar-current navbar-next');
    if (position) {
      $el.addClass(`navbar-${position}`);
    }
    if (ariaHidden === false) {
      $el.removeAttr('aria-hidden');
    } else if (ariaHidden === true) {
      $el.attr('aria-hidden', 'true');
    }
    $el.trigger('navbar:position', {
      position
    });
    router.emit('navbarPosition', $el[0], position);
  }
  setPagePosition($el, position, ariaHidden) {
    const router = this;
    $el.removeClass('page-previous page-current page-next');
    $el.addClass(`page-${position}`);
    if (ariaHidden === false) {
      $el.removeAttr('aria-hidden');
    } else if (ariaHidden === true) {
      $el.attr('aria-hidden', 'true');
    }
    $el.trigger('page:position', {
      position
    });
    router.emit('pagePosition', $el[0], position);
  }

  // Remove theme elements
  removeThemeElements(el) {
    const router = this;
    const theme = router.app.theme;
    let toRemove;
    if (theme === 'ios') {
      toRemove = '.md-only, .aurora-only, .if-md, .if-aurora, .if-not-ios, .not-ios';
    } else if (theme === 'md') {
      toRemove = '.ios-only, .aurora-only, .if-ios, .if-aurora, .if-not-md, .not-md';
    } else if (theme === 'aurora') {
      toRemove = '.ios-only, .md-only, .if-ios, .if-md, .if-not-aurora, .not-aurora';
    }
    $(el).find(toRemove).remove();
  }
  getPageData(pageEl, navbarEl, from, to, route, pageFromEl) {
    if (route === void 0) {
      route = {};
    }
    const router = this;
    const $pageEl = $(pageEl).eq(0);
    const $navbarEl = $(navbarEl).eq(0);
    const currentPage = $pageEl[0].f7Page || {};
    let direction;
    let pageFrom;
    if (from === 'next' && to === 'current' || from === 'current' && to === 'previous') direction = 'forward';
    if (from === 'current' && to === 'next' || from === 'previous' && to === 'current') direction = 'backward';
    if (currentPage && !currentPage.fromPage) {
      const $pageFromEl = $(pageFromEl);
      if ($pageFromEl.length) {
        pageFrom = $pageFromEl[0].f7Page;
      }
    }
    pageFrom = currentPage.pageFrom || pageFrom;
    if (pageFrom && pageFrom.pageFrom) {
      pageFrom.pageFrom = null;
    }
    const page = {
      app: router.app,
      view: router.view,
      router,
      $el: $pageEl,
      el: $pageEl[0],
      $pageEl,
      pageEl: $pageEl[0],
      $navbarEl,
      navbarEl: $navbarEl[0],
      name: $pageEl.attr('data-name'),
      position: from,
      from,
      to,
      direction,
      route: currentPage.route ? currentPage.route : route,
      pageFrom
    };
    $pageEl[0].f7Page = page;
    return page;
  }

  // Callbacks
  pageCallback(callback, pageEl, navbarEl, from, to, options, pageFromEl) {
    if (options === void 0) {
      options = {};
    }
    if (!pageEl) return;
    const router = this;
    const $pageEl = $(pageEl);
    if (!$pageEl.length) return;
    const $navbarEl = $(navbarEl);
    const {
      route
    } = options;
    const restoreScrollTopOnBack = router.params.restoreScrollTopOnBack && !(router.params.masterDetailBreakpoint > 0 && $pageEl.hasClass('page-master') && router.app.width >= router.params.masterDetailBreakpoint);
    const keepAlive = $pageEl[0].f7Page && $pageEl[0].f7Page.route && $pageEl[0].f7Page.route.route && $pageEl[0].f7Page.route.route.keepAlive;
    if (callback === 'beforeRemove' && keepAlive) {
      callback = 'beforeUnmount'; // eslint-disable-line
    }

    const camelName = `page${callback[0].toUpperCase() + callback.slice(1, callback.length)}`;
    const colonName = `page:${callback.toLowerCase()}`;
    let page = {};
    if (callback === 'beforeRemove' && $pageEl[0].f7Page) {
      page = extend($pageEl[0].f7Page, {
        from,
        to,
        position: from
      });
    } else {
      page = router.getPageData($pageEl[0], $navbarEl[0], from, to, route, pageFromEl);
    }
    page.swipeBack = !!options.swipeBack;
    const {
      on = {},
      once = {}
    } = options.route ? options.route.route : {};
    if (options.on) {
      extend(on, options.on);
    }
    if (options.once) {
      extend(once, options.once);
    }
    function attachEvents() {
      if ($pageEl[0].f7RouteEventsAttached) return;
      $pageEl[0].f7RouteEventsAttached = true;
      if (on && Object.keys(on).length > 0) {
        $pageEl[0].f7RouteEventsOn = on;
        Object.keys(on).forEach(eventName => {
          on[eventName] = on[eventName].bind(router);
          $pageEl.on(eventNameToColonCase(eventName), on[eventName]);
        });
      }
      if (once && Object.keys(once).length > 0) {
        $pageEl[0].f7RouteEventsOnce = once;
        Object.keys(once).forEach(eventName => {
          once[eventName] = once[eventName].bind(router);
          $pageEl.once(eventNameToColonCase(eventName), once[eventName]);
        });
      }
    }
    function detachEvents() {
      if (!$pageEl[0].f7RouteEventsAttached) return;
      if ($pageEl[0].f7RouteEventsOn) {
        Object.keys($pageEl[0].f7RouteEventsOn).forEach(eventName => {
          $pageEl.off(eventNameToColonCase(eventName), $pageEl[0].f7RouteEventsOn[eventName]);
        });
      }
      if ($pageEl[0].f7RouteEventsOnce) {
        Object.keys($pageEl[0].f7RouteEventsOnce).forEach(eventName => {
          $pageEl.off(eventNameToColonCase(eventName), $pageEl[0].f7RouteEventsOnce[eventName]);
        });
      }
      $pageEl[0].f7RouteEventsAttached = null;
      $pageEl[0].f7RouteEventsOn = null;
      $pageEl[0].f7RouteEventsOnce = null;
      delete $pageEl[0].f7RouteEventsAttached;
      delete $pageEl[0].f7RouteEventsOn;
      delete $pageEl[0].f7RouteEventsOnce;
    }
    if (callback === 'mounted') {
      attachEvents();
    }
    if (callback === 'init') {
      if (restoreScrollTopOnBack && (from === 'previous' || !from) && to === 'current' && router.scrollHistory[page.route.url] && !$pageEl.hasClass('no-restore-scroll')) {
        let $pageContent = $pageEl.find('.page-content');
        if ($pageContent.length > 0) {
          // eslint-disable-next-line
          $pageContent = $pageContent.filter(pageContentEl => {
            return $(pageContentEl).parents('.tab:not(.tab-active)').length === 0 && !$(pageContentEl).is('.tab:not(.tab-active)');
          });
        }
        $pageContent.scrollTop(router.scrollHistory[page.route.url]);
      }
      attachEvents();
      if ($pageEl[0].f7PageInitialized) {
        $pageEl.trigger('page:reinit', page);
        router.emit('pageReinit', page);
        return;
      }
      $pageEl[0].f7PageInitialized = true;
    }
    if (restoreScrollTopOnBack && callback === 'beforeOut' && from === 'current' && to === 'previous') {
      // Save scroll position
      let $pageContent = $pageEl.find('.page-content');
      if ($pageContent.length > 0) {
        // eslint-disable-next-line
        $pageContent = $pageContent.filter(pageContentEl => {
          return $(pageContentEl).parents('.tab:not(.tab-active)').length === 0 && !$(pageContentEl).is('.tab:not(.tab-active)');
        });
      }
      router.scrollHistory[page.route.url] = $pageContent.scrollTop();
    }
    if (restoreScrollTopOnBack && callback === 'beforeOut' && from === 'current' && to === 'next') {
      // Delete scroll position
      delete router.scrollHistory[page.route.url];
    }
    $pageEl.trigger(colonName, page);
    router.emit(camelName, page);
    if (callback === 'beforeRemove' || callback === 'beforeUnmount') {
      detachEvents();
      if (!keepAlive) {
        if ($pageEl[0].f7Page && $pageEl[0].f7Page.navbarEl) {
          delete $pageEl[0].f7Page.navbarEl.f7Page;
        }
        $pageEl[0].f7Page = null;
      }
    }
  }
  saveHistory() {
    const router = this;
    const window = getWindow();
    router.view.history = router.history;
    if (router.params.browserHistory && router.params.browserHistoryStoreHistory && window.localStorage) {
      window.localStorage[`f7router-${router.view.id}-history`] = JSON.stringify(router.history);
    }
  }
  restoreHistory() {
    const router = this;
    const window = getWindow();
    if (router.params.browserHistory && router.params.browserHistoryStoreHistory && window.localStorage && window.localStorage[`f7router-${router.view.id}-history`]) {
      router.history = JSON.parse(window.localStorage[`f7router-${router.view.id}-history`]);
      router.view.history = router.history;
    }
  }
  clearHistory() {
    const router = this;
    router.history = [];
    if (router.view) router.view.history = [];
    router.saveHistory();
  }
  updateCurrentUrl(newUrl) {
    const router = this;
    appRouterCheck(router, 'updateCurrentUrl');
    // Update history
    if (router.history.length) {
      router.history[router.history.length - 1] = newUrl;
    } else {
      router.history.push(newUrl);
    }

    // Update current route params
    const {
      query,
      hash,
      params,
      url,
      path
    } = router.parseRouteUrl(newUrl);
    if (router.currentRoute) {
      extend(router.currentRoute, {
        query,
        hash,
        params,
        url,
        path
      });
    }
    if (router.params.browserHistory) {
      const browserHistoryRoot = router.params.browserHistoryRoot || '';
      History$1.replace(router.view.id, {
        url: newUrl
      }, browserHistoryRoot + router.params.browserHistorySeparator + newUrl);
    }

    // Save History
    router.saveHistory();
    router.emit('routeUrlUpdate', router.currentRoute, router);
  }
  getInitialUrl() {
    const router = this;
    if (router.initialUrl) {
      return {
        initialUrl: router.initialUrl,
        historyRestored: router.historyRestored
      };
    }
    const {
      app,
      view
    } = router;
    const document = getDocument();
    const window = getWindow();
    const location = app.params.url && typeof app.params.url === 'string' && typeof URL !== 'undefined' ? new URL(app.params.url) : document.location;
    let initialUrl = router.params.url;
    let documentUrl = location.href.split(location.origin)[1];
    let historyRestored;
    const {
      browserHistory,
      browserHistoryOnLoad,
      browserHistorySeparator
    } = router.params;
    let {
      browserHistoryRoot
    } = router.params;
    if ((window.cordova || window.Capacitor && window.Capacitor.isNative) && browserHistory && !browserHistorySeparator && !browserHistoryRoot && location.pathname.indexOf('index.html')) {
      // eslint-disable-next-line
      console.warn('Framework7: wrong or not complete browserHistory configuration, trying to guess browserHistoryRoot');
      browserHistoryRoot = location.pathname.split('index.html')[0];
    }
    if (!browserHistory || !browserHistoryOnLoad) {
      if (!initialUrl) {
        initialUrl = documentUrl;
      }
      if (location.search && initialUrl.indexOf('?') < 0) {
        initialUrl += location.search;
      }
      if (location.hash && initialUrl.indexOf('#') < 0) {
        initialUrl += location.hash;
      }
    } else {
      if (browserHistoryRoot && documentUrl.indexOf(browserHistoryRoot) >= 0) {
        documentUrl = documentUrl.split(browserHistoryRoot)[1];
        if (documentUrl === '') documentUrl = '/';
      }
      if (browserHistorySeparator.length > 0 && documentUrl.indexOf(browserHistorySeparator) >= 0) {
        initialUrl = documentUrl.split(browserHistorySeparator)[1];
      } else {
        initialUrl = documentUrl;
      }
      router.restoreHistory();
      if (router.history.indexOf(initialUrl) >= 0) {
        router.history = router.history.slice(0, router.history.indexOf(initialUrl) + 1);
      } else if (router.params.url === initialUrl) {
        router.history = [initialUrl];
      } else if (History$1.state && History$1.state[view.id] && History$1.state[view.id].url === router.history[router.history.length - 1]) {
        initialUrl = router.history[router.history.length - 1];
      } else {
        router.history = [documentUrl.split(browserHistorySeparator)[0] || '/', initialUrl];
      }
      if (router.history.length > 1) {
        historyRestored = true;
      } else {
        router.history = [];
      }
      router.saveHistory();
    }
    router.initialUrl = initialUrl;
    router.historyRestored = historyRestored;
    return {
      initialUrl,
      historyRestored
    };
  }
  init() {
    const router = this;
    const {
      app,
      view
    } = router;
    const document = getDocument();
    router.mount();
    const {
      initialUrl,
      historyRestored
    } = router.getInitialUrl();

    // Init Swipeback
    if (view && router.params.iosSwipeBack && app.theme === 'ios' || view && router.params.mdSwipeBack && app.theme === 'md' || view && router.params.auroraSwipeBack && app.theme === 'aurora') {
      SwipeBack(router);
    }
    const {
      browserHistory,
      browserHistoryOnLoad,
      browserHistoryAnimateOnLoad,
      browserHistoryInitialMatch
    } = router.params;
    let currentRoute;
    if (router.history.length > 1) {
      // Will load page
      const initUrl = browserHistoryInitialMatch ? initialUrl : router.history[0];
      currentRoute = router.findMatchingRoute(initUrl);
      if (!currentRoute) {
        currentRoute = extend(router.parseRouteUrl(initUrl), {
          route: {
            url: initUrl,
            path: initUrl.split('?')[0]
          }
        });
      }
    } else {
      // Don't load page
      currentRoute = router.findMatchingRoute(initialUrl);
      if (!currentRoute) {
        currentRoute = extend(router.parseRouteUrl(initialUrl), {
          route: {
            url: initialUrl,
            path: initialUrl.split('?')[0]
          }
        });
      }
    }
    if (router.params.stackPages) {
      router.$el.children('.page').each(pageEl => {
        const $pageEl = $(pageEl);
        router.initialPages.push($pageEl[0]);
        if (router.dynamicNavbar && $pageEl.children('.navbar').length > 0) {
          router.initialNavbars.push($pageEl.children('.navbar')[0]);
        }
      });
    }
    if (router.$el.children('.page:not(.stacked)').length === 0 && initialUrl && router.params.loadInitialPage) {
      // No pages presented in DOM, reload new page
      router.navigate(initialUrl, {
        initial: true,
        reloadCurrent: true,
        browserHistory: false,
        animate: false,
        once: {
          modalOpen() {
            if (!historyRestored) return;
            const preloadPreviousPage = router.params.preloadPreviousPage || router.params[`${app.theme}SwipeBack`];
            if (preloadPreviousPage && router.history.length > 1) {
              router.back({
                preload: true
              });
            }
          },
          pageAfterIn() {
            if (!historyRestored) return;
            const preloadPreviousPage = router.params.preloadPreviousPage || router.params[`${app.theme}SwipeBack`];
            if (preloadPreviousPage && router.history.length > 1) {
              router.back({
                preload: true
              });
            }
          }
        }
      });
    } else if (router.$el.children('.page:not(.stacked)').length) {
      // Init current DOM page
      let hasTabRoute;
      router.currentRoute = currentRoute;
      router.$el.children('.page:not(.stacked)').each(pageEl => {
        const $pageEl = $(pageEl);
        let $navbarEl;
        router.setPagePosition($pageEl, 'current');
        if (router.dynamicNavbar) {
          $navbarEl = $pageEl.children('.navbar');
          if ($navbarEl.length > 0) {
            if (!router.$navbarsEl.parents(document).length) {
              router.$el.prepend(router.$navbarsEl);
            }
            router.setNavbarPosition($navbarEl, 'current');
            router.$navbarsEl.append($navbarEl);
            if ($navbarEl.children('.title-large').length) {
              $navbarEl.addClass('navbar-large');
            }
            $pageEl.children('.navbar').remove();
          } else {
            router.$navbarsEl.addClass('navbar-hidden');
            if ($navbarEl.children('.title-large').length) {
              router.$navbarsEl.addClass('navbar-hidden navbar-large-hidden');
            }
          }
        }
        if (router.currentRoute && router.currentRoute.route && (router.currentRoute.route.master === true || typeof router.currentRoute.route.master === 'function' && router.currentRoute.route.master(app, router)) && router.params.masterDetailBreakpoint > 0) {
          $pageEl.addClass('page-master');
          $pageEl.trigger('page:role', {
            role: 'master'
          });
          if ($navbarEl && $navbarEl.length) {
            $navbarEl.addClass('navbar-master');
          }
          view.checkMasterDetailBreakpoint();
        }
        const initOptions = {
          route: router.currentRoute
        };
        if (router.currentRoute && router.currentRoute.route && router.currentRoute.route.options) {
          extend(initOptions, router.currentRoute.route.options);
        }
        router.currentPageEl = $pageEl[0];
        if (router.dynamicNavbar && $navbarEl.length) {
          router.currentNavbarEl = $navbarEl[0];
        }
        router.removeThemeElements($pageEl);
        if (router.dynamicNavbar && $navbarEl.length) {
          router.removeThemeElements($navbarEl);
        }
        if (initOptions.route.route.tab) {
          hasTabRoute = true;
          router.tabLoad(initOptions.route.route.tab, extend({}, initOptions));
        }
        router.pageCallback('init', $pageEl, $navbarEl, 'current', undefined, initOptions);
        router.pageCallback('beforeIn', $pageEl, $navbarEl, 'current', undefined, initOptions);
        router.pageCallback('afterIn', $pageEl, $navbarEl, 'current', undefined, initOptions);
      });
      if (historyRestored) {
        if (browserHistoryInitialMatch) {
          const preloadPreviousPage = router.params.preloadPreviousPage || router.params[`${app.theme}SwipeBack`];
          if (preloadPreviousPage && router.history.length > 1) {
            router.back({
              preload: true
            });
          }
        } else {
          router.navigate(initialUrl, {
            initial: true,
            browserHistory: false,
            history: false,
            animate: browserHistoryAnimateOnLoad,
            once: {
              pageAfterIn() {
                const preloadPreviousPage = router.params.preloadPreviousPage || router.params[`${app.theme}SwipeBack`];
                if (preloadPreviousPage && router.history.length > 2) {
                  router.back({
                    preload: true
                  });
                }
              }
            }
          });
        }
      }
      if (!historyRestored && !hasTabRoute) {
        router.history.push(initialUrl);
        router.saveHistory();
      }
    }
    if (initialUrl && browserHistory && browserHistoryOnLoad && (!History$1.state || !History$1.state[view.id])) {
      History$1.initViewState(view.id, {
        url: initialUrl
      });
    }
    router.emit('local::init routerInit', router);
  }
  destroy() {
    let router = this;
    router.emit('local::destroy routerDestroy', router);

    // Delete props & methods
    Object.keys(router).forEach(routerProp => {
      router[routerProp] = null;
      delete router[routerProp];
    });
    router = null;
  }
}

// Load
Router.prototype.navigate = navigate;
Router.prototype.refreshPage = refreshPage;
// Tab
Router.prototype.tabLoad = tabLoad;
Router.prototype.tabRemove = tabRemove;
// Modal
Router.prototype.modalLoad = modalLoad;
Router.prototype.modalRemove = modalRemove;
// Back
Router.prototype.back = back;
// Clear history
Router.prototype.clearPreviousHistory = clearPreviousHistory;
var Router$1 = Router;

var RouterModule = {
  name: 'router',
  static: {
    Router: Router$1
  },
  instance: {
    cache: {
      xhr: [],
      templates: [],
      components: []
    }
  },
  create() {
    const instance = this;
    if (instance.app) {
      // View Router
      if (instance.params.router) {
        instance.router = new Router$1(instance.app, instance);
      }
    } else {
      // App Router
      instance.router = new Router$1(instance);
    }
  }
};

function resizableView(view) {
  const app = view.app;
  const support = getSupport();
  if (view.resizableInitialized) return;
  extend(view, {
    resizable: true,
    resizableWidth: null,
    resizableInitialized: true
  });
  const $htmlEl = $('html');
  const {
    $el
  } = view;
  if (!$el) return;
  let $resizeHandlerEl;
  let isTouched;
  let isMoved;
  const touchesStart = {};
  let touchesDiff;
  let width;
  let minWidth;
  let maxWidth;
  function transformCSSWidth(v) {
    if (!v) return null;
    if (v.indexOf('%') >= 0 || v.indexOf('vw') >= 0) {
      return parseInt(v, 10) / 100 * app.width;
    }
    const newV = parseInt(v, 10);
    if (Number.isNaN(newV)) return null;
    return newV;
  }
  function isResizable() {
    return view.resizable && $el.hasClass('view-resizable') && $el.hasClass('view-master-detail');
  }
  function handleTouchStart(e) {
    if (!isResizable()) return;
    touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    isMoved = false;
    isTouched = true;
    const $pageMasterEl = $el.children('.page-master');
    minWidth = transformCSSWidth($pageMasterEl.css('min-width'));
    maxWidth = transformCSSWidth($pageMasterEl.css('max-width'));
  }
  function handleTouchMove(e) {
    if (!isTouched) return;
    e.f7PreventSwipePanel = true;
    const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    if (!isMoved) {
      width = $resizeHandlerEl[0].offsetLeft + $resizeHandlerEl[0].offsetWidth;
      $el.addClass('view-resizing');
      $htmlEl.css('cursor', 'col-resize');
    }
    isMoved = true;
    e.preventDefault();
    touchesDiff = pageX - touchesStart.x;
    let newWidth = width + touchesDiff;
    if (minWidth && !Number.isNaN(minWidth)) {
      newWidth = Math.max(newWidth, minWidth);
    }
    if (maxWidth && !Number.isNaN(maxWidth)) {
      newWidth = Math.min(newWidth, maxWidth);
    }
    newWidth = Math.min(Math.max(newWidth, 0), app.width);
    view.resizableWidth = newWidth;
    $htmlEl[0].style.setProperty('--f7-page-master-width', `${newWidth}px`);
    $el.trigger('view:resize', newWidth);
    view.emit('local::resize viewResize', view, newWidth);
  }
  function handleTouchEnd() {
    $('html').css('cursor', '');
    if (!isTouched || !isMoved) {
      isTouched = false;
      isMoved = false;
      return;
    }
    isTouched = false;
    isMoved = false;
    $htmlEl[0].style.setProperty('--f7-page-master-width', `${view.resizableWidth}px`);
    $el.removeClass('view-resizing');
  }
  function handleResize() {
    if (!view.resizableWidth) return;
    minWidth = transformCSSWidth($resizeHandlerEl.css('min-width'));
    maxWidth = transformCSSWidth($resizeHandlerEl.css('max-width'));
    if (minWidth && !Number.isNaN(minWidth) && view.resizableWidth < minWidth) {
      view.resizableWidth = Math.max(view.resizableWidth, minWidth);
    }
    if (maxWidth && !Number.isNaN(maxWidth) && view.resizableWidth > maxWidth) {
      view.resizableWidth = Math.min(view.resizableWidth, maxWidth);
    }
    view.resizableWidth = Math.min(Math.max(view.resizableWidth, 0), app.width);
    $htmlEl[0].style.setProperty('--f7-page-master-width', `${view.resizableWidth}px`);
  }
  $resizeHandlerEl = view.$el.children('.view-resize-handler');
  if (!$resizeHandlerEl.length) {
    view.$el.append('<div class="view-resize-handler"></div>');
    $resizeHandlerEl = view.$el.children('.view-resize-handler');
  }
  view.$resizeHandlerEl = $resizeHandlerEl;
  $el.addClass('view-resizable');

  // Add Events
  const passive = support.passiveListener ? {
    passive: true
  } : false;
  view.$el.on(app.touchEvents.start, '.view-resize-handler', handleTouchStart, passive);
  app.on('touchmove:active', handleTouchMove);
  app.on('touchend:passive', handleTouchEnd);
  app.on('resize', handleResize);
  view.on('beforeOpen', handleResize);
  view.once('viewDestroy', () => {
    $el.removeClass('view-resizable');
    view.$resizeHandlerEl.remove();
    view.$el.off(app.touchEvents.start, '.view-resize-handler', handleTouchStart, passive);
    app.off('touchmove:active', handleTouchMove);
    app.off('touchend:passive', handleTouchEnd);
    app.off('resize', handleResize);
    view.off('beforeOpen', handleResize);
  });
}

let View$1 = class View extends Framework7Class$1 {
  constructor(app, el, viewParams) {
    if (viewParams === void 0) {
      viewParams = {};
    }
    super(viewParams, [app]);
    const view = this;
    const ssr = view.params.routerId;
    const defaults = {
      routes: [],
      routesAdd: []
    };
    if (!ssr) {
      const $el = $(el);
      if (!$el.length) {
        let message = "Framework7: can't create a View instance because ";
        message += typeof el === 'string' ? `the selector "${el}" didn't match any element` : 'el must be an HTMLElement or Dom7 object';
        throw new Error(message);
      }
    }

    // Default View params
    view.params = extend({
      el
    }, defaults, app.params.view, viewParams);

    // Routes
    if (view.params.routes.length > 0) {
      view.routes = view.params.routes;
    } else {
      view.routes = [].concat(app.routes, view.params.routesAdd);
    }

    // View Props
    extend(false, view, {
      app,
      name: view.params.name,
      main: view.params.main,
      history: [],
      scrollHistory: {}
    });

    // Install Modules
    view.useModules();

    // Add to app
    app.views.push(view);
    if (view.main) {
      app.views.main = view;
    }
    if (view.name) {
      app.views[view.name] = view;
    }

    // Index
    view.index = app.views.indexOf(view);

    // View ID
    let viewId;
    if (view.name) {
      viewId = `view_${view.name}`;
    } else if (view.main) {
      viewId = 'view_main';
    } else {
      viewId = `view_${view.index}`;
    }
    view.id = viewId;
    if (!view.params.init) {
      return view;
    }
    // Init View
    if (app.initialized) {
      view.init();
    } else {
      app.on('init', () => {
        view.init();
      });
    }
    return view;
  }
  destroy() {
    let view = this;
    const app = view.app;
    view.$el.trigger('view:beforedestroy');
    view.emit('local::beforeDestroy viewBeforeDestroy', view);
    app.off('resize', view.checkMasterDetailBreakpoint);
    if (view.main) {
      app.views.main = null;
      delete app.views.main;
    } else if (view.name) {
      app.views[view.name] = null;
      delete app.views[view.name];
    }
    view.$el[0].f7View = null;
    delete view.$el[0].f7View;
    app.views.splice(app.views.indexOf(view), 1);

    // Destroy Router
    if (view.params.router && view.router) {
      view.router.destroy();
    }
    view.emit('local::destroy viewDestroy', view);

    // Delete props & methods
    Object.keys(view).forEach(viewProp => {
      view[viewProp] = null;
      delete view[viewProp];
    });
    view = null;
  }
  checkMasterDetailBreakpoint(force) {
    const view = this;
    const app = view.app;
    const wasMasterDetail = view.$el.hasClass('view-master-detail');
    const isMasterDetail = app.width >= view.params.masterDetailBreakpoint && view.$el.children('.page-master').length;
    if (typeof force === 'undefined' && isMasterDetail || force === true) {
      view.$el.addClass('view-master-detail');
      if (!wasMasterDetail) {
        view.emit('local::masterDetailBreakpoint viewMasterDetailBreakpoint', view);
        view.$el.trigger('view:masterDetailBreakpoint');
      }
    } else {
      view.$el.removeClass('view-master-detail');
      if (wasMasterDetail) {
        view.emit('local::masterDetailBreakpoint viewMasterDetailBreakpoint', view);
        view.$el.trigger('view:masterDetailBreakpoint');
      }
    }
  }
  initMasterDetail() {
    const view = this;
    const app = view.app;
    view.checkMasterDetailBreakpoint = view.checkMasterDetailBreakpoint.bind(view);
    view.checkMasterDetailBreakpoint();
    if (view.params.masterDetailResizable) {
      resizableView(view);
    }
    app.on('resize', view.checkMasterDetailBreakpoint);
  }
  mount(viewEl) {
    const view = this;
    const app = view.app;
    const el = view.params.el || viewEl;
    const $el = $(el);

    // Selector
    let selector;
    if (typeof el === 'string') selector = el;else {
      // Supposed to be HTMLElement or Dom7
      selector = ($el.attr('id') ? `#${$el.attr('id')}` : '') + ($el.attr('class') ? `.${$el.attr('class').replace(/ /g, '.').replace('.active', '')}` : '');
    }

    // DynamicNavbar
    let $navbarsEl;
    if (app.theme === 'ios' && view.params.iosDynamicNavbar) {
      $navbarsEl = $el.children('.navbars').eq(0);
      if ($navbarsEl.length === 0) {
        $navbarsEl = $('<div class="navbars"></div>');
      }
    }
    extend(view, {
      $el,
      el: $el[0],
      main: view.main || $el.hasClass('view-main'),
      $navbarsEl,
      navbarsEl: $navbarsEl ? $navbarsEl[0] : undefined,
      selector
    });
    if (view.main) {
      app.views.main = view;
    }

    // Save in DOM
    if ($el && $el[0]) {
      $el[0].f7View = view;
    }
    view.emit('local::mount viewMount', view);
  }
  init(viewEl) {
    const view = this;
    view.mount(viewEl);
    if (view.params.router) {
      if (view.params.masterDetailBreakpoint > 0) {
        view.initMasterDetail();
      }
      if (view.params.initRouterOnTabShow && view.$el.hasClass('tab') && !view.$el.hasClass('tab-active')) {
        view.$el.once('tab:show', () => {
          view.router.init();
        });
      } else {
        view.router.init();
      }
      view.$el.trigger('view:init');
      view.emit('local::init viewInit', view);
    }
  }
};

// Use Router
View$1.use(RouterModule);
var View$2 = View$1;

function initClicks(app) {
  function handleClicks(e) {
    const window = getWindow();
    const $clickedEl = $(e.target);
    const $clickedLinkEl = $clickedEl.closest('a');
    const isLink = $clickedLinkEl.length > 0;
    const url = isLink && $clickedLinkEl.attr('href');

    // Check if link is external
    if (isLink) {
      if ($clickedLinkEl.is(app.params.clicks.externalLinks) ||
      // eslint-disable-next-line
      url && url.indexOf('javascript:') >= 0) {
        const target = $clickedLinkEl.attr('target');
        if (url && window.cordova && window.cordova.InAppBrowser && (target === '_system' || target === '_blank')) {
          e.preventDefault();
          window.cordova.InAppBrowser.open(url, target);
        } else if (url && window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Browser && (target === '_system' || target === '_blank')) {
          e.preventDefault();
          window.Capacitor.Plugins.Browser.open({
            url
          });
        }
        return;
      }
    }

    // Modules Clicks
    Object.keys(app.modules).forEach(moduleName => {
      const moduleClicks = app.modules[moduleName].clicks;
      if (!moduleClicks) return;
      if (e.preventF7Router) return;
      Object.keys(moduleClicks).forEach(clickSelector => {
        const matchingClickedElement = $clickedEl.closest(clickSelector).eq(0);
        if (matchingClickedElement.length > 0) {
          moduleClicks[clickSelector].call(app, matchingClickedElement, matchingClickedElement.dataset(), e);
        }
      });
    });

    // Load Page
    let clickedLinkData = {};
    if (isLink) {
      e.preventDefault();
      clickedLinkData = $clickedLinkEl.dataset();
    }
    clickedLinkData.clickedEl = $clickedLinkEl[0];

    // Prevent Router
    if (e.preventF7Router) return;
    if ($clickedLinkEl.hasClass('prevent-router') || $clickedLinkEl.hasClass('router-prevent')) return;
    const validUrl = url && url.length > 0 && url[0] !== '#';
    if (validUrl || $clickedLinkEl.hasClass('back')) {
      let view;
      if (clickedLinkData.view && clickedLinkData.view === 'current') {
        view = app.views.current;
      } else if (clickedLinkData.view) {
        view = $(clickedLinkData.view)[0].f7View;
      } else {
        view = $clickedEl.parents('.view')[0] && $clickedEl.parents('.view')[0].f7View;
        if (!$clickedLinkEl.hasClass('back') && view && view.params.linksView) {
          if (typeof view.params.linksView === 'string') view = $(view.params.linksView)[0].f7View;else if (view.params.linksView instanceof View$2) view = view.params.linksView;
        }
      }
      if (!view) {
        if (app.views.main) view = app.views.main;
      }
      if (!view || !view.router) return;
      if ($clickedLinkEl[0].f7RouteProps) {
        clickedLinkData.props = $clickedLinkEl[0].f7RouteProps;
      }
      if ($clickedLinkEl.hasClass('back')) view.router.back(url, clickedLinkData);else view.router.navigate(url, clickedLinkData);
    }
  }
  app.on('click', handleClicks);
}
var ClicksModule = {
  name: 'clicks',
  params: {
    clicks: {
      // External Links
      externalLinks: '.external'
    }
  },
  on: {
    init() {
      const app = this;
      initClicks(app);
    }
  }
};

var RouterComponentLoaderModule = {
  name: 'routerComponentLoader',
  proto: {
    openIn(router, url, options) {
      const navigateOptions = {
        url,
        route: {
          path: url,
          options: {
            ...options,
            openIn: undefined
          }
        }
      };
      const params = {
        ...options
      };
      if (options.openIn === 'popup') {
        params.content = `<div class="popup popup-router-open-in" data-url="${url}"><div class="view view-init" data-links-view="${router.view.selector}" data-url="${url}" data-ignore-open-in="true"></div></div>`;
        navigateOptions.route.popup = params;
      }
      if (options.openIn === 'loginScreen') {
        params.content = `<div class="login-screen login-screen-router-open-in" data-url="${url}"><div class="view view-init" data-links-view="${router.view.selector}" data-url="${url}" data-ignore-open-in="true"></div></div>`;
        navigateOptions.route.loginScreen = params;
      }
      if (options.openIn === 'sheet') {
        params.content = `<div class="sheet-modal sheet-modal-router-open-in" data-url="${url}"><div class="sheet-modal-inner"><div class="view view-init" data-links-view="${router.view.selector}" data-url="${url}" data-ignore-open-in="true"></div></div></div>`;
        navigateOptions.route.sheet = params;
      }
      if (options.openIn === 'popover') {
        params.targetEl = options.clickedEl || options.targetEl;
        params.content = `<div class="popover popover-router-open-in" data-url="${url}"><div class="popover-inner"><div class="view view-init" data-links-view="${router.view.selector}" data-url="${url}" data-ignore-open-in="true"></div></div></div>`;
        navigateOptions.route.popover = params;
      }
      if (options.openIn.indexOf('panel') >= 0) {
        const parts = options.openIn.split(':');
        const side = parts[1] || 'left';
        const effect = parts[2] || 'cover';
        params.targetEl = options.clickedEl || options.targetEl;
        params.content = `<div class="panel panel-router-open-in panel-${side} panel-${effect}" data-url="${url}"><div class="view view-init" data-links-view="${router.view.selector}" data-url="${url}" data-ignore-open-in="true"></div></div>`;
        navigateOptions.route.panel = params;
      }
      return router.navigate(navigateOptions);
    },
    componentLoader(component, componentUrl, options, resolve, reject) {
      if (options === void 0) {
        options = {};
      }
      const router = this;
      const {
        app
      } = router;
      const url = typeof component === 'string' ? component : componentUrl;
      const compiledUrl = router.replaceRequestUrlParams(url, options);
      function compile(componentFunction) {
        let context = options.context || {};
        if (typeof context === 'function') context = context.call(router);else if (typeof context === 'string') {
          try {
            context = JSON.parse(context);
          } catch (err) {
            reject(err);
            throw err;
          }
        }
        const componentContext = merge({}, context, {
          f7route: options.route,
          f7router: router
        });
        const componentProps = merge(options.route ? options.route.params || {} : {}, options.props || {}, options.routeProps || {});
        let componentEl;
        let componentRoot;
        if (options.componentOptions && options.componentOptions.el) {
          componentEl = options.componentOptions.el;
        }
        if (options.componentOptions && options.componentOptions.root) {
          componentRoot = options.componentOptions.root;
        }
        app.component.create(componentFunction, componentProps, {
          context: componentContext,
          el: componentEl,
          root: componentRoot
        }).then(createdComponent => {
          resolve(createdComponent.el);
        }).catch(err => {
          reject(err);
          throw new Error(err);
        });
      }
      let cachedComponent;
      if (compiledUrl && router.params.componentCache) {
        router.cache.components.forEach(cached => {
          if (cached.url === compiledUrl) cachedComponent = cached.component;
        });
      }
      if (compiledUrl && cachedComponent) {
        compile(cachedComponent);
      } else if (compiledUrl && !cachedComponent) {
        // Load via XHR
        if (router.xhrAbortController) {
          router.xhrAbortController.abort();
          router.xhrAbortController = false;
        }
        router.xhrRequest(url, options).then(loadedComponent => {
          const parsedComponent = app.component.parse(loadedComponent);
          if (router.params.componentCache) {
            router.cache.components.push({
              url: compiledUrl,
              component: parsedComponent
            });
          }
          compile(parsedComponent);
        }).catch(err => {
          reject();
          throw err;
        });
      } else {
        compile(component);
      }
    },
    modalComponentLoader(_temp) {
      let {
        component,
        componentUrl,
        options,
        resolve,
        reject
      } = _temp === void 0 ? {} : _temp;
      const router = this;
      router.componentLoader(component, componentUrl, options, el => {
        resolve(el);
      }, reject);
    },
    tabComponentLoader(_temp2) {
      let {
        component,
        componentUrl,
        options,
        resolve,
        reject
      } = _temp2 === void 0 ? {} : _temp2;
      const router = this;
      router.componentLoader(component, componentUrl, options, el => {
        resolve(el);
      }, reject);
    },
    pageComponentLoader(_temp3) {
      let {
        component,
        componentUrl,
        options,
        resolve,
        reject
      } = _temp3 === void 0 ? {} : _temp3;
      const router = this;
      router.componentLoader(component, componentUrl, options, function (el, newOptions) {
        if (newOptions === void 0) {
          newOptions = {};
        }
        resolve(el, newOptions);
      }, reject);
    }
  }
};

const ignoreChildren$1 = [false, null, '', undefined];
const h$1 = function (type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  return {
    type,
    props: props || {},
    children: flattenArray(children.filter(child => ignoreChildren$1.indexOf(child) < 0))
  };
};
const $h = htm.bind(h$1);
var $h$1 = $h;

function vnode(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {
    sel: sel,
    data: data,
    children: children,
    text: text,
    elm: elm,
    key: key
  };
}

var array = Array.isArray;
function primitive(s) {
  return typeof s === 'string' || typeof s === 'number';
}

function addNS(data, children, sel) {
  data.ns = 'http://www.w3.org/2000/svg';
  if (sel !== 'foreignObject' && children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      var childData = children[i].data;
      if (childData !== undefined) {
        addNS(childData, children[i].children, children[i].sel);
      }
    }
  }
}
function h(sel, b, c) {
  var data = {},
    children,
    text,
    i;
  if (c !== undefined) {
    data = b;
    if (array(c)) {
      children = c;
    } else if (primitive(c)) {
      text = c;
    } else if (c && c.sel) {
      children = [c];
    }
  } else if (b !== undefined) {
    if (array(b)) {
      children = b;
    } else if (primitive(b)) {
      text = b;
    } else if (b && b.sel) {
      children = [b];
    } else {
      data = b;
    }
  }
  if (array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined);
    }
  }
  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' && (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
    addNS(data, children, sel);
  }
  return vnode(sel, data, children, text, undefined);
}

var customComponents = {};

/* eslint no-use-before-define: "off" */
const SELF_CLOSING = 'area base br col command embed hr img input keygen link menuitem meta param source track wbr'.split(' ');
const PROPS_ATTRS = 'hidden checked disabled readonly selected autofocus autoplay required multiple value indeterminate routeProps innerHTML'.split(' ');
const BOOLEAN_PROPS = 'hidden checked disabled readonly selected autofocus autoplay required multiple readOnly indeterminate'.split(' ');
const getTagName = treeNode => {
  return typeof treeNode.type === 'function' ? treeNode.type.name || 'CustomComponent' : treeNode.type;
};
const toCamelCase = name => {
  return name.split('-').map((word, index) => {
    if (index === 0) return word.toLowerCase();
    return word[0].toUpperCase() + word.substr(1);
  }).join('');
};
const propsFromAttrs = function () {
  const context = {};
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  args.forEach(function (obj) {
    if (obj === void 0) {
      obj = {};
    }
    Object.keys(obj).forEach(key => {
      context[toCamelCase(key)] = obj[key];
    });
  });
  return context;
};
const createCustomComponent = _ref => {
  let {
    f7,
    treeNode,
    vnode,
    data
  } = _ref;
  const component = typeof treeNode.type === 'function' ? treeNode.type : customComponents[treeNode.type];
  f7.component.create(component, propsFromAttrs(data.attrs || {}, data.props || {}), {
    el: vnode.elm,
    children: treeNode.children
  }).then(c => {
    if (vnode.data && vnode.data.on && c && c.$el) {
      Object.keys(vnode.data.on).forEach(eventName => {
        c.$el.on(eventName, vnode.data.on[eventName]);
      });
    }
    // eslint-disable-next-line
    vnode.elm.__component__ = c;
  });
};
const updateCustomComponent = vnode => {
  // eslint-disable-next-line
  const component = vnode && vnode.elm && vnode.elm.__component__;
  if (!component) return;
  const newProps = propsFromAttrs(vnode.data.attrs || {}, vnode.data.props || {});
  component.children = vnode.data.treeNode.children;
  Object.assign(component.props, newProps);
  component.update();
};
const destroyCustomComponent = vnode => {
  // eslint-disable-next-line
  const component = vnode && vnode.elm && vnode.elm.__component__;
  if (component) {
    const {
      el,
      $el
    } = component;
    if (vnode.data && vnode.data.on && $el) {
      Object.keys(vnode.data.on).forEach(eventName => {
        $el.off(eventName, vnode.data.on[eventName]);
      });
    }
    if (component.destroy) component.destroy();
    if (el && el.parentNode) el.parentNode.removeChild(el);
    delete vnode.elm.__component__; // eslint-disable-line
  }
};

const isCustomComponent = treeNodeType => {
  return typeof treeNodeType === 'function' || treeNodeType && treeNodeType.indexOf('-') > 0 && customComponents[treeNodeType];
};
function getHooks(treeNode, data, f7, initial, isRoot) {
  const hooks = {};
  const insert = [];
  const destroy = [];
  const update = [];
  const postpatch = [];
  let isFakeElement = false;
  let tagName = getTagName(treeNode);
  if (data && data.attrs && data.attrs.component) {
    tagName = data.attrs.component;
    delete data.attrs.component;
    isFakeElement = true;
  }
  const isCustom = isCustomComponent(treeNode.type);
  if (isCustom) {
    insert.push(vnode => {
      if (vnode.sel !== tagName && !isFakeElement) return;
      createCustomComponent({
        f7,
        treeNode,
        vnode,
        data
      });
    });
    destroy.push(vnode => {
      destroyCustomComponent(vnode);
    });
    update.push((oldVnode, vnode) => {
      updateCustomComponent(vnode);
    });
  }
  if (!isCustom) {
    if (!data || !data.attrs || !data.attrs.class) return hooks;
    const classNames = data.attrs.class;
    classNames.split(' ').forEach(className => {
      if (!initial) {
        insert.push(...f7.getVnodeHooks('insert', className));
      }
      destroy.push(...f7.getVnodeHooks('destroy', className));
      update.push(...f7.getVnodeHooks('update', className));
      postpatch.push(...f7.getVnodeHooks('postpatch', className));
    });
  }
  if (isRoot && !initial) {
    postpatch.push((oldVnode, vnode) => {
      const vn = vnode || oldVnode;
      if (!vn) return;
      if (vn.data && vn.data.component) {
        vn.data.component.hook('onUpdated');
      }
    });
  }
  if (insert.length === 0 && destroy.length === 0 && update.length === 0 && postpatch.length === 0) {
    return hooks;
  }
  if (insert.length) {
    hooks.insert = vnode => {
      insert.forEach(f => f(vnode));
    };
  }
  if (destroy.length) {
    hooks.destroy = vnode => {
      destroy.forEach(f => f(vnode));
    };
  }
  if (update.length) {
    hooks.update = (oldVnode, vnode) => {
      update.forEach(f => f(oldVnode, vnode));
    };
  }
  if (postpatch.length) {
    hooks.postpatch = (oldVnode, vnode) => {
      postpatch.forEach(f => f(oldVnode, vnode));
    };
  }
  return hooks;
}
const getEventHandler = function (eventHandler, _temp) {
  let {
    stop,
    prevent,
    once
  } = _temp === void 0 ? {} : _temp;
  let fired = false;
  function handler() {
    const e = arguments.length <= 0 ? undefined : arguments[0];
    if (once && fired) return;
    if (stop) e.stopPropagation();
    if (prevent) e.preventDefault();
    fired = true;
    eventHandler(...arguments);
  }
  return handler;
};
const getData = (treeNode, component, f7, initial, isRoot) => {
  const data = {
    component,
    treeNode
  };
  const tagName = getTagName(treeNode);
  Object.keys(treeNode.props).forEach(attrName => {
    const attrValue = treeNode.props[attrName];
    if (typeof attrValue === 'undefined') return;
    if (PROPS_ATTRS.indexOf(attrName) >= 0) {
      // Props
      if (!data.props) data.props = {};
      if (attrName === 'readonly') {
        // eslint-disable-next-line
        attrName = 'readOnly';
      }
      if (attrName === 'routeProps') {
        // eslint-disable-next-line
        attrName = 'f7RouteProps';
      }
      if (tagName === 'option' && attrName === 'value') {
        if (!data.attrs) data.attrs = {};
        data.attrs.value = attrValue;
      }
      if (BOOLEAN_PROPS.indexOf(attrName) >= 0) {
        // eslint-disable-next-line
        data.props[attrName] = attrValue === false ? false : true;
      } else {
        data.props[attrName] = attrValue;
      }
    } else if (attrName === 'key') {
      // Key
      data.key = attrValue;
    } else if (attrName.indexOf('@') === 0 || attrName.indexOf('on') === 0 && attrName.length > 2) {
      // Events
      if (!data.on) data.on = {};
      let eventName = attrName.indexOf('@') === 0 ? attrName.substr(1) : eventNameToColonCase(attrName.substr(2));
      let stop = false;
      let prevent = false;
      let once = false;
      if (eventName.indexOf('.') >= 0) {
        eventName.split('.').forEach((eventNamePart, eventNameIndex) => {
          if (eventNameIndex === 0) eventName = eventNamePart;else {
            if (eventNamePart === 'stop') stop = true;
            if (eventNamePart === 'prevent') prevent = true;
            if (eventNamePart === 'once') once = true;
          }
        });
      }
      data.on[eventName] = getEventHandler(attrValue, {
        stop,
        prevent,
        once
      });
    } else if (attrName === 'style') {
      // Style
      if (typeof attrValue !== 'string') {
        data.style = attrValue;
      } else {
        if (!data.attrs) data.attrs = {};
        data.attrs.style = attrValue;
      }
    } else {
      // Rest of attribures
      if (!data.attrs) data.attrs = {};
      data.attrs[attrName] = attrValue;

      // ID -> Key
      if (attrName === 'id' && !data.key && !isRoot) {
        data.key = attrValue;
      }
    }
  });
  const hooks = getHooks(treeNode, data, f7, initial, isRoot);
  hooks.prepatch = (oldVnode, vnode) => {
    if (!oldVnode || !vnode) return;
    if (oldVnode && oldVnode.data && oldVnode.data.props) {
      Object.keys(oldVnode.data.props).forEach(key => {
        if (BOOLEAN_PROPS.indexOf(key) < 0) return;
        if (!vnode.data) vnode.data = {};
        if (!vnode.data.props) vnode.data.props = {};
        if (oldVnode.data.props[key] === true && !(key in vnode.data.props)) {
          vnode.data.props[key] = false;
        }
      });
    }
  };
  data.hook = hooks;
  return data;
};
const getChildren = (treeNode, component, f7, initial) => {
  if (treeNode && treeNode.type && SELF_CLOSING.indexOf(treeNode.type) >= 0) {
    return [];
  }
  const children = [];
  const nodes = treeNode.children;
  for (let i = 0; i < nodes.length; i += 1) {
    const childNode = nodes[i];
    const child = treeNodeToVNode(childNode, component, f7, initial, false);
    if (Array.isArray(child)) {
      children.push(...child);
    } else if (child) {
      children.push(child);
    }
  }
  return children;
};
const getSlots = (treeNode, component, f7, initial) => {
  const slotName = treeNode.props.name || 'default';
  const slotNodes = (component.children || []).filter(childTreeNode => {
    let childSlotName = 'default';
    if (childTreeNode.props) {
      childSlotName = childTreeNode.props.slot || 'default';
    }
    return childSlotName === slotName;
  });
  if (slotNodes.length === 0) {
    return getChildren(treeNode, component, f7, initial);
  }
  return slotNodes.map(subTreeNode => treeNodeToVNode(subTreeNode, component, f7, initial));
};
const isTreeNode = treeNode => {
  return isObject(treeNode) && 'props' in treeNode && 'type' in treeNode && 'children' in treeNode;
};
const treeNodeToVNode = (treeNode, component, f7, initial, isRoot) => {
  if (!isTreeNode(treeNode)) {
    return String(treeNode);
  }
  if (treeNode.type === 'slot') {
    return getSlots(treeNode, component, f7, initial);
  }
  const data = getData(treeNode, component, f7, initial, isRoot);
  const children = isCustomComponent(treeNode.type) ? [] : getChildren(treeNode, component, f7, initial);
  return h(getTagName(treeNode), data, children);
};
function vdom(tree, component, initial) {
  if (tree === void 0) {
    tree = {};
  }
  return treeNodeToVNode(tree, component, component.f7, initial, true);
}

function createElement(tagName) {
  return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
  return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
  return document.createTextNode(text);
}
function createComment(text) {
  return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
  if (referenceNode && referenceNode.parentNode !== parentNode) {
    if (referenceNode.__component__) referenceNode = referenceNode.__component__.el;
  }
  parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  if (!node) return;
  node.removeChild(child);
}
function appendChild(node, child) {
  node.appendChild(child);
}
function parentNode(node) {
  return node.parentNode;
}
function nextSibling(node) {
  return node.nextSibling;
}
function tagName(elm) {
  return elm.tagName;
}
function setTextContent(node, text) {
  node.textContent = text;
}
function getTextContent(node) {
  return node.textContent;
}
function isElement(node) {
  return node.nodeType === 1;
}
function isText(node) {
  return node.nodeType === 3;
}
function isComment(node) {
  return node.nodeType === 8;
}
var htmlDomApi = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  getTextContent: getTextContent,
  isElement: isElement,
  isText: isText,
  isComment: isComment
};
var htmlDomApi$1 = htmlDomApi;

function isUndef(s) {
  return s === undefined;
}
function isDef(s) {
  return s !== undefined;
}
var emptyNode = vnode('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
  return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i,
    map = {},
    key,
    ch;
  for (i = beginIdx; i <= endIdx; ++i) {
    ch = children[i];
    if (ch != null) {
      key = ch.key;
      if (key !== undefined) map[key] = i;
    }
  }
  return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
function init(modules, domApi) {
  var i,
    j,
    cbs = {};
  var api = domApi !== undefined ? domApi : htmlDomApi$1;
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      var hook = modules[j][hooks[i]];
      if (hook !== undefined) {
        cbs[hooks[i]].push(hook);
      }
    }
  }
  function emptyNodeAt(elm) {
    var id = elm.id ? '#' + elm.id : '';
    var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
    return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
  }
  function createRmCb(childElm, listeners) {
    return function rmCb() {
      if (--listeners === 0) {
        var parent_1 = api.parentNode(childElm);
        api.removeChild(parent_1, childElm);
      }
    };
  }
  function createElm(vnode, insertedVnodeQueue) {
    var i,
      data = vnode.data;
    if (data !== undefined) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode);
        data = vnode.data;
      }
    }
    var children = vnode.children,
      sel = vnode.sel;
    if (sel === '!') {
      if (isUndef(vnode.text)) {
        vnode.text = '';
      }
      vnode.elm = api.createComment(vnode.text);
    } else if (sel !== undefined) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag) : api.createElement(tag);
      if (hash < dot) elm.setAttribute('id', sel.slice(hash + 1, dot));
      if (dotIdx > 0) elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      if (array(children)) {
        for (i = 0; i < children.length; ++i) {
          var ch = children[i];
          if (ch != null) {
            api.appendChild(elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else if (primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      vnode.elm = api.createTextNode(vnode.text);
    }
    return vnode.elm;
  }
  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (ch != null) {
        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
      }
    }
  }
  function invokeDestroyHook(vnode) {
    var i,
      j,
      data = vnode.data;
    if (data !== undefined) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (vnode.children !== undefined) {
        for (j = 0; j < vnode.children.length; ++j) {
          i = vnode.children[j];
          if (i != null && typeof i !== "string") {
            invokeDestroyHook(i);
          }
        }
      }
    }
  }
  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i_1 = void 0,
        listeners = void 0,
        rm = void 0,
        ch = vnodes[startIdx];
      if (ch != null) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i_1 = 0; i_1 < cbs.remove.length; ++i_1) cbs.remove[i_1](ch, rm);
          if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
            i_1(ch, rm);
          } else {
            rm();
          }
        } else {
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }
  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0,
      newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx;
    var idxInOld;
    var elmToMove;
    var before;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx];
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) {
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
      if (oldStartIdx > oldEndIdx) {
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }
  }
  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (oldVnode === vnode) return;
    if (vnode.data !== undefined) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      api.setTextContent(elm, vnode.text);
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }
  return function patch(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
    if (!isVnode(oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    }
    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);
      createElm(vnode, insertedVnodeQueue);
      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var colonChar = 58;
var xChar = 120;
function updateAttrs(oldVnode, vnode) {
  var key,
    elm = vnode.elm,
    oldAttrs = oldVnode.data.attrs,
    attrs = vnode.data.attrs;
  if (!oldAttrs && !attrs) return;
  if (oldAttrs === attrs) return;
  oldAttrs = oldAttrs || {};
  attrs = attrs || {};
  // update modified attributes, add new attributes
  for (key in attrs) {
    var cur = attrs[key];
    var old = oldAttrs[key];
    if (old !== cur) {
      if (cur === true) {
        elm.setAttribute(key, "");
      } else if (cur === false) {
        elm.removeAttribute(key);
      } else {
        if (key.charCodeAt(0) !== xChar) {
          elm.setAttribute(key, cur);
        } else if (key.charCodeAt(3) === colonChar) {
          // Assume xml namespace
          elm.setAttributeNS(xmlNS, key, cur);
        } else if (key.charCodeAt(5) === colonChar) {
          // Assume xlink namespace
          elm.setAttributeNS(xlinkNS, key, cur);
        } else {
          elm.setAttribute(key, cur);
        }
      }
    }
  }
  // remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}
var attributesModule = {
  create: updateAttrs,
  update: updateAttrs
};
var attributesModule$1 = attributesModule;

function updateProps(oldVnode, vnode) {
  var key,
    cur,
    old,
    elm = vnode.elm,
    oldProps = oldVnode.data.props,
    props = vnode.data.props;
  if (!oldProps && !props) return;
  if (oldProps === props) return;
  oldProps = oldProps || {};
  props = props || {};
  for (key in oldProps) {
    if (!props[key]) {
      delete elm[key];
    }
  }
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}
var propsModule = {
  create: updateProps,
  update: updateProps
};
var propsModule$1 = propsModule;

var raf = typeof window !== 'undefined' && window.requestAnimationFrame || setTimeout;
var nextFrame = function (fn) {
  raf(function () {
    raf(fn);
  });
};
function setNextFrame(obj, prop, val) {
  nextFrame(function () {
    obj[prop] = val;
  });
}
function updateStyle(oldVnode, vnode) {
  var cur,
    name,
    elm = vnode.elm,
    oldStyle = oldVnode.data.style,
    style = vnode.data.style;
  if (!oldStyle && !style) return;
  if (oldStyle === style) return;
  oldStyle = oldStyle || {};
  style = style || {};
  var oldHasDel = ('delayed' in oldStyle);
  for (name in oldStyle) {
    if (!style[name]) {
      if (name[0] === '-' && name[1] === '-') {
        elm.style.removeProperty(name);
      } else {
        elm.style[name] = '';
      }
    }
  }
  for (name in style) {
    cur = style[name];
    if (name === 'delayed' && style.delayed) {
      for (var name2 in style.delayed) {
        cur = style.delayed[name2];
        if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
          setNextFrame(elm.style, name2, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      if (name[0] === '-' && name[1] === '-') {
        elm.style.setProperty(name, cur);
      } else {
        elm.style[name] = cur;
      }
    }
  }
}
function applyDestroyStyle(vnode) {
  var style,
    name,
    elm = vnode.elm,
    s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}
function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name,
    elm = vnode.elm,
    i = 0,
    compStyle,
    style = s.remove,
    amount = 0,
    applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if (applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function (ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}
var styleModule = {
  create: updateStyle,
  update: updateStyle,
  destroy: applyDestroyStyle,
  remove: applyRemoveStyle
};
var styleModule$1 = styleModule;

function invokeHandler(handler, event, args) {
  if (typeof handler === 'function') {
    // call function handler
    handler(event, ...args);
  }
}
function handleEvent(event, args, vnode) {
  const name = event.type;
  const on = vnode.data.on;
  // call event handler(s) if exists
  if (on && on[name]) {
    invokeHandler(on[name], event, args);
  }
}
function createListener() {
  return function handler(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    handleEvent(event, args, handler.vnode);
  };
}
function updateEvents(oldVnode, vnode) {
  const oldOn = oldVnode.data.on;
  const oldListener = oldVnode.listener;
  const oldElm = oldVnode.elm;
  const on = vnode && vnode.data.on;
  const elm = vnode && vnode.elm;
  // optimization for reused immutable handlers
  if (oldOn === on) {
    return;
  }
  // remove existing listeners which no longer used
  if (oldOn && oldListener) {
    // if element changed or deleted we remove all existing listeners unconditionally
    if (!on) {
      Object.keys(oldOn).forEach(name => {
        $(oldElm).off(name, oldListener);
      });
    } else {
      Object.keys(oldOn).forEach(name => {
        if (!on[name]) {
          $(oldElm).off(name, oldListener);
        }
      });
    }
  }
  // add new listeners which has not already attached
  if (on) {
    // reuse existing listener or create new
    const listener = oldVnode.listener || createListener();
    vnode.listener = listener;
    // update vnode for listener
    listener.vnode = vnode;
    // if element changed or added we add all needed listeners unconditionally
    if (!oldOn) {
      Object.keys(on).forEach(name => {
        $(elm).on(name, listener);
      });
    } else {
      Object.keys(on).forEach(name => {
        if (!oldOn[name]) {
          $(elm).on(name, listener);
        }
      });
    }
  }
}
var eventListenersModule = {
  create: updateEvents,
  update: updateEvents,
  destroy: updateEvents
};

/* eslint import/no-named-as-default: off */
const patch = init([attributesModule$1, propsModule$1, styleModule$1, eventListenersModule]);
var patch$1 = patch;

const ignoreChildren = [false, null, '', undefined];
const $jsx = function (type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  const flatChildren = flattenArray((children || []).filter(child => ignoreChildren.indexOf(child) < 0));
  if (type === 'Fragment') {
    return flatChildren;
  }
  return {
    type,
    props: props || {},
    children: flatChildren
  };
};
var $jsx$1 = $jsx;

/* eslint no-underscore-dangle: "off" */
class Component {
  constructor(app, component, props, _temp) {
    if (props === void 0) {
      props = {};
    }
    let {
      el,
      context,
      children
    } = _temp === void 0 ? {} : _temp;
    const document = getDocument();
    merge(this, {
      f7: app,
      props: props || {},
      context: context || {},
      id: component.id || id(),
      children: children || [],
      theme: {
        ios: app.theme === 'ios',
        md: app.theme === 'md',
        aurora: app.theme === 'aurora'
      },
      style: component.style,
      __updateQueue: [],
      __eventHandlers: [],
      __onceEventHandlers: [],
      __onBeforeMount: [],
      __onMounted: [],
      __onBeforeUpdate: [],
      __onUpdated: [],
      __onBeforeUnmount: [],
      __onUnmounted: []
    });
    const createComponent = () => {
      return component(this.props, this.getComponentContext(true));
    };
    const getRenderFuncion = componentResult => new Promise((resolve, reject) => {
      if (typeof componentResult === 'function') {
        resolve(componentResult);
      } else if (componentResult instanceof Promise) {
        componentResult.then(render => {
          resolve(render);
        }).catch(err => {
          reject(err);
        });
      } else {
        reject(new Error('Framework7: Component render function is not a "function" type. Didn\'t you forget to "return $render"?'));
      }
    });
    return new Promise((resolve, reject) => {
      const componentResult = createComponent();
      getRenderFuncion(componentResult).then(render => {
        this.renderFunction = render;
        const tree = this.render();
        if (el) {
          this.vnode = vdom(tree, this, true);
          if (this.style) {
            this.styleEl = document.createElement('style');
            this.styleEl.innerHTML = this.style;
          }
          this.el = el;
          patch$1(this.el, this.vnode);
          this.el = this.vnode.elm;
          this.$el = $(this.el);
          this.attachEvents();
          this.el.f7Component = this;
          this.mount();
          resolve(this);
          return;
        }
        // Make Dom
        if (tree) {
          this.vnode = vdom(tree, this, true);
          this.el = document.createElement(this.vnode.sel || 'div');
          patch$1(this.el, this.vnode);
          this.$el = $(this.el);
        }
        if (this.style) {
          this.styleEl = document.createElement('style');
          this.styleEl.innerHTML = this.style;
        }
        this.attachEvents();
        if (this.el) {
          this.el.f7Component = this;
        }
        resolve(this);
      }).catch(err => {
        reject(err);
      });
    });
  }
  on(eventName, handler) {
    if (!this.__eventHandlers) return;
    this.__eventHandlers.push({
      eventName,
      handler
    });
  }
  once(eventName, handler) {
    if (!this.__eventHandlers) return;
    this.__onceEventHandlers.push({
      eventName,
      handler
    });
  }
  getComponentRef() {
    const self = this;
    return initialValue => {
      let value = initialValue;
      const obj = {};
      Object.defineProperty(obj, 'value', {
        get() {
          return value;
        },
        set(v) {
          value = v;
          self.update();
        }
      });
      return obj;
    };
  }
  getComponentStore() {
    const {
      state,
      _gettersPlain,
      dispatch
    } = this.f7.store;
    const $store = {
      state,
      dispatch
    };
    $store.getters = new Proxy(_gettersPlain, {
      get: (target, prop) => {
        const obj = target[prop];
        const callback = v => {
          obj.value = v;
          this.update();
        };
        obj.onUpdated(callback);
        return obj;
      }
    });
    return $store;
  }
  getComponentContext(includeHooks) {
    const ctx = {
      $f7route: this.context.f7route,
      $f7router: this.context.f7router,
      $h: $h$1,
      $,
      $id: this.id,
      $f7: this.f7,
      $f7ready: this.f7ready.bind(this),
      $theme: this.theme,
      $tick: this.tick.bind(this),
      $update: this.update.bind(this),
      $emit: this.emit.bind(this),
      $store: this.getComponentStore(),
      $ref: this.getComponentRef(),
      $el: {}
    };
    Object.defineProperty(ctx.$el, 'value', {
      get: () => {
        return this.$el;
      }
    });
    if (includeHooks) Object.assign(ctx, {
      $on: this.on.bind(this),
      $once: this.once.bind(this),
      $onBeforeMount: handler => this.__onBeforeMount.push(handler),
      $onMounted: handler => this.__onMounted.push(handler),
      $onBeforeUpdate: handler => this.__onBeforeUpdate.push(handler),
      $onUpdated: handler => this.__onUpdated.push(handler),
      $onBeforeUnmount: handler => this.__onBeforeUnmount.push(handler),
      $onUnmounted: handler => this.__onUnmounted.push(handler)
    });
    return ctx;
  }
  render() {
    return this.renderFunction(this.getComponentContext());
  }
  emit(name, data) {
    if (!this.el) return;
    this.$el.trigger(name, data);
  }
  attachEvents() {
    const {
      $el
    } = this;
    if (!this.__eventHandlers) return;
    this.__eventHandlers.forEach(_ref => {
      let {
        eventName,
        handler
      } = _ref;
      $el.on(eventNameToColonCase(eventName), handler);
    });
    this.__onceEventHandlers.forEach(_ref2 => {
      let {
        eventName,
        handler
      } = _ref2;
      $el.once(eventNameToColonCase(eventName), handler);
    });
  }
  detachEvents() {
    const {
      $el
    } = this;
    if (!this.__eventHandlers) return;
    this.__eventHandlers.forEach(_ref3 => {
      let {
        eventName,
        handler
      } = _ref3;
      $el.on(eventNameToColonCase(eventName), handler);
    });
    this.__onceEventHandlers.forEach(_ref4 => {
      let {
        eventName,
        handler
      } = _ref4;
      $el.once(eventNameToColonCase(eventName), handler);
    });
  }
  startUpdateQueue() {
    const window = getWindow();
    if (this.__requestAnimationFrameId) return;
    const update = () => {
      this.hook('onBeforeUpdate');
      const tree = this.render();

      // Make Dom
      if (tree) {
        const newVNode = vdom(tree, this, false);
        this.vnode = patch$1(this.vnode, newVNode);
      }
    };
    this.__requestAnimationFrameId = window.requestAnimationFrame(() => {
      if (this.__updateIsPending) update();
      let resolvers = [...this.__updateQueue];
      this.__updateQueue = [];
      this.__updateIsPending = false;
      window.cancelAnimationFrame(this.__requestAnimationFrameId);
      delete this.__requestAnimationFrameId;
      delete this.__updateIsPending;
      resolvers.forEach(resolver => resolver());
      resolvers = [];
    });
  }
  tick(callback) {
    return new Promise(resolve => {
      function resolver() {
        resolve();
        if (callback) callback();
      }
      this.__updateQueue.push(resolver);
      this.startUpdateQueue();
    });
  }
  update(callback) {
    if (this.__destroyed) return new Promise(() => {});
    return new Promise(resolve => {
      const resolver = () => {
        resolve();
        if (callback) callback();
      };
      this.__updateIsPending = true;
      this.__updateQueue.push(resolver);
      this.startUpdateQueue();
    });
  }
  setState(callback) {
    return this.update(callback);
  }
  f7ready(callback) {
    if (this.f7.initialized) {
      callback(this.f7);
      return;
    }
    this.f7.once('init', () => {
      callback(this.f7);
    });
  }
  mount(mountMethod) {
    this.hook('onBeforeMount', this.$el);
    if (this.styleEl) $('head').append(this.styleEl);
    if (mountMethod) mountMethod(this.el);
    this.hook('onMounted', this.$el);
  }
  destroy() {
    if (this.__destroyed) return;
    const window = getWindow();
    this.hook('onBeforeUnmount');
    if (this.styleEl) $(this.styleEl).remove();
    this.detachEvents();
    this.hook('onUnmounted');
    // Delete component instance
    if (this.el && this.el.f7Component) {
      this.el.f7Component = null;
      delete this.el.f7Component;
    }
    // Patch with empty node
    if (this.vnode) {
      this.vnode = patch$1(this.vnode, {
        sel: this.vnode.sel,
        data: {}
      });
    }
    // Clear update queue
    window.cancelAnimationFrame(this.__requestAnimationFrameId);
    this.__updateQueue = [];
    this.__eventHandlers = [];
    this.__onceEventHandlers = [];
    this.__onBeforeMount = [];
    this.__onMounted = [];
    this.__onBeforeUpdate = [];
    this.__onUpdated = [];
    this.__onBeforeUnmount = [];
    this.__onUnmounted = [];
    // Delete all props
    deleteProps(this);
    this.__destroyed = true;
  }
  hook(name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.__destroyed) return;
    this[`__${name}`].forEach(handler => {
      handler(...args);
    });
  }
}
Component.$jsx = $jsx$1;
var Component$1 = Component;

function parseComponent(componentString) {
  const window = getWindow();
  const document = getDocument();
  const componentId = id();
  const callbackCreateName = `f7_component_create_callback_${componentId}`;

  // Template
  let template;
  const hasTemplate = componentString.match(/<template([ ]?)([a-z0-9-]*)>/);
  if (hasTemplate) {
    template = componentString.split(/<template[ ]?[a-z0-9-]*>/).filter((item, index) => index > 0).join('<template>').split('</template>').filter((item, index, arr) => index < arr.length - 1).join('</template>').replace(/{{#raw}}([ \n]*)<template/g, '{{#raw}}<template').replace(/\/template>([ \n]*){{\/raw}}/g, '/template>{{/raw}}').replace(/([ \n])<template/g, '$1{{#raw}}<template').replace(/\/template>([ \n])/g, '/template>{{/raw}}$1');
  }

  // Parse Styles
  let style = null;
  if (componentString.indexOf('<style>') >= 0) {
    style = componentString.split('<style>')[1].split('</style>')[0];
  }
  if (componentString.indexOf('<style scoped>') >= 0) {
    style = componentString.split('<style scoped>')[1].split('</style>')[0];
  }

  // Parse Script
  let scriptContent;
  if (componentString.indexOf('<script>') >= 0) {
    const scripts = componentString.split('<script>');
    scriptContent = scripts[scripts.length - 1].split('</script>')[0].trim();
  } else {
    scriptContent = 'return () => {return $render}';
  }
  if (!scriptContent || !scriptContent.trim()) scriptContent = 'return () => {return $render}';

  // Parse Template
  if (template) {
    scriptContent = scriptContent.replace('$render', `function ($$ctx) {
          var $ = $$ctx.$$;
          var $h = $$ctx.$h;
          var $root = $$ctx.$root;
          var $f7 = $$ctx.$f7;
          var $f7route = $$ctx.$f7route;
          var $f7router = $$ctx.$f7router;
          var $theme = $$ctx.$theme;
          var $update = $$ctx.$update;
          var $store = $$ctx.$store;
          var $ref = $$ctx.$ref;

          return $h\`${template}\`
        }
        `).replace(/export default/g, 'return');
  }

  // Execute Script
  scriptContent = `window.${callbackCreateName} = function () {${scriptContent}}`;

  // Insert Script El
  const scriptEl = document.createElement('script');
  scriptEl.innerHTML = scriptContent;
  $('head').append(scriptEl);
  const component = window[callbackCreateName]();

  // Remove Script El
  $(scriptEl).remove();
  window[callbackCreateName] = null;
  delete window[callbackCreateName];

  // Assign Style
  if (style) {
    component.style = style;
  }

  // Component ID
  component.id = componentId;
  return component;
}

function registerComponent(tagName, component) {
  customComponents[tagName] = component;
}
function unregisterComponent(tagName) {
  delete customComponents[tagName];
}
var ComponentModule = {
  name: 'component',
  static: {
    Component: Component$1,
    parseComponent,
    registerComponent,
    unregisterComponent
  },
  create() {
    const app = this;
    app.component = {
      registerComponent,
      unregisterComponent,
      parse(componentString) {
        return parseComponent(componentString);
      },
      create(component, props, _ref) {
        let {
          root,
          el,
          context,
          children
        } = _ref;
        return new Component$1(app, component, props, {
          root,
          el,
          context,
          children
        });
      }
    };
  }
};

var HistoryModule = {
  name: 'history',
  static: {
    history: History$1
  },
  on: {
    init() {
      History$1.init(this);
    }
  }
};

const SW = {
  registrations: [],
  register(path, scope) {
    const app = this;
    const window = getWindow();
    if (!('serviceWorker' in window.navigator) || !app.serviceWorker.container) {
      return new Promise((resolve, reject) => {
        reject(new Error('Service worker is not supported'));
      });
    }
    return new Promise((resolve, reject) => {
      app.serviceWorker.container.register(path, scope ? {
        scope
      } : {}).then(reg => {
        SW.registrations.push(reg);
        app.emit('serviceWorkerRegisterSuccess', reg);
        resolve(reg);
      }).catch(error => {
        app.emit('serviceWorkerRegisterError', error);
        reject(error);
      });
    });
  },
  unregister(registration) {
    const app = this;
    const window = getWindow();
    if (!('serviceWorker' in window.navigator) || !app.serviceWorker.container) {
      return new Promise((resolve, reject) => {
        reject(new Error('Service worker is not supported'));
      });
    }
    let registrations;
    if (!registration) registrations = SW.registrations;else if (Array.isArray(registration)) registrations = registration;else registrations = [registration];
    return Promise.all(registrations.map(reg => new Promise((resolve, reject) => {
      reg.unregister().then(() => {
        if (SW.registrations.indexOf(reg) >= 0) {
          SW.registrations.splice(SW.registrations.indexOf(reg), 1);
        }
        app.emit('serviceWorkerUnregisterSuccess', reg);
        resolve();
      }).catch(error => {
        app.emit('serviceWorkerUnregisterError', reg, error);
        reject(error);
      });
    })));
  }
};
var ServiceWorkerModule = {
  name: 'sw',
  params: {
    serviceWorker: {
      path: undefined,
      scope: undefined
    }
  },
  create() {
    const app = this;
    const window = getWindow();
    extend(app, {
      serviceWorker: {
        container: 'serviceWorker' in window.navigator ? window.navigator.serviceWorker : undefined,
        registrations: SW.registrations,
        register: SW.register.bind(app),
        unregister: SW.unregister.bind(app)
      }
    });
  },
  on: {
    init() {
      const window = getWindow();
      if (!('serviceWorker' in window.navigator)) return;
      const app = this;
      if (app.device.cordova || window.Capacitor && window.Capacitor.isNative) return;
      if (!app.serviceWorker.container) return;
      const paths = app.params.serviceWorker.path;
      const scope = app.params.serviceWorker.scope;
      if (!paths || Array.isArray(paths) && !paths.length) return;
      const toRegister = Array.isArray(paths) ? paths : [paths];
      toRegister.forEach(path => {
        app.serviceWorker.register(path, scope);
      });
    }
  }
};

/* eslint-disable no-underscore-dangle */
function createStore(storeParams) {
  if (storeParams === void 0) {
    storeParams = {};
  }
  const store = {
    __store: true
  };
  const originalState = {
    ...(storeParams.state || {})
  };
  const actions = {
    ...(storeParams.actions || {})
  };
  const getters = {
    ...(storeParams.getters || {})
  };
  const state = extend({}, originalState);
  let propsQueue = [];
  const gettersDependencies = {};
  const gettersCallbacks = {};
  Object.keys(getters).forEach(getterKey => {
    gettersDependencies[getterKey] = [];
    gettersCallbacks[getterKey] = [];
  });
  const getGetterValue = getterKey => {
    return getters[getterKey]({
      state: store.state
    });
  };
  const addGetterDependencies = (getterKey, deps) => {
    if (!gettersDependencies[getterKey]) gettersDependencies[getterKey] = [];
    deps.forEach(dep => {
      if (gettersDependencies[getterKey].indexOf(dep) < 0) {
        gettersDependencies[getterKey].push(dep);
      }
    });
  };
  const addGetterCallback = (getterKey, callback) => {
    if (!gettersCallbacks[getterKey]) gettersCallbacks[getterKey] = [];
    gettersCallbacks[getterKey].push(callback);
  };
  const runGetterCallbacks = stateKey => {
    const keys = Object.keys(gettersDependencies).filter(getterKey => {
      return gettersDependencies[getterKey].indexOf(stateKey) >= 0;
    });
    keys.forEach(getterKey => {
      if (!gettersCallbacks[getterKey] || !gettersCallbacks[getterKey].length) return;
      gettersCallbacks[getterKey].forEach(callback => {
        callback(getGetterValue(getterKey));
      });
    });
  };
  const removeGetterCallback = callback => {
    Object.keys(gettersCallbacks).forEach(stateKey => {
      const callbacks = gettersCallbacks[stateKey];
      if (callbacks.indexOf(callback) >= 0) {
        callbacks.splice(callbacks.indexOf(callback), 1);
      }
    });
  };

  // eslint-disable-next-line
  store.__removeCallback = callback => {
    removeGetterCallback(callback);
  };
  const getterValue = function (getterKey, addCallback) {
    if (addCallback === void 0) {
      addCallback = true;
    }
    if (getterKey === 'constructor') return undefined;
    propsQueue = [];
    const value = getGetterValue(getterKey);
    addGetterDependencies(getterKey, propsQueue);
    const onUpdated = callback => {
      addGetterCallback(getterKey, callback);
    };
    const obj = {
      value,
      onUpdated
    };
    if (!addCallback) {
      return obj;
    }
    const callback = v => {
      obj.value = v;
    };
    obj.__callback = callback;
    addGetterCallback(getterKey, callback);
    // eslint-disable-next-line
    return obj;
  };
  store.state = new Proxy(state, {
    set: (target, prop, value) => {
      target[prop] = value;
      runGetterCallbacks(prop);
      return true;
    },
    get: (target, prop) => {
      propsQueue.push(prop);
      return target[prop];
    }
  });
  store.getters = new Proxy(getters, {
    set: () => false,
    get: (target, prop) => {
      if (!target[prop]) {
        return undefined;
      }
      return getterValue(prop, true);
    }
  });
  store._gettersPlain = new Proxy(getters, {
    set: () => false,
    get: (target, prop) => {
      if (!target[prop]) {
        return undefined;
      }
      return getterValue(prop, false);
    }
  });
  store.dispatch = (actionName, data) => {
    return new Promise((resolve, reject) => {
      if (!actions[actionName]) {
        reject();
        throw new Error(`Framework7: Store action "${actionName}" is not found`);
      }
      const result = actions[actionName]({
        state: store.state,
        dispatch: store.dispatch
      }, data);
      resolve(result);
    });
  };
  return store;
}

var StoreModule = {
  name: 'store',
  static: {
    createStore
  },
  proto: {
    createStore
  }
};

const isCapacitor = () => {
  const window = getWindow();
  return window.Capacitor && window.Capacitor.isNative && window.Capacitor.Plugins && window.Capacitor.Plugins.StatusBar;
};
const Statusbar = {
  hide() {
    const window = getWindow();
    const device = getDevice();
    if (device.cordova && window.StatusBar) {
      window.StatusBar.hide();
    }
    if (isCapacitor()) {
      window.Capacitor.Plugins.StatusBar.hide();
    }
  },
  show() {
    const window = getWindow();
    const device = getDevice();
    if (device.cordova && window.StatusBar) {
      window.StatusBar.show();
    }
    if (isCapacitor()) {
      window.Capacitor.Plugins.StatusBar.show();
    }
  },
  onClick() {
    const app = this;
    let pageContent;
    if ($('.popup.modal-in').length > 0) {
      // Check for opened popup
      pageContent = $('.popup.modal-in').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else if ($('.panel.panel-in').length > 0) {
      // Check for opened panel
      pageContent = $('.panel.panel-in').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else if ($('.views > .view.tab-active').length > 0) {
      // View in tab bar app layout
      pageContent = $('.views > .view.tab-active').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else if ($('.views').length > 0) {
      pageContent = $('.views').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else {
      pageContent = app.$el.children('.view').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    }
    if (pageContent && pageContent.length > 0) {
      // Check for tab
      if (pageContent.hasClass('tab')) {
        pageContent = pageContent.parent('.tabs').children('.page-content.tab-active');
      }
      if (pageContent.length > 0) pageContent.scrollTop(0, 300);
    }
  },
  setTextColor(color) {
    const window = getWindow();
    const device = getDevice();
    if (device.cordova && window.StatusBar) {
      if (color === 'white') {
        window.StatusBar.styleLightContent();
      } else {
        window.StatusBar.styleDefault();
      }
    }
    if (isCapacitor()) {
      if (color === 'white') {
        window.Capacitor.Plugins.StatusBar.setStyle({
          style: 'DARK'
        });
      } else {
        window.Capacitor.Plugins.StatusBar.setStyle({
          style: 'LIGHT'
        });
      }
    }
  },
  setBackgroundColor(color) {
    const window = getWindow();
    const device = getDevice();
    if (device.cordova && window.StatusBar) {
      window.StatusBar.backgroundColorByHexString(color);
    }
    if (isCapacitor()) {
      window.Capacitor.Plugins.StatusBar.setBackgroundColor({
        color
      });
    }
  },
  isVisible() {
    const window = getWindow();
    const device = getDevice();
    return new Promise(resolve => {
      if (device.cordova && window.StatusBar) {
        resolve(window.StatusBar.isVisible);
      }
      if (isCapacitor()) {
        window.Capacitor.Plugins.StatusBar.getInfo().then(info => {
          resolve(info.visible);
        });
      }
      resolve(false);
    });
  },
  overlaysWebView(overlays) {
    if (overlays === void 0) {
      overlays = true;
    }
    const window = getWindow();
    const device = getDevice();
    if (device.cordova && window.StatusBar) {
      window.StatusBar.overlaysWebView(overlays);
    }
    if (isCapacitor()) {
      window.Capacitor.Plugins.StatusBar.setOverlaysWebView({
        overlay: overlays
      });
    }
  },
  init() {
    const app = this;
    const window = getWindow();
    const device = getDevice();
    const params = app.params.statusbar;
    if (!params.enabled) return;
    const isCordova = device.cordova && window.StatusBar;
    const isCap = isCapacitor();
    if (isCordova || isCap) {
      if (params.scrollTopOnClick) {
        $(window).on('statusTap', Statusbar.onClick.bind(app));
      }
      if (device.ios) {
        if (params.iosOverlaysWebView) {
          Statusbar.overlaysWebView(true);
        } else {
          Statusbar.overlaysWebView(false);
        }
        if (params.iosTextColor === 'white') {
          Statusbar.setTextColor('white');
        } else {
          Statusbar.setTextColor('black');
        }
      }
      if (device.android) {
        if (params.androidOverlaysWebView) {
          Statusbar.overlaysWebView(true);
        } else {
          Statusbar.overlaysWebView(false);
        }
        if (params.androidTextColor === 'white') {
          Statusbar.setTextColor('white');
        } else {
          Statusbar.setTextColor('black');
        }
      }
    }
    if (params.iosBackgroundColor && device.ios) {
      Statusbar.setBackgroundColor(params.iosBackgroundColor);
    }
    if (params.androidBackgroundColor && device.android) {
      Statusbar.setBackgroundColor(params.androidBackgroundColor);
    }
  }
};
var Statusbar$1 = {
  name: 'statusbar',
  params: {
    statusbar: {
      enabled: true,
      scrollTopOnClick: true,
      iosOverlaysWebView: true,
      iosTextColor: 'black',
      iosBackgroundColor: null,
      androidOverlaysWebView: false,
      androidTextColor: 'black',
      androidBackgroundColor: null
    }
  },
  create() {
    const app = this;
    bindMethods(app, {
      statusbar: Statusbar
    });
  },
  on: {
    init() {
      const app = this;
      Statusbar.init.call(app);
    }
  }
};

function getCurrentView(app) {
  const $popoverView = $('.popover.modal-in .view');
  const $popupView = $('.popup.modal-in .view');
  const $panelView = $('.panel.panel-in .view');
  let $viewsEl = $('.views');
  if ($viewsEl.length === 0) $viewsEl = app.$el;
  // Find active view as tab
  let $viewEl = $viewsEl.children('.view');
  if ($viewEl.length === 0) {
    $viewEl = $viewsEl.children('.tabs').children('.view');
  }
  // Propably in tabs or split view
  if ($viewEl.length > 1) {
    if ($viewEl.hasClass('tab')) {
      // Tabs
      $viewEl = $viewsEl.children('.view.tab-active');
      if ($viewEl.length === 0) {
        $viewEl = $viewsEl.children('.tabs').children('.view.tab-active');
      }
    }
  }
  if ($popoverView.length > 0 && $popoverView[0].f7View) return $popoverView[0].f7View;
  if ($popupView.length > 0 && $popupView[0].f7View) return $popupView[0].f7View;
  if ($panelView.length > 0 && $panelView[0].f7View) return $panelView[0].f7View;
  if ($viewEl.length > 0) {
    if ($viewEl.length === 1 && $viewEl[0].f7View) return $viewEl[0].f7View;
    if ($viewEl.length > 1) {
      return app.views.main;
    }
  }
  return undefined;
}
var View = {
  name: 'view',
  params: {
    view: {
      init: true,
      initRouterOnTabShow: false,
      name: undefined,
      main: false,
      router: true,
      linksView: null,
      stackPages: false,
      xhrCache: true,
      xhrCacheIgnore: [],
      xhrCacheIgnoreGetParameters: false,
      xhrCacheDuration: 1000 * 60 * 10,
      // Ten minutes
      componentCache: true,
      preloadPreviousPage: true,
      allowDuplicateUrls: false,
      reloadPages: false,
      reloadDetail: false,
      masterDetailBreakpoint: 0,
      masterDetailResizable: false,
      removeElements: true,
      removeElementsWithTimeout: false,
      removeElementsTimeout: 0,
      restoreScrollTopOnBack: true,
      unloadTabContent: true,
      passRouteQueryToRequest: true,
      passRouteParamsToRequest: false,
      loadInitialPage: true,
      // Swipe Back
      iosSwipeBack: true,
      iosSwipeBackAnimateShadow: true,
      iosSwipeBackAnimateOpacity: true,
      iosSwipeBackActiveArea: 30,
      iosSwipeBackThreshold: 0,
      mdSwipeBack: false,
      mdSwipeBackAnimateShadow: true,
      mdSwipeBackAnimateOpacity: false,
      mdSwipeBackActiveArea: 30,
      mdSwipeBackThreshold: 0,
      auroraSwipeBack: false,
      auroraSwipeBackAnimateShadow: false,
      auroraSwipeBackAnimateOpacity: true,
      auroraSwipeBackActiveArea: 30,
      auroraSwipeBackThreshold: 0,
      // Push State
      browserHistory: false,
      browserHistoryRoot: undefined,
      browserHistoryAnimate: true,
      browserHistoryAnimateOnLoad: false,
      browserHistorySeparator: '#!',
      browserHistoryOnLoad: true,
      browserHistoryInitialMatch: false,
      browserHistoryStoreHistory: true,
      browserHistoryTabs: 'replace',
      // Animate Pages
      animate: true,
      // iOS Dynamic Navbar
      iosDynamicNavbar: true,
      // Animate iOS Navbar Back Icon
      iosAnimateNavbarBackIcon: true,
      // Delays
      iosPageLoadDelay: 0,
      mdPageLoadDelay: 0,
      auroraPageLoadDelay: 0,
      // Routes hooks
      routesBeforeEnter: null,
      routesBeforeLeave: null
    }
  },
  static: {
    View: View$2
  },
  create() {
    const app = this;
    extend(app, {
      views: extend([], {
        create(el, params) {
          return new View$2(app, el, params);
        },
        get(viewEl) {
          const $viewEl = $(viewEl);
          if ($viewEl.length && $viewEl[0].f7View) return $viewEl[0].f7View;
          return undefined;
        }
      })
    });
    Object.defineProperty(app.views, 'current', {
      enumerable: true,
      configurable: true,
      get() {
        return getCurrentView(app);
      }
    });
    // Alias
    app.view = app.views;
  },
  on: {
    init() {
      const app = this;
      $('.view-init').each(viewEl => {
        if (viewEl.f7View) return;
        const viewParams = $(viewEl).dataset();
        app.views.create(viewEl, viewParams);
      });
    },
    'modalOpen panelOpen': function onOpen(instance) {
      const app = this;
      instance.$el.find('.view-init').each(viewEl => {
        if (viewEl.f7View) return;
        const viewParams = $(viewEl).dataset();
        app.views.create(viewEl, viewParams);
      });
    },
    'modalBeforeDestroy panelBeforeDestroy': function onClose(instance) {
      if (!instance || !instance.$el) return;
      instance.$el.find('.view-init').each(viewEl => {
        const view = viewEl.f7View;
        if (!view) return;
        view.destroy();
      });
    }
  },
  vnode: {
    'view-init': {
      insert(vnode) {
        const app = this;
        const viewEl = vnode.elm;
        if (viewEl.f7View) return;
        const viewParams = $(viewEl).dataset();
        app.views.create(viewEl, viewParams);
      },
      destroy(vnode) {
        const viewEl = vnode.elm;
        const view = viewEl.f7View;
        if (!view) return;
        view.destroy();
      }
    }
  }
};

const Navbar = {
  size(el) {
    const app = this;
    let $el = $(el);
    if ($el.hasClass('navbars')) {
      $el = $el.children('.navbar').each(navbarEl => {
        app.navbar.size(navbarEl);
      });
      return;
    }
    const $innerEl = $el.children('.navbar-inner');
    if (!$innerEl.length) return;
    const needCenterTitle = $innerEl.hasClass('navbar-inner-centered-title') || app.params.navbar[`${app.theme}CenterTitle`];
    const needLeftTitle = app.theme === 'ios' && !app.params.navbar[`${app.theme}CenterTitle`];
    if (!needCenterTitle && !needLeftTitle) return;
    if ($el.hasClass('stacked') || $el.parents('.stacked').length > 0 || $el.parents('.tab:not(.tab-active)').length > 0 || $el.parents('.popup:not(.modal-in)').length > 0) {
      return;
    }
    if (app.theme !== 'ios' && app.params.navbar[`${app.theme}CenterTitle`]) {
      $innerEl.addClass('navbar-inner-centered-title');
    }
    if (app.theme === 'ios' && !app.params.navbar.iosCenterTitle) {
      $innerEl.addClass('navbar-inner-left-title');
    }
    const $viewEl = $el.parents('.view').eq(0);
    const left = app.rtl ? $innerEl.children('.right') : $innerEl.children('.left');
    const right = app.rtl ? $innerEl.children('.left') : $innerEl.children('.right');
    const title = $innerEl.children('.title');
    const subnavbar = $innerEl.children('.subnavbar');
    const noLeft = left.length === 0;
    const noRight = right.length === 0;
    const leftWidth = noLeft ? 0 : left.outerWidth(true);
    const rightWidth = noRight ? 0 : right.outerWidth(true);
    const titleWidth = title.outerWidth(true);
    const navbarStyles = $innerEl.styles();
    const navbarWidth = $innerEl[0].offsetWidth;
    const navbarInnerWidth = navbarWidth - parseInt(navbarStyles.paddingLeft, 10) - parseInt(navbarStyles.paddingRight, 10);
    const isPrevious = $el.hasClass('navbar-previous');
    const sliding = $innerEl.hasClass('sliding');
    let router;
    let dynamicNavbar;
    if ($viewEl.length > 0 && $viewEl[0].f7View) {
      router = $viewEl[0].f7View.router;
      dynamicNavbar = router && router.dynamicNavbar;
    }
    let currLeft;
    let diff;
    if (noRight) {
      currLeft = navbarInnerWidth - titleWidth;
    }
    if (noLeft) {
      currLeft = 0;
    }
    if (!noLeft && !noRight) {
      currLeft = (navbarInnerWidth - rightWidth - titleWidth + leftWidth) / 2;
    }
    let requiredLeft = (navbarInnerWidth - titleWidth) / 2;
    if (navbarInnerWidth - leftWidth - rightWidth > titleWidth) {
      if (requiredLeft < leftWidth) {
        requiredLeft = leftWidth;
      }
      if (requiredLeft + titleWidth > navbarInnerWidth - rightWidth) {
        requiredLeft = navbarInnerWidth - rightWidth - titleWidth;
      }
      diff = requiredLeft - currLeft;
    } else {
      diff = 0;
    }

    // RTL inverter
    const inverter = app.rtl ? -1 : 1;
    if (dynamicNavbar && app.theme === 'ios') {
      if (title.hasClass('sliding') || title.length > 0 && sliding) {
        let titleLeftOffset = -(currLeft + diff) * inverter;
        const titleRightOffset = (navbarInnerWidth - currLeft - diff - titleWidth) * inverter;
        if (isPrevious) {
          if (router && router.params.iosAnimateNavbarBackIcon) {
            const activeNavbarBackLink = $el.parent().find('.navbar-current').children('.left.sliding').find('.back .icon ~ span');
            if (activeNavbarBackLink.length > 0) {
              titleLeftOffset += activeNavbarBackLink[0].offsetLeft;
            }
          }
        }
        title[0].f7NavbarLeftOffset = titleLeftOffset;
        title[0].f7NavbarRightOffset = titleRightOffset;
      }
      if (!noLeft && (left.hasClass('sliding') || sliding)) {
        if (app.rtl) {
          left[0].f7NavbarLeftOffset = -(navbarInnerWidth - left[0].offsetWidth) / 2 * inverter;
          left[0].f7NavbarRightOffset = leftWidth * inverter;
        } else {
          left[0].f7NavbarLeftOffset = -leftWidth;
          left[0].f7NavbarRightOffset = (navbarInnerWidth - left[0].offsetWidth) / 2;
          if (router && router.params.iosAnimateNavbarBackIcon && left.find('.back .icon').length > 0) {
            if (left.find('.back .icon ~ span').length) {
              const leftOffset = left[0].f7NavbarLeftOffset;
              const rightOffset = left[0].f7NavbarRightOffset;
              left[0].f7NavbarLeftOffset = 0;
              left[0].f7NavbarRightOffset = 0;
              left.find('.back .icon ~ span')[0].f7NavbarLeftOffset = leftOffset;
              left.find('.back .icon ~ span')[0].f7NavbarRightOffset = rightOffset - left.find('.back .icon')[0].offsetWidth;
            }
          }
        }
      }
      if (!noRight && (right.hasClass('sliding') || sliding)) {
        if (app.rtl) {
          right[0].f7NavbarLeftOffset = -rightWidth * inverter;
          right[0].f7NavbarRightOffset = (navbarInnerWidth - right[0].offsetWidth) / 2 * inverter;
        } else {
          right[0].f7NavbarLeftOffset = -(navbarInnerWidth - right[0].offsetWidth) / 2;
          right[0].f7NavbarRightOffset = rightWidth;
        }
      }
      if (subnavbar.length && (subnavbar.hasClass('sliding') || sliding)) {
        subnavbar[0].f7NavbarLeftOffset = app.rtl ? subnavbar[0].offsetWidth : -subnavbar[0].offsetWidth;
        subnavbar[0].f7NavbarRightOffset = -subnavbar[0].f7NavbarLeftOffset;
      }
    }

    // Center title
    if (needCenterTitle) {
      let titleLeft = diff;
      if (app.rtl && noLeft && noRight && title.length > 0) titleLeft = -titleLeft;
      title.css({
        left: `${titleLeft}px`
      });
    }
  },
  hide(el, animate, hideStatusbar, hideOnlyCurrent) {
    if (animate === void 0) {
      animate = true;
    }
    if (hideStatusbar === void 0) {
      hideStatusbar = false;
    }
    if (hideOnlyCurrent === void 0) {
      hideOnlyCurrent = false;
    }
    const app = this;
    let $el = $(el);
    const isDynamic = $el.hasClass('navbar') && $el.parent('.navbars').length && !hideOnlyCurrent;
    if (isDynamic) $el = $el.parents('.navbars');
    if (!$el.length) return;
    if ($el.hasClass('navbar-hidden')) return;
    let className = `navbar-hidden${animate ? ' navbar-transitioning' : ''}`;
    const currentIsLarge = isDynamic ? $el.find('.navbar-current .title-large').length : $el.find('.title-large').length;
    if (currentIsLarge) {
      className += ' navbar-large-hidden';
    }
    if (hideStatusbar) {
      className += ' navbar-hidden-statusbar';
    }
    $el.transitionEnd(() => {
      $el.removeClass('navbar-transitioning');
    });
    $el.addClass(className);
    if (isDynamic) {
      $el.children('.navbar').each(subEl => {
        $(subEl).trigger('navbar:hide');
        app.emit('navbarHide', subEl);
      });
    } else {
      $el.trigger('navbar:hide');
      app.emit('navbarHide', $el[0]);
    }
  },
  show(el, animate, hideOnlyCurrent) {
    if (el === void 0) {
      el = '.navbar-hidden';
    }
    if (animate === void 0) {
      animate = true;
    }
    if (hideOnlyCurrent === void 0) {
      hideOnlyCurrent = false;
    }
    const app = this;
    let $el = $(el);
    const isDynamic = $el.hasClass('navbar') && $el.parent('.navbars').length && !hideOnlyCurrent;
    if (isDynamic) $el = $el.parents('.navbars');
    if (!$el.length) return;
    if (!$el.hasClass('navbar-hidden')) return;
    if (animate) {
      $el.addClass('navbar-transitioning');
      $el.transitionEnd(() => {
        $el.removeClass('navbar-transitioning');
      });
    }
    $el.removeClass('navbar-hidden navbar-large-hidden navbar-hidden-statusbar');
    if (isDynamic) {
      $el.children('.navbar').each(subEl => {
        $(subEl).trigger('navbar:show');
        app.emit('navbarShow', subEl);
      });
    } else {
      $el.trigger('navbar:show');
      app.emit('navbarShow', $el[0]);
    }
  },
  getElByPage(page) {
    let $pageEl;
    let $navbarEl;
    let pageData;
    if (page.$navbarEl || page.$el) {
      pageData = page;
      $pageEl = page.$el;
    } else {
      $pageEl = $(page);
      if ($pageEl.length > 0) pageData = $pageEl[0].f7Page;
    }
    if (pageData && pageData.$navbarEl && pageData.$navbarEl.length > 0) {
      $navbarEl = pageData.$navbarEl;
    } else if ($pageEl) {
      $navbarEl = $pageEl.children('.navbar');
    }
    if (!$navbarEl || $navbarEl && $navbarEl.length === 0) return undefined;
    return $navbarEl[0];
  },
  getPageByEl(navbarEl) {
    const $navbarEl = $(navbarEl);
    if ($navbarEl.parents('.page').length) {
      return $navbarEl.parents('.page')[0];
    }
    let pageEl;
    $navbarEl.parents('.view').find('.page').each(el => {
      if (el && el.f7Page && el.f7Page.navbarEl && $navbarEl[0] === el.f7Page.navbarEl) {
        pageEl = el;
      }
    });
    return pageEl;
  },
  collapseLargeTitle(navbarEl) {
    const app = this;
    let $navbarEl = $(navbarEl);
    if ($navbarEl.hasClass('navbars')) {
      $navbarEl = $navbarEl.find('.navbar');
      if ($navbarEl.length > 1) {
        $navbarEl = $(navbarEl).find('.navbar-large.navbar-current');
      }
      if ($navbarEl.length > 1 || !$navbarEl.length) {
        return;
      }
    }
    const $pageEl = $(app.navbar.getPageByEl($navbarEl));
    $navbarEl.addClass('navbar-large-collapsed');
    $pageEl.eq(0).addClass('page-with-navbar-large-collapsed').trigger('page:navbarlargecollapsed');
    app.emit('pageNavbarLargeCollapsed', $pageEl[0]);
    $navbarEl.trigger('navbar:collapse');
    app.emit('navbarCollapse', $navbarEl[0]);
  },
  expandLargeTitle(navbarEl) {
    const app = this;
    let $navbarEl = $(navbarEl);
    if ($navbarEl.hasClass('navbars')) {
      $navbarEl = $navbarEl.find('.navbar-large');
      if ($navbarEl.length > 1) {
        $navbarEl = $(navbarEl).find('.navbar-large.navbar-current');
      }
      if ($navbarEl.length > 1 || !$navbarEl.length) {
        return;
      }
    }
    const $pageEl = $(app.navbar.getPageByEl($navbarEl));
    $navbarEl.removeClass('navbar-large-collapsed');
    $pageEl.eq(0).removeClass('page-with-navbar-large-collapsed').trigger('page:navbarlargeexpanded');
    app.emit('pageNavbarLargeExpanded', $pageEl[0]);
    $navbarEl.trigger('navbar:expand');
    app.emit('navbarExpand', $navbarEl[0]);
  },
  toggleLargeTitle(navbarEl) {
    const app = this;
    let $navbarEl = $(navbarEl);
    if ($navbarEl.hasClass('navbars')) {
      $navbarEl = $navbarEl.find('.navbar-large');
      if ($navbarEl.length > 1) {
        $navbarEl = $(navbarEl).find('.navbar-large.navbar-current');
      }
      if ($navbarEl.length > 1 || !$navbarEl.length) {
        return;
      }
    }
    if ($navbarEl.hasClass('navbar-large-collapsed')) {
      app.navbar.expandLargeTitle($navbarEl);
    } else {
      app.navbar.collapseLargeTitle($navbarEl);
    }
  },
  initNavbarOnScroll(pageEl, navbarEl, needHide, needCollapse, needTransparent) {
    const app = this;
    const support = getSupport();
    const $pageEl = $(pageEl);
    const $navbarEl = $(navbarEl);
    const $titleLargeEl = $navbarEl.find('.title-large');
    const isLarge = $titleLargeEl.length || $navbarEl.hasClass('.navbar-large');
    let navbarHideHeight = 44;
    const snapPageScrollToLargeTitle = app.params.navbar.snapPageScrollToLargeTitle;
    const snapPageScrollToTransparentNavbar = app.params.navbar.snapPageScrollToTransparentNavbar;
    let previousScrollTop;
    let currentScrollTop;
    let scrollHeight;
    let offsetHeight;
    let reachEnd;
    let action;
    let navbarHidden;
    let navbarCollapsed;
    let navbarTitleLargeHeight;
    let navbarOffsetHeight;
    if (needCollapse || needHide && isLarge) {
      navbarTitleLargeHeight = $navbarEl.css('--f7-navbar-large-title-height');
      if (navbarTitleLargeHeight && navbarTitleLargeHeight.indexOf('px') >= 0) {
        navbarTitleLargeHeight = parseInt(navbarTitleLargeHeight, 10);
        if (Number.isNaN(navbarTitleLargeHeight) && $titleLargeEl.length) {
          navbarTitleLargeHeight = $titleLargeEl[0].offsetHeight;
        } else if (Number.isNaN(navbarTitleLargeHeight)) {
          if (app.theme === 'ios') navbarTitleLargeHeight = 52;else if (app.theme === 'md') navbarTitleLargeHeight = 48;else if (app.theme === 'aurora') navbarTitleLargeHeight = 38;
        }
      } else if ($titleLargeEl.length) {
        navbarTitleLargeHeight = $titleLargeEl[0].offsetHeight;
      } else {
        // eslint-disable-next-line
        if (app.theme === 'ios') navbarTitleLargeHeight = 52;else if (app.theme === 'md') navbarTitleLargeHeight = 48;else if (app.theme === 'aurora') navbarTitleLargeHeight = 38;
      }
    }
    if (needHide && isLarge) {
      navbarHideHeight += navbarTitleLargeHeight;
    }
    let scrollChanged;
    let scrollContent;
    let scrollTimeoutId;
    let touchEndTimeoutId;
    const touchSnapTimeout = 70;
    const desktopSnapTimeout = 300;
    function calcScrollableDistance() {
      $pageEl.find('.page-content').each(pageContentEl => {
        pageContentEl.f7ScrollableDistance = pageContentEl.scrollHeight - pageContentEl.offsetHeight;
      });
    }
    function snapLargeNavbar() {
      const inSearchbarExpanded = $navbarEl.hasClass('with-searchbar-expandable-enabled');
      if (inSearchbarExpanded) return;
      if (!scrollContent || currentScrollTop < 0) return;
      if (currentScrollTop >= navbarTitleLargeHeight / 2 && currentScrollTop < navbarTitleLargeHeight) {
        $(scrollContent).scrollTop(navbarTitleLargeHeight, 100);
      } else if (currentScrollTop < navbarTitleLargeHeight) {
        $(scrollContent).scrollTop(0, 200);
      }
    }
    function snapTransparentNavbar() {
      const inSearchbarExpanded = $navbarEl.hasClass('with-searchbar-expandable-enabled');
      if (inSearchbarExpanded) return;
      if (!scrollContent || currentScrollTop < 0) return;
      if (currentScrollTop >= navbarOffsetHeight / 2 && currentScrollTop < navbarOffsetHeight) {
        $(scrollContent).scrollTop(navbarOffsetHeight, 100);
      } else if (currentScrollTop < navbarOffsetHeight) {
        $(scrollContent).scrollTop(0, 200);
      }
    }
    function handleNavbarTransparent() {
      const isHidden = $navbarEl.hasClass('navbar-hidden') || $navbarEl.parent('.navbars').hasClass('navbar-hidden');
      const inSearchbarExpanded = $navbarEl.hasClass('with-searchbar-expandable-enabled');
      if (inSearchbarExpanded || isHidden) return;
      if (!navbarOffsetHeight) {
        navbarOffsetHeight = navbarEl.offsetHeight;
      }
      let opacity = currentScrollTop / navbarOffsetHeight;
      const notTransparent = $navbarEl.hasClass('navbar-transparent-visible');
      opacity = Math.max(Math.min(opacity, 1), 0);
      if (notTransparent && opacity === 1 || !notTransparent && opacity === 0) {
        $navbarEl.find('.navbar-bg, .title').css('opacity', '');
        return;
      }
      if (notTransparent && opacity === 0) {
        $navbarEl.trigger('navbar:transparenthide');
        app.emit('navbarTransparentHide', $navbarEl[0]);
        $navbarEl.removeClass('navbar-transparent-visible');
        $navbarEl.find('.navbar-bg, .title').css('opacity', '');
        return;
      }
      if (!notTransparent && opacity === 1) {
        $navbarEl.trigger('navbar:transparentshow');
        app.emit('navbarTransparentShow', $navbarEl[0]);
        $navbarEl.addClass('navbar-transparent-visible');
        $navbarEl.find('.navbar-bg, .title').css('opacity', '');
        return;
      }
      $navbarEl.find('.navbar-bg, .title').css('opacity', opacity);
      if (snapPageScrollToTransparentNavbar) {
        if (!support.touch) {
          clearTimeout(scrollTimeoutId);
          scrollTimeoutId = setTimeout(() => {
            snapTransparentNavbar();
          }, desktopSnapTimeout);
        } else if (touchEndTimeoutId) {
          clearTimeout(touchEndTimeoutId);
          touchEndTimeoutId = null;
          touchEndTimeoutId = setTimeout(() => {
            snapTransparentNavbar();
            clearTimeout(touchEndTimeoutId);
            touchEndTimeoutId = null;
          }, touchSnapTimeout);
        }
      }
    }
    let previousCollapseProgress = null;
    let collapseProgress = null;
    function handleLargeNavbarCollapse(pageContentEl) {
      const isHidden = $navbarEl.hasClass('navbar-hidden') || $navbarEl.parent('.navbars').hasClass('navbar-hidden');
      if (isHidden) return;
      const isLargeTransparent = $navbarEl.hasClass('navbar-large-transparent') || $navbarEl.hasClass('navbar-large') && $navbarEl.hasClass('navbar-transparent');
      previousCollapseProgress = collapseProgress;
      const scrollableDistance = Math.min(navbarTitleLargeHeight, pageContentEl.f7ScrollableDistance || navbarTitleLargeHeight);
      collapseProgress = Math.min(Math.max(currentScrollTop / scrollableDistance, 0), 1);
      const previousCollapseWasInMiddle = previousCollapseProgress > 0 && previousCollapseProgress < 1;
      const inSearchbarExpanded = $navbarEl.hasClass('with-searchbar-expandable-enabled');
      if (inSearchbarExpanded) return;
      navbarCollapsed = $navbarEl.hasClass('navbar-large-collapsed');
      if (collapseProgress === 0 && navbarCollapsed) {
        app.navbar.expandLargeTitle($navbarEl[0]);
      } else if (collapseProgress === 1 && !navbarCollapsed) {
        app.navbar.collapseLargeTitle($navbarEl[0]);
      }
      if (collapseProgress === 0 && navbarCollapsed || collapseProgress === 0 && previousCollapseWasInMiddle || collapseProgress === 1 && !navbarCollapsed || collapseProgress === 1 && previousCollapseWasInMiddle) {
        if (app.theme === 'md') {
          $navbarEl.find('.navbar-inner').css('overflow', '');
        }
        $navbarEl.find('.title').css('opacity', '');
        $navbarEl.find('.title-large-text, .subnavbar').css('transform', '');
        if (isLargeTransparent) {
          $navbarEl.find('.navbar-bg').css('opacity', '');
        } else {
          $navbarEl.find('.navbar-bg').css('transform', '');
        }
      } else if (collapseProgress > 0 && collapseProgress < 1) {
        if (app.theme === 'md') {
          $navbarEl.find('.navbar-inner').css('overflow', 'visible');
        }
        $navbarEl.find('.title').css('opacity', collapseProgress);
        $navbarEl.find('.title-large-text, .subnavbar').css('transform', `translate3d(0px, ${-1 * collapseProgress * navbarTitleLargeHeight}px, 0)`);
        if (isLargeTransparent) {
          $navbarEl.find('.navbar-bg').css('opacity', collapseProgress);
        } else {
          $navbarEl.find('.navbar-bg').css('transform', `translate3d(0px, ${-1 * collapseProgress * navbarTitleLargeHeight}px, 0)`);
        }
      }
      if (snapPageScrollToLargeTitle) {
        if (!support.touch) {
          clearTimeout(scrollTimeoutId);
          scrollTimeoutId = setTimeout(() => {
            snapLargeNavbar();
          }, desktopSnapTimeout);
        } else if (touchEndTimeoutId) {
          clearTimeout(touchEndTimeoutId);
          touchEndTimeoutId = null;
          touchEndTimeoutId = setTimeout(() => {
            snapLargeNavbar();
            clearTimeout(touchEndTimeoutId);
            touchEndTimeoutId = null;
          }, touchSnapTimeout);
        }
      }
    }
    function handleTitleHideShow() {
      if ($pageEl.hasClass('page-with-card-opened')) return;
      scrollHeight = scrollContent.scrollHeight;
      offsetHeight = scrollContent.offsetHeight;
      reachEnd = currentScrollTop + offsetHeight >= scrollHeight;
      navbarHidden = $navbarEl.hasClass('navbar-hidden') || $navbarEl.parent('.navbars').hasClass('navbar-hidden');
      if (reachEnd) {
        if (app.params.navbar.showOnPageScrollEnd) {
          action = 'show';
        }
      } else if (previousScrollTop > currentScrollTop) {
        if (app.params.navbar.showOnPageScrollTop || currentScrollTop <= navbarHideHeight) {
          action = 'show';
        } else {
          action = 'hide';
        }
      } else if (currentScrollTop > navbarHideHeight) {
        action = 'hide';
      } else {
        action = 'show';
      }
      if (action === 'show' && navbarHidden) {
        app.navbar.show($navbarEl, true, true);
        navbarHidden = false;
      } else if (action === 'hide' && !navbarHidden) {
        app.navbar.hide($navbarEl, true, false, true);
        navbarHidden = true;
      }
      previousScrollTop = currentScrollTop;
    }
    function handleScroll(e) {
      scrollContent = this;
      if (e && e.target && e.target !== scrollContent) {
        return;
      }
      currentScrollTop = scrollContent.scrollTop;
      scrollChanged = currentScrollTop;
      if (needCollapse) {
        handleLargeNavbarCollapse(scrollContent);
      } else if (needTransparent) {
        handleNavbarTransparent();
      }
      if ($pageEl.hasClass('page-previous')) return;
      if (needHide) {
        handleTitleHideShow();
      }
    }
    function handeTouchStart() {
      scrollChanged = false;
    }
    function handleTouchEnd() {
      clearTimeout(touchEndTimeoutId);
      touchEndTimeoutId = null;
      touchEndTimeoutId = setTimeout(() => {
        if (scrollChanged !== false) {
          if (needTransparent && !needCollapse) {
            snapTransparentNavbar();
          } else {
            snapLargeNavbar();
          }
          clearTimeout(touchEndTimeoutId);
          touchEndTimeoutId = null;
        }
      }, touchSnapTimeout);
    }
    $pageEl.on('scroll', '.page-content', handleScroll, true);
    if (support.touch && (needCollapse && snapPageScrollToLargeTitle || needTransparent && snapPageScrollToTransparentNavbar)) {
      app.on('touchstart:passive', handeTouchStart);
      app.on('touchend:passive', handleTouchEnd);
    }
    calcScrollableDistance();
    if (needCollapse || needTransparent) {
      $pageEl.find('.page-content').each(pageContentEl => {
        if (pageContentEl.scrollTop > 0) handleScroll.call(pageContentEl);
      });
    }
    app.on('resize', calcScrollableDistance);
    $pageEl[0].f7DetachNavbarScrollHandlers = function f7DetachNavbarScrollHandlers() {
      app.off('resize', calcScrollableDistance);
      delete $pageEl[0].f7DetachNavbarScrollHandlers;
      $pageEl.off('scroll', '.page-content', handleScroll, true);
      if (support.touch && (needCollapse && snapPageScrollToLargeTitle || needTransparent && snapPageScrollToTransparentNavbar)) {
        app.off('touchstart:passive', handeTouchStart);
        app.off('touchend:passive', handleTouchEnd);
      }
    };
  }
};
var Navbar$1 = {
  name: 'navbar',
  create() {
    const app = this;
    bindMethods(app, {
      navbar: Navbar
    });
  },
  params: {
    navbar: {
      scrollTopOnTitleClick: true,
      iosCenterTitle: true,
      mdCenterTitle: false,
      auroraCenterTitle: true,
      hideOnPageScroll: false,
      showOnPageScrollEnd: true,
      showOnPageScrollTop: true,
      collapseLargeTitleOnScroll: true,
      snapPageScrollToLargeTitle: true,
      snapPageScrollToTransparentNavbar: true
    }
  },
  on: {
    'panelBreakpoint panelCollapsedBreakpoint panelResize viewResize resize viewMasterDetailBreakpoint': function onPanelResize() {
      const app = this;
      $('.navbar').each(navbarEl => {
        app.navbar.size(navbarEl);
      });
    },
    pageBeforeRemove(page) {
      if (page.$el[0].f7DetachNavbarScrollHandlers) {
        page.$el[0].f7DetachNavbarScrollHandlers();
      }
    },
    pageBeforeIn(page) {
      const app = this;
      if (app.theme !== 'ios') return;
      let $navbarsEl;
      const view = page.$el.parents('.view')[0].f7View;
      const navbarEl = app.navbar.getElByPage(page);
      if (!navbarEl) {
        $navbarsEl = page.$el.parents('.view').children('.navbars');
      } else {
        $navbarsEl = $(navbarEl).parents('.navbars');
      }
      if (page.$el.hasClass('no-navbar') || view.router.dynamicNavbar && !navbarEl) {
        const animate = !!(page.pageFrom && page.router.history.length > 0);
        app.navbar.hide($navbarsEl, animate);
      } else {
        app.navbar.show($navbarsEl);
      }
    },
    pageReinit(page) {
      const app = this;
      const $navbarEl = $(app.navbar.getElByPage(page));
      if (!$navbarEl || $navbarEl.length === 0) return;
      app.navbar.size($navbarEl);
    },
    pageInit(page) {
      const app = this;
      const $navbarEl = $(app.navbar.getElByPage(page));
      if (!$navbarEl || $navbarEl.length === 0) return;

      // Size
      app.navbar.size($navbarEl);

      // Need Collapse On Scroll
      let needCollapseOnScrollHandler;
      if ($navbarEl.find('.title-large').length > 0) {
        $navbarEl.addClass('navbar-large');
      }
      if ($navbarEl.hasClass('navbar-large')) {
        if (app.params.navbar.collapseLargeTitleOnScroll) needCollapseOnScrollHandler = true;
        page.$el.addClass('page-with-navbar-large');
      }

      // Need transparent on scroll
      let needTransparentOnScroll;
      if (!needCollapseOnScrollHandler && $navbarEl.hasClass('navbar-transparent')) {
        needTransparentOnScroll = true;
      }

      // Need Hide On Scroll
      let needHideOnScrollHandler;
      if (app.params.navbar.hideOnPageScroll || page.$el.find('.hide-navbar-on-scroll').length || page.$el.hasClass('hide-navbar-on-scroll') || page.$el.find('.hide-bars-on-scroll').length || page.$el.hasClass('hide-bars-on-scroll')) {
        if (page.$el.find('.keep-navbar-on-scroll').length || page.$el.hasClass('keep-navbar-on-scroll') || page.$el.find('.keep-bars-on-scroll').length || page.$el.hasClass('keep-bars-on-scroll')) {
          needHideOnScrollHandler = false;
        } else {
          needHideOnScrollHandler = true;
        }
      }
      if (needCollapseOnScrollHandler || needHideOnScrollHandler || needTransparentOnScroll) {
        app.navbar.initNavbarOnScroll(page.el, $navbarEl[0], needHideOnScrollHandler, needCollapseOnScrollHandler, needTransparentOnScroll);
      }
    },
    'panelOpen panelSwipeOpen modalOpen': function onPanelModalOpen(instance) {
      const app = this;
      instance.$el.find('.navbar:not(.navbar-previous):not(.stacked)').each(navbarEl => {
        app.navbar.size(navbarEl);
      });
    },
    tabShow(tabEl) {
      const app = this;
      $(tabEl).find('.navbar:not(.navbar-previous):not(.stacked)').each(navbarEl => {
        app.navbar.size(navbarEl);
      });
    }
  },
  clicks: {
    '.navbar .title': function onTitleClick($clickedEl, clickedData, e) {
      const app = this;
      if (!app.params.navbar.scrollTopOnTitleClick) return;
      if ($(e.target).closest('a, button').length > 0) {
        return;
      }
      let $pageContentEl;

      // Find active page
      const $navbarEl = $clickedEl.parents('.navbar');
      const $navbarsEl = $navbarEl.parents('.navbars');

      // Static Layout
      $pageContentEl = $navbarEl.parents('.page-content');
      if ($pageContentEl.length === 0) {
        // Fixed Layout
        if ($navbarEl.parents('.page').length > 0) {
          $pageContentEl = $navbarEl.parents('.page').find('.page-content');
        }
        // Through Layout iOS
        if ($pageContentEl.length === 0 && $navbarsEl.length) {
          if ($navbarsEl.nextAll('.page-current:not(.stacked)').length > 0) {
            $pageContentEl = $navbarsEl.nextAll('.page-current:not(.stacked)').find('.page-content');
          }
        }
        // Through Layout
        if ($pageContentEl.length === 0) {
          if ($navbarEl.nextAll('.page-current:not(.stacked)').length > 0) {
            $pageContentEl = $navbarEl.nextAll('.page-current:not(.stacked)').find('.page-content');
          }
        }
      }
      if ($pageContentEl && $pageContentEl.length > 0) {
        // Check for tab
        if ($pageContentEl.hasClass('tab')) {
          $pageContentEl = $pageContentEl.parent('.tabs').children('.page-content.tab-active');
        }
        if ($pageContentEl.length > 0) $pageContentEl.scrollTop(0, 300);
      }
    }
  },
  vnode: {
    navbar: {
      postpatch(vnode) {
        const app = this;
        app.navbar.size(vnode.elm);
      }
    }
  }
};

const Toolbar = {
  setHighlight(tabbarEl) {
    const app = this;
    const $tabbarEl = $(tabbarEl);
    if (app.theme === 'ios' && !$tabbarEl.hasClass('tabbar-highlight')) return;
    if ($tabbarEl.length === 0 || !($tabbarEl.hasClass('tabbar') || $tabbarEl.hasClass('tabbar-labels'))) return;
    let $highlightEl = $tabbarEl.find('.tab-link-highlight');
    const tabLinksCount = $tabbarEl.find('.tab-link').length;
    if (tabLinksCount === 0) {
      $highlightEl.remove();
      return;
    }
    if ($highlightEl.length === 0) {
      $tabbarEl.children('.toolbar-inner').append('<span class="tab-link-highlight"></span>');
      $highlightEl = $tabbarEl.find('.tab-link-highlight');
    } else if ($highlightEl.next().length) {
      $tabbarEl.children('.toolbar-inner').append($highlightEl);
    }
    const $activeLink = $tabbarEl.find('.tab-link-active');
    let highlightWidth;
    let highlightTranslate;
    if ($tabbarEl.hasClass('tabbar-scrollable') && $activeLink && $activeLink[0]) {
      highlightWidth = `${$activeLink[0].offsetWidth}px`;
      highlightTranslate = `${$activeLink[0].offsetLeft}px`;
    } else {
      const activeIndex = $activeLink.index();
      highlightWidth = `${100 / tabLinksCount}%`;
      highlightTranslate = `${(app.rtl ? -activeIndex : activeIndex) * 100}%`;
    }
    nextFrame$1(() => {
      $highlightEl.css('width', highlightWidth).transform(`translate3d(${highlightTranslate},0,0)`);
    });
  },
  init(tabbarEl) {
    const app = this;
    app.toolbar.setHighlight(tabbarEl);
  },
  hide(el, animate) {
    if (animate === void 0) {
      animate = true;
    }
    const app = this;
    const $el = $(el);
    if ($el.hasClass('toolbar-hidden')) return;
    const className = `toolbar-hidden${animate ? ' toolbar-transitioning' : ''}`;
    $el.transitionEnd(() => {
      $el.removeClass('toolbar-transitioning');
    });
    $el.addClass(className);
    $el.trigger('toolbar:hide');
    app.emit('toolbarHide', $el[0]);
  },
  show(el, animate) {
    if (animate === void 0) {
      animate = true;
    }
    const app = this;
    const $el = $(el);
    if (!$el.hasClass('toolbar-hidden')) return;
    if (animate) {
      $el.addClass('toolbar-transitioning');
      $el.transitionEnd(() => {
        $el.removeClass('toolbar-transitioning');
      });
    }
    $el.removeClass('toolbar-hidden');
    $el.trigger('toolbar:show');
    app.emit('toolbarShow', $el[0]);
  },
  initToolbarOnScroll(pageEl) {
    const app = this;
    const $pageEl = $(pageEl);
    let $toolbarEl = $pageEl.parents('.view').children('.toolbar');
    if ($toolbarEl.length === 0) {
      $toolbarEl = $pageEl.find('.toolbar');
    }
    if ($toolbarEl.length === 0) {
      $toolbarEl = $pageEl.parents('.views').children('.tabbar, .tabbar-labels');
    }
    if ($toolbarEl.length === 0) {
      return;
    }
    let previousScrollTop;
    let currentScrollTop;
    let scrollHeight;
    let offsetHeight;
    let reachEnd;
    let action;
    let toolbarHidden;
    function handleScroll(e) {
      if ($pageEl.hasClass('page-with-card-opened')) return;
      if ($pageEl.hasClass('page-previous')) return;
      const scrollContent = this;
      if (e && e.target && e.target !== scrollContent) {
        return;
      }
      currentScrollTop = scrollContent.scrollTop;
      scrollHeight = scrollContent.scrollHeight;
      offsetHeight = scrollContent.offsetHeight;
      reachEnd = currentScrollTop + offsetHeight >= scrollHeight;
      toolbarHidden = $toolbarEl.hasClass('toolbar-hidden');
      if (reachEnd) {
        if (app.params.toolbar.showOnPageScrollEnd) {
          action = 'show';
        }
      } else if (previousScrollTop > currentScrollTop) {
        if (app.params.toolbar.showOnPageScrollTop || currentScrollTop <= 44) {
          action = 'show';
        } else {
          action = 'hide';
        }
      } else if (currentScrollTop > 44) {
        action = 'hide';
      } else {
        action = 'show';
      }
      if (action === 'show' && toolbarHidden) {
        app.toolbar.show($toolbarEl);
        toolbarHidden = false;
      } else if (action === 'hide' && !toolbarHidden) {
        app.toolbar.hide($toolbarEl);
        toolbarHidden = true;
      }
      previousScrollTop = currentScrollTop;
    }
    $pageEl.on('scroll', '.page-content', handleScroll, true);
    $pageEl[0].f7ScrollToolbarHandler = handleScroll;
  }
};
var Toolbar$1 = {
  name: 'toolbar',
  create() {
    const app = this;
    bindMethods(app, {
      toolbar: Toolbar
    });
  },
  params: {
    toolbar: {
      hideOnPageScroll: false,
      showOnPageScrollEnd: true,
      showOnPageScrollTop: true
    }
  },
  on: {
    pageBeforeRemove(page) {
      if (page.$el[0].f7ScrollToolbarHandler) {
        page.$el.off('scroll', '.page-content', page.$el[0].f7ScrollToolbarHandler, true);
      }
    },
    pageBeforeIn(page) {
      const app = this;
      let $toolbarEl = page.$el.parents('.view').children('.toolbar');
      if ($toolbarEl.length === 0) {
        $toolbarEl = page.$el.parents('.views').children('.tabbar, .tabbar-labels');
      }
      if ($toolbarEl.length === 0) {
        $toolbarEl = page.$el.find('.toolbar');
      }
      if ($toolbarEl.length === 0) {
        return;
      }
      if (page.$el.hasClass('no-toolbar')) {
        app.toolbar.hide($toolbarEl);
      } else {
        app.toolbar.show($toolbarEl);
      }
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.tabbar, .tabbar-labels').each(tabbarEl => {
        app.toolbar.init(tabbarEl);
      });
      if (app.params.toolbar.hideOnPageScroll || page.$el.find('.hide-toolbar-on-scroll').length || page.$el.hasClass('hide-toolbar-on-scroll') || page.$el.find('.hide-bars-on-scroll').length || page.$el.hasClass('hide-bars-on-scroll')) {
        if (page.$el.find('.keep-toolbar-on-scroll').length || page.$el.hasClass('keep-toolbar-on-scroll') || page.$el.find('.keep-bars-on-scroll').length || page.$el.hasClass('keep-bars-on-scroll')) {
          return;
        }
        app.toolbar.initToolbarOnScroll(page.el);
      }
    },
    init() {
      const app = this;
      app.$el.find('.tabbar, .tabbar-labels').each(tabbarEl => {
        app.toolbar.init(tabbarEl);
      });
    }
  },
  vnode: {
    tabbar: {
      insert(vnode) {
        const app = this;
        app.toolbar.init(vnode.elm);
      }
    }
  }
};

var Subnavbar = {
  name: 'subnavbar',
  on: {
    pageInit(page) {
      if (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length) {
        page.$el.addClass('page-with-subnavbar');
      }
      const $innerSubnavbars = page.$el.find('.subnavbar').filter(subnavbarEl => {
        return $(subnavbarEl).parents('.page')[0] === page.$el[0];
      });
      if ($innerSubnavbars.length) {
        page.$el.addClass('page-with-subnavbar');
      }
    }
  }
};

let TouchRipple$1 = class TouchRipple {
  constructor(app, $el, x, y) {
    const ripple = this;
    if (!$el) return undefined;
    const {
      left,
      top,
      width,
      height
    } = $el[0].getBoundingClientRect();
    const center = {
      x: x - left,
      y: y - top
    };
    let diameter = Math.max((height ** 2 + width ** 2) ** 0.5, 48);
    let isInset = false;
    const insetElements = app.params.touch.touchRippleInsetElements || '';
    if (insetElements && $el.is(insetElements)) {
      isInset = true;
    }
    if (isInset) {
      diameter = Math.max(Math.min(width, height), 48);
    }
    if (!isInset && $el.css('overflow') === 'hidden') {
      const distanceFromCenter = ((center.x - width / 2) ** 2 + (center.y - height / 2) ** 2) ** 0.5;
      const scale = (diameter / 2 + distanceFromCenter) / (diameter / 2);
      ripple.rippleTransform = `translate3d(0px, 0px, 0) scale(${scale})`;
    } else {
      // prettier-ignore
      ripple.rippleTransform = `translate3d(${-center.x + width / 2}px, ${-center.y + height / 2}px, 0) scale(1)`;
    }
    if (isInset) {
      $el.addClass('ripple-inset');
    }
    ripple.$rippleWaveEl = $(`<div class="ripple-wave" style="width: ${diameter}px; height: ${diameter}px; margin-top:-${diameter / 2}px; margin-left:-${diameter / 2}px; left:${center.x}px; top:${center.y}px; --f7-ripple-transform: ${ripple.rippleTransform}"></div>`);
    $el.prepend(ripple.$rippleWaveEl);
    ripple.$rippleWaveEl.animationEnd(() => {
      if (!ripple.$rippleWaveEl) return;
      if (ripple.$rippleWaveEl.hasClass('ripple-wave-out')) return;
      ripple.$rippleWaveEl.addClass('ripple-wave-in');
      if (ripple.shouldBeRemoved) {
        ripple.out();
      }
    });
    return ripple;
  }
  destroy() {
    let ripple = this;
    if (ripple.$rippleWaveEl) {
      ripple.$rippleWaveEl.remove();
    }
    Object.keys(ripple).forEach(key => {
      ripple[key] = null;
      delete ripple[key];
    });
    ripple = null;
  }
  out() {
    const ripple = this;
    const {
      $rippleWaveEl
    } = this;
    clearTimeout(ripple.removeTimeout);
    $rippleWaveEl.addClass('ripple-wave-out');
    ripple.removeTimeout = setTimeout(() => {
      ripple.destroy();
    }, 300);
    $rippleWaveEl.animationEnd(() => {
      clearTimeout(ripple.removeTimeout);
      ripple.destroy();
    });
  }
  remove() {
    const ripple = this;
    if (ripple.shouldBeRemoved) return;
    ripple.removeTimeout = setTimeout(() => {
      ripple.destroy();
    }, 400);
    ripple.shouldBeRemoved = true;
    if (ripple.$rippleWaveEl.hasClass('ripple-wave-in')) {
      ripple.out();
    }
  }
};

var TouchRipple = {
  name: 'touch-ripple',
  static: {
    TouchRipple: TouchRipple$1
  },
  create() {
    const app = this;
    app.touchRipple = {
      create() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return new TouchRipple$1(...args);
      }
    };
  }
};

const openedModals = [];
const dialogsQueue = [];
function clearDialogsQueue() {
  if (dialogsQueue.length === 0) return;
  const dialog = dialogsQueue.shift();
  dialog.open();
}
let Modal$1 = class Modal extends Framework7Class$1 {
  constructor(app, params) {
    super(params, [app]);
    const modal = this;
    const defaults = {};

    // Extend defaults with modules params
    modal.useModulesParams(defaults);
    modal.params = extend(defaults, params);
    modal.opened = false;
    let $containerEl = modal.params.containerEl ? $(modal.params.containerEl).eq(0) : app.$el;
    if (!$containerEl.length) $containerEl = app.$el;
    modal.$containerEl = $containerEl;
    modal.containerEl = $containerEl[0];

    // Install Modules
    modal.useModules();
    return this;
  }
  onOpen() {
    const modal = this;
    modal.opened = true;
    openedModals.push(modal);
    $('html').addClass(`with-modal-${modal.type.toLowerCase()}`);
    modal.$el.trigger(`modal:open ${modal.type.toLowerCase()}:open`);
    modal.emit(`local::open modalOpen ${modal.type}Open`, modal);
  }
  onOpened() {
    const modal = this;
    modal.$el.trigger(`modal:opened ${modal.type.toLowerCase()}:opened`);
    modal.emit(`local::opened modalOpened ${modal.type}Opened`, modal);
  }
  onClose() {
    const modal = this;
    modal.opened = false;
    if (!modal.type || !modal.$el) return;
    openedModals.splice(openedModals.indexOf(modal), 1);
    $('html').removeClass(`with-modal-${modal.type.toLowerCase()}`);
    modal.$el.trigger(`modal:close ${modal.type.toLowerCase()}:close`);
    modal.emit(`local::close modalClose ${modal.type}Close`, modal);
  }
  onClosed() {
    const modal = this;
    if (!modal.type || !modal.$el) return;
    modal.$el.removeClass('modal-out');
    modal.$el.hide();
    if (modal.params.backdrop && (modal.params.backdropUnique || modal.forceBackdropUnique) && modal.$backdropEl) {
      modal.$backdropEl.remove();
    }
    modal.$el.trigger(`modal:closed ${modal.type.toLowerCase()}:closed`);
    modal.emit(`local::closed modalClosed ${modal.type}Closed`, modal);
  }
  open(animateModal) {
    const modal = this;
    const document = getDocument();
    const app = modal.app;
    const $el = modal.$el;
    const $backdropEl = modal.$backdropEl;
    const type = modal.type;
    let animate = true;
    if (typeof animateModal !== 'undefined') animate = animateModal;else if (typeof modal.params.animate !== 'undefined') {
      animate = modal.params.animate;
    }
    if (!$el || $el.hasClass('modal-in')) {
      if (animateModal === false && $el[0] && type !== 'dialog') {
        $el[0].style.display = 'block';
      }
      return modal;
    }
    if (type === 'dialog' && app.params.modal.queueDialogs) {
      let pushToQueue;
      if ($('.dialog.modal-in').length > 0) {
        pushToQueue = true;
      } else if (openedModals.length > 0) {
        openedModals.forEach(openedModal => {
          if (openedModal.type === 'dialog') pushToQueue = true;
        });
      }
      if (pushToQueue) {
        dialogsQueue.push(modal);
        return modal;
      }
    }
    const $modalParentEl = $el.parent();
    const wasInDom = $el.parents(document).length > 0;
    if (!$modalParentEl.is(modal.$containerEl)) {
      modal.$containerEl.append($el);
      modal.once(`${type}Closed`, () => {
        if (wasInDom) {
          $modalParentEl.append($el);
        } else {
          $el.remove();
        }
      });
    }
    // Show Modal
    $el.show();
    if (modal.params.backdrop && (modal.params.backdropUnique || modal.forceBackdropUnique) && modal.$backdropEl) {
      modal.$backdropEl.insertBefore($el);
    }

    /* eslint no-underscore-dangle: ["error", { "allow": ["_clientLeft"] }] */
    modal._clientLeft = $el[0].clientLeft;

    // Modal
    function transitionEnd() {
      if ($el.hasClass('modal-out')) {
        modal.onClosed();
      } else if ($el.hasClass('modal-in')) {
        modal.onOpened();
      }
    }
    if (animate) {
      if ($backdropEl) {
        $backdropEl.removeClass('not-animated');
        $backdropEl.addClass('backdrop-in');
      }
      $el.animationEnd(() => {
        transitionEnd();
      });
      $el.transitionEnd(() => {
        transitionEnd();
      });
      $el.removeClass('modal-out not-animated').addClass('modal-in');
      modal.onOpen();
    } else {
      if ($backdropEl) {
        $backdropEl.addClass('backdrop-in not-animated');
      }
      $el.removeClass('modal-out').addClass('modal-in not-animated');
      modal.onOpen();
      modal.onOpened();
    }
    return modal;
  }
  close(animateModal) {
    const modal = this;
    const $el = modal.$el;
    const $backdropEl = modal.$backdropEl;
    let animate = true;
    if (typeof animateModal !== 'undefined') animate = animateModal;else if (typeof modal.params.animate !== 'undefined') {
      animate = modal.params.animate;
    }
    if (!$el || !$el.hasClass('modal-in')) {
      if (dialogsQueue.indexOf(modal) >= 0) {
        dialogsQueue.splice(dialogsQueue.indexOf(modal), 1);
      }
      return modal;
    }

    // backdrop
    if ($backdropEl) {
      let needToHideBackdrop = true;
      if (modal.type === 'popup') {
        modal.$el.prevAll('.popup.modal-in').add(modal.$el.nextAll('.popup.modal-in')).each(popupEl => {
          const popupInstance = popupEl.f7Modal;
          if (!popupInstance) return;
          if (popupInstance.params.closeByBackdropClick && popupInstance.params.backdrop && popupInstance.backdropEl === modal.backdropEl) {
            needToHideBackdrop = false;
          }
        });
      }
      if (needToHideBackdrop) {
        $backdropEl[animate ? 'removeClass' : 'addClass']('not-animated');
        $backdropEl.removeClass('backdrop-in');
      }
    }

    // Modal
    $el[animate ? 'removeClass' : 'addClass']('not-animated');
    function transitionEnd() {
      if ($el.hasClass('modal-out')) {
        modal.onClosed();
      } else if ($el.hasClass('modal-in')) {
        modal.onOpened();
      }
    }
    if (animate) {
      $el.animationEnd(() => {
        transitionEnd();
      });
      $el.transitionEnd(() => {
        transitionEnd();
      });
      $el.removeClass('modal-in').addClass('modal-out');
      // Emit close
      modal.onClose();
    } else {
      $el.addClass('not-animated').removeClass('modal-in').addClass('modal-out');
      // Emit close
      modal.onClose();
      modal.onClosed();
    }
    if (modal.type === 'dialog') {
      clearDialogsQueue();
    }
    return modal;
  }
  destroy() {
    const modal = this;
    if (modal.destroyed) return;
    modal.emit(`local::beforeDestroy modalBeforeDestroy ${modal.type}BeforeDestroy`, modal);
    if (modal.$el) {
      modal.$el.trigger(`modal:beforedestroy ${modal.type.toLowerCase()}:beforedestroy`);
      if (modal.$el.length && modal.$el[0].f7Modal) {
        delete modal.$el[0].f7Modal;
      }
    }
    deleteProps(modal);
    modal.destroyed = true;
  }
};
var Modal$2 = Modal$1;

class CustomModal extends Modal$2 {
  constructor(app, params) {
    const extendedParams = extend({
      backdrop: true,
      closeByBackdropClick: true,
      on: {}
    }, params);

    // Extends with open/close Modal methods;
    super(app, extendedParams);
    const customModal = this;
    customModal.params = extendedParams;

    // Find Element
    let $el;
    if (!customModal.params.el) {
      $el = $(customModal.params.content);
    } else {
      $el = $(customModal.params.el);
    }
    if ($el && $el.length > 0 && $el[0].f7Modal) {
      return $el[0].f7Modal;
    }
    if ($el.length === 0) {
      return customModal.destroy();
    }
    let $backdropEl;
    if (customModal.params.backdrop) {
      $backdropEl = app.$el.children('.custom-modal-backdrop');
      if ($backdropEl.length === 0) {
        $backdropEl = $('<div class="custom-modal-backdrop"></div>');
        app.$el.append($backdropEl);
      }
    }
    function handleClick(e) {
      if (!customModal || customModal.destroyed) return;
      if ($backdropEl && e.target === $backdropEl[0]) {
        customModal.close();
      }
    }
    customModal.on('customModalOpened', () => {
      if (customModal.params.closeByBackdropClick && customModal.params.backdrop) {
        app.on('click', handleClick);
      }
    });
    customModal.on('customModalClose', () => {
      if (customModal.params.closeByBackdropClick && customModal.params.backdrop) {
        app.off('click', handleClick);
      }
    });
    extend(customModal, {
      app,
      $el,
      el: $el[0],
      $backdropEl,
      backdropEl: $backdropEl && $backdropEl[0],
      type: 'customModal'
    });
    $el[0].f7Modal = customModal;
    return customModal;
  }
}
var CustomModal$1 = CustomModal;

var Modal = {
  name: 'modal',
  static: {
    Modal: Modal$2,
    CustomModal: CustomModal$1
  },
  create() {
    const app = this;
    app.customModal = {
      create(params) {
        return new CustomModal$1(app, params);
      }
    };
  },
  params: {
    modal: {
      queueDialogs: true
    }
  }
};

/**
 * Framework7 7.0.9
 * Full featured mobile HTML framework for building iOS & Android apps
 * https://framework7.io/
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 28, 2022
 */
Router$1.use([RouterComponentLoaderModule]);
Framework7$1.use([DeviceModule, SupportModule, UtilsModule, ResizeModule, RequestModule, TouchModule, ClicksModule, RouterModule, HistoryModule, ComponentModule, ServiceWorkerModule, StoreModule, Statusbar$1, View, Navbar$1, Toolbar$1, Subnavbar, TouchRipple, Modal]);

function swipePanel(panel) {
  const app = panel.app;
  if (panel.swipeInitialized) {
    return;
  }
  extend(panel, {
    swipeable: true,
    swipeInitialized: true
  });
  const params = panel.params;
  const {
    $el,
    $backdropEl,
    side,
    effect
  } = panel;
  let otherPanel;
  let isTouched;
  let isGestureStarted;
  let isMoved;
  let isScrolling;
  let isInterrupted;
  const touchesStart = {};
  let touchStartTime;
  let touchesDiff;
  let translate;
  let backdropOpacity;
  let panelWidth;
  let direction;
  let $viewEl;
  let touchMoves = 0;
  function handleTouchStart(e) {
    if (!panel.swipeable || isGestureStarted) return;
    if (!app.panel.allowOpen || !params.swipe && !params.swipeOnlyClose || isTouched) return;
    if ($('.modal-in:not(.toast):not(.notification), .photo-browser-in').length > 0) return;
    otherPanel = app.panel.get(side === 'left' ? 'right' : 'left') || {};
    const otherPanelOpened = otherPanel.opened && otherPanel.$el && !otherPanel.$el.hasClass('panel-in-breakpoint');
    if (!panel.opened && otherPanelOpened) {
      return;
    }
    if (!params.swipeOnlyClose) {
      if (otherPanelOpened) return;
    }
    if (e.target && e.target.nodeName.toLowerCase() === 'input' && e.target.type === 'range') return;
    if ($(e.target).closest('.range-slider, .tabs-swipeable-wrap, .calendar-months, .no-swipe-panel, .card-opened').length > 0) return;
    touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    if (params.swipeOnlyClose && !panel.opened) {
      return;
    }
    if (params.swipeActiveArea && !panel.opened) {
      if (side === 'left') {
        if (touchesStart.x > params.swipeActiveArea) return;
      }
      if (side === 'right') {
        if (touchesStart.x < app.width - params.swipeActiveArea) return;
      }
    }
    touchMoves = 0;
    $viewEl = $(panel.getViewEl());
    isMoved = false;
    isTouched = true;
    isScrolling = undefined;
    isInterrupted = false;
    touchStartTime = now();
    direction = undefined;
  }
  function handleTouchMove(e) {
    if (!isTouched || isGestureStarted || isInterrupted) return;
    touchMoves += 1;
    if (touchMoves < 2) return;
    if (e.f7PreventSwipePanel || app.preventSwipePanelBySwipeBack || app.preventSwipePanel) {
      isTouched = false;
      return;
    }
    const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (typeof isScrolling === 'undefined') {
      isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x));
    }
    if (isScrolling) {
      isTouched = false;
      return;
    }
    if (!direction) {
      if (pageX > touchesStart.x) {
        direction = 'to-right';
      } else {
        direction = 'to-left';
      }
      if (params.swipeActiveArea > 0 && !panel.opened) {
        if (side === 'left' && touchesStart.x > params.swipeActiveArea) {
          isTouched = false;
          return;
        }
        if (side === 'right' && touchesStart.x < app.width - params.swipeActiveArea) {
          isTouched = false;
          return;
        }
      }
      if ($el.hasClass('panel-in-breakpoint')) {
        isTouched = false;
        return;
      }
      if (side === 'left' && direction === 'to-left' && !$el.hasClass('panel-in') || side === 'right' && direction === 'to-right' && !$el.hasClass('panel-in')) {
        isTouched = false;
        return;
      }
    }
    let threshold = panel.opened ? 0 : -params.swipeThreshold;
    if (side === 'right') threshold = -threshold;
    if (!isMoved) {
      if (!panel.opened) {
        panel.insertToRoot();
        $el.addClass('panel-in-swipe');
        if ($backdropEl) $backdropEl.css('visibility', 'visible');
        $el.trigger('panel:swipeopen');
        panel.emit('local::swipeOpen panelSwipeOpen', panel);
      }
      panelWidth = $el[0].offsetWidth;
      if (effect === 'reveal' && $el.hasClass('panel-in-collapsed')) {
        panelWidth -= parseFloat($viewEl.css(`margin-${side}`));
      }
      $el.transition(0);
    }
    isMoved = true;
    if (e.cancelable) {
      e.preventDefault();
    }
    touchesDiff = pageX - touchesStart.x + threshold;
    if (side === 'right') {
      if (effect === 'cover' || effect === 'push') {
        translate = touchesDiff + (panel.opened ? 0 : panelWidth);
        if (translate < 0) translate = 0;
        if (translate > panelWidth) {
          translate = panelWidth;
        }
      } else {
        translate = touchesDiff - (panel.opened ? panelWidth : 0);
        if (translate > 0) translate = 0;
        if (translate < -panelWidth) {
          translate = -panelWidth;
        }
      }
    } else {
      translate = touchesDiff + (panel.opened ? panelWidth : 0);
      if (translate < 0) translate = 0;
      if (translate > panelWidth) {
        translate = panelWidth;
      }
    }
    const noFollowProgress = Math.abs(translate / panelWidth);
    if (effect === 'reveal') {
      if (!params.swipeNoFollow) {
        $viewEl.transform(`translate3d(${translate}px,0,0)`).transition(0);
        if ($backdropEl) $backdropEl.transform(`translate3d(${translate}px,0,0)`).transition(0);
      }
      $el.trigger('panel:swipe', Math.abs(translate / panelWidth));
      panel.emit('local::swipe panelSwipe', panel, Math.abs(translate / panelWidth));
    } else {
      if (side === 'left') translate -= panelWidth;
      if (!params.swipeNoFollow) {
        backdropOpacity = 1 - Math.abs(translate / panelWidth);
        if ($backdropEl) {
          $backdropEl.transition(0);
          $backdropEl.css({
            opacity: backdropOpacity
          });
        }
        $el.transform(`translate3d(${translate}px,0,0)`).transition(0);
        if (effect === 'push') {
          const viewTranslate = side === 'left' ? translate + panelWidth : translate - panelWidth;
          $viewEl.transform(`translate3d(${viewTranslate}px,0,0)`).transition(0);
          if ($backdropEl) {
            $backdropEl.transform(`translate3d(${viewTranslate}px,0,0)`).transition(0);
          }
        }
      }
      $el.trigger('panel:swipe', Math.abs(translate / panelWidth));
      panel.emit('local::swipe panelSwipe', panel, Math.abs(translate / panelWidth));
    }
    if (params.swipeNoFollow) {
      const stateChanged = panel.opened && noFollowProgress === 0 || !panel.opened && noFollowProgress === 1;
      if (stateChanged) {
        isInterrupted = true;
        // eslint-disable-next-line
        handleTouchEnd(e);
      }
    }
  }
  function handleTouchEnd(e) {
    if (!isTouched || !isMoved) {
      isTouched = false;
      isMoved = false;
      return;
    }
    const isGesture = e.type === 'gesturestart' || isGestureStarted;
    isTouched = false;
    isMoved = false;
    const timeDiff = new Date().getTime() - touchStartTime;
    let action;
    const edge = (translate === 0 || Math.abs(translate) === panelWidth) && !params.swipeNoFollow;
    const threshold = params.swipeThreshold || 0;
    if (isGesture) {
      action = 'reset';
    } else if (!panel.opened) {
      if (Math.abs(touchesDiff) < threshold) {
        action = 'reset';
      } else if (effect === 'cover' || effect === 'push') {
        if (translate === 0) {
          action = 'swap'; // open
        } else if (timeDiff < 300 && Math.abs(translate) > 0) {
          action = 'swap'; // open
        } else if (timeDiff >= 300 && Math.abs(translate) < panelWidth / 2) {
          action = 'swap'; // open
        } else {
          action = 'reset'; // close
        }
      } else if (translate === 0) {
        action = 'reset';
      } else if (timeDiff < 300 && Math.abs(translate) > 0 || timeDiff >= 300 && Math.abs(translate) >= panelWidth / 2) {
        action = 'swap';
      } else {
        action = 'reset';
      }
    } else if (effect === 'cover' || effect === 'push') {
      if (translate === 0) {
        action = 'reset'; // open
      } else if (timeDiff < 300 && Math.abs(translate) > 0) {
        action = 'swap'; // open
      } else if (timeDiff >= 300 && Math.abs(translate) < panelWidth / 2) {
        action = 'reset'; // open
      } else {
        action = 'swap'; // close
      }
    } else if (translate === -panelWidth) {
      action = 'reset';
    } else if (timeDiff < 300 && Math.abs(translate) >= 0 || timeDiff >= 300 && Math.abs(translate) <= panelWidth / 2) {
      if (side === 'left' && translate === panelWidth) action = 'reset';else action = 'swap';
    } else {
      action = 'reset';
    }
    if (action === 'swap') {
      if (panel.opened) {
        panel.close(!edge);
      } else {
        panel.open(!edge);
      }
    }
    let removePanelInClass = true;
    if (action === 'reset') {
      if (!panel.opened) {
        if (edge) {
          // edge position
          $el.removeClass('panel-in-swipe');
        } else {
          removePanelInClass = false;
          const target = effect === 'reveal' ? $viewEl : $el;
          panel.setStateClasses('before-closing');
          target.transitionEnd(() => {
            if ($el.hasClass('panel-in')) return;
            $el.removeClass('panel-in-swipe');
            panel.setStateClasses('after-closing');
          });
        }
      }
    }
    if (effect === 'reveal' || effect === 'push') {
      nextFrame$1(() => {
        $viewEl.transition('');
        $viewEl.transform('');
      });
    }
    if (removePanelInClass) {
      $el.removeClass('panel-in-swipe');
    }
    $el.transition('').transform('');
    if ($backdropEl) {
      $backdropEl.transform('').transition('').css({
        opacity: '',
        visibility: ''
      });
    }
  }
  function handleGestureStart(e) {
    isGestureStarted = true;
    handleTouchEnd(e);
  }
  function handleGestureEnd() {
    isGestureStarted = false;
  }

  // Add Events
  app.on('touchstart:passive', handleTouchStart);
  app.on('touchmove:active', handleTouchMove);
  app.on('touchend:passive', handleTouchEnd);
  app.on('gesturestart', handleGestureStart);
  app.on('gestureend', handleGestureEnd);
  panel.on('panelDestroy', () => {
    app.off('touchstart:passive', handleTouchStart);
    app.off('touchmove:active', handleTouchMove);
    app.off('touchend:passive', handleTouchEnd);
    app.off('gesturestart', handleGestureStart);
    app.off('gestureend', handleGestureEnd);
  });
}

function resizablePanel(panel) {
  const app = panel.app;
  const support = getSupport();
  if (panel.resizableInitialized) return;
  extend(panel, {
    resizable: true,
    resizableWidth: null,
    resizableInitialized: true
  });
  const $htmlEl = $('html');
  const {
    $el,
    $backdropEl,
    side,
    effect
  } = panel;
  if (!$el) return;
  let isTouched;
  let isMoved;
  const touchesStart = {};
  let touchesDiff;
  let panelWidth;
  let $viewEl;
  let panelMinWidth;
  let panelMaxWidth;
  let visibleByBreakpoint;
  function transformCSSWidth(v) {
    if (!v) return null;
    if (v.indexOf('%') >= 0 || v.indexOf('vw') >= 0) {
      return parseInt(v, 10) / 100 * app.width;
    }
    const newV = parseInt(v, 10);
    if (Number.isNaN(newV)) return null;
    return newV;
  }
  function isResizable() {
    return panel.resizable && $el.hasClass('panel-resizable');
  }
  function handleTouchStart(e) {
    if (!isResizable()) return;
    touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    isMoved = false;
    isTouched = true;
    panelMinWidth = transformCSSWidth($el.css('min-width'));
    panelMaxWidth = transformCSSWidth($el.css('max-width'));
    visibleByBreakpoint = $el.hasClass('panel-in-breakpoint');
  }
  function handleTouchMove(e) {
    if (!isTouched) return;
    const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    if (!isMoved) {
      panelWidth = $el[0].offsetWidth;
      $el.transition(0);
      $el.addClass('panel-resizing');
      $htmlEl.css('cursor', 'col-resize');
      if (effect !== 'cover' || visibleByBreakpoint) {
        $viewEl = $(panel.getViewEl());
        if (panel.$containerEl && panel.$containerEl.hasClass('page')) {
          $viewEl.add(panel.$containerEl.children('.page-content, .tabs, .fab'));
        }
      }
      if (effect !== 'cover' && !visibleByBreakpoint) {
        $backdropEl.transition(0);
        $viewEl.transition(0);
      }
    }
    isMoved = true;
    e.preventDefault();
    touchesDiff = pageX - touchesStart.x;
    let newPanelWidth = side === 'left' ? panelWidth + touchesDiff : panelWidth - touchesDiff;
    if (panelMinWidth && !Number.isNaN(panelMinWidth)) {
      newPanelWidth = Math.max(newPanelWidth, panelMinWidth);
    }
    if (panelMaxWidth && !Number.isNaN(panelMaxWidth)) {
      newPanelWidth = Math.min(newPanelWidth, panelMaxWidth);
    }
    newPanelWidth = Math.min(Math.max(newPanelWidth, 0), app.width);
    panel.resizableWidth = newPanelWidth;
    $el[0].style.width = `${newPanelWidth}px`;
    if (effect !== 'cover' && !visibleByBreakpoint) {
      if ($viewEl) {
        $viewEl.transform(`translate3d(${side === 'left' ? newPanelWidth : -newPanelWidth}px, 0, 0)`);
      }
      if ($backdropEl) {
        $backdropEl.transform(`translate3d(${side === 'left' ? newPanelWidth : -newPanelWidth}px, 0, 0)`);
      }
    } else if (visibleByBreakpoint && $viewEl) {
      $viewEl.css(`margin-${side}`, `${newPanelWidth}px`);
    }
    $el.trigger('panel:resize', newPanelWidth);
    panel.emit('local::resize panelResize', panel, newPanelWidth);
  }
  function handleTouchEnd() {
    $('html').css('cursor', '');
    if (!isTouched || !isMoved) {
      isTouched = false;
      isMoved = false;
      return;
    }
    isTouched = false;
    isMoved = false;
    $htmlEl[0].style.setProperty(`--f7-panel-${side}-width`, `${panel.resizableWidth}px`);
    $el[0].style.width = '';
    if (effect !== 'cover' && !visibleByBreakpoint) {
      $viewEl.transform('');
      $backdropEl.transform('');
    }
    $el.removeClass('panel-resizing');
    nextFrame$1(() => {
      $el.transition('');
      if (effect !== 'cover') {
        $backdropEl.transition('');
        if ($viewEl) $viewEl.transition('');
      }
    });
  }
  function handleResize() {
    if (!panel.opened || !panel.resizableWidth) return;
    panelMinWidth = transformCSSWidth($el.css('min-width'));
    panelMaxWidth = transformCSSWidth($el.css('max-width'));
    if (panelMinWidth && !Number.isNaN(panelMinWidth) && panel.resizableWidth < panelMinWidth) {
      panel.resizableWidth = Math.max(panel.resizableWidth, panelMinWidth);
    }
    if (panelMaxWidth && !Number.isNaN(panelMaxWidth) && panel.resizableWidth > panelMaxWidth) {
      panel.resizableWidth = Math.min(panel.resizableWidth, panelMaxWidth);
    }
    panel.resizableWidth = Math.min(Math.max(panel.resizableWidth, 0), app.width);
    $htmlEl[0].style.setProperty(`--f7-panel-${side}-width`, `${panel.resizableWidth}px`);
  }
  if (panel.$el.find('.panel-resize-handler').length === 0) {
    panel.$el.append('<div class="panel-resize-handler"></div>');
  }
  panel.$resizeHandlerEl = panel.$el.children('.panel-resize-handler');
  $el.addClass('panel-resizable');

  // Add Events
  const passive = support.passiveListener ? {
    passive: true
  } : false;
  panel.$el.on(app.touchEvents.start, '.panel-resize-handler', handleTouchStart, passive);
  app.on('touchmove:active', handleTouchMove);
  app.on('touchend:passive', handleTouchEnd);
  app.on('resize', handleResize);
  panel.on('beforeOpen', handleResize);
  panel.once('panelDestroy', () => {
    $el.removeClass('panel-resizable');
    panel.$resizeHandlerEl.remove();
    panel.$el.off(app.touchEvents.start, '.panel-resize-handler', handleTouchStart, passive);
    app.off('touchmove:active', handleTouchMove);
    app.off('touchend:passive', handleTouchEnd);
    app.off('resize', handleResize);
    panel.off('beforeOpen', handleResize);
  });
}

let Panel$1 = class Panel extends Framework7Class$1 {
  constructor(app, params) {
    if (params === void 0) {
      params = {};
    }
    const extendedParams = extend({
      on: {}
    }, app.params.panel, params);
    super(extendedParams, [app]);
    const panel = this;
    panel.params = extendedParams;
    panel.$containerEl = panel.params.containerEl ? $(panel.params.containerEl).eq(0) : app.$el;
    panel.containerEl = panel.$containerEl[0];
    if (!panel.containerEl) {
      panel.$containerEl = app.$el;
      panel.containerEl = app.$el[0];
    }
    let $el;
    if (panel.params.el) {
      $el = $(panel.params.el).eq(0);
    } else if (panel.params.content) {
      $el = $(panel.params.content).filter(node => node.nodeType === 1).eq(0);
    }
    if ($el.length === 0) return panel;
    if ($el[0].f7Panel) return $el[0].f7Panel;
    $el[0].f7Panel = panel;
    let {
      side,
      effect,
      resizable
    } = panel.params;
    if (typeof side === 'undefined') side = $el.hasClass('panel-left') ? 'left' : 'right';
    if (typeof effect === 'undefined')
      // eslint-disable-next-line
      effect = $el.hasClass('panel-cover') ? 'cover' : $el.hasClass('panel-push') ? 'push' : 'reveal';
    if (typeof resizable === 'undefined') resizable = $el.hasClass('panel-resizable');
    let $backdropEl;
    if (panel.params.backdrop && panel.params.backdropEl) {
      $backdropEl = $(panel.params.backdropEl);
    } else if (panel.params.backdrop) {
      $backdropEl = panel.$containerEl.children('.panel-backdrop');
      if ($backdropEl.length === 0) {
        $backdropEl = $('<div class="panel-backdrop"></div>');
        panel.$containerEl.prepend($backdropEl);
      }
    }
    extend(panel, {
      app,
      side,
      effect,
      resizable,
      $el,
      el: $el[0],
      opened: false,
      $backdropEl,
      backdropEl: $backdropEl && $backdropEl[0]
    });

    // Install Modules
    panel.useModules();

    // Init
    panel.init();
    return panel;
  }
  getViewEl() {
    const panel = this;
    let viewEl;
    if (panel.$containerEl.children('.views').length > 0) {
      viewEl = panel.$containerEl.children('.views')[0];
    } else {
      viewEl = panel.$containerEl.children('.view')[0];
    }
    return viewEl;
  }
  setStateClasses(state) {
    const panel = this;
    const {
      side,
      el
    } = panel;
    const viewEl = panel.getViewEl();
    const panelInView = viewEl && viewEl.contains(el);
    const $targetEl = !viewEl || panelInView ? panel.$containerEl : $('html');
    if (state === 'open') {
      $targetEl.addClass(`with-panel with-panel-${panel.side}-${panel.effect}`);
    }
    if (state === 'before-closing') {
      $targetEl.addClass('with-panel-closing');
    }
    if (state === 'closing') {
      $targetEl.addClass('with-panel-closing');
      $targetEl.removeClass(`with-panel with-panel-${panel.side}-${panel.effect}`);
    }
    if (state === 'after-closing') {
      $targetEl.removeClass('with-panel-closing');
    }
    if (state === 'closed') {
      $targetEl.removeClass(`with-panel-${side}-reveal with-panel-${side}-cover with-panel-${side}-push with-panel`);
    }
  }
  enableVisibleBreakpoint() {
    const panel = this;
    panel.visibleBreakpointDisabled = false;
    panel.setVisibleBreakpoint();
    return panel;
  }
  disableVisibleBreakpoint() {
    const panel = this;
    panel.visibleBreakpointDisabled = true;
    panel.setVisibleBreakpoint();
    return panel;
  }
  toggleVisibleBreakpoint() {
    const panel = this;
    panel.visibleBreakpointDisabled = !panel.visibleBreakpointDisabled;
    panel.setVisibleBreakpoint();
    return panel;
  }
  setVisibleBreakpoint(emitEvents) {
    if (emitEvents === void 0) {
      emitEvents = true;
    }
    const panel = this;
    const app = panel.app;
    if (!panel.visibleBreakpointResizeHandler) {
      panel.visibleBreakpointResizeHandler = function visibleBreakpointResizeHandler() {
        panel.setVisibleBreakpoint();
      };
      app.on('resize', panel.visibleBreakpointResizeHandler);
    }
    const {
      side,
      $el,
      $containerEl,
      params,
      visibleBreakpointDisabled
    } = panel;
    const breakpoint = params.visibleBreakpoint;
    const $viewEl = $(panel.getViewEl());
    const wasVisible = $el.hasClass('panel-in-breakpoint');
    if ($containerEl && $containerEl.hasClass('page')) {
      $viewEl.add($containerEl.children('.page-content, .tabs, .fab'));
    }
    if (app.width >= breakpoint && typeof breakpoint !== 'undefined' && breakpoint !== null && !visibleBreakpointDisabled) {
      if (!wasVisible) {
        panel.setStateClasses('closed');
        $el.addClass('panel-in-breakpoint').removeClass('panel-in panel-in-collapsed');
        panel.onOpen(false);
        panel.onOpened();
        $viewEl.css({
          [`margin-${side}`]: `${$el.width()}px`
        });
        app.allowPanelOpen = true;
        if (emitEvents) {
          panel.emit('local::breakpoint panelBreakpoint', panel);
          panel.$el.trigger('panel:breakpoint');
        }
      } else {
        $viewEl.css({
          [`margin-${side}`]: `${$el.width()}px`
        });
      }
    } else if (wasVisible) {
      $el.removeClass('panel-in-breakpoint panel-in');
      panel.onClose();
      panel.onClosed();
      $viewEl.css({
        [`margin-${side}`]: ''
      });
      if (emitEvents) {
        panel.emit('local::breakpoint panelBreakpoint', panel);
        panel.$el.trigger('panel:breakpoint');
      }
    }
  }
  enableCollapsedBreakpoint() {
    const panel = this;
    panel.collapsedBreakpointDisabled = false;
    panel.setCollapsedBreakpoint();
    return panel;
  }
  disableCollapsedBreakpoint() {
    const panel = this;
    panel.collapsedBreakpointDisabled = true;
    panel.setCollapsedBreakpoint();
    return panel;
  }
  toggleCollapsedBreakpoint() {
    const panel = this;
    panel.collapsedBreakpointDisabled = !panel.collapsedBreakpointDisabled;
    panel.setCollapsedBreakpoint();
    return panel;
  }
  setCollapsedBreakpoint(emitEvents) {
    if (emitEvents === void 0) {
      emitEvents = true;
    }
    const panel = this;
    const app = panel.app;
    if (!panel.collapsedBreakpointResizeHandler) {
      panel.collapsedBreakpointResizeHandler = function collapsedBreakpointResizeHandler() {
        panel.setCollapsedBreakpoint();
      };
      app.on('resize', panel.collapsedBreakpointResizeHandler);
    }
    const {
      $el,
      params,
      collapsedBreakpointDisabled
    } = panel;
    if ($el.hasClass('panel-in-breakpoint')) return;
    const breakpoint = params.collapsedBreakpoint;
    const wasVisible = $el.hasClass('panel-in-collapsed');
    if (app.width >= breakpoint && typeof breakpoint !== 'undefined' && breakpoint !== null && !collapsedBreakpointDisabled) {
      if (!wasVisible) {
        panel.setStateClasses('closed');
        $el.addClass('panel-in-collapsed').removeClass('panel-in');
        panel.collapsed = true;
        app.allowPanelOpen = true;
        if (emitEvents) {
          panel.emit('local::collapsedBreakpoint panelCollapsedBreakpoint', panel);
          panel.$el.trigger('panel:collapsedbreakpoint');
        }
      }
    } else if (wasVisible) {
      $el.removeClass('panel-in-collapsed panel-in');
      panel.collapsed = false;
      if (emitEvents) {
        panel.emit('local::collapsedBreakpoint panelCollapsedBreakpoint', panel);
        panel.$el.trigger('panel:collapsedbreakpoint');
      }
    }
  }
  enableResizable() {
    const panel = this;
    if (panel.resizableInitialized) {
      panel.resizable = true;
      panel.$el.addClass('panel-resizable');
    } else {
      resizablePanel(panel);
    }
    return panel;
  }
  disableResizable() {
    const panel = this;
    panel.resizable = false;
    panel.$el.removeClass('panel-resizable');
    return panel;
  }
  enableSwipe() {
    const panel = this;
    if (panel.swipeInitialized) {
      panel.swipeable = true;
    } else {
      swipePanel(panel);
    }
    return panel;
  }
  disableSwipe() {
    const panel = this;
    panel.swipeable = false;
    return panel;
  }
  onOpen(modifyHtmlClasses) {
    if (modifyHtmlClasses === void 0) {
      modifyHtmlClasses = true;
    }
    const panel = this;
    const app = panel.app;
    panel.opened = true;
    app.panel.allowOpen = false;
    panel.$el.trigger('panel:beforeopen');
    panel.emit('local::beforeOpen panelBeforeOpen', panel);
    if (modifyHtmlClasses) {
      panel.setStateClasses('open');
    }
    panel.$el.trigger('panel:open');
    panel.emit('local::open panelOpen', panel);
  }
  onOpened() {
    const panel = this;
    const app = panel.app;
    app.panel.allowOpen = true;
    panel.$el.trigger('panel:opened');
    panel.emit('local::opened panelOpened', panel);
  }
  onClose() {
    const panel = this;
    const app = panel.app;
    panel.opened = false;
    app.panel.allowOpen = false;
    panel.$el.trigger('panel:beforeclose');
    panel.emit('local::beforeClose panelBeforeClose', panel);
    panel.setStateClasses('closing');
    panel.$el.trigger('panel:close');
    panel.emit('local::close panelClose', panel);
  }
  onClosed() {
    const panel = this;
    const app = panel.app;
    app.panel.allowOpen = true;
    panel.setStateClasses('after-closing');
    panel.$el.removeClass('panel-out');
    if (panel.$backdropEl) {
      const otherPanel = app.panel.get('.panel-in');
      const shouldHideBackdrop = !otherPanel || otherPanel && !otherPanel.$backdropEl;
      if (shouldHideBackdrop) {
        panel.$backdropEl.removeClass('panel-backdrop-in');
      }
    }
    panel.$el.trigger('panel:closed');
    panel.emit('local::closed panelClosed', panel);
  }
  toggle(animate) {
    if (animate === void 0) {
      animate = true;
    }
    const panel = this;
    const breakpoint = panel.params.visibleBreakpoint;
    const app = panel.app;
    if (app.width >= breakpoint && typeof breakpoint !== 'undefined' && breakpoint !== null) {
      return panel.toggleVisibleBreakpoint();
    }
    if (panel.opened) panel.close(animate);else panel.open(animate);
    return panel;
  }
  insertToRoot() {
    const panel = this;
    const document = getDocument();
    const {
      $el,
      $backdropEl,
      $containerEl
    } = panel;
    const $panelParentEl = $el.parent();
    const wasInDom = $el.parents(document).length > 0;
    if (!$panelParentEl.is($containerEl) || $el.prevAll('.views, .view').length) {
      const $insertBeforeEl = $containerEl.children('.panel, .views, .view').eq(0);
      const $insertAfterEl = $containerEl.children('.panel-backdrop').eq(0);
      if ($insertBeforeEl.length) {
        $el.insertBefore($insertBeforeEl);
      } else if ($insertAfterEl) {
        $el.insertBefore($insertAfterEl);
      } else {
        $containerEl.prepend($el);
      }
      if ($backdropEl && $backdropEl.length && (!$backdropEl.parent().is($containerEl) && $backdropEl.nextAll('.panel').length === 0 || $backdropEl.parent().is($containerEl) && $backdropEl.nextAll('.panel').length === 0)) {
        $backdropEl.insertBefore($el);
      }
      panel.once('panelClosed', () => {
        if (wasInDom) {
          $panelParentEl.append($el);
        } else {
          $el.remove();
        }
      });
    }
  }
  open(animate) {
    if (animate === void 0) {
      animate = true;
    }
    const panel = this;
    const app = panel.app;
    if (!app.panel.allowOpen) return false;
    const {
      effect,
      $el,
      $backdropEl,
      opened,
      $containerEl
    } = panel;
    if (!$el || $el.hasClass('panel-in')) {
      return panel;
    }
    panel.insertToRoot();

    // Ignore if opened
    if (opened || $el.hasClass('panel-in-breakpoint') || $el.hasClass('panel-in')) return false;

    // Close if some panel is opened
    const otherOpenedPanel = app.panel.get('.panel-in');
    if (otherOpenedPanel && otherOpenedPanel !== panel) {
      otherOpenedPanel.close(animate);
    }
    $el[animate ? 'removeClass' : 'addClass']('not-animated');
    $el.addClass('panel-in');
    if ($backdropEl) {
      $backdropEl.addClass('panel-backdrop-in');
      $backdropEl[animate ? 'removeClass' : 'addClass']('not-animated');
    }
    if (panel.effect === 'cover' || panel.effect === 'push') {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_clientLeft"] }] */
      panel._clientLeft = $el[0].clientLeft;
    }

    // Transitionend
    const $viewEl = $(panel.getViewEl());
    if ($containerEl && $containerEl.hasClass('page')) {
      $viewEl.add($containerEl.children('.page-content, .tabs'));
    }
    const transitionEndTarget = effect === 'reveal' ? $viewEl : $el;
    function panelTransitionEnd() {
      transitionEndTarget.transitionEnd(e => {
        if ($(e.target).is(transitionEndTarget)) {
          if ($el.hasClass('panel-out')) {
            panel.onClosed();
          } else {
            panel.onOpened();
          }
        } else panelTransitionEnd();
      });
    }
    if (animate) {
      if ($backdropEl) {
        $backdropEl.removeClass('not-animated');
      }
      panelTransitionEnd();
      $el.removeClass('panel-out not-animated').addClass('panel-in');
      panel.onOpen();
    } else {
      if ($backdropEl) {
        $backdropEl.addClass('not-animated');
      }
      $el.removeClass('panel-out').addClass('panel-in not-animated');
      panel.onOpen();
      panel.onOpened();
    }
    return true;
  }
  close(animate) {
    if (animate === void 0) {
      animate = true;
    }
    const panel = this;
    const {
      effect,
      $el,
      $backdropEl,
      opened,
      $containerEl
    } = panel;
    if (!opened || $el.hasClass('panel-in-breakpoint') || !$el.hasClass('panel-in')) return panel;
    $el[animate ? 'removeClass' : 'addClass']('not-animated');
    if ($backdropEl) {
      $backdropEl[animate ? 'removeClass' : 'addClass']('not-animated');
    }
    const $viewEl = $(panel.getViewEl());
    if ($containerEl && $containerEl.hasClass('page')) {
      $viewEl.add($containerEl.children('.page-content, .tabs'));
    }
    const transitionEndTarget = effect === 'reveal' ? $viewEl : $el;
    function transitionEnd() {
      if ($el.hasClass('panel-out')) {
        panel.onClosed();
      } else if ($el.hasClass('panel-in')) {
        panel.onOpened();
      }
      panel.setStateClasses('after-closing');
    }
    if (animate) {
      transitionEndTarget.transitionEnd(() => {
        transitionEnd();
      });
      $el.removeClass('panel-in').addClass('panel-out');
      // Emit close
      panel.onClose();
    } else {
      $el.addClass('not-animated').removeClass('panel-in').addClass('panel-out');
      // Emit close
      panel.onClose();
      panel.onClosed();
    }
    return panel;
  }
  init() {
    const panel = this;
    // const app = panel.app;
    if (typeof panel.params.visibleBreakpoint !== 'undefined') {
      panel.setVisibleBreakpoint();
    }
    if (typeof panel.params.collapsedBreakpoint !== 'undefined') {
      panel.setCollapsedBreakpoint();
    }
    if (panel.params.swipe) {
      panel.enableSwipe();
    }
    if (panel.resizable) {
      panel.enableResizable();
    }
  }
  destroy() {
    let panel = this;
    const app = panel.app;
    const {
      $containerEl
    } = panel;
    if (!panel.$el) {
      // Panel already destroyed
      return;
    }
    panel.emit('local::beforeDestroy panelBeforeDestroy', panel);
    panel.$el.trigger('panel:beforedestroy');
    if (panel.visibleBreakpointResizeHandler) {
      app.off('resize', panel.visibleBreakpointResizeHandler);
    }
    if (panel.collapsedBreakpointResizeHandler) {
      app.off('resize', panel.collapsedBreakpointResizeHandler);
    }
    if (panel.$el.hasClass('panel-in-breakpoint') || panel.$el.hasClass('panel-in-collapsed')) {
      const $viewEl = $(panel.getViewEl());
      if ($containerEl && $containerEl.hasClass('page')) {
        $viewEl.add($containerEl.children('.page-content, .tabs'));
      }
      panel.$el.removeClass('panel-in-breakpoint panel-in-collapsed panel-in');
      $viewEl.css({
        [`margin-${panel.side}`]: ''
      });
      panel.emit('local::breakpoint panelBreakpoint', panel);
      panel.$el.trigger('panel:breakpoint');
    }
    panel.$el.trigger('panel:destroy');
    panel.emit('local::destroy panelDestroy', panel);
    if (panel.el) {
      panel.el.f7Panel = null;
      delete panel.el.f7Panel;
    }
    deleteProps(panel);
    panel = null;
  }
};
var Panel$2 = Panel$1;

var Panel = {
  name: 'panel',
  params: {
    panel: {
      opened: undefined,
      // default based on panel-in class
      side: undefined,
      // default based on panel class
      effect: undefined,
      // default based on panel class
      resizable: undefined,
      // default based on panel-resizable class
      backdrop: true,
      backdropEl: undefined,
      visibleBreakpoint: undefined,
      collapsedBreakpoint: undefined,
      swipe: false,
      // or true
      swipeNoFollow: false,
      // or true
      swipeOnlyClose: false,
      swipeActiveArea: 0,
      swipeThreshold: 0,
      closeByBackdropClick: true,
      containerEl: undefined
    }
  },
  static: {
    Panel: Panel$2
  },
  create() {
    const app = this;
    extend(app, {
      panel: {
        allowOpen: true,
        create(params) {
          return new Panel$2(app, params);
        },
        get(el) {
          if (el === void 0) {
            el = '.panel';
          }
          if (el instanceof Panel$2) return el;
          if (el === 'left' || el === 'right') el = `.panel-${el}`; // eslint-disable-line
          const $el = $(el);
          if ($el.length === 0 || $el.length > 1) return undefined;
          return $el[0].f7Panel;
        },
        destroy(el) {
          if (el === void 0) {
            el = '.panel';
          }
          const panel = app.panel.get(el);
          if (panel && panel.destroy) return panel.destroy();
          return undefined;
        },
        open(el, animate) {
          if (el === void 0) {
            el = '.panel';
          }
          if (el === 'left' || el === 'right') el = `.panel-${el}`; // eslint-disable-line
          let panel = app.panel.get(el);
          if (panel && panel.open) return panel.open(animate);
          if (!panel) {
            panel = app.panel.create({
              el
            });
            return panel.open(animate);
          }
          return undefined;
        },
        close(el, animate) {
          if (el === void 0) {
            el = '.panel-in';
          }
          if (el === 'left' || el === 'right') el = `.panel-${el}`; // eslint-disable-line
          let panel = app.panel.get(el);
          if (panel && panel.open) return panel.close(animate);
          if (!panel) {
            panel = app.panel.create({
              el
            });
            return panel.close(animate);
          }
          return undefined;
        },
        toggle(el, animate) {
          if (el === void 0) {
            el = '.panel';
          }
          if (el === 'left' || el === 'right') el = `.panel-${el}`; // eslint-disable-line
          let panel = app.panel.get(el);
          if (panel && panel.toggle) return panel.toggle(animate);
          if (!panel) {
            panel = app.panel.create({
              el
            });
            return panel.toggle(animate);
          }
          return undefined;
        }
      }
    });
  },
  on: {
    init() {
      const app = this;
      $('.panel-init').each(panelEl => {
        const params = Object.assign({
          el: panelEl
        }, $(panelEl).dataset() || {});
        app.panel.create(params);
      });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.panel-init').each(panelEl => {
        const params = Object.assign({
          el: panelEl
        }, $(panelEl).dataset() || {});
        app.panel.create(params);
      });
    },
    pageBeforeRemove(page) {
      const app = this;
      page.$el.find('.panel-init').each(panelEl => {
        const panel = app.panel.get(panelEl);
        if (panel && panel.destroy) panel.destroy();
      });
    }
  },
  vnode: {
    'panel-init': {
      insert(vnode) {
        const app = this;
        const panelEl = vnode.elm;
        const params = Object.assign({
          el: panelEl
        }, $(panelEl).dataset() || {});
        app.panel.create(params);
      },
      destroy(vnode) {
        const app = this;
        const panelEl = vnode.elm;
        const panel = app.panel.get(panelEl);
        if (panel && panel.destroy) panel.destroy();
      }
    }
  },
  clicks: {
    '.panel-open': function open(clickedEl, data) {
      if (data === void 0) {
        data = {};
      }
      const app = this;
      app.panel.open(data.panel, data.animate);
    },
    '.panel-close': function close(clickedEl, data) {
      if (data === void 0) {
        data = {};
      }
      const app = this;
      app.panel.close(data.panel, data.animate);
    },
    '.panel-toggle': function close(clickedEl, data) {
      if (data === void 0) {
        data = {};
      }
      const app = this;
      app.panel.toggle(data.panel, data.animate);
    },
    '.panel-backdrop': function close() {
      const app = this;
      const $panelEl = $('.panel-in:not(.panel-out)');
      if (!$panelEl.length) return;
      const instance = $panelEl[0] && $panelEl[0].f7Panel;
      $panelEl.trigger('panel:backdrop-click');
      if (instance) {
        instance.emit('backdropClick', instance);
      }
      app.emit('panelBackdropClick', instance || $panelEl[0]);
      if (instance && instance.params.closeByBackdropClick === false) return;
      if (app.params.panel.closeByBackdropClick) app.panel.close();
    }
  }
};

let Popup$1 = class Popup extends Modal$2 {
  constructor(app, params) {
    const extendedParams = extend({
      on: {}
    }, app.params.popup, params);

    // Extends with open/close Modal methods;
    super(app, extendedParams);
    const popup = this;
    const window = getWindow();
    const document = getDocument();
    const support = getSupport();
    const device = getDevice();
    popup.params = extendedParams;

    // Find Element
    let $el;
    if (!popup.params.el) {
      $el = $(popup.params.content).filter(node => node.nodeType === 1).eq(0);
    } else {
      $el = $(popup.params.el).eq(0);
    }
    if ($el && $el.length > 0 && $el[0].f7Modal) {
      return $el[0].f7Modal;
    }
    if ($el.length === 0) {
      return popup.destroy();
    }
    let $backdropEl;
    if (popup.params.backdrop && popup.params.backdropEl) {
      $backdropEl = $(popup.params.backdropEl);
    } else if (popup.params.backdrop) {
      if (popup.params.backdropUnique) {
        $backdropEl = $('<div class="popup-backdrop popup-backdrop-unique"></div>');
        popup.$containerEl.append($backdropEl);
      } else {
        $backdropEl = popup.$containerEl.children('.popup-backdrop');
      }
      if ($backdropEl.length === 0) {
        $backdropEl = $('<div class="popup-backdrop"></div>');
        popup.$containerEl.append($backdropEl);
      }
    }
    extend(popup, {
      app,
      push: $el.hasClass('popup-push') || popup.params.push,
      $el,
      el: $el[0],
      $backdropEl,
      backdropEl: $backdropEl && $backdropEl[0],
      type: 'popup',
      $htmlEl: $('html')
    });
    if (popup.params.push) {
      $el.addClass('popup-push');
    }
    function handleClick(e) {
      const target = e.target;
      const $target = $(target);
      const keyboardOpened = !device.desktop && device.cordova && (window.Keyboard && window.Keyboard.isVisible || window.cordova.plugins && window.cordova.plugins.Keyboard && window.cordova.plugins.Keyboard.isVisible);
      if (keyboardOpened) return;
      if ($target.closest(popup.el).length === 0) {
        if (popup.params && popup.params.closeByBackdropClick && popup.params.backdrop && popup.backdropEl && popup.backdropEl === target) {
          let needToClose = true;
          popup.$el.nextAll('.popup.modal-in').each(popupEl => {
            const popupInstance = popupEl.f7Modal;
            if (!popupInstance) return;
            if (popupInstance.params.closeByBackdropClick && popupInstance.params.backdrop && popupInstance.backdropEl === popup.backdropEl) {
              needToClose = false;
            }
          });
          if (needToClose) {
            popup.close();
          }
        }
      }
    }
    function onKeyDown(e) {
      const keyCode = e.keyCode;
      if (keyCode === 27 && popup.params.closeOnEscape) {
        popup.close();
      }
    }
    let pushOffset;
    let isPush;
    function pushViewScale(offset) {
      return (app.height - offset * 2) / app.height;
    }
    let allowSwipeToClose = true;
    let isTouched = false;
    let startTouch;
    let currentTouch;
    let isScrolling;
    let touchStartTime;
    let touchesDiff;
    let isMoved = false;
    let pageContentEl;
    let pageContentScrollTop;
    let pageContentOffsetHeight;
    let pageContentScrollHeight;
    let popupHeight;
    let $pushEl;
    function handleTouchStart(e) {
      if (isTouched || !allowSwipeToClose || !popup.params.swipeToClose) return;
      if (popup.params.swipeHandler && $(e.target).closest(popup.params.swipeHandler).length === 0) {
        return;
      }
      isTouched = true;
      isMoved = false;
      startTouch = {
        x: e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX,
        y: e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
      };
      touchStartTime = now();
      isScrolling = undefined;
      if (!popup.params.swipeHandler && e.type === 'touchstart') {
        pageContentEl = $(e.target).closest('.page-content')[0];
      }
    }
    function handleTouchMove(e) {
      if (!isTouched) return;
      currentTouch = {
        x: e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX,
        y: e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY
      };
      if (typeof isScrolling === 'undefined') {
        isScrolling = !!(isScrolling || Math.abs(currentTouch.x - startTouch.x) > Math.abs(currentTouch.y - startTouch.y));
      }
      if (isScrolling) {
        isTouched = false;
        isMoved = false;
        return;
      }
      touchesDiff = startTouch.y - currentTouch.y;
      if (isPush && pushOffset && touchesDiff > 0) {
        touchesDiff = 0;
      }
      const direction = touchesDiff < 0 ? 'to-bottom' : 'to-top';
      $el.transition(0);
      if (typeof popup.params.swipeToClose === 'string' && direction !== popup.params.swipeToClose) {
        $el.transform('');
        $el.transition('');
        return;
      }
      if (!isMoved) {
        if (isPush && pushOffset) {
          popupHeight = $el[0].offsetHeight;
          $pushEl = $el.prevAll('.popup.modal-in').eq(0);
          if ($pushEl.length === 0) {
            $pushEl = app.$el.children('.view, .views');
          }
        }
        if (pageContentEl) {
          pageContentScrollTop = pageContentEl.scrollTop;
          pageContentScrollHeight = pageContentEl.scrollHeight;
          pageContentOffsetHeight = pageContentEl.offsetHeight;
          if (!(pageContentScrollHeight === pageContentOffsetHeight) && !(direction === 'to-bottom' && pageContentScrollTop === 0) && !(direction === 'to-top' && pageContentScrollTop === pageContentScrollHeight - pageContentOffsetHeight)) {
            $el.transform('');
            $el.transition('');
            isTouched = false;
            isMoved = false;
            return;
          }
        }
        isMoved = true;
        popup.emit('local::swipeStart popupSwipeStart', popup);
        popup.$el.trigger('popup:swipestart');
      } else {
        popup.emit('local::swipeMove popupSwipeMove', popup);
        popup.$el.trigger('popup:swipemove');
      }
      e.preventDefault();
      if (isPush && pushOffset) {
        const pushProgress = 1 - Math.abs(touchesDiff / popupHeight);
        const scale = 1 - (1 - pushViewScale(pushOffset)) * pushProgress;
        if ($pushEl.hasClass('popup')) {
          if ($pushEl.hasClass('popup-push')) {
            $pushEl.transition(0).forEach(el => {
              el.style.setProperty('transform', `translate3d(0, calc(-1 * ${pushProgress} * (var(--f7-popup-push-offset) + 10px)) , 0px) scale(${scale})`, 'important');
            });
          } else {
            $pushEl.transition(0).forEach(el => {
              el.style.setProperty('transform', `translate3d(0, 0px , 0px) scale(${scale})`, 'important');
            });
          }
        } else {
          $pushEl.transition(0).forEach(el => {
            el.style.setProperty('transform', `translate3d(0,0,0) scale(${scale})`, 'important');
          });
        }
      }
      $el.transition(0).transform(`translate3d(0,${-touchesDiff}px,0)`);
    }
    function handleTouchEnd() {
      isTouched = false;
      if (!isMoved) {
        return;
      }
      popup.emit('local::swipeEnd popupSwipeEnd', popup);
      popup.$el.trigger('popup:swipeend');
      isMoved = false;
      allowSwipeToClose = false;
      $el.transition('');
      if (isPush && pushOffset) {
        $pushEl.transition('').transform('');
      }
      const direction = touchesDiff <= 0 ? 'to-bottom' : 'to-top';
      if (typeof popup.params.swipeToClose === 'string' && direction !== popup.params.swipeToClose) {
        $el.transform('');
        allowSwipeToClose = true;
        return;
      }
      const diff = Math.abs(touchesDiff);
      const timeDiff = new Date().getTime() - touchStartTime;
      if (timeDiff < 300 && diff > 20 || timeDiff >= 300 && diff > 100) {
        nextTick(() => {
          if (direction === 'to-bottom') {
            $el.addClass('swipe-close-to-bottom');
          } else {
            $el.addClass('swipe-close-to-top');
          }
          $el.transform('');
          popup.emit('local::swipeclose popupSwipeClose', popup);
          popup.$el.trigger('popup:swipeclose');
          popup.close();
          allowSwipeToClose = true;
        });
        return;
      }
      allowSwipeToClose = true;
      $el.transform('');
    }
    const passive = support.passiveListener ? {
      passive: true
    } : false;
    if (popup.params.swipeToClose) {
      $el.on(app.touchEvents.start, handleTouchStart, passive);
      app.on('touchmove', handleTouchMove);
      app.on('touchend:passive', handleTouchEnd);
      popup.once('popupDestroy', () => {
        $el.off(app.touchEvents.start, handleTouchStart, passive);
        app.off('touchmove', handleTouchMove);
        app.off('touchend:passive', handleTouchEnd);
      });
    }
    let hasPreviousPushPopup;
    const updatePushOffset = () => {
      const wasPush = isPush;
      if (popup.push) {
        isPush = popup.push && (app.width < 630 || app.height < 630 || $el.hasClass('popup-tablet-fullscreen'));
      }
      if (isPush && !wasPush) {
        // eslint-disable-next-line
        setPushOffset();
      } else if (isPush && wasPush) {
        popup.$htmlEl[0].style.setProperty('--f7-popup-push-scale', pushViewScale(pushOffset));
      } else if (!isPush && wasPush) {
        popup.$htmlEl.removeClass('with-modal-popup-push');
        popup.$htmlEl[0].style.removeProperty('--f7-popup-push-scale');
      }
    };
    const setPushOffset = () => {
      app.off('resize', updatePushOffset);
      if (popup.push) {
        isPush = popup.push && (app.width < 630 || app.height < 630 || $el.hasClass('popup-tablet-fullscreen'));
      }
      if (isPush) {
        pushOffset = parseInt($el.css('--f7-popup-push-offset'), 10);
        if (Number.isNaN(pushOffset)) pushOffset = 0;
        if (pushOffset) {
          $el.addClass('popup-push');
          popup.$htmlEl.addClass('with-modal-popup-push');
          popup.$htmlEl[0].style.setProperty('--f7-popup-push-scale', pushViewScale(pushOffset));
        }
      }
      app.on('resize', updatePushOffset);
    };
    popup.on('open', () => {
      hasPreviousPushPopup = false;
      if (popup.params.closeOnEscape) {
        $(document).on('keydown', onKeyDown);
      }
      $el.prevAll('.popup.modal-in').addClass('popup-behind');
      setPushOffset();
    });
    popup.on('opened', () => {
      $el.removeClass('swipe-close-to-bottom swipe-close-to-top');
      if (popup.params.closeByBackdropClick) {
        app.on('click', handleClick);
      }
    });
    popup.on('close', () => {
      hasPreviousPushPopup = popup.$el.prevAll('.popup-push.modal-in').length > 0;
      if (popup.params.closeOnEscape) {
        $(document).off('keydown', onKeyDown);
      }
      if (popup.params.closeByBackdropClick) {
        app.off('click', handleClick);
      }
      $el.prevAll('.popup.modal-in').eq(0).removeClass('popup-behind');
      if (isPush && pushOffset && !hasPreviousPushPopup) {
        popup.$htmlEl.removeClass('with-modal-popup-push');
        popup.$htmlEl.addClass('with-modal-popup-push-closing');
      }
      app.off('resize', updatePushOffset);
    });
    popup.on('closed', () => {
      $el.removeClass('popup-behind');
      if (isPush && pushOffset && !hasPreviousPushPopup) {
        popup.$htmlEl.removeClass('with-modal-popup-push-closing');
        popup.$htmlEl[0].style.removeProperty('--f7-popup-push-scale');
      }
    });
    $el[0].f7Modal = popup;
    return popup;
  }
};
var Popup$2 = Popup$1;

var Popup = {
  name: 'popup',
  params: {
    popup: {
      backdrop: true,
      backdropEl: undefined,
      backdropUnique: false,
      closeByBackdropClick: true,
      closeOnEscape: false,
      swipeToClose: false,
      swipeHandler: null,
      push: false,
      containerEl: null
    }
  },
  static: {
    Popup: Popup$2
  },
  create() {
    const app = this;
    app.popup = ModalMethods({
      app,
      constructor: Popup$2,
      defaultSelector: '.popup.modal-in',
      parentSelector: '.popup'
    });
  },
  clicks: {
    '.popup-open': function openPopup($clickedEl, data) {
      if (data === void 0) {
        data = {};
      }
      const app = this;
      app.popup.open(data.popup, data.animate, $clickedEl);
    },
    '.popup-close': function closePopup($clickedEl, data) {
      if (data === void 0) {
        data = {};
      }
      const app = this;
      app.popup.close(data.popup, data.animate, $clickedEl);
    }
  }
};

let Stepper$1 = class Stepper extends Framework7Class$1 {
  constructor(app, params) {
    super(params, [app]);
    const stepper = this;
    const defaults = {
      el: null,
      inputEl: null,
      valueEl: null,
      value: 0,
      formatValue: null,
      step: 1,
      min: 0,
      max: 100,
      watchInput: true,
      autorepeat: false,
      autorepeatDynamic: false,
      wraps: false,
      manualInputMode: false,
      decimalPoint: 4,
      buttonsEndInputMode: true
    };

    // Extend defaults with modules params
    stepper.useModulesParams(defaults);
    stepper.params = extend(defaults, params);
    if (stepper.params.value < stepper.params.min) {
      stepper.params.value = stepper.params.min;
    }
    if (stepper.params.value > stepper.params.max) {
      stepper.params.value = stepper.params.max;
    }
    const el = stepper.params.el;
    if (!el) return stepper;
    const $el = $(el);
    if ($el.length === 0) return stepper;
    if ($el[0].f7Stepper) return $el[0].f7Stepper;
    let $inputEl;
    if (stepper.params.inputEl) {
      $inputEl = $(stepper.params.inputEl);
    } else if ($el.find('.stepper-input-wrap').find('input, textarea').length) {
      $inputEl = $el.find('.stepper-input-wrap').find('input, textarea').eq(0);
    }
    if ($inputEl && $inputEl.length) {
      'step min max'.split(' ').forEach(paramName => {
        if (!params[paramName] && $inputEl.attr(paramName)) {
          stepper.params[paramName] = parseFloat($inputEl.attr(paramName));
        }
      });
      const decimalPoint = parseInt(stepper.params.decimalPoint, 10);
      if (Number.isNaN(decimalPoint)) {
        stepper.params.decimalPoint = 0;
      } else {
        stepper.params.decimalPoint = decimalPoint;
      }
      const inputValue = parseFloat($inputEl.val());
      if (typeof params.value === 'undefined' && !Number.isNaN(inputValue) && (inputValue || inputValue === 0)) {
        stepper.params.value = inputValue;
      }
    }
    let $valueEl;
    if (stepper.params.valueEl) {
      $valueEl = $(stepper.params.valueEl);
    } else if ($el.find('.stepper-value').length) {
      $valueEl = $el.find('.stepper-value').eq(0);
    }
    const $buttonPlusEl = $el.find('.stepper-button-plus');
    const $buttonMinusEl = $el.find('.stepper-button-minus');
    const {
      step,
      min,
      max,
      value,
      decimalPoint
    } = stepper.params;
    extend(stepper, {
      app,
      $el,
      el: $el[0],
      $buttonPlusEl,
      buttonPlusEl: $buttonPlusEl[0],
      $buttonMinusEl,
      buttonMinusEl: $buttonMinusEl[0],
      $inputEl,
      inputEl: $inputEl ? $inputEl[0] : undefined,
      $valueEl,
      valueEl: $valueEl ? $valueEl[0] : undefined,
      step,
      min,
      max,
      value,
      decimalPoint,
      typeModeChanged: false
    });
    $el[0].f7Stepper = stepper;

    // Handle Events
    const touchesStart = {};
    let isTouched;
    let isScrolling;
    let preventButtonClick;
    let intervalId;
    let timeoutId;
    let autorepeatAction = null;
    let autorepeatInAction = false;
    let manualInput = false;
    function dynamicRepeat(current, progressions, startsIn, progressionStep, repeatEvery, action) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (current === 1) {
          preventButtonClick = true;
          autorepeatInAction = true;
        }
        clearInterval(intervalId);
        action();
        intervalId = setInterval(() => {
          action();
        }, repeatEvery);
        if (current < progressions) {
          dynamicRepeat(current + 1, progressions, startsIn, progressionStep, repeatEvery / 2, action);
        }
      }, current === 1 ? startsIn : progressionStep);
    }
    function onTouchStart(e) {
      if (isTouched) return;
      if (manualInput) {
        return;
      }
      if ($(e.target).closest($buttonPlusEl).length) {
        autorepeatAction = 'increment';
      } else if ($(e.target).closest($buttonMinusEl).length) {
        autorepeatAction = 'decrement';
      }
      if (!autorepeatAction) return;
      touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      isTouched = true;
      isScrolling = undefined;
      const progressions = stepper.params.autorepeatDynamic ? 4 : 1;
      dynamicRepeat(1, progressions, 500, 1000, 300, () => {
        stepper[autorepeatAction]();
      });
    }
    function onTouchMove(e) {
      if (!isTouched) return;
      if (manualInput) {
        return;
      }
      const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
      if (typeof isScrolling === 'undefined' && !autorepeatInAction) {
        isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x));
      }
      const distance = ((pageX - touchesStart.x) ** 2 + (pageY - touchesStart.y) ** 2) ** 0.5;
      if (isScrolling || distance > 20) {
        isTouched = false;
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      }
    }
    function onTouchEnd() {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      autorepeatAction = null;
      autorepeatInAction = false;
      isTouched = false;
    }
    function onMinusClick() {
      if (manualInput) {
        if (stepper.params.buttonsEndInputMode) {
          manualInput = false;
          stepper.endTypeMode(true);
        }
        return;
      }
      if (preventButtonClick) {
        preventButtonClick = false;
        return;
      }
      stepper.decrement(true);
    }
    function onPlusClick() {
      if (manualInput) {
        if (stepper.params.buttonsEndInputMode) {
          manualInput = false;
          stepper.endTypeMode(true);
        }
        return;
      }
      if (preventButtonClick) {
        preventButtonClick = false;
        return;
      }
      stepper.increment(true);
    }
    function onInputClick(e) {
      if (!e.target.readOnly && stepper.params.manualInputMode) {
        manualInput = true;
        if (typeof e.target.selectionStart === 'number') {
          e.target.selectionStart = e.target.value.length;
          e.target.selectionEnd = e.target.value.length;
        }
      }
    }
    function onInputKey(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        manualInput = false;
        stepper.endTypeMode();
      }
    }
    function onInputBlur() {
      manualInput = false;
      stepper.endTypeMode(true);
    }
    function onInput(e) {
      if (manualInput) {
        stepper.typeValue(e.target.value);
        return;
      }
      if (e.detail && e.detail.sentByF7Stepper) return;
      stepper.setValue(e.target.value, true);
    }
    stepper.attachEvents = function attachEvents() {
      $buttonMinusEl.on('click', onMinusClick);
      $buttonPlusEl.on('click', onPlusClick);
      if (stepper.params.watchInput && $inputEl && $inputEl.length) {
        $inputEl.on('input', onInput);
        $inputEl.on('click', onInputClick);
        $inputEl.on('blur', onInputBlur);
        $inputEl.on('keyup', onInputKey);
      }
      if (stepper.params.autorepeat) {
        app.on('touchstart:passive', onTouchStart);
        app.on('touchmove:active', onTouchMove);
        app.on('touchend:passive', onTouchEnd);
      }
    };
    stepper.detachEvents = function detachEvents() {
      $buttonMinusEl.off('click', onMinusClick);
      $buttonPlusEl.off('click', onPlusClick);
      if (stepper.params.watchInput && $inputEl && $inputEl.length) {
        $inputEl.off('input', onInput);
        $inputEl.off('click', onInputClick);
        $inputEl.off('blur', onInputBlur);
        $inputEl.off('keyup', onInputKey);
      }
    };

    // Install Modules
    stepper.useModules();

    // Init
    stepper.init();
    return stepper;
  }
  minus() {
    return this.decrement();
  }
  plus() {
    return this.increment();
  }
  decrement() {
    const stepper = this;
    return stepper.setValue(stepper.value - stepper.step, false, true);
  }
  increment() {
    const stepper = this;
    return stepper.setValue(stepper.value + stepper.step, false, true);
  }
  setValue(newValue, forceUpdate, withWraps) {
    const stepper = this;
    const {
      step,
      min,
      max
    } = stepper;
    const oldValue = stepper.value;
    let value = Math.round(newValue / step) * step;
    if (stepper.params.wraps && withWraps) {
      if (value > max) value = min;
      if (value < min) value = max;
    } else {
      value = Math.max(Math.min(value, max), min);
    }
    if (Number.isNaN(value)) {
      value = oldValue;
    }
    stepper.value = value;
    const valueChanged = oldValue !== value;

    // Events
    if (!valueChanged && !forceUpdate) return stepper;
    stepper.$el.trigger('stepper:change', stepper.value);
    const formattedValue = stepper.formatValue(stepper.value);
    if (stepper.$inputEl && stepper.$inputEl.length) {
      stepper.$inputEl.val(formattedValue);
      stepper.$inputEl.trigger('input change', {
        sentByF7Stepper: true
      });
    }
    if (stepper.$valueEl && stepper.$valueEl.length) {
      stepper.$valueEl.html(formattedValue);
    }
    stepper.emit('local::change stepperChange', stepper, stepper.value);
    return stepper;
  }
  endTypeMode(noBlur) {
    const stepper = this;
    const {
      min,
      max
    } = stepper;
    let value = parseFloat(stepper.value);
    if (Number.isNaN(value)) value = 0;
    value = Math.max(Math.min(value, max), min);
    stepper.value = value;
    if (!stepper.typeModeChanged) {
      if (stepper.$inputEl && stepper.$inputEl.length && !noBlur) {
        stepper.$inputEl.blur();
      }
      return stepper;
    }
    stepper.typeModeChanged = false;
    stepper.$el.trigger('stepper:change', stepper.value);
    const formattedValue = stepper.formatValue(stepper.value);
    if (stepper.$inputEl && stepper.$inputEl.length) {
      stepper.$inputEl.val(formattedValue);
      stepper.$inputEl.trigger('input change', {
        sentByF7Stepper: true
      });
      if (!noBlur) stepper.$inputEl.blur();
    }
    if (stepper.$valueEl && stepper.$valueEl.length) {
      stepper.$valueEl.html(formattedValue);
    }
    stepper.emit('local::change stepperChange', stepper, stepper.value);
    return stepper;
  }
  typeValue(value) {
    const stepper = this;
    stepper.typeModeChanged = true;
    let inputTxt = String(value);
    if (inputTxt.length === 1 && inputTxt === '-') return stepper;
    if (inputTxt.lastIndexOf('.') + 1 === inputTxt.length || inputTxt.lastIndexOf(',') + 1 === inputTxt.length) {
      if (inputTxt.lastIndexOf('.') !== inputTxt.indexOf('.') || inputTxt.lastIndexOf(',') !== inputTxt.indexOf(',')) {
        inputTxt = inputTxt.slice(0, -1);
        stepper.value = inputTxt;
        stepper.$inputEl.val(stepper.value);
        return stepper;
      }
    } else {
      let newValue = parseFloat(inputTxt.replace(',', '.'));
      if (newValue === 0) {
        stepper.value = inputTxt.replace(',', '.');
        stepper.$inputEl.val(stepper.value);
        return stepper;
      }
      if (Number.isNaN(newValue)) {
        stepper.value = 0;
        stepper.$inputEl.val(stepper.value);
        return stepper;
      }
      const powVal = 10 ** stepper.params.decimalPoint;
      newValue = Math.round(newValue * powVal).toFixed(stepper.params.decimalPoint + 1) / powVal;
      stepper.value = parseFloat(String(newValue).replace(',', '.'));
      stepper.$inputEl.val(stepper.value);
      return stepper;
    }
    stepper.value = inputTxt;
    stepper.$inputEl.val(inputTxt);
    return stepper;
  }
  getValue() {
    return this.value;
  }
  formatValue(value) {
    const stepper = this;
    if (!stepper.params.formatValue) return value;
    return stepper.params.formatValue.call(stepper, value);
  }
  init() {
    const stepper = this;
    stepper.attachEvents();
    if (stepper.$valueEl && stepper.$valueEl.length) {
      const formattedValue = stepper.formatValue(stepper.value);
      stepper.$valueEl.html(formattedValue);
    }
    return stepper;
  }
  destroy() {
    let stepper = this;
    stepper.$el.trigger('stepper:beforedestroy');
    stepper.emit('local::beforeDestroy stepperBeforeDestroy', stepper);
    delete stepper.$el[0].f7Stepper;
    stepper.detachEvents();
    deleteProps(stepper);
    stepper = null;
  }
};
var Stepper$2 = Stepper$1;

var Stepper = {
  name: 'stepper',
  create() {
    const app = this;
    app.stepper = extend(ConstructorMethods({
      defaultSelector: '.stepper',
      constructor: Stepper$2,
      app,
      domProp: 'f7Stepper'
    }), {
      getValue(el) {
        if (el === void 0) {
          el = '.stepper';
        }
        const stepper = app.stepper.get(el);
        if (stepper) return stepper.getValue();
        return undefined;
      },
      setValue(el, value) {
        if (el === void 0) {
          el = '.stepper';
        }
        const stepper = app.stepper.get(el);
        if (stepper) return stepper.setValue(value);
        return undefined;
      }
    });
  },
  static: {
    Stepper: Stepper$2
  },
  on: {
    tabMounted(tabEl) {
      const app = this;
      $(tabEl).find('.stepper-init').each(stepperEl => {
        const dataset = $(stepperEl).dataset();
        app.stepper.create(extend({
          el: stepperEl
        }, dataset || {}));
      });
    },
    tabBeforeRemove(tabEl) {
      $(tabEl).find('.stepper-init').each(stepperEl => {
        if (stepperEl.f7Stepper) stepperEl.f7Stepper.destroy();
      });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.stepper-init').each(stepperEl => {
        const dataset = $(stepperEl).dataset();
        app.stepper.create(extend({
          el: stepperEl
        }, dataset || {}));
      });
    },
    pageBeforeRemove(page) {
      page.$el.find('.stepper-init').each(stepperEl => {
        if (stepperEl.f7Stepper) stepperEl.f7Stepper.destroy();
      });
    }
  },
  vnode: {
    'stepper-init': {
      insert(vnode) {
        const app = this;
        const stepperEl = vnode.elm;
        const dataset = $(stepperEl).dataset();
        app.stepper.create(extend({
          el: stepperEl
        }, dataset || {}));
      },
      destroy(vnode) {
        const stepperEl = vnode.elm;
        if (stepperEl.f7Stepper) stepperEl.f7Stepper.destroy();
      }
    }
  }
};

const Accordion = {
  toggleClicked($clickedEl) {
    const app = this;
    let $accordionItemEl = $clickedEl.closest('.accordion-item').eq(0);
    if (!$accordionItemEl.length) $accordionItemEl = $clickedEl.parents('li').eq(0);
    const $accordionContent = $clickedEl.parents('.accordion-item-content').eq(0);
    if ($accordionContent.length) {
      if ($accordionContent.parents($accordionItemEl).length) return;
    }
    if ($clickedEl.parents('li').length > 1 && $clickedEl.parents('li')[0] !== $accordionItemEl[0]) return;
    app.accordion.toggle($accordionItemEl);
  },
  open(el) {
    const app = this;
    const $el = $(el);
    let prevented = false;
    function prevent() {
      prevented = true;
    }
    $el.trigger('accordion:beforeopen', {
      prevent
    }, prevent);
    app.emit('accordionBeforeOpen', $el[0], prevent);
    if (prevented) return;
    const $list = $el.parents('.accordion-list').eq(0);
    let $contentEl = $el.children('.accordion-item-content');
    $contentEl.removeAttr('aria-hidden');
    if ($contentEl.length === 0) $contentEl = $el.find('.accordion-item-content');
    if ($contentEl.length === 0) return;
    const $openedItem = $list.length > 0 && $el.parent().children('.accordion-item-opened');
    if ($openedItem.length > 0) {
      app.accordion.close($openedItem);
    }
    $contentEl.transitionEnd(() => {
      if ($el.hasClass('accordion-item-opened')) {
        $contentEl.transition(0);
        $contentEl.css('height', 'auto');
        nextFrame$1(() => {
          $contentEl.transition('');
          $el.trigger('accordion:opened');
          app.emit('accordionOpened', $el[0]);
        });
      } else {
        $contentEl.css('height', '');
        $el.trigger('accordion:closed');
        app.emit('accordionClosed', $el[0]);
      }
    });
    $contentEl.css('height', `${$contentEl[0].scrollHeight}px`);
    $el.trigger('accordion:open');
    $el.addClass('accordion-item-opened');
    app.emit('accordionOpen', $el[0]);
  },
  close(el) {
    const app = this;
    const $el = $(el);
    let prevented = false;
    function prevent() {
      prevented = true;
    }
    $el.trigger('accordion:beforeclose', {
      prevent
    }, prevent);
    app.emit('accordionBeforeClose', $el[0], prevent);
    if (prevented) return;
    let $contentEl = $el.children('.accordion-item-content');
    if ($contentEl.length === 0) $contentEl = $el.find('.accordion-item-content');
    $el.removeClass('accordion-item-opened');
    $contentEl.attr('aria-hidden', true);
    $contentEl.transition(0);
    $contentEl.css('height', `${$contentEl[0].scrollHeight}px`);
    // Close
    $contentEl.transitionEnd(() => {
      if ($el.hasClass('accordion-item-opened')) {
        $contentEl.transition(0);
        $contentEl.css('height', 'auto');
        nextFrame$1(() => {
          $contentEl.transition('');
          $el.trigger('accordion:opened');
          app.emit('accordionOpened', $el[0]);
        });
      } else {
        $contentEl.css('height', '');
        $el.trigger('accordion:closed');
        app.emit('accordionClosed', $el[0]);
      }
    });
    nextFrame$1(() => {
      $contentEl.transition('');
      $contentEl.css('height', '');
      $el.trigger('accordion:close');
      app.emit('accordionClose', $el[0]);
    });
  },
  toggle(el) {
    const app = this;
    const $el = $(el);
    if ($el.length === 0) return;
    if ($el.hasClass('accordion-item-opened')) app.accordion.close(el);else app.accordion.open(el);
  }
};
var Accordion$1 = {
  name: 'accordion',
  create() {
    const app = this;
    bindMethods(app, {
      accordion: Accordion
    });
  },
  clicks: {
    '.accordion-item .item-link, .accordion-item-toggle, .links-list.accordion-list > ul > li > a': function open($clickedEl) {
      const app = this;
      Accordion.toggleClicked.call(app, $clickedEl);
    }
  }
};

const Menu = {
  open(el) {
    if (el === void 0) {
      el = '.menu-item-dropdown';
    }
    const app = this;
    if (!el) return;
    const $el = $(el).closest('.menu-item-dropdown');
    if (!$el.length) return;
    const $menuEl = $el.closest('.menu').eq(0);
    if ($menuEl.length) {
      const zIndex = $menuEl.css('z-index');
      const originalZIndex = $menuEl[0].style.zIndex;
      $menuEl.css('z-index', parseInt(zIndex || 0, 10) + 1);
      $menuEl[0].f7MenuZIndex = originalZIndex;
    }
    $el.eq(0).addClass('menu-item-dropdown-opened').trigger('menu:opened');
    app.emit('menuOpened', $el.eq(0)[0]);
  },
  close(el) {
    if (el === void 0) {
      el = '.menu-item-dropdown-opened';
    }
    const app = this;
    if (!el) return;
    const $el = $(el).closest('.menu-item-dropdown-opened');
    if (!$el.length) return;
    const $menuEl = $el.closest('.menu').eq(0);
    if ($menuEl.length) {
      const zIndex = $menuEl[0].f7MenuZIndex;
      $menuEl.css('z-index', zIndex);
      delete $menuEl[0].f7MenuZIndex;
    }
    $el.eq(0).removeClass('menu-item-dropdown-opened').trigger('menu:closed');
    app.emit('menuClosed', $el.eq(0)[0]);
  }
};
var Menu$1 = {
  name: 'menu',
  create() {
    const app = this;
    bindMethods(app, {
      menu: Menu
    });
  },
  on: {
    click(e) {
      const app = this;
      const openedMenus = $('.menu-item-dropdown-opened');
      if (!openedMenus.length) return;
      openedMenus.each(el => {
        if (!$(e.target).closest('.menu-item-dropdown-opened').length) {
          app.menu.close(el);
        }
      });
    }
  },
  clicks: {
    '.menu-item-dropdown': function onClick($clickedEl, dataset, e) {
      const app = this;
      if ($clickedEl.hasClass('menu-item-dropdown-opened')) {
        if ($(e.target).closest('.menu-dropdown').length) return;
        app.menu.close($clickedEl);
      } else {
        app.menu.open($clickedEl);
      }
    },
    '.menu-close': function onClick() {
      const app = this;
      app.menu.close();
    }
  }
};

/* eslint no-control-regex: "off" */
const defaultDiacriticsRemovalap = [{
  base: 'A',
  letters: '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
}, {
  base: 'AA',
  letters: '\uA732'
}, {
  base: 'AE',
  letters: '\u00C6\u01FC\u01E2'
}, {
  base: 'AO',
  letters: '\uA734'
}, {
  base: 'AU',
  letters: '\uA736'
}, {
  base: 'AV',
  letters: '\uA738\uA73A'
}, {
  base: 'AY',
  letters: '\uA73C'
}, {
  base: 'B',
  letters: '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
}, {
  base: 'C',
  letters: '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
}, {
  base: 'D',
  letters: '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'
}, {
  base: 'DZ',
  letters: '\u01F1\u01C4'
}, {
  base: 'Dz',
  letters: '\u01F2\u01C5'
}, {
  base: 'E',
  letters: '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
}, {
  base: 'F',
  letters: '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
}, {
  base: 'G',
  letters: '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
}, {
  base: 'H',
  letters: '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
}, {
  base: 'I',
  letters: '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
}, {
  base: 'J',
  letters: '\u004A\u24BF\uFF2A\u0134\u0248'
}, {
  base: 'K',
  letters: '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
}, {
  base: 'L',
  letters: '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
}, {
  base: 'LJ',
  letters: '\u01C7'
}, {
  base: 'Lj',
  letters: '\u01C8'
}, {
  base: 'M',
  letters: '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
}, {
  base: 'N',
  letters: '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
}, {
  base: 'NJ',
  letters: '\u01CA'
}, {
  base: 'Nj',
  letters: '\u01CB'
}, {
  base: 'O',
  letters: '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
}, {
  base: 'OI',
  letters: '\u01A2'
}, {
  base: 'OO',
  letters: '\uA74E'
}, {
  base: 'OU',
  letters: '\u0222'
}, {
  base: 'OE',
  letters: '\u008C\u0152'
}, {
  base: 'oe',
  letters: '\u009C\u0153'
}, {
  base: 'P',
  letters: '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
}, {
  base: 'Q',
  letters: '\u0051\u24C6\uFF31\uA756\uA758\u024A'
}, {
  base: 'R',
  letters: '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
}, {
  base: 'S',
  letters: '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
}, {
  base: 'T',
  letters: '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
}, {
  base: 'TZ',
  letters: '\uA728'
}, {
  base: 'U',
  letters: '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
}, {
  base: 'V',
  letters: '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
}, {
  base: 'VY',
  letters: '\uA760'
}, {
  base: 'W',
  letters: '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
}, {
  base: 'X',
  letters: '\u0058\u24CD\uFF38\u1E8A\u1E8C'
}, {
  base: 'Y',
  letters: '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
}, {
  base: 'Z',
  letters: '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
}, {
  base: 'a',
  letters: '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
}, {
  base: 'aa',
  letters: '\uA733'
}, {
  base: 'ae',
  letters: '\u00E6\u01FD\u01E3'
}, {
  base: 'ao',
  letters: '\uA735'
}, {
  base: 'au',
  letters: '\uA737'
}, {
  base: 'av',
  letters: '\uA739\uA73B'
}, {
  base: 'ay',
  letters: '\uA73D'
}, {
  base: 'b',
  letters: '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
}, {
  base: 'c',
  letters: '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
}, {
  base: 'd',
  letters: '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
}, {
  base: 'dz',
  letters: '\u01F3\u01C6'
}, {
  base: 'e',
  letters: '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
}, {
  base: 'f',
  letters: '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
}, {
  base: 'g',
  letters: '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
}, {
  base: 'h',
  letters: '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
}, {
  base: 'hv',
  letters: '\u0195'
}, {
  base: 'i',
  letters: '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
}, {
  base: 'j',
  letters: '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
}, {
  base: 'k',
  letters: '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
}, {
  base: 'l',
  letters: '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
}, {
  base: 'lj',
  letters: '\u01C9'
}, {
  base: 'm',
  letters: '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
}, {
  base: 'n',
  letters: '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
}, {
  base: 'nj',
  letters: '\u01CC'
}, {
  base: 'o',
  letters: '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
}, {
  base: 'oi',
  letters: '\u01A3'
}, {
  base: 'ou',
  letters: '\u0223'
}, {
  base: 'oo',
  letters: '\uA74F'
}, {
  base: 'p',
  letters: '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
}, {
  base: 'q',
  letters: '\u0071\u24E0\uFF51\u024B\uA757\uA759'
}, {
  base: 'r',
  letters: '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
}, {
  base: 's',
  letters: '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
}, {
  base: 't',
  letters: '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
}, {
  base: 'tz',
  letters: '\uA729'
}, {
  base: 'u',
  letters: '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
}, {
  base: 'v',
  letters: '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
}, {
  base: 'vy',
  letters: '\uA761'
}, {
  base: 'w',
  letters: '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
}, {
  base: 'x',
  letters: '\u0078\u24E7\uFF58\u1E8B\u1E8D'
}, {
  base: 'y',
  letters: '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
}, {
  base: 'z',
  letters: '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
}];
const diacriticsMap = {};
for (let i = 0; i < defaultDiacriticsRemovalap.length; i += 1) {
  const letters = defaultDiacriticsRemovalap[i].letters;
  for (let j = 0; j < letters.length; j += 1) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
  }
}
function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007E]/g, a => diacriticsMap[a] || a);
}

let SmartSelect$1 = class SmartSelect extends Framework7Class$1 {
  constructor(app, params) {
    if (params === void 0) {
      params = {};
    }
    super(params, [app]);
    const ss = this;
    const defaults = extend({
      on: {}
    }, app.params.smartSelect);
    if (typeof defaults.searchbarDisableButton === 'undefined') {
      defaults.searchbarDisableButton = app.theme !== 'aurora';
    }

    // Extend defaults with modules params
    ss.useModulesParams(defaults);
    ss.params = extend({}, defaults, params);
    ss.app = app;
    const $el = $(ss.params.el).eq(0);
    if ($el.length === 0) return ss;
    if ($el[0].f7SmartSelect) return $el[0].f7SmartSelect;
    const $selectEl = $el.find('select').eq(0);
    if ($selectEl.length === 0) return ss;
    let $valueEl;
    if (ss.params.setValueText) {
      $valueEl = $(ss.params.valueEl);
      if ($valueEl.length === 0) {
        $valueEl = $el.find('.item-after');
      }
      if ($valueEl.length === 0) {
        $valueEl = $('<div class="item-after"></div>');
        $valueEl.insertAfter($el.find('.item-title'));
      }
    }

    // Url
    let url = params.url;
    if (!url) {
      if ($el.attr('href') && $el.attr('href') !== '#') url = $el.attr('href');else if ($selectEl.attr('name')) url = `${$selectEl.attr('name').toLowerCase()}-select/`;
    }
    if (!url) url = ss.params.url;
    const multiple = $selectEl[0].multiple;
    const inputType = multiple ? 'checkbox' : 'radio';
    const selectId = id();
    extend(ss, {
      $el,
      el: $el[0],
      $selectEl,
      selectEl: $selectEl[0],
      $valueEl,
      valueEl: $valueEl && $valueEl[0],
      url,
      multiple,
      inputType,
      id: selectId,
      inputName: `${inputType}-${selectId}`,
      selectName: $selectEl.attr('name'),
      maxLength: $selectEl.attr('maxlength') || params.maxLength
    });
    $el[0].f7SmartSelect = ss;

    // Events
    function onClick() {
      ss.open();
    }
    function onChange() {
      const value = ss.$selectEl.val();
      ss.$el.trigger('smartselect:change', value);
      ss.emit('local::change smartSelectChange', ss, value);
      if (ss.vl) {
        ss.vl.clearCache();
      }
      ss.setValueText();
    }
    ss.attachEvents = function attachEvents() {
      $el.on('click', onClick);
      $el.on('change', 'select', onChange);
    };
    ss.detachEvents = function detachEvents() {
      $el.off('click', onClick);
      $el.off('change', 'select', onChange);
    };
    function handleInputChange() {
      let optionEl;
      let text;
      const inputEl = this;
      const value = inputEl.value;
      let optionText = [];
      let displayAs;
      if (inputEl.type === 'checkbox') {
        for (let i = 0; i < ss.selectEl.options.length; i += 1) {
          optionEl = ss.selectEl.options[i];
          if (optionEl.value === value) {
            optionEl.selected = inputEl.checked;
          }
          if (optionEl.selected) {
            displayAs = optionEl.dataset ? optionEl.dataset.displayAs : $(optionEl).data('display-value-as');
            text = displayAs && typeof displayAs !== 'undefined' ? displayAs : optionEl.textContent;
            optionText.push(text.trim());
          }
        }
        if (ss.maxLength) {
          ss.checkMaxLength();
        }
      } else {
        optionEl = ss.$selectEl.find(`option[value="${value}"]`)[0];
        if (!optionEl) {
          optionEl = ss.$selectEl.find('option').filter(optEl => optEl.value === value)[0];
        }
        displayAs = optionEl.dataset ? optionEl.dataset.displayAs : $(optionEl).data('display-as');
        text = displayAs && typeof displayAs !== 'undefined' ? displayAs : optionEl.textContent;
        optionText = [text];
        ss.selectEl.value = value;
      }
      ss.$selectEl.trigger('change');
      if (ss.params.setValueText) {
        ss.$valueEl.text(ss.formatValueText(optionText));
      }
      if (ss.params.closeOnSelect && ss.inputType === 'radio') {
        ss.close();
      }
    }
    ss.attachInputsEvents = function attachInputsEvents() {
      ss.$containerEl.on('change', 'input[type="checkbox"], input[type="radio"]', handleInputChange);
    };
    ss.detachInputsEvents = function detachInputsEvents() {
      ss.$containerEl.off('change', 'input[type="checkbox"], input[type="radio"]', handleInputChange);
    };

    // Install Modules
    ss.useModules();

    // Init
    ss.init();
    return ss;
  }
  setValue(value) {
    const ss = this;
    let newValue = value;
    let optionText = [];
    let optionEl;
    let displayAs;
    let text;
    if (ss.multiple) {
      if (!Array.isArray(newValue)) newValue = [newValue];
      for (let i = 0; i < ss.selectEl.options.length; i += 1) {
        optionEl = ss.selectEl.options[i];
        if (newValue.indexOf(optionEl.value) >= 0) {
          optionEl.selected = true;
        } else {
          optionEl.selected = false;
        }
        if (optionEl.selected) {
          displayAs = optionEl.dataset ? optionEl.dataset.displayAs : $(optionEl).data('display-value-as');
          text = displayAs && typeof displayAs !== 'undefined' ? displayAs : optionEl.textContent;
          optionText.push(text.trim());
        }
      }
    } else {
      optionEl = ss.$selectEl.find(`option[value="${newValue}"]`)[0];
      if (optionEl) {
        displayAs = optionEl.dataset ? optionEl.dataset.displayAs : $(optionEl).data('display-as');
        text = displayAs && typeof displayAs !== 'undefined' ? displayAs : optionEl.textContent;
        optionText = [text];
      }
      ss.selectEl.value = newValue;
    }
    if (ss.params.setValueText) {
      ss.$valueEl.text(ss.formatValueText(optionText));
    }
    ss.$selectEl.trigger('change');
    return ss;
  }
  unsetValue() {
    const ss = this;
    if (ss.params.setValueText) {
      ss.$valueEl.text(ss.formatValueText([]));
    }
    ss.$selectEl.find('option').each(optionEl => {
      optionEl.selected = false;
      optionEl.checked = false;
    });
    ss.$selectEl[0].value = null;
    if (ss.$containerEl) {
      ss.$containerEl.find(`input[name="${ss.inputName}"][type="checkbox"], input[name="${ss.inputName}"][type="radio"]`).prop('checked', false);
    }
    ss.$selectEl.trigger('change');
  }
  getValue() {
    const ss = this;
    return ss.$selectEl.val();
  }
  get view() {
    const {
      params,
      $el
    } = this;
    let view;
    if (params.view) {
      view = params.view;
    }
    if (!view) {
      view = $el.parents('.view').length && $el.parents('.view')[0].f7View;
    }
    if (!view && params.openIn === 'page') {
      throw Error('Smart Select requires initialized View');
    }
    return view;
  }
  checkMaxLength() {
    const ss = this;
    const $containerEl = ss.$containerEl;
    if (ss.selectEl.selectedOptions.length >= ss.maxLength) {
      $containerEl.find('input[type="checkbox"]').each(inputEl => {
        if (!inputEl.checked) {
          $(inputEl).parents('li').addClass('disabled');
        } else {
          $(inputEl).parents('li').removeClass('disabled');
        }
      });
    } else {
      $containerEl.find('.disabled').removeClass('disabled');
    }
  }
  formatValueText(values) {
    const ss = this;
    let textValue;
    if (ss.params.formatValueText) {
      textValue = ss.params.formatValueText.call(ss, values, ss);
    } else {
      textValue = values.join(', ');
    }
    return textValue;
  }
  setValueText(value) {
    const ss = this;
    let valueArray = [];
    if (typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        valueArray = value;
      } else {
        valueArray = [value];
      }
    } else {
      ss.$selectEl.find('option').each(optionEl => {
        const $optionEl = $(optionEl);
        if (optionEl.selected) {
          const displayAs = optionEl.dataset ? optionEl.dataset.displayAs : $optionEl.data('display-value-as');
          if (displayAs && typeof displayAs !== 'undefined') {
            valueArray.push(displayAs);
          } else {
            valueArray.push(optionEl.textContent.trim());
          }
        }
      });
    }
    if (ss.params.setValueText) {
      ss.$valueEl.text(ss.formatValueText(valueArray));
    }
  }
  getItemsData() {
    const ss = this;
    const theme = ss.app.theme;
    const items = [];
    let previousGroupEl;
    ss.$selectEl.find('option').each(optionEl => {
      const $optionEl = $(optionEl);
      const optionData = $optionEl.dataset();
      const optionImage = optionData.optionImage || ss.params.optionImage;
      const optionIcon = optionData.optionIcon || ss.params.optionIcon;
      const optionIconIos = theme === 'ios' && (optionData.optionIconIos || ss.params.optionIconIos);
      const optionIconMd = theme === 'md' && (optionData.optionIconMd || ss.params.optionIconMd);
      const optionIconAurora = theme === 'aurora' && (optionData.optionIconAurora || ss.params.optionIconAurora);
      const optionHasMedia = optionImage || optionIcon || optionIconIos || optionIconMd || optionIconAurora;
      const optionColor = optionData.optionColor;
      let optionClassName = optionData.optionClass || '';
      if ($optionEl[0].disabled) optionClassName += ' disabled';
      const optionGroupEl = $optionEl.parent('optgroup')[0];
      const optionGroupLabel = optionGroupEl && optionGroupEl.label;
      let optionIsLabel = false;
      if (optionGroupEl && optionGroupEl !== previousGroupEl) {
        optionIsLabel = true;
        previousGroupEl = optionGroupEl;
        items.push({
          groupLabel: optionGroupLabel,
          isLabel: optionIsLabel
        });
      }
      items.push({
        value: $optionEl[0].value,
        text: $optionEl[0].textContent.trim(),
        selected: $optionEl[0].selected,
        groupEl: optionGroupEl,
        groupLabel: optionGroupLabel,
        image: optionImage,
        icon: optionIcon,
        iconIos: optionIconIos,
        iconMd: optionIconMd,
        iconAurora: optionIconAurora,
        color: optionColor,
        className: optionClassName,
        disabled: $optionEl[0].disabled,
        id: ss.id,
        hasMedia: optionHasMedia,
        checkbox: ss.inputType === 'checkbox',
        radio: ss.inputType === 'radio',
        inputName: ss.inputName,
        inputType: ss.inputType
      });
    });
    ss.items = items;
    return items;
  }
  renderSearchbar() {
    const ss = this;
    if (ss.params.renderSearchbar) return ss.params.renderSearchbar.call(ss);
    return jsx("form", {
      class: "searchbar"
    }, jsx("div", {
      class: "searchbar-inner"
    }, jsx("div", {
      class: "searchbar-input-wrap"
    }, jsx("input", {
      type: "search",
      spellcheck: ss.params.searchbarSpellcheck || 'false',
      placeholder: ss.params.searchbarPlaceholder
    }), jsx("i", {
      class: "searchbar-icon"
    }), jsx("span", {
      class: "input-clear-button"
    })), ss.params.searchbarDisableButton && jsx("span", {
      class: "searchbar-disable-button"
    }, ss.params.searchbarDisableText)));
  }
  renderItem(item, index) {
    const ss = this;
    if (ss.params.renderItem) return ss.params.renderItem.call(ss, item, index);
    function getIconContent(iconValue) {
      if (iconValue === void 0) {
        iconValue = '';
      }
      if (iconValue.indexOf(':') >= 0) {
        return iconValue.split(':')[1];
      }
      return '';
    }
    function getIconClass(iconValue) {
      if (iconValue === void 0) {
        iconValue = '';
      }
      if (iconValue.indexOf(':') >= 0) {
        let className = iconValue.split(':')[0];
        if (className === 'f7') className = 'f7-icons';
        if (className === 'material') className = 'material-icons';
        return className;
      }
      return iconValue;
    }
    let itemHtml;
    if (item.isLabel) {
      itemHtml = `<li class="item-divider">${item.groupLabel}</li>`;
    } else {
      let selected = item.selected;
      let disabled;
      if (ss.params.virtualList) {
        const ssValue = ss.getValue();
        selected = ss.multiple ? ssValue.indexOf(item.value) >= 0 : ssValue === item.value;
        if (ss.multiple) {
          disabled = ss.multiple && !selected && ssValue.length === parseInt(ss.maxLength, 10);
        }
      }
      const {
        icon,
        iconIos,
        iconMd,
        iconAurora
      } = item;
      const hasIcon = icon || iconIos || iconMd || iconAurora;
      const iconContent = getIconContent(icon || iconIos || iconMd || iconAurora || '');
      const iconClass = getIconClass(icon || iconIos || iconMd || iconAurora || '');
      itemHtml = jsx("li", {
        class: `${item.className || ''}${disabled ? ' disabled' : ''}`
      }, jsx("label", {
        class: `item-${item.inputType} item-content`
      }, jsx("input", {
        type: item.inputType,
        name: item.inputName,
        value: item.value,
        _checked: selected
      }), jsx("i", {
        class: `icon icon-${item.inputType}`
      }), item.hasMedia && jsx("div", {
        class: "item-media"
      }, hasIcon && jsx("i", {
        class: `icon ${iconClass}`
      }, iconContent), item.image && jsx("img", {
        src: item.image
      })), jsx("div", {
        class: "item-inner"
      }, jsx("div", {
        class: `item-title${item.color ? ` text-color-${item.color}` : ''}`
      }, item.text))));
    }
    return itemHtml;
  }
  renderItems() {
    const ss = this;
    if (ss.params.renderItems) return ss.params.renderItems.call(ss, ss.items);
    const itemsHtml = `
      ${ss.items.map((item, index) => `${ss.renderItem(item, index)}`).join('')}
    `;
    return itemsHtml;
  }
  renderPage() {
    const ss = this;
    if (ss.params.renderPage) return ss.params.renderPage.call(ss, ss.items);
    let pageTitle = ss.params.pageTitle;
    if (typeof pageTitle === 'undefined') {
      const $itemTitleEl = ss.$el.find('.item-title');
      pageTitle = $itemTitleEl.length ? $itemTitleEl.text().trim() : '';
    }
    const cssClass = ss.params.cssClass;
    return jsx("div", {
      class: `page smart-select-page ${cssClass}`,
      "data-name": "smart-select-page",
      "data-select-name": ss.selectName
    }, jsx("div", {
      class: `navbar ${ss.params.navbarColorTheme ? `color-${ss.params.navbarColorTheme}` : ''}`
    }, jsx("div", {
      class: "navbar-bg"
    }), jsx("div", {
      class: `navbar-inner sliding ${ss.params.navbarColorTheme ? `color-${ss.params.navbarColorTheme}` : ''}`
    }, jsx("div", {
      class: "left"
    }, jsx("a", {
      class: "link back"
    }, jsx("i", {
      class: "icon icon-back"
    }), jsx("span", {
      class: "if-not-md"
    }, ss.params.pageBackLinkText))), pageTitle && jsx("div", {
      class: "title"
    }, pageTitle), ss.params.searchbar && jsx("div", {
      class: "subnavbar"
    }, ss.renderSearchbar()))), ss.params.searchbar && jsx("div", {
      class: "searchbar-backdrop"
    }), jsx("div", {
      class: "page-content"
    }, jsx("div", {
      class: `list smart-select-list-${ss.id} ${ss.params.virtualList ? ' virtual-list' : ''} ${ss.params.formColorTheme ? `color-${ss.params.formColorTheme}` : ''}`
    }, jsx("ul", null, !ss.params.virtualList && ss.renderItems(ss.items)))));
  }
  renderPopup() {
    const ss = this;
    if (ss.params.renderPopup) return ss.params.renderPopup.call(ss, ss.items);
    let pageTitle = ss.params.pageTitle;
    if (typeof pageTitle === 'undefined') {
      const $itemTitleEl = ss.$el.find('.item-title');
      pageTitle = $itemTitleEl.length ? $itemTitleEl.text().trim() : '';
    }
    const cssClass = ss.params.cssClass || '';
    return jsx("div", {
      class: `popup smart-select-popup ${cssClass} ${ss.params.popupTabletFullscreen ? 'popup-tablet-fullscreen' : ''}`,
      "data-select-name": ss.selectName
    }, jsx("div", {
      class: "view"
    }, jsx("div", {
      class: `page smart-select-page ${ss.params.searchbar ? 'page-with-subnavbar' : ''}`,
      "data-name": "smart-select-page"
    }, jsx("div", {
      class: `navbar ${ss.params.navbarColorTheme ? `color-${ss.params.navbarColorTheme}` : ''}`
    }, jsx("div", {
      class: "navbar-bg"
    }), jsx("div", {
      class: "navbar-inner sliding"
    }, pageTitle && jsx("div", {
      class: "title"
    }, pageTitle), jsx("div", {
      class: "right"
    }, jsx("a", {
      class: "link popup-close",
      "data-popup": `.smart-select-popup[data-select-name='${ss.selectName}']`
    }, ss.params.popupCloseLinkText)), ss.params.searchbar && jsx("div", {
      class: "subnavbar"
    }, ss.renderSearchbar()))), ss.params.searchbar && jsx("div", {
      class: "searchbar-backdrop"
    }), jsx("div", {
      class: "page-content"
    }, jsx("div", {
      class: `list smart-select-list-${ss.id} ${ss.params.virtualList ? ' virtual-list' : ''} ${ss.params.formColorTheme ? `color-${ss.params.formColorTheme}` : ''}`
    }, jsx("ul", null, !ss.params.virtualList && ss.renderItems(ss.items)))))));
  }
  renderSheet() {
    const ss = this;
    if (ss.params.renderSheet) return ss.params.renderSheet.call(ss, ss.items);
    const cssClass = ss.params.cssClass;
    // prettier-ignore
    return jsx("div", {
      class: `sheet-modal smart-select-sheet ${cssClass}`,
      "data-select-name": ss.selectName
    }, jsx("div", {
      class: `toolbar toolbar-top ${ss.params.toolbarColorTheme ? `color-${ss.params.toolbarColorTheme}` : ''}`
    }, jsx("div", {
      class: "toolbar-inner"
    }, jsx("div", {
      class: "left"
    }), jsx("div", {
      class: "right"
    }, jsx("a", {
      class: "link sheet-close"
    }, ss.params.sheetCloseLinkText)))), jsx("div", {
      class: "sheet-modal-inner"
    }, jsx("div", {
      class: "page-content"
    }, jsx("div", {
      class: `list smart-select-list-${ss.id} ${ss.params.virtualList ? ' virtual-list' : ''} ${ss.params.formColorTheme ? `color-${ss.params.formColorTheme}` : ''}`
    }, jsx("ul", null, !ss.params.virtualList && ss.renderItems(ss.items))))));
  }
  renderPopover() {
    const ss = this;
    if (ss.params.renderPopover) return ss.params.renderPopover.call(ss, ss.items);
    const cssClass = ss.params.cssClass;
    // prettier-ignore
    return jsx("div", {
      class: `popover smart-select-popover ${cssClass}`,
      "data-select-name": ss.selectName
    }, jsx("div", {
      class: "popover-inner"
    }, jsx("div", {
      class: `list smart-select-list-${ss.id} ${ss.params.virtualList ? ' virtual-list' : ''} ${ss.params.formColorTheme ? `color-${ss.params.formColorTheme}` : ''}`
    }, jsx("ul", null, !ss.params.virtualList && ss.renderItems(ss.items)))));
  }
  scrollToSelectedItem() {
    const ss = this;
    const {
      params,
      $containerEl
    } = ss;
    if (!ss.opened) return ss;
    if (params.virtualList) {
      let selectedIndex;
      ss.vl.items.forEach((item, index) => {
        if (typeof selectedIndex === 'undefined' && item.selected) {
          selectedIndex = index;
        }
      });
      if (typeof selectedIndex !== 'undefined') {
        ss.vl.scrollToItem(selectedIndex);
      }
    } else {
      const $selectedItemEl = $containerEl.find('input:checked').parents('li');
      if (!$selectedItemEl.length) return ss;
      const $scrollableEl = $containerEl.find('.page-content, .popover-inner');
      if (!$scrollableEl.length) return ss;
      $scrollableEl.scrollTop($selectedItemEl.offset().top - $scrollableEl.offset().top - parseInt($scrollableEl.css('padding-top'), 10));
    }
    return ss;
  }
  onOpen(type, containerEl) {
    const ss = this;
    const app = ss.app;
    const $containerEl = $(containerEl);
    ss.$containerEl = $containerEl;
    ss.openedIn = type;
    ss.opened = true;

    // Init VL
    if (ss.params.virtualList) {
      ss.vl = app.virtualList.create({
        el: $containerEl.find('.virtual-list'),
        items: ss.items,
        renderItem: ss.renderItem.bind(ss),
        height: ss.params.virtualListHeight,
        searchByItem(query, item) {
          if (item.text && removeDiacritics(item.text).toLowerCase().indexOf(query.trim().toLowerCase()) >= 0) return true;
          return false;
        }
      });
    }
    if (ss.params.scrollToSelectedItem) {
      ss.scrollToSelectedItem();
    }

    // Init SB
    if (ss.params.searchbar) {
      let $searchbarEl = $containerEl.find('.searchbar');
      if (type === 'page' && app.theme === 'ios') {
        $searchbarEl = $(app.navbar.getElByPage($containerEl)).find('.searchbar');
      }
      if (ss.params.appendSearchbarNotFound && (type === 'page' || type === 'popup')) {
        let $notFoundEl = null;
        if (typeof ss.params.appendSearchbarNotFound === 'string') {
          $notFoundEl = $(`<div class="block searchbar-not-found">${ss.params.appendSearchbarNotFound}</div>`);
        } else if (typeof ss.params.appendSearchbarNotFound === 'boolean') {
          $notFoundEl = $('<div class="block searchbar-not-found">Nothing found</div>');
        } else {
          $notFoundEl = ss.params.appendSearchbarNotFound;
        }
        if ($notFoundEl) {
          $containerEl.find('.page-content').append($notFoundEl[0]);
        }
      }
      const searchbarParams = extend({
        el: $searchbarEl,
        backdropEl: $containerEl.find('.searchbar-backdrop'),
        searchContainer: `.smart-select-list-${ss.id}`,
        searchIn: '.item-title'
      }, typeof ss.params.searchbar === 'object' ? ss.params.searchbar : {});
      ss.searchbar = app.searchbar.create(searchbarParams);
    }

    // Check for max length
    if (ss.maxLength) {
      ss.checkMaxLength();
    }

    // Close on select
    if (ss.params.closeOnSelect) {
      ss.$containerEl.find(`input[type="radio"][name="${ss.inputName}"]:checked`).parents('label').once('click', () => {
        ss.close();
      });
    }

    // Attach input events
    ss.attachInputsEvents();
    ss.$el.trigger('smartselect:open');
    ss.emit('local::open smartSelectOpen', ss);
  }
  onOpened() {
    const ss = this;
    ss.$el.trigger('smartselect:opened');
    ss.emit('local::opened smartSelectOpened', ss);
  }
  onClose() {
    const ss = this;
    if (ss.destroyed) return;

    // Destroy VL
    if (ss.vl && ss.vl.destroy) {
      ss.vl.destroy();
      ss.vl = null;
      delete ss.vl;
    }

    // Destroy SB
    if (ss.searchbar && ss.searchbar.destroy) {
      ss.searchbar.destroy();
      ss.searchbar = null;
      delete ss.searchbar;
    }
    // Detach events
    ss.detachInputsEvents();
    ss.$el.trigger('smartselect:close');
    ss.emit('local::close smartSelectClose', ss);
  }
  onClosed() {
    const ss = this;
    if (ss.destroyed) return;
    ss.opened = false;
    ss.$containerEl = null;
    delete ss.$containerEl;
    ss.$el.trigger('smartselect:closed');
    ss.emit('local::closed smartSelectClosed', ss);
  }
  openPage() {
    const ss = this;
    if (ss.opened) return ss;
    ss.getItemsData();
    const pageHtml = ss.renderPage(ss.items);
    ss.view.router.navigate({
      url: ss.url,
      route: {
        content: pageHtml,
        path: ss.url,
        on: {
          pageBeforeIn(e, page) {
            ss.onOpen('page', page.el);
          },
          pageAfterIn(e, page) {
            ss.onOpened('page', page.el);
          },
          pageBeforeOut(e, page) {
            ss.onClose('page', page.el);
          },
          pageAfterOut(e, page) {
            ss.onClosed('page', page.el);
          }
        }
      }
    });
    return ss;
  }
  openPopup() {
    const ss = this;
    if (ss.opened) return ss;
    ss.getItemsData();
    const popupHtml = ss.renderPopup(ss.items);
    const popupParams = {
      content: popupHtml,
      push: ss.params.popupPush,
      swipeToClose: ss.params.popupSwipeToClose,
      on: {
        popupOpen(popup) {
          ss.onOpen('popup', popup.el);
        },
        popupOpened(popup) {
          ss.onOpened('popup', popup.el);
        },
        popupClose(popup) {
          ss.onClose('popup', popup.el);
        },
        popupClosed(popup) {
          ss.onClosed('popup', popup.el);
        }
      }
    };
    if (ss.params.routableModals && ss.view) {
      ss.view.router.navigate({
        url: ss.url,
        route: {
          path: ss.url,
          popup: popupParams
        }
      });
    } else {
      ss.modal = ss.app.popup.create(popupParams).open();
    }
    return ss;
  }
  openSheet() {
    const ss = this;
    if (ss.opened) return ss;
    ss.getItemsData();
    const sheetHtml = ss.renderSheet(ss.items);
    const sheetParams = {
      content: sheetHtml,
      backdrop: ss.params.sheetBackdrop,
      scrollToEl: ss.$el,
      closeByOutsideClick: true,
      push: ss.params.sheetPush,
      swipeToClose: ss.params.sheetSwipeToClose,
      on: {
        sheetOpen(sheet) {
          ss.onOpen('sheet', sheet.el);
        },
        sheetOpened(sheet) {
          ss.onOpened('sheet', sheet.el);
        },
        sheetClose(sheet) {
          ss.onClose('sheet', sheet.el);
        },
        sheetClosed(sheet) {
          ss.onClosed('sheet', sheet.el);
        }
      }
    };
    if (ss.params.routableModals && ss.view) {
      ss.view.router.navigate({
        url: ss.url,
        route: {
          path: ss.url,
          sheet: sheetParams
        }
      });
    } else {
      ss.modal = ss.app.sheet.create(sheetParams).open();
    }
    return ss;
  }
  openPopover() {
    const ss = this;
    if (ss.opened) return ss;
    ss.getItemsData();
    const popoverHtml = ss.renderPopover(ss.items);
    const popoverParams = {
      content: popoverHtml,
      targetEl: ss.$el,
      on: {
        popoverOpen(popover) {
          ss.onOpen('popover', popover.el);
        },
        popoverOpened(popover) {
          ss.onOpened('popover', popover.el);
        },
        popoverClose(popover) {
          ss.onClose('popover', popover.el);
        },
        popoverClosed(popover) {
          ss.onClosed('popover', popover.el);
        }
      }
    };
    if (ss.params.routableModals && ss.view) {
      ss.view.router.navigate({
        url: ss.url,
        route: {
          path: ss.url,
          popover: popoverParams
        }
      });
    } else {
      ss.modal = ss.app.popover.create(popoverParams).open();
    }
    return ss;
  }
  open(type) {
    const ss = this;
    if (ss.opened) return ss;
    let prevented = false;
    function prevent() {
      prevented = true;
    }
    if (ss.$el) {
      ss.$el.trigger('smartselect:beforeopen', {
        prevent
      });
    }
    ss.emit('local::beforeOpen smartSelectBeforeOpen', ss, prevent);
    if (prevented) return ss;
    const openIn = type || ss.params.openIn;
    ss[`open${openIn.split('').map((el, index) => {
      if (index === 0) return el.toUpperCase();
      return el;
    }).join('')}`]();
    return ss;
  }
  close() {
    const ss = this;
    if (!ss.opened) return ss;
    if (ss.params.routableModals && ss.view || ss.openedIn === 'page') {
      ss.view.router.back();
    } else {
      ss.modal.once('modalClosed', () => {
        nextTick(() => {
          if (ss.destroyed) return;
          ss.modal.destroy();
          delete ss.modal;
        });
      });
      ss.modal.close();
    }
    return ss;
  }
  init() {
    const ss = this;
    ss.attachEvents();
    ss.setValueText();
  }
  destroy() {
    const ss = this;
    ss.emit('local::beforeDestroy smartSelectBeforeDestroy', ss);
    ss.$el.trigger('smartselect:beforedestroy');
    ss.detachEvents();
    delete ss.$el[0].f7SmartSelect;
    deleteProps(ss);
    ss.destroyed = true;
  }
};
var SmartSelect$2 = SmartSelect$1;

var SmartSelect = {
  name: 'smartSelect',
  params: {
    smartSelect: {
      el: undefined,
      valueEl: undefined,
      setValueText: true,
      formatValueText: null,
      openIn: 'page',
      // or 'popup' or 'sheet' or 'popover'
      popupPush: false,
      popupSwipeToClose: undefined,
      // defaults to app
      sheetPush: false,
      sheetSwipeToClose: undefined,
      // defaults to app
      sheetBackdrop: false,
      pageTitle: undefined,
      pageBackLinkText: 'Back',
      popupCloseLinkText: 'Close',
      popupTabletFullscreen: false,
      sheetCloseLinkText: 'Done',
      searchbar: false,
      searchbarPlaceholder: 'Search',
      searchbarDisableText: 'Cancel',
      searchbarDisableButton: undefined,
      searchbarSpellcheck: false,
      closeOnSelect: false,
      virtualList: false,
      virtualListHeight: undefined,
      scrollToSelectedItem: false,
      formColorTheme: undefined,
      navbarColorTheme: undefined,
      routableModals: false,
      url: 'select/',
      cssClass: '',
      /*
        Custom render functions
      */
      renderPage: undefined,
      renderPopup: undefined,
      renderSheet: undefined,
      renderPopover: undefined,
      renderItems: undefined,
      renderItem: undefined,
      renderSearchbar: undefined
    }
  },
  static: {
    SmartSelect: SmartSelect$2
  },
  create() {
    const app = this;
    app.smartSelect = extend(ConstructorMethods({
      defaultSelector: '.smart-select',
      constructor: SmartSelect$2,
      app,
      domProp: 'f7SmartSelect'
    }), {
      open(smartSelectEl) {
        const ss = app.smartSelect.get(smartSelectEl);
        if (ss && ss.open) return ss.open();
        return undefined;
      },
      close(smartSelectEl) {
        const ss = app.smartSelect.get(smartSelectEl);
        if (ss && ss.close) return ss.close();
        return undefined;
      }
    });
  },
  on: {
    tabMounted(tabEl) {
      const app = this;
      $(tabEl).find('.smart-select-init').each(smartSelectEl => {
        app.smartSelect.create(extend({
          el: smartSelectEl
        }, $(smartSelectEl).dataset()));
      });
    },
    tabBeforeRemove(tabEl) {
      $(tabEl).find('.smart-select-init').each(smartSelectEl => {
        if (smartSelectEl.f7SmartSelect && smartSelectEl.f7SmartSelect.destroy) {
          smartSelectEl.f7SmartSelect.destroy();
        }
      });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.smart-select-init').each(smartSelectEl => {
        app.smartSelect.create(extend({
          el: smartSelectEl
        }, $(smartSelectEl).dataset()));
      });
    },
    pageBeforeRemove(page) {
      page.$el.find('.smart-select-init').each(smartSelectEl => {
        if (smartSelectEl.f7SmartSelect && smartSelectEl.f7SmartSelect.destroy) {
          smartSelectEl.f7SmartSelect.destroy();
        }
      });
    }
  },
  clicks: {
    '.smart-select': function open($clickedEl, data) {
      const app = this;
      if (!$clickedEl[0].f7SmartSelect) {
        const ss = app.smartSelect.create(extend({
          el: $clickedEl
        }, data));
        ss.open();
      }
    }
  },
  vnode: {
    'smart-select-init': {
      insert(vnode) {
        const app = this;
        const smartSelectEl = vnode.elm;
        app.smartSelect.create(extend({
          el: smartSelectEl
        }, $(smartSelectEl).dataset()));
      },
      destroy(vnode) {
        const smartSelectEl = vnode.elm;
        if (smartSelectEl.f7SmartSelect && smartSelectEl.f7SmartSelect.destroy) {
          smartSelectEl.f7SmartSelect.destroy();
        }
      }
    }
  }
};

let Range$1 = class Range extends Framework7Class$1 {
  constructor(app, params) {
    super(params, [app]);
    const range = this;
    const support = getSupport();
    const defaults = {
      el: null,
      inputEl: null,
      dual: false,
      step: 1,
      label: false,
      min: 0,
      max: 100,
      value: 0,
      draggableBar: true,
      vertical: false,
      verticalReversed: false,
      formatLabel: null,
      scale: false,
      scaleSteps: 5,
      scaleSubSteps: 0,
      formatScaleLabel: null,
      limitKnobPosition: app.theme === 'ios'
    };

    // Extend defaults with modules params
    range.useModulesParams(defaults);
    range.params = extend(defaults, params);
    const el = range.params.el;
    if (!el) return range;
    const $el = $(el);
    if ($el.length === 0) return range;
    if ($el[0].f7Range) return $el[0].f7Range;
    const dataset = $el.dataset();
    'step min max value scaleSteps scaleSubSteps'.split(' ').forEach(paramName => {
      if (typeof params[paramName] === 'undefined' && typeof dataset[paramName] !== 'undefined') {
        range.params[paramName] = parseFloat(dataset[paramName]);
      }
    });
    'dual label vertical verticalReversed scale'.split(' ').forEach(paramName => {
      if (typeof params[paramName] === 'undefined' && typeof dataset[paramName] !== 'undefined') {
        range.params[paramName] = dataset[paramName];
      }
    });
    if (!range.params.value) {
      if (typeof dataset.value !== 'undefined') range.params.value = dataset.value;
      if (typeof dataset.valueLeft !== 'undefined' && typeof dataset.valueRight !== 'undefined') {
        range.params.value = [parseFloat(dataset.valueLeft), parseFloat(dataset.valueRight)];
      }
    }
    let $inputEl;
    if (!range.params.dual) {
      if (range.params.inputEl) {
        $inputEl = $(range.params.inputEl);
      } else if ($el.find('input[type="range"]').length) {
        $inputEl = $el.find('input[type="range"]').eq(0);
      }
    }
    const {
      dual,
      step,
      label,
      min,
      max,
      value,
      vertical,
      verticalReversed,
      scale,
      scaleSteps,
      scaleSubSteps,
      limitKnobPosition
    } = range.params;
    extend(range, {
      app,
      $el,
      el: $el[0],
      $inputEl,
      inputEl: $inputEl ? $inputEl[0] : undefined,
      dual,
      step,
      label,
      min,
      max,
      value,
      previousValue: value,
      vertical,
      verticalReversed,
      scale,
      scaleSteps,
      scaleSubSteps,
      limitKnobPosition
    });
    if ($inputEl) {
      'step min max'.split(' ').forEach(paramName => {
        if (!params[paramName] && $inputEl.attr(paramName)) {
          range.params[paramName] = parseFloat($inputEl.attr(paramName));
          range[paramName] = parseFloat($inputEl.attr(paramName));
        }
      });
      if (typeof $inputEl.val() !== 'undefined') {
        range.params.value = parseFloat($inputEl.val());
        range.value = parseFloat($inputEl.val());
      }
    }

    // Dual
    if (range.dual) {
      $el.addClass('range-slider-dual');
    }
    if (range.label) {
      $el.addClass('range-slider-label');
    }

    // Vertical
    if (range.vertical) {
      $el.addClass('range-slider-vertical');
      if (range.verticalReversed) {
        $el.addClass('range-slider-vertical-reversed');
      }
    } else {
      $el.addClass('range-slider-horizontal');
    }

    // Check for layout
    const $barEl = $('<div class="range-bar"></div>');
    const $barActiveEl = $('<div class="range-bar-active"></div>');
    $barEl.append($barActiveEl);

    // Create Knobs
    // prettier-ignore
    const knobHTML = `
      <div class="range-knob-wrap">
        <div class="range-knob"></div>
        ${range.label ? '<div class="range-knob-label"></div>' : ''}
      </div>
    `;
    const knobs = [$(knobHTML)];
    if (range.dual) {
      knobs.push($(knobHTML));
    }
    $el.append($barEl);
    knobs.forEach($knobEl => {
      $el.append($knobEl);
    });

    // Labels
    const labels = [];
    if (range.label) {
      labels.push(knobs[0].find('.range-knob-label'));
      if (range.dual) {
        labels.push(knobs[1].find('.range-knob-label'));
      }
    }

    // Scale
    let $scaleEl;
    if (range.scale && range.scaleSteps >= 1) {
      $scaleEl = $(`
        <div class="range-scale">
          ${range.renderScale()}
        </div>
      `);
      $el.append($scaleEl);
    }
    extend(range, {
      knobs,
      labels,
      $barEl,
      $barActiveEl,
      $scaleEl
    });
    $el[0].f7Range = range;

    // Touch Events
    let isTouched;
    const touchesStart = {};
    let isScrolling;
    let rangeOffset;
    let rangeOffsetLeft;
    let rangeOffsetTop;
    let $touchedKnobEl;
    let dualValueIndex;
    let valueChangedByTouch;
    let targetTouchIdentifier;
    function onTouchChange() {
      valueChangedByTouch = true;
    }
    function handleTouchStart(e) {
      if (isTouched) return;
      if (!range.params.draggableBar) {
        if ($(e.target).closest('.range-knob').length === 0) {
          return;
        }
      }
      valueChangedByTouch = false;
      touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      if (e.type === 'touchstart') {
        targetTouchIdentifier = e.targetTouches[0].identifier;
      }
      isTouched = true;
      isScrolling = undefined;
      rangeOffset = $el.offset();
      rangeOffsetLeft = rangeOffset.left;
      rangeOffsetTop = rangeOffset.top;
      let progress;
      if (range.vertical) {
        progress = (touchesStart.y - rangeOffsetTop) / range.rangeHeight;
        if (!range.verticalReversed) progress = 1 - progress;
      } else if (range.app.rtl) {
        progress = (rangeOffsetLeft + range.rangeWidth - touchesStart.x) / range.rangeWidth;
      } else {
        progress = (touchesStart.x - rangeOffsetLeft) / range.rangeWidth;
      }
      let newValue = progress * (range.max - range.min) + range.min;
      if (range.dual) {
        if (Math.abs(range.value[0] - newValue) < Math.abs(range.value[1] - newValue)) {
          dualValueIndex = 0;
          $touchedKnobEl = range.knobs[0];
          newValue = [newValue, range.value[1]];
        } else {
          dualValueIndex = 1;
          $touchedKnobEl = range.knobs[1];
          newValue = [range.value[0], newValue];
        }
      } else {
        $touchedKnobEl = range.knobs[0];
        newValue = progress * (range.max - range.min) + range.min;
      }
      nextTick(() => {
        if (isTouched) $touchedKnobEl.addClass('range-knob-active-state');
      }, 70);
      range.on('change', onTouchChange);
      range.setValue(newValue, true);
    }
    function handleTouchMove(e) {
      if (!isTouched) return;
      let pageX;
      let pageY;
      if (e.type === 'touchmove') {
        for (let i = 0; i < e.targetTouches.length; i += 1) {
          if (e.targetTouches[i].identifier === targetTouchIdentifier) {
            pageX = e.targetTouches[i].pageX;
            pageY = e.targetTouches[i].pageY;
          }
        }
      } else {
        pageX = e.pageX;
        pageY = e.pageY;
      }
      if (typeof pageX === 'undefined' && typeof pageY === 'undefined') return;
      if (typeof isScrolling === 'undefined' && !range.vertical) {
        isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x));
      }
      if (isScrolling) {
        isTouched = false;
        return;
      }
      e.preventDefault();
      let progress;
      if (range.vertical) {
        progress = (pageY - rangeOffsetTop) / range.rangeHeight;
        if (!range.verticalReversed) progress = 1 - progress;
      } else if (range.app.rtl) {
        progress = (rangeOffsetLeft + range.rangeWidth - pageX) / range.rangeWidth;
      } else {
        progress = (pageX - rangeOffsetLeft) / range.rangeWidth;
      }
      let newValue = progress * (range.max - range.min) + range.min;
      if (range.dual) {
        let leftValue;
        let rightValue;
        if (dualValueIndex === 0) {
          leftValue = newValue;
          rightValue = range.value[1];
          if (leftValue > rightValue) {
            rightValue = leftValue;
          }
        } else {
          leftValue = range.value[0];
          rightValue = newValue;
          if (rightValue < leftValue) {
            leftValue = rightValue;
          }
        }
        newValue = [leftValue, rightValue];
      }
      range.setValue(newValue, true);
    }
    function handleTouchEnd(e) {
      if (e.type === 'touchend') {
        let touchEnded;
        for (let i = 0; i < e.changedTouches.length; i += 1) {
          if (e.changedTouches[i].identifier === targetTouchIdentifier) touchEnded = true;
        }
        if (!touchEnded) return;
      }
      if (!isTouched) {
        if (isScrolling) $touchedKnobEl.removeClass('range-knob-active-state');
        isTouched = false;
        return;
      }
      range.off('change', onTouchChange);
      isTouched = false;
      $touchedKnobEl.removeClass('range-knob-active-state');
      if (valueChangedByTouch && range.$inputEl && !range.dual) {
        range.$inputEl.trigger('change');
      }
      valueChangedByTouch = false;
      if (typeof range.previousValue !== 'undefined') {
        if (range.dual && (range.previousValue[0] !== range.value[0] || range.previousValue[1] !== range.value[1]) || !range.dual && range.previousValue !== range.value) {
          range.$el.trigger('range:changed', range.value);
          range.emit('local::changed rangeChanged', range, range.value);
        }
      }
    }
    function handleResize() {
      range.calcSize();
      range.layout();
    }
    let parentModals;
    let parentPanel;
    let parentPage;
    range.attachEvents = function attachEvents() {
      const passive = support.passiveListener ? {
        passive: true
      } : false;
      range.$el.on(app.touchEvents.start, handleTouchStart, passive);
      app.on('touchmove', handleTouchMove);
      app.on('touchend:passive', handleTouchEnd);
      app.on('tabShow', handleResize);
      app.on('resize', handleResize);
      parentModals = range.$el.parents('.sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast');
      parentModals.on('modal:open', handleResize);
      parentPanel = range.$el.parents('.panel');
      parentPanel.on('panel:open panel:resize', handleResize);
      parentPage = range.$el.parents('.page').eq(0);
      parentPage.on('page:reinit', handleResize);
    };
    range.detachEvents = function detachEvents() {
      const passive = support.passiveListener ? {
        passive: true
      } : false;
      range.$el.off(app.touchEvents.start, handleTouchStart, passive);
      app.off('touchmove', handleTouchMove);
      app.off('touchend:passive', handleTouchEnd);
      app.off('tabShow', handleResize);
      app.off('resize', handleResize);
      if (parentModals) {
        parentModals.off('modal:open', handleResize);
      }
      if (parentPanel) {
        parentPanel.off('panel:open panel:resize', handleResize);
      }
      if (parentPage) {
        parentPage.off('page:reinit', handleResize);
      }
      parentModals = null;
      parentPanel = null;
      parentPage = null;
    };

    // Install Modules
    range.useModules();

    // Init
    range.init();
    return range;
  }
  calcSize() {
    const range = this;
    if (range.vertical) {
      const height = range.$el.outerHeight();
      if (height === 0) return;
      range.rangeHeight = height;
      range.knobHeight = range.knobs[0].outerHeight();
    } else {
      const width = range.$el.outerWidth();
      if (width === 0) return;
      range.rangeWidth = width;
      range.knobWidth = range.knobs[0].outerWidth();
    }
  }
  layout() {
    const range = this;
    const {
      app,
      knobWidth,
      knobHeight,
      rangeWidth,
      rangeHeight,
      min,
      max,
      knobs,
      $barActiveEl,
      value,
      label,
      labels,
      vertical,
      verticalReversed,
      limitKnobPosition
    } = range;
    const knobSize = vertical ? knobHeight : knobWidth;
    const rangeSize = vertical ? rangeHeight : rangeWidth;
    // eslint-disable-next-line
    const positionProperty = vertical ? verticalReversed ? 'top' : 'bottom' : app.rtl ? 'right' : 'left';
    if (range.dual) {
      const progress = [(value[0] - min) / (max - min), (value[1] - min) / (max - min)];
      $barActiveEl.css({
        [positionProperty]: `${progress[0] * 100}%`,
        [vertical ? 'height' : 'width']: `${(progress[1] - progress[0]) * 100}%`
      });
      knobs.forEach(($knobEl, knobIndex) => {
        let startPos = rangeSize * progress[knobIndex];
        if (limitKnobPosition) {
          const realStartPos = rangeSize * progress[knobIndex] - knobSize / 2;
          if (realStartPos < 0) startPos = knobSize / 2;
          if (realStartPos + knobSize > rangeSize) startPos = rangeSize - knobSize / 2;
        }
        $knobEl.css(positionProperty, `${startPos}px`);
        if (label) labels[knobIndex].text(range.formatLabel(value[knobIndex], labels[knobIndex][0]));
      });
    } else {
      const progress = (value - min) / (max - min);
      $barActiveEl.css(vertical ? 'height' : 'width', `${progress * 100}%`);
      let startPos = rangeSize * progress;
      if (limitKnobPosition) {
        const realStartPos = rangeSize * progress - knobSize / 2;
        if (realStartPos < 0) startPos = knobSize / 2;
        if (realStartPos + knobSize > rangeSize) startPos = rangeSize - knobSize / 2;
      }
      knobs[0].css(positionProperty, `${startPos}px`);
      if (label) labels[0].text(range.formatLabel(value, labels[0][0]));
    }
    if (range.dual && value.indexOf(min) >= 0 || !range.dual && value === min) {
      range.$el.addClass('range-slider-min');
    } else {
      range.$el.removeClass('range-slider-min');
    }
    if (range.dual && value.indexOf(max) >= 0 || !range.dual && value === max) {
      range.$el.addClass('range-slider-max');
    } else {
      range.$el.removeClass('range-slider-max');
    }
  }
  setValue(newValue, byTouchMove) {
    const range = this;
    const {
      step,
      min,
      max
    } = range;
    let valueChanged;
    let oldValue;
    if (range.dual) {
      oldValue = [range.value[0], range.value[1]];
      let newValues = newValue;
      if (!Array.isArray(newValues)) newValues = [newValue, newValue];
      if (newValue[0] > newValue[1]) {
        newValues = [newValues[0], newValues[0]];
      }
      newValues = newValues.map(value => Math.max(Math.min(Math.round(value / step) * step, max), min));
      if (newValues[0] === range.value[0] && newValues[1] === range.value[1]) {
        return range;
      }
      newValues.forEach((value, valueIndex) => {
        range.value[valueIndex] = value;
      });
      valueChanged = oldValue[0] !== newValues[0] || oldValue[1] !== newValues[1];
      range.layout();
    } else {
      oldValue = range.value;
      const value = Math.max(Math.min(Math.round(newValue / step) * step, max), min);
      range.value = value;
      range.layout();
      valueChanged = oldValue !== value;
    }
    if (valueChanged) {
      range.previousValue = oldValue;
    }
    // Events
    if (!valueChanged) return range;
    range.$el.trigger('range:change', range.value);
    if (range.$inputEl && !range.dual) {
      range.$inputEl.val(range.value);
      if (!byTouchMove) {
        range.$inputEl.trigger('input change');
      } else {
        range.$inputEl.trigger('input');
      }
    }
    if (!byTouchMove) {
      range.$el.trigger('range:changed', range.value);
      range.emit('local::changed rangeChanged', range, range.value);
    }
    range.emit('local::change rangeChange', range, range.value);
    return range;
  }
  getValue() {
    return this.value;
  }
  formatLabel(value, labelEl) {
    const range = this;
    if (range.params.formatLabel) return range.params.formatLabel.call(range, value, labelEl);
    return value;
  }
  formatScaleLabel(value) {
    const range = this;
    if (range.params.formatScaleLabel) return range.params.formatScaleLabel.call(range, value);
    return value;
  }
  renderScale() {
    const range = this;
    const {
      app,
      verticalReversed,
      vertical
    } = range;

    // eslint-disable-next-line
    const positionProperty = vertical ? verticalReversed ? 'top' : 'bottom' : app.rtl ? 'right' : 'left';
    let html = '';
    Array.from({
      length: range.scaleSteps + 1
    }).forEach((scaleEl, index) => {
      const scaleStepValue = (range.max - range.min) / range.scaleSteps;
      const scaleValue = range.min + scaleStepValue * index;
      const progress = (scaleValue - range.min) / (range.max - range.min);
      html += `<div class="range-scale-step" style="${positionProperty}: ${progress * 100}%">${range.formatScaleLabel(scaleValue)}</div>`;
      if (range.scaleSubSteps && range.scaleSubSteps > 1 && index < range.scaleSteps) {
        Array.from({
          length: range.scaleSubSteps - 1
        }).forEach((subStepEl, subIndex) => {
          const subStep = scaleStepValue / range.scaleSubSteps;
          const scaleSubValue = scaleValue + subStep * (subIndex + 1);
          const subProgress = (scaleSubValue - range.min) / (range.max - range.min);
          html += `<div class="range-scale-step range-scale-substep" style="${positionProperty}: ${subProgress * 100}%"></div>`;
        });
      }
    });
    return html;
  }
  updateScale() {
    const range = this;
    if (!range.scale || range.scaleSteps < 1) {
      if (range.$scaleEl) range.$scaleEl.remove();
      delete range.$scaleEl;
      return;
    }
    if (!range.$scaleEl) {
      range.$scaleEl = $('<div class="range-scale"></div>');
      range.$el.append(range.$scaleEl);
    }
    range.$scaleEl.html(range.renderScale());
  }
  init() {
    const range = this;
    range.calcSize();
    range.layout();
    range.attachEvents();
    return range;
  }
  destroy() {
    let range = this;
    range.$el.trigger('range:beforedestroy');
    range.emit('local::beforeDestroy rangeBeforeDestroy', range);
    delete range.$el[0].f7Range;
    range.detachEvents();
    deleteProps(range);
    range = null;
  }
};
var Range$2 = Range$1;

var Range = {
  name: 'range',
  create() {
    const app = this;
    app.range = extend(ConstructorMethods({
      defaultSelector: '.range-slider',
      constructor: Range$2,
      app,
      domProp: 'f7Range'
    }), {
      getValue(el) {
        if (el === void 0) {
          el = '.range-slider';
        }
        const range = app.range.get(el);
        if (range) return range.getValue();
        return undefined;
      },
      setValue(el, value) {
        if (el === void 0) {
          el = '.range-slider';
        }
        const range = app.range.get(el);
        if (range) return range.setValue(value);
        return undefined;
      }
    });
  },
  static: {
    Range: Range$2
  },
  on: {
    tabMounted(tabEl) {
      const app = this;
      $(tabEl).find('.range-slider-init').each(rangeEl => new Range$2(app, {
        el: rangeEl
      }));
    },
    tabBeforeRemove(tabEl) {
      $(tabEl).find('.range-slider-init').each(rangeEl => {
        if (rangeEl.f7Range) rangeEl.f7Range.destroy();
      });
    },
    pageInit(page) {
      const app = this;
      page.$el.find('.range-slider-init').each(rangeEl => new Range$2(app, {
        el: rangeEl
      }));
    },
    pageBeforeRemove(page) {
      page.$el.find('.range-slider-init').each(rangeEl => {
        if (rangeEl.f7Range) rangeEl.f7Range.destroy();
      });
    }
  },
  vnode: {
    'range-slider-init': {
      insert(vnode) {
        const rangeEl = vnode.elm;
        const app = this;
        app.range.create({
          el: rangeEl
        });
      },
      destroy(vnode) {
        const rangeEl = vnode.elm;
        if (rangeEl.f7Range) rangeEl.f7Range.destroy();
      }
    }
  }
};

export { Accordion$1 as Accordion, Framework7$1 as Framework7, Menu$1 as Menu, Panel, Popup, Range, SmartSelect, Stepper };
