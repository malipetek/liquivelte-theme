import{SvelteComponent as e,init as t,safe_not_equal as l,create_component as i,claim_component as r,mount_component as s,transition_in as o,transition_out as a,destroy_component as c,beforeUpdate as u,create_slot as p,element as n,claim_element as m,children as f,detach as $,attr as d,insert_hydration as v,append_hydration as q,action_destroyer as h,update_slot_base as w,get_all_dirty_from_scope as g,get_slot_changes as _,is_function as j}from'./liquivelte-svelte-hs163e9d22.liquivelte.js';import'./framework7-liquivelte-hs3738144b.liquivelte.js';import{View as k}from'./framework7-liquivelte-view-hs39e4df1e.liquivelte.js';import{App as x}from'./framework7-liquivelte-app-hs39e4df1a.liquivelte.js';import{Page as y}from'./framework7-liquivelte-page-hs39e4de28.liquivelte.js';import'./framework7-liquivelte-get-params-hs47a8ad72.liquivelte.js';import'./framework7-liquivelte-popup-hs39e4df1e.liquivelte.js';import'./framework7-liquivelte-login-screen-hs39e4df1e.liquivelte.js';import'./framework7-liquivelte-sheet-hs39e4df1e.liquivelte.js';import'./framework7-liquivelte-popover-hs39e4df1e.liquivelte.js';import'./framework7-liquivelte-panel-hs39e4df1e.liquivelte.js';import'./framework7-liquivelte-router-context-provider-hs39e4de1e.liquivelte.js';import'./framework7-liquivelte-routable-modals-hs39e4df1a.liquivelte.js';import'./framework7-liquivelte-page-content-hs39e4de26.liquivelte.js';import'./framework7-liquivelte-preloader-hs39e4deea.liquivelte.js';import'./framework7-liquivelte-utils-hs39e4dee0.liquivelte.js';import'./framework7-liquivelte-params-list-hs39e4dee0.liquivelte.js';function create_default_slot_2(e){let t;let l;let i;let r;let s;let c;const u=e[2].default;const k=p(u,e,e[3],null);return{c(){t=n("div"),l=n("div"),k&&k.c(),this.h()},l(e){t=m(e,"DIV",{});var i=f(t);l=m(i,"DIV",{class:!0});var r=f(l);k&&k.l(r),r.forEach($),i.forEach($),this.h()},h(){d(l,"class","liveslot")},m(o,a){v(o,t,a),q(t,l),k&&k.m(l,null),r=!0,s||(c=h(i=persistingchild.call(null,t,e[1])),s=!0)},p(e,t){k&&k.p&&(!r||8&t)&&w(k,u,e,e[3],r?_(u,e[3],t,null):g(e[3]),null),i&&j(i.update)&&2&t&&i.update.call(null,e[1])},i(e){r||(o(k,e),r=!0)},o(e){a(k,e),r=!1},d(e){e&&$(t),k&&k.d(e),s=!1,c()}}}function create_default_slot_1(e){let t;let l;return t=new y({props:{lec:e[0],$$slots:{default:[create_default_slot_2]},$$scope:{ctx:e}}}),{c(){i(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,i){s(t,e,i),l=!0},p(e,l){const i={};1&l&&(i.lec=e[0]),10&l&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){l||(o(t.$$.fragment,e),l=!0)},o(e){a(t.$$.fragment,e),l=!1},d(e){c(t,e)}}}function create_default_slot(e){let t;let l;return t=new k({props:{main:!0,lec:e[0],$$slots:{default:[create_default_slot_1]},$$scope:{ctx:e}}}),{c(){i(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,i){s(t,e,i),l=!0},p(e,l){const i={};1&l&&(i.lec=e[0]),11&l&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){l||(o(t.$$.fragment,e),l=!0)},o(e){a(t.$$.fragment,e),l=!1},d(e){c(t,e)}}}function create_fragment(e){let t;let l;return t=new x({props:{theme:"ios",name:"My App",id:"com.demoapp.test",lec:e[0],$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){i(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,i){s(t,e,i),l=!0},p(e,[l]){const i={};1&l&&(i.lec=e[0]),11&l&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){l||(o(t.$$.fragment,e),l=!0)},o(e){a(t.$$.fragment,e),l=!1},d(e){c(t,e)}}}function persistingchild(e,t){e.children[0]!==t&&e.replaceChild(t,e.children[0])}function instance(e,t,l){let{$$slots:i={},$$scope:r}=t;let{lec:s}=t;let o;return u((()=>(o||(l(1,o=document.querySelector('.liveslot')),o.isConnected&&o.parentNode.removeChild(o)),!1))),e.$$set=e=>{'lec'in e&&l(0,s=e.lec),'$$scope'in e&&l(3,r=e.$$scope)},[s,o,i,r]}class App_wrapper extends e{constructor(e){super(),t(this,e,instance,create_fragment,l,{lec:0})}}export{App_wrapper as default};
