import{SvelteComponent as s,init as e,safe_not_equal as l,create_slot as t,assign as i,element as n,claim_element as c,children as r,detach as a,set_attributes as o,insert_hydration as u,update_slot_base as d,get_all_dirty_from_scope as h,get_slot_changes as g,get_spread_update as $,transition_in as p,transition_out as f,compute_rest_props as v,getContext as m,exclude_internal_props as q}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{restProps as _,classNames as j,colorClasses as x}from'./framework7-liquivelte-hs52198d16.liquivelte.js';function create_fragment(s){let e;let l;const v=s[5].default;const m=t(v,s,s[4],null);let q=[{class:s[0]},_(s[1])];let j={};for(let s=0;s<q.length;s+=1)j=i(j,q[s]);return{c(){e=n("div"),m&&m.c(),this.h()},l(s){e=c(s,"DIV",{class:!0});var l=r(e);m&&m.l(l),l.forEach(a),this.h()},h(){o(e,j)},m(s,t){u(s,e,t),m&&m.m(e,null),l=!0},p(s,[t]){m&&m.p&&(!l||16&t)&&d(m,v,s,s[4],l?g(v,s[4],t,null):h(s[4]),null),o(e,j=$(q,[(!l||1&t)&&{class:s[0]},2&t&&_(s[1])]))},i(s){l||(p(m,s),l=!0)},o(s){f(m,s),l=!1},d(s){s&&a(e),m&&m.d(s)}}}function instance(s,e,l){const t=["classes","sliding"];let n=v(e,t);let{$$slots:c={},$$scope:r}=e;let a;m('svelteProps'),m('lec');let{classes:o=""}=e;let{sliding:u}=e;return s.$$set=s=>{l(9,e=i(i({},e),q(s))),l(1,n=v(e,t)),'classes'in s&&l(2,o=s.classes),'sliding'in s&&l(3,u=s.sliding),'$$scope'in s&&l(4,r=s.$$scope)},s.$$.update=()=>{l(0,a=j(o,'right',{sliding:u},x(e)))},e=q(e),[a,n,o,u,r,c]}class Nav_right extends s{constructor(s){super(),e(this,s,instance,create_fragment,l,{classes:2,sliding:3})}}export{Nav_right};