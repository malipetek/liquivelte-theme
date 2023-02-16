import{SvelteComponent as e,init as n,safe_not_equal as o,create_slot as s,assign as p,element as l,claim_element as i,children as t,detach as c,set_attributes as a,insert_hydration as r,update_slot_base as d,get_all_dirty_from_scope as u,get_slot_changes as w,get_spread_update as C,transition_in as k,transition_out as f,compute_rest_props as b,getContext as E,createEventDispatcher as v,onMount as h,onDestroy as O,exclude_internal_props as S,binding_callbacks as $}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{restProps as m,createEmitter as g,f7ready as B,app as y,classNames as H,modalStateClasses as T,colorClasses as _}from'./framework7-liquivelte-hs52198d16.liquivelte.js';const get_default_slot_changes=e=>({popup:4&e[0]});const get_default_slot_context=e=>({popup:e[2]});function create_fragment(e){let n;let o;const b=e[18].default;const E=s(b,e,e[17],get_default_slot_context);let v=[{class:e[0]},m(e[3])];let h={};for(let e=0;e<v.length;e+=1)h=p(h,v[e]);return{c(){n=l("div"),E&&E.c(),this.h()},l(e){n=i(e,"DIV",{class:!0});var o=t(n);E&&E.l(o),o.forEach(c),this.h()},h(){a(n,h)},m(s,p){r(s,n,p),E&&E.m(n,null),e[19](n),o=!0},p(e,s){E&&E.p&&(!o||131076&s[0])&&d(E,b,e,e[17],o?w(b,e[17],s,get_default_slot_changes):u(e[17]),get_default_slot_context),a(n,h=C(v,[(!o||1&s[0])&&{class:e[0]},8&s[0]&&m(e[3])]))},i(e){o||(k(E,e),o=!0)},o(e){f(E,e),o=!1},d(o){o&&c(n),E&&E.d(o),e[19](null)}}}function instance_1(e,n,o){const s=["classes","tabletFullscreen","opened","animate","backdrop","backdropEl","closeByBackdropClick","closeOnEscape","swipeToClose","swipeHandler","push","containerEl","instance"];let l=b(n,s);let{$$slots:i={},$$scope:t}=n;E('svelteProps'),E('lec');const c=g(v,n);let a;let{classes:r=""}=n;let{tabletFullscreen:d}=n;let{opened:u}=n;let{animate:w}=n;let{backdrop:C}=n;let{backdropEl:k}=n;let{closeByBackdropClick:f}=n;let{closeOnEscape:m}=n;let{swipeToClose:j=!1}=n;let{swipeHandler:F}=n;let{push:q}=n;let{containerEl:M}=n;let x;let P;const D={isOpened:u,isClosing:!1};function instance(){return P}function onSwipeStart(e){c('popupSwipeStart',[e])}function onSwipeMove(e){c('popupSwipeMove',[e])}function onSwipeEnd(e){c('popupSwipeEnd',[e])}function onSwipeClose(e){c('popupSwipeClose',[e])}function onOpen(e){Object.assign(D,{isOpened:!0,isClosing:!1}),c('popupOpen',[e]),o(4,u=!0)}function onOpened(e){c('popupOpened',[e])}function onClose(e){Object.assign(D,{isOpened:!1,isClosing:!0}),c('popupClose',[e])}function onClosed(e){Object.assign(D,{isClosing:!1}),c('popupClosed',[e]),o(4,u=!1)}let I=!1;function watchOpened(e){I?P&&(e?P.open():P.close()):I=!0}function div_binding(e){$[e?'unshift':'push']((()=>{x=e,o(1,x)}))}return h((()=>{const e={el:x,on:{swipeStart:onSwipeStart,swipeMove:onSwipeMove,swipeEnd:onSwipeEnd,swipeClose:onSwipeClose,open:onOpen,opened:onOpened,close:onClose,closed:onClosed}};void 0!==f&&(e.closeByBackdropClick=f),void 0!==m&&(e.closeOnEscape=m),void 0!==w&&(e.animate=w),void 0!==C&&(e.backdrop=C),void 0!==k&&(e.backdropEl=k),void 0!==j&&(e.swipeToClose=j),void 0!==F&&(e.swipeHandler=F),void 0!==M&&(e.containerEl=M),B((()=>{o(2,P=y.f7.popup.create(e)),u&&P.open(!1)}))})),O((()=>{P&&P.destroy(),o(2,P=null)})),e.$$set=e=>{o(35,n=p(p({},n),S(e))),o(3,l=b(n,s)),'classes'in e&&o(5,r=e.classes),'tabletFullscreen'in e&&o(6,d=e.tabletFullscreen),'opened'in e&&o(4,u=e.opened),'animate'in e&&o(7,w=e.animate),'backdrop'in e&&o(8,C=e.backdrop),'backdropEl'in e&&o(9,k=e.backdropEl),'closeByBackdropClick'in e&&o(10,f=e.closeByBackdropClick),'closeOnEscape'in e&&o(11,m=e.closeOnEscape),'swipeToClose'in e&&o(12,j=e.swipeToClose),'swipeHandler'in e&&o(13,F=e.swipeHandler),'push'in e&&o(14,q=e.push),'containerEl'in e&&o(15,M=e.containerEl),'$$scope'in e&&o(17,t=e.$$scope)},e.$$.update=()=>{o(0,a=H(r,'popup',{'popup-tablet-fullscreen':d,'popup-push':q},T(D),_(n))),16&e.$$.dirty[0]&&watchOpened(u)},n=S(n),[a,x,P,l,u,r,d,w,C,k,f,m,j,F,q,M,instance,t,i,div_binding]}class Popup extends e{constructor(e){super(),n(this,e,instance_1,create_fragment,o,{classes:5,tabletFullscreen:6,opened:4,animate:7,backdrop:8,backdropEl:9,closeByBackdropClick:10,closeOnEscape:11,swipeToClose:12,swipeHandler:13,push:14,containerEl:15,instance:16},null,[-1,-1])}get instance(){return this.$$.ctx[16]}}export{Popup};
