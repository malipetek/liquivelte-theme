import{SvelteComponent as t,init as e,safe_not_equal as l,element as n,claim_element as s,children as i,detach as o,attr as c,src_url_equal as r,add_render_callback as a,toggle_class as f,insert_hydration as _,listen as p,noop as u,run_all as d,onMount as m,binding_callbacks as h,text as g,claim_text as b,append_hydration as k,set_data as $,create_slot as v,update_slot_base as y,get_all_dirty_from_scope as x,get_slot_changes as w,transition_in as z,transition_out as F,create_component as I,claim_component as T,mount_component as q,destroy_component as E,empty as V,svg_element as D,space as j,claim_svg_element as H,claim_space as N,set_style as M,check_outros as S,destroy_each as A,group_outros as Y,HtmlTagHydration as B,claim_html_tag as L,bind as P,add_flush_callback as C}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{cachedLiquid as G}from'./liquivelte-liquid-hs8daa1a0c.liquivelte.js';var O,J;O=function(t,e,l){var n;return function(){var s=this,i=arguments;var later=function(){n=null,l||t.apply(s,i)};l&&!n&&t.apply(s,i),clearTimeout(n),n=setTimeout(later,e)}},J=function(t,e){var l,n,s,i,o,c;var r=O((function(){o=i=!1}),e);return function(){l=this,n=arguments;var later=function(){s=null,o&&t.apply(l,n),r()};return s||(s=setTimeout(later,e)),i?o=!0:c=t.apply(l,n),r(),i=!0,c}},Function.prototype.debounce=function(t,e){return O(this,t,e)},Function.prototype.throttle=function(t){return J(this,t)};class AnimationFrame{constructor(t){this.requestId,this.cb=t||(()=>1)}loop(){this.requestId=void 0,this.cb(),this.start()}start(){this.requestId||(this.requestId=window.requestAnimationFrame(this.loop.bind(this)))}stop(){this.requestId&&(window.cancelAnimationFrame(this.requestId),this.requestId=void 0)}}function create_fragment$4(t){let e;let l;let m;let h;let g;return{c(){e=n("video"),this.h()},l(t){e=s(t,"VIDEO",{style:!0,class:!0,preload:!0,"data-src":!0,src:!0}),i(e).forEach(o),this.h()},h(){c(e,"style",t[0]),c(e,"class","video svelte-jqn7s3"),c(e,"preload","metadata"),c(e,"data-src",l=t[5].file_url(t[1].settings.source)),r(e.src,m=t[5].file_url(t[1].settings.source))||c(e,"src",m),e.playsInline=!0,e.muted=!0,void 0===t[3]&&a((()=>t[11].call(e))),f(e,"bg-video",t[1].settings.is_bg)},m(l,n){_(l,e,n),t[10](e),h||(g=[p(e,"durationchange",t[11]),p(e,"seeked",t[12])],h=!0)},p(t,[n]){1&n&&c(e,"style",t[0]),2&n&&l!==(l=t[5].file_url(t[1].settings.source))&&c(e,"data-src",l),2&n&&!r(e.src,m=t[5].file_url(t[1].settings.source))&&c(e,"src",m),2&n&&f(e,"bg-video",t[1].settings.is_bg)},i:u,o:u,d(l){l&&o(e),t[10](null),h=!1,d(g)}}}const K=.3;function instance$4(t,e,l){let{lec:n}=e;const s=G(n);let{keptFor:i}=e;let{keepFor:o}=e;let{scrollY:c}=e;let{anim_style:r}=e;let{block:a={}}=e;let f,_;let p=!0;let u=0;function video_1_binding(t){h[t?'unshift':'push']((()=>{f=t,l(2,f)}))}function video_1_durationchange_handler(){_=this.duration,l(3,_)}m((()=>{function lerp(t,e,l){return(1-l)*t+l*e}const t=new AnimationFrame((()=>{if(!p||!_)return;l(4,p=!1);let t=i/o;const e=Math.round(100*lerp(u,t,.3))/100;l(2,f.currentTime=_*e,f),u=e}));return t.start(),()=>{t.stop()}}));const seeked_handler=()=>l(4,p=!0);return t.$$set=t=>{'lec'in t&&l(6,n=t.lec),'keptFor'in t&&l(7,i=t.keptFor),'keepFor'in t&&l(8,o=t.keepFor),'scrollY'in t&&l(9,c=t.scrollY),'anim_style'in t&&l(0,r=t.anim_style),'block'in t&&l(1,a=t.block)},[r,a,f,_,p,s,n,i,o,c,video_1_binding,video_1_durationchange_handler,seeked_handler]}class Video extends t{constructor(t){super(),e(this,t,instance$4,create_fragment$4,l,{lec:6,keptFor:7,keepFor:8,scrollY:9,anim_style:0,block:1})}}function create_fragment$3(t){let e;let l=t[5].settings.content+"";let r;let a;return{c(){e=n("div"),r=g(l),this.h()},l(t){e=s(t,"DIV",{class:!0,style:!0});var n=i(e);r=b(n,l),n.forEach(o),this.h()},h(){c(e,"class"," svelte-e2nbez"),c(e,"style",a="top:"+t[1]+"%; left:"+t[0]+"%; font-size: "+t[2]+"em; "+t[4]+"; font-weight: "+t[3])},m(t,l){_(t,e,l),k(e,r)},p(t,[n]){32&n&&l!==(l=t[5].settings.content+"")&&$(r,l),31&n&&a!==(a="top:"+t[1]+"%; left:"+t[0]+"%; font-size: "+t[2]+"em; "+t[4]+"; font-weight: "+t[3])&&c(e,"style",a)},i:u,o:u,d(t){t&&o(e)}}}function instance$3(t,e,l){let{lec:n}=e;let s={};let{"blockƒƒsettings":i}=e;s.settings=i;let{left:o}=e;let{title_top:c}=e;let{font_size:r}=e;let{color:a}=e;let{bold:f}=e;let{anim_style:_}=e;return t.$$set=t=>{'lec'in t&&l(6,n=t.lec),'blockƒƒsettings'in t&&l(7,i=t.blockƒƒsettings),'left'in t&&l(0,o=t.left),'title_top'in t&&l(1,c=t.title_top),'font_size'in t&&l(2,r=t.font_size),'color'in t&&l(8,a=t.color),'bold'in t&&l(3,f=t.bold),'anim_style'in t&&l(4,_=t.anim_style)},[o,c,r,f,_,s,n,i,a]}class Title extends t{constructor(t){super(),e(this,t,instance$3,create_fragment$3,l,{lec:6,"blockƒƒsettings":7,left:0,title_top:1,font_size:2,color:8,bold:3,anim_style:4})}}function create_fragment$2(t){let e;let l;let r;const a=t[4].default;const f=v(a,t,t[3],null);return{c(){e=n("div"),f&&f.c(),this.h()},l(t){e=s(t,"DIV",{class:!0,style:!0});var l=i(e);f&&f.l(l),l.forEach(o),this.h()},h(){c(e,"class"," svelte-1866dou"),c(e,"style",l="top: "+t[0].settings.top+"%; left: "+t[0].settings.left+"%; "+t[1]+";")},m(t,l){_(t,e,l),f&&f.m(e,null),r=!0},p(t,[n]){f&&f.p&&(!r||8&n)&&y(f,a,t,t[3],r?w(a,t[3],n,null):x(t[3]),null),(!r||3&n&&l!==(l="top: "+t[0].settings.top+"%; left: "+t[0].settings.left+"%; "+t[1]+";"))&&c(e,"style",l)},i(t){r||(z(f,t),r=!0)},o(t){F(f,t),r=!1},d(t){t&&o(e),f&&f.d(t)}}}function instance$2(t,e,l){let{$$slots:n={},$$scope:s}=e;let{lec:i}=e;let{block:o}=e;let{anim_style:c}=e;return t.$$set=t=>{'lec'in t&&l(2,i=t.lec),'block'in t&&l(0,o=t.block),'anim_style'in t&&l(1,c=t.anim_style),'$$scope'in t&&l(3,s=t.$$scope)},[o,c,i,s,n]}class Positionable extends t{constructor(t){super(),e(this,t,instance$2,create_fragment$2,l,{lec:2,block:0,anim_style:1})}}function create_if_block_2$1(t){let e;let l;let r;let a;let f;let p=t[3].default(t[1].settings.content,'')+"";let u;return{c(){e=n("div"),l=D("svg"),r=D("path"),a=j(),f=n("p"),u=g(p),this.h()},l(t){e=s(t,"DIV",{class:!0,style:!0});var n=i(e);l=H(n,"svg",{version:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0});var c=i(l);r=H(c,"path",{d:!0}),i(r).forEach(o),c.forEach(o),a=N(n),f=s(n,"P",{class:!0});var _=i(f);u=b(_,p),_.forEach(o),n.forEach(o),this.h()},h(){c(r,"d","M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558\n      s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024\n      l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506\n      c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017\n      l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"),c(l,"version","1.1"),c(l,"xmlns","http://www.w3.org/2000/svg"),c(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(l,"x","0px"),c(l,"y","0px"),c(l,"viewBox","0 0 55.867 55.867"),M(l,"enable-background","new 0 0 55.867 55.867"),M(l,"fill","currentColor"),c(l,"xml:space","preserve"),c(f,"class","text-base"),c(e,"class","relative"),M(e,"width","100px")},m(t,n){_(t,e,n),k(e,l),k(l,r),k(e,a),k(e,f),k(f,u)},p(t,e){2&e&&p!==(p=t[3].default(t[1].settings.content,'')+"")&&$(u,p)},d(t){t&&o(e)}}}function create_if_block_1$1(t){let e;let l=t[1].settings.content+"";let r;return{c(){e=n("div"),r=g(l),this.h()},l(t){e=s(t,"DIV",{class:!0});var n=i(e);r=b(n,l),n.forEach(o),this.h()},h(){c(e,"class","circle")},m(t,l){_(t,e,l),k(e,r)},p(t,e){2&e&&l!==(l=t[1].settings.content+"")&&$(r,l)},d(t){t&&o(e)}}}function create_if_block$1(t){let e;let l=t[1].settings.content+"";let r;return{c(){e=n("div"),r=g(l),this.h()},l(t){e=s(t,"DIV",{class:!0});var n=i(e);r=b(n,l),n.forEach(o),this.h()},h(){c(e,"class","square text-red-50")},m(t,l){_(t,e,l),k(e,r)},p(t,e){2&e&&l!==(l=t[1].settings.content+"")&&$(r,l)},d(t){t&&o(e)}}}function create_default_slot(t){let e;function select_block_type(t,e){return'square'==t[1].settings.shape?create_if_block$1:'circle'==t[1].settings.shape?create_if_block_1$1:'star'==t[1].settings.shape?create_if_block_2$1:void 0}let l=select_block_type(t);let n=l&&l(t);return{c(){n&&n.c(),e=V()},l(t){n&&n.l(t),e=V()},m(t,l){n&&n.m(t,l),_(t,e,l)},p(t,s){l===(l=select_block_type(t))&&n?n.p(t,s):(n&&n.d(1),n=l&&l(t),n&&(n.c(),n.m(e.parentNode,e)))},d(t){n&&n.d(t),t&&o(e)}}}function create_fragment$1(t){let e;let l;return e=new Positionable({props:{block:t[1],anim_style:t[2],lec:t[0],$$slots:{default:[create_default_slot]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p(t,[l]){const n={};2&l&&(n.block=t[1]),4&l&&(n.anim_style=t[2]),1&l&&(n.lec=t[0]),18&l&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function instance$1(t,e,l){let{lec:n}=e;const s=G(n);let{block:i={}}=e;let{anim_style:o}=e;return t.$$set=t=>{'lec'in t&&l(0,n=t.lec),'block'in t&&l(1,i=t.block),'anim_style'in t&&l(2,o=t.anim_style)},[n,i,o,s]}class Shape extends t{constructor(t){super(),e(this,t,instance$1,create_fragment$1,l,{lec:0,block:1,anim_style:2})}}function get_each_context(t,e,l){const n=t.slice();n[37]=e[l],n[40]=l;const s={first:0===n[40],index:n[40]+1,index0:n[40],last:n[40]===n[12].blocks.length-1,rindex:n[12].blocks.length-n[40],rindex0:n[12].blocks.length-n[40]-1,length:n[12].blocks.length};return n[38]=s,n}function create_if_block_4(t){let e;let l;return e=new Title({props:{anim_style:t[37].settings.anim_style,left:t[6],title_top:t[5],font_size:t[4],color:t[3],bold:t[2],animations:t[8],"blockƒƒsettings":t[1],"sectionƒƒblocks":t[7],lec:t[0]}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p(t,l){const n={};4096&l[0]&&(n.anim_style=t[37].settings.anim_style),64&l[0]&&(n.left=t[6]),32&l[0]&&(n.title_top=t[5]),16&l[0]&&(n.font_size=t[4]),8&l[0]&&(n.color=t[3]),4&l[0]&&(n.bold=t[2]),256&l[0]&&(n.animations=t[8]),2&l[0]&&(n.blockƒƒsettings=t[1]),128&l[0]&&(n.sectionƒƒblocks=t[7]),1&l[0]&&(n.lec=t[0]),e.$set(n)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function create_if_block_3(t){let e;let l;return{c(){e=n("img"),this.h()},l(t){e=s(t,"IMG",{loading:!0,src:!0,class:!0}),this.h()},h(){c(e,"loading","lazy"),r(e.src,l=t[37].settings.image)||c(e,"src",l),c(e,"class","svelte-strz53")},m(t,l){_(t,e,l)},p(t,n){4096&n[0]&&!r(e.src,l=t[37].settings.image)&&c(e,"src",l)},d(t){t&&o(e)}}}function create_if_block_2(t){let e;let l=(t[37].settings.content||'')+"";let n;return{c(){e=new B(!1),n=V(),this.h()},l(t){e=L(t,!1),n=V(),this.h()},h(){e.a=n},m(t,s){e.m(l,t,s),_(t,n,s)},p(t,n){4096&n[0]&&l!==(l=(t[37].settings.content||'')+"")&&e.p(l)},d(t){t&&o(n),t&&e.d()}}}function create_if_block_1(t){let e;let l;let n;function scrollvideo_keptFor_binding(e){t[23](e)}let s={block:t[37],keepFor:Q,anim_style:t[37].settings.anim_style,left:t[6],title_top:t[5],font_size:t[4],color:t[3],bold:t[2],animations:t[8],"blockƒƒsettings":t[1],"sectionƒƒblocks":t[7],lec:t[0]};return void 0!==t[11]&&(s.keptFor=t[11]),e=new Video({props:s}),h.push((()=>P(e,'keptFor',scrollvideo_keptFor_binding))),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){q(e,t,l),n=!0},p(t,n){const s={};4096&n[0]&&(s.block=t[37]),4096&n[0]&&(s.anim_style=t[37].settings.anim_style),64&n[0]&&(s.left=t[6]),32&n[0]&&(s.title_top=t[5]),16&n[0]&&(s.font_size=t[4]),8&n[0]&&(s.color=t[3]),4&n[0]&&(s.bold=t[2]),256&n[0]&&(s.animations=t[8]),2&n[0]&&(s.blockƒƒsettings=t[1]),128&n[0]&&(s.sectionƒƒblocks=t[7]),1&n[0]&&(s.lec=t[0]),!l&&2048&n[0]&&(l=!0,s.keptFor=t[11],C((()=>l=!1))),e.$set(s)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function create_if_block(t){let e;let l;return e=new Shape({props:{block:t[37],anim_style:t[37].settings.anim_style,left:t[6],title_top:t[5],font_size:t[4],color:t[3],bold:t[2],animations:t[8],"blockƒƒsettings":t[1],"sectionƒƒblocks":t[7],lec:t[0]}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){q(e,t,n),l=!0},p(t,l){const n={};4096&l[0]&&(n.block=t[37]),4096&l[0]&&(n.anim_style=t[37].settings.anim_style),64&l[0]&&(n.left=t[6]),32&l[0]&&(n.title_top=t[5]),16&l[0]&&(n.font_size=t[4]),8&l[0]&&(n.color=t[3]),4&l[0]&&(n.bold=t[2]),256&l[0]&&(n.animations=t[8]),2&l[0]&&(n.blockƒƒsettings=t[1]),128&l[0]&&(n.sectionƒƒblocks=t[7]),1&l[0]&&(n.lec=t[0]),e.$set(n)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function create_each_block(t){let e;let l;let n;let s;let i;let c;let r='title'==t[37].type&&create_if_block_4(t);let a='image'==t[37].type&&create_if_block_3(t);let f='text'==t[37].type&&create_if_block_2(t);let p='video'==t[37].type&&create_if_block_1(t);let u='shape'==t[37].type&&create_if_block(t);return{c(){r&&r.c(),e=j(),a&&a.c(),l=j(),f&&f.c(),n=j(),p&&p.c(),s=j(),u&&u.c(),i=V()},l(t){r&&r.l(t),e=N(t),a&&a.l(t),l=N(t),f&&f.l(t),n=N(t),p&&p.l(t),s=N(t),u&&u.l(t),i=V()},m(t,o){r&&r.m(t,o),_(t,e,o),a&&a.m(t,o),_(t,l,o),f&&f.m(t,o),_(t,n,o),p&&p.m(t,o),_(t,s,o),u&&u.m(t,o),_(t,i,o),c=!0},p(t,o){'title'==t[37].type?r?(r.p(t,o),4096&o[0]&&z(r,1)):(r=create_if_block_4(t),r.c(),z(r,1),r.m(e.parentNode,e)):r&&(Y(),F(r,1,1,(()=>{r=null})),S()),'image'==t[37].type?a?a.p(t,o):(a=create_if_block_3(t),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null),'text'==t[37].type?f?f.p(t,o):(f=create_if_block_2(t),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null),'video'==t[37].type?p?(p.p(t,o),4096&o[0]&&z(p,1)):(p=create_if_block_1(t),p.c(),z(p,1),p.m(s.parentNode,s)):p&&(Y(),F(p,1,1,(()=>{p=null})),S()),'shape'==t[37].type?u?(u.p(t,o),4096&o[0]&&z(u,1)):(u=create_if_block(t),u.c(),z(u,1),u.m(i.parentNode,i)):u&&(Y(),F(u,1,1,(()=>{u=null})),S())},i(t){c||(z(r),z(p),z(u),c=!0)},o(t){F(r),F(p),F(u),c=!1},d(t){r&&r.d(t),t&&o(e),a&&a.d(t),t&&o(l),f&&f.d(t),t&&o(n),p&&p.d(t),t&&o(s),u&&u.d(t),t&&o(i)}}}function create_fragment(t){let e;let l;let r;let a;let f;let p;let u;let d;let m=t[12].blocks;let h=[];for(let e=0;e<m.length;e+=1)h[e]=create_each_block(get_each_context(t,m,e));const out=t=>F(h[t],1,1,(()=>{h[t]=null}));return{c(){e=n("div"),l=n("div"),r=n("div");for(let t=0;t<h.length;t+=1)h[t].c();a=j(),f=n("div"),p=g(" "),this.h()},l(t){e=s(t,"DIV",{class:!0,style:!0});var n=i(e);l=s(n,"DIV",{class:!0});var c=i(l);r=s(c,"DIV",{class:!0});var _=i(r);for(let t=0;t<h.length;t+=1)h[t].l(_);_.forEach(o),c.forEach(o),a=N(n),f=s(n,"DIV",{class:!0,style:!0});var u=i(f);p=b(u," "),u.forEach(o),n.forEach(o),this.h()},h(){c(r,"class","animation-stage svelte-strz53"),c(l,"class","stage-container svelte-strz53"),c(f,"class","stage-placeholder"),M(f,"height",t[13]+Q+"px"),c(e,"class","animation-container svelte-strz53"),c(e,"style",u="--explode-gap: 1em; --explode-size-imbalance: 0%; --image-oversize: 1; "+t[14].join(';')+"; "+t[16].join(';')+"; "+t[15].join(';'))},m(n,s){_(n,e,s),k(e,l),k(l,r);for(let t=0;t<h.length;t+=1)h[t].m(r,null);t[24](r),k(e,a),k(e,f),k(f,p),t[25](e),d=!0},p(t,l){if(6655&l[0]){let e;for(m=t[12].blocks,e=0;e<m.length;e+=1){const n=get_each_context(t,m,e);h[e]?(h[e].p(n,l),z(h[e],1)):(h[e]=create_each_block(n),h[e].c(),z(h[e],1),h[e].m(r,null))}for(Y(),e=m.length;e<h.length;e+=1)out(e);S()}(!d||8192&l[0])&&M(f,"height",t[13]+Q+"px"),(!d||114688&l[0]&&u!==(u="--explode-gap: 1em; --explode-size-imbalance: 0%; --image-oversize: 1; "+t[14].join(';')+"; "+t[16].join(';')+"; "+t[15].join(';')))&&c(e,"style",u)},i(t){if(!d){for(let t=0;t<m.length;t+=1)z(h[t]);d=!0}},o(t){h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)F(h[t]);d=!1},d(l){l&&o(e),A(h,l),t[24](null),t[25](null)}}}let Q=5e3;function instance(t,e,l){let n;let s;let{lec:i}=e;let{"blockƒƒsettings":o}=e;let{bold:c}=e;let{color:r}=e;let{font_size:a}=e;let{title_top:f}=e;let{left:_}=e;const p={};let{"sectionƒƒblocks":u}=e;p.blocks=u;let{animations:d}=e;let g,b;p.blocks=p.blocks.map((t=>({...t,settings:{...t.settings,anim_style:d.filter((e=>e.target==t.settings.id)).reduce(((t,e)=>`${t}${e.anim_style}`),'')}})));let k=0;let $=0;let v=0;let y=0;let x=0;let w=0;let z=0;let F=0;const I=[];const T=[];m((()=>{document.querySelector('.page-content').addEventListener('scroll',(t=>{l(17,k=t.target.scrollTop)}))}));let q=[];function scrollvideo_keptFor_binding(t){x=t,l(11,x),l(9,g),l(10,b),l(17,k),l(19,v),l(20,y),l(21,w)}function div0_binding(t){h[t?'unshift':'push']((()=>{b=t,l(10,b)}))}function div3_binding(t){h[t?'unshift':'push']((()=>{g=t,l(9,g)}))}return t.$$set=t=>{'lec'in t&&l(0,i=t.lec),'blockƒƒsettings'in t&&l(1,o=t.blockƒƒsettings),'bold'in t&&l(2,c=t.bold),'color'in t&&l(3,r=t.color),'font_size'in t&&l(4,a=t.font_size),'title_top'in t&&l(5,f=t.title_top),'left'in t&&l(6,_=t.left),'sectionƒƒblocks'in t&&l(7,u=t.sectionƒƒblocks),'animations'in t&&l(8,d=t.animations)},t.$$.update=()=>{3804672&t.$$.dirty[0]&&g&&b&&(g.offsetTop,l(18,$=g.clientHeight),g.offsetTop,window.innerHeight,g.offsetTop,window.innerHeight,l(19,v=g.offsetTop-k<0),l(20,y=v?y:g.clientHeight),l(11,x=Math.abs(g.offsetTop-k)),g.offsetTop,l(21,w=(k+window.innerHeight-g.offsetTop)/(g.clientHeight+window.innerHeight)*100),l(21,w=w>0?w:0),l(22,F=w),l(13,z=b.clientHeight)),131584&t.$$.dirty[0]&&g&&l(11,x=g.offsetTop<k?-1*(g.offsetTop-k):0),4194560&t.$$.dirty[0]&&l(14,q=d.map((t=>{let e=(F-t.from)/(t.to-t.from);let l=t.valueFrom+(t.valueTo-t.valueFrom)*e;return l=l<t.valueFrom?t.valueFrom:l>t.valueTo?t.valueTo:Math.round(1e6*l)/1e6,`${t.variable}:${l}${t.unit||''}`})))},l(16,n=I.map(((t,e)=>`--item-${e}-width: ${t}px`))),l(15,s=T.map(((t,e)=>`--item-${e}-height: ${t}px`))),[i,o,c,r,a,f,_,u,d,g,b,x,p,z,q,s,n,k,$,v,y,w,F,scrollvideo_keptFor_binding,div0_binding,div3_binding]}class Scroll_animation extends t{constructor(t){super(),e(this,t,instance,create_fragment,l,{lec:0,"blockƒƒsettings":1,bold:2,color:3,font_size:4,title_top:5,left:6,"sectionƒƒblocks":7,animations:8},null,[-1,-1])}}export{Scroll_animation as default};