import{A as e,C as t,S as n,k as r,w as i}from"./main-BDyPc0Qy.js";import{a,i as o,o as s}from"./sauces-BHgj0D1E.js";var c=e=>e.charAt(0).toUpperCase()+e.slice(1);function l(e,t){if(!e.cfg.SHOW_PLANNED_PRICES)return null;let n=typeof t.price==`number`?t.price:e.menu.pricing.tiers[t.tier];return n?`Planned price $${n.toFixed(2)} (draft, not final)`:null}function u(e,t){if(e.kind===`sotm`)return{id:r,kind:`sotm`,name:`Slice of the Month`,tagline:`Member vote`,story:`Picked by Crust Club members. The winner stays on the board all month.`,art:i(s()),contains:null,diet:[],pairs:[],price:null,style:``};if(e.kind===`missing`)return{id:e.id,kind:`missing`,name:`To be announced`,tagline:`Revealed Sunday night`,story:``,art:i(o()),contains:null,diet:[],pairs:[],price:null,style:``};let n=e.recipe;return{id:n.id,kind:`recipe`,name:n.name,tagline:n.tagline,story:n.story,art:i(a(n.visual,{seed:n.id})),contains:n.contains,diet:n.diet,pairs:n.pairs_with,price:l(t,n),style:n.style}}function d(e,t,r=`recipe`){return e===null?n`<div class="meta"><p class="allergens"><span class="allergens__label">${r===`sotm`?`Allergens depend on the winner`:`Allergens listed when revealed`}</span></p></div>`:n`<div class="meta">
${t.map(e=>n`<span class="tag ${e===`vegetarian`?`tag--veg`:``}">${c(e)}</span>`)}
<p class="allergens">${e.length?n`<span class="allergens__label">Contains</span>${e.map(e=>n`<span class="chip">${c(e)}</span>`)}`:n`<span class="allergens__label">No major allergens listed</span>`}</p>
</div>`}function f(e,t,r){let i=u(e,r);return n`<li class="slot" style="--i:${t}" data-reveal>
<span class="slot__num" aria-hidden="true">0${t+1}</span>
<div class="slot__art">${i.art}</div>
<h3 class="slot__name">${i.name}</h3>
<p class="slot__tag">${i.tagline}</p>
${d(i.contains,i.diet,i.kind)}
</li>`}function p(e){return t(e.menu.lineup.map((t,n)=>f(t,n,e)))}function m(e){return t(e.menu.lineup.map((t,n)=>y(t,`0${n+1}`,e)))}function h(e){return t(e.menu.anchors.map((t,n)=>y({kind:`recipe`,recipe:t},`A${n+1}`,e)))}function g(e){return t(e.menu.anchors.map((t,r)=>{let i=u({kind:`recipe`,recipe:t},e);return n`<article class="anchor__item" data-reveal style="--i:${r}">
<div class="anchor__art">${i.art}</div>
<div class="anchor__copy">
<h3 class="display-m anchor__name">${i.name}</h3>
<p class="lead">${i.tagline}</p>
<p class="anchor__story">${i.story}</p>
${d(i.contains,i.diet)}
</div>
</article>`}))}var _=e=>e.isSample?`Sample lineup, week ${e.week}`:`Preview lineup, week ${e.week}`,v=e=>e.theme?n`<p class="lineup__theme">Theme: ${e.theme}</p>`:n``;function y(t,r,i){let a=u(t,i),o=a.pairs.map(e=>i.menu.saucesById.get(e)).filter(e=>!!e);return n`<li class="board-row" data-reveal${a.kind===`recipe`?n` data-recipe="${a.id}"`:``}>
<span class="board-row__num" aria-hidden="true">${r}</span>
<div class="board-row__art">${a.art}</div>
<div class="board-row__body">
<h3 class="board-row__name">${a.name}</h3>
<p class="board-row__tag">${a.tagline}</p>
${a.story?n`<p class="board-row__story">${a.story}</p>`:``}
${d(a.contains,a.diet,a.kind)}
${o.length?n`<p class="board-row__pairs"><span class="allergens__label">Goes with</span> ${e(o.map(e=>e.name))}</p>`:``}
${a.price?n`<p class="board-row__price">${a.price}</p>`:``}
</div>
</li>`}n`<div class="hp" aria-hidden="true"><label>Leave this field empty<input name="company" type="text" tabindex="-1" autocomplete="off"></label></div>`;function b(e){let t={cfg:{SUPABASE_URL:`https://ryfkixeedzsusjilkbcv.supabase.co`,SUPABASE_ANON_KEY:`sb_publishable_CSJqPLz9NTRGRKtz6glsGw_HRm0Rk1M`,WAITLIST_FORM_URL:``,CATERING_FORM_URL:``,SITE_URL:`https://sliciopizza.com/`,APP_INSTALL_URL:``,CONTACT_EMAIL:`sliciopizza@gmail.com`,SITE_FORMS:!1,EMAIL_SIGN_IN:!1,PASSWORD_SIGN_IN:!0,PASSWORD_RESET:!1,APPLE_WEB_SIGN_IN:!0,INDEXABLE:!0,UMAMI_WEBSITE_ID:`e21ee1cf-b9c6-4207-ae83-cb3e0c432fba`,SHOW_PLANNED_PRICES:!1,ORDERING:!1},menu:e},n=(e,t)=>{for(let n of document.querySelectorAll(`[data-live="${e}"]`)){n.innerHTML=t;for(let e of n.querySelectorAll(`[data-reveal]`))e.classList.add(`is-in`)}};for(let t of document.querySelectorAll(`[data-live="eyebrow"]`))t.textContent=_(e);n(`theme`,v(e).toString()),n(`lineup`,p(t).toString()),n(`board`,m(t).toString()),n(`anchors-home`,g(t).toString()),n(`anchors-menu`,h(t).toString())}export{b as drawMenu};