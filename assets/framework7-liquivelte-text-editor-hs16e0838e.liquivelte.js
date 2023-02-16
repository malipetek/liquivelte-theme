import{SvelteComponent as t,init as e,safe_not_equal as o,create_slot as n,assign as l,element as s,space as i,claim_element as r,children as c,claim_space as a,detach as d,attr as u,set_attributes as p,insert_hydration as x,append_hydration as m,update_slot_base as v,get_all_dirty_from_scope as b,get_slot_changes as f,get_spread_update as h,transition_in as g,transition_out as E,compute_rest_props as $,getContext as k,createEventDispatcher as C,onMount as O,onDestroy as T,exclude_internal_props as P,binding_callbacks as B}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{restProps as U,createEmitter as y,noUndefinedProps as F,f7ready as I,app as _,classNames as z,colorClasses as K}from'./framework7-liquivelte-hs52198d16.liquivelte.js';const get_root_slot_changes=t=>({textEditor:4&t[0]});const get_root_slot_context=t=>({textEditor:t[2]});const get_root_end_slot_changes=t=>({textEditor:4&t[0]});const get_root_end_slot_context=t=>({textEditor:t[2]});const get_default_slot_changes=t=>({textEditor:4&t[0]});const get_default_slot_context=t=>({textEditor:t[2]});const get_root_start_slot_changes=t=>({textEditor:4&t[0]});const get_root_start_slot_context=t=>({textEditor:t[2]});function create_fragment(t){let e;let o;let $;let k;let C;let O;const T=t[17]["root-start"];const P=n(T,t,t[16],get_root_start_slot_context);const B=t[17].default;const y=n(B,t,t[16],get_default_slot_context);const F=t[17]["root-end"];const I=n(F,t,t[16],get_root_end_slot_context);const _=t[17].root;const z=n(_,t,t[16],get_root_slot_context);let K=[{class:t[0]},U(t[3])];let V={};for(let t=0;t<K.length;t+=1)V=l(V,K[t]);return{c(){e=s("div"),P&&P.c(),o=i(),$=s("div"),y&&y.c(),k=i(),I&&I.c(),C=i(),z&&z.c(),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=c(e);P&&P.l(n),o=a(n),$=r(n,"DIV",{class:!0,contenteditable:!0});var l=c($);y&&y.l(l),l.forEach(d),k=a(n),I&&I.l(n),C=a(n),z&&z.l(n),n.forEach(d),this.h()},h(){u($,"class","text-editor-content"),u($,"contenteditable",""),p(e,V)},m(n,l){x(n,e,l),P&&P.m(e,null),m(e,o),m(e,$),y&&y.m($,null),m(e,k),I&&I.m(e,null),m(e,C),z&&z.m(e,null),t[18](e),O=!0},p(t,o){P&&P.p&&(!O||65540&o[0])&&v(P,T,t,t[16],O?f(T,t[16],o,get_root_start_slot_changes):b(t[16]),get_root_start_slot_context),y&&y.p&&(!O||65540&o[0])&&v(y,B,t,t[16],O?f(B,t[16],o,get_default_slot_changes):b(t[16]),get_default_slot_context),I&&I.p&&(!O||65540&o[0])&&v(I,F,t,t[16],O?f(F,t[16],o,get_root_end_slot_changes):b(t[16]),get_root_end_slot_context),z&&z.p&&(!O||65540&o[0])&&v(z,_,t,t[16],O?f(_,t[16],o,get_root_slot_changes):b(t[16]),get_root_slot_context),p(e,V=h(K,[(!O||1&o[0])&&{class:t[0]},8&o[0]&&U(t[3])]))},i(t){O||(g(P,t),g(y,t),g(I,t),g(z,t),O=!0)},o(t){E(P,t),E(y,t),E(I,t),E(z,t),O=!1},d(o){o&&d(e),P&&P.d(o),y&&y.d(o),I&&I.d(o),z&&z.d(o),t[18](null)}}}function instance_1(t,e,o){const n=["classes","mode","value","buttons","customButtons","dividers","imageUrlText","linkUrlText","placeholder","clearFormattingOnPaste","resizable","instance"];let s=$(e,n);let{$$slots:i={},$$scope:r}=e;k('svelteProps'),k('lec');const c=y(C,e);let a;let{classes:d=""}=e;let{mode:u}=e;let{value:p}=e;let{buttons:x}=e;let{customButtons:m}=e;let{dividers:v}=e;let{imageUrlText:b}=e;let{linkUrlText:f}=e;let{placeholder:h}=e;let{clearFormattingOnPaste:g}=e;let{resizable:E=!1}=e;let U;let V;function instance(){return V}function watchValue(t){V&&V.setValue(t)}function onChange(t,e){c('textEditorChange',[e])}function onInput(t,e){c('textEditorInput',[e])}function onFocus(){c('textEditorFocus')}function onBlur(){c('textEditorBlur')}function onButtonClick(t,e){c('textEditorButtonClick',[e])}function onKeyboardOpen(){c('textEditorKeyboardOpen')}function onKeyboardClose(){c('textEditorKeyboardClose')}function onPopoverOpen(){c('textEditorPopoverOpen')}function onPopoverClose(){c('textEditorPopoverClose')}const onInsertLink=(t,e)=>{c('textEditorInsertLink',[e])};const onInsertImage=(t,e)=>{c('textEditorInsertImage',[e])};function div1_binding(t){B[t?'unshift':'push']((()=>{U=t,o(1,U)}))}return O((()=>{const t=F({el:U,mode:u,value:p,buttons:x,customButtons:m,dividers:v,imageUrlText:b,linkUrlText:f,placeholder:h,clearFormattingOnPaste:g,on:{change:onChange,input:onInput,focus:onFocus,blur:onBlur,buttonClick:onButtonClick,keyboardOpen:onKeyboardOpen,keyboardClose:onKeyboardClose,popoverOpen:onPopoverOpen,popoverClose:onPopoverClose,insertLink:onInsertLink,insertImage:onInsertImage}});I((()=>{o(2,V=_.f7.textEditor.create(t))}))})),T((()=>{V&&V.destroy&&(V.destroy(),o(2,V=null))})),t.$$set=t=>{o(35,e=l(l({},e),P(t))),o(3,s=$(e,n)),'classes'in t&&o(4,d=t.classes),'mode'in t&&o(5,u=t.mode),'value'in t&&o(6,p=t.value),'buttons'in t&&o(7,x=t.buttons),'customButtons'in t&&o(8,m=t.customButtons),'dividers'in t&&o(9,v=t.dividers),'imageUrlText'in t&&o(10,b=t.imageUrlText),'linkUrlText'in t&&o(11,f=t.linkUrlText),'placeholder'in t&&o(12,h=t.placeholder),'clearFormattingOnPaste'in t&&o(13,g=t.clearFormattingOnPaste),'resizable'in t&&o(14,E=t.resizable),'$$scope'in t&&o(16,r=t.$$scope)},t.$$.update=()=>{o(0,a=z(d,'text-editor',E&&'text-editor-resizable',K(e))),64&t.$$.dirty[0]&&watchValue(p)},e=P(e),[a,U,V,s,d,u,p,x,m,v,b,f,h,g,E,instance,r,i,div1_binding]}class Text_editor extends t{constructor(t){super(),e(this,t,instance_1,create_fragment,o,{classes:4,mode:5,value:6,buttons:7,customButtons:8,dividers:9,imageUrlText:10,linkUrlText:11,placeholder:12,clearFormattingOnPaste:13,resizable:14,instance:15},null,[-1,-1])}get instance(){return this.$$.ctx[15]}}export{Text_editor};