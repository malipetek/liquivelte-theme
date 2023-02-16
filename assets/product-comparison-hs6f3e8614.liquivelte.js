import{commonjsGlobal as t,internal as e,SvelteComponent as a,init as l,safe_not_equal as s,element as n,text as r,space as i,claim_element as c,children as o,claim_text as u,detach as _,claim_space as d,attr as h,insert_hydration as v,append_hydration as p,set_data as g,transition_in as m,check_outros as f,transition_out as E,destroy_each as b,getContext as I,empty as k,group_outros as x,select_value as y,set_style as D,add_render_callback as V,create_bidirectional_transition as O,cubicInOut as A,fade as w,src_url_equal as N,select_option as L,listen as P}from'./liquivelte-svelte-hs27c0c7ec.liquivelte.js';import{cachedLiquid as S}from'./liquivelte-liquid-hs16e0894c.liquivelte.js';import{cartStore as j}from'./store.js-hse7c14f44.liquivelte.js';var T={};function get_each_context(t,e,a){const l=t.slice();l[7]=e[a],l[10]=a;const s={first:0===l[10],index:l[10]+1,index0:l[10],last:l[10]===l[0].blocks.length-1,rindex:l[0].blocks.length-l[10],rindex0:l[0].blocks.length-l[10]-1,length:l[0].blocks.length};return l[8]=s,l}function get_each_context_1(t,e,a){const l=t.slice();l[7]=e[a],l[10]=a;const s={first:0===l[10],index:l[10]+1,index0:l[10],last:l[10]===l[0].blocks.length-1,rindex:l[0].blocks.length-l[10],rindex0:l[0].blocks.length-l[10]-1,length:l[0].blocks.length};return l[8]=s,l}function get_each_context_2(t,e,a){const l=t.slice();l[7]=e[a],l[10]=a;const s={first:0===l[10],index:l[10]+1,index0:l[10],last:l[10]===l[0].blocks.length-1,rindex:l[0].blocks.length-l[10],rindex0:l[0].blocks.length-l[10]-1,length:l[0].blocks.length};return l[8]=s,l}function create_if_block_1(t){let e;let a;let l;return{c(){e=n("div"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0}),o(e).forEach(_),this.h()},h(){h(e,"class","backplate svelte-2hua15"),D(e,"background-color",t[7].settings.bg_color)},m(t,a){v(t,e,a),l=!0},p(a,s){t=a,(!l||1&s)&&D(e,"background-color",t[7].settings.bg_color)},i(t){l||(V((()=>{a||(a=O(e,w,{easing:A,duration:700},!0)),a.run(1)})),l=!0)},o(t){a||(a=O(e,w,{easing:A,duration:700},!1)),a.run(0),l=!1},d(t){t&&_(e),t&&a&&a.end()}}}function create_each_block_2(t){let e;let a;let l=t[1]==t[8].index&&create_if_block_1(t);return{c(){l&&l.c(),e=k()},l(t){l&&l.l(t),e=k()},m(t,s){l&&l.m(t,s),v(t,e,s),a=!0},p(t,a){t[1]==t[8].index?l?(l.p(t,a),3&a&&m(l,1)):(l=create_if_block_1(t),l.c(),m(l,1),l.m(e.parentNode,e)):l&&(x(),E(l,1,1,(()=>{l=null})),f())},i(t){a||(m(l),a=!0)},o(t){E(l),a=!1},d(t){l&&l.d(t),t&&_(e)}}}function create_if_block(t){let e;let a;let l;let s;let m;let f;let E;let I;let k;let x;let y;let S;let j;let T;let q=t[7].settings.product_1_param_1_value+"";let M;let C;let H;let B=t[7].settings.product_1_param_1_unit+"";let G;let X;let z;let F=t[7].settings.param_1+"";let J;let K;let Q;let R;let U;let W=t[7].settings.product_1_param_2_value+"";let Y;let Z;let $;let tt=t[7].settings.product_1_param_2_unit+"";let et;let at;let lt;let st=t[7].settings.param_2+"";let nt;let rt;let it;let ct;let ot;let ut=t[7].settings.product_1_param_3_value+"";let _t;let dt;let ht;let vt=t[7].settings.product_1_param_3_unit+"";let pt;let gt;let mt;let ft=t[7].settings.param_3+"";let Et;let bt;let It;let kt;let xt;let yt;let Dt;let Vt;let Ot;let At;let wt=t[7].settings.product_title_2+"";let Nt;let Lt;let Pt;let St;let jt;let Tt=t[7].settings.product_2_param_1_value+"";let qt;let Mt;let Ct;let Ht=t[7].settings.product_2_param_1_unit+"";let Bt;let Gt;let Xt;let zt=t[7].settings.param_1+"";let Ft;let Jt;let Kt;let Qt;let Rt;let Ut=t[7].settings.product_2_param_2_value+"";let Wt;let Yt;let Zt;let $t=t[7].settings.product_2_param_2_unit+"";let te;let ee;let ae;let le=t[7].settings.param_2+"";let se;let ne;let re;let ie;let ce;let oe=t[7].settings.product_2_param_3_value+"";let ue;let _e;let de;let he=t[7].settings.product_2_param_3_unit+"";let ve;let pe;let ge;let me=t[7].settings.param_3+"";let fe;let Ee;let be;let Ie;let ke;let xe;let ye=t[0].blocks;let De=[];for(let e=0;e<ye.length;e+=1)De[e]=create_each_block_1(get_each_context_1(t,ye,e));return{c(){e=n("div"),a=n("div"),l=n("div"),s=n("div"),m=n("img"),I=i(),k=n("div"),x=n("select");for(let t=0;t<De.length;t+=1)De[t].c();y=i(),S=n("div"),j=n("div"),T=n("span"),M=r(q),H=i(),G=r(B),X=i(),z=n("div"),J=r(F),K=i(),Q=n("div"),R=n("div"),U=n("span"),Y=r(W),$=i(),et=r(tt),at=i(),lt=n("div"),nt=r(st),rt=i(),it=n("div"),ct=n("div"),ot=n("span"),_t=r(ut),ht=i(),pt=r(vt),gt=i(),mt=n("div"),Et=r(ft),bt=i(),It=n("div"),kt=n("div"),xt=n("img"),Vt=i(),Ot=n("div"),At=n("div"),Nt=r(wt),Lt=i(),Pt=n("div"),St=n("div"),jt=n("span"),qt=r(Tt),Ct=i(),Bt=r(Ht),Gt=i(),Xt=n("div"),Ft=r(zt),Jt=i(),Kt=n("div"),Qt=n("div"),Rt=n("span"),Wt=r(Ut),Zt=i(),te=r($t),ee=i(),ae=n("div"),se=r(le),ne=i(),re=n("div"),ie=n("div"),ce=n("span"),ue=r(oe),de=i(),ve=r(he),pe=i(),ge=n("div"),fe=r(me),Ee=i(),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=o(e);a=c(n,"DIV",{class:!0});var r=o(a);l=c(r,"DIV",{class:!0});var i=o(l);s=c(i,"DIV",{class:!0,style:!0});var h=o(s);m=c(h,"IMG",{class:!0,loading:!0,src:!0,width:!0,height:!0}),h.forEach(_),I=d(i),k=c(i,"DIV",{class:!0});var v=o(k);x=c(v,"SELECT",{class:!0});var p=o(x);for(let t=0;t<De.length;t+=1)De[t].l(p);p.forEach(_),y=d(v),S=c(v,"DIV",{class:!0});var g=o(S);j=c(g,"DIV",{class:!0});var f=o(j);T=c(f,"SPAN",{class:!0});var E=o(T);M=u(E,q),E.forEach(_),H=d(f),G=u(f,B),f.forEach(_),X=d(g),z=c(g,"DIV",{class:!0});var b=o(z);J=u(b,F),b.forEach(_),g.forEach(_),K=d(v),Q=c(v,"DIV",{class:!0});var D=o(Q);R=c(D,"DIV",{class:!0});var V=o(R);U=c(V,"SPAN",{class:!0});var O=o(U);Y=u(O,W),O.forEach(_),$=d(V),et=u(V,tt),V.forEach(_),at=d(D),lt=c(D,"DIV",{class:!0});var A=o(lt);nt=u(A,st),A.forEach(_),D.forEach(_),rt=d(v),it=c(v,"DIV",{class:!0});var w=o(it);ct=c(w,"DIV",{class:!0});var N=o(ct);ot=c(N,"SPAN",{class:!0});var L=o(ot);_t=u(L,ut),L.forEach(_),ht=d(N),pt=u(N,vt),N.forEach(_),gt=d(w),mt=c(w,"DIV",{class:!0});var P=o(mt);Et=u(P,ft),P.forEach(_),w.forEach(_),v.forEach(_),i.forEach(_),bt=d(r),It=c(r,"DIV",{class:!0});var C=o(It);kt=c(C,"DIV",{class:!0,style:!0});var Z=o(kt);xt=c(Z,"IMG",{class:!0,loading:!0,src:!0,width:!0,height:!0}),Z.forEach(_),Vt=d(C),Ot=c(C,"DIV",{class:!0});var dt=o(Ot);At=c(dt,"DIV",{class:!0});var yt=o(At);Nt=u(yt,wt),yt.forEach(_),Lt=d(dt),Pt=c(dt,"DIV",{class:!0});var Dt=o(Pt);St=c(Dt,"DIV",{class:!0});var Mt=o(St);jt=c(Mt,"SPAN",{class:!0});var Yt=o(jt);qt=u(Yt,Tt),Yt.forEach(_),Ct=d(Mt),Bt=u(Mt,Ht),Mt.forEach(_),Gt=d(Dt),Xt=c(Dt,"DIV",{class:!0});var _e=o(Xt);Ft=u(_e,zt),_e.forEach(_),Dt.forEach(_),Jt=d(dt),Kt=c(dt,"DIV",{class:!0});var be=o(Kt);Qt=c(be,"DIV",{class:!0});var Ie=o(Qt);Rt=c(Ie,"SPAN",{class:!0});var ke=o(Rt);Wt=u(ke,Ut),ke.forEach(_),Zt=d(Ie),te=u(Ie,$t),Ie.forEach(_),ee=d(be),ae=c(be,"DIV",{class:!0});var xe=o(ae);se=u(xe,le),xe.forEach(_),be.forEach(_),ne=d(dt),re=c(dt,"DIV",{class:!0});var ye=o(re);ie=c(ye,"DIV",{class:!0});var Ve=o(ie);ce=c(Ve,"SPAN",{class:!0});var Oe=o(ce);ue=u(Oe,oe),Oe.forEach(_),de=d(Ve),ve=u(Ve,he),Ve.forEach(_),pe=d(ye),ge=c(ye,"DIV",{class:!0,"data-failed":!0});var Ae=o(ge);fe=u(Ae,me),Ae.forEach(_),ye.forEach(_),dt.forEach(_),C.forEach(_),r.forEach(_),Ee=d(n),n.forEach(_),this.h()},h(){h(m,"class"," svelte-2hua15"),h(m,"loading","eager"),N(m.src,f=t[2].img_url(t[7].settings.product_image_1,'300x'))||h(m,"src",f),h(m,"width",300),h(m,"height",E=t[2].divided_by(300,t[7].settings.product_image_1.aspect_ratio)),h(s,"class","product-image image-1 svelte-2hua15"),D(s,"--ratio",t[7].settings.product_image_1.aspect_ratio),h(x,"class","product-title svelte-2hua15"),void 0===t[1]&&V((()=>t[3].call(x))),h(T,"class","svelte-2hua15"),h(j,"class","param-values svelte-2hua15"),h(z,"class","param-name svelte-2hua15"),h(S,"class","param-container svelte-2hua15"),h(U,"class","svelte-2hua15"),h(R,"class","param-values svelte-2hua15"),h(lt,"class","param-name svelte-2hua15"),h(Q,"class","param-container svelte-2hua15"),h(ot,"class","svelte-2hua15"),h(ct,"class","param-values svelte-2hua15"),h(mt,"class","param-name svelte-2hua15"),h(it,"class","param-container svelte-2hua15"),h(k,"class","product-info svelte-2hua15"),h(l,"class","comparison-item svelte-2hua15"),h(xt,"class"," svelte-2hua15"),h(xt,"loading","eager"),N(xt.src,yt=t[2].img_url(t[7].settings.product_image_2,'300x'))||h(xt,"src",yt),h(xt,"width",300),h(xt,"height",Dt=t[2].divided_by(300,t[7].settings.product_image_2.aspect_ratio)),h(kt,"class","product-image image-2 svelte-2hua15"),D(kt,"--ratio",t[7].settings.product_image_1.aspect_ratio),h(At,"class","product-title svelte-2hua15"),h(jt,"class","svelte-2hua15"),h(St,"class","param-values svelte-2hua15"),h(Xt,"class","param-name svelte-2hua15"),h(Pt,"class","param-container svelte-2hua15"),h(Rt,"class","svelte-2hua15"),h(Qt,"class","param-values svelte-2hua15"),h(ae,"class","param-name svelte-2hua15"),h(Kt,"class","param-container svelte-2hua15"),h(ce,"class","svelte-2hua15"),h(ie,"class","param-values svelte-2hua15"),h(ge,"class","param-name svelte-2hua15"),h(ge,"data-failed","true"),h(re,"class","param-container svelte-2hua15"),h(Ot,"class","product-info svelte-2hua15"),h(It,"class","comparison-item svelte-2hua15"),h(a,"class","comparison svelte-2hua15"),h(e,"class","comparison-container svelte-2hua15")},m(n,r){v(n,e,r),p(e,a),p(a,l),p(l,s),p(s,m),p(l,I),p(l,k),p(k,x);for(let t=0;t<De.length;t+=1)De[t].m(x,null);L(x,t[1]),p(k,y),p(k,S),p(S,j),p(j,T),p(T,M),p(j,H),p(j,G),p(S,X),p(S,z),p(z,J),p(k,K),p(k,Q),p(Q,R),p(R,U),p(U,Y),p(R,$),p(R,et),p(Q,at),p(Q,lt),p(lt,nt),p(k,rt),p(k,it),p(it,ct),p(ct,ot),p(ot,_t),p(ct,ht),p(ct,pt),p(it,gt),p(it,mt),p(mt,Et),p(a,bt),p(a,It),p(It,kt),p(kt,xt),p(It,Vt),p(It,Ot),p(Ot,At),p(At,Nt),p(Ot,Lt),p(Ot,Pt),p(Pt,St),p(St,jt),p(jt,qt),p(St,Ct),p(St,Bt),p(Pt,Gt),p(Pt,Xt),p(Xt,Ft),p(Ot,Jt),p(Ot,Kt),p(Kt,Qt),p(Qt,Rt),p(Rt,Wt),p(Qt,Zt),p(Qt,te),p(Kt,ee),p(Kt,ae),p(ae,se),p(Ot,ne),p(Ot,re),p(re,ie),p(ie,ce),p(ce,ue),p(ie,de),p(ie,ve),p(re,pe),p(re,ge),p(ge,fe),p(e,Ee),Ie=!0,ke||(xe=P(x,"change",t[3]),ke=!0)},p(e,a){if(t=e,(!Ie||1&a&&!N(m.src,f=t[2].img_url(t[7].settings.product_image_1,'300x')))&&h(m,"src",f),(!Ie||1&a&&E!==(E=t[2].divided_by(300,t[7].settings.product_image_1.aspect_ratio)))&&h(m,"height",E),(!Ie||1&a)&&D(s,"--ratio",t[7].settings.product_image_1.aspect_ratio),1&a){let e;for(ye=t[0].blocks,e=0;e<ye.length;e+=1){const l=get_each_context_1(t,ye,e);De[e]?De[e].p(l,a):(De[e]=create_each_block_1(l),De[e].c(),De[e].m(x,null))}for(;e<De.length;e+=1)De[e].d(1);De.length=ye.length}3&a&&L(x,t[1]),(!Ie||1&a)&&q!==(q=t[7].settings.product_1_param_1_value+"")&&g(M,q),(!Ie||1&a)&&B!==(B=t[7].settings.product_1_param_1_unit+"")&&g(G,B),(!Ie||1&a)&&F!==(F=t[7].settings.param_1+"")&&g(J,F),(!Ie||1&a)&&W!==(W=t[7].settings.product_1_param_2_value+"")&&g(Y,W),(!Ie||1&a)&&tt!==(tt=t[7].settings.product_1_param_2_unit+"")&&g(et,tt),(!Ie||1&a)&&st!==(st=t[7].settings.param_2+"")&&g(nt,st),(!Ie||1&a)&&ut!==(ut=t[7].settings.product_1_param_3_value+"")&&g(_t,ut),(!Ie||1&a)&&vt!==(vt=t[7].settings.product_1_param_3_unit+"")&&g(pt,vt),(!Ie||1&a)&&ft!==(ft=t[7].settings.param_3+"")&&g(Et,ft),(!Ie||1&a&&!N(xt.src,yt=t[2].img_url(t[7].settings.product_image_2,'300x')))&&h(xt,"src",yt),(!Ie||1&a&&Dt!==(Dt=t[2].divided_by(300,t[7].settings.product_image_2.aspect_ratio)))&&h(xt,"height",Dt),(!Ie||1&a)&&D(kt,"--ratio",t[7].settings.product_image_1.aspect_ratio),(!Ie||1&a)&&wt!==(wt=t[7].settings.product_title_2+"")&&g(Nt,wt),(!Ie||1&a)&&Tt!==(Tt=t[7].settings.product_2_param_1_value+"")&&g(qt,Tt),(!Ie||1&a)&&Ht!==(Ht=t[7].settings.product_2_param_1_unit+"")&&g(Bt,Ht),(!Ie||1&a)&&zt!==(zt=t[7].settings.param_1+"")&&g(Ft,zt),(!Ie||1&a)&&Ut!==(Ut=t[7].settings.product_2_param_2_value+"")&&g(Wt,Ut),(!Ie||1&a)&&$t!==($t=t[7].settings.product_2_param_2_unit+"")&&g(te,$t),(!Ie||1&a)&&le!==(le=t[7].settings.param_2+"")&&g(se,le),(!Ie||1&a)&&oe!==(oe=t[7].settings.product_2_param_3_value+"")&&g(ue,oe),(!Ie||1&a)&&he!==(he=t[7].settings.product_2_param_3_unit+"")&&g(ve,he),(!Ie||1&a)&&me!==(me=t[7].settings.param_3+"")&&g(fe,me)},i(t){Ie||(V((()=>{C||(C=O(T,incrementor,{},!0)),C.run(1)})),V((()=>{Z||(Z=O(U,incrementor,{},!0)),Z.run(1)})),V((()=>{dt||(dt=O(ot,incrementor,{},!0)),dt.run(1)})),V((()=>{Mt||(Mt=O(jt,incrementor,{},!0)),Mt.run(1)})),V((()=>{Yt||(Yt=O(Rt,incrementor,{},!0)),Yt.run(1)})),V((()=>{_e||(_e=O(ce,incrementor,{},!0)),_e.run(1)})),V((()=>{be||(be=O(e,w,{easing:A,duration:700},!0)),be.run(1)})),Ie=!0)},o(t){C||(C=O(T,incrementor,{},!1)),C.run(0),Z||(Z=O(U,incrementor,{},!1)),Z.run(0),dt||(dt=O(ot,incrementor,{},!1)),dt.run(0),Mt||(Mt=O(jt,incrementor,{},!1)),Mt.run(0),Yt||(Yt=O(Rt,incrementor,{},!1)),Yt.run(0),_e||(_e=O(ce,incrementor,{},!1)),_e.run(0),be||(be=O(e,w,{easing:A,duration:700},!1)),be.run(0),Ie=!1},d(t){t&&_(e),b(De,t),t&&C&&C.end(),t&&Z&&Z.end(),t&&dt&&dt.end(),t&&Mt&&Mt.end(),t&&Yt&&Yt.end(),t&&_e&&_e.end(),t&&be&&be.end(),ke=!1,xe()}}}function create_each_block_1(t){let e;let a=t[7].settings.product_title_1+"";let l;let s;let m;return{c(){e=n("option"),l=r(a),s=i(),this.h()},l(t){e=c(t,"OPTION",{class:!0});var n=o(e);l=u(n,a),s=d(n),n.forEach(_),this.h()},h(){e.__value=m=t[8].index,e.value=e.__value,h(e,"class","svelte-2hua15")},m(t,a){v(t,e,a),p(e,l),p(e,s)},p(t,s){1&s&&a!==(a=t[7].settings.product_title_1+"")&&g(l,a),1&s&&m!==(m=t[8].index)&&(e.__value=m,e.value=e.__value)},d(t){t&&_(e)}}}function create_each_block(t){let e;let a;let l=t[1]==t[8].index&&create_if_block(t);return{c(){l&&l.c(),e=k()},l(t){l&&l.l(t),e=k()},m(t,s){l&&l.m(t,s),v(t,e,s),a=!0},p(t,a){t[1]==t[8].index?l?(l.p(t,a),3&a&&m(l,1)):(l=create_if_block(t),l.c(),m(l,1),l.m(e.parentNode,e)):l&&(x(),E(l,1,1,(()=>{l=null})),f())},i(t){a||(m(l),a=!0)},o(t){E(l),a=!1},d(t){l&&l.d(t),t&&_(e)}}}function create_fragment(t){let e;let a;let l=t[0].settings.title+"";let s;let I;let k;let y=t[0].settings.subtitle+"";let D;let V;let O;let A;let w;let N=t[0].blocks;let L=[];for(let e=0;e<N.length;e+=1)L[e]=create_each_block_2(get_each_context_2(t,N,e));const out=t=>E(L[t],1,1,(()=>{L[t]=null}));let P=t[0].blocks;let S=[];for(let e=0;e<P.length;e+=1)S[e]=create_each_block(get_each_context(t,P,e));const out_1=t=>E(S[t],1,1,(()=>{S[t]=null}));return{c(){e=n("div"),a=n("h1"),s=r(l),I=i(),k=n("h2"),D=r(y),V=i();for(let t=0;t<L.length;t+=1)L[t].c();O=i(),A=n("div");for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){e=c(t,"DIV",{class:!0});var n=o(e);a=c(n,"H1",{class:!0});var r=o(a);s=u(r,l),r.forEach(_),I=d(n),k=c(n,"H2",{class:!0});var i=o(k);D=u(i,y),i.forEach(_),V=d(n);for(let t=0;t<L.length;t+=1)L[t].l(n);O=d(n),A=c(n,"DIV",{class:!0});var h=o(A);for(let t=0;t<S.length;t+=1)S[t].l(h);h.forEach(_),n.forEach(_),this.h()},h(){h(a,"class"," svelte-2hua15"),h(k,"class"," svelte-2hua15"),h(A,"class","transition-enforcement svelte-2hua15"),h(e,"class","comparison-section-wrapper svelte-2hua15")},m(t,l){v(t,e,l),p(e,a),p(a,s),p(e,I),p(e,k),p(k,D),p(e,V);for(let t=0;t<L.length;t+=1)L[t].m(e,null);p(e,O),p(e,A);for(let t=0;t<S.length;t+=1)S[t].m(A,null);w=!0},p(t,[a]){if((!w||1&a)&&l!==(l=t[0].settings.title+"")&&g(s,l),(!w||1&a)&&y!==(y=t[0].settings.subtitle+"")&&g(D,y),3&a){let l;for(N=t[0].blocks,l=0;l<N.length;l+=1){const s=get_each_context_2(t,N,l);L[l]?(L[l].p(s,a),m(L[l],1)):(L[l]=create_each_block_2(s),L[l].c(),m(L[l],1),L[l].m(e,O))}for(x(),l=N.length;l<L.length;l+=1)out(l);f()}if(7&a){let e;for(P=t[0].blocks,e=0;e<P.length;e+=1){const l=get_each_context(t,P,e);S[e]?(S[e].p(l,a),m(S[e],1)):(S[e]=create_each_block(l),S[e].c(),m(S[e],1),S[e].m(A,null))}for(x(),e=P.length;e<S.length;e+=1)out_1(e);f()}},i(t){if(!w){for(let t=0;t<N.length;t+=1)m(L[t]);for(let t=0;t<P.length;t+=1)m(S[t]);w=!0}},o(t){L=L.filter(Boolean);for(let t=0;t<L.length;t+=1)E(L[t]);S=S.filter(Boolean);for(let t=0;t<S.length;t+=1)E(S[t]);w=!1},d(t){t&&_(e),b(L,t),b(S,t)}}}function incrementor(t,{speed:e=2,delay:a=400}){const l=1===t.childNodes.length&&t.childNodes[0].nodeType===Node.TEXT_NODE;if(!l)throw new Error("This transition only works on elements with a single text node child");const s=t.textContent;const n=parseInt(s,10);const r=n/(.01*e);return t.textContent=0,{delay:a,duration:r,tick:e=>{t.innerHTML=new Array((""+n).length-(""+Math.ceil(e*parseInt(s,10))).length).fill('&nbsp;').reduce(((t,e)=>t+e),'')+Math.ceil(e*parseInt(s,10))}}}function instance(t,e,a){let l=I('svelteProps')||{};let s=I('lec')||{};const n=S(s);j.subscribe((t=>{}));let r={};r.settings=l['sectionƒƒsettings'],r.blocks=l['sectionƒƒblocks'];let i=1;function select_change_handler(){i=y(this),a(1,i),a(0,r)}return[r,i,n,select_change_handler]}!function(a){var l=t&&t.__assign||function(){return l=Object.assign||function(t){for(var e,a=1,l=arguments.length;a<l;a++)for(var s in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},l.apply(this,arguments)};a.__esModule=!0;var s=e;function outin(t){var e=[1,2,3,4,5,6,7];var a=e[0],n=e[1],r=e[2],i=e[3],c=e[4],o=e[5],u=e[6];var _="svelte-outin";var d={};function findActive(t){var e=Object.entries(d).find((function(e){var a=e[1];return a.out===t||a.in===t}));return e?[e[1],e[0]]:[void 0,-1]}var h=!0;var v=[];var p=0;function splitOptions(t){return Array.isArray(t)?t:[t,{}]}var g=t.out?splitOptions(t.out):splitOptions(t.transition),m=g[0],f=g[1];var E=t.in?splitOptions(t.in):splitOptions(t.transition),b=E[0],I=E[1];function outro(t,e){var c,g;var E=m(t,l(l({},f),e));var b=window.getComputedStyle(t).position;-1===["fixed","absolute"].indexOf(b)&&((0,s.append_styles)(t,"outin",".svelte-outin { position: absolute !important; }"),t.classList.add(_));var I=findActive(t)[0];if(I)h&&(I.out=t,I.in=void 0);else{if(!h)return E;I={delay:(null!==(c=E.duration)&&void 0!==c?c:0)+(null!==(g=E.delay)&&void 0!==g?g:0),out:t,in:void 0,state:a},p+=1,d[p]=I}return h&&v.push(I),I.state===a?h&&(I.state=n,t.addEventListener("outroend",onOutroEnd)):I.state===i?I.state=u:I.state===r&&(I.state=o),E}function onOutroEnd(t){var e=t.target;e.removeEventListener("outroend",onOutroEnd);var a=findActive(e)[0];a&&a.state===r&&(a.state=i)}function intro(t,e){var a,s,c;t.classList.remove(_);var d=b(t,l(l({},I),e));var p=findActive(t)[0];if(h){var g=v.findIndex((function(t){return void 0===t.in}));var m=!0;-1!==g&&(p=v[g],p.in=t,m=g===v.length-1),m&&(h=!0,v.length=0)}if(!p)return h=!1,v.length=0,d;p.in||(p.in=t);var f=p.in===t;return p.state===n?0===p.delay?f&&(p.state=i,t.addEventListener("introend",onIntroEnd)):(d.delay=p.delay+(null!==(a=d.delay)&&void 0!==a?a:0),f&&(p.state=r,t.addEventListener("introend",onIntroEnd))):p.state===r?d.delay=p.delay+(null!==(s=d.delay)&&void 0!==s?s:0):p.state===o?f&&(p.state=i,t.addEventListener("introend",onIntroEnd)):p.state===u&&f&&(p.state=r,d.delay=p.delay+(null!==(c=d.delay)&&void 0!==c?c:0),t.addEventListener("introend",onIntroEnd)),d}function onIntroEnd(t){t.target.removeEventListener("introend",onIntroEnd);var e=findActive(t.target),a=e[0],l=e[1];a&&(a.state===i?(a.state=c,delete d[l]):a.state===r&&(a.state=c,a.out.removeEventListener("outroend",onOutroEnd),delete d[l]))}return[outro,intro]}a.default=outin}(T);class Product_comparison extends a{constructor(t){super(),l(this,t,instance,create_fragment,s,{})}}export{Product_comparison as default};