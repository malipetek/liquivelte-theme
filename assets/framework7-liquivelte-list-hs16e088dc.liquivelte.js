import{SvelteComponent as e,init as t,safe_not_equal as l,empty as n,insert_hydration as s,group_outros as o,transition_out as i,check_outros as a,transition_in as r,detach as c,compute_rest_props as u,compute_slots as b,getContext as m,createEventDispatcher as d,onMount as f,onDestroy as p,assign as v,exclude_internal_props as _,binding_callbacks as L,create_slot as I,element as h,space as H,claim_element as S,children as k,claim_space as g,set_attributes as w,append_hydration as B,update_slot_base as M,get_all_dirty_from_scope as E,get_slot_changes as x,get_spread_update as A,listen as $}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{createEmitter as C,setReactiveContext as D,useTab as O,f7ready as y,app as P,extend as T,classNames as q,colorClasses as j,restProps as U}from'./framework7-liquivelte-hs52198d16.liquivelte.js';const get_after_list_slot_changes_1=e=>({});const get_after_list_slot_context_1=e=>({});const get_list_slot_changes_1=e=>({});const get_list_slot_context_1=e=>({});const get_before_list_slot_changes_1=e=>({});const get_before_list_slot_context_1=e=>({});const get_after_list_slot_changes=e=>({});const get_after_list_slot_context=e=>({});const get_list_slot_changes=e=>({});const get_list_slot_context=e=>({});const get_before_list_slot_changes=e=>({});const get_before_list_slot_context=e=>({});function create_else_block_1(e){let t;let l;let n;let u;let b;let m;let d;let f;const p=e[44]["before-list"];const _=I(p,e,e[43],get_before_list_slot_context_1);const L=[create_if_block_2,create_else_block_2];const $=[];function select_block_type_2(e,t){return e[6]&&e[1]?0:1}n=select_block_type_2(e),u=$[n]=L[n](e);const C=e[44]["after-list"];const D=I(C,e,e[43],get_after_list_slot_context_1);let O=[{class:m="list "+e[0]+" "+e[4]},{"data-sortable-move-elements":d=void 0!==e[2]?e[2].toString():void 0},U(e[8])];let y={};for(let e=0;e<O.length;e+=1)y=v(y,O[e]);return{c(){t=h("div"),_&&_.c(),l=H(),u.c(),b=H(),D&&D.c(),this.h()},l(e){t=S(e,"DIV",{class:!0,"data-sortable-move-elements":!0});var n=k(t);_&&_.l(n),l=g(n),u.l(n),b=g(n),D&&D.l(n),n.forEach(c),this.h()},h(){w(t,y)},m(o,i){s(o,t,i),_&&_.m(t,null),B(t,l),$[n].m(t,null),B(t,b),D&&D.m(t,null),e[46](t),f=!0},p(e,l){_&&_.p&&(!f||4096&l[1])&&M(_,p,e,e[43],f?x(p,e[43],l,get_before_list_slot_changes_1):E(e[43]),get_before_list_slot_context_1);let s=n;n=select_block_type_2(e),n===s?$[n].p(e,l):(o(),i($[s],1,1,(()=>{$[s]=null})),a(),u=$[n],u?u.p(e,l):(u=$[n]=L[n](e),u.c()),r(u,1),u.m(t,b)),D&&D.p&&(!f||4096&l[1])&&M(D,C,e,e[43],f?x(C,e[43],l,get_after_list_slot_changes_1):E(e[43]),get_after_list_slot_context_1),w(t,y=A(O,[(!f||17&l[0]&&m!==(m="list "+e[0]+" "+e[4]))&&{class:m},(!f||4&l[0]&&d!==(d=void 0!==e[2]?e[2].toString():void 0))&&{"data-sortable-move-elements":d},256&l[0]&&U(e[8])]))},i(e){f||(r(_,e),r(u),r(D,e),f=!0)},o(e){i(_,e),i(u),i(D,e),f=!1},d(l){l&&c(t),_&&_.d(l),$[n].d(),D&&D.d(l),e[46](null)}}}function create_if_block(e){let t;let l;let n;let u;let b;let m;let d;let f;let p;let _;const L=e[44]["before-list"];const C=I(L,e,e[43],get_before_list_slot_context);const D=[create_if_block_1,create_else_block];const O=[];function select_block_type_1(e,t){return e[6]&&e[1]?0:1}n=select_block_type_1(e),u=O[n]=D[n](e);const y=e[44]["after-list"];const P=I(y,e,e[43],get_after_list_slot_context);let T=[{class:m="list "+e[0]+" "+e[4]},{"data-sortable-move-elements":d=void 0!==e[2]?e[2].toString():void 0},U(e[8])];let q={};for(let e=0;e<T.length;e+=1)q=v(q,T[e]);return{c(){t=h("form"),C&&C.c(),l=H(),u.c(),b=H(),P&&P.c(),this.h()},l(e){t=S(e,"FORM",{class:!0,"data-sortable-move-elements":!0});var n=k(t);C&&C.l(n),l=g(n),u.l(n),b=g(n),P&&P.l(n),n.forEach(c),this.h()},h(){w(t,q)},m(o,i){s(o,t,i),C&&C.m(t,null),B(t,l),O[n].m(t,null),B(t,b),P&&P.m(t,null),e[45](t),f=!0,p||(_=$(t,"submit",e[7]),p=!0)},p(e,l){C&&C.p&&(!f||4096&l[1])&&M(C,L,e,e[43],f?x(L,e[43],l,get_before_list_slot_changes):E(e[43]),get_before_list_slot_context);let s=n;n=select_block_type_1(e),n===s?O[n].p(e,l):(o(),i(O[s],1,1,(()=>{O[s]=null})),a(),u=O[n],u?u.p(e,l):(u=O[n]=D[n](e),u.c()),r(u,1),u.m(t,b)),P&&P.p&&(!f||4096&l[1])&&M(P,y,e,e[43],f?x(y,e[43],l,get_after_list_slot_changes):E(e[43]),get_after_list_slot_context),w(t,q=A(T,[(!f||17&l[0]&&m!==(m="list "+e[0]+" "+e[4]))&&{class:m},(!f||4&l[0]&&d!==(d=void 0!==e[2]?e[2].toString():void 0))&&{"data-sortable-move-elements":d},256&l[0]&&U(e[8])]))},i(e){f||(r(C,e),r(u),r(P,e),f=!0)},o(e){i(C,e),i(u),i(P,e),f=!1},d(l){l&&c(t),C&&C.d(l),O[n].d(),P&&P.d(l),e[45](null),p=!1,_()}}}function create_else_block_2(e){let t;const l=e[44].default;const n=I(l,e,e[43],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,l){n&&n.m(e,l),t=!0},p(e,s){n&&n.p&&(!t||4096&s[1])&&M(n,l,e,e[43],t?x(l,e[43],s,null):E(e[43]),null)},i(e){t||(r(n,e),t=!0)},o(e){i(n,e),t=!1},d(e){n&&n.d(e)}}}function create_if_block_2(e){let t;let l;let n;const o=e[44].list;const a=I(o,e,e[43],get_list_slot_context_1);const u=e[44].default;const b=I(u,e,e[43],null);return{c(){t=h("ul"),a&&a.c(),l=H(),b&&b.c()},l(e){t=S(e,"UL",{});var n=k(t);a&&a.l(n),l=g(n),b&&b.l(n),n.forEach(c)},m(e,o){s(e,t,o),a&&a.m(t,null),B(t,l),b&&b.m(t,null),n=!0},p(e,t){a&&a.p&&(!n||4096&t[1])&&M(a,o,e,e[43],n?x(o,e[43],t,get_list_slot_changes_1):E(e[43]),get_list_slot_context_1),b&&b.p&&(!n||4096&t[1])&&M(b,u,e,e[43],n?x(u,e[43],t,null):E(e[43]),null)},i(e){n||(r(a,e),r(b,e),n=!0)},o(e){i(a,e),i(b,e),n=!1},d(e){e&&c(t),a&&a.d(e),b&&b.d(e)}}}function create_else_block(e){let t;const l=e[44].default;const n=I(l,e,e[43],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,l){n&&n.m(e,l),t=!0},p(e,s){n&&n.p&&(!t||4096&s[1])&&M(n,l,e,e[43],t?x(l,e[43],s,null):E(e[43]),null)},i(e){t||(r(n,e),t=!0)},o(e){i(n,e),t=!1},d(e){n&&n.d(e)}}}function create_if_block_1(e){let t;let l;let n;const o=e[44].list;const a=I(o,e,e[43],get_list_slot_context);const u=e[44].default;const b=I(u,e,e[43],null);return{c(){t=h("ul"),a&&a.c(),l=H(),b&&b.c()},l(e){t=S(e,"UL",{});var n=k(t);a&&a.l(n),l=g(n),b&&b.l(n),n.forEach(c)},m(e,o){s(e,t,o),a&&a.m(t,null),B(t,l),b&&b.m(t,null),n=!0},p(e,t){a&&a.p&&(!n||4096&t[1])&&M(a,o,e,e[43],n?x(o,e[43],t,get_list_slot_changes):E(e[43]),get_list_slot_context),b&&b.p&&(!n||4096&t[1])&&M(b,u,e,e[43],n?x(u,e[43],t,null):E(e[43]),null)},i(e){n||(r(a,e),r(b,e),n=!0)},o(e){i(a,e),i(b,e),n=!1},d(e){e&&c(t),a&&a.d(e),b&&b.d(e)}}}function create_fragment(e){let t;let l;let u;let b;const m=[create_if_block,create_else_block_1];const d=[];function select_block_type(e,t){return e[3]?0:1}return t=select_block_type(e),l=d[t]=m[t](e),{c(){l.c(),u=n()},l(e){l.l(e),u=n()},m(e,l){d[t].m(e,l),s(e,u,l),b=!0},p(e,n){let s=t;t=select_block_type(e),t===s?d[t].p(e,n):(o(),i(d[s],1,1,(()=>{d[s]=null})),a(),l=d[t],l?l.p(e,n):(l=d[t]=m[t](e),l.c()),r(l,1),l.m(u.parentNode,u))},i(e){b||(r(l),b=!0)},o(e){i(l),b=!1},d(e){d[t].d(e),e&&c(u)}}}function instance(e,t,l){let n;const s=["classes","ul","inset","xsmallInset","smallInset","mediumInset","largeInset","xlargeInset","mediaList","sortable","sortableTapHold","sortableEnabled","sortableMoveElements","sortableOpposite","accordionList","accordionOpposite","contactsList","simpleList","linksList","menuList","noHairlines","noHairlinesBetween","noHairlinesMd","noHairlinesBetweenMd","noHairlinesIos","noHairlinesBetweenIos","noHairlinesAurora","noHairlinesBetweenAurora","noChevron","chevronCenter","tab","tabActive","form","formStoreData","inlineLabels","virtualList","virtualListParams","virtualListInstance"];let o=u(t,s);let{$$slots:i={},$$scope:a}=t;const r=b(i);m('svelteProps'),m('lec');const c=C(d,t);let I;let{classes:h=""}=t;let{ul:H=!0}=t;let{inset:S=!1}=t;let{xsmallInset:k=!1}=t;let{smallInset:g=!1}=t;let{mediumInset:w=!1}=t;let{largeInset:B=!1}=t;let{xlargeInset:M=!1}=t;let{mediaList:E=!1}=t;let{sortable:x=!1}=t;let{sortableTapHold:A=!1}=t;let{sortableEnabled:$=!1}=t;let{sortableMoveElements:U}=t;let{sortableOpposite:F=!1}=t;let{accordionList:N=!1}=t;let{accordionOpposite:R=!1}=t;let{contactsList:V=!1}=t;let{simpleList:z=!1}=t;let{linksList:G=!1}=t;let{menuList:J=!1}=t;let{noHairlines:K=!1}=t;let{noHairlinesBetween:Q=!1}=t;let{noHairlinesMd:W=!1}=t;let{noHairlinesBetweenMd:X=!1}=t;let{noHairlinesIos:Y=!1}=t;let{noHairlinesBetweenIos:Z=!1}=t;let{noHairlinesAurora:ee=!1}=t;let{noHairlinesBetweenAurora:te=!1}=t;let{noChevron:le=!1}=t;let{chevronCenter:ne=!1}=t;let{tab:se=!1}=t;let{tabActive:oe=!1}=t;let{form:ie=!1}=t;let{formStoreData:ae=!1}=t;let{inlineLabels:re=!1}=t;let{virtualList:ce=!1}=t;let{virtualListParams:ue}=t;let be;let me;function virtualListInstance(){return me}function onSubmit(e){c('submit',[e])}function onSortableEnable(e){e===be&&c('sortableEnable')}function onSortableDisable(e){e===be&&c('sortableDisable')}function onSortableSort(e,t,l){l===be&&c('sortableSort',[t])}function onSortableMove(e,t){t===be&&c('sortableMove',[e,t])}function form_1_binding(e){L[e?'unshift':'push']((()=>{be=e,l(5,be)}))}function div_binding(e){L[e?'unshift':'push']((()=>{be=e,l(5,be)}))}return D('ListContext',(()=>({listIsMedia:E,listIsSimple:z,listIsSortable:x,listIsSortableOpposite:F}))),O((()=>be),c),f((()=>{y((()=>{if(P.f7.on('sortableEnable',onSortableEnable),P.f7.on('sortableDisable',onSortableDisable),P.f7.on('sortableSort',onSortableSort),P.f7.on('sortableMove',onSortableMove),!ce)return;const e=ue||{};(e.renderItem||e.renderExternal)&&(me=P.f7.virtualList.create(T({el:be,on:{itemBeforeInsert(e,t){const l=this;c('virtualItemBeforeInsert',[l,e,t])},beforeClear(e){const t=this;c('virtualBeforeClear',[t,e])},itemsBeforeInsert(e){const t=this;c('virtualItemsBeforeInsert',[t,e])},itemsAfterInsert(e){const t=this;c('virtualItemsAfterInsert',[t,e])}}},e)))}))})),p((()=>{P.f7&&(P.f7.off('sortableEnable',onSortableEnable),P.f7.off('sortableDisable',onSortableDisable),P.f7.off('sortableSort',onSortableSort),P.f7.off('sortableMove',onSortableMove),me&&me.destroy&&(me.destroy(),me=null))})),e.$$set=e=>{l(56,t=v(v({},t),_(e))),l(8,o=u(t,s)),'classes'in e&&l(0,h=e.classes),'ul'in e&&l(1,H=e.ul),'inset'in e&&l(9,S=e.inset),'xsmallInset'in e&&l(10,k=e.xsmallInset),'smallInset'in e&&l(11,g=e.smallInset),'mediumInset'in e&&l(12,w=e.mediumInset),'largeInset'in e&&l(13,B=e.largeInset),'xlargeInset'in e&&l(14,M=e.xlargeInset),'mediaList'in e&&l(15,E=e.mediaList),'sortable'in e&&l(16,x=e.sortable),'sortableTapHold'in e&&l(17,A=e.sortableTapHold),'sortableEnabled'in e&&l(18,$=e.sortableEnabled),'sortableMoveElements'in e&&l(2,U=e.sortableMoveElements),'sortableOpposite'in e&&l(19,F=e.sortableOpposite),'accordionList'in e&&l(20,N=e.accordionList),'accordionOpposite'in e&&l(21,R=e.accordionOpposite),'contactsList'in e&&l(22,V=e.contactsList),'simpleList'in e&&l(23,z=e.simpleList),'linksList'in e&&l(24,G=e.linksList),'menuList'in e&&l(25,J=e.menuList),'noHairlines'in e&&l(26,K=e.noHairlines),'noHairlinesBetween'in e&&l(27,Q=e.noHairlinesBetween),'noHairlinesMd'in e&&l(28,W=e.noHairlinesMd),'noHairlinesBetweenMd'in e&&l(29,X=e.noHairlinesBetweenMd),'noHairlinesIos'in e&&l(30,Y=e.noHairlinesIos),'noHairlinesBetweenIos'in e&&l(31,Z=e.noHairlinesBetweenIos),'noHairlinesAurora'in e&&l(32,ee=e.noHairlinesAurora),'noHairlinesBetweenAurora'in e&&l(33,te=e.noHairlinesBetweenAurora),'noChevron'in e&&l(34,le=e.noChevron),'chevronCenter'in e&&l(35,ne=e.chevronCenter),'tab'in e&&l(36,se=e.tab),'tabActive'in e&&l(37,oe=e.tabActive),'form'in e&&l(3,ie=e.form),'formStoreData'in e&&l(38,ae=e.formStoreData),'inlineLabels'in e&&l(39,re=e.inlineLabels),'virtualList'in e&&l(40,ce=e.virtualList),'virtualListParams'in e&&l(41,ue=e.virtualListParams),'$$scope'in e&&l(43,a=e.$$scope)},e.$$.update=()=>{l(4,I=q(h,{inset:S,'xsmall-inset':k,'small-inset':g,'medium-inset':w,'large-inset':B,'xlarge-inset':M,'media-list':E,'simple-list':z,'links-list':G,'menu-list':J,sortable:x,'sortable-tap-hold':A,'sortable-enabled':$,'sortable-opposite':F,'accordion-list':N,'accordion-opposite':R,'contacts-list':V,'virtual-list':ce,tab:se,'tab-active':oe,'no-hairlines':K,'no-hairlines-md':W,'no-hairlines-ios':Y,'no-hairlines-aurora':ee,'no-hairlines-between':Q,'no-hairlines-between-md':X,'no-hairlines-between-ios':Z,'no-hairlines-between-aurora':te,'form-store-data':ae,'inline-labels':re,'no-chevron':le,'chevron-center':ne},j(t)))},l(6,n=r.default||r.list),t=_(t),[h,H,U,ie,I,be,n,onSubmit,o,S,k,g,w,B,M,E,x,A,$,F,N,R,V,z,G,J,K,Q,W,X,Y,Z,ee,te,le,ne,se,oe,ae,re,ce,ue,virtualListInstance,a,i,form_1_binding,div_binding]}class List extends e{constructor(e){super(),t(this,e,instance,create_fragment,l,{classes:0,ul:1,inset:9,xsmallInset:10,smallInset:11,mediumInset:12,largeInset:13,xlargeInset:14,mediaList:15,sortable:16,sortableTapHold:17,sortableEnabled:18,sortableMoveElements:2,sortableOpposite:19,accordionList:20,accordionOpposite:21,contactsList:22,simpleList:23,linksList:24,menuList:25,noHairlines:26,noHairlinesBetween:27,noHairlinesMd:28,noHairlinesBetweenMd:29,noHairlinesIos:30,noHairlinesBetweenIos:31,noHairlinesAurora:32,noHairlinesBetweenAurora:33,noChevron:34,chevronCenter:35,tab:36,tabActive:37,form:3,formStoreData:38,inlineLabels:39,virtualList:40,virtualListParams:41,virtualListInstance:42},null,[-1,-1])}get virtualListInstance(){return this.$$.ctx[42]}}export{List};