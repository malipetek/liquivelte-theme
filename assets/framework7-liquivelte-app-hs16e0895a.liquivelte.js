import{SvelteComponent as e,init as t,safe_not_equal as s,create_slot as l,element as n,space as i,create_component as o,claim_element as r,children as c,claim_space as a,claim_component as u,detach as f,attr as d,insert_hydration as m,append_hydration as p,mount_component as $,update_slot_base as h,get_all_dirty_from_scope as v,get_slot_changes as g,transition_in as q,transition_out as w,destroy_component as b,getContext as y,onMount as _,assign as j,exclude_internal_props as k,binding_callbacks as x}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{app as A,f7init as N,noUndefinedProps as D,classNames as E,colorClasses as I}from'./framework7-liquivelte-hs52198d16.liquivelte.js';import{Routable_modals as P}from'./framework7-liquivelte-routable-modals-hs16e0895a.liquivelte.js';function create_fragment(e){let t;let s;let y;let _;const j=e[3].default;const k=l(j,e,e[2],null);return y=new P({}),{c(){t=n("div"),k&&k.c(),s=i(),o(y.$$.fragment),this.h()},l(e){t=r(e,"DIV",{class:!0});var l=c(t);k&&k.l(l),s=a(l),u(y.$$.fragment,l),l.forEach(f),this.h()},h(){d(t,"class",e[0])},m(l,n){m(l,t,n),k&&k.m(t,null),p(t,s),$(y,t,null),e[4](t),_=!0},p(e,[s]){k&&k.p&&(!_||4&s)&&h(k,j,e,e[2],_?g(j,e[2],s,null):v(e[2]),null),(!_||1&s)&&d(t,"class",e[0])},i(e){_||(q(k,e),q(y.$$.fragment,e),_=!0)},o(e){w(k,e),w(y.$$.fragment,e),_=!1},d(s){s&&f(t),k&&k.d(s),b(y),e[4](null)}}}function instance(e,t,s){let{$$slots:l={},$$scope:n}=t;y('svelteProps'),y('lec');let{classes:i=""}=t;let o;function div_binding(e){x[e?'unshift':'push']((()=>{o=e,s(1,o)}))}return A.f7&&'undefined'!=typeof window||N(o,D(t),!1),_((()=>{const e=o.parentNode;e&&e!==document.body&&e.parentNode===document.body&&(e.style.height='100%'),A.f7?A.f7.init(o):N(o,D(t),!0)})),e.$$set=e=>{s(9,t=j(j({},t),k(e))),'classes'in e&&s(0,i=e.classes),'$$scope'in e&&s(2,n=e.$$scope)},e.$$.update=()=>{s(0,i=E(i,'framework7-root',I(t)))},t=k(t),[i,o,n,l,div_binding]}class App extends e{constructor(e){super(),t(this,e,instance,create_fragment,s,{classes:0})}}export{App};
