import{SvelteComponent as e,init as s,safe_not_equal as t,create_slot as o,assign as n,element as i,space as l,claim_element as c,children as p,claim_space as a,detach as d,attr as r,set_attributes as u,insert_hydration as h,append_hydration as C,update_slot_base as b,get_all_dirty_from_scope as k,get_slot_changes as O,get_spread_update as f,transition_in as m,transition_out as w,compute_rest_props as v,createEventDispatcher as S,onMount as g,onDestroy as E,exclude_internal_props as $,binding_callbacks as B}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{restProps as y,createEmitter as T,f7ready as _,app as H,classNames as j,modalStateClasses as q,colorClasses as x}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';const get_static_slot_changes=e=>({sheet:4&e[0]});const get_static_slot_context=e=>({sheet:e[2]});const get_default_slot_changes=e=>({sheet:4&e[0]});const get_default_slot_context=e=>({sheet:e[2]});const get_fixed_slot_changes=e=>({sheet:4&e[0]});const get_fixed_slot_context=e=>({sheet:e[2]});function create_fragment(e){let s;let t;let v;let S;let g;const E=e[26].fixed;const $=o(E,e,e[25],get_fixed_slot_context);const B=e[26].default;const T=o(B,e,e[25],get_default_slot_context);const _=e[26].static;const H=o(_,e,e[25],get_static_slot_context);let j=[{class:e[3]},y(e[4])];let q={};for(let e=0;e<j.length;e+=1)q=n(q,j[e]);return{c(){s=i("div"),$&&$.c(),t=l(),v=i("div"),T&&T.c(),S=l(),H&&H.c(),this.h()},l(e){s=c(e,"DIV",{class:!0});var o=p(s);$&&$.l(o),t=a(o),v=c(o,"DIV",{class:!0});var n=p(v);T&&T.l(n),S=a(n),H&&H.l(n),n.forEach(d),o.forEach(d),this.h()},h(){r(v,"class","sheet-modal-inner"),u(s,q)},m(o,n){h(o,s,n),$&&$.m(s,null),C(s,t),C(s,v),T&&T.m(v,null),C(v,S),H&&H.m(v,null),e[27](v),e[28](s),g=!0},p(e,t){$&&$.p&&(!g||33554436&t[0])&&b($,E,e,e[25],g?O(E,e[25],t,get_fixed_slot_changes):k(e[25]),get_fixed_slot_context),T&&T.p&&(!g||33554436&t[0])&&b(T,B,e,e[25],g?O(B,e[25],t,get_default_slot_changes):k(e[25]),get_default_slot_context),H&&H.p&&(!g||33554436&t[0])&&b(H,_,e,e[25],g?O(_,e[25],t,get_static_slot_changes):k(e[25]),get_static_slot_context),u(s,q=f(j,[(!g||8&t[0])&&{class:e[3]},16&t[0]&&y(e[4])]))},i(e){g||(m($,e),m(T,e),m(H,e),g=!0)},o(e){w($,e),w(T,e),w(H,e),g=!1},d(t){t&&d(s),$&&$.d(t),T&&T.d(t),H&&H.d(t),e[27](null),e[28](null)}}}function instance_1(e,s,t){let o;let i;const l=["lec","class","opened","animate","top","bottom","position","backdrop","backdropEl","closeByBackdropClick","closeByOutsideClick","closeOnEscape","push","swipeToClose","swipeToStep","swipeHandler","containerEl","instance"];let c=v(s,l);let{$$slots:p={},$$scope:a}=s;let{lec:d}=s;const r=T(S,s);let{class:u}=s;let{opened:h}=s;let{animate:C}=s;let{top:b}=s;let{bottom:k}=s;let{position:O}=s;let{backdrop:f}=s;let{backdropEl:m}=s;let{closeByBackdropClick:w}=s;let{closeByOutsideClick:y}=s;let{closeOnEscape:P}=s;let{push:D}=s;let{swipeToClose:I}=s;let{swipeToStep:V}=s;let{swipeHandler:z}=s;let{containerEl:A}=s;let F;let G;let J;const K={isOpened:h,isClosing:!1,swipeStep:!1};function instance(){return J}function onOpen(e){Object.assign(K,{isOpened:!0,isClosing:!1}),r('sheetOpen',[e]),t(5,h=!0)}function onOpened(e){r('sheetOpened',[e])}function onClose(e){Object.assign(K,{isOpened:!1,isClosing:!0}),r('sheetClose',[e])}function onClosed(e){Object.assign(K,{isClosing:!1}),r('sheetClosed',[e]),t(5,h=!1)}function onStepProgress(e,s){r('sheetStepProgress',[e,s])}function onStepOpen(e){r('sheetStepOpen',[e])}function onStepClose(e){r('sheetStepClose',[e])}let L=!1;function watchOpened(e){L?J&&(e?J.open():J.close()):L=!0}function div0_binding(e){B[e?'unshift':'push']((()=>{G=e,t(1,G)}))}function div1_binding(e){B[e?'unshift':'push']((()=>{F=e,t(0,F)}))}return g((()=>{const e={el:F,on:{open:onOpen,opened:onOpened,close:onClose,closed:onClosed,stepOpen:onStepOpen,stepClose:onStepClose,stepProgress:onStepProgress,_swipeStep(e){t(23,K.swipeStep=e,K)}}};void 0!==f&&(e.backdrop=f),void 0!==C&&(e.animate=C),void 0!==m&&(e.backdropEl=m),void 0!==w&&(e.closeByBackdropClick=w),void 0!==y&&(e.closeByOutsideClick=y),void 0!==P&&(e.closeOnEscape=P),void 0!==I&&(e.swipeToClose=I),void 0!==V&&(e.swipeToStep=V),void 0!==z&&(e.swipeHandler=z),void 0!==A&&(e.containerEl=A),_((()=>{if(F&&G){const e=H.f7.$;const s=e(G).children('.navbar, .toolbar, .tabbar, .searchbar');s.length&&e(F).prepend(s)}t(2,J=H.f7.sheet.create(e)),h&&J.open(!1)}))})),E((()=>{J&&J.destroy(),t(2,J=null)})),e.$$set=e=>{t(40,s=n(n({},s),$(e))),t(4,c=v(s,l)),'lec'in e&&t(6,d=e.lec),'class'in e&&t(7,u=e.class),'opened'in e&&t(5,h=e.opened),'animate'in e&&t(8,C=e.animate),'top'in e&&t(9,b=e.top),'bottom'in e&&t(10,k=e.bottom),'position'in e&&t(11,O=e.position),'backdrop'in e&&t(12,f=e.backdrop),'backdropEl'in e&&t(13,m=e.backdropEl),'closeByBackdropClick'in e&&t(14,w=e.closeByBackdropClick),'closeByOutsideClick'in e&&t(15,y=e.closeByOutsideClick),'closeOnEscape'in e&&t(16,P=e.closeOnEscape),'push'in e&&t(17,D=e.push),'swipeToClose'in e&&t(18,I=e.swipeToClose),'swipeToStep'in e&&t(19,V=e.swipeToStep),'swipeHandler'in e&&t(20,z=e.swipeHandler),'containerEl'in e&&t(21,A=e.containerEl),'$$scope'in e&&t(25,a=e.$$scope)},e.$$.update=()=>{3584&e.$$.dirty[0]&&t(24,o=O||(b?'top':'bottom')),t(3,i=j(u,'sheet-modal',`sheet-modal-${o}`,{'sheet-modal-push':D,'modal-in-swipe-step':K.swipeStep},q(K),x(s))),32&e.$$.dirty[0]&&watchOpened(h)},s=$(s),[F,G,J,i,c,h,d,u,C,b,k,O,f,m,w,y,P,D,I,V,z,A,instance,K,o,a,p,div0_binding,div1_binding]}class Sheet extends e{constructor(e){super(),s(this,e,instance_1,create_fragment,t,{lec:6,class:7,opened:5,animate:8,top:9,bottom:10,position:11,backdrop:12,backdropEl:13,closeByBackdropClick:14,closeByOutsideClick:15,closeOnEscape:16,push:17,swipeToClose:18,swipeToStep:19,swipeHandler:20,containerEl:21,instance:22},null,[-1,-1])}get instance(){return this.$$.ctx[22]}}export{Sheet};