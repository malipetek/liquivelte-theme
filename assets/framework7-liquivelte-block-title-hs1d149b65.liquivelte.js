import{SvelteComponent as e,init as l,safe_not_equal as t,create_slot as s,assign as c,element as i,claim_element as a,children as o,detach as r,set_attributes as n,toggle_class as m,insert_hydration as u,update_slot_base as d,get_all_dirty_from_scope as f,get_slot_changes as $,get_spread_update as g,transition_in as h,transition_out as p,compute_rest_props as k,exclude_internal_props as b}from'./liquivelte-svelte-hs5045a7fb.liquivelte.js';import{restProps as v,classNames as q,colorClasses as _}from'./framework7-liquivelte-hs713f1f22.liquivelte.js';function create_fragment(e){let l;let t;let k;const b=e[7].default;const q=s(b,e,e[6],null);let _=[{class:t="'block-title' "+e[2]+" "+e[3]},v(e[4])];let j={};for(let e=0;e<_.length;e+=1)j=c(j,_[e]);return{c(){l=i("div"),q&&q.c(),this.h()},l(e){l=a(e,"DIV",{class:!0});var t=o(l);q&&q.l(t),t.forEach(r),this.h()},h(){n(l,j),m(l,"block-title-large",e[0]),m(l,"block-title-medium",e[1])},m(e,t){u(e,l,t),q&&q.m(l,null),k=!0},p(e,[s]){q&&q.p&&(!k||64&s)&&d(q,b,e,e[6],k?$(b,e[6],s,null):f(e[6]),null),n(l,j=g(_,[(!k||12&s&&t!==(t="'block-title' "+e[2]+" "+e[3]))&&{class:t},16&s&&v(e[4])])),m(l,"block-title-large",e[0]),m(l,"block-title-medium",e[1])},i(e){k||(h(q,e),k=!0)},o(e){p(q,e),k=!1},d(e){e&&r(l),q&&q.d(e)}}}function instance(e,l,t){const s=["lec","large","medium","classes"];let i=k(l,s);let{$$slots:a={},$$scope:o}=l;let{lec:r}=l;let{large:n=!1}=l;let{medium:m=!1}=l;let u;let{classes:d}=l;return e.$$set=e=>{t(9,l=c(c({},l),b(e))),t(4,i=k(l,s)),'lec'in e&&t(5,r=e.lec),'large'in e&&t(0,n=e.large),'medium'in e&&t(1,m=e.medium),'classes'in e&&t(2,d=e.classes),'$$scope'in e&&t(6,o=e.$$scope)},e.$$.update=()=>{t(3,u=q(d,_(l)))},l=b(l),[n,m,d,u,i,r,o,a]}class Block_title extends e{constructor(e){super(),l(this,e,instance,create_fragment,t,{lec:5,large:0,medium:1,classes:2})}}export{Block_title};
