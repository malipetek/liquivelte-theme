import{SvelteComponent as e,init as l,safe_not_equal as s,assign as r,element as t,claim_element as c,children as a,detach as n,set_attributes as i,insert_hydration as o,get_spread_update as h,noop as p,compute_rest_props as f,getContext as d,exclude_internal_props as _,attr as u,append_hydration as P,space as y,claim_space as E,svg_element as m,claim_svg_element as v}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{restProps as A,useTheme as N,classNames as S,colorClasses as k}from'./framework7-liquivelte-hs52198d16.liquivelte.js';function create_else_block(e){let l;return{c(){l=t("span"),this.h()},l(e){l=c(e,"SPAN",{class:!0}),a(l).forEach(n),this.h()},h(){u(l,"class","preloader-inner")},m(e,s){o(e,l,s)},d(e){e&&n(l)}}}function create_if_block_2(e){let l;let s;return{c(){l=t("span"),s=t("span"),this.h()},l(e){l=c(e,"SPAN",{class:!0});var r=a(l);s=c(r,"SPAN",{class:!0}),a(s).forEach(n),r.forEach(n),this.h()},h(){u(s,"class","preloader-inner-circle"),u(l,"class","preloader-inner")},m(e,r){o(e,l,r),P(l,s)},d(e){e&&n(l)}}}function create_if_block_1(e){let l;let s;let r;let i;let h;let p;let f;let d;let _;let m;let v;let A;let N;let S;let k;let x;return{c(){l=t("span"),s=t("span"),r=y(),i=t("span"),h=y(),p=t("span"),f=y(),d=t("span"),_=y(),m=t("span"),v=y(),A=t("span"),N=y(),S=t("span"),k=y(),x=t("span"),this.h()},l(e){l=c(e,"SPAN",{class:!0});var t=a(l);s=c(t,"SPAN",{class:!0}),a(s).forEach(n),r=E(t),i=c(t,"SPAN",{class:!0}),a(i).forEach(n),h=E(t),p=c(t,"SPAN",{class:!0}),a(p).forEach(n),f=E(t),d=c(t,"SPAN",{class:!0}),a(d).forEach(n),_=E(t),m=c(t,"SPAN",{class:!0}),a(m).forEach(n),v=E(t),A=c(t,"SPAN",{class:!0}),a(A).forEach(n),N=E(t),S=c(t,"SPAN",{class:!0}),a(S).forEach(n),k=E(t),x=c(t,"SPAN",{class:!0}),a(x).forEach(n),t.forEach(n),this.h()},h(){u(s,"class","preloader-inner-line"),u(i,"class","preloader-inner-line"),u(p,"class","preloader-inner-line"),u(d,"class","preloader-inner-line"),u(m,"class","preloader-inner-line"),u(A,"class","preloader-inner-line"),u(S,"class","preloader-inner-line"),u(x,"class","preloader-inner-line"),u(l,"class","preloader-inner")},m(e,t){o(e,l,t),P(l,s),P(l,r),P(l,i),P(l,h),P(l,p),P(l,f),P(l,d),P(l,_),P(l,m),P(l,v),P(l,A),P(l,N),P(l,S),P(l,k),P(l,x)},d(e){e&&n(l)}}}function create_if_block(e){let l;let s;let r;return{c(){l=t("span"),s=m("svg"),r=m("circle"),this.h()},l(e){l=c(e,"SPAN",{class:!0});var t=a(l);s=v(t,"svg",{viewBox:!0});var i=a(s);r=v(i,"circle",{cx:!0,cy:!0,r:!0}),a(r).forEach(n),i.forEach(n),t.forEach(n),this.h()},h(){u(r,"cx","18"),u(r,"cy","18"),u(r,"r","16"),u(s,"viewBox","0 0 36 36"),u(l,"class","preloader-inner")},m(e,t){o(e,l,t),P(l,s),P(s,r)},d(e){e&&n(l)}}}function create_fragment(e){let l;function select_block_type(e,l){return e[0]&&e[0].md?create_if_block:e[0]&&e[0].ios?create_if_block_1:e[0]&&e[0].aurora?create_if_block_2:create_else_block}let s=select_block_type(e);let f=s(e);let d=[{style:e[1]},{class:e[2]},A(e[3])];let _={};for(let e=0;e<d.length;e+=1)_=r(_,d[e]);return{c(){l=t("span"),f.c(),this.h()},l(e){l=c(e,"SPAN",{style:!0,class:!0});var s=a(l);f.l(s),s.forEach(n),this.h()},h(){i(l,_)},m(e,s){o(e,l,s),f.m(l,null)},p(e,[r]){s!==(s=select_block_type(e))&&(f.d(1),f=s(e),f&&(f.c(),f.m(l,null))),i(l,_=h(d,[2&r&&{style:e[1]},{class:e[2]},8&r&&A(e[3])]))},i:p,o:p,d(e){e&&n(l),f.d()}}}function instance(e,l,s){let t;let c;const a=["style","classes","size"];let n=f(l,a);d('svelteProps'),d('lec');let{style:i}=l;let o;let{classes:h=""}=l;let{size:p}=l;let u=N((e=>{s(0,u=e)}));return e.$$set=e=>{s(11,l=r(r({},l),_(e))),s(3,n=f(l,a)),'style'in e&&s(5,i=e.style),'classes'in e&&s(4,h=e.classes),'size'in e&&s(6,p=e.size)},e.$$.update=()=>{64&e.$$.dirty&&s(7,t=p&&'string'==typeof p&&p.indexOf('px')>=0?p.replace('px',''):p),160&e.$$.dirty&&s(1,c=((i||'')+(t?`;width: ${t}px; height: ${t}px; --f7-preloader-size: ${t}px`:'')).replace(';;',';')),s(4,h=S(h,'preloader',k(l)))},l=_(l),[u,c,o,n,h,i,p,t]}class Preloader extends e{constructor(e){super(),l(this,e,instance,create_fragment,s,{style:5,classes:4,size:6})}}export{Preloader};
