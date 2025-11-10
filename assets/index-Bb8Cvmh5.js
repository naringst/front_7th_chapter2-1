(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_7th_chapter2-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=`          
<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
  <div class="aspect-square bg-gray-200"></div>
  <div class="p-3">
    <div class="h-4 bg-gray-200 rounded mb-2"></div>
    <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
    <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div class="h-8 bg-gray-200 rounded"></div>
  </div>
</div>`,a=({product:e})=>`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
                 data-product-id="85067212996">
              <!-- 상품 이미지 -->
              <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
                <img src=${e.image}
                     alt=${e.title}
                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                     loading="lazy">
              </div>
              <!-- 상품 정보 -->
              <div class="p-3">
                <div class="cursor-pointer product-info mb-3">
                  <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                  ${e.title}
                  </h3>
                  <p class="text-xs text-gray-500 mb-2"></p>
                  <p class="text-lg font-bold text-gray-900">
                  ${e.lprice}원
                  </p>
                </div>
                <!-- 장바구니 버튼 -->
                <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                       hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id=${e.productId}>
                  장바구니 담기
                </button>
              </div>
            </div>`,o=`
        <div class="text-center py-4">
          <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
          </div>
        </div>`,s=({loading:e,products:t,pagination:n})=>`   
    <div class="mb-6">
      <div>
        <!-- 상품 그리드 -->
        ${e?` <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
                ${i.repeat(8)}
                </div>  
                 ${o}`:` 
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${n.total}개</span>의 상품
            </div>
        
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${t.map(e=>a({product:e})).join(``)}
        </div>`}
       
      </div>
    </div>`,c=({search:e=``})=>` <div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>`,l=({limit:e})=>`<!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select"
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
        </div>`,u=()=>`<!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
              <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" selected="">가격 낮은순</option>
              <option value="price_desc">가격 높은순</option>
              <option value="name_asc">이름순</option>
              <option value="name_desc">이름 역순</option>
            </select>
          </div>`,d=()=>`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`,f=({category1:e})=>` 
    ${e.map(e=>`
      <button data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
        ${e}
      </button>
    `).join(``)}
  `,p=({loading:e,categories:t={},limit:n,search:r=``})=>{let i=Object.keys(t);return`   
      <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      ${c({search:r})}
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
          </div>
          ${e?`    
            <!-- 1depth 카테고리 -->
            <div class="flex flex-wrap gap-2">
              ${d()}
            </div>`:`
               <div class="flex flex-wrap gap-2">
                  ${f({category1:i})}
                </div>`}
          <!-- 2depth 카테고리 -->
        </div>
       
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          ${l({limit:n})}
          ${u()}
        </div>
      </div>
    </div> 
    `},m=()=>`  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>`,h=()=>{let e=new Date().getFullYear();return` 
    <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© ${e} 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
  
  `},g=({children:e})=>`
    <div class="min-h-screen bg-gray-50"> 
  
  ${m()}
    <main class="max-w-md mx-auto px-4 py-4">
  ${e}
  </main>
  ${h()}
  
  
  </div>
  `,_=({loading:e,products:t,pagination:n,categories:r,limit:i,search:a})=>g({children:`${p({loading:e,categories:r,limit:i,search:a})} ${s({loading:e,products:t,pagination:n})}`});async function v(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function y(){let e=await fetch(`/api/categories`);return await e.json()}const b=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({serviceWorker:{url:`/front_7th_chapter2-1/mockServiceWorker.js`},onUnhandledRequest:`bypass`}));function x(){let e=document.querySelector(`#limit-select`);e.addEventListener(`change`,async e=>{let t=e.target.value,n=document.querySelector(`#root`),r=await v({limit:t}),i=await y();n.innerHTML=_({...r,categories:i,loading:!1,limit:t}),x()})}function S(){let e=document.querySelector(`#search-input`);e.addEventListener(`keydown`,async e=>{if(e.key!==`Enter`)return;let t=e.target.value,n=document.querySelector(`#root`),r=await v({search:t}),i=await y();n.innerHTML=_({...r,categories:i,loading:!1,search:t}),S()})}function C(){let e=document.querySelectorAll(`.category1-filter-btn`);e.forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target.dataset.category1,n=document.querySelector(`#root`),r=await v({category1:t}),i=await y();n.innerHTML=_({...r,categories:i,loading:!1}),C()})})}async function w(){let e={limit:20,search:``},t=document.querySelector(`#root`);t.innerHTML=_({loading:!0,categories:{}});let n=await v(),r=await y({limit:e.limit});t.innerHTML=_({...n,categories:r,loading:!1,limit:e.limit}),x(),S(),C()}b().then(w);