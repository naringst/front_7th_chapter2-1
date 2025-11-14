(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_7th_chapter2-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=`
  <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="/404 페이지를 찾을 수 없습니다/">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
        </filter>
      </defs>
      
      <!-- 404 Numbers -->
      <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
      
      <!-- Icon decoration -->
      <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
      <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
      <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
      <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
      
      <!-- Message -->
      <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
      
      <!-- Subtle bottom accent -->
      <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
    </svg>
    
    <a href="#" data-action="navigate-home" class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer">홈으로</a>
  </div>
`;function a(e){let t={...e},n=[],r=()=>t,i=e=>{t={...t,...e},n.forEach(e=>e(t))},a=e=>(n.push(e),()=>{let t=n.indexOf(e);t>-1&&n.splice(t,1)});return{getState:r,setState:i,subscribe:a}}const o=`shopping_cart`,s=()=>{try{let e=localStorage.getItem(o);if(e){let t=JSON.parse(e);return Array.isArray(t)?{items:t}:t&&Array.isArray(t.items)?{items:t.items}:{items:[]}}}catch(e){console.error(`Failed to load cart state from localStorage:`,e)}return{items:[]}},c=e=>{try{localStorage.setItem(o,JSON.stringify(e))}catch(e){console.error(`Failed to save cart state to localStorage:`,e)}},l=a(s());l.subscribe(e=>{c(e)});const u=()=>{let e=l.getState().items,t=Array.isArray(e)?e.length:0;return`
        <button id="cart-icon-btn" data-action="cart-icon" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
          </svg>
            ${t>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ${t}
                </span>`:``}
        </button>`},ee=()=>`  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-900">
          <a href="#" data-action="navigate-home" class="cursor-pointer">쇼핑몰</a>
        </h1>
        <div class="flex items-center space-x-2" data-cart-icon>
          ${u()}
        </div>
      </div>
    </div>
  </header>`,d=()=>{let e=new Date().getFullYear();return` 
    <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© ${e} 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
  
  `},f=({children:e})=>`
    <div class="min-h-screen bg-gray-50"> 
  
  ${ee()}
    <main class="max-w-md mx-auto px-4 py-4" id='modal-root'>
  ${e}
  </main>
  ${d()}
  
  
  </div>
  `,te=()=>f({children:i});function ne(e,t){return e.path===t}function re(e,t){if(!e.path.includes(`:`))return!1;let n=RegExp(`^`+e.path.replace(/:\w+/g,`[^/]+`)+`$`);return n.test(t)}function p(e,t){let n=e.split(`/`).filter(e=>e.startsWith(`:`)).map(e=>e.slice(1)),r=t.split(`/`).slice(-n.length);return Object.fromEntries(n.map((e,t)=>[e,r[t]]))}function m(e){let t=`/front_7th_chapter2-1/`,n=()=>{let e=window.location.pathname;return t===`/`?e:e.replace(t,`/`)},r=t=>e.find(e=>ne(e,t))||e.find(e=>re(e,t)),i=(e,t)=>e.path.includes(`:`)?p(e.path,t):{},a=()=>{let e=document.querySelector(`#root`);e&&(e.innerHTML=te())},o=async(e,t)=>{let n=document.querySelector(`#root`);if(!n)return;let r=e.element();await r.mount({params:t},n)},s=async()=>{let e=n(),t=r(e);if(!t){a();return}let s=i(t,e);await o(t,s)},c=()=>{window.addEventListener(`popstate`,s),s()},l=e=>{let n=t+e.replace(/^\//,``);window.history.pushState({},``,n),s()};return{initRouter:c,navigateTo:l}}const h=()=>`    <!-- 상품 목록으로 이동 -->
      <div class="mb-6">
        <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
          hover:bg-gray-200 transition-colors go-to-product-list">
          상품 목록으로 돌아가기
        </button>
      </div>`,g=({category1:e,category2:t})=>`
       <nav class="mb-4">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <a href="#" data-action="navigate-home" class="hover:text-blue-600 transition-colors cursor-pointer">홈</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link" data-action="navigate-category1" data-category1="${e}">
            ${e}
          </button>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link" data-action="navigate-category2" data-category1="${e}" data-category2="${t}">
            ${t}
          </button>
        </div>
      </nav> `,ie=()=>`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
          </div>
          <div class="flex items-center space-x-2" data-cart-icon>
            ${u()}
          </div>
        </div>
    </div>
  </header>`,ae=({image:e,title:t})=>`
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img src=${e} alt=${t} class="w-full h-full object-cover product-detail-image">
        </div>`,oe=`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>`,se=`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>`,ce=({rating:e,reviewCount:t})=>{let n=5-e;return`       
            <div class="flex items-center mb-3">
              <div class="flex items-center">
               ${oe.repeat(e)}             
               ${se.repeat(n)}   
              </div>
              <span class="ml-2 text-sm text-gray-600">${e}.0 (${t}개 리뷰)</span>
            </div>`},le=({price:e})=>` <div class="mb-4">
              <span class="text-2xl font-bold text-blue-600">${e.toLocaleString()}원</span>
            </div>`,ue=({stock:e})=>` <div class="text-sm text-gray-600 mb-4">
              재고 ${e}개
            </div>`,de=({description:e})=>` <div class="text-sm text-gray-700 leading-relaxed mb-6">
              ${e}
            </div>`,fe=()=>`
            <div class="flex items-center">
              <button id="quantity-decrease" data-action="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                 rounded-l-md bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <input type="number" id="quantity-input" value="1" min="1" max="107" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <button id="quantity-increase" data-action="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                 rounded-r-md bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>`,pe=({product:e})=>`<button id="add-to-cart-btn" 
               data-action="add-to-cart-detail"
               data-product-id="${e.productId}"
               data-product-title="${e.title}"
               data-product-image="${e.image}"
               data-product-lprice="${e.lprice}"
               class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
               hover:bg-blue-700 transition-colors font-medium">
            장바구니 담기
          </button>`,me=({product:e})=>`   
      <!-- 상품 상세 정보 -->
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <!-- 상품 이미지 -->
        <div class="p-4">
        ${ae({image:e.image,title:e.title})}
          <!-- 상품 정보 -->
          <div>
            <p class="text-sm text-gray-600 mb-1">${e.maker||e.brand}</p>
            <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
            ${ce({rating:e.rating,reviewCount:e.reviewCount})}
            ${le({price:e.lprice})}
            ${ue({stock:e.stock})}
            ${de({description:e.description})}
          </div>
        </div>
        <!-- 수량 선택 및 액션 -->
        <div class="border-t border-gray-200 p-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-900">수량</span>
            ${fe()}
          </div>
          ${pe({product:e})}
        </div>
      </div>`,he=()=>`    <!-- 관련 상품 -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
          <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-2 gap-3 responsive-grid">
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-action="related-product" data-product-id="86940857379">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg" alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이" class="w-full h-full object-cover" loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이</h3>
              <p class="text-sm font-bold text-blue-600">230원</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-action="related-product" data-product-id="82094468339">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="https://shopping-phinf.pstatic.net/main_8209446/82094468339.4.jpg" alt="실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제" class="w-full h-full object-cover" loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제</h3>
              <p class="text-sm font-bold text-blue-600">280원</p>
            </div>
          </div>
        </div>
      </div>`;async function _(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function ge(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function _e(){let e=await fetch(`/api/categories`);return await e.json()}async function ve(e){let[t,n]=await Promise.all([_({limit:e.limit,search:e.search,category1:e.category1,category2:e.category2,current:e.current,sort:e.sort}),_e()]);return{products:t.products,pagination:t.pagination,categories:n}}async function ye(e){let t=await ge(e.id);return{product:t}}function v({template:e,setup:t,mounted:n}){let r=(t={},n=!1,r=null)=>e({...t,loading:n,error:r}),i=async(e={},i)=>{if(!i)return;let a=r(e,!0,null);i.innerHTML=a;let o={},s=null;if(t)try{o=await t(e)}catch(e){s=e}let c=r({...e,...o},!1,s);i.innerHTML=c,n&&n()};return{render:r,mount:i}}function be(e,t=`data-action`){return n=>{let r=n.target.closest(`[${t}]`);if(!r)return;let i=r.dataset.action;!i||!e[i]||e[i](n,r)}}function y(e,t,n=document,r=`data-action`){let i=be(t,r);return n.addEventListener(e,i),()=>{n.removeEventListener(e,i)}}const xe=`  <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>`;let b=null;function x(){let e=document.getElementById(`toast`);if(!e)return;b&&clearTimeout(b),e.innerHTML=`
    <div class="animate-slide-up">
      ${xe}
    </div>
  `;let t=document.getElementById(`toast-close-btn`);t&&t.addEventListener(`click`,S),b=setTimeout(()=>{S()},3e3)}function S(){let e=document.getElementById(`toast`);if(!e)return;let t=e.firstElementChild;t&&(t.classList.remove(`animate-slide-up`),t.classList.add(`animate-slide-down`),setTimeout(()=>{e.innerHTML=``},300)),b&&(clearTimeout(b),b=null)}function C(e,t,n=1){let r=l.getState(),i=Array.isArray(r.items)?r.items:[],a=i.find(t=>t.productId===e);a?l.setState({items:i.map(t=>t.productId===e?{...t,quantity:t.quantity+n}:t)}):l.setState({items:[...i,{productId:e,quantity:n,title:t.title,image:t.image,lprice:t.lprice}]}),x()}function w(e){let t=l.getState().items;l.setState({items:t.map(t=>t.productId===e?{...t,quantity:t.quantity+1}:t)})}function T(e){let t=l.getState().items;l.setState({items:t.map(t=>t.productId===e?{...t,quantity:Math.max(1,t.quantity-1)}:t).filter(e=>e.quantity>0)})}function E(e){let t=l.getState().items;l.setState({items:t.filter(t=>t.productId!==e)})}function D(e){let t=l.getState().items;l.setState({items:t.filter(t=>!e.includes(t.productId))})}function O(){l.setState({items:[]})}function k(e={},t=!0){let n=new URLSearchParams(window.location.search);return Object.entries(e).forEach(([e,t])=>{t==null||t===``?n.delete(e):n.set(e,t)}),t&&n.set(`current`,`1`),n.toString()}function A(e={},t=!0){let n=k(e,t);$.navigateTo(`/?${n}`)}function j(e){$.navigateTo(e)}function M(e){j(`/product/${e}`)}function Se(e){let t=e.closest(`.product-card`);if(!t)return;let n=t.dataset.productId;n&&M(n)}function Ce(e){let t=e.dataset.productId,n=e.dataset.productTitle,r=e.dataset.productImage,i=e.dataset.productLprice;!t||!n||!r||!i||C(t,{title:n,image:r,lprice:i},1)}function we(e){let t=e.dataset.productId,n=e.dataset.productTitle,r=e.dataset.productImage,i=e.dataset.productLprice,a=document.querySelector(`#quantity-input`),o=a&&parseInt(a.value)||1;!t||!n||!r||!i||C(t,{title:n,image:r,lprice:i},o)}function Te(){let e=document.querySelector(`#quantity-input`);if(!e)return;let t=Number(e.value);e.value=t+1}function Ee(){let e=document.querySelector(`#quantity-input`);if(!e)return;let t=Number(e.value);t>1&&(e.value=t-1)}function N(e,t,n={}){let r={[e]:t};e===`category1`&&(r.category2=null),A(r,n.resetPage!==!1)}function De(e){N(`search`,e)}function Oe(e){N(`sort`,e)}function ke(e){N(`limit`,e)}function P(e){N(`category1`,e)}function Ae(e){N(`category2`,e)}function je(e){let t={};e===`reset`?(t.category1=null,t.category2=null):e===`category1`&&(t.category2=null),A(t)}let F=[];function Me(){F.forEach(e=>e()),F=[];let e={"quantity-increase":()=>{Te()},"quantity-decrease":()=>{Ee()},"add-to-cart-detail":(e,t)=>{we(t)},"related-product":(e,t)=>{let n=t.dataset.productId;n&&M(n)},"navigate-category1":(e,t)=>{let n=t.dataset.category1;n&&P(n)},"navigate-category2":(e,t)=>{let n=t.dataset.category1,r=t.dataset.category2;n&&r&&A({category1:n,category2:r})}};F.push(y(`click`,e))}const I=({items:e=[]})=>{let t=e.reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0);return`  
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <!-- 총 금액 -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-900">총 금액</span>
          <span class="text-xl font-bold text-blue-600">${t.toLocaleString()}원</span>
        </div>
        <!-- 액션 버튼들 -->
        <div class="space-y-2">
          <button id="cart-modal-remove-selected-btn" data-action="cart-remove-selected" class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                     hover:bg-red-700 transition-colors text-sm">
            선택한 상품 삭제
          </button>
          <div class="flex gap-2">
            <button id="cart-modal-clear-cart-btn" data-action="cart-clear" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                     hover:bg-gray-700 transition-colors text-sm">
              전체 비우기
            </button>
            <button id="cart-modal-checkout-btn" data-action="cart-checkout" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                     hover:bg-blue-700 transition-colors text-sm">
              구매하기
            </button>
          </div>
        </div>
      </div>`},Ne=({count:e})=>`    <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h2 class="text-lg font-bold text-gray-900 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
          </svg>
          장바구니
          <span class="text-sm font-normal text-gray-600 ml-1">(${e})</span>
        </h2>
        <button id="cart-modal-close-btn" data-action="cart-modal-close" class="text-gray-400 hover:text-gray-600 p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>`,Pe=({item:e})=>{let{productId:t,title:n,image:r,lprice:i,quantity:a}=e,o=parseInt(i)*a;return` 
    <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${t}">
              <!-- 선택 체크박스 -->
        <label class="flex items-center mr-3">
                <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
              focus:ring-blue-500" data-action="cart-item-checkbox" data-product-id="${t}">
              </label>
              <!-- 상품 이미지 -->
              <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                <img src="${r}" alt="${n}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${t}">
              </div>
              <!-- 상품 정보 -->
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${t}">
                  ${n}
                </h4>
                <p class="text-sm text-gray-600 mt-1">
                  ${parseInt(i).toLocaleString()}원
                </p>
                <!-- 수량 조절 -->
                <div class="flex items-center mt-2">
                  <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
               border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-action="cart-quantity-decrease" data-product-id="${t}">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <input type="number" value="${a}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
              border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${t}">
                  <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
               border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-action="cart-quantity-increase" data-product-id="${t}">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <!-- 가격 및 삭제 -->
              <div class="text-right ml-3">
                <p class="text-sm font-medium text-gray-900">
                  ${o.toLocaleString()}원
                </p>
                <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-action="cart-item-remove" data-product-id="${t}">
                  삭제
                </button>
              </div>
            </div>`},Fe=()=>`
  <div class="flex-1 flex items-center justify-center p-8">
    <div class="text-center">
      <div class="text-gray-400 mb-4">
        <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
      <p class="text-gray-600">원하는 상품을 담아보세요!</p>
    </div>
  </div>
`,Ie=({count:e})=>`     
        <div class="p-4 border-b border-gray-200 bg-gray-50">
          <label class="flex items-center text-sm text-gray-700">
            <input type="checkbox" id="cart-modal-select-all-checkbox" data-action="cart-select-all" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
            전체선택 (${e}개)
          </label>
        </div>`,Le=({items:e})=>e.map(e=>Pe({item:e})).join(``),Re=({items:e})=>`
      <div class="flex flex-col max-h-[calc(90vh-120px)]">
          ${Ie({count:e.length})}
        <!-- 아이템 목록 -->
        <div class="flex-1 overflow-y-auto">
          <div class="p-4 space-y-4">
              ${Le({items:e})}
          </div>
        </div>
      </div>`,L=({items:e=[]})=>e.length?Re({items:e}):Fe(),ze=({items:e=[]}={})=>`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <!-- 모달 컨테이너 -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          ${Ne({count:e.length})}
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]" data-cart-modal-content>
            ${L({items:e})}
            ${e.length>0?I({items:e}):``}
          </div>
        </div>
      </div>
    </div>
  `;let R=null,z=[];function B(){z.forEach(e=>e()),z=[];let e=document.querySelector(`.cart-modal`);if(!e)return;let t={"cart-quantity-increase":(e,t)=>{let n=t.dataset.productId;n&&w(n)},"cart-quantity-decrease":(e,t)=>{let n=t.dataset.productId;n&&T(n)},"cart-item-remove":(e,t)=>{let n=t.dataset.productId;n&&E(n)},"cart-remove-selected":()=>{let e=document.querySelectorAll(`.cart-item-checkbox:checked`),t=Array.from(e).map(e=>e.dataset.productId);D(t)},"cart-clear":()=>{O()},"cart-checkout":()=>{console.log(`구매하기 클릭`)},"cart-modal-close":()=>{V()}},n={"cart-select-all":(e,t)=>{let n=document.querySelectorAll(`.cart-item-checkbox`);n.forEach(e=>{e.checked=t.checked})},"cart-item-checkbox":()=>{let e=document.querySelectorAll(`.cart-item-checkbox`),t=document.querySelectorAll(`.cart-item-checkbox:checked`).length,n=document.getElementById(`cart-modal-select-all-checkbox`);n&&(n.checked=t===e.length&&e.length>0)}};z.push(y(`click`,t,e)),z.push(y(`change`,n,e));let r=e.querySelector(`.cart-modal-overlay`);if(r){let e=e=>{e.target===r&&V()};r.addEventListener(`click`,e),z.push(()=>r.removeEventListener(`click`,e))}let i=e=>{e.key===`Escape`&&V()};document.addEventListener(`keydown`,i),z.push(()=>document.removeEventListener(`keydown`,i))}function Be(){let e=document.querySelector(`[data-cart-modal-content]`);if(!e)return;let{items:t}=l.getState();e.innerHTML=`
    ${L({items:t})}
    ${t.length>0?I({items:t}):``}
  `,B()}function Ve(){if(document.querySelector(`.cart-modal`))return;let e=document.getElementById(`root`);if(!e)return;let t=e.querySelector(`footer`),n=ze({items:l.getState().items});t&&t.parentElement?t.insertAdjacentHTML(`beforebegin`,n):e.insertAdjacentHTML(`beforeend`,n);let r=document.querySelector(`.cart-modal`);r&&r.offsetHeight,He()}function He(){B(),document.body.style.overflow=`hidden`,R&&R(),R=l.subscribe(()=>{Be();let e=document.querySelector(`[data-cart-icon]`);e&&(e.innerHTML=u())})}function V(){R&&(R(),R=null),z.forEach(e=>e()),z=[];let e=document.querySelector(`.cart-modal`);e&&e.remove(),document.body.style.overflow=``}let H=null;function Ue(){H&&H(),H=l.subscribe(()=>{let e=document.querySelector(`[data-cart-icon]`);e&&(e.innerHTML=u())})}let U=[];function W(){U.forEach(e=>e()),U=[];let e={"cart-icon":()=>{Ve()},"navigate-home":e=>{e.preventDefault(),$.navigateTo(`/`)}};U.push(y(`click`,e,document)),Ue()}const We=({loading:e=!0,product:t=null})=>`
    <div class="min-h-screen bg-gray-50">
      ${ie()}
      <main class="max-w-md mx-auto px-4 py-4">
      ${e?`
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      `:`
        ${g({category1:t.category1,category2:t.category2})}
        ${me({product:t})}
        ${h()}
        ${he()}
      `}
      </main>
      ${d()}
    </div>
`,Ge=async e=>await ye(e.params||e),Ke=()=>v({template:We,setup:Ge,mounted:()=>{Me(),W()}}),qe=`          
<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
  <div class="aspect-square bg-gray-200"></div>
  <div class="p-3">
    <div class="h-4 bg-gray-200 rounded mb-2"></div>
    <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
    <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div class="h-8 bg-gray-200 rounded"></div>
  </div>
</div>`,G=({product:e})=>`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
                 data-product-id="${e.productId}">
              <!-- 상품 이미지 -->
              <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image" data-action="product-click">
                <img src="${e.image}"
                     alt="${e.title}"
                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                     loading="lazy">
              </div>
              <!-- 상품 정보 -->
              <div class="p-3">
                <div class="cursor-pointer product-info mb-3" data-action="product-click">
                  <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                  ${e.title}
                  </h3>
                  <p class="text-xs text-gray-500 mb-2">${e.brand||e.maker}</p>
                  <p class="text-lg font-bold text-gray-900">
                  ${parseInt(e.lprice).toLocaleString()}원
                  </p>
                </div>
                <!-- 장바구니 버튼 -->
                <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                       hover:bg-blue-700 transition-colors add-to-cart-btn" 
                       data-action="add-to-cart"
                       data-product-id="${e.productId}"
                       data-product-title="${e.title}"
                       data-product-image="${e.image}"
                       data-product-lprice="${e.lprice}">
                  장바구니 담기
                </button>
              </div>
            </div>`,Je=({error:e=null})=>{let t=e?.message||`Failed to fetch`;return`<div class="text-center py-12">
        <div class="text-red-500 mb-4">
          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">오류가 발생했습니다</h3>
        <p class="text-gray-600 mb-4">${t}</p>
        <button id="retry-btn" data-action="retry-products" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          다시 시도
        </button>
      </div>`},Ye=`
        <div class="text-center py-4">
          <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
          </div>
        </div>`,Xe=({loading:e,products:t=[],pagination:n={total:0,page:1,totalPages:1},error:r=null})=>{if(r)return`
      <div class="mb-6">
        ${Je({error:r})}
      </div>
    `;let i=n.page<n.totalPages,a=e&&t.length>0,o=e&&t.length===0;return`   
    <div class="mb-6">
      <div>
        <!-- 상품 그리드 -->
        ${o?` <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
                ${qe.repeat(8)}
                </div>  
                 ${Ye}`:` 
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${n.total}개</span>의 상품
            </div>
        
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${t.map(e=>G({product:e})).join(``)}
        </div>
        
        <!-- Intersection Observer Sentinel (로딩 중이 아닐 때만) -->
        ${i&&!a?`<div id="infinite-scroll-sentinel" style="height: 40px;"></div>`:``}
        
        <!-- 로딩 UI -->
        ${a||i?`<div class="text-center py-4">
          <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm text-gray-600">${a?`상품을 불러오는 중...`:`더 보기...`}</span>
          </div>
        </div>`:`<div class="text-center py-4 text-sm text-gray-500">
                모든 상품을 확인했습니다
              </div>`}
        
        `}
       
      </div>
    </div>`},Ze=({search:e=``})=>` <div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" data-action="filter-search" placeholder="상품명을 검색해보세요..." value="${e}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>`,Qe=({limit:e})=>`<!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select" data-action="filter-limit"
                  class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="10" ${e==10?`selected`:``}>
              10개
            </option>
            <option value="20" ${e==20?`selected`:``}>
              20개
            </option>
            <option value="50" ${e==50?`selected`:``}>
              50개
            </option>
            <option value="100" ${e==100?`selected`:``}>
              100개
            </option>
          </select>
        </div>`,$e=({sort:e})=>`<!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
              <select id="sort-select" data-action="filter-sort" class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" ${e==`price_asc`?`selected`:``}>가격 낮은순</option>
              <option value="price_desc" ${e==`price_desc`?`selected`:``}>가격 높은순</option>
              <option value="name_asc" ${e==`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${e==`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>`,et=()=>`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`,tt=({category1:e=``,category2:t=``})=>{let n=[{label:`전체`,action:`reset`},e&&{label:e,action:`category1`,data:e},t&&{label:t,action:`category2`,data:t}].filter(Boolean);return n.map((e,t)=>{let r=t===n.length-1,i=r?`text-xs text-gray-600 cursor-default`:`text-xs hover:text-blue-800 hover:underline`,a=e.data?`data-category1="${e.data}"`:``;return`
        ${t>0?`<span class="text-xs text-gray-500">&gt;</span>`:``}
        <button data-action="breadcrumb" data-breadcrumb="${e.action}" ${a} class="${i}">
          ${e.label}
        </button>
      `}).join(``)},K=({category1:e})=>` 
    ${e.map(e=>`
      <button data-action="filter-category1" data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
        ${e}
      </button>
    `).join(``)}
  `,nt=({category2List:e=[],selectedCategory2:t=``})=>!e||e.length===0?``:`
    ${e.map(e=>{let n=e===t,r=n?`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-blue-100 border-blue-300 text-blue-800`:`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
      <button data-action="filter-category2" data-category2="${e}" class="${r}">
        ${e}
      </button>
    `}).join(``)}
  `,rt=({loading:e,categories:t,limit:n,search:r=``,sort:i=`price_asc`,category1:a=``,category2:o=``})=>{let s=Object.keys(t),c=a?Object.keys(t[a]||{}):[];return`   
      <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      ${Ze({search:r})}
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            ${tt({category1:a,category2:o})}
          </div>
          ${e?`    
            <!-- 카테고리 로딩 -->
            <div class="flex flex-wrap gap-2">
              ${et()}
            </div>`:a?`
               <!-- Category2 표시 (Category1 선택됨) -->
               <div class="flex flex-wrap gap-2">
                 ${nt({category2List:c,selectedCategory2:o})}
               </div>`:`
               <!-- Category1 표시 (초기 상태) -->
               <div class="flex flex-wrap gap-2">
                 ${K({category1:s})}
               </div>`}
     
        </div>
       
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          ${Qe({limit:n})}
          ${$e({sort:i})}
        </div>
      </div>
    </div> 
    `};let q=null,J=!1;function Y(){q&&(q.disconnect(),q=null),J=!1;let e=document.querySelector(`#infinite-scroll-sentinel`);e&&(q=new IntersectionObserver(async t=>{t.forEach(async t=>{if(t.isIntersecting&&!J){J=!0;let t=new URLSearchParams(window.location.search),n=parseInt(t.get(`current`))||1,r=n+1;q.disconnect(),q=null;let i=document.querySelector(`#products-grid`);if(i){let t=document.createElement(`div`);t.className=`text-center py-4 text-gray-600`,t.id=`infinite-scroll-loading`,t.textContent=`상품을 불러오는 중...`,i.parentElement.insertBefore(t,e)}try{let n=await _({limit:parseInt(t.get(`limit`))||20,search:t.get(`search`)||``,category1:t.get(`category1`)||``,category2:t.get(`category2`)||``,current:r,sort:t.get(`sort`)||`price_asc`});if(i&&n.products&&n.products.length>0){let e=n.products.map(e=>G({product:e})).join(``);i.insertAdjacentHTML(`beforeend`,e)}t.set(`current`,String(r));let a=`/?${t.toString()}`;window.history.pushState({},``,a);let o=document.getElementById(`infinite-scroll-loading`);o&&o.remove(),n.pagination&&n.pagination.page>=n.pagination.totalPages?e&&e.remove():Y()}catch(e){console.error(`Failed to load more products:`,e);let t=document.getElementById(`infinite-scroll-loading`);t&&(t.textContent=`상품을 불러오는데 실패했습니다.`),Y()}}})},{rootMargin:`20px`,threshold:.5}),q.observe(e))}let X=[];function it(){X.forEach(e=>e()),X=[];let e={"filter-category1":(e,t)=>{let n=t.dataset.category1;n&&P(n)},"filter-category2":(e,t)=>{let n=t.dataset.category2;n&&Ae(n)},breadcrumb:(e,t)=>{let n=t.dataset.breadcrumb;n&&je(n)},"product-click":(e,t)=>{Se(t)},"add-to-cart":(e,t)=>{e.stopPropagation(),Ce(t)},"retry-products":()=>{let e=`/front_7th_chapter2-1/`,t=window.location.pathname;e!==`/`&&t.startsWith(e)&&(t=t.replace(e,`/`));let n=window.location.search;$.navigateTo(t+n)}},t={"filter-limit":(e,t)=>{let n=t.value;n&&ke(n)},"filter-sort":(e,t)=>{let n=t.value;n&&Oe(n)}},n={"filter-search":(e,t)=>{if(e.key===`Enter`){let e=t.value;De(e)}}};X.push(y(`click`,e)),X.push(y(`change`,t)),X.push(y(`keydown`,n)),Y()}const Z=()=>{let e=new URLSearchParams(window.location.search);return{limit:parseInt(e.get(`limit`))||20,search:e.get(`search`)||``,category1:e.get(`category1`)||``,category2:e.get(`category2`)||``,current:parseInt(e.get(`current`))||1,sort:e.get(`sort`)||`price_asc`}},Q=a(Z()),at=({loading:e=!0,limit:t=20,search:n=``,category1:r=``,category2:i=``,categories:a={},products:o=[],pagination:s={total:0},sort:c=`price_asc`,error:l=null})=>f({children:`${rt({loading:e,categories:a,limit:t,search:n,sort:c,category1:r,category2:i})} ${Xe({loading:e,products:o,pagination:s,error:l})}`}),ot=async()=>{let e=Z();return Q.setState(e),await ve(e)},st=()=>v({template:(e={})=>{let t=Q.getState();return at({...t,...e})},setup:ot,mounted:()=>{it(),W()}}),$=m([{path:`/`,element:st},{path:`/product/:id`,element:Ke}]),ct=()=>{$.initRouter()},lt=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>{let t=`/front_7th_chapter2-1/`,n=`${t}mockServiceWorker.js`;return e.start({serviceWorker:{url:n},onUnhandledRequest:`bypass`})});async function ut(){ct()}lt().then(ut);