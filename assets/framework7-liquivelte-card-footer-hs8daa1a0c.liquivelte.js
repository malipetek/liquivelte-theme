import{SvelteComponent as e,init as l,safe_not_equal as t,create_slot as s,assign as c,element as r,claim_element as o,children as a,detach as n,set_attributes as i,insert_hydration as u,update_slot_base as f,get_all_dirty_from_scope as $,get_slot_changes as d,get_spread_update as h,transition_in as p,transition_out as m,compute_rest_props as v,exclude_internal_props as q}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{restProps as _,classNames as g,colorClasses as j}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';function create_fragment(e){let l;let t;let v;const q=e[5].default;const g=s(q,e,e[4],null);let j=[{class:t="card-footer "+e[0]},_(e[1])];let x={};for(let e=0;e<j.length;e+=1)x=c(x,j[e]);return{c(){l=r("div"),g&&g.c(),this.h()},l(e){l=o(e,"DIV",{class:!0});var t=a(l);g&&g.l(t),t.forEach(n),this.h()},h(){i(l,x)},m(e,t){u(e,l,t),g&&g.m(l,null),v=!0},p(e,[s]){g&&g.p&&(!v||16&s)&&f(g,q,e,e[4],v?d(q,e[4],s,null):$(e[4]),null),i(l,x=h(j,[(!v||1&s&&t!==(t="card-footer "+e[0]))&&{class:t},2&s&&_(e[1])]))},i(e){v||(p(g,e),v=!0)},o(e){m(g,e),v=!1},d(e){e&&n(l),g&&g.d(e)}}}function instance(e,l,t){let s;const r=["lec","class"];let o=v(l,r);let{$$slots:a={},$$scope:n}=l;let{lec:i}=l;let{class:u}=l;return e.$$set=e=>{t(7,l=c(c({},l),q(e))),t(1,o=v(l,r)),'lec'in e&&t(2,i=e.lec),'class'in e&&t(3,u=e.class),'$$scope'in e&&t(4,n=e.$$scope)},e.$$.update=()=>{t(0,s=g(u,j(l)))},l=q(l),[s,o,i,u,n,a]}class Card_footer extends e{constructor(e){super(),l(this,e,instance,create_fragment,t,{lec:2,class:3})}}export{Card_footer};