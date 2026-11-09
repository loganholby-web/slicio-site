import{C as e,S as t,k as n,w as r}from"./main-C9qCJZXj.js";import{T as i,d as a,l as o}from"./countdown-Dad8NOME.js";import{a as s,i as c,o as l,s as u}from"./sauces-DwWCZ0LF.js";[`(function(){`,`var w=window.slicioWeek=window.slicioWeek||{},f=null,b=null,l=false,h=document.documentElement;`,`w.menuDay=function(t){try{f=f||new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',hourCycle:'h23',year:'numeric',month:'numeric',day:'numeric',hour:'numeric',weekday:'short'});`,`var p={},a=f.formatToParts(new Date(t)),i,m;for(i=0;i<a.length;i++)p[a[i].type]=a[i].value;`,`m=Date.UTC(+p.year,+p.month-1,+p.day);if(p.weekday==='Sun'&&+p.hour%24>=12)m+=864e5;return new Date(m).toISOString().slice(0,10)}catch(e){return null}};`,`w.load=function(){if(!l){l=true;try{b=JSON.parse(document.getElementById('week-next').textContent)}catch(e){b=null}}return b};`,`w.shows=function(t){var n=w.load(),d;if(!n||!n.from)return false;d=w.menuDay(t==null?Date.now():t);return d!==null&&d>=n.from};`,`w.run=function(live,t){try{if(!w.shows(t))return false;`,`var n=b.parts,x=document.querySelectorAll('[data-wk]'),c=0,i,j,e,p,k,r;`,`for(i=0;i<x.length;i++){e=x[i];if(e.hasAttribute('data-wk-done'))continue;p=n[e.getAttribute('data-wk')];`,`if(p!=null){c++;if(typeof p==='string')p={html:p};if(p.html!=null)e.innerHTML=p.html;`,`if(p.attrs)for(k in p.attrs){if(p.attrs[k]===null)e.removeAttribute(k);else e.setAttribute(k,p.attrs[k])}`,`if(live){r=e.querySelectorAll('[data-reveal]');for(j=0;j<r.length;j++)r[j].classList.add('is-in')}}`,`e.setAttribute('data-wk-done','')}`,`if(!w.on){w.on=true;h.setAttribute('data-week','next')}`,`if(c&&live){try{window.dispatchEvent(new CustomEvent('${n}'))}catch(e){}}`,`return true}catch(e){return false}};`,`try{if(w.shows()){h.classList.add('wk-pending');document.addEventListener('DOMContentLoaded',function(){w.run(false);h.classList.remove('wk-pending')})}}catch(e){}`,`})();`].join(``);var d=e=>e.charAt(0).toUpperCase()+e.slice(1),f=`Member pick, slice of the month`;function p(e,t){if(!e.cfg.SHOW_PLANNED_PRICES)return null;let n=typeof t.price==`number`?t.price:e.menu.pricing.tiers[t.tier];return n?`Planned price $${n.toFixed(2)} (draft, not final)`:null}function m(e,t){if(e.kind===`sotm`&&e.winner)return{...m({kind:`recipe`,recipe:e.winner},t),pick:f};if(e.kind===`sotm`)return{id:o,kind:`sotm`,name:`Slice of the Month`,tagline:`Member vote`,story:`Picked by Crust Club members. The winner stays on the board all month.`,art:r(l()),contains:null,diet:[],pairs:[],price:null,style:``};if(e.kind===`missing`)return{id:e.id,kind:`missing`,name:`To be announced`,tagline:`Revealed Sunday at noon`,story:``,art:r(c()),contains:null,diet:[],pairs:[],price:null,style:``};let n=e.recipe;return{id:n.id,kind:`recipe`,name:n.name,tagline:n.tagline,story:n.story,art:r(s(n.visual,{seed:n.id})),contains:n.contains,diet:n.diet,pairs:n.pairs_with,price:p(t,n),style:n.style}}function h(e,n,r=`recipe`){return e===null?t`<div class="meta"><p class="allergens"><span class="allergens__label">${r===`sotm`?`Allergens depend on the winner`:`Allergens listed when revealed`}</span></p></div>`:t`<div class="meta">
${n.map(e=>t`<span class="tag ${e===`vegetarian`?`tag--veg`:``}">${d(e)}</span>`)}
<p class="allergens">${e.length?t`<span class="allergens__label">Contains</span>${e.map(e=>t`<span class="chip">${d(e)}</span>`)}`:t`<span class="allergens__label">No major allergens listed</span>`}</p>
</div>`}function g(e,n){let r=n.kind===`recipe`?u(e,n.id):null;return r?t`<a class="slice-link" href="${r}">${n.name}</a>`:t`${n.name}`}function _(e,n,r){return e.kind===`sotm`?t` data-sotm="${n}" data-sotm-place="${r}" data-sotm-at="${i(e.month,e.winner?.id??null)}"`:t``}function v(e,n,r){let i=m(e,r);return t`<li class="slot" style="--i:${n}" data-reveal${_(e,`lineup`,String(n))}>
<span class="slot__num" aria-hidden="true">0${n+1}</span>
<div class="slot__art">${i.art}</div>
${i.pick?t`<p class="slot__pick sotm-pick">${i.pick}</p>`:``}
<h3 class="slot__name">${g(r,i)}</h3>
<p class="slot__tag">${i.tagline}</p>
${h(i.contains,i.diet,i.kind)}
</li>`}function y(t){return e(t.menu.lineup.map((e,n)=>v(e,n,t)))}function b(t){return e(t.menu.lineup.map((e,n)=>T(e,`0${n+1}`,t)))}function x(t){return e(t.menu.anchors.map((e,n)=>T({kind:`recipe`,recipe:e},`A${n+1}`,t)))}function S(n){return e(n.menu.anchors.map((e,r)=>{let i=m({kind:`recipe`,recipe:e},n);return t`<article class="anchor__item" data-reveal style="--i:${r}">
<div class="anchor__art">${i.art}</div>
<div class="anchor__copy">
<h3 class="display-m anchor__name">${g(n,i)}</h3>
<p class="lead">${i.tagline}</p>
<p class="anchor__story">${i.story}</p>
${h(i.contains,i.diet)}
</div>
</article>`}))}var C=e=>e.isSample?`Sample lineup, week ${e.week}`:`Preview lineup, week ${e.week}`,w=e=>e.theme?t`<p class="lineup__theme">Theme: ${e.theme}</p>`:t``;function T(e,n,r){let i=m(e,r),o=i.pairs.map(e=>r.menu.saucesById.get(e)).filter(e=>!!e);return t`<li class="board-row" data-reveal${i.kind===`recipe`?t` data-recipe="${i.id}"`:``}${_(e,`board`,n)}>
<span class="board-row__num" aria-hidden="true">${n}</span>
<div class="board-row__art">${i.art}</div>
<div class="board-row__body">
${i.pick?t`<p class="board-row__pick sotm-pick">${i.pick}</p>`:``}
<h3 class="board-row__name">${g(r,i)}</h3>
<p class="board-row__tag">${i.tagline}</p>
${i.story?t`<p class="board-row__story">${i.story}</p>`:``}
${h(i.contains,i.diet,i.kind)}
${o.length?t`<p class="board-row__pairs"><span class="allergens__label">Goes with</span> ${a(o.map(e=>e.name))}</p>`:``}
${i.price?t`<p class="board-row__price">${i.price}</p>`:``}
</div>
</li>`}t`<div class="hp" aria-hidden="true"><label>Leave this field empty<input name="company" type="text" tabindex="-1" autocomplete="off"></label></div>`;export{C as a,g as c,b as i,m as l,S as n,v as o,T as r,y as s,x as t,w as u};