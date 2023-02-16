import{SvelteComponent as e,init as l,safe_not_equal as i,create_slot as n,assign as s,element as o,space as t,claim_element as a,children as p,claim_space as c,detach as r,set_attributes as d,insert_hydration as k,append_hydration as f,update_slot_base as h,get_all_dirty_from_scope as w,get_slot_changes as b,get_spread_update as u,transition_in as B,transition_out as v,compute_rest_props as C,getContext as O,onMount as $,onDestroy as g,exclude_internal_props as y,attr as z,createEventDispatcher as E,binding_callbacks as m}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{restProps as A,createEmitter as _,f7ready as S,app as j,noUndefinedProps as R,classNames as F,colorClasses as N}from'./framework7-liquivelte-hs52198d16.liquivelte.js';const get_default_slot_changes=e=>({panel:32&e[0]});const get_default_slot_context=e=>({panel:e[5]});function create_if_block(e){let l;return{c(){l=o("div"),this.h()},l(e){l=a(e,"DIV",{class:!0}),p(l).forEach(r),this.h()},h(){z(l,"class","panel-resize-handler")},m(e,i){k(e,l,i)},d(e){e&&r(l)}}}function create_fragment(e){let l;let i;let C;let O;const $=e[30].default;const g=n($,e,e[29],get_default_slot_context);let y=e[1]&&create_if_block();let z=[{class:C="panel "+e[0]+" "+e[3]},{"data-f7-slot":e[2]},A(e[6])];let E={};for(let e=0;e<z.length;e+=1)E=s(E,z[e]);return{c(){l=o("div"),g&&g.c(),i=t(),y&&y.c(),this.h()},l(e){l=a(e,"DIV",{class:!0,"data-f7-slot":!0});var n=p(l);g&&g.l(n),i=c(n),y&&y.l(n),n.forEach(r),this.h()},h(){d(l,E)},m(n,s){k(n,l,s),g&&g.m(l,null),f(l,i),y&&y.m(l,null),e[31](l),O=!0},p(e,i){g&&g.p&&(!O||536870944&i[0])&&h(g,$,e,e[29],O?b($,e[29],i,get_default_slot_changes):w(e[29]),get_default_slot_context),e[1]?y||(y=create_if_block(),y.c(),y.m(l,null)):y&&(y.d(1),y=null),d(l,E=u(z,[(!O||9&i[0]&&C!==(C="panel "+e[0]+" "+e[3]))&&{class:C},(!O||4&i[0])&&{"data-f7-slot":e[2]},64&i[0]&&A(e[6])]))},i(e){O||(B(g,e),O=!0)},o(e){v(g,e),O=!1},d(i){i&&r(l),g&&g.d(i),y&&y.d(),e[31](null)}}}function instance_1(e,l,i){let n;let o;const t=["classes","side","effect","cover","reveal","push","left","right","opened","resizable","backdrop","backdropEl","containerEl","closeByBackdropClick","visibleBreakpoint","collapsedBreakpoint","swipe","swipeNoFollow","swipeOnlyClose","swipeActiveArea","swipeThreshold","f7Slot","instance"];let a=C(l,t);let{$$slots:p={},$$scope:c}=l;O('svelteProps'),O('lec');const r=_(E,l);let d;let{classes:k=""}=l;let{side:f}=l;let{effect:h}=l;let{cover:w=!1}=l;let{reveal:b=!1}=l;let{push:u=!1}=l;let{left:B=!1}=l;let{right:v=!1}=l;let{opened:z=!1}=l;let{resizable:A=!1}=l;let{backdrop:T=!0}=l;let{backdropEl:q}=l;let{containerEl:x}=l;let{closeByBackdropClick:P}=l;let{visibleBreakpoint:D}=l;let{collapsedBreakpoint:I}=l;let{swipe:V=!1}=l;let{swipeNoFollow:G=!1}=l;let{swipeOnlyClose:H=!1}=l;let{swipeActiveArea:J=0}=l;let{swipeThreshold:K=0}=l;let{f7Slot:L="fixed"}=l;let M;let Q;const U={isOpened:!1,isClosing:!1,isCollapsed:!1,isBreakpoint:!1};function instance(){return Q}let W=A;let X=!1;function watchResizable(e){X?(Q&&e&&!W?Q.enableResizable():Q&&!e&&W&&Q.disableResizable(),W=e):X=!0}let Y=z;let Z=!1;function watchOpened(e){Z?(Q&&e&&!Y?Q.open():Q&&!e&&Y&&Q.close(),Y=e):Z=!0}function onOpen(...e){Object.assign(U,{isOpened:!0,isClosing:!1}),r('panelOpen',e),i(7,z=!0)}function onOpened(...e){r('panelOpened',e)}function onClose(...e){Object.assign(U,{isOpened:!1,isClosing:!0}),r('panelClose',e)}function onClosed(...e){Object.assign(U,{isClosing:!1}),r('panelClosed',e),i(7,z=!1)}function onBackdropClick(...e){r('panelBackdropClick',e)}function onSwipe(...e){r('panelSwipe',e)}function onSwipeOpen(...e){r('panelSwipeOpen',e)}function onBreakpoint(...e){Object.assign(U,{isBreakpoint:!0,isCollapsed:!1}),r('panelBreakpoint',e)}function onCollapsedBreakpoint(...e){Object.assign(U,{isBreakpoint:!1,isCollapsed:!0}),r('panelCollapsedBreakpoint',e)}function onResize(...e){r('panelResize',e)}function div_binding(e){m[e?'unshift':'push']((()=>{M=e,i(4,M)}))}return $((()=>{S((()=>{const e=j.f7.$;0===e('.panel-backdrop').length&&e('<div class="panel-backdrop"></div>').insertBefore(M);const l=R({el:M,resizable:A,backdrop:T,backdropEl:q,containerEl:x,closeByBackdropClick:P,visibleBreakpoint:D,collapsedBreakpoint:I,swipe:V,swipeNoFollow:G,swipeOnlyClose:H,swipeActiveArea:J,swipeThreshold:K,on:{open:onOpen,opened:onOpened,close:onClose,closed:onClosed,backdropClick:onBackdropClick,swipe:onSwipe,swipeOpen:onSwipeOpen,collapsedBreakpoint:onCollapsedBreakpoint,breakpoint:onBreakpoint,resize:onResize}});i(5,Q=j.f7.panel.create(l)),z&&Q.open(!1)}))})),g((()=>{Q&&Q.destroy&&Q.destroy(),i(5,Q=null)})),e.$$set=e=>{i(53,l=s(s({},l),y(e))),i(6,a=C(l,t)),'classes'in e&&i(0,k=e.classes),'side'in e&&i(8,f=e.side),'effect'in e&&i(9,h=e.effect),'cover'in e&&i(10,w=e.cover),'reveal'in e&&i(11,b=e.reveal),'push'in e&&i(12,u=e.push),'left'in e&&i(13,B=e.left),'right'in e&&i(14,v=e.right),'opened'in e&&i(7,z=e.opened),'resizable'in e&&i(1,A=e.resizable),'backdrop'in e&&i(15,T=e.backdrop),'backdropEl'in e&&i(16,q=e.backdropEl),'containerEl'in e&&i(17,x=e.containerEl),'closeByBackdropClick'in e&&i(18,P=e.closeByBackdropClick),'visibleBreakpoint'in e&&i(19,D=e.visibleBreakpoint),'collapsedBreakpoint'in e&&i(20,I=e.collapsedBreakpoint),'swipe'in e&&i(21,V=e.swipe),'swipeNoFollow'in e&&i(22,G=e.swipeNoFollow),'swipeOnlyClose'in e&&i(23,H=e.swipeOnlyClose),'swipeActiveArea'in e&&i(24,J=e.swipeActiveArea),'swipeThreshold'in e&&i(25,K=e.swipeThreshold),'f7Slot'in e&&i(2,L=e.f7Slot),'$$scope'in e&&i(29,c=e.$$scope)},e.$$.update=()=>{24832&e.$$.dirty[0]&&i(28,n=f||(B?'left':v?'right':'left')),6656&e.$$.dirty[0]&&i(27,o=h||(b?'reveal':u?'push':'cover')),i(3,d=F(k,{'panel-in':U.isOpened&&!U.isClosing&&!U.isBreakpoint,'panel-in-breakpoint':U.isBreakpoint,'panel-in-collapsed':U.isCollapsed,'panel-resizable':A,[`panel-${n}`]:n,[`panel-${o}`]:o},N(l))),2&e.$$.dirty[0]&&watchResizable(A),128&e.$$.dirty[0]&&watchOpened(z)},l=y(l),[k,A,L,d,M,Q,a,z,f,h,w,b,u,B,v,T,q,x,P,D,I,V,G,H,J,K,instance,o,n,c,p,div_binding]}class Panel extends e{constructor(e){super(),l(this,e,instance_1,create_fragment,i,{classes:0,side:8,effect:9,cover:10,reveal:11,push:12,left:13,right:14,opened:7,resizable:1,backdrop:15,backdropEl:16,containerEl:17,closeByBackdropClick:18,visibleBreakpoint:19,collapsedBreakpoint:20,swipe:21,swipeNoFollow:22,swipeOnlyClose:23,swipeActiveArea:24,swipeThreshold:25,f7Slot:2,instance:26},null,[-1,-1])}get instance(){return this.$$.ctx[26]}}export{Panel};