import{SvelteComponent as e,init as t,safe_not_equal as n,create_slot as o,element as i,space as r,claim_element as s,children as c,claim_space as l,detach as a,attr as f,insert_hydration as p,append_hydration as u,update_slot_base as w,get_all_dirty_from_scope as h,get_slot_changes as g,transition_in as d,group_outros as k,check_outros as $,transition_out as v,destroy_each as m,createEventDispatcher as _,onMount as B,tick as b,afterUpdate as R,onDestroy as A,assign as y,exclude_internal_props as S,create_component as x,claim_component as C,mount_component as I,destroy_component as M,binding_callbacks as q,empty as z,get_spread_update as V,get_spread_object as E}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{createEmitter as P,app as D,noUndefinedProps as j,getRouterInitialComponent as H,useTab as N,f7ready as O,classNames as T,colorClasses as U,getRouterId as F}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';import{Router_context_provider as G}from'./framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';function get_each_context(e,t,n){const o=e.slice();o[34]=t[n],o[37]=n;const i={first:0===o[37],index:o[37]+1,index0:o[37],last:o[37]===o[6].length-1,rindex:o[6].length-o[37],rindex0:o[6].length-o[37]-1,length:o[6].length};return o[35]=i,o}const get_default_slot_spread_changes_1=e=>64&e[0];const get_default_slot_changes_1=e=>({});const get_default_slot_context_1=e=>({...e[34].props});const get_default_slot_spread_changes=e=>64&e[0];const get_default_slot_changes=e=>({view:16&e[0]});const get_default_slot_context=e=>({view:e[4],...e[34].props});function create_else_block(e){let t;const n=e[12].default;const i=o(n,e,e[14],get_default_slot_context_1);return{c(){i&&i.c()},l(e){i&&i.l(e)},m(e,n){i&&i.m(e,n),t=!0},p(e,o){i&&i.p&&(!t||16448&o[0])&&w(i,n,e,e[14],get_default_slot_spread_changes_1(o)||!t?h(e[14]):g(n,e[14],o,get_default_slot_changes_1),get_default_slot_context_1)},i(e){t||(d(i,e),t=!0)},o(e){v(i,e),t=!1},d(e){i&&i.d(e)}}}function create_if_block(e){let t;let n;let o;const i=[e[34].props];var r=e[34].component;function switch_props(e){let t={};for(let e=0;e<i.length;e+=1)t=y(t,i[e]);return{props:t}}return r&&(t=new r(switch_props())),{c(){t&&x(t.$$.fragment),n=z()},l(e){t&&C(t.$$.fragment,e),n=z()},m(e,i){t&&I(t,e,i),p(e,n,i),o=!0},p(e,o){const s=64&o[0]?V(i,[E(e[34].props)]):{};if(r!==(r=e[34].component)){if(t){k();const e=t;v(e.$$.fragment,1,0,(()=>{M(e,1)})),$()}r?(t=new r(switch_props()),x(t.$$.fragment),d(t.$$.fragment,1),I(t,n.parentNode,n)):t=null}else r&&t.$set(s)},i(e){o||(t&&d(t.$$.fragment,e),o=!0)},o(e){t&&v(t.$$.fragment,e),o=!1},d(e){e&&a(n),t&&M(t,e)}}}function create_default_slot(e){let t;let n;let o;let i;const s=[create_if_block,create_else_block];const c=[];function select_block_type(e,t){return e[5]?0:1}return t=select_block_type(e),n=c[t]=s[t](e),{c(){n.c(),o=r()},l(e){n.l(e),o=l(e)},m(e,n){c[t].m(e,n),p(e,o,n),i=!0},p(e,i){let r=t;t=select_block_type(e),t===r?c[t].p(e,i):(k(),v(c[r],1,1,(()=>{c[r]=null})),$(),n=c[t],n?n.p(e,i):(n=c[t]=s[t](e),n.c()),d(n,1),n.m(o.parentNode,o))},i(e){i||(d(n),i=!0)},o(e){v(n),i=!1},d(e){c[t].d(e),e&&a(o)}}}function create_each_block(e){let t;let n;return t=new G({props:{route:e[34].props.f7route,router:e[34].props.f7router,lec:e[0],$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,o){I(t,e,o),n=!0},p(e,n){const o={};64&n[0]&&(o.route=e[34].props.f7route),64&n[0]&&(o.router=e[34].props.f7router),1&n[0]&&(o.lec=e[0]),16480&n[0]&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function create_fragment(e){let t;let n;let _;let B;const b=e[12].default;const R=o(b,e,e[14],get_default_slot_context);let A=e[6];let y=[];for(let t=0;t<A.length;t+=1)y[t]=create_each_block(get_each_context(e,A,t));const out=e=>v(y[e],1,1,(()=>{y[e]=null}));return{c(){t=i("div"),R&&R.c(),n=r();for(let e=0;e<y.length;e+=1)y[e].c();this.h()},l(e){t=s(e,"DIV",{class:!0,style:!0,id:!0});var o=c(t);R&&R.l(o),n=l(o);for(let e=0;e<y.length;e+=1)y[e].l(o);o.forEach(a),this.h()},h(){f(t,"class",_="view "+e[7]),f(t,"style",e[2]),f(t,"id",e[1])},m(o,i){p(o,t,i),R&&R.m(t,null),u(t,n);for(let e=0;e<y.length;e+=1)y[e].m(t,null);e[13](t),B=!0},p(e,n){if(R&&R.p&&(!B||16464&n[0])&&w(R,b,e,e[14],get_default_slot_spread_changes(n)||!B?h(e[14]):g(b,e[14],n,get_default_slot_changes),get_default_slot_context),16481&n[0]){let o;for(A=e[6],o=0;o<A.length;o+=1){const i=get_each_context(e,A,o);y[o]?(y[o].p(i,n),d(y[o],1)):(y[o]=create_each_block(i),y[o].c(),d(y[o],1),y[o].m(t,null))}for(k(),o=A.length;o<y.length;o+=1)out(o);$()}(!B||128&n[0]&&_!==(_="view "+e[7]))&&f(t,"class",_),(!B||4&n[0])&&f(t,"style",e[2]),(!B||2&n[0])&&f(t,"id",e[1])},i(e){if(!B){d(R,e);for(let e=0;e<A.length;e+=1)d(y[e]);B=!0}},o(e){v(R,e),y=y.filter(Boolean);for(let e=0;e<y.length;e+=1)v(y[e]);B=!1},d(n){n&&a(t),R&&R.d(n),m(y,n),e[13](null)}}}function instance_1(e,t,n){let o;let{$$slots:i={},$$scope:r}=t;let{lec:s}=t;let{id:c}=t;let{style:l}=t;let{init:a=!0}=t;let{url:f}=t;let{class:p}=t;const u=P(_,t);const{main:w,tab:h,tabActive:g,browserHistoryInitialMatch:d=!0,initRouterOnTabShow:k}=t;const $=!(k&&h&&!g);let v;let m;let x;let C;let I;let M=!1;function instance(){return I}function onViewInit(e){u('viewInit',[e]),a||(n(4,I=e),C.instance=e)}if(D.f7&&!I&&a){const e=F();if(I=D.f7.views.create(x,{routerId:e,init:!1,...j(t),browserHistoryInitialMatch:d,on:{init:onViewInit}}),C={routerId:e,instance:I},D.f7routers.views.push(C),$&&I&&I.router&&(f||w)){const e=H(I.router);v=e.initialPage,m=e.initialRoute,m&&m.route&&m.route.masterRoute&&(v=void 0,m=void 0)}}let z=v?[v]:[];function onResize(e,t){u('viewResize',[t])}function onSwipeBackMove(e){u('swipeBackMove',[e])}function onSwipeBackBeforeChange(e){u('swipeBackBeforeChange',[e])}function onSwipeBackAfterChange(e){u('swipeBackAfterChange',[e])}function onSwipeBackBeforeReset(e){u('swipeBackBeforeReset',[e])}function onSwipeBackAfterReset(e){u('swipeBackAfterReset',[e])}function div_binding(e){q[e?'unshift':'push']((()=>{x=e,n(3,x)}))}return N((()=>x),u),B((()=>{n(5,M=!0),O((()=>{if(I)C.el=x,C.pages=z,C.setPages=e=>{b().then((()=>{n(6,z=e)}))},v&&v.isAsync&&!v.initialComponent?v.component().then((()=>{setTimeout((()=>{I.init(x),v&&(v.el=I.router.currentPageEl,m&&m.route&&m.route.keepAlive&&(m.route.keepAliveData={pageEl:v.el}))}),100)})):(I.init(x),v&&(v.el=I.router.currentPageEl,m&&m.route&&m.route.keepAlive&&(m.route.keepAliveData={pageEl:v.el})));else{const e=F();C={el:x,routerId:e,pages:z,instance:I,setPages(e){b().then((()=>{n(6,z=e)}))}},D.f7routers.views.push(C),C.instance=D.f7.views.create(x,{routerId:e,...j(t),browserHistoryInitialMatch:d,on:{init:onViewInit}}),n(4,I=C.instance)}a&&(I.on('resize',onResize),I.on('swipebackMove',onSwipeBackMove),I.on('swipebackBeforeChange',onSwipeBackBeforeChange),I.on('swipebackAfterChange',onSwipeBackAfterChange),I.on('swipebackBeforeReset',onSwipeBackBeforeReset),I.on('swipebackAfterReset',onSwipeBackAfterReset))}))})),R((()=>{C&&D.f7events.emit('viewRouterDidUpdate',C)})),A((()=>{I&&(I.off('resize',onResize),I.off('swipebackMove',onSwipeBackMove),I.off('swipebackBeforeChange',onSwipeBackBeforeChange),I.off('swipebackAfterChange',onSwipeBackAfterChange),I.off('swipebackBeforeReset',onSwipeBackBeforeReset),I.off('swipebackAfterReset',onSwipeBackAfterReset),I.destroy&&I.destroy(),n(4,I=null)),D.f7routers.views.splice(D.f7routers.views.indexOf(C),1),C=null})),e.$$set=e=>{n(33,t=y(y({},t),S(e))),'lec'in e&&n(0,s=e.lec),'id'in e&&n(1,c=e.id),'style'in e&&n(2,l=e.style),'init'in e&&n(8,a=e.init),'url'in e&&n(9,f=e.url),'class'in e&&n(10,p=e.class),'$$scope'in e&&n(14,r=e.$$scope)},e.$$.update=()=>{n(7,o=T(p,{'view-main':w,'tab-active':g,tab:h},U(t)))},t=S(t),[s,c,l,x,I,M,z,o,a,f,p,instance,i,div_binding,r]}class View extends e{constructor(e){super(),t(this,e,instance_1,create_fragment,n,{lec:0,id:1,style:2,init:8,url:9,class:10,instance:11},null,[-1,-1])}get instance(){return this.$$.ctx[11]}}export{View};
