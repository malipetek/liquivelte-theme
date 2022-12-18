import{SvelteComponent as e,init as i,safe_not_equal as t,assign as l,element as s,claim_element as c,children as n,detach as d,set_attributes as a,insert_hydration as o,group_outros as r,transition_out as p,check_outros as u,transition_in as v,get_spread_update as f,compute_rest_props as w,getContext as m,onMount as _,afterUpdate as x,beforeUpdate as h,onDestroy as $,exclude_internal_props as b,binding_callbacks as z,create_slot as y,update_slot_base as O,get_all_dirty_from_scope as k,get_slot_changes as I,attr as g}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';const get_default_slot_changes_1=e=>({data:32&e});const get_default_slot_context_1=e=>({data:e[5]});const get_default_slot_changes=e=>({data:32&e});const get_default_slot_context=e=>({data:e[5]});function create_else_block(e){let i;const t=e[9].default;const l=y(t,e,e[8],get_default_slot_context_1);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,t){l&&l.m(e,t),i=!0},p(e,s){l&&l.p&&(!i||288&s)&&O(l,t,e,e[8],i?I(t,e[8],s,get_default_slot_changes_1):k(e[8]),get_default_slot_context_1)},i(e){i||(v(l,e),i=!0)},o(e){p(l,e),i=!1},d(e){l&&l.d(e)}}}function create_if_block(e){let i;let t;let l;const a=e[9].default;const r=y(a,e,e[8],get_default_slot_context);return{c(){i=s("div"),r&&r.c(),this.h()},l(e){i=c(e,"DIV",{class:!0,"data-swiper-zoom":!0});var t=n(i);r&&r.l(t),t.forEach(d),this.h()},h(){g(i,"class","swiper-zoom-container"),g(i,"data-swiper-zoom",t='number'==e[0]?e[0]:void 0)},m(e,t){o(e,i,t),r&&r.m(i,null),l=!0},p(e,s){r&&r.p&&(!l||288&s)&&O(r,a,e,e[8],l?I(a,e[8],s,get_default_slot_changes):k(e[8]),get_default_slot_context),(!l||1&s&&t!==(t='number'==e[0]?e[0]:void 0))&&g(i,"data-swiper-zoom",t)},i(e){l||(v(r,e),l=!0)},o(e){p(r,e),l=!1},d(e){e&&d(i),r&&r.d(e)}}}function create_fragment(e){let i;let t;let w;let m;let _;const x=[create_if_block,create_else_block];const h=[];function select_block_type(e,i){return e[0]?0:1}t=select_block_type(e),w=h[t]=x[t](e);let $=[{style:"width: calc(100% / var(--slides-per-view, 1));"},{class:m=e[2]+" "+e[3]},{"data-swiper-slide-index":e[1]},e[6]];let b={};for(let e=0;e<$.length;e+=1)b=l(b,$[e]);return{c(){i=s("div"),w.c(),this.h()},l(e){i=c(e,"DIV",{style:!0,class:!0,"data-swiper-slide-index":!0});var t=n(i);w.l(t),t.forEach(d),this.h()},h(){a(i,b)},m(l,s){o(l,i,s),h[t].m(i,null),e[10](i),_=!0},p(e,[l]){let s=t;t=select_block_type(e),t===s?h[t].p(e,l):(r(),p(h[s],1,1,(()=>{h[s]=null})),u(),w=h[t],w?w.p(e,l):(w=h[t]=x[t](e),w.c()),v(w,1),w.m(i,null)),a(i,b=f($,[{style:"width: calc(100% / var(--slides-per-view, 1));"},(!_||12&l&&m!==(m=e[2]+" "+e[3]))&&{class:m},(!_||2&l)&&{"data-swiper-slide-index":e[1]},64&l&&e[6]]))},i(e){_||(v(w),_=!0)},o(e){p(w),_=!1},d(l){l&&d(i),h[t].d(),e[10](null)}}}function instance(e,i,t){let s;const c=["lec","zoom","virtualIndex","class"];let n=w(i,c);let{$$slots:d={},$$scope:a}=i;let{lec:o}=i;let{zoom:r}=i;let{virtualIndex:p}=i;let{class:u}=i;let v=null;let f='swiper-slide';let y=m('swiper');let O=!1;const updateClasses=(e,i,l)=>{i===v&&t(3,f=l)};const attachEvent=()=>{y&&!O&&(y.on('_slideClass',updateClasses),O=!0)};const detachEvent=()=>{y&&(y.off('_slideClass',updateClasses),O=!1)};function div_binding(e){z[e?'unshift':'push']((()=>{v=e,t(4,v)}))}return _((()=>{void 0!==p&&(t(4,v.onSwiper=e=>{y=e,attachEvent()},v),attachEvent())})),x((()=>{v&&y&&(y.destroyed?'swiper-slide'!==f&&t(3,f='swiper-slide'):attachEvent())})),h((()=>{attachEvent()})),$((()=>{y&&detachEvent()})),e.$$set=e=>{i=l(l({},i),b(e)),t(6,n=w(i,c)),'lec'in e&&t(7,o=e.lec),'zoom'in e&&t(0,r=e.zoom),'virtualIndex'in e&&t(1,p=e.virtualIndex),'class'in e&&t(2,u=e.class),'$$scope'in e&&t(8,a=e.$$scope)},e.$$.update=()=>{8&e.$$.dirty&&t(5,s={isActive:f.indexOf('swiper-slide-active')>=0||f.indexOf('swiper-slide-duplicate-active')>=0,isVisible:f.indexOf('swiper-slide-visible')>=0,isDuplicate:f.indexOf('swiper-slide-duplicate')>=0,isPrev:f.indexOf('swiper-slide-prev')>=0||f.indexOf('swiper-slide-duplicate-prev')>=0,isNext:f.indexOf('swiper-slide-next')>=0||f.indexOf('swiper-slide-duplicate-next')>=0})},[r,p,u,f,v,s,n,o,a,d,div_binding]}class Swiper_slide extends e{constructor(e){super(),i(this,e,instance,create_fragment,t,{lec:7,zoom:0,virtualIndex:1,class:2})}}export{Swiper_slide};
