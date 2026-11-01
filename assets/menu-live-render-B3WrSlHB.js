import{A as e,C as t,S as n,k as r,w as i}from"./main-CTkQJZVU.js";import{a,i as o,o as s,s as c}from"./sauces-D-szLh6B.js";var l=e=>e.charAt(0).toUpperCase()+e.slice(1);function u(e,t){if(!e.cfg.SHOW_PLANNED_PRICES)return null;let n=typeof t.price==`number`?t.price:e.menu.pricing.tiers[t.tier];return n?`Planned price $${n.toFixed(2)} (draft, not final)`:null}function d(e,t){if(e.kind===`sotm`)return{id:r,kind:`sotm`,name:`Slice of the Month`,tagline:`Member vote`,story:`Picked by Crust Club members. The winner stays on the board all month.`,art:i(s()),contains:null,diet:[],pairs:[],price:null,style:``};if(e.kind===`missing`)return{id:e.id,kind:`missing`,name:`To be announced`,tagline:`Revealed Sunday night`,story:``,art:i(o()),contains:null,diet:[],pairs:[],price:null,style:``};let n=e.recipe;return{id:n.id,kind:`recipe`,name:n.name,tagline:n.tagline,story:n.story,art:i(a(n.visual,{seed:n.id})),contains:n.contains,diet:n.diet,pairs:n.pairs_with,price:u(t,n),style:n.style}}function f(e,t,r=`recipe`){return e===null?n`<div class="meta"><p class="allergens"><span class="allergens__label">${r===`sotm`?`Allergens depend on the winner`:`Allergens listed when revealed`}</span></p></div>`:n`<div class="meta">
${t.map(e=>n`<span class="tag ${e===`vegetarian`?`tag--veg`:``}">${l(e)}</span>`)}
<p class="allergens">${e.length?n`<span class="allergens__label">Contains</span>${e.map(e=>n`<span class="chip">${l(e)}</span>`)}`:n`<span class="allergens__label">No major allergens listed</span>`}</p>
</div>`}function p(e,t){let r=t.kind===`recipe`?c(e,t.id):null;return r?n`<a class="slice-link" href="${r}">${t.name}</a>`:n`${t.name}`}function m(e,t,r){let i=d(e,r);return n`<li class="slot" style="--i:${t}" data-reveal>
<span class="slot__num" aria-hidden="true">0${t+1}</span>
<div class="slot__art">${i.art}</div>
<h3 class="slot__name">${p(r,i)}</h3>
<p class="slot__tag">${i.tagline}</p>
${f(i.contains,i.diet,i.kind)}
</li>`}function h(e){return t(e.menu.lineup.map((t,n)=>m(t,n,e)))}function g(e){return t(e.menu.lineup.map((t,n)=>x(t,`0${n+1}`,e)))}function _(e){return t(e.menu.anchors.map((t,n)=>x({kind:`recipe`,recipe:t},`A${n+1}`,e)))}function v(e){return t(e.menu.anchors.map((t,r)=>{let i=d({kind:`recipe`,recipe:t},e);return n`<article class="anchor__item" data-reveal style="--i:${r}">
<div class="anchor__art">${i.art}</div>
<div class="anchor__copy">
<h3 class="display-m anchor__name">${p(e,i)}</h3>
<p class="lead">${i.tagline}</p>
<p class="anchor__story">${i.story}</p>
${f(i.contains,i.diet)}
</div>
</article>`}))}var y=e=>e.isSample?`Sample lineup, week ${e.week}`:`Preview lineup, week ${e.week}`,b=e=>e.theme?n`<p class="lineup__theme">Theme: ${e.theme}</p>`:n``;function x(t,r,i){let a=d(t,i),o=a.pairs.map(e=>i.menu.saucesById.get(e)).filter(e=>!!e);return n`<li class="board-row" data-reveal${a.kind===`recipe`?n` data-recipe="${a.id}"`:``}>
<span class="board-row__num" aria-hidden="true">${r}</span>
<div class="board-row__art">${a.art}</div>
<div class="board-row__body">
<h3 class="board-row__name">${p(i,a)}</h3>
<p class="board-row__tag">${a.tagline}</p>
${a.story?n`<p class="board-row__story">${a.story}</p>`:``}
${f(a.contains,a.diet,a.kind)}
${o.length?n`<p class="board-row__pairs"><span class="allergens__label">Goes with</span> ${e(o.map(e=>e.name))}</p>`:``}
${a.price?n`<p class="board-row__price">${a.price}</p>`:``}
</div>
</li>`}n`<div class="hp" aria-hidden="true"><label>Leave this field empty<input name="company" type="text" tabindex="-1" autocomplete="off"></label></div>`;function S(e){let t={cfg:{SUPABASE_URL:`https://ryfkixeedzsusjilkbcv.supabase.co`,SUPABASE_ANON_KEY:`sb_publishable_CSJqPLz9NTRGRKtz6glsGw_HRm0Rk1M`,WAITLIST_FORM_URL:``,CATERING_FORM_URL:``,SITE_URL:`https://sliciopizza.com/`,APP_INSTALL_URL:``,APP_STORE_ID:`6822590650`,CONTACT_EMAIL:`sliciopizza@gmail.com`,SITE_FORMS:!1,EMAIL_SIGN_IN:!1,PASSWORD_SIGN_IN:!0,PASSWORD_RESET:!1,APPLE_WEB_SIGN_IN:!0,INDEXABLE:!0,UMAMI_WEBSITE_ID:`e21ee1cf-b9c6-4207-ae83-cb3e0c432fba`,SHOW_PLANNED_PRICES:!1,ORDERING:!1},menu:e},n=(e,t)=>{for(let n of document.querySelectorAll(`[data-live="${e}"]`)){n.innerHTML=t;for(let e of n.querySelectorAll(`[data-reveal]`))e.classList.add(`is-in`)}};for(let t of document.querySelectorAll(`[data-live="eyebrow"]`))t.textContent=y(e);n(`theme`,b(e).toString()),n(`lineup`,h(t).toString()),n(`board`,g(t).toString()),n(`anchors-home`,v(t).toString()),n(`anchors-menu`,_(t).toString())}export{S as drawMenu};