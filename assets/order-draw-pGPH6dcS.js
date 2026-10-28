import{C as e,D as t,E as n,O as r,S as i,T as a,w as o}from"./main-CKqt4bIc.js";import{a as s,n as c,r as l,t as u}from"./sauces-IZ0ow8lK.js";var d=(e,t)=>`${a(t)}${e.pricing.draft?` planned`:``}`;function f(e,t){return i`<li class="order-row" data-order-row>
<div class="order-row__art" aria-hidden="true">${o(s(t.visual,{seed:t.id}))}</div>
<div class="order-row__body">
<h3 class="order-row__name">${t.name}</h3>
<p class="order-row__tag">${t.tagline}</p>
<p class="order-row__price">${d(e,r(e,t))}</p>
<p class="allergens">${u(t.contains)}</p>
</div>
${c(`slice`,t.id,t.name,r(e,t))}
</li>`}function p(e,n,r){return i`<li class="order-row order-row--sauce" data-order-row style="--sauce:${n.color}">
<div class="order-row__art order-row__art--sauce" aria-hidden="true">${l(n,r)}</div>
<div class="order-row__body">
<h3 class="order-row__name">${n.name}${n.seasonal?i` <span class="tag">Seasonal</span>`:``}</h3>
<p class="order-row__tag">${n.short}</p>
<p class="order-row__price">${d(e,t(e))}</p>
<p class="allergens">${u(n.contains)}</p>
</div>
${c(`sauce`,n.id,n.name,t(e))}
</li>`}var m=t=>e(n(t).map(e=>f(t,e))),h=(t,n)=>e(t.sauces.map(e=>p(t,e,n)));function g(e,t){let n=(e,t)=>{for(let n of document.querySelectorAll(e))n.innerHTML=t};n(`[data-order-slices]`,m(e).toString()),n(`[data-order-sauces]`,h(e,t).toString())}export{g as drawOrderMenu};