import{commonjsGlobal as t,internal as e,SvelteComponent as a,init as s,safe_not_equal as l,element as n,text as r,space as i,claim_element as c,children as o,claim_text as u,detach as _,claim_space as d,attr as h,insert_hydration as v,append_hydration as g,set_data as p,transition_in as m,check_outros as f,transition_out as E,destroy_each as b,empty as k,group_outros as I,select_value as x,set_style as y,add_render_callback as D,create_bidirectional_transition as V,cubicInOut as O,fade as A,src_url_equal as w,select_option as N,listen as L}from'./liquivelte-svelte-hs163e9d22.liquivelte.js';import{cachedLiquid as P}from'./liquivelte-liquid-hs39e4dea8.liquivelte.js';import{cartStore as S}from'./store.js-hs7a9d2d58.liquivelte.js';var j={};function get_each_context(t,e,a){const s=t.slice();s[8]=e[a],s[11]=a;const l={first:0===s[11],index:s[11]+1,index0:s[11],last:s[11]===s[0].blocks.length-1,rindex:s[0].blocks.length-s[11],rindex0:s[0].blocks.length-s[11]-1,length:s[0].blocks.length};return s[9]=l,s}function get_each_context_1(t,e,a){const s=t.slice();s[8]=e[a],s[11]=a;const l={first:0===s[11],index:s[11]+1,index0:s[11],last:s[11]===s[0].blocks.length-1,rindex:s[0].blocks.length-s[11],rindex0:s[0].blocks.length-s[11]-1,length:s[0].blocks.length};return s[9]=l,s}function get_each_context_2(t,e,a){const s=t.slice();s[8]=e[a],s[11]=a;const l={first:0===s[11],index:s[11]+1,index0:s[11],last:s[11]===s[0].blocks.length-1,rindex:s[0].blocks.length-s[11],rindex0:s[0].blocks.length-s[11]-1,length:s[0].blocks.length};return s[9]=l,s}function create_if_block_1(t){let e;let a;let s;return{c(){e=n("div"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0}),o(e).forEach(_),this.h()},h(){h(e,"class","backplate svelte-2hua15"),y(e,"background-color",t[8].settings.bg_color)},m(t,a){v(t,e,a),s=!0},p(a,l){t=a,(!s||1&l)&&y(e,"background-color",t[8].settings.bg_color)},i(t){s||(D((()=>{a||(a=V(e,A,{easing:O,duration:700},!0)),a.run(1)})),s=!0)},o(t){a||(a=V(e,A,{easing:O,duration:700},!1)),a.run(0),s=!1},d(t){t&&_(e),t&&a&&a.end()}}}function create_each_block_2(t){let e;let a;let s=t[1]==t[9].index&&create_if_block_1(t);return{c(){s&&s.c(),e=k()},l(t){s&&s.l(t),e=k()},m(t,l){s&&s.m(t,l),v(t,e,l),a=!0},p(t,a){t[1]==t[9].index?s?(s.p(t,a),3&a&&m(s,1)):(s=create_if_block_1(t),s.c(),m(s,1),s.m(e.parentNode,e)):s&&(I(),E(s,1,1,(()=>{s=null})),f())},i(t){a||(m(s),a=!0)},o(t){E(s),a=!1},d(t){s&&s.d(t),t&&_(e)}}}function create_if_block(t){let e;let a;let s;let l;let m;let f;let E;let k;let I;let x;let P;let S;let j;let T;let q=t[8].settings.product_1_param_1_value+"";let M;let C;let H;let B=t[8].settings.product_1_param_1_unit+"";let G;let $;let X;let z=t[8].settings.param_1+"";let F;let J;let K;let Q;let R;let U=t[8].settings.product_1_param_2_value+"";let W;let Y;let Z;let tt=t[8].settings.product_1_param_2_unit+"";let et;let at;let st;let lt=t[8].settings.param_2+"";let nt;let rt;let it;let ct;let ot;let ut=t[8].settings.product_1_param_3_value+"";let _t;let dt;let ht;let vt=t[8].settings.product_1_param_3_unit+"";let gt;let pt;let mt;let ft=t[8].settings.param_3+"";let Et;let bt;let kt;let It;let xt;let yt;let Dt;let Vt;let Ot;let At;let wt=t[8].settings.product_title_2+"";let Nt;let Lt;let Pt;let St;let jt;let Tt=t[8].settings.product_2_param_1_value+"";let qt;let Mt;let Ct;let Ht=t[8].settings.product_2_param_1_unit+"";let Bt;let Gt;let $t;let Xt=t[8].settings.param_1+"";let zt;let Ft;let Jt;let Kt;let Qt;let Rt=t[8].settings.product_2_param_2_value+"";let Ut;let Wt;let Yt;let Zt=t[8].settings.product_2_param_2_unit+"";let te;let ee;let ae;let se=t[8].settings.param_2+"";let le;let ne;let re;let ie;let ce;let oe=t[8].settings.product_2_param_3_value+"";let ue;let _e;let de;let he=t[8].settings.product_2_param_3_unit+"";let ve;let ge;let pe;let me=t[8].settings.param_3+"";let fe;let Ee;let be;let ke;let Ie;let xe;let ye=t[0].blocks;let De=[];for(let e=0;e<ye.length;e+=1)De[e]=create_each_block_1(get_each_context_1(t,ye,e));return{c(){e=n("div"),a=n("div"),s=n("div"),l=n("div"),m=n("img"),k=i(),I=n("div"),x=n("select");for(let t=0;t<De.length;t+=1)De[t].c();P=i(),S=n("div"),j=n("div"),T=n("span"),M=r(q),H=i(),G=r(B),$=i(),X=n("div"),F=r(z),J=i(),K=n("div"),Q=n("div"),R=n("span"),W=r(U),Z=i(),et=r(tt),at=i(),st=n("div"),nt=r(lt),rt=i(),it=n("div"),ct=n("div"),ot=n("span"),_t=r(ut),ht=i(),gt=r(vt),pt=i(),mt=n("div"),Et=r(ft),bt=i(),kt=n("div"),It=n("div"),xt=n("img"),Vt=i(),Ot=n("div"),At=n("div"),Nt=r(wt),Lt=i(),Pt=n("div"),St=n("div"),jt=n("span"),qt=r(Tt),Ct=i(),Bt=r(Ht),Gt=i(),$t=n("div"),zt=r(Xt),Ft=i(),Jt=n("div"),Kt=n("div"),Qt=n("span"),Ut=r(Rt),Yt=i(),te=r(Zt),ee=i(),ae=n("div"),le=r(se),ne=i(),re=n("div"),ie=n("div"),ce=n("span"),ue=r(oe),de=i(),ve=r(he),ge=i(),pe=n("div"),fe=r(me),Ee=i(),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=o(e);a=c(n,"DIV",{class:!0});var r=o(a);s=c(r,"DIV",{class:!0});var i=o(s);l=c(i,"DIV",{class:!0,style:!0});var h=o(l);m=c(h,"IMG",{class:!0,loading:!0,src:!0,width:!0,height:!0}),h.forEach(_),k=d(i),I=c(i,"DIV",{class:!0});var v=o(I);x=c(v,"SELECT",{class:!0});var g=o(x);for(let t=0;t<De.length;t+=1)De[t].l(g);g.forEach(_),P=d(v),S=c(v,"DIV",{class:!0});var p=o(S);j=c(p,"DIV",{class:!0});var f=o(j);T=c(f,"SPAN",{class:!0});var E=o(T);M=u(E,q),E.forEach(_),H=d(f),G=u(f,B),f.forEach(_),$=d(p),X=c(p,"DIV",{class:!0});var b=o(X);F=u(b,z),b.forEach(_),p.forEach(_),J=d(v),K=c(v,"DIV",{class:!0});var y=o(K);Q=c(y,"DIV",{class:!0});var D=o(Q);R=c(D,"SPAN",{class:!0});var V=o(R);W=u(V,U),V.forEach(_),Z=d(D),et=u(D,tt),D.forEach(_),at=d(y),st=c(y,"DIV",{class:!0});var O=o(st);nt=u(O,lt),O.forEach(_),y.forEach(_),rt=d(v),it=c(v,"DIV",{class:!0});var A=o(it);ct=c(A,"DIV",{class:!0});var w=o(ct);ot=c(w,"SPAN",{class:!0});var N=o(ot);_t=u(N,ut),N.forEach(_),ht=d(w),gt=u(w,vt),w.forEach(_),pt=d(A),mt=c(A,"DIV",{class:!0});var L=o(mt);Et=u(L,ft),L.forEach(_),A.forEach(_),v.forEach(_),i.forEach(_),bt=d(r),kt=c(r,"DIV",{class:!0});var C=o(kt);It=c(C,"DIV",{class:!0,style:!0});var Y=o(It);xt=c(Y,"IMG",{class:!0,loading:!0,src:!0,width:!0,height:!0}),Y.forEach(_),Vt=d(C),Ot=c(C,"DIV",{class:!0});var dt=o(Ot);At=c(dt,"DIV",{class:!0});var yt=o(At);Nt=u(yt,wt),yt.forEach(_),Lt=d(dt),Pt=c(dt,"DIV",{class:!0});var Dt=o(Pt);St=c(Dt,"DIV",{class:!0});var Mt=o(St);jt=c(Mt,"SPAN",{class:!0});var Wt=o(jt);qt=u(Wt,Tt),Wt.forEach(_),Ct=d(Mt),Bt=u(Mt,Ht),Mt.forEach(_),Gt=d(Dt),$t=c(Dt,"DIV",{class:!0});var _e=o($t);zt=u(_e,Xt),_e.forEach(_),Dt.forEach(_),Ft=d(dt),Jt=c(dt,"DIV",{class:!0});var be=o(Jt);Kt=c(be,"DIV",{class:!0});var ke=o(Kt);Qt=c(ke,"SPAN",{class:!0});var Ie=o(Qt);Ut=u(Ie,Rt),Ie.forEach(_),Yt=d(ke),te=u(ke,Zt),ke.forEach(_),ee=d(be),ae=c(be,"DIV",{class:!0});var xe=o(ae);le=u(xe,se),xe.forEach(_),be.forEach(_),ne=d(dt),re=c(dt,"DIV",{class:!0});var ye=o(re);ie=c(ye,"DIV",{class:!0});var Ve=o(ie);ce=c(Ve,"SPAN",{class:!0});var Oe=o(ce);ue=u(Oe,oe),Oe.forEach(_),de=d(Ve),ve=u(Ve,he),Ve.forEach(_),ge=d(ye),pe=c(ye,"DIV",{class:!0,"data-failed":!0});var Ae=o(pe);fe=u(Ae,me),Ae.forEach(_),ye.forEach(_),dt.forEach(_),C.forEach(_),r.forEach(_),Ee=d(n),n.forEach(_),this.h()},h(){h(m,"class"," svelte-2hua15"),h(m,"loading","eager"),w(m.src,f=t[2].img_url(t[8].settings.product_image_1,'300x'))||h(m,"src",f),h(m,"width",300),h(m,"height",E=t[2].divided_by(300,t[8].settings.product_image_1.aspect_ratio)),h(l,"class","product-image image-1 svelte-2hua15"),y(l,"--ratio",t[8].settings.product_image_1.aspect_ratio),h(x,"class","product-title svelte-2hua15"),void 0===t[1]&&D((()=>t[6].call(x))),h(T,"class","svelte-2hua15"),h(j,"class","param-values svelte-2hua15"),h(X,"class","param-name svelte-2hua15"),h(S,"class","param-container svelte-2hua15"),h(R,"class","svelte-2hua15"),h(Q,"class","param-values svelte-2hua15"),h(st,"class","param-name svelte-2hua15"),h(K,"class","param-container svelte-2hua15"),h(ot,"class","svelte-2hua15"),h(ct,"class","param-values svelte-2hua15"),h(mt,"class","param-name svelte-2hua15"),h(it,"class","param-container svelte-2hua15"),h(I,"class","product-info svelte-2hua15"),h(s,"class","comparison-item svelte-2hua15"),h(xt,"class"," svelte-2hua15"),h(xt,"loading","eager"),w(xt.src,yt=t[2].img_url(t[8].settings.product_image_2,'300x'))||h(xt,"src",yt),h(xt,"width",300),h(xt,"height",Dt=t[2].divided_by(300,t[8].settings.product_image_2.aspect_ratio)),h(It,"class","product-image image-2 svelte-2hua15"),y(It,"--ratio",t[8].settings.product_image_1.aspect_ratio),h(At,"class","product-title svelte-2hua15"),h(jt,"class","svelte-2hua15"),h(St,"class","param-values svelte-2hua15"),h($t,"class","param-name svelte-2hua15"),h(Pt,"class","param-container svelte-2hua15"),h(Qt,"class","svelte-2hua15"),h(Kt,"class","param-values svelte-2hua15"),h(ae,"class","param-name svelte-2hua15"),h(Jt,"class","param-container svelte-2hua15"),h(ce,"class","svelte-2hua15"),h(ie,"class","param-values svelte-2hua15"),h(pe,"class","param-name svelte-2hua15"),h(pe,"data-failed","true"),h(re,"class","param-container svelte-2hua15"),h(Ot,"class","product-info svelte-2hua15"),h(kt,"class","comparison-item svelte-2hua15"),h(a,"class","comparison svelte-2hua15"),h(e,"class","comparison-container svelte-2hua15")},m(n,r){v(n,e,r),g(e,a),g(a,s),g(s,l),g(l,m),g(s,k),g(s,I),g(I,x);for(let t=0;t<De.length;t+=1)De[t].m(x,null);N(x,t[1]),g(I,P),g(I,S),g(S,j),g(j,T),g(T,M),g(j,H),g(j,G),g(S,$),g(S,X),g(X,F),g(I,J),g(I,K),g(K,Q),g(Q,R),g(R,W),g(Q,Z),g(Q,et),g(K,at),g(K,st),g(st,nt),g(I,rt),g(I,it),g(it,ct),g(ct,ot),g(ot,_t),g(ct,ht),g(ct,gt),g(it,pt),g(it,mt),g(mt,Et),g(a,bt),g(a,kt),g(kt,It),g(It,xt),g(kt,Vt),g(kt,Ot),g(Ot,At),g(At,Nt),g(Ot,Lt),g(Ot,Pt),g(Pt,St),g(St,jt),g(jt,qt),g(St,Ct),g(St,Bt),g(Pt,Gt),g(Pt,$t),g($t,zt),g(Ot,Ft),g(Ot,Jt),g(Jt,Kt),g(Kt,Qt),g(Qt,Ut),g(Kt,Yt),g(Kt,te),g(Jt,ee),g(Jt,ae),g(ae,le),g(Ot,ne),g(Ot,re),g(re,ie),g(ie,ce),g(ce,ue),g(ie,de),g(ie,ve),g(re,ge),g(re,pe),g(pe,fe),g(e,Ee),ke=!0,Ie||(xe=L(x,"change",t[6]),Ie=!0)},p(e,a){if(t=e,(!ke||1&a&&!w(m.src,f=t[2].img_url(t[8].settings.product_image_1,'300x')))&&h(m,"src",f),(!ke||1&a&&E!==(E=t[2].divided_by(300,t[8].settings.product_image_1.aspect_ratio)))&&h(m,"height",E),(!ke||1&a)&&y(l,"--ratio",t[8].settings.product_image_1.aspect_ratio),1&a){let e;for(ye=t[0].blocks,e=0;e<ye.length;e+=1){const s=get_each_context_1(t,ye,e);De[e]?De[e].p(s,a):(De[e]=create_each_block_1(s),De[e].c(),De[e].m(x,null))}for(;e<De.length;e+=1)De[e].d(1);De.length=ye.length}3&a&&N(x,t[1]),(!ke||1&a)&&q!==(q=t[8].settings.product_1_param_1_value+"")&&p(M,q),(!ke||1&a)&&B!==(B=t[8].settings.product_1_param_1_unit+"")&&p(G,B),(!ke||1&a)&&z!==(z=t[8].settings.param_1+"")&&p(F,z),(!ke||1&a)&&U!==(U=t[8].settings.product_1_param_2_value+"")&&p(W,U),(!ke||1&a)&&tt!==(tt=t[8].settings.product_1_param_2_unit+"")&&p(et,tt),(!ke||1&a)&&lt!==(lt=t[8].settings.param_2+"")&&p(nt,lt),(!ke||1&a)&&ut!==(ut=t[8].settings.product_1_param_3_value+"")&&p(_t,ut),(!ke||1&a)&&vt!==(vt=t[8].settings.product_1_param_3_unit+"")&&p(gt,vt),(!ke||1&a)&&ft!==(ft=t[8].settings.param_3+"")&&p(Et,ft),(!ke||1&a&&!w(xt.src,yt=t[2].img_url(t[8].settings.product_image_2,'300x')))&&h(xt,"src",yt),(!ke||1&a&&Dt!==(Dt=t[2].divided_by(300,t[8].settings.product_image_2.aspect_ratio)))&&h(xt,"height",Dt),(!ke||1&a)&&y(It,"--ratio",t[8].settings.product_image_1.aspect_ratio),(!ke||1&a)&&wt!==(wt=t[8].settings.product_title_2+"")&&p(Nt,wt),(!ke||1&a)&&Tt!==(Tt=t[8].settings.product_2_param_1_value+"")&&p(qt,Tt),(!ke||1&a)&&Ht!==(Ht=t[8].settings.product_2_param_1_unit+"")&&p(Bt,Ht),(!ke||1&a)&&Xt!==(Xt=t[8].settings.param_1+"")&&p(zt,Xt),(!ke||1&a)&&Rt!==(Rt=t[8].settings.product_2_param_2_value+"")&&p(Ut,Rt),(!ke||1&a)&&Zt!==(Zt=t[8].settings.product_2_param_2_unit+"")&&p(te,Zt),(!ke||1&a)&&se!==(se=t[8].settings.param_2+"")&&p(le,se),(!ke||1&a)&&oe!==(oe=t[8].settings.product_2_param_3_value+"")&&p(ue,oe),(!ke||1&a)&&he!==(he=t[8].settings.product_2_param_3_unit+"")&&p(ve,he),(!ke||1&a)&&me!==(me=t[8].settings.param_3+"")&&p(fe,me)},i(t){ke||(D((()=>{C||(C=V(T,incrementor,{},!0)),C.run(1)})),D((()=>{Y||(Y=V(R,incrementor,{},!0)),Y.run(1)})),D((()=>{dt||(dt=V(ot,incrementor,{},!0)),dt.run(1)})),D((()=>{Mt||(Mt=V(jt,incrementor,{},!0)),Mt.run(1)})),D((()=>{Wt||(Wt=V(Qt,incrementor,{},!0)),Wt.run(1)})),D((()=>{_e||(_e=V(ce,incrementor,{},!0)),_e.run(1)})),D((()=>{be||(be=V(e,A,{easing:O,duration:700},!0)),be.run(1)})),ke=!0)},o(t){C||(C=V(T,incrementor,{},!1)),C.run(0),Y||(Y=V(R,incrementor,{},!1)),Y.run(0),dt||(dt=V(ot,incrementor,{},!1)),dt.run(0),Mt||(Mt=V(jt,incrementor,{},!1)),Mt.run(0),Wt||(Wt=V(Qt,incrementor,{},!1)),Wt.run(0),_e||(_e=V(ce,incrementor,{},!1)),_e.run(0),be||(be=V(e,A,{easing:O,duration:700},!1)),be.run(0),ke=!1},d(t){t&&_(e),b(De,t),t&&C&&C.end(),t&&Y&&Y.end(),t&&dt&&dt.end(),t&&Mt&&Mt.end(),t&&Wt&&Wt.end(),t&&_e&&_e.end(),t&&be&&be.end(),Ie=!1,xe()}}}function create_each_block_1(t){let e;let a=t[8].settings.product_title_1+"";let s;let l;let m;return{c(){e=n("option"),s=r(a),l=i(),this.h()},l(t){e=c(t,"OPTION",{class:!0});var n=o(e);s=u(n,a),l=d(n),n.forEach(_),this.h()},h(){e.__value=m=t[9].index,e.value=e.__value,h(e,"class","svelte-2hua15")},m(t,a){v(t,e,a),g(e,s),g(e,l)},p(t,l){1&l&&a!==(a=t[8].settings.product_title_1+"")&&p(s,a),1&l&&m!==(m=t[9].index)&&(e.__value=m,e.value=e.__value)},d(t){t&&_(e)}}}function create_each_block(t){let e;let a;let s=t[1]==t[9].index&&create_if_block(t);return{c(){s&&s.c(),e=k()},l(t){s&&s.l(t),e=k()},m(t,l){s&&s.m(t,l),v(t,e,l),a=!0},p(t,a){t[1]==t[9].index?s?(s.p(t,a),3&a&&m(s,1)):(s=create_if_block(t),s.c(),m(s,1),s.m(e.parentNode,e)):s&&(I(),E(s,1,1,(()=>{s=null})),f())},i(t){a||(m(s),a=!0)},o(t){E(s),a=!1},d(t){s&&s.d(t),t&&_(e)}}}function create_fragment(t){let e;let a;let s=t[0].settings.title+"";let l;let k;let x;let y=t[0].settings.subtitle+"";let D;let V;let O;let A;let w;let N=t[0].blocks;let L=[];for(let e=0;e<N.length;e+=1)L[e]=create_each_block_2(get_each_context_2(t,N,e));const out=t=>E(L[t],1,1,(()=>{L[t]=null}));let P=t[0].blocks;let S=[];for(let e=0;e<P.length;e+=1)S[e]=create_each_block(get_each_context(t,P,e));const out_1=t=>E(S[t],1,1,(()=>{S[t]=null}));return{c(){e=n("div"),a=n("h1"),l=r(s),k=i(),x=n("h2"),D=r(y),V=i();for(let t=0;t<L.length;t+=1)L[t].c();O=i(),A=n("div");for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){e=c(t,"DIV",{class:!0});var n=o(e);a=c(n,"H1",{class:!0});var r=o(a);l=u(r,s),r.forEach(_),k=d(n),x=c(n,"H2",{class:!0});var i=o(x);D=u(i,y),i.forEach(_),V=d(n);for(let t=0;t<L.length;t+=1)L[t].l(n);O=d(n),A=c(n,"DIV",{class:!0});var h=o(A);for(let t=0;t<S.length;t+=1)S[t].l(h);h.forEach(_),n.forEach(_),this.h()},h(){h(a,"class"," svelte-2hua15"),h(x,"class"," svelte-2hua15"),h(A,"class","transition-enforcement svelte-2hua15"),h(e,"class","comparison-section-wrapper svelte-2hua15")},m(t,s){v(t,e,s),g(e,a),g(a,l),g(e,k),g(e,x),g(x,D),g(e,V);for(let t=0;t<L.length;t+=1)L[t].m(e,null);g(e,O),g(e,A);for(let t=0;t<S.length;t+=1)S[t].m(A,null);w=!0},p(t,[a]){if((!w||1&a)&&s!==(s=t[0].settings.title+"")&&p(l,s),(!w||1&a)&&y!==(y=t[0].settings.subtitle+"")&&p(D,y),3&a){let s;for(N=t[0].blocks,s=0;s<N.length;s+=1){const l=get_each_context_2(t,N,s);L[s]?(L[s].p(l,a),m(L[s],1)):(L[s]=create_each_block_2(l),L[s].c(),m(L[s],1),L[s].m(e,O))}for(I(),s=N.length;s<L.length;s+=1)out(s);f()}if(7&a){let e;for(P=t[0].blocks,e=0;e<P.length;e+=1){const s=get_each_context(t,P,e);S[e]?(S[e].p(s,a),m(S[e],1)):(S[e]=create_each_block(s),S[e].c(),m(S[e],1),S[e].m(A,null))}for(I(),e=P.length;e<S.length;e+=1)out_1(e);f()}},i(t){if(!w){for(let t=0;t<N.length;t+=1)m(L[t]);for(let t=0;t<P.length;t+=1)m(S[t]);w=!0}},o(t){L=L.filter(Boolean);for(let t=0;t<L.length;t+=1)E(L[t]);S=S.filter(Boolean);for(let t=0;t<S.length;t+=1)E(S[t]);w=!1},d(t){t&&_(e),b(L,t),b(S,t)}}}function incrementor(t,{speed:e=2,delay:a=400}){const s=1===t.childNodes.length&&t.childNodes[0].nodeType===Node.TEXT_NODE;if(!s)throw new Error("This transition only works on elements with a single text node child");const l=t.textContent;const n=parseInt(l,10);const r=n/(.01*e);return t.textContent=0,{delay:a,duration:r,tick:e=>{t.innerHTML=new Array((""+n).length-(""+Math.ceil(e*parseInt(l,10))).length).fill('&nbsp;').reduce(((t,e)=>t+e),'')+Math.ceil(e*parseInt(l,10))}}}function instance(t,e,a){let{lec:s}=e;const l=P(s);S.subscribe((t=>{}));let n={};let{"sectionƒƒsettings":r}=e;n.settings=r;let{"sectionƒƒblocks":i}=e;n.blocks=i;let c=1;function select_change_handler(){c=x(this),a(1,c),a(0,n)}return t.$$set=t=>{'lec'in t&&a(3,s=t.lec),'sectionƒƒsettings'in t&&a(4,r=t.sectionƒƒsettings),'sectionƒƒblocks'in t&&a(5,i=t.sectionƒƒblocks)},[n,c,l,s,r,i,select_change_handler]}!function(a){var s=t&&t.__assign||function(){return s=Object.assign||function(t){for(var e,a=1,s=arguments.length;a<s;a++)for(var l in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t},s.apply(this,arguments)};a.__esModule=!0;var l=e;function outin(t){var e=[1,2,3,4,5,6,7];var a=e[0],n=e[1],r=e[2],i=e[3],c=e[4],o=e[5],u=e[6];var _="svelte-outin";var d={};function findActive(t){var e=Object.entries(d).find((function(e){var a=e[1];return a.out===t||a.in===t}));return e?[e[1],e[0]]:[void 0,-1]}var h=!0;var v=[];var g=0;function splitOptions(t){return Array.isArray(t)?t:[t,{}]}var p=t.out?splitOptions(t.out):splitOptions(t.transition),m=p[0],f=p[1];var E=t.in?splitOptions(t.in):splitOptions(t.transition),b=E[0],k=E[1];function outro(t,e){var c,p;var E=m(t,s(s({},f),e));var b=window.getComputedStyle(t).position;-1===["fixed","absolute"].indexOf(b)&&((0,l.append_styles)(t,"outin",".svelte-outin { position: absolute !important; }"),t.classList.add(_));var k=findActive(t)[0];if(k)h&&(k.out=t,k.in=void 0);else{if(!h)return E;k={delay:(null!==(c=E.duration)&&void 0!==c?c:0)+(null!==(p=E.delay)&&void 0!==p?p:0),out:t,in:void 0,state:a},g+=1,d[g]=k}return h&&v.push(k),k.state===a?h&&(k.state=n,t.addEventListener("outroend",onOutroEnd)):k.state===i?k.state=u:k.state===r&&(k.state=o),E}function onOutroEnd(t){var e=t.target;e.removeEventListener("outroend",onOutroEnd);var a=findActive(e)[0];a&&a.state===r&&(a.state=i)}function intro(t,e){var a,l,c;t.classList.remove(_);var d=b(t,s(s({},k),e));var g=findActive(t)[0];if(h){var p=v.findIndex((function(t){return void 0===t.in}));var m=!0;-1!==p&&(g=v[p],g.in=t,m=p===v.length-1),m&&(h=!0,v.length=0)}if(!g)return h=!1,v.length=0,d;g.in||(g.in=t);var f=g.in===t;return g.state===n?0===g.delay?f&&(g.state=i,t.addEventListener("introend",onIntroEnd)):(d.delay=g.delay+(null!==(a=d.delay)&&void 0!==a?a:0),f&&(g.state=r,t.addEventListener("introend",onIntroEnd))):g.state===r?d.delay=g.delay+(null!==(l=d.delay)&&void 0!==l?l:0):g.state===o?f&&(g.state=i,t.addEventListener("introend",onIntroEnd)):g.state===u&&f&&(g.state=r,d.delay=g.delay+(null!==(c=d.delay)&&void 0!==c?c:0),t.addEventListener("introend",onIntroEnd)),d}function onIntroEnd(t){t.target.removeEventListener("introend",onIntroEnd);var e=findActive(t.target),a=e[0],s=e[1];a&&(a.state===i?(a.state=c,delete d[s]):a.state===r&&(a.state=c,a.out.removeEventListener("outroend",onOutroEnd),delete d[s]))}return[outro,intro]}a.default=outin}(j);class Product_comparison extends a{constructor(t){super(),s(this,t,instance,create_fragment,l,{lec:3,"sectionƒƒsettings":4,"sectionƒƒblocks":5})}}export{Product_comparison as default};