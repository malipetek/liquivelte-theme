import{SvelteComponent as e,init as t,safe_not_equal as l,element as n,claim_element as o,children as r,detach as s,attr as c,insert_hydration as i,group_outros as a,update_keyed_each as f,check_outros as h,transition_in as u,transition_out as m,onMount as p,afterUpdate as d,onDestroy as g,empty as _,create_component as $,claim_component as v,mount_component as b,get_spread_update as w,get_spread_object as k,destroy_component as x,outro_and_destroy_block as q,tick as R,binding_callbacks as j,assign as D}from'./liquivelte-svelte-hs163e9d22.liquivelte.js';import{app as M}from'./framework7-liquivelte-hs3738144b.liquivelte.js';function get_each_context(e,t,l){const n=e.slice();return n[7]=t[l],n}function create_each_block(e,t){let l;let n;let o;let r;const c=[t[7].props];var f=t[7].component;function switch_props(e){let t={};for(let e=0;e<c.length;e+=1)t=D(t,c[e]);return{props:t}}return f&&(n=new f(switch_props())),{key:e,first:null,c(){l=_(),n&&$(n.$$.fragment),o=_(),this.h()},l(e){l=_(),n&&v(n.$$.fragment,e),o=_(),this.h()},h(){this.first=l},m(e,t){i(e,l,t),n&&b(n,e,t),i(e,o,t),r=!0},p(e,l){t=e;const r=1&l?w(c,[k(t[7].props)]):{};if(f!==(f=t[7].component)){if(n){a();const e=n;m(e.$$.fragment,1,0,(()=>{x(e,1)})),h()}f?(n=new f(switch_props()),$(n.$$.fragment),u(n.$$.fragment,1),b(n,o.parentNode,o)):n=null}else f&&n.$set(r)},i(e){r||(n&&u(n.$$.fragment,e),r=!0)},o(e){n&&m(n.$$.fragment,e),r=!1},d(e){e&&s(l),e&&s(o),n&&x(n,e)}}}function create_fragment(e){let t;let l=[];let p=new Map;let d;let g=e[0];const get_key=e=>e[7].id;for(let t=0;t<g.length;t+=1){let n=get_each_context(e,g,t);let o=get_key(n);p.set(o,l[t]=create_each_block(o,n))}return{c(){t=n("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var n=r(t);for(let e=0;e<l.length;e+=1)l[e].l(n);n.forEach(s),this.h()},h(){c(t,"class","framework7-modals")},m(n,o){i(n,t,o);for(let e=0;e<l.length;e+=1)l[e].m(t,null);e[3](t),d=!0},p(e,[n]){1&n&&(g=e[0],a(),l=f(l,n,get_key,1,e,g,p,t,q,create_each_block,null,get_each_context),h())},i(e){if(!d){for(let e=0;e<g.length;e+=1)u(l[e]);d=!0}},o(e){for(let e=0;e<l.length;e+=1)m(l[e]);d=!1},d(n){n&&s(t);for(let e=0;e<l.length;e+=1)l[e].d();e[3](null)}}}function instance(e,t,l){let{lec:n}=t;let o=[];let r;let s;function div_binding(e){j[e?'unshift':'push']((()=>{r=e,l(1,r)}))}return p((()=>{s={el:r,modals:o,setModals(e){R().then((()=>{l(0,o=e)}))}},M.f7routers.modals=s})),d((()=>{s&&M.f7events.emit('modalsRouterDidUpdate',s)})),g((()=>{s&&(M.f7routers.modals=null,s=null)})),e.$$set=e=>{'lec'in e&&l(2,n=e.lec)},[o,r,n,div_binding]}class Routable_modals extends e{constructor(e){super(),t(this,e,instance,create_fragment,l,{lec:2})}}export{Routable_modals};