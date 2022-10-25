"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var internal_1 = require("svelte/internal");
function outin(settings) {
    var states = [1, 2, 3, 4, 5, 6, 7];
    var INIT = states[0], OUTRO = states[1], INTRO_DELAYED = states[2], INTRO = states[3], COMPLETED = states[4], ABORTED = states[5], UNDO = states[6];
    var className = "svelte-outin";
    var concurrent = {};
    function findActive(node) {
        var found = Object.entries(concurrent).find(function (_a) {
            var entry = _a[1];
            return entry.out === node || entry["in"] === node;
        });
        if (found) {
            return [found[1], found[0]];
        }
        return [undefined, -1];
    }
    var idle = true;
    var starting = [];
    var autoincrement = 0;
    function splitOptions(transition) {
        return Array.isArray(transition) ? transition : [transition, {}];
    }
    var _a = settings.out
        ? splitOptions(settings.out)
        : splitOptions(settings.transition), outFn = _a[0], outParams = _a[1];
    var _b = settings["in"]
        ? splitOptions(settings["in"])
        : splitOptions(settings.transition), inFn = _b[0], inParams = _b[1];
    function outro(node, options) {
        var _a, _b;
        var config = outFn(node, __assign(__assign({}, outParams), options));
        var position = window.getComputedStyle(node).position;
        if (["fixed", "absolute"].indexOf(position) === -1) {
            (0, internal_1.append_styles)(node, "outin", ".svelte-outin { position: absolute !important; }");
            node.classList.add(className);
        }
        var active = findActive(node)[0];
        if (active) {
            if (idle) {
                active.out = node;
                active["in"] = undefined;
            }
        }
        else if (idle) {
            active = {
                delay: ((_a = config.duration) !== null && _a !== void 0 ? _a : 0) + ((_b = config.delay) !== null && _b !== void 0 ? _b : 0),
                out: node,
                "in": undefined,
                state: INIT
            };
            autoincrement += 1;
            concurrent[autoincrement] = active;
        }
        else {
            return config;
        }
        if (idle) {
            starting.push(active);
        }
        if (active.state === INIT) {
            if (idle) {
                active.state = OUTRO;
                node.addEventListener("outroend", onOutroEnd);
            }
        }
        else if (active.state === INTRO) {
            active.state = UNDO;
        }
        else if (active.state === INTRO_DELAYED) {
            active.state = ABORTED;
        }
        return config;
    }
    function onOutroEnd(e) {
        var node = e.target;
        node.removeEventListener("outroend", onOutroEnd);
        var active = findActive(node)[0];
        if (!active) {
            return;
        }
        if (active.state === INTRO_DELAYED) {
            active.state = INTRO;
        }
    }
    function intro(node, options) {
        var _a, _b, _c;
        node.classList.remove(className);
        var config = inFn(node, __assign(__assign({}, inParams), options));
        var active = findActive(node)[0];
        if (idle) {
            var startIndex = starting.findIndex(function (start) { return start["in"] === undefined; });
            var last = true;
            if (startIndex !== -1) {
                active = starting[startIndex];
                active["in"] = node;
                last = startIndex === starting.length - 1;
            }
            if (last) {
                idle = true;
                starting.length = 0;
            }
        }
        if (!active) {
            idle = false;
            starting.length = 0;
            return config;
        }
        if (!active["in"]) {
            active["in"] = node;
        }
        var first = active["in"] === node;
        if (active.state === OUTRO) {
            if (active.delay === 0) {
                if (first) {
                    active.state = INTRO;
                    node.addEventListener("introend", onIntroEnd);
                }
            }
            else {
                config.delay = active.delay + ((_a = config.delay) !== null && _a !== void 0 ? _a : 0);
                if (first) {
                    active.state = INTRO_DELAYED;
                    node.addEventListener("introend", onIntroEnd);
                }
            }
        }
        else if (active.state === INTRO_DELAYED) {
            config.delay = active.delay + ((_b = config.delay) !== null && _b !== void 0 ? _b : 0);
        }
        else if (active.state === ABORTED) {
            if (first) {
                active.state = INTRO;
                node.addEventListener("introend", onIntroEnd);
            }
        }
        else if (active.state === UNDO) {
            if (first) {
                active.state = INTRO_DELAYED;
                config.delay = active.delay + ((_c = config.delay) !== null && _c !== void 0 ? _c : 0);
                node.addEventListener("introend", onIntroEnd);
            }
        }
        return config;
    }
    function onIntroEnd(e) {
        e.target.removeEventListener("introend", onIntroEnd);
        var _a = findActive(e.target), ref = _a[0], id = _a[1];
        if (!ref) {
            return;
        }
        if (ref.state === INTRO) {
            ref.state = COMPLETED;
            delete concurrent[id];
        }
        else if (ref.state === INTRO_DELAYED) {
            ref.state = COMPLETED;
            ref.out.removeEventListener("outroend", onOutroEnd);
            delete concurrent[id];
        }
    }
    return [outro, intro];
}
exports["default"] = outin;
