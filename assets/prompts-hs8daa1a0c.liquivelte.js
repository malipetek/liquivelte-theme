import{SvelteComponent as e,init as i,safe_not_equal as t,element as l,claim_element as r,children as a,detach as s,attr as o,insert_hydration as m,noop as u,onMount as p}from'./liquivelte-svelte-hs532e1aa9.liquivelte.js';import{f7ready as v}from'./framework7-liquivelte-hs5d6b599e.liquivelte.js';import'./framework7-liquivelte-get-params-hs6b273664.liquivelte.js';import'./framework7-liquivelte-popup-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-view-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-router-context-provider-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-login-screen-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-sheet-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-popover-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-panel-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-utils-hs8daa1a0c.liquivelte.js';import'./framework7-liquivelte-params-list-hs8daa1a0c.liquivelte.js';function create_fragment(e){let i;return{c(){i=l("div"),this.h()},l(e){i=r(e,"DIV",{prompts:!0});var t=a(i);t.forEach(s),this.h()},h(){o(i,"prompts","")},m(e,t){m(e,i,t)},p:u,i:u,o:u,d(e){e&&s(i)}}}function instance(e,i,t){let{lec:l}=i;return p((()=>{v((()=>{}))})),e.$$set=e=>{'lec'in e&&t(0,l=e.lec)},[l]}class Prompts extends e{constructor(e){super(),i(this,e,instance,create_fragment,t,{lec:0})}}export{Prompts as default};