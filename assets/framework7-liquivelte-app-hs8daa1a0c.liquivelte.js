import{SvelteComponent as e,init as t,safe_not_equal as l,create_slot as s,element as n,space as i,create_component as o,claim_element as c,children as r,claim_space as a,claim_component as u,detach as f,attr as d,insert_hydration as p,append_hydration as $,mount_component as m,update_slot_base as h,get_all_dirty_from_scope as v,get_slot_changes as g,transition_in as b,transition_out as q,destroy_component as w,onMount as y,assign as _,exclude_internal_props as j,binding_callbacks as k}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{app as x,f7init as A,noUndefinedProps as N,classNames as D,colorClasses as E}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';import{Routable_modals as I}from'./framework7-liquivelte-routable-modals-hs8daa1a0c.liquivelte.js';function create_fragment(e){let t;let l;let y;let _;const j=e[4].default;const k=s(j,e,e[3],null);return y=new I({props:{lec:e[1]}}),{c(){t=n("div"),k&&k.c(),l=i(),o(y.$$.fragment),this.h()},l(e){t=c(e,"DIV",{class:!0});var s=r(t);k&&k.l(s),l=a(s),u(y.$$.fragment,s),s.forEach(f),this.h()},h(){d(t,"class",e[0])},m(s,n){p(s,t,n),k&&k.m(t,null),$(t,l),m(y,t,null),e[5](t),_=!0},p(e,[l]){k&&k.p&&(!_||8&l)&&h(k,j,e,e[3],_?g(j,e[3],l,null):v(e[3]),null);const s={};2&l&&(s.lec=e[1]),y.$set(s),(!_||1&l)&&d(t,"class",e[0])},i(e){_||(b(k,e),b(y.$$.fragment,e),_=!0)},o(e){q(k,e),q(y.$$.fragment,e),_=!1},d(l){l&&f(t),k&&k.d(l),w(y),e[5](null)}}}function instance(e,t,l){let{$$slots:s={},$$scope:n}=t;let{lec:i}=t;let{classes:o}=t;let c;function div_binding(e){k[e?'unshift':'push']((()=>{c=e,l(2,c)}))}return x.f7&&'undefined'!=typeof window||A(c,N(t),!1),y((()=>{const e=c.parentNode;e&&e!==document.body&&e.parentNode===document.body&&(e.style.height='100%'),x.f7?x.f7.init(c):A(c,N(t),!0)})),e.$$set=e=>{l(8,t=_(_({},t),j(e))),'lec'in e&&l(1,i=e.lec),'classes'in e&&l(0,o=e.classes),'$$scope'in e&&l(3,n=e.$$scope)},e.$$.update=()=>{l(0,o=D(o,'framework7-root',E(t)))},t=j(t),[o,i,c,n,s,div_binding]}class App extends e{constructor(e){super(),t(this,e,instance,create_fragment,l,{lec:1,classes:0})}}export{App};
