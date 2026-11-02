import{C as e,D as t,E as n,O as r,T as i,k as a,w as o}from"./main-BgyTxAe2.js";import{a as s,n as c,r as l,t as u}from"./sauces-MH4EYi3j.js";var d=(e,t)=>`${n(t)}${e.pricing.draft?` planned`:``}`;function f(t,n){return e`<li class="order-row" data-order-row>
<div class="order-row__art" aria-hidden="true">${i(s(n.visual,{seed:n.id}))}</div>
<div class="order-row__body">
<h3 class="order-row__name">${n.name}</h3>
<p class="order-row__tag">${n.tagline}</p>
<p class="order-row__price">${d(t,a(t,n))}</p>
<p class="allergens">${u(n.contains)}</p>
</div>
${c(`slice`,n.id,n.name,a(t,n))}
</li>`}function p(t,n,i){return e`<li class="order-row order-row--sauce" data-order-row style="--sauce:${n.color}">
<div class="order-row__art order-row__art--sauce" aria-hidden="true">${l(n,i)}</div>
<div class="order-row__body">
<h3 class="order-row__name">${n.name}${n.seasonal?e` <span class="tag">Seasonal</span>`:``}</h3>
<p class="order-row__tag">${n.short}</p>
<p class="order-row__price">${d(t,r(t))}</p>
<p class="allergens">${u(n.contains)}</p>
</div>
${c(`sauce`,n.id,n.name,r(t))}
</li>`}var m=e=>o(t(e).map(t=>f(e,t))),h=(e,t)=>o(e.sauces.map(n=>p(e,n,t)));function g(e,t){let n=(e,t)=>{for(let n of document.querySelectorAll(e))n.innerHTML=t};n(`[data-order-slices]`,m(e).toString()),n(`[data-order-sauces]`,h(e,t).toString())}export{g as drawOrderMenu};