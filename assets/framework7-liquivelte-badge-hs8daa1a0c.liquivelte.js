import{SvelteComponent as t,init as l,safe_not_equal as e,create_slot as o,assign as i,element as s,claim_element as r,children as c,detach as a,set_attributes as n,insert_hydration as p,action_destroyer as g,update_slot_base as u,get_all_dirty_from_scope as d,get_slot_changes as $,get_spread_update as f,is_function as h,transition_in as m,transition_out as T,compute_rest_props as v,exclude_internal_props as q}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{restProps as b,useTooltip as j,classNames as x,colorClasses as B}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';function create_fragment(t){let l;let e;let v;let q;let x;let B;const _=t[7].default;const k=o(_,t,t[6],null);let w=[{class:e="badge "+t[2]},b(t[3])];let A={};for(let t=0;t<w.length;t+=1)A=i(A,w[t]);return{c(){l=s("span"),k&&k.c(),this.h()},l(t){l=r(t,"SPAN",{class:!0});var e=c(l);k&&k.l(e),e.forEach(a),this.h()},h(){n(l,A)},m(e,o){p(e,l,o),k&&k.m(l,null),q=!0,x||(B=g(v=j.call(null,l,{tooltip:t[0],tooltipTrigger:t[1]})),x=!0)},p(t,[o]){k&&k.p&&(!q||64&o)&&u(k,_,t,t[6],q?$(_,t[6],o,null):d(t[6]),null),n(l,A=f(w,[(!q||4&o&&e!==(e="badge "+t[2]))&&{class:e},8&o&&b(t[3])])),v&&h(v.update)&&3&o&&v.update.call(null,{tooltip:t[0],tooltipTrigger:t[1]})},i(t){q||(m(k,t),q=!0)},o(t){T(k,t),q=!1},d(t){t&&a(l),k&&k.d(t),x=!1,B()}}}function instance(t,l,e){let o;const s=["lec","class","tooltip","tooltipTrigger"];let r=v(l,s);let{$$slots:c={},$$scope:a}=l;let{lec:n}=l;let{class:p}=l;let{tooltip:g}=l;let{tooltipTrigger:u}=l;return t.$$set=t=>{e(9,l=i(i({},l),q(t))),e(3,r=v(l,s)),'lec'in t&&e(4,n=t.lec),'class'in t&&e(5,p=t.class),'tooltip'in t&&e(0,g=t.tooltip),'tooltipTrigger'in t&&e(1,u=t.tooltipTrigger),'$$scope'in t&&e(6,a=t.$$scope)},t.$$.update=()=>{e(2,o=x(p,B(l)))},l=q(l),[g,u,o,r,n,p,a,c]}class Badge extends t{constructor(t){super(),l(this,t,instance,create_fragment,e,{lec:4,class:5,tooltip:0,tooltipTrigger:1})}}export{Badge};