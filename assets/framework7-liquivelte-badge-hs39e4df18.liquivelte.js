import{SvelteComponent as t,init as l,safe_not_equal as e,create_slot as o,assign as s,element as i,claim_element as r,children as c,detach as n,set_attributes as a,insert_hydration as p,action_destroyer as g,update_slot_base as u,get_all_dirty_from_scope as d,get_slot_changes as $,get_spread_update as f,is_function as h,transition_in as m,transition_out as T,compute_rest_props as v,exclude_internal_props as q}from'./liquivelte-svelte-hs163e9d22.liquivelte.js';import{restProps as b,useTooltip as j,classNames as x,colorClasses as B}from'./framework7-liquivelte-hs3738144b.liquivelte.js';function create_fragment(t){let l;let e;let v;let q;let x;let B;const _=t[7].default;const k=o(_,t,t[6],null);let w=[{class:e="badge "+t[0]+" "+t[3]},b(t[4])];let A={};for(let t=0;t<w.length;t+=1)A=s(A,w[t]);return{c(){l=i("span"),k&&k.c(),this.h()},l(t){l=r(t,"SPAN",{class:!0});var e=c(l);k&&k.l(e),e.forEach(n),this.h()},h(){a(l,A)},m(e,o){p(e,l,o),k&&k.m(l,null),q=!0,x||(B=g(v=j.call(null,l,{tooltip:t[1],tooltipTrigger:t[2]})),x=!0)},p(t,[o]){k&&k.p&&(!q||64&o)&&u(k,_,t,t[6],q?$(_,t[6],o,null):d(t[6]),null),a(l,A=f(w,[(!q||1&o&&e!==(e="badge "+t[0]+" "+t[3]))&&{class:e},16&o&&b(t[4])])),v&&h(v.update)&&6&o&&v.update.call(null,{tooltip:t[1],tooltipTrigger:t[2]})},i(t){q||(m(k,t),q=!0)},o(t){T(k,t),q=!1},d(t){t&&n(l),k&&k.d(t),x=!1,B()}}}function instance(t,l,e){const o=["lec","classes","tooltip","tooltipTrigger"];let i=v(l,o);let{$$slots:r={},$$scope:c}=l;let{lec:n}=l;let a;let{classes:p}=l;let{tooltip:g}=l;let{tooltipTrigger:u}=l;return t.$$set=t=>{e(9,l=s(s({},l),q(t))),e(4,i=v(l,o)),'lec'in t&&e(5,n=t.lec),'classes'in t&&e(0,p=t.classes),'tooltip'in t&&e(1,g=t.tooltip),'tooltipTrigger'in t&&e(2,u=t.tooltipTrigger),'$$scope'in t&&e(6,c=t.$$scope)},t.$$.update=()=>{e(0,p=x(p,B(l)))},l=q(l),[p,g,u,a,i,n,c,r]}class Badge extends t{constructor(t){super(),l(this,t,instance,create_fragment,e,{lec:5,classes:0,tooltip:1,tooltipTrigger:2})}}export{Badge};