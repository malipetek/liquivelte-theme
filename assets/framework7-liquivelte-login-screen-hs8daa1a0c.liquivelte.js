import{SvelteComponent as e,init as n,safe_not_equal as t,create_slot as s,assign as i,element as o,claim_element as l,children as c,detach as a,set_attributes as r,insert_hydration as d,update_slot_base as p,get_all_dirty_from_scope as g,get_slot_changes as u,get_spread_update as f,transition_in as O,transition_out as $,compute_rest_props as h,createEventDispatcher as m,onMount as C,onDestroy as v,exclude_internal_props as _,binding_callbacks as E}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{restProps as S,createEmitter as b,f7ready as j,app as q,classNames as w,modalStateClasses as x,colorClasses as y}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';const get_default_slot_changes=e=>({loginScreen:2&e});const get_default_slot_context=e=>({loginScreen:e[1]});function create_fragment(e){let n;let t;const h=e[11].default;const m=s(h,e,e[10],get_default_slot_context);let C=[{class:e[2]},S(e[3])];let v={};for(let e=0;e<C.length;e+=1)v=i(v,C[e]);return{c(){n=o("div"),m&&m.c(),this.h()},l(e){n=l(e,"DIV",{class:!0});var t=c(n);m&&m.l(t),t.forEach(a),this.h()},h(){r(n,v)},m(s,i){d(s,n,i),m&&m.m(n,null),e[12](n),t=!0},p(e,[s]){m&&m.p&&(!t||1026&s)&&p(m,h,e,e[10],t?u(h,e[10],s,get_default_slot_changes):g(e[10]),get_default_slot_context),r(n,v=f(C,[(!t||4&s)&&{class:e[2]},8&s&&S(e[3])]))},i(e){t||(O(m,e),t=!0)},o(e){$(m,e),t=!1},d(t){t&&a(n),m&&m.d(t),e[12](null)}}}function instance_1(e,n,t){let s;const o=["lec","class","opened","animate","containerEl","instance"];let l=h(n,o);let{$$slots:c={},$$scope:a}=n;let{lec:r}=n;const d=b(m,n);let{class:p}=n;let{opened:g}=n;let{animate:u}=n;let{containerEl:f}=n;let O;let $;const S={isOpened:g,isClosing:!1};function instance(){return $}function onOpen(e){Object.assign(S,{isOpened:!0,isClosing:!1}),d('loginscreenOpen loginScreenOpen',[e]),t(4,g=!0)}function onOpened(e){d('loginscreenOpened loginScreenOpened',[e])}function onClose(e){Object.assign(S,{isOpened:!1,isClosing:!0}),d('loginscreenClose loginScreenClose',[e])}function onClosed(e){Object.assign(S,{isClosing:!1}),d('loginscreenClosed loginScreenClosed',[e]),t(4,g=!1)}let L=!1;function watchOpened(e){L?$&&(e?$.open():$.close()):L=!0}function div_binding(e){E[e?'unshift':'push']((()=>{O=e,t(0,O)}))}return C((()=>{const e={el:O,on:{open:onOpen,opened:onOpened,close:onClose,closed:onClosed}};void 0!==u&&(e.animate=u),void 0!==f&&(e.containerEl=u),j((()=>{t(1,$=q.f7.loginScreen.create(e)),g&&$.open(!1)}))})),v((()=>{$&&$.destroy(),t(1,$=null)})),e.$$set=e=>{t(22,n=i(i({},n),_(e))),t(3,l=h(n,o)),'lec'in e&&t(5,r=e.lec),'class'in e&&t(6,p=e.class),'opened'in e&&t(4,g=e.opened),'animate'in e&&t(7,u=e.animate),'containerEl'in e&&t(8,f=e.containerEl),'$$scope'in e&&t(10,a=e.$$scope)},e.$$.update=()=>{t(2,s=w(p,'login-screen',x(S),y(n))),16&e.$$.dirty&&watchOpened(g)},n=_(n),[O,$,s,l,g,r,p,u,f,instance,a,c,div_binding]}class Login_screen extends e{constructor(e){super(),n(this,e,instance_1,create_fragment,t,{lec:5,class:6,opened:4,animate:7,containerEl:8,instance:9})}get instance(){return this.$$.ctx[9]}}export{Login_screen};
