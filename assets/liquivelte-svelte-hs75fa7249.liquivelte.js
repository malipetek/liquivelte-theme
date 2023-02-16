import './framework7-liquivelte-get-params-hsf7b0a459.liquivelte.js';

function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
        result[key] = true;
    }
    return result;
}
function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while (low < high) {
        const mid = low + ((high - low) >> 1);
        if (key(mid) <= value) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init)
        return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
    let children = target.childNodes;
    // If target is <head>, there may be children without claim_order
    if (target.nodeName === 'HEAD') {
        const myChildren = [];
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.claim_order !== undefined) {
                myChildren.push(node);
            }
        }
        children = myChildren;
    }
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */
    // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        // with fast path for when we are on the current longest subsequence
        const seqLen = ((longest > 0 && children[m[longest]].claim_order <= current) ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (; last >= cur; last--) {
            toMove.push(children[last]);
        }
        last--;
    }
    for (; last >= 0; last--) {
        toMove.push(children[last]);
    }
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    // Finally, we move the nodes
    for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
            j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
    }
}
function append(target, node) {
    target.appendChild(node);
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
    return style.sheet;
}
function append_hydration(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentNode !== target))) {
            target.actual_end_child = target.firstChild;
        }
        // Skip nodes of undefined ordering
        while ((target.actual_end_child !== null) && (target.actual_end_child.claim_order === undefined)) {
            target.actual_end_child = target.actual_end_child.nextSibling;
        }
        if (node !== target.actual_end_child) {
            // We only insert if the ordering of this node should be modified or the parent node is not target
            if (node.claim_order !== undefined || node.parentNode !== target) {
                target.insertBefore(node, target.actual_end_child);
            }
        }
        else {
            target.actual_end_child = node.nextSibling;
        }
    }
    else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
    }
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
    if (is_hydrating && !anchor) {
        append_hydration(target, node);
    }
    else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
    }
}
function detach(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function children(element) {
    return Array.from(element.childNodes);
}
function init_claim_info(nodes) {
    if (nodes.claim_info === undefined) {
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
    }
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
    // Try to find nodes in an order such that we lengthen the longest increasing subsequence
    init_claim_info(nodes);
    const resultNode = (() => {
        // We first try to find an element after the previous one
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                return node;
            }
        }
        // Otherwise, we try to find one before
        // We iterate in reverse so that we don't go too far back
        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                else if (replacement === undefined) {
                    // Since we spliced before the last_index, we decrease it
                    nodes.claim_info.last_index--;
                }
                return node;
            }
        }
        // If we can't find any matching node, we create a new one
        return createNode();
    })();
    resultNode.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
    return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
    return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0; j < node.attributes.length; j++) {
            const attribute = node.attributes[j];
            if (!attributes[attribute.name]) {
                remove.push(attribute.name);
            }
        }
        remove.forEach(v => node.removeAttribute(v));
        return undefined;
    }, () => create_element(name));
}
function claim_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
    return claim_node(nodes, (node) => node.nodeType === 3, (node) => {
        const dataStr = '' + data;
        if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) {
                return node.splitText(dataStr.length);
            }
        }
        else {
            node.data = dataStr;
        }
    }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
    );
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function find_comment(nodes, text, start) {
    for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
            return i;
        }
    }
    return nodes.length;
}
function claim_html_tag(nodes, is_svg) {
    // find html opening tag
    const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
    const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
    if (start_index === end_index) {
        return new HtmlTagHydration(undefined, is_svg);
    }
    init_claim_info(nodes);
    const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
    detach(html_tag_nodes[0]);
    detach(html_tag_nodes[html_tag_nodes.length - 1]);
    const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
    for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
    }
    return new HtmlTagHydration(claimed_nodes, is_svg);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
        'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
class HtmlTag {
    constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg)
                this.e = svg_element(target.nodeName);
            else
                this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}
class HtmlTagHydration extends HtmlTag {
    constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
    }
    c(html) {
        if (this.l) {
            this.n = this.l;
        }
        else {
            super.c(html);
        }
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert_hydration(this.t, this.n[i], anchor);
        }
    }
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { ownerNode } = info.stylesheet;
            // there is no ownerNode if it runs on jsdom.
            if (ownerNode)
                detach(ownerNode);
        });
        managed_styles.clear();
    });
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
/**
 * Schedules a callback to run immediately before the component is updated after any state change.
 *
 * The first time the callback runs will be before the initial `onMount`
 *
 * https://svelte.dev/docs#run-time-svelte-beforeupdate
 */
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
 *
 * https://svelte.dev/docs#run-time-svelte-onmount
 */
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
/**
 * Schedules a callback to run immediately after the component has been updated.
 *
 * The first time the callback runs will be after the initial `onMount`
 */
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * https://svelte.dev/docs#run-time-svelte-ondestroy
 */
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
 */
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-setcontext
 */
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-getcontext
 */
function getContext(key) {
    return get_current_component().$$.context.get(key);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
    else if (callback) {
        callback();
    }
}
const null_transition = { duration: 0 };
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
            // if the component was destroyed immediately
            // it will update the `$$.on_destroy` reference to `null`.
            // the destructured on_destroy may still reference to the old array
            if (component.$$.on_destroy) {
                component.$$.on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        if (!is_function(callback)) {
            return noop;
        }
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                    subscriber[1]();
                    subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.add(subscriber);
        if (subscribers.size === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function quintInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}

function is_date(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

function tick_spring(ctx, last_value, current_value, target_value) {
    if (typeof current_value === 'number' || is_date(current_value)) {
        // @ts-ignore
        const delta = target_value - current_value;
        // @ts-ignore
        const velocity = (current_value - last_value) / (ctx.dt || 1 / 60); // guard div by 0
        const spring = ctx.opts.stiffness * delta;
        const damper = ctx.opts.damping * velocity;
        const acceleration = (spring - damper) * ctx.inv_mass;
        const d = (velocity + acceleration) * ctx.dt;
        if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
            return target_value; // settled
        }
        else {
            ctx.settled = false; // signal loop to keep ticking
            // @ts-ignore
            return is_date(current_value) ?
                new Date(current_value.getTime() + d) : current_value + d;
        }
    }
    else if (Array.isArray(current_value)) {
        // @ts-ignore
        return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
    }
    else if (typeof current_value === 'object') {
        const next_value = {};
        for (const k in current_value) {
            // @ts-ignore
            next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
        }
        // @ts-ignore
        return next_value;
    }
    else {
        throw new Error(`Cannot spring ${typeof current_value} values`);
    }
}
function spring(value, opts = {}) {
    const store = writable(value);
    const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
    let last_time;
    let task;
    let current_token;
    let last_value = value;
    let target_value = value;
    let inv_mass = 1;
    let inv_mass_recovery_rate = 0;
    let cancel_task = false;
    function set(new_value, opts = {}) {
        target_value = new_value;
        const token = current_token = {};
        if (value == null || opts.hard || (spring.stiffness >= 1 && spring.damping >= 1)) {
            cancel_task = true; // cancel any running animation
            last_time = now();
            last_value = new_value;
            store.set(value = target_value);
            return Promise.resolve();
        }
        else if (opts.soft) {
            const rate = opts.soft === true ? .5 : +opts.soft;
            inv_mass_recovery_rate = 1 / (rate * 60);
            inv_mass = 0; // infinite mass, unaffected by spring forces
        }
        if (!task) {
            last_time = now();
            cancel_task = false;
            task = loop(now => {
                if (cancel_task) {
                    cancel_task = false;
                    task = null;
                    return false;
                }
                inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
                const ctx = {
                    inv_mass,
                    opts: spring,
                    settled: true,
                    dt: (now - last_time) * 60 / 1000
                };
                const next_value = tick_spring(ctx, last_value, value, target_value);
                last_time = now;
                last_value = value;
                store.set(value = next_value);
                if (ctx.settled) {
                    task = null;
                }
                return !ctx.settled;
            });
        }
        return new Promise(fulfil => {
            task.promise.then(() => {
                if (token === current_token)
                    fulfil();
            });
        });
    }
    const spring = {
        set,
        update: (fn, opts) => set(fn(target_value, value), opts),
        subscribe: store.subscribe,
        stiffness,
        damping,
        precision
    };
    return spring;
}

function get_interpolator(a, b) {
    if (a === b || a !== a)
        return () => a;
    const type = typeof a;
    if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
        throw new Error('Cannot interpolate values of different type');
    }
    if (Array.isArray(a)) {
        const arr = b.map((bi, i) => {
            return get_interpolator(a[i], bi);
        });
        return t => arr.map(fn => fn(t));
    }
    if (type === 'object') {
        if (!a || !b)
            throw new Error('Object cannot be null');
        if (is_date(a) && is_date(b)) {
            a = a.getTime();
            b = b.getTime();
            const delta = b - a;
            return t => new Date(a + t * delta);
        }
        const keys = Object.keys(b);
        const interpolators = {};
        keys.forEach(key => {
            interpolators[key] = get_interpolator(a[key], b[key]);
        });
        return t => {
            const result = {};
            keys.forEach(key => {
                result[key] = interpolators[key](t);
            });
            return result;
        };
    }
    if (type === 'number') {
        const delta = b - a;
        return t => a + t * delta;
    }
    throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
    const store = writable(value);
    let task;
    let target_value = value;
    function set(new_value, opts) {
        if (value == null) {
            store.set(value = new_value);
            return Promise.resolve();
        }
        target_value = new_value;
        let previous_task = task;
        let started = false;
        let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
        if (duration === 0) {
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            store.set(value = target_value);
            return Promise.resolve();
        }
        const start = now() + delay;
        let fn;
        task = loop(now => {
            if (now < start)
                return true;
            if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === 'function')
                    duration = duration(value, new_value);
                started = true;
            }
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            const elapsed = now - start;
            if (elapsed > duration) {
                store.set(value = new_value);
                return false;
            }
            // @ts-ignore
            store.set(value = fn(easing(elapsed / duration)));
            return true;
        });
        return task.promise;
    }
    return {
        set,
        update: (fn, opts) => set(fn(target_value, value), opts),
        subscribe: store.subscribe
    };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}

var internal = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
        result[key] = true;
    }
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.now = is_client
    ? () => window.performance.now()
    : () => Date.now();
exports.raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    exports.now = fn;
}
function set_raf(fn) {
    exports.raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        exports.raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        exports.raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while (low < high) {
        const mid = low + ((high - low) >> 1);
        if (key(mid) <= value) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init)
        return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
    let children = target.childNodes;
    // If target is <head>, there may be children without claim_order
    if (target.nodeName === 'HEAD') {
        const myChildren = [];
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.claim_order !== undefined) {
                myChildren.push(node);
            }
        }
        children = myChildren;
    }
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */
    // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        // with fast path for when we are on the current longest subsequence
        const seqLen = ((longest > 0 && children[m[longest]].claim_order <= current) ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (; last >= cur; last--) {
            toMove.push(children[last]);
        }
        last--;
    }
    for (; last >= 0; last--) {
        toMove.push(children[last]);
    }
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    // Finally, we move the nodes
    for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
            j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
    }
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
    return style.sheet;
}
function append_hydration(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentNode !== target))) {
            target.actual_end_child = target.firstChild;
        }
        // Skip nodes of undefined ordering
        while ((target.actual_end_child !== null) && (target.actual_end_child.claim_order === undefined)) {
            target.actual_end_child = target.actual_end_child.nextSibling;
        }
        if (node !== target.actual_end_child) {
            // We only insert if the ordering of this node should be modified or the parent node is not target
            if (node.claim_order !== undefined || node.parentNode !== target) {
                target.insertBefore(node, target.actual_end_child);
            }
        }
        else {
            target.actual_end_child = node.nextSibling;
        }
    }
    else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
    }
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
    if (is_hydrating && !anchor) {
        append_hydration(target, node);
    }
    else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
    }
}
function detach(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function trusted(fn) {
    return function (event) {
        // @ts-ignore
        if (event.isTrusted)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data_map(node, data_map) {
    Object.keys(data_map).forEach((key) => {
        set_custom_element_data(node, key, data_map[key]);
    });
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
    const value = new Set();
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.add(group[i].__value);
    }
    if (!checked) {
        value.delete(__value);
    }
    return Array.from(value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function init_claim_info(nodes) {
    if (nodes.claim_info === undefined) {
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
    }
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
    // Try to find nodes in an order such that we lengthen the longest increasing subsequence
    init_claim_info(nodes);
    const resultNode = (() => {
        // We first try to find an element after the previous one
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                return node;
            }
        }
        // Otherwise, we try to find one before
        // We iterate in reverse so that we don't go too far back
        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                else if (replacement === undefined) {
                    // Since we spliced before the last_index, we decrease it
                    nodes.claim_info.last_index--;
                }
                return node;
            }
        }
        // If we can't find any matching node, we create a new one
        return createNode();
    })();
    resultNode.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
    return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
    return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0; j < node.attributes.length; j++) {
            const attribute = node.attributes[j];
            if (!attributes[attribute.name]) {
                remove.push(attribute.name);
            }
        }
        remove.forEach(v => node.removeAttribute(v));
        return undefined;
    }, () => create_element(name));
}
function claim_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
    return claim_node(nodes, (node) => node.nodeType === 3, (node) => {
        const dataStr = '' + data;
        if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) {
                return node.splitText(dataStr.length);
            }
        }
        else {
            node.data = dataStr;
        }
    }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
    );
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function find_comment(nodes, text, start) {
    for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
            return i;
        }
    }
    return nodes.length;
}
function claim_html_tag(nodes, is_svg) {
    // find html opening tag
    const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
    const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
    if (start_index === end_index) {
        return new HtmlTagHydration(undefined, is_svg);
    }
    init_claim_info(nodes);
    const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
    detach(html_tag_nodes[0]);
    detach(html_tag_nodes[html_tag_nodes.length - 1]);
    const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
    for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
    }
    return new HtmlTagHydration(claimed_nodes, is_svg);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
        'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
function head_selector(nodeId, head) {
    const result = [];
    let started = 0;
    for (const node of head.childNodes) {
        if (node.nodeType === 8 /* comment node */) {
            const comment = node.textContent.trim();
            if (comment === `HEAD_${nodeId}_END`) {
                started -= 1;
                result.push(node);
            }
            else if (comment === `HEAD_${nodeId}_START`) {
                started += 1;
                result.push(node);
            }
        }
        else if (started > 0) {
            result.push(node);
        }
    }
    return result;
}
class HtmlTag {
    constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg)
                this.e = svg_element(target.nodeName);
            else
                this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}
class HtmlTagHydration extends HtmlTag {
    constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
    }
    c(html) {
        if (this.l) {
            this.n = this.l;
        }
        else {
            super.c(html);
        }
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert_hydration(this.t, this.n[i], anchor);
        }
    }
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
    }
    return result;
}
function get_custom_elements_slots(element) {
    const result = {};
    element.childNodes.forEach((node) => {
        result[node.slot || 'default'] = true;
    });
    return result;
}
function construct_svelte_component(component, props) {
    return new component(props);
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    exports.raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { ownerNode } = info.stylesheet;
            // there is no ownerNode if it runs on jsdom.
            if (ownerNode)
                detach(ownerNode);
        });
        managed_styles.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = exports.now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

function set_current_component(component) {
    exports.current_component = component;
}
function get_current_component() {
    if (!exports.current_component)
        throw new Error('Function called outside component initialization');
    return exports.current_component;
}
/**
 * Schedules a callback to run immediately before the component is updated after any state change.
 *
 * The first time the callback runs will be before the initial `onMount`
 *
 * https://svelte.dev/docs#run-time-svelte-beforeupdate
 */
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
 *
 * https://svelte.dev/docs#run-time-svelte-onmount
 */
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
/**
 * Schedules a callback to run immediately after the component has been updated.
 *
 * The first time the callback runs will be after the initial `onMount`
 */
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * https://svelte.dev/docs#run-time-svelte-ondestroy
 */
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
 */
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-setcontext
 */
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-getcontext
 */
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
/**
 * Retrieves the whole context map that belongs to the closest parent component.
 * Must be called during component initialisation. Useful, for example, if you
 * programmatically create a component and want to pass the existing context to it.
 *
 * https://svelte.dev/docs#run-time-svelte-getallcontexts
 */
function getAllContexts() {
    return get_current_component().$$.context;
}
/**
 * Checks whether a given `key` has been set in the context of a parent component.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs#run-time-svelte-hascontext
 */
function hasContext(key) {
    return get_current_component().$$.context.has(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        // @ts-ignore
        callbacks.slice().forEach(fn => fn.call(this, event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = exports.current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
    else if (callback) {
        callback();
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = exports.now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            started = true;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = exports.now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: exports.now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            if (info.blocks[i] === block) {
                                info.blocks[i] = null;
                            }
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) {
                throw error;
            }
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}
function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
        child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : commonjsGlobal);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error('Cannot have duplicate keys in a keyed each');
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'inert',
    'ismap',
    'itemscope',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

/** regex of all html void element names */
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
    return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, attrs_to_add) {
    const attributes = Object.assign({}, ...args);
    if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add) {
            if (attributes.class == null) {
                attributes.class = classes_to_add;
            }
            else {
                attributes.class += ' ' + classes_to_add;
            }
        }
        if (styles_to_add) {
            if (attributes.style == null) {
                attributes.style = style_object_to_string(styles_to_add);
            }
            else {
                attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
            }
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += ' ' + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += ' ' + name;
        }
        else if (value != null) {
            str += ` ${name}="${value}"`;
        }
    });
    return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
    const style_object = {};
    for (const individual_style of style_attribute.split(';')) {
        const colon_index = individual_style.indexOf(':');
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name)
            continue;
        style_object[name] = value;
    }
    for (const name in style_directive) {
        const value = style_directive[name];
        if (value) {
            style_object[name] = value;
        }
        else {
            delete style_object[name];
        }
    }
    return style_object;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function escape_attribute_value(value) {
    // keep booleans, null, and undefined for the sake of `spread`
    const should_escape = typeof value === 'string' || (value && typeof value === 'object');
    return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = escape_attribute_value(obj[key]);
    }
    return result;
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = exports.current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : '';
}
function style_object_to_string(style_object) {
    return Object.keys(style_object)
        .filter(key => style_object[key])
        .map(key => `${key}: ${style_object[key]};`)
        .join(' ');
}
function add_styles(style_object) {
    const styles = style_object_to_string(style_object);
    return styles ? ` style="${styles}"` : '';
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
            // if the component was destroyed immediately
            // it will update the `$$.on_destroy` reference to `null`.
            // the destructured on_destroy may still reference to the old array
            if (component.$$.on_destroy) {
                component.$$.on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = exports.current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
if (typeof HTMLElement === 'function') {
    exports.SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            const { on_mount } = this.$$;
            this.$$.on_disconnect = on_mount.map(run).filter(is_function);
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        disconnectedCallback() {
            run_all(this.$$.on_disconnect);
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        if (!is_function(callback)) {
            return noop;
        }
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.53.1' }, detail), { bubbles: true }));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function append_hydration_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append_hydration(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function insert_hydration_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert_hydration(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev('SvelteDOMSetDataset', { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
function validate_dynamic_element(tag) {
    const is_string = typeof tag === 'string';
    if (tag && !is_string) {
        throw new Error('<svelte:element> expects "this" attribute to be a string.');
    }
}
function validate_void_dynamic_element(tag) {
    if (tag && is_void(tag)) {
        console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
    }
}
function construct_svelte_component_dev(component, props) {
    const error_message = 'this={...} of <svelte:component> should specify a Svelte component.';
    try {
        const instance = new component(props);
        if (!instance.$$ || !instance.$set || !instance.$on || !instance.$destroy) {
            throw new Error(error_message);
        }
        return instance;
    }
    catch (err) {
        const { message } = err;
        if (typeof message === 'string' && message.indexOf('is not a constructor') !== -1) {
            throw new Error(error_message);
        }
        else {
            throw err;
        }
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */
class SvelteComponentTyped extends SvelteComponentDev {
    constructor(options) {
        super(options);
    }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error('Infinite loop detected');
        }
    };
}

exports.HtmlTag = HtmlTag;
exports.HtmlTagHydration = HtmlTagHydration;
exports.SvelteComponent = SvelteComponent;
exports.SvelteComponentDev = SvelteComponentDev;
exports.SvelteComponentTyped = SvelteComponentTyped;
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_styles = add_styles;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.append_empty_stylesheet = append_empty_stylesheet;
exports.append_hydration = append_hydration;
exports.append_hydration_dev = append_hydration_dev;
exports.append_styles = append_styles;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.attribute_to_object = attribute_to_object;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.binding_callbacks = binding_callbacks;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_html_tag = claim_html_tag;
exports.claim_space = claim_space;
exports.claim_svg_element = claim_svg_element;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.compute_slots = compute_slots;
exports.construct_svelte_component = construct_svelte_component;
exports.construct_svelte_component_dev = construct_svelte_component_dev;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dirty_components = dirty_components;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.end_hydrating = end_hydrating;
exports.escape = escape;
exports.escape_attribute_value = escape_attribute_value;
exports.escape_object = escape_object;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getAllContexts = getAllContexts;
exports.getContext = getContext;
exports.get_all_dirty_from_scope = get_all_dirty_from_scope;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_custom_elements_slots = get_custom_elements_slots;
exports.get_root_for_style = get_root_for_style;
exports.get_slot_changes = get_slot_changes;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.globals = globals;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.hasContext = hasContext;
exports.has_prop = has_prop;
exports.head_selector = head_selector;
exports.identity = identity;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.insert_hydration = insert_hydration;
exports.insert_hydration_dev = insert_hydration_dev;
exports.intros = intros;
exports.invalid_attribute_name_character = invalid_attribute_name_character;
exports.is_client = is_client;
exports.is_crossorigin = is_crossorigin;
exports.is_empty = is_empty;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.is_void = is_void;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.merge_ssr_styles = merge_ssr_styles;
exports.missing_component = missing_component;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_custom_element_data_map = set_custom_element_data_map;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.src_url_equal = src_url_equal;
exports.start_hydrating = start_hydrating;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.trusted = trusted;
exports.update_await_block_branch = update_await_block_branch;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.update_slot_base = update_slot_base;
exports.validate_component = validate_component;
exports.validate_dynamic_element = validate_dynamic_element;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.validate_void_dynamic_element = validate_void_dynamic_element;
exports.xlink_attr = xlink_attr;
}(internal));

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
function plainText(text) {
  if (typeof text === 'undefined' || text === null) return '';
  return text;
}

/* eslint-disable import/no-mutable-exports */
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

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/badge.svelte generated by Svelte v3.50.0 */

function create_fragment$8(ctx) {
	let span;
	let useTooltip_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let span_levels = [{ class: /*classes*/ ctx[2] }, restProps(/*$$restProps*/ ctx[3])];
	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	return {
		c() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(span, span_data);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			current = true;

			if (!mounted) {
				dispose = action_destroyer(useTooltip_action = useTooltip.call(null, span, {
					tooltip: /*tooltip*/ ctx[0],
					tooltipTrigger: /*tooltipTrigger*/ ctx[1]
				}));

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				(!current || dirty & /*classes*/ 4) && { class: /*classes*/ ctx[2] },
				dirty & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty & /*tooltip, tooltipTrigger*/ 3) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[0],
				tooltipTrigger: /*tooltipTrigger*/ ctx[1]
			});
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance$7($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","tooltip","tooltipTrigger"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: className = undefined } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ('tooltip' in $$new_props) $$invalidate(0, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(1, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(2, classes = classNames(className, 'badge', colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [tooltip, tooltipTrigger, classes, $$restProps, className, $$scope, slots];
}

class Badge extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$7, create_fragment$8, safe_not_equal, { class: 4, tooltip: 0, tooltipTrigger: 1 });
	}
}

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

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/icon.svelte generated by Svelte v3.50.0 */

function create_fragment$7(ctx) {
	let i;
	let t0_value = (/*iconText*/ ctx[4] || '') + "";
	let t0;
	let t1;
	let useTooltip_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

	let i_levels = [
		{ style: /*iconStyle*/ ctx[3] },
		{ class: /*iconClasses*/ ctx[5] },
		restProps(/*$$restProps*/ ctx[6])
	];

	let i_data = {};

	for (let i = 0; i < i_levels.length; i += 1) {
		i_data = assign(i_data, i_levels[i]);
	}

	return {
		c() {
			i = element("i");
			t0 = text(t0_value);
			t1 = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			i = claim_element(nodes, "I", { style: true, class: true });
			var i_nodes = children(i);
			t0 = claim_text(i_nodes, t0_value);
			t1 = claim_space(i_nodes);
			if (default_slot) default_slot.l(i_nodes);
			i_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(i, i_data);
		},
		m(target, anchor) {
			insert_hydration(target, i, anchor);
			append_hydration(i, t0);
			append_hydration(i, t1);

			if (default_slot) {
				default_slot.m(i, null);
			}

			/*i_binding*/ ctx[22](i);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(useTooltip_action = useTooltip.call(null, i, {
					tooltip: /*tooltip*/ ctx[0],
					tooltipTrigger: /*tooltipTrigger*/ ctx[1]
				}));

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*iconText*/ 16) && t0_value !== (t0_value = (/*iconText*/ ctx[4] || '') + "")) set_data(t0, t0_value);

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1048576)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[20],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[20])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[20], dirty, null),
						null
					);
				}
			}

			set_attributes(i, i_data = get_spread_update(i_levels, [
				(!current || dirty & /*iconStyle*/ 8) && { style: /*iconStyle*/ ctx[3] },
				(!current || dirty & /*iconClasses*/ 32) && { class: /*iconClasses*/ ctx[5] },
				dirty & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty & /*tooltip, tooltipTrigger*/ 3) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[0],
				tooltipTrigger: /*tooltipTrigger*/ ctx[1]
			});
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(i);
			if (default_slot) default_slot.d(detaching);
			/*i_binding*/ ctx[22](null);
			mounted = false;
			dispose();
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	let iconClasses;
	let iconText;
	let iconSize;
	let iconStyle;

	const omit_props_names = [
		"style","class","material","f7","icon","ios","aurora","md","tooltip","tooltipTrigger","size"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { style = undefined } = $$props;
	let { class: className = undefined } = $$props;
	let { material = undefined } = $$props;
	let { f7 = undefined } = $$props;
	let { icon = undefined } = $$props;
	let { ios = undefined } = $$props;
	let { aurora = undefined } = $$props;
	let { md = undefined } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;
	let { size = undefined } = $$props;
	let el;

	let theme = useTheme(t => {
		$$invalidate(16, theme = t);
	});

	let classes = { icon: true };
	let themeIcon;

	function iconTextComputed(t) {
		let textComputed = material || f7;

		if (md && t && t.md && (md.indexOf('material:') >= 0 || md.indexOf('f7:') >= 0)) {
			textComputed = md.split(':')[1];
		} else if (ios && t && t.ios && (ios.indexOf('material:') >= 0 || ios.indexOf('f7:') >= 0)) {
			textComputed = ios.split(':')[1];
		} else if (aurora && t && t.aurora && (aurora.indexOf('material:') >= 0 || aurora.indexOf('f7:') >= 0)) {
			textComputed = aurora.split(':')[1];
		}

		return textComputed;
	}

	function i_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(2, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(24, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('style' in $$new_props) $$invalidate(7, style = $$new_props.style);
		if ('class' in $$new_props) $$invalidate(8, className = $$new_props.class);
		if ('material' in $$new_props) $$invalidate(9, material = $$new_props.material);
		if ('f7' in $$new_props) $$invalidate(10, f7 = $$new_props.f7);
		if ('icon' in $$new_props) $$invalidate(11, icon = $$new_props.icon);
		if ('ios' in $$new_props) $$invalidate(12, ios = $$new_props.ios);
		if ('aurora' in $$new_props) $$invalidate(13, aurora = $$new_props.aurora);
		if ('md' in $$new_props) $$invalidate(14, md = $$new_props.md);
		if ('tooltip' in $$new_props) $$invalidate(0, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(1, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('size' in $$new_props) $$invalidate(15, size = $$new_props.size);
		if ('$$scope' in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*theme, ios, md, aurora*/ 94208) {
			if (theme) {
				if (theme.ios) $$invalidate(18, themeIcon = ios);
				if (theme.md) $$invalidate(18, themeIcon = md);
				if (theme.aurora) $$invalidate(18, themeIcon = aurora);
			}
		}

		if ($$self.$$.dirty & /*themeIcon, material, f7, icon*/ 265728) {
			if (themeIcon) {
				$$invalidate(17, classes = { icon: true });
				const parts = themeIcon.split(':');
				const prop = parts[0];
				const value = parts[1];

				if (prop === 'material' || prop === 'f7') {
					$$invalidate(17, classes['material-icons'] = prop === 'material', classes);
					$$invalidate(17, classes['f7-icons'] = prop === 'f7', classes);

					if (prop === 'icon') {
						$$invalidate(17, classes[value] = true, classes);
					}
				} else {
					if (themeIcon.includes(':')) {
						$$invalidate(18, themeIcon = themeIcon.split(' ').map(el => el.replace('icon:', '')).join(' '));
					}

					$$invalidate(17, classes[themeIcon] = true, classes);
				}
			} else {
				$$invalidate(17, classes = {
					icon: true,
					'material-icons': material,
					'f7-icons': f7
				});

				if (icon) $$invalidate(17, classes[icon] = true, classes);
			}
		}

		$$invalidate(5, iconClasses = classNames(className, classes, colorClasses($$props)));

		if ($$self.$$.dirty & /*theme*/ 65536) {
			$$invalidate(4, iconText = iconTextComputed(theme));
		}

		if ($$self.$$.dirty & /*size*/ 32768) {
			$$invalidate(19, iconSize = typeof size === 'number' || parseFloat(size) === size * 1
			? `${size}px`
			: size);
		}

		if ($$self.$$.dirty & /*style, iconSize*/ 524416) {
			$$invalidate(3, iconStyle = (style || '') + (iconSize
			? `;font-size: ${iconSize}; width: ${iconSize}; height: ${iconSize}`.replace(';;', '')
			: ''));
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		tooltip,
		tooltipTrigger,
		el,
		iconStyle,
		iconText,
		iconClasses,
		$$restProps,
		style,
		className,
		material,
		f7,
		icon,
		ios,
		aurora,
		md,
		size,
		theme,
		classes,
		themeIcon,
		iconSize,
		$$scope,
		slots,
		i_binding
	];
}

class Icon extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$6, create_fragment$7, safe_not_equal, {
			style: 7,
			class: 8,
			material: 9,
			f7: 10,
			icon: 11,
			ios: 12,
			aurora: 13,
			md: 14,
			tooltip: 0,
			tooltipTrigger: 1,
			size: 15
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/use-icon.svelte generated by Svelte v3.50.0 */

function create_if_block$5(ctx) {
	let badge;
	let current;
	const badge_spread_levels = [/*icon*/ ctx[0].badge.props];

	let badge_props = {
		$$slots: { default: [create_default_slot_1$1] },
		$$scope: { ctx }
	};

	for (let i = 0; i < badge_spread_levels.length; i += 1) {
		badge_props = assign(badge_props, badge_spread_levels[i]);
	}

	badge = new Badge({ props: badge_props });

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
			const badge_changes = (dirty & /*icon*/ 1)
			? get_spread_update(badge_spread_levels, [get_spread_object(/*icon*/ ctx[0].badge.props)])
			: {};

			if (dirty & /*$$scope, icon*/ 3) {
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

// (10:4) <Badge {...icon.badge.props}>
function create_default_slot_1$1(ctx) {
	let t_value = /*icon*/ ctx[0].badge.content + "";
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
			if (dirty & /*icon*/ 1 && t_value !== (t_value = /*icon*/ ctx[0].badge.content + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (8:0) <Icon {...icon.props}>
function create_default_slot$2(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*icon*/ ctx[0].badge && create_if_block$5(ctx);

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
			if (/*icon*/ ctx[0].badge) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*icon*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$5(ctx);
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

function create_fragment$6(ctx) {
	let icon_1;
	let current;
	const icon_1_spread_levels = [/*icon*/ ctx[0].props];

	let icon_1_props = {
		$$slots: { default: [create_default_slot$2] },
		$$scope: { ctx }
	};

	for (let i = 0; i < icon_1_spread_levels.length; i += 1) {
		icon_1_props = assign(icon_1_props, icon_1_spread_levels[i]);
	}

	icon_1 = new Icon({ props: icon_1_props });

	return {
		c() {
			create_component(icon_1.$$.fragment);
		},
		l(nodes) {
			claim_component(icon_1.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(icon_1, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const icon_1_changes = (dirty & /*icon*/ 1)
			? get_spread_update(icon_1_spread_levels, [get_spread_object(/*icon*/ ctx[0].props)])
			: {};

			if (dirty & /*$$scope, icon*/ 3) {
				icon_1_changes.$$scope = { dirty, ctx };
			}

			icon_1.$set(icon_1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(icon_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icon_1, detaching);
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let { icon = undefined } = $$props;

	$$self.$$set = $$props => {
		if ('icon' in $$props) $$invalidate(0, icon = $$props.icon);
	};

	return [icon];
}

class Use_icon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$5, create_fragment$6, safe_not_equal, { icon: 0 });
	}
}

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

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/link.svelte generated by Svelte v3.50.0 */

function create_if_block_2$2(ctx) {
	let useicon;
	let current;
	useicon = new Use_icon({ props: { icon: /*icon*/ ctx[8] } });

	return {
		c() {
			create_component(useicon.$$.fragment);
		},
		l(nodes) {
			claim_component(useicon.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(useicon, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const useicon_changes = {};
			if (dirty[0] & /*icon*/ 256) useicon_changes.icon = /*icon*/ ctx[8];
			useicon.$set(useicon_changes);
		},
		i(local) {
			if (current) return;
			transition_in(useicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(useicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(useicon, detaching);
		}
	};
}

// (118:2) {#if typeof text !== 'undefined' || typeof badge !== 'undefined'}
function create_if_block$4(ctx) {
	let span;
	let t0_value = plainText(/*text*/ ctx[0]) + "";
	let t0;
	let t1;
	let current;
	let if_block = typeof /*badge*/ ctx[1] !== 'undefined' && create_if_block_1$3(ctx);

	return {
		c() {
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, t0_value);
			t1 = claim_space(span_nodes);
			if (if_block) if_block.l(span_nodes);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			toggle_class(span, "tabbar-label", /*isTabbarLabel*/ ctx[6]);
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t0);
			append_hydration(span, t1);
			if (if_block) if_block.m(span, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*text*/ 1) && t0_value !== (t0_value = plainText(/*text*/ ctx[0]) + "")) set_data(t0, t0_value);

			if (typeof /*badge*/ ctx[1] !== 'undefined') {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*badge*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1$3(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(span, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty[0] & /*isTabbarLabel*/ 64) {
				toggle_class(span, "tabbar-label", /*isTabbarLabel*/ ctx[6]);
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
			if (detaching) detach(span);
			if (if_block) if_block.d();
		}
	};
}

// (121:6) {#if typeof badge !== 'undefined'}
function create_if_block_1$3(ctx) {
	let badge_1;
	let current;

	badge_1 = new Badge({
			props: {
				color: /*badgeColor*/ ctx[2],
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(badge_1.$$.fragment);
		},
		l(nodes) {
			claim_component(badge_1.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(badge_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const badge_1_changes = {};
			if (dirty[0] & /*badgeColor*/ 4) badge_1_changes.color = /*badgeColor*/ ctx[2];

			if (dirty[0] & /*$$scope, badge*/ 536870914) {
				badge_1_changes.$$scope = { dirty, ctx };
			}

			badge_1.$set(badge_1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(badge_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(badge_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(badge_1, detaching);
		}
	};
}

// (121:40) <Badge color={badgeColor}>
function create_default_slot$1(ctx) {
	let t_value = plainText(/*badge*/ ctx[1]) + "";
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
			if (dirty[0] & /*badge*/ 2 && t_value !== (t_value = plainText(/*badge*/ ctx[1]) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment$5(ctx) {
	let a;
	let t0;
	let t1;
	let useTooltip_action;
	let useRouteProps_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*icon*/ ctx[8] && create_if_block_2$2(ctx);
	const default_slot_template = /*#slots*/ ctx[27].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);
	let if_block1 = (typeof /*text*/ ctx[0] !== 'undefined' || typeof /*badge*/ ctx[1] !== 'undefined') && create_if_block$4(ctx);
	let a_levels = [{ class: /*classes*/ ctx[9] }, /*attrs*/ ctx[10]];
	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	return {
		c() {
			a = element("a");
			if (if_block0) if_block0.c();
			t0 = space();
			if (default_slot) default_slot.c();
			t1 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { class: true });
			var a_nodes = children(a);
			if (if_block0) if_block0.l(a_nodes);
			t0 = claim_space(a_nodes);
			if (default_slot) default_slot.l(a_nodes);
			t1 = claim_space(a_nodes);
			if (if_block1) if_block1.l(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(a, a_data);
		},
		m(target, anchor) {
			insert_hydration(target, a, anchor);
			if (if_block0) if_block0.m(a, null);
			append_hydration(a, t0);

			if (default_slot) {
				default_slot.m(a, null);
			}

			append_hydration(a, t1);
			if (if_block1) if_block1.m(a, null);
			/*a_binding*/ ctx[28](a);
			current = true;

			if (!mounted) {
				dispose = [
					listen(a, "click", /*onClick*/ ctx[11]),
					action_destroyer(useTooltip_action = useTooltip.call(null, a, {
						tooltip: /*tooltip*/ ctx[3],
						tooltipTrigger: /*tooltipTrigger*/ ctx[4]
					})),
					action_destroyer(useRouteProps_action = useRouteProps.call(null, a, /*routeProps*/ ctx[5]))
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*icon*/ ctx[8]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*icon*/ 256) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2$2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(a, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 536870912)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[29],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[29])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[29], dirty, null),
						null
					);
				}
			}

			if (typeof /*text*/ ctx[0] !== 'undefined' || typeof /*badge*/ ctx[1] !== 'undefined') {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*text, badge*/ 3) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block$4(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(a, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			set_attributes(a, a_data = get_spread_update(a_levels, [
				(!current || dirty[0] & /*classes*/ 512) && { class: /*classes*/ ctx[9] },
				dirty[0] & /*attrs*/ 1024 && /*attrs*/ ctx[10]
			]));

			if (useTooltip_action && is_function(useTooltip_action.update) && dirty[0] & /*tooltip, tooltipTrigger*/ 24) useTooltip_action.update.call(null, {
				tooltip: /*tooltip*/ ctx[3],
				tooltipTrigger: /*tooltipTrigger*/ ctx[4]
			});

			if (useRouteProps_action && is_function(useRouteProps_action.update) && dirty[0] & /*routeProps*/ 32) useRouteProps_action.update.call(null, /*routeProps*/ ctx[5]);
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(default_slot, local);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(default_slot, local);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block0) if_block0.d();
			if (default_slot) default_slot.d(detaching);
			if (if_block1) if_block1.d();
			/*a_binding*/ ctx[28](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	let isTabbarLabel;
	let hrefComputed;
	let attrs;
	let hasDefaultSlots;
	let iconOnlyComputed;
	let classes;
	let icon;

	const omit_props_names = [
		"class","noLinkClass","text","tabLink","tabLinkActive","tabbarLabel","iconOnly","badge","badgeColor","href","target","tooltip","tooltipTrigger","routeProps","smartSelect","smartSelectParams","smartSelectInstance"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { noLinkClass = false } = $$props;
	let { text = undefined } = $$props;
	let { tabLink = undefined } = $$props;
	let { tabLinkActive = false } = $$props;
	let { tabbarLabel = false } = $$props;
	let { iconOnly = false } = $$props;
	let { badge = undefined } = $$props;
	let { badgeColor = undefined } = $$props;
	let { href = '#' } = $$props;
	let { target = undefined } = $$props;
	let { tooltip = undefined } = $$props;
	let { tooltipTrigger = undefined } = $$props;
	let { routeProps = undefined } = $$props;
	let { smartSelect = false } = $$props;
	let { smartSelectParams = undefined } = $$props;
	let el;
	let f7SmartSelect;

	function smartSelectInstance() {
		return f7SmartSelect;
	}

	let TabbarContext = getReactiveContext('TabbarContext', newValue => {
		$$invalidate(23, TabbarContext = newValue);
	}) || {};

	function onClick() {
		emit('click');
	}

	useSmartSelect(
		{ smartSelect, smartSelectParams },
		instance => {
			f7SmartSelect = instance;
		},
		() => el
	);

	function a_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(7, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(32, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(34, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(12, className = $$new_props.class);
		if ('noLinkClass' in $$new_props) $$invalidate(13, noLinkClass = $$new_props.noLinkClass);
		if ('text' in $$new_props) $$invalidate(0, text = $$new_props.text);
		if ('tabLink' in $$new_props) $$invalidate(14, tabLink = $$new_props.tabLink);
		if ('tabLinkActive' in $$new_props) $$invalidate(15, tabLinkActive = $$new_props.tabLinkActive);
		if ('tabbarLabel' in $$new_props) $$invalidate(16, tabbarLabel = $$new_props.tabbarLabel);
		if ('iconOnly' in $$new_props) $$invalidate(17, iconOnly = $$new_props.iconOnly);
		if ('badge' in $$new_props) $$invalidate(1, badge = $$new_props.badge);
		if ('badgeColor' in $$new_props) $$invalidate(2, badgeColor = $$new_props.badgeColor);
		if ('href' in $$new_props) $$invalidate(18, href = $$new_props.href);
		if ('target' in $$new_props) $$invalidate(19, target = $$new_props.target);
		if ('tooltip' in $$new_props) $$invalidate(3, tooltip = $$new_props.tooltip);
		if ('tooltipTrigger' in $$new_props) $$invalidate(4, tooltipTrigger = $$new_props.tooltipTrigger);
		if ('routeProps' in $$new_props) $$invalidate(5, routeProps = $$new_props.routeProps);
		if ('smartSelect' in $$new_props) $$invalidate(20, smartSelect = $$new_props.smartSelect);
		if ('smartSelectParams' in $$new_props) $$invalidate(21, smartSelectParams = $$new_props.smartSelectParams);
		if ('$$scope' in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*tabbarLabel, TabbarContext*/ 8454144) {
			$$invalidate(6, isTabbarLabel = tabbarLabel || TabbarContext.tabbarHasLabels);
		}

		if ($$self.$$.dirty[0] & /*href*/ 262144) {
			$$invalidate(26, hrefComputed = href === true ? '#' : href || undefined);
		}

		$$invalidate(10, attrs = extend(
			{
				href: hrefComputed,
				target,
				'data-tab': isStringProp(tabLink) && tabLink || undefined,
				...restProps($$restProps)
			},
			routerAttrs($$props),
			actionsAttrs($$props)
		));

		if ($$self.$$.dirty[0] & /*iconOnly, text, hasDefaultSlots*/ 33685505) {
			$$invalidate(24, iconOnlyComputed = iconOnly || !text && !hasDefaultSlots);
		}

		$$invalidate(9, classes = classNames(
			className,
			{
				link: !(noLinkClass || isTabbarLabel),
				'icon-only': iconOnlyComputed,
				'tab-link': tabLink || tabLink === '',
				'tab-link-active': tabLinkActive,
				'smart-select': smartSelect
			},
			colorClasses($$props),
			routerClasses($$props),
			actionsClasses($$props)
		));

		$$invalidate(8, icon = useIcon($$props));
	};

	$$invalidate(25, hasDefaultSlots = $$slots.default);
	$$props = exclude_internal_props($$props);

	return [
		text,
		badge,
		badgeColor,
		tooltip,
		tooltipTrigger,
		routeProps,
		isTabbarLabel,
		el,
		icon,
		classes,
		attrs,
		onClick,
		className,
		noLinkClass,
		tabLink,
		tabLinkActive,
		tabbarLabel,
		iconOnly,
		href,
		target,
		smartSelect,
		smartSelectParams,
		smartSelectInstance,
		TabbarContext,
		iconOnlyComputed,
		hasDefaultSlots,
		hrefComputed,
		slots,
		a_binding,
		$$scope
	];
}

class Link extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance$4,
			create_fragment$5,
			safe_not_equal,
			{
				class: 12,
				noLinkClass: 13,
				text: 0,
				tabLink: 14,
				tabLinkActive: 15,
				tabbarLabel: 16,
				iconOnly: 17,
				badge: 1,
				badgeColor: 2,
				href: 18,
				target: 19,
				tooltip: 3,
				tooltipTrigger: 4,
				routeProps: 5,
				smartSelect: 20,
				smartSelectParams: 21,
				smartSelectInstance: 22
			},
			null,
			[-1, -1]
		);
	}

	get smartSelectInstance() {
		return this.$$.ctx[22];
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/nav-left.svelte generated by Svelte v3.50.0 */

function create_if_block$3(ctx) {
	let link;
	let current;

	link = new Link({
			props: {
				href: /*backLinkUrl*/ ctx[1] || '#',
				back: true,
				icon: "icon-back",
				force: /*backLinkForce*/ ctx[2] || undefined,
				class: !/*backLinkText*/ ctx[3] ? 'icon-only' : undefined,
				text: /*backLinkText*/ ctx[3],
				onClick: /*onBackClick*/ ctx[5]
			}
		});

	return {
		c() {
			create_component(link.$$.fragment);
		},
		l(nodes) {
			claim_component(link.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(link, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const link_changes = {};
			if (dirty & /*backLinkUrl*/ 2) link_changes.href = /*backLinkUrl*/ ctx[1] || '#';
			if (dirty & /*backLinkForce*/ 4) link_changes.force = /*backLinkForce*/ ctx[2] || undefined;
			if (dirty & /*backLinkText*/ 8) link_changes.class = !/*backLinkText*/ ctx[3] ? 'icon-only' : undefined;
			if (dirty & /*backLinkText*/ 8) link_changes.text = /*backLinkText*/ ctx[3];
			link.$set(link_changes);
		},
		i(local) {
			if (current) return;
			transition_in(link.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(link.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(link, detaching);
		}
	};
}

function create_fragment$4(ctx) {
	let div;
	let t;
	let current;
	let if_block = /*backLink*/ ctx[0] && create_if_block$3(ctx);
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);
	let div_levels = [{ class: /*classes*/ ctx[4] }, restProps(/*$$restProps*/ ctx[6])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t = claim_space(div_nodes);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_hydration(div, t);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (/*backLink*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*backLink*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$3(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[12])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 16) && { class: /*classes*/ ctx[4] },
				dirty & /*$$restProps*/ 64 && restProps(/*$$restProps*/ ctx[6])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let classes;
	let needBackLinkText;
	let backLinkText;
	const omit_props_names = ["class","backLink","backLinkUrl","backLinkForce","backLinkShowText","sliding"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { backLink = undefined } = $$props;
	let { backLinkUrl = undefined } = $$props;
	let { backLinkForce = undefined } = $$props;
	let { backLinkShowText = undefined } = $$props;
	let { sliding = undefined } = $$props;

	let theme = useTheme(t => {
		$$invalidate(10, theme = t);
	});

	function onBackClick() {
		emit('clickBack');
		emit('backClick');
	}

	$$self.$$set = $$new_props => {
		$$invalidate(15, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(7, className = $$new_props.class);
		if ('backLink' in $$new_props) $$invalidate(0, backLink = $$new_props.backLink);
		if ('backLinkUrl' in $$new_props) $$invalidate(1, backLinkUrl = $$new_props.backLinkUrl);
		if ('backLinkForce' in $$new_props) $$invalidate(2, backLinkForce = $$new_props.backLinkForce);
		if ('backLinkShowText' in $$new_props) $$invalidate(8, backLinkShowText = $$new_props.backLinkShowText);
		if ('sliding' in $$new_props) $$invalidate(9, sliding = $$new_props.sliding);
		if ('$$scope' in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(4, classes = classNames(className, 'left', { sliding }, colorClasses($$props)));

		if ($$self.$$.dirty & /*backLinkShowText*/ 256) {
			$$invalidate(11, needBackLinkText = backLinkShowText);
		}

		if ($$self.$$.dirty & /*needBackLinkText, theme*/ 3072) {
			if (typeof needBackLinkText === 'undefined') $$invalidate(11, needBackLinkText = theme && !theme.md);
		}

		if ($$self.$$.dirty & /*backLink, needBackLinkText*/ 2049) {
			$$invalidate(3, backLinkText = backLink !== true && needBackLinkText
			? backLink
			: undefined);
		}
	};

	$$props = exclude_internal_props($$props);

	return [
		backLink,
		backLinkUrl,
		backLinkForce,
		backLinkText,
		classes,
		onBackClick,
		$$restProps,
		className,
		backLinkShowText,
		sliding,
		theme,
		needBackLinkText,
		$$scope,
		slots
	];
}

class Nav_left extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$3, create_fragment$4, safe_not_equal, {
			class: 7,
			backLink: 0,
			backLinkUrl: 1,
			backLinkForce: 2,
			backLinkShowText: 8,
			sliding: 9
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/nav-right.svelte generated by Svelte v3.50.0 */

function create_fragment$3(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
	let div_levels = [{ class: /*classes*/ ctx[0] }, restProps(/*$$restProps*/ ctx[1])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 1) && { class: /*classes*/ ctx[0] },
				dirty & /*$$restProps*/ 2 && restProps(/*$$restProps*/ ctx[1])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","sliding"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: className = undefined } = $$props;
	let { sliding = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ('sliding' in $$new_props) $$invalidate(3, sliding = $$new_props.sliding);
		if ('$$scope' in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(0, classes = classNames(className, 'right', { sliding }, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [classes, $$restProps, className, sliding, $$scope, slots];
}

class Nav_right extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$3, safe_not_equal, { class: 2, sliding: 3 });
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/nav-title.svelte generated by Svelte v3.50.0 */

function create_if_block_1$2(ctx) {
	let t_value = plainText(/*title*/ ctx[0]) + "";
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
			if (dirty & /*title*/ 1 && t_value !== (t_value = plainText(/*title*/ ctx[0]) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (25:2) {#if typeof subtitle !== 'undefined'}
function create_if_block$2(ctx) {
	let span;
	let t_value = plainText(/*subtitle*/ ctx[1]) + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "subtitle");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*subtitle*/ 2 && t_value !== (t_value = plainText(/*subtitle*/ ctx[1]) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

function create_fragment$2(ctx) {
	let div;
	let t0;
	let t1;
	let current;
	let if_block0 = typeof /*title*/ ctx[0] !== 'undefined' && create_if_block_1$2(ctx);
	let if_block1 = typeof /*subtitle*/ ctx[1] !== 'undefined' && create_if_block$2(ctx);
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	let div_levels = [{ class: /*classes*/ ctx[2] }, restProps(/*$$restProps*/ ctx[3])];
	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			t1 = claim_space(div_nodes);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			set_attributes(div, div_data);
		},
		m(target, anchor) {
			insert_hydration(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_hydration(div, t0);
			if (if_block1) if_block1.m(div, null);
			append_hydration(div, t1);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (typeof /*title*/ ctx[0] !== 'undefined') {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1$2(ctx);
					if_block0.c();
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (typeof /*subtitle*/ ctx[1] !== 'undefined') {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block$2(ctx);
					if_block1.c();
					if_block1.m(div, t1);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*classes*/ 4) && { class: /*classes*/ ctx[2] },
				dirty & /*$$restProps*/ 8 && restProps(/*$$restProps*/ ctx[3])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let classes;
	const omit_props_names = ["class","title","subtitle","sliding"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	let { class: className = undefined } = $$props;
	let { title = undefined } = $$props;
	let { subtitle = undefined } = $$props;
	let { sliding = undefined } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ('title' in $$new_props) $$invalidate(0, title = $$new_props.title);
		if ('subtitle' in $$new_props) $$invalidate(1, subtitle = $$new_props.subtitle);
		if ('sliding' in $$new_props) $$invalidate(5, sliding = $$new_props.sliding);
		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(2, classes = classNames(className, 'title', { sliding }, colorClasses($$props)));
	};

	$$props = exclude_internal_props($$props);
	return [title, subtitle, classes, $$restProps, className, sliding, $$scope, slots];
}

class Nav_title extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$1, create_fragment$2, safe_not_equal, {
			class: 4,
			title: 0,
			subtitle: 1,
			sliding: 5
		});
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/navbar.svelte generated by Svelte v3.50.0 */
const get_after_inner_slot_changes$1 = dirty => ({});
const get_after_inner_slot_context$1 = ctx => ({});
const get_title_large_slot_changes = dirty => ({});
const get_title_large_slot_context = ctx => ({});
const get_right_slot_changes = dirty => ({});
const get_right_slot_context = ctx => ({});
const get_nav_right_slot_changes = dirty => ({});
const get_nav_right_slot_context = ctx => ({});
const get_title_slot_changes = dirty => ({});
const get_title_slot_context = ctx => ({});
const get_left_slot_changes = dirty => ({});
const get_left_slot_context = ctx => ({});
const get_nav_left_slot_changes = dirty => ({});
const get_nav_left_slot_context = ctx => ({});
const get_before_inner_slot_changes$1 = dirty => ({});
const get_before_inner_slot_context$1 = ctx => ({});

// (197:4) {#if backLink || hasLeftSlots}
function create_if_block_3$1(ctx) {
	let navleft;
	let current;

	navleft = new Nav_left({
			props: {
				backLink: /*backLink*/ ctx[0],
				backLinkUrl: /*backLinkUrl*/ ctx[1],
				backLinkForce: /*backLinkForce*/ ctx[2],
				backLinkShowText: /*backLinkShowText*/ ctx[3],
				onBackClick: /*onBackClick*/ ctx[15],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navleft.$$.fragment);
		},
		l(nodes) {
			claim_component(navleft.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navleft, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navleft_changes = {};
			if (dirty[0] & /*backLink*/ 1) navleft_changes.backLink = /*backLink*/ ctx[0];
			if (dirty[0] & /*backLinkUrl*/ 2) navleft_changes.backLinkUrl = /*backLinkUrl*/ ctx[1];
			if (dirty[0] & /*backLinkForce*/ 4) navleft_changes.backLinkForce = /*backLinkForce*/ ctx[2];
			if (dirty[0] & /*backLinkShowText*/ 8) navleft_changes.backLinkShowText = /*backLinkShowText*/ ctx[3];

			if (dirty[1] & /*$$scope*/ 16384) {
				navleft_changes.$$scope = { dirty, ctx };
			}

			navleft.$set(navleft_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navleft.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navleft.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navleft, detaching);
		}
	};
}

// (198:6) <NavLeft {backLink} {backLinkUrl} {backLinkForce} {backLinkShowText} {onBackClick}>
function create_default_slot_2(ctx) {
	let t;
	let current;
	const nav_left_slot_template = /*#slots*/ ctx[43]["nav-left"];
	const nav_left_slot = create_slot(nav_left_slot_template, ctx, /*$$scope*/ ctx[45], get_nav_left_slot_context);
	const left_slot_template = /*#slots*/ ctx[43].left;
	const left_slot = create_slot(left_slot_template, ctx, /*$$scope*/ ctx[45], get_left_slot_context);

	return {
		c() {
			if (nav_left_slot) nav_left_slot.c();
			t = space();
			if (left_slot) left_slot.c();
		},
		l(nodes) {
			if (nav_left_slot) nav_left_slot.l(nodes);
			t = claim_space(nodes);
			if (left_slot) left_slot.l(nodes);
		},
		m(target, anchor) {
			if (nav_left_slot) {
				nav_left_slot.m(target, anchor);
			}

			insert_hydration(target, t, anchor);

			if (left_slot) {
				left_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (nav_left_slot) {
				if (nav_left_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						nav_left_slot,
						nav_left_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(nav_left_slot_template, /*$$scope*/ ctx[45], dirty, get_nav_left_slot_changes),
						get_nav_left_slot_context
					);
				}
			}

			if (left_slot) {
				if (left_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						left_slot,
						left_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(left_slot_template, /*$$scope*/ ctx[45], dirty, get_left_slot_changes),
						get_left_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(nav_left_slot, local);
			transition_in(left_slot, local);
			current = true;
		},
		o(local) {
			transition_out(nav_left_slot, local);
			transition_out(left_slot, local);
			current = false;
		},
		d(detaching) {
			if (nav_left_slot) nav_left_slot.d(detaching);
			if (detaching) detach(t);
			if (left_slot) left_slot.d(detaching);
		}
	};
}

// (203:4) {#if title || subtitle || hasTitleSlots}
function create_if_block_2$1(ctx) {
	let navtitle;
	let current;

	navtitle = new Nav_title({
			props: {
				title: /*title*/ ctx[4],
				subtitle: /*subtitle*/ ctx[5],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navtitle.$$.fragment);
		},
		l(nodes) {
			claim_component(navtitle.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navtitle, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navtitle_changes = {};
			if (dirty[0] & /*title*/ 16) navtitle_changes.title = /*title*/ ctx[4];
			if (dirty[0] & /*subtitle*/ 32) navtitle_changes.subtitle = /*subtitle*/ ctx[5];

			if (dirty[1] & /*$$scope*/ 16384) {
				navtitle_changes.$$scope = { dirty, ctx };
			}

			navtitle.$set(navtitle_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navtitle.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navtitle.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navtitle, detaching);
		}
	};
}

// (204:6) <NavTitle {title} {subtitle}>
function create_default_slot_1(ctx) {
	let current;
	const title_slot_template = /*#slots*/ ctx[43].title;
	const title_slot = create_slot(title_slot_template, ctx, /*$$scope*/ ctx[45], get_title_slot_context);

	return {
		c() {
			if (title_slot) title_slot.c();
		},
		l(nodes) {
			if (title_slot) title_slot.l(nodes);
		},
		m(target, anchor) {
			if (title_slot) {
				title_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (title_slot) {
				if (title_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						title_slot,
						title_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(title_slot_template, /*$$scope*/ ctx[45], dirty, get_title_slot_changes),
						get_title_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(title_slot, local);
			current = true;
		},
		o(local) {
			transition_out(title_slot, local);
			current = false;
		},
		d(detaching) {
			if (title_slot) title_slot.d(detaching);
		}
	};
}

// (208:4) {#if hasRightSlots}
function create_if_block_1$1(ctx) {
	let navright;
	let current;

	navright = new Nav_right({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(navright.$$.fragment);
		},
		l(nodes) {
			claim_component(navright.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(navright, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const navright_changes = {};

			if (dirty[1] & /*$$scope*/ 16384) {
				navright_changes.$$scope = { dirty, ctx };
			}

			navright.$set(navright_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navright.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navright.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(navright, detaching);
		}
	};
}

// (209:6) <NavRight>
function create_default_slot(ctx) {
	let t;
	let current;
	const nav_right_slot_template = /*#slots*/ ctx[43]["nav-right"];
	const nav_right_slot = create_slot(nav_right_slot_template, ctx, /*$$scope*/ ctx[45], get_nav_right_slot_context);
	const right_slot_template = /*#slots*/ ctx[43].right;
	const right_slot = create_slot(right_slot_template, ctx, /*$$scope*/ ctx[45], get_right_slot_context);

	return {
		c() {
			if (nav_right_slot) nav_right_slot.c();
			t = space();
			if (right_slot) right_slot.c();
		},
		l(nodes) {
			if (nav_right_slot) nav_right_slot.l(nodes);
			t = claim_space(nodes);
			if (right_slot) right_slot.l(nodes);
		},
		m(target, anchor) {
			if (nav_right_slot) {
				nav_right_slot.m(target, anchor);
			}

			insert_hydration(target, t, anchor);

			if (right_slot) {
				right_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (nav_right_slot) {
				if (nav_right_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						nav_right_slot,
						nav_right_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(nav_right_slot_template, /*$$scope*/ ctx[45], dirty, get_nav_right_slot_changes),
						get_nav_right_slot_context
					);
				}
			}

			if (right_slot) {
				if (right_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						right_slot,
						right_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(right_slot_template, /*$$scope*/ ctx[45], dirty, get_right_slot_changes),
						get_right_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(nav_right_slot, local);
			transition_in(right_slot, local);
			current = true;
		},
		o(local) {
			transition_out(nav_right_slot, local);
			transition_out(right_slot, local);
			current = false;
		},
		d(detaching) {
			if (nav_right_slot) nav_right_slot.d(detaching);
			if (detaching) detach(t);
			if (right_slot) right_slot.d(detaching);
		}
	};
}

// (214:4) {#if largeTitle || hasTitleLargeSlots}
function create_if_block$1(ctx) {
	let div1;
	let div0;
	let t0_value = plainText(/*largeTitle*/ ctx[11]) + "";
	let t0;
	let t1;
	let current;
	const title_large_slot_template = /*#slots*/ ctx[43]["title-large"];
	const title_large_slot = create_slot(title_large_slot_template, ctx, /*$$scope*/ ctx[45], get_title_large_slot_context);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			if (title_large_slot) title_large_slot.c();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, t0_value);
			t1 = claim_space(div0_nodes);
			if (title_large_slot) title_large_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "title-large-text");
			attr(div1, "class", "title-large");
		},
		m(target, anchor) {
			insert_hydration(target, div1, anchor);
			append_hydration(div1, div0);
			append_hydration(div0, t0);
			append_hydration(div0, t1);

			if (title_large_slot) {
				title_large_slot.m(div0, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*largeTitle*/ 2048) && t0_value !== (t0_value = plainText(/*largeTitle*/ ctx[11]) + "")) set_data(t0, t0_value);

			if (title_large_slot) {
				if (title_large_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						title_large_slot,
						title_large_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(title_large_slot_template, /*$$scope*/ ctx[45], dirty, get_title_large_slot_changes),
						get_title_large_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(title_large_slot, local);
			current = true;
		},
		o(local) {
			transition_out(title_large_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (title_large_slot) title_large_slot.d(detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let t2;
	let t3;
	let t4;
	let t5;
	let t6;
	let current;
	const before_inner_slot_template = /*#slots*/ ctx[43]["before-inner"];
	const before_inner_slot = create_slot(before_inner_slot_template, ctx, /*$$scope*/ ctx[45], get_before_inner_slot_context$1);
	let if_block0 = (/*backLink*/ ctx[0] || /*hasLeftSlots*/ ctx[14]) && create_if_block_3$1(ctx);
	let if_block1 = (/*title*/ ctx[4] || /*subtitle*/ ctx[5] || /*hasTitleSlots*/ ctx[12]) && create_if_block_2$1(ctx);
	let if_block2 = /*hasRightSlots*/ ctx[13] && create_if_block_1$1(ctx);
	let if_block3 = (/*largeTitle*/ ctx[11] || /*hasTitleLargeSlots*/ ctx[10]) && create_if_block$1(ctx);
	const default_slot_template = /*#slots*/ ctx[43].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[45], null);
	const after_inner_slot_template = /*#slots*/ ctx[43]["after-inner"];
	const after_inner_slot = create_slot(after_inner_slot_template, ctx, /*$$scope*/ ctx[45], get_after_inner_slot_context$1);

	let div2_levels = [
		{ class: /*classes*/ ctx[9] },
		{ "data-f7-slot": /*f7Slot*/ ctx[6] },
		restProps(/*$$restProps*/ ctx[16])
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			t0 = space();
			if (before_inner_slot) before_inner_slot.c();
			t1 = space();
			div1 = element("div");
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			if (if_block2) if_block2.c();
			t4 = space();
			if (if_block3) if_block3.c();
			t5 = space();
			if (default_slot) default_slot.c();
			t6 = space();
			if (after_inner_slot) after_inner_slot.c();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, "data-f7-slot": true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(div2_nodes);
			if (before_inner_slot) before_inner_slot.l(div2_nodes);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (if_block0) if_block0.l(div1_nodes);
			t2 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			t3 = claim_space(div1_nodes);
			if (if_block2) if_block2.l(div1_nodes);
			t4 = claim_space(div1_nodes);
			if (if_block3) if_block3.l(div1_nodes);
			t5 = claim_space(div1_nodes);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			t6 = claim_space(div2_nodes);
			if (after_inner_slot) after_inner_slot.l(div2_nodes);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "navbar-bg");
			attr(div1, "class", /*innerClasses*/ ctx[8]);
			set_attributes(div2, div2_data);
		},
		m(target, anchor) {
			insert_hydration(target, div2, anchor);
			append_hydration(div2, div0);
			append_hydration(div2, t0);

			if (before_inner_slot) {
				before_inner_slot.m(div2, null);
			}

			append_hydration(div2, t1);
			append_hydration(div2, div1);
			if (if_block0) if_block0.m(div1, null);
			append_hydration(div1, t2);
			if (if_block1) if_block1.m(div1, null);
			append_hydration(div1, t3);
			if (if_block2) if_block2.m(div1, null);
			append_hydration(div1, t4);
			if (if_block3) if_block3.m(div1, null);
			append_hydration(div1, t5);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append_hydration(div2, t6);

			if (after_inner_slot) {
				after_inner_slot.m(div2, null);
			}

			/*div2_binding*/ ctx[44](div2);
			current = true;
		},
		p(ctx, dirty) {
			if (before_inner_slot) {
				if (before_inner_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						before_inner_slot,
						before_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(before_inner_slot_template, /*$$scope*/ ctx[45], dirty, get_before_inner_slot_changes$1),
						get_before_inner_slot_context$1
					);
				}
			}

			if (/*backLink*/ ctx[0] || /*hasLeftSlots*/ ctx[14]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*backLink, hasLeftSlots*/ 16385) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3$1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div1, t2);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*title*/ ctx[4] || /*subtitle*/ ctx[5] || /*hasTitleSlots*/ ctx[12]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*title, subtitle, hasTitleSlots*/ 4144) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2$1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div1, t3);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*hasRightSlots*/ ctx[13]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*hasRightSlots*/ 8192) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1$1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div1, t4);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*largeTitle*/ ctx[11] || /*hasTitleLargeSlots*/ ctx[10]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*largeTitle, hasTitleLargeSlots*/ 3072) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block$1(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(div1, t5);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[45], dirty, null),
						null
					);
				}
			}

			if (!current || dirty[0] & /*innerClasses*/ 256) {
				attr(div1, "class", /*innerClasses*/ ctx[8]);
			}

			if (after_inner_slot) {
				if (after_inner_slot.p && (!current || dirty[1] & /*$$scope*/ 16384)) {
					update_slot_base(
						after_inner_slot,
						after_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[45],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[45])
						: get_slot_changes(after_inner_slot_template, /*$$scope*/ ctx[45], dirty, get_after_inner_slot_changes$1),
						get_after_inner_slot_context$1
					);
				}
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty[0] & /*classes*/ 512) && { class: /*classes*/ ctx[9] },
				(!current || dirty[0] & /*f7Slot*/ 64) && { "data-f7-slot": /*f7Slot*/ ctx[6] },
				dirty[0] & /*$$restProps*/ 65536 && restProps(/*$$restProps*/ ctx[16])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(before_inner_slot, local);
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block3);
			transition_in(default_slot, local);
			transition_in(after_inner_slot, local);
			current = true;
		},
		o(local) {
			transition_out(before_inner_slot, local);
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block3);
			transition_out(default_slot, local);
			transition_out(after_inner_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (before_inner_slot) before_inner_slot.d(detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (default_slot) default_slot.d(detaching);
			if (after_inner_slot) after_inner_slot.d(detaching);
			/*div2_binding*/ ctx[44](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let hasLeftSlots;
	let hasRightSlots;
	let hasTitleSlots;
	let largeTitle;
	let hasTitleLargeSlots;
	let addLeftTitleClass;
	let addCenterTitleClass;
	let isLarge;
	let isTransparent;
	let isTransparentVisible;
	let classes;
	let innerClasses;

	const omit_props_names = [
		"class","backLink","backLinkUrl","backLinkForce","backLinkShowText","sliding","title","subtitle","hidden","noShadow","noHairline","innerClass","innerClassName","large","largeTransparent","transparent","titleLarge","f7Slot","hide","show","size"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const $$slots = compute_slots(slots);
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { backLink = undefined } = $$props;
	let { backLinkUrl = undefined } = $$props;
	let { backLinkForce = false } = $$props;
	let { backLinkShowText = undefined } = $$props;
	let { sliding = true } = $$props;
	let { title = undefined } = $$props;
	let { subtitle = undefined } = $$props;
	let { hidden = false } = $$props;
	let { noShadow = false } = $$props;
	let { noHairline = false } = $$props;
	let { innerClass = undefined } = $$props;
	let { innerClassName = undefined } = $$props;
	let { large = false } = $$props;
	let { largeTransparent = false } = $$props;
	let { transparent = false } = $$props;
	let { titleLarge = undefined } = $$props;
	let { f7Slot = 'fixed' } = $$props;
	let el;

	let theme = useTheme(t => {
		$$invalidate(31, theme = t);
	});

	let routerPositionClass = '';
	let largeCollapsed = false;
	let routerNavbarRole = null;
	let routerNavbarRoleDetailRoot = false;
	let routerNavbarMasterStack = false;
	let transparentVisible = false;

	function hide(animate) {
		app.f7.navbar.hide(el, animate);
	}

	function show(animate) {
		app.f7.navbar.show(el, animate);
	}

	function size() {
		app.f7.navbar.size(el);
	}

	function onHide(navbarEl) {
		if (el !== navbarEl) return;
		emit('navbarHide');
	}

	function onShow(navbarEl) {
		if (el !== navbarEl) return;
		emit('navbarShow');
	}

	function onNavbarTransparentShow(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(37, transparentVisible = true);
		emit('navbarTransparentShow');
	}

	function onNavbarTransparentHide(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(37, transparentVisible = false);
		emit('navbarTransparentHide');
	}

	function onExpand(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(33, largeCollapsed = false);
		emit('navbarExpand');
	}

	function onCollapse(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(33, largeCollapsed = true);
		emit('navbarCollapse');
	}

	function onNavbarPosition(navbarEl, position) {
		if (el !== navbarEl) return;
		$$invalidate(32, routerPositionClass = position ? `navbar-${position}` : position);
	}

	function onNavbarRole(navbarEl, rolesData) {
		if (el !== navbarEl) return;
		$$invalidate(34, routerNavbarRole = rolesData.role);
		$$invalidate(35, routerNavbarRoleDetailRoot = rolesData.detailRoot);
	}

	function onNavbarMasterStack(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(36, routerNavbarMasterStack = true);
	}

	function onNavbarMasterUnstack(navbarEl) {
		if (el !== navbarEl) return;
		$$invalidate(36, routerNavbarMasterStack = false);
	}

	function onBackClick() {
		emit('clickBack');
	}

	function mountNavbar() {
		app.f7.on('navbarShow', onShow);
		app.f7.on('navbarHide', onHide);
		app.f7.on('navbarCollapse', onCollapse);
		app.f7.on('navbarExpand', onExpand);
		app.f7.on('navbarPosition', onNavbarPosition);
		app.f7.on('navbarRole', onNavbarRole);
		app.f7.on('navbarMasterStack', onNavbarMasterStack);
		app.f7.on('navbarMasterUnstack', onNavbarMasterUnstack);
		app.f7.on('navbarTransparentShow', onNavbarTransparentShow);
		app.f7.on('navbarTransparentHide', onNavbarTransparentHide);
	}

	function destroyNavbar() {
		app.f7.off('navbarShow', onShow);
		app.f7.off('navbarHide', onHide);
		app.f7.off('navbarCollapse', onCollapse);
		app.f7.off('navbarExpand', onExpand);
		app.f7.off('navbarPosition', onNavbarPosition);
		app.f7.off('navbarRole', onNavbarRole);
		app.f7.off('navbarMasterStack', onNavbarMasterStack);
		app.f7.off('navbarMasterUnstack', onNavbarMasterUnstack);
		app.f7.off('navbarTransparentShow', onNavbarTransparentShow);
		app.f7.off('navbarTransparentHide', onNavbarTransparentHide);
	}

	onMount(() => {
		f7ready(() => {
			mountNavbar();
		});
	});

	afterUpdate(() => {
		if (!app.f7) return;
		app.f7.navbar.size(el);
	});

	onDestroy(() => {
		if (!app.f7) return;
		destroyNavbar();
	});

	function div2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(7, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(59, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(17, className = $$new_props.class);
		if ('backLink' in $$new_props) $$invalidate(0, backLink = $$new_props.backLink);
		if ('backLinkUrl' in $$new_props) $$invalidate(1, backLinkUrl = $$new_props.backLinkUrl);
		if ('backLinkForce' in $$new_props) $$invalidate(2, backLinkForce = $$new_props.backLinkForce);
		if ('backLinkShowText' in $$new_props) $$invalidate(3, backLinkShowText = $$new_props.backLinkShowText);
		if ('sliding' in $$new_props) $$invalidate(18, sliding = $$new_props.sliding);
		if ('title' in $$new_props) $$invalidate(4, title = $$new_props.title);
		if ('subtitle' in $$new_props) $$invalidate(5, subtitle = $$new_props.subtitle);
		if ('hidden' in $$new_props) $$invalidate(19, hidden = $$new_props.hidden);
		if ('noShadow' in $$new_props) $$invalidate(20, noShadow = $$new_props.noShadow);
		if ('noHairline' in $$new_props) $$invalidate(21, noHairline = $$new_props.noHairline);
		if ('innerClass' in $$new_props) $$invalidate(22, innerClass = $$new_props.innerClass);
		if ('innerClassName' in $$new_props) $$invalidate(23, innerClassName = $$new_props.innerClassName);
		if ('large' in $$new_props) $$invalidate(24, large = $$new_props.large);
		if ('largeTransparent' in $$new_props) $$invalidate(25, largeTransparent = $$new_props.largeTransparent);
		if ('transparent' in $$new_props) $$invalidate(26, transparent = $$new_props.transparent);
		if ('titleLarge' in $$new_props) $$invalidate(27, titleLarge = $$new_props.titleLarge);
		if ('f7Slot' in $$new_props) $$invalidate(6, f7Slot = $$new_props.f7Slot);
		if ('$$scope' in $$new_props) $$invalidate(45, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*titleLarge, large, title*/ 150994960) {
			$$invalidate(11, largeTitle = titleLarge || large && title);
		}

		if ($$self.$$.dirty[1] & /*theme*/ 1) {
			$$invalidate(39, addLeftTitleClass = theme && theme.ios && app.f7 && !app.f7.params.navbar.iosCenterTitle);
		}

		if ($$self.$$.dirty[1] & /*theme*/ 1) {
			$$invalidate(38, addCenterTitleClass = theme && theme.md && app.f7 && app.f7.params.navbar.mdCenterTitle || theme && theme.aurora && app.f7 && app.f7.params.navbar.auroraCenterTitle);
		}

		if ($$self.$$.dirty[0] & /*large, largeTransparent*/ 50331648) {
			$$invalidate(42, isLarge = large || largeTransparent);
		}

		if ($$self.$$.dirty[0] & /*transparent, largeTransparent*/ 100663296 | $$self.$$.dirty[1] & /*isLarge*/ 2048) {
			$$invalidate(41, isTransparent = transparent || isLarge && largeTransparent);
		}

		if ($$self.$$.dirty[1] & /*isTransparent, transparentVisible*/ 1088) {
			$$invalidate(40, isTransparentVisible = isTransparent && transparentVisible);
		}

		$$invalidate(9, classes = classNames(
			className,
			'navbar',
			routerPositionClass,
			{
				'navbar-hidden': hidden,
				'navbar-large': isLarge,
				'navbar-large-collapsed': isLarge && largeCollapsed,
				'navbar-transparent': isTransparent,
				'navbar-transparent-visible': isTransparentVisible,
				'navbar-master': routerNavbarRole === 'master',
				'navbar-master-detail': routerNavbarRole === 'detail',
				'navbar-master-detail-root': routerNavbarRoleDetailRoot === true,
				'navbar-master-stacked': routerNavbarMasterStack === true,
				'no-shadow': noShadow,
				'no-hairline': noHairline
			},
			colorClasses($$props)
		));

		if ($$self.$$.dirty[0] & /*innerClass, innerClassName, sliding*/ 12845056 | $$self.$$.dirty[1] & /*addLeftTitleClass, addCenterTitleClass*/ 384) {
			$$invalidate(8, innerClasses = classNames('navbar-inner', innerClass, innerClassName, {
				sliding,
				'navbar-inner-left-title': addLeftTitleClass,
				'navbar-inner-centered-title': addCenterTitleClass
			}));
		}
	};

	$$invalidate(14, hasLeftSlots = $$slots['nav-left'] || $$slots['left']);

	// eslint-disable-next-line
	$$invalidate(13, hasRightSlots = $$slots['nav-right'] || $$slots['right']);

	// eslint-disable-next-line
	$$invalidate(12, hasTitleSlots = $$slots['title']);

	// eslint-disable-next-line
	$$invalidate(10, hasTitleLargeSlots = $$slots['title-large']);

	$$props = exclude_internal_props($$props);

	return [
		backLink,
		backLinkUrl,
		backLinkForce,
		backLinkShowText,
		title,
		subtitle,
		f7Slot,
		el,
		innerClasses,
		classes,
		hasTitleLargeSlots,
		largeTitle,
		hasTitleSlots,
		hasRightSlots,
		hasLeftSlots,
		onBackClick,
		$$restProps,
		className,
		sliding,
		hidden,
		noShadow,
		noHairline,
		innerClass,
		innerClassName,
		large,
		largeTransparent,
		transparent,
		titleLarge,
		hide,
		show,
		size,
		theme,
		routerPositionClass,
		largeCollapsed,
		routerNavbarRole,
		routerNavbarRoleDetailRoot,
		routerNavbarMasterStack,
		transparentVisible,
		addCenterTitleClass,
		addLeftTitleClass,
		isTransparentVisible,
		isTransparent,
		isLarge,
		slots,
		div2_binding,
		$$scope
	];
}

class Navbar extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment$1,
			safe_not_equal,
			{
				class: 17,
				backLink: 0,
				backLinkUrl: 1,
				backLinkForce: 2,
				backLinkShowText: 3,
				sliding: 18,
				title: 4,
				subtitle: 5,
				hidden: 19,
				noShadow: 20,
				noHairline: 21,
				innerClass: 22,
				innerClassName: 23,
				large: 24,
				largeTransparent: 25,
				transparent: 26,
				titleLarge: 27,
				f7Slot: 6,
				hide: 28,
				show: 29,
				size: 30
			},
			null,
			[-1, -1]
		);
	}

	get hide() {
		return this.$$.ctx[28];
	}

	get show() {
		return this.$$.ctx[29];
	}

	get size() {
		return this.$$.ctx[30];
	}
}

/* Usersmalipetek/Documents/Documents/Projects/LIQUVELTE/LIQUIVELTE TEST/node_modules/framework7-svelte/components/searchbar.svelte generated by Svelte v3.50.0 */

const get_after_inner_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_after_inner_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_default_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_default_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_inner_end_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_inner_end_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_input_wrap_end_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_input_wrap_end_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_input_wrap_start_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_input_wrap_start_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_inner_start_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_inner_start_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_before_inner_slot_changes_1 = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_before_inner_slot_context_1 = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_after_inner_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_after_inner_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_default_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_default_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_inner_end_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_inner_end_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_input_wrap_end_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_input_wrap_end_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_input_wrap_start_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_input_wrap_start_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_inner_start_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_inner_start_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

const get_before_inner_slot_changes = dirty => ({
	searchbar: dirty[0] & /*f7Searchbar*/ 4096
});

const get_before_inner_slot_context = ctx => ({ searchbar: /*f7Searchbar*/ ctx[12] });

// (216:0) {:else}
function create_else_block(ctx) {
	let div2;
	let t0;
	let div1;
	let t1;
	let div0;
	let t2;
	let input;
	let input_value_value;
	let t3;
	let i;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;
	let current;
	let mounted;
	let dispose;
	const before_inner_slot_template = /*#slots*/ ctx[52]["before-inner"];
	const before_inner_slot = create_slot(before_inner_slot_template, ctx, /*$$scope*/ ctx[51], get_before_inner_slot_context_1);
	const inner_start_slot_template = /*#slots*/ ctx[52]["inner-start"];
	const inner_start_slot = create_slot(inner_start_slot_template, ctx, /*$$scope*/ ctx[51], get_inner_start_slot_context_1);
	const input_wrap_start_slot_template = /*#slots*/ ctx[52]["input-wrap-start"];
	const input_wrap_start_slot = create_slot(input_wrap_start_slot_template, ctx, /*$$scope*/ ctx[51], get_input_wrap_start_slot_context_1);
	let if_block0 = /*clearButton*/ ctx[9] && create_if_block_4(ctx);
	const input_wrap_end_slot_template = /*#slots*/ ctx[52]["input-wrap-end"];
	const input_wrap_end_slot = create_slot(input_wrap_end_slot_template, ctx, /*$$scope*/ ctx[51], get_input_wrap_end_slot_context_1);
	let if_block1 = /*disableButton*/ ctx[7] && create_if_block_3(ctx);
	const inner_end_slot_template = /*#slots*/ ctx[52]["inner-end"];
	const inner_end_slot = create_slot(inner_end_slot_template, ctx, /*$$scope*/ ctx[51], get_inner_end_slot_context_1);
	const default_slot_template = /*#slots*/ ctx[52].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[51], get_default_slot_context_1);
	const after_inner_slot_template = /*#slots*/ ctx[52]["after-inner"];
	const after_inner_slot = create_slot(after_inner_slot_template, ctx, /*$$scope*/ ctx[51], get_after_inner_slot_context_1);

	let div2_levels = [
		{ class: /*classes*/ ctx[13] },
		{ "data-f7-slot": /*f7Slot*/ ctx[10] },
		restProps(/*$$restProps*/ ctx[21])
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = element("div");
			if (before_inner_slot) before_inner_slot.c();
			t0 = space();
			div1 = element("div");
			if (inner_start_slot) inner_start_slot.c();
			t1 = space();
			div0 = element("div");
			if (input_wrap_start_slot) input_wrap_start_slot.c();
			t2 = space();
			input = element("input");
			t3 = space();
			i = element("i");
			t4 = space();
			if (if_block0) if_block0.c();
			t5 = space();
			if (input_wrap_end_slot) input_wrap_end_slot.c();
			t6 = space();
			if (if_block1) if_block1.c();
			t7 = space();
			if (inner_end_slot) inner_end_slot.c();
			t8 = space();
			if (default_slot) default_slot.c();
			t9 = space();
			if (after_inner_slot) after_inner_slot.c();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, "data-f7-slot": true });
			var div2_nodes = children(div2);
			if (before_inner_slot) before_inner_slot.l(div2_nodes);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (inner_start_slot) inner_start_slot.l(div1_nodes);
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (input_wrap_start_slot) input_wrap_start_slot.l(div0_nodes);
			t2 = claim_space(div0_nodes);

			input = claim_element(div0_nodes, "INPUT", {
				placeholder: true,
				autocomplete: true,
				autocorrect: true,
				autocapitalize: true,
				spellcheck: true,
				type: true
			});

			t3 = claim_space(div0_nodes);
			i = claim_element(div0_nodes, "I", { class: true });
			children(i).forEach(detach);
			t4 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			t5 = claim_space(div0_nodes);
			if (input_wrap_end_slot) input_wrap_end_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			t6 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			t7 = claim_space(div1_nodes);
			if (inner_end_slot) inner_end_slot.l(div1_nodes);
			t8 = claim_space(div1_nodes);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			t9 = claim_space(div2_nodes);
			if (after_inner_slot) after_inner_slot.l(div2_nodes);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			input.value = input_value_value = typeof /*value*/ ctx[0] === 'undefined'
			? ''
			: /*value*/ ctx[0];

			attr(input, "placeholder", /*placeholder*/ ctx[2]);
			attr(input, "autocomplete", /*autocomplete*/ ctx[3]);
			attr(input, "autocorrect", /*autocorrect*/ ctx[4]);
			attr(input, "autocapitalize", /*autocapitalize*/ ctx[5]);
			attr(input, "spellcheck", /*spellcheck*/ ctx[6]);
			attr(input, "type", "search");
			attr(i, "class", "searchbar-icon");
			attr(div0, "class", "searchbar-input-wrap");
			attr(div1, "class", "searchbar-inner");
			set_attributes(div2, div2_data);
		},
		m(target, anchor) {
			insert_hydration(target, div2, anchor);

			if (before_inner_slot) {
				before_inner_slot.m(div2, null);
			}

			append_hydration(div2, t0);
			append_hydration(div2, div1);

			if (inner_start_slot) {
				inner_start_slot.m(div1, null);
			}

			append_hydration(div1, t1);
			append_hydration(div1, div0);

			if (input_wrap_start_slot) {
				input_wrap_start_slot.m(div0, null);
			}

			append_hydration(div0, t2);
			append_hydration(div0, input);
			append_hydration(div0, t3);
			append_hydration(div0, i);
			append_hydration(div0, t4);
			if (if_block0) if_block0.m(div0, null);
			append_hydration(div0, t5);

			if (input_wrap_end_slot) {
				input_wrap_end_slot.m(div0, null);
			}

			append_hydration(div1, t6);
			if (if_block1) if_block1.m(div1, null);
			append_hydration(div1, t7);

			if (inner_end_slot) {
				inner_end_slot.m(div1, null);
			}

			append_hydration(div1, t8);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append_hydration(div2, t9);

			if (after_inner_slot) {
				after_inner_slot.m(div2, null);
			}

			/*div2_binding*/ ctx[54](div2);
			current = true;

			if (!mounted) {
				dispose = [
					listen(input, "input", /*onInput*/ ctx[15]),
					listen(input, "change", /*onChange*/ ctx[14]),
					listen(input, "focus", /*onFocus*/ ctx[16]),
					listen(input, "blur", /*onBlur*/ ctx[17])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (before_inner_slot) {
				if (before_inner_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						before_inner_slot,
						before_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(before_inner_slot_template, /*$$scope*/ ctx[51], dirty, get_before_inner_slot_changes_1),
						get_before_inner_slot_context_1
					);
				}
			}

			if (inner_start_slot) {
				if (inner_start_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						inner_start_slot,
						inner_start_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(inner_start_slot_template, /*$$scope*/ ctx[51], dirty, get_inner_start_slot_changes_1),
						get_inner_start_slot_context_1
					);
				}
			}

			if (input_wrap_start_slot) {
				if (input_wrap_start_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						input_wrap_start_slot,
						input_wrap_start_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(input_wrap_start_slot_template, /*$$scope*/ ctx[51], dirty, get_input_wrap_start_slot_changes_1),
						get_input_wrap_start_slot_context_1
					);
				}
			}

			if (!current || dirty[0] & /*value*/ 1 && input_value_value !== (input_value_value = typeof /*value*/ ctx[0] === 'undefined'
			? ''
			: /*value*/ ctx[0]) && input.value !== input_value_value) {
				input.value = input_value_value;
			}

			if (!current || dirty[0] & /*placeholder*/ 4) {
				attr(input, "placeholder", /*placeholder*/ ctx[2]);
			}

			if (!current || dirty[0] & /*autocomplete*/ 8) {
				attr(input, "autocomplete", /*autocomplete*/ ctx[3]);
			}

			if (!current || dirty[0] & /*autocorrect*/ 16) {
				attr(input, "autocorrect", /*autocorrect*/ ctx[4]);
			}

			if (!current || dirty[0] & /*autocapitalize*/ 32) {
				attr(input, "autocapitalize", /*autocapitalize*/ ctx[5]);
			}

			if (!current || dirty[0] & /*spellcheck*/ 64) {
				attr(input, "spellcheck", /*spellcheck*/ ctx[6]);
			}

			if (/*clearButton*/ ctx[9]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					if_block0.m(div0, t5);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (input_wrap_end_slot) {
				if (input_wrap_end_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						input_wrap_end_slot,
						input_wrap_end_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(input_wrap_end_slot_template, /*$$scope*/ ctx[51], dirty, get_input_wrap_end_slot_changes_1),
						get_input_wrap_end_slot_context_1
					);
				}
			}

			if (/*disableButton*/ ctx[7]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					if_block1.m(div1, t7);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (inner_end_slot) {
				if (inner_end_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						inner_end_slot,
						inner_end_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(inner_end_slot_template, /*$$scope*/ ctx[51], dirty, get_inner_end_slot_changes_1),
						get_inner_end_slot_context_1
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[51], dirty, get_default_slot_changes_1),
						get_default_slot_context_1
					);
				}
			}

			if (after_inner_slot) {
				if (after_inner_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						after_inner_slot,
						after_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(after_inner_slot_template, /*$$scope*/ ctx[51], dirty, get_after_inner_slot_changes_1),
						get_after_inner_slot_context_1
					);
				}
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty[0] & /*classes*/ 8192) && { class: /*classes*/ ctx[13] },
				(!current || dirty[0] & /*f7Slot*/ 1024) && { "data-f7-slot": /*f7Slot*/ ctx[10] },
				dirty[0] & /*$$restProps*/ 2097152 && restProps(/*$$restProps*/ ctx[21])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(before_inner_slot, local);
			transition_in(inner_start_slot, local);
			transition_in(input_wrap_start_slot, local);
			transition_in(input_wrap_end_slot, local);
			transition_in(inner_end_slot, local);
			transition_in(default_slot, local);
			transition_in(after_inner_slot, local);
			current = true;
		},
		o(local) {
			transition_out(before_inner_slot, local);
			transition_out(inner_start_slot, local);
			transition_out(input_wrap_start_slot, local);
			transition_out(input_wrap_end_slot, local);
			transition_out(inner_end_slot, local);
			transition_out(default_slot, local);
			transition_out(after_inner_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (before_inner_slot) before_inner_slot.d(detaching);
			if (inner_start_slot) inner_start_slot.d(detaching);
			if (input_wrap_start_slot) input_wrap_start_slot.d(detaching);
			if (if_block0) if_block0.d();
			if (input_wrap_end_slot) input_wrap_end_slot.d(detaching);
			if (if_block1) if_block1.d();
			if (inner_end_slot) inner_end_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (after_inner_slot) after_inner_slot.d(detaching);
			/*div2_binding*/ ctx[54](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (176:0) {#if form}
function create_if_block(ctx) {
	let form_1;
	let t0;
	let div1;
	let t1;
	let div0;
	let t2;
	let input;
	let input_value_value;
	let t3;
	let i;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;
	let current;
	let mounted;
	let dispose;
	const before_inner_slot_template = /*#slots*/ ctx[52]["before-inner"];
	const before_inner_slot = create_slot(before_inner_slot_template, ctx, /*$$scope*/ ctx[51], get_before_inner_slot_context);
	const inner_start_slot_template = /*#slots*/ ctx[52]["inner-start"];
	const inner_start_slot = create_slot(inner_start_slot_template, ctx, /*$$scope*/ ctx[51], get_inner_start_slot_context);
	const input_wrap_start_slot_template = /*#slots*/ ctx[52]["input-wrap-start"];
	const input_wrap_start_slot = create_slot(input_wrap_start_slot_template, ctx, /*$$scope*/ ctx[51], get_input_wrap_start_slot_context);
	let if_block0 = /*clearButton*/ ctx[9] && create_if_block_2(ctx);
	const input_wrap_end_slot_template = /*#slots*/ ctx[52]["input-wrap-end"];
	const input_wrap_end_slot = create_slot(input_wrap_end_slot_template, ctx, /*$$scope*/ ctx[51], get_input_wrap_end_slot_context);
	let if_block1 = /*disableButton*/ ctx[7] && create_if_block_1(ctx);
	const inner_end_slot_template = /*#slots*/ ctx[52]["inner-end"];
	const inner_end_slot = create_slot(inner_end_slot_template, ctx, /*$$scope*/ ctx[51], get_inner_end_slot_context);
	const default_slot_template = /*#slots*/ ctx[52].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[51], get_default_slot_context);
	const after_inner_slot_template = /*#slots*/ ctx[52]["after-inner"];
	const after_inner_slot = create_slot(after_inner_slot_template, ctx, /*$$scope*/ ctx[51], get_after_inner_slot_context);

	let form_1_levels = [
		{ class: /*classes*/ ctx[13] },
		{ "data-f7-slot": /*f7Slot*/ ctx[10] },
		restProps(/*$$restProps*/ ctx[21])
	];

	let form_1_data = {};

	for (let i = 0; i < form_1_levels.length; i += 1) {
		form_1_data = assign(form_1_data, form_1_levels[i]);
	}

	return {
		c() {
			form_1 = element("form");
			if (before_inner_slot) before_inner_slot.c();
			t0 = space();
			div1 = element("div");
			if (inner_start_slot) inner_start_slot.c();
			t1 = space();
			div0 = element("div");
			if (input_wrap_start_slot) input_wrap_start_slot.c();
			t2 = space();
			input = element("input");
			t3 = space();
			i = element("i");
			t4 = space();
			if (if_block0) if_block0.c();
			t5 = space();
			if (input_wrap_end_slot) input_wrap_end_slot.c();
			t6 = space();
			if (if_block1) if_block1.c();
			t7 = space();
			if (inner_end_slot) inner_end_slot.c();
			t8 = space();
			if (default_slot) default_slot.c();
			t9 = space();
			if (after_inner_slot) after_inner_slot.c();
			this.h();
		},
		l(nodes) {
			form_1 = claim_element(nodes, "FORM", { class: true, "data-f7-slot": true });
			var form_1_nodes = children(form_1);
			if (before_inner_slot) before_inner_slot.l(form_1_nodes);
			t0 = claim_space(form_1_nodes);
			div1 = claim_element(form_1_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (inner_start_slot) inner_start_slot.l(div1_nodes);
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (input_wrap_start_slot) input_wrap_start_slot.l(div0_nodes);
			t2 = claim_space(div0_nodes);

			input = claim_element(div0_nodes, "INPUT", {
				placeholder: true,
				autocomplete: true,
				autocorrect: true,
				autocapitalize: true,
				spellcheck: true,
				type: true
			});

			t3 = claim_space(div0_nodes);
			i = claim_element(div0_nodes, "I", { class: true });
			children(i).forEach(detach);
			t4 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			t5 = claim_space(div0_nodes);
			if (input_wrap_end_slot) input_wrap_end_slot.l(div0_nodes);
			div0_nodes.forEach(detach);
			t6 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			t7 = claim_space(div1_nodes);
			if (inner_end_slot) inner_end_slot.l(div1_nodes);
			t8 = claim_space(div1_nodes);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			t9 = claim_space(form_1_nodes);
			if (after_inner_slot) after_inner_slot.l(form_1_nodes);
			form_1_nodes.forEach(detach);
			this.h();
		},
		h() {
			input.value = input_value_value = typeof /*value*/ ctx[0] === 'undefined'
			? ''
			: /*value*/ ctx[0];

			attr(input, "placeholder", /*placeholder*/ ctx[2]);
			attr(input, "autocomplete", /*autocomplete*/ ctx[3]);
			attr(input, "autocorrect", /*autocorrect*/ ctx[4]);
			attr(input, "autocapitalize", /*autocapitalize*/ ctx[5]);
			attr(input, "spellcheck", /*spellcheck*/ ctx[6]);
			attr(input, "type", "search");
			attr(i, "class", "searchbar-icon");
			attr(div0, "class", "searchbar-input-wrap");
			attr(div1, "class", "searchbar-inner");
			set_attributes(form_1, form_1_data);
		},
		m(target, anchor) {
			insert_hydration(target, form_1, anchor);

			if (before_inner_slot) {
				before_inner_slot.m(form_1, null);
			}

			append_hydration(form_1, t0);
			append_hydration(form_1, div1);

			if (inner_start_slot) {
				inner_start_slot.m(div1, null);
			}

			append_hydration(div1, t1);
			append_hydration(div1, div0);

			if (input_wrap_start_slot) {
				input_wrap_start_slot.m(div0, null);
			}

			append_hydration(div0, t2);
			append_hydration(div0, input);
			append_hydration(div0, t3);
			append_hydration(div0, i);
			append_hydration(div0, t4);
			if (if_block0) if_block0.m(div0, null);
			append_hydration(div0, t5);

			if (input_wrap_end_slot) {
				input_wrap_end_slot.m(div0, null);
			}

			append_hydration(div1, t6);
			if (if_block1) if_block1.m(div1, null);
			append_hydration(div1, t7);

			if (inner_end_slot) {
				inner_end_slot.m(div1, null);
			}

			append_hydration(div1, t8);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append_hydration(form_1, t9);

			if (after_inner_slot) {
				after_inner_slot.m(form_1, null);
			}

			/*form_1_binding*/ ctx[53](form_1);
			current = true;

			if (!mounted) {
				dispose = [
					listen(input, "input", /*onInput*/ ctx[15]),
					listen(input, "change", /*onChange*/ ctx[14]),
					listen(input, "focus", /*onFocus*/ ctx[16]),
					listen(input, "blur", /*onBlur*/ ctx[17]),
					listen(form_1, "submit", /*onSubmit*/ ctx[18])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (before_inner_slot) {
				if (before_inner_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						before_inner_slot,
						before_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(before_inner_slot_template, /*$$scope*/ ctx[51], dirty, get_before_inner_slot_changes),
						get_before_inner_slot_context
					);
				}
			}

			if (inner_start_slot) {
				if (inner_start_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						inner_start_slot,
						inner_start_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(inner_start_slot_template, /*$$scope*/ ctx[51], dirty, get_inner_start_slot_changes),
						get_inner_start_slot_context
					);
				}
			}

			if (input_wrap_start_slot) {
				if (input_wrap_start_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						input_wrap_start_slot,
						input_wrap_start_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(input_wrap_start_slot_template, /*$$scope*/ ctx[51], dirty, get_input_wrap_start_slot_changes),
						get_input_wrap_start_slot_context
					);
				}
			}

			if (!current || dirty[0] & /*value*/ 1 && input_value_value !== (input_value_value = typeof /*value*/ ctx[0] === 'undefined'
			? ''
			: /*value*/ ctx[0]) && input.value !== input_value_value) {
				input.value = input_value_value;
			}

			if (!current || dirty[0] & /*placeholder*/ 4) {
				attr(input, "placeholder", /*placeholder*/ ctx[2]);
			}

			if (!current || dirty[0] & /*autocomplete*/ 8) {
				attr(input, "autocomplete", /*autocomplete*/ ctx[3]);
			}

			if (!current || dirty[0] & /*autocorrect*/ 16) {
				attr(input, "autocorrect", /*autocorrect*/ ctx[4]);
			}

			if (!current || dirty[0] & /*autocapitalize*/ 32) {
				attr(input, "autocapitalize", /*autocapitalize*/ ctx[5]);
			}

			if (!current || dirty[0] & /*spellcheck*/ 64) {
				attr(input, "spellcheck", /*spellcheck*/ ctx[6]);
			}

			if (/*clearButton*/ ctx[9]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div0, t5);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (input_wrap_end_slot) {
				if (input_wrap_end_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						input_wrap_end_slot,
						input_wrap_end_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(input_wrap_end_slot_template, /*$$scope*/ ctx[51], dirty, get_input_wrap_end_slot_changes),
						get_input_wrap_end_slot_context
					);
				}
			}

			if (/*disableButton*/ ctx[7]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div1, t7);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (inner_end_slot) {
				if (inner_end_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						inner_end_slot,
						inner_end_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(inner_end_slot_template, /*$$scope*/ ctx[51], dirty, get_inner_end_slot_changes),
						get_inner_end_slot_context
					);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[51], dirty, get_default_slot_changes),
						get_default_slot_context
					);
				}
			}

			if (after_inner_slot) {
				if (after_inner_slot.p && (!current || dirty[0] & /*f7Searchbar*/ 4096 | dirty[1] & /*$$scope*/ 1048576)) {
					update_slot_base(
						after_inner_slot,
						after_inner_slot_template,
						ctx,
						/*$$scope*/ ctx[51],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[51])
						: get_slot_changes(after_inner_slot_template, /*$$scope*/ ctx[51], dirty, get_after_inner_slot_changes),
						get_after_inner_slot_context
					);
				}
			}

			set_attributes(form_1, form_1_data = get_spread_update(form_1_levels, [
				(!current || dirty[0] & /*classes*/ 8192) && { class: /*classes*/ ctx[13] },
				(!current || dirty[0] & /*f7Slot*/ 1024) && { "data-f7-slot": /*f7Slot*/ ctx[10] },
				dirty[0] & /*$$restProps*/ 2097152 && restProps(/*$$restProps*/ ctx[21])
			]));
		},
		i(local) {
			if (current) return;
			transition_in(before_inner_slot, local);
			transition_in(inner_start_slot, local);
			transition_in(input_wrap_start_slot, local);
			transition_in(input_wrap_end_slot, local);
			transition_in(inner_end_slot, local);
			transition_in(default_slot, local);
			transition_in(after_inner_slot, local);
			current = true;
		},
		o(local) {
			transition_out(before_inner_slot, local);
			transition_out(inner_start_slot, local);
			transition_out(input_wrap_start_slot, local);
			transition_out(input_wrap_end_slot, local);
			transition_out(inner_end_slot, local);
			transition_out(default_slot, local);
			transition_out(after_inner_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(form_1);
			if (before_inner_slot) before_inner_slot.d(detaching);
			if (inner_start_slot) inner_start_slot.d(detaching);
			if (input_wrap_start_slot) input_wrap_start_slot.d(detaching);
			if (if_block0) if_block0.d();
			if (input_wrap_end_slot) input_wrap_end_slot.d(detaching);
			if (if_block1) if_block1.d();
			if (inner_end_slot) inner_end_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (after_inner_slot) after_inner_slot.d(detaching);
			/*form_1_binding*/ ctx[53](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (237:8) {#if clearButton}
function create_if_block_4(ctx) {
	let span;
	let mounted;
	let dispose;

	return {
		c() {
			span = element("span");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "input-clear-button");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);

			if (!mounted) {
				dispose = listen(span, "click", /*onClearButtonClick*/ ctx[19]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(span);
			mounted = false;
			dispose();
		}
	};
}

// (240:6) {#if disableButton}
function create_if_block_3(ctx) {
	let span;
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			span = element("span");
			t = text(/*disableButtonText*/ ctx[8]);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, /*disableButtonText*/ ctx[8]);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "searchbar-disable-button");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);

			if (!mounted) {
				dispose = listen(span, "click", /*onDisableButtonClick*/ ctx[20]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*disableButtonText*/ 256) set_data(t, /*disableButtonText*/ ctx[8]);
		},
		d(detaching) {
			if (detaching) detach(span);
			mounted = false;
			dispose();
		}
	};
}

// (203:8) {#if clearButton}
function create_if_block_2(ctx) {
	let span;
	let mounted;
	let dispose;

	return {
		c() {
			span = element("span");
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "input-clear-button");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);

			if (!mounted) {
				dispose = listen(span, "click", /*onClearButtonClick*/ ctx[19]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(span);
			mounted = false;
			dispose();
		}
	};
}

// (206:6) {#if disableButton}
function create_if_block_1(ctx) {
	let span;
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			span = element("span");
			t = text(/*disableButtonText*/ ctx[8]);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, /*disableButtonText*/ ctx[8]);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "searchbar-disable-button");
		},
		m(target, anchor) {
			insert_hydration(target, span, anchor);
			append_hydration(span, t);

			if (!mounted) {
				dispose = listen(span, "click", /*onDisableButtonClick*/ ctx[20]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*disableButtonText*/ 256) set_data(t, /*disableButtonText*/ ctx[8]);
		},
		d(detaching) {
			if (detaching) detach(span);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*form*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_hydration(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance_1($$self, $$props, $$invalidate) {
	let classes;

	const omit_props_names = [
		"class","noShadow","noHairline","form","placeholder","autocomplete","autocorrect","autocapitalize","spellcheck","disableButton","disableButtonText","clearButton","value","inputEvents","expandable","inline","searchContainer","searchIn","searchItem","searchGroup","searchGroupTitle","foundEl","notFoundEl","backdrop","backdropEl","hideOnEnableEl","hideOnSearchEl","ignore","customSearch","removeDiacritics","hideDividers","hideGroups","init","f7Slot","instance","search","enable","disable","toggle","clear"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const emit = createEmitter(createEventDispatcher, $$props);
	let { class: className = undefined } = $$props;
	let { noShadow = false } = $$props;
	let { noHairline = false } = $$props;
	let { form = true } = $$props;
	let { placeholder = 'Search' } = $$props;
	let { autocomplete = undefined } = $$props;
	let { autocorrect = undefined } = $$props;
	let { autocapitalize = undefined } = $$props;
	let { spellcheck = undefined } = $$props;
	let { disableButton = true } = $$props;
	let { disableButtonText = 'Cancel' } = $$props;
	let { clearButton = true } = $$props;
	let { value = undefined } = $$props;
	let { inputEvents = 'change input compositionend' } = $$props;
	let { expandable = false } = $$props;
	let { inline = false } = $$props;
	let { searchContainer = undefined } = $$props;
	let { searchIn = '.item-title' } = $$props;
	let { searchItem = 'li' } = $$props;
	let { searchGroup = '.list-group' } = $$props;
	let { searchGroupTitle = '.item-divider, .list-group-title' } = $$props;
	let { foundEl = '.searchbar-found' } = $$props;
	let { notFoundEl = '.searchbar-not-found' } = $$props;
	let { backdrop = undefined } = $$props;
	let { backdropEl = undefined } = $$props;
	let { hideOnEnableEl = '.searchbar-hide-on-enable' } = $$props;
	let { hideOnSearchEl = '.searchbar-hide-on-search' } = $$props;
	let { ignore = '.searchbar-ignore' } = $$props;
	let { customSearch = false } = $$props;
	let { removeDiacritics = false } = $$props;
	let { hideDividers = true } = $$props;
	let { hideGroups = true } = $$props;
	let { init = true } = $$props;
	let { f7Slot = 'fixed' } = $$props;
	let el;
	let f7Searchbar;

	function instance() {
		return f7Searchbar;
	}

	function search(query) {
		if (!f7Searchbar) return undefined;
		return f7Searchbar.search(query);
	}

	function enable() {
		if (!f7Searchbar) return undefined;
		return f7Searchbar.enable();
	}

	function disable() {
		if (!f7Searchbar) return undefined;
		return f7Searchbar.disable();
	}

	function toggle() {
		if (!f7Searchbar) return undefined;
		return f7Searchbar.toggle();
	}

	function clear() {
		if (!f7Searchbar) return undefined;
		return f7Searchbar.clear();
	}

	function onChange(event) {
		emit('change', [event]);
	}

	function onInput(event) {
		emit('input', [event]);
		$$invalidate(0, value = event.target.value);
	}

	function onFocus(event) {
		emit('focus', [event]);
	}

	function onBlur(event) {
		emit('blur', [event]);
	}

	function onSubmit(event) {
		emit('submit', [event]);
	}

	function onClearButtonClick(event) {
		emit('click:clear', [event]);
	}

	function onDisableButtonClick(event) {
		emit('click:disable', [event]);
	}

	onMount(() => {
		if (!init) return;

		f7ready(() => {
			const params = noUndefinedProps({
				el,
				inputEvents,
				searchContainer,
				searchIn,
				searchItem,
				searchGroup,
				searchGroupTitle,
				hideOnEnableEl,
				hideOnSearchEl,
				foundEl,
				notFoundEl,
				backdrop,
				backdropEl,
				disableButton,
				ignore,
				customSearch,
				removeDiacritics,
				hideDividers,
				hideGroups,
				expandable,
				inline,
				on: {
					search(searchbar, query, previousQuery) {
						emit('searchbarSearch', [searchbar, query, previousQuery]);
					},
					clear(searchbar, previousQuery) {
						emit('searchbarClear', [searchbar, previousQuery]);
					},
					enable(searchbar) {
						emit('searchbarEnable', [searchbar]);
					},
					disable(searchbar) {
						emit('searchbarDisable', [searchbar]);
					}
				}
			});

			Object.keys(params).forEach(key => {
				if (params[key] === '') {
					delete params[key];
				}
			});

			$$invalidate(12, f7Searchbar = app.f7.searchbar.create(params));
		});
	});

	onDestroy(() => {
		if (f7Searchbar && f7Searchbar.destroy) {
			f7Searchbar.destroy();
			$$invalidate(12, f7Searchbar = null);
		}
	});

	function form_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(11, el);
		});
	}

	function div2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(11, el);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(56, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(21, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('class' in $$new_props) $$invalidate(22, className = $$new_props.class);
		if ('noShadow' in $$new_props) $$invalidate(23, noShadow = $$new_props.noShadow);
		if ('noHairline' in $$new_props) $$invalidate(24, noHairline = $$new_props.noHairline);
		if ('form' in $$new_props) $$invalidate(1, form = $$new_props.form);
		if ('placeholder' in $$new_props) $$invalidate(2, placeholder = $$new_props.placeholder);
		if ('autocomplete' in $$new_props) $$invalidate(3, autocomplete = $$new_props.autocomplete);
		if ('autocorrect' in $$new_props) $$invalidate(4, autocorrect = $$new_props.autocorrect);
		if ('autocapitalize' in $$new_props) $$invalidate(5, autocapitalize = $$new_props.autocapitalize);
		if ('spellcheck' in $$new_props) $$invalidate(6, spellcheck = $$new_props.spellcheck);
		if ('disableButton' in $$new_props) $$invalidate(7, disableButton = $$new_props.disableButton);
		if ('disableButtonText' in $$new_props) $$invalidate(8, disableButtonText = $$new_props.disableButtonText);
		if ('clearButton' in $$new_props) $$invalidate(9, clearButton = $$new_props.clearButton);
		if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
		if ('inputEvents' in $$new_props) $$invalidate(25, inputEvents = $$new_props.inputEvents);
		if ('expandable' in $$new_props) $$invalidate(26, expandable = $$new_props.expandable);
		if ('inline' in $$new_props) $$invalidate(27, inline = $$new_props.inline);
		if ('searchContainer' in $$new_props) $$invalidate(28, searchContainer = $$new_props.searchContainer);
		if ('searchIn' in $$new_props) $$invalidate(29, searchIn = $$new_props.searchIn);
		if ('searchItem' in $$new_props) $$invalidate(30, searchItem = $$new_props.searchItem);
		if ('searchGroup' in $$new_props) $$invalidate(31, searchGroup = $$new_props.searchGroup);
		if ('searchGroupTitle' in $$new_props) $$invalidate(32, searchGroupTitle = $$new_props.searchGroupTitle);
		if ('foundEl' in $$new_props) $$invalidate(33, foundEl = $$new_props.foundEl);
		if ('notFoundEl' in $$new_props) $$invalidate(34, notFoundEl = $$new_props.notFoundEl);
		if ('backdrop' in $$new_props) $$invalidate(35, backdrop = $$new_props.backdrop);
		if ('backdropEl' in $$new_props) $$invalidate(36, backdropEl = $$new_props.backdropEl);
		if ('hideOnEnableEl' in $$new_props) $$invalidate(37, hideOnEnableEl = $$new_props.hideOnEnableEl);
		if ('hideOnSearchEl' in $$new_props) $$invalidate(38, hideOnSearchEl = $$new_props.hideOnSearchEl);
		if ('ignore' in $$new_props) $$invalidate(39, ignore = $$new_props.ignore);
		if ('customSearch' in $$new_props) $$invalidate(40, customSearch = $$new_props.customSearch);
		if ('removeDiacritics' in $$new_props) $$invalidate(41, removeDiacritics = $$new_props.removeDiacritics);
		if ('hideDividers' in $$new_props) $$invalidate(42, hideDividers = $$new_props.hideDividers);
		if ('hideGroups' in $$new_props) $$invalidate(43, hideGroups = $$new_props.hideGroups);
		if ('init' in $$new_props) $$invalidate(44, init = $$new_props.init);
		if ('f7Slot' in $$new_props) $$invalidate(10, f7Slot = $$new_props.f7Slot);
		if ('$$scope' in $$new_props) $$invalidate(51, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$$invalidate(13, classes = classNames(
			className,
			'searchbar',
			{
				'searchbar-inline': inline,
				'no-shadow': noShadow,
				'no-hairline': noHairline,
				'searchbar-expandable': expandable
			},
			colorClasses($$props)
		));
	};

	$$props = exclude_internal_props($$props);

	return [
		value,
		form,
		placeholder,
		autocomplete,
		autocorrect,
		autocapitalize,
		spellcheck,
		disableButton,
		disableButtonText,
		clearButton,
		f7Slot,
		el,
		f7Searchbar,
		classes,
		onChange,
		onInput,
		onFocus,
		onBlur,
		onSubmit,
		onClearButtonClick,
		onDisableButtonClick,
		$$restProps,
		className,
		noShadow,
		noHairline,
		inputEvents,
		expandable,
		inline,
		searchContainer,
		searchIn,
		searchItem,
		searchGroup,
		searchGroupTitle,
		foundEl,
		notFoundEl,
		backdrop,
		backdropEl,
		hideOnEnableEl,
		hideOnSearchEl,
		ignore,
		customSearch,
		removeDiacritics,
		hideDividers,
		hideGroups,
		init,
		instance,
		search,
		enable,
		disable,
		toggle,
		clear,
		$$scope,
		slots,
		form_1_binding,
		div2_binding
	];
}

class Searchbar extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				class: 22,
				noShadow: 23,
				noHairline: 24,
				form: 1,
				placeholder: 2,
				autocomplete: 3,
				autocorrect: 4,
				autocapitalize: 5,
				spellcheck: 6,
				disableButton: 7,
				disableButtonText: 8,
				clearButton: 9,
				value: 0,
				inputEvents: 25,
				expandable: 26,
				inline: 27,
				searchContainer: 28,
				searchIn: 29,
				searchItem: 30,
				searchGroup: 31,
				searchGroupTitle: 32,
				foundEl: 33,
				notFoundEl: 34,
				backdrop: 35,
				backdropEl: 36,
				hideOnEnableEl: 37,
				hideOnSearchEl: 38,
				ignore: 39,
				customSearch: 40,
				removeDiacritics: 41,
				hideDividers: 42,
				hideGroups: 43,
				init: 44,
				f7Slot: 10,
				instance: 45,
				search: 46,
				enable: 47,
				disable: 48,
				toggle: 49,
				clear: 50
			},
			null,
			[-1, -1]
		);
	}

	get instance() {
		return this.$$.ctx[45];
	}

	get search() {
		return this.$$.ctx[46];
	}

	get enable() {
		return this.$$.ctx[47];
	}

	get disable() {
		return this.$$.ctx[48];
	}

	get toggle() {
		return this.$$.ctx[49];
	}

	get clear() {
		return this.$$.ctx[50];
	}
}

export { HtmlTagHydration, Navbar, Searchbar, SvelteComponent, action_destroyer, add_flush_callback, add_render_callback, add_resize_listener, afterUpdate, append_hydration, assign, attr, beforeUpdate, bind, binding_callbacks, check_outros, children, claim_component, claim_element, claim_html_tag, claim_space, claim_svg_element, claim_text, commonjsGlobal, component_subscribe, compute_rest_props, compute_slots, createEventDispatcher, create_bidirectional_transition, create_component, create_slot, cubicInOut, destroy_component, destroy_each, detach, element, empty, exclude_internal_props, fade, getContext, get_all_dirty_from_scope, get_slot_changes, get_spread_object, get_spread_update, group_outros, identity, init, insert_hydration, internal, is_function, listen, mount_component, noop, onDestroy, onMount, outro_and_destroy_block, quintInOut, run_all, safe_not_equal, select_multiple_value, select_option, select_options, select_value, setContext, set_attributes, set_data, set_input_value, set_store_value, set_style, space, spring, src_url_equal, svg_element, text, tick, to_number, toggle_class, transition_in, transition_out, tweened, update_keyed_each, update_slot_base, writable, xlink_attr };
