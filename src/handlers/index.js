import { getCategories, getProducts } from "../api/productApi";
import { router } from "../App";
import { HomePage } from "../pages/HomePage";

function itemLimitSelectEventListener() {
  const itemLimitSelector = document.querySelector("#limit-select");

  itemLimitSelector.addEventListener("change", async (event) => {
    const selectedLimit = event.target.value;

    const $root = document.querySelector("#root");
    const data = await getProducts({ limit: selectedLimit });
    const categories = await getCategories();

    $root.innerHTML = HomePage({ ...data, categories, loading: false, limit: selectedLimit });
    itemLimitSelectEventListener();
  });
}

function searchEventListener() {
  const searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") return;

    const searchValue = event.target.value;
    const $root = document.querySelector("#root");
    const data = await getProducts({ search: searchValue });
    const categories = await getCategories();

    $root.innerHTML = HomePage({ ...data, categories, loading: false, search: searchValue });
    searchEventListener();
  });
}

function clickCategory1EventListener() {
  const categoryButton = document.querySelectorAll(".category1-filter-btn");

  categoryButton.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const category1 = event.target.dataset.category1;
      const $root = document.querySelector("#root");
      const data = await getProducts({ category1 });
      const categories = await getCategories();
      $root.innerHTML = HomePage({ ...data, categories, loading: false });
      clickCategory1EventListener();
    });
  });
}

function clickProductItem() {
  const productItems = document.querySelectorAll(".product-image, .product-info");

  productItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const productId = event.currentTarget.closest(".product-card").dataset.productId;
      router.navigateTo(`/product/${productId}`);
    });
  });
}

export function attachHomePageEventListeners() {
  itemLimitSelectEventListener();
  searchEventListener();
  clickCategory1EventListener();
  clickProductItem();
}

function onClickIncreaseCounter() {
  const increaseButton = document.querySelector("#quantity-increase");

  const increaseEventHandler = () => {
    const quantityInput = document.querySelector("#quantity-input");
    const currentValue = Number(quantityInput.value);
    quantityInput.value = currentValue + 1;
  };
  increaseButton.addEventListener("click", increaseEventHandler);
}

function onClickDecreaseCounter() {
  const decreaseButton = document.querySelector("#quantity-decrease");

  const decreaseEventHandler = () => {
    const quantityInput = document.querySelector("#quantity-input");
    const currentValue = Number(quantityInput.value);

    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  };

  decreaseButton.addEventListener("click", decreaseEventHandler);
}

function onClickAddToCart() {
  const addToCartButton = document.querySelector("#add-to-cart-btn");

  if (!addToCartButton) return;

  const addToCartEventHandler = () => {
    const productId = addToCartButton.dataset.productId;
    console.log(`상품 ${productId}번이 장바구니에 추가되었습니다.`);

    // ✅ Toast 표시
    showToast();
  };

  addToCartButton.addEventListener("click", addToCartEventHandler);
}

/**
 * Toast 메시지 표시
 */
function showToast() {
  // 1. Toast HTML 생성
  const toastHTML = `
    <div id="toast-container" class="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
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
      </div>
    </div>
  `;

  // 2. DOM에 추가
  document.body.insertAdjacentHTML("beforeend", toastHTML);

  // 3. Toast 요소 가져오기
  const toastContainer = document.getElementById("toast-container");
  const closeBtn = document.getElementById("toast-close-btn");

  // 4. 닫기 버튼 이벤트
  closeBtn.addEventListener("click", () => {
    removeToast(toastContainer);
  });

  // 5. 3초 후 자동 제거
  setTimeout(() => {
    removeToast(toastContainer);
  }, 3000);
}

/**
 * Toast 제거 (페이드아웃 효과)
 */
function removeToast(toastElement) {
  if (!toastElement) return;

  // 페이드아웃
  toastElement.style.opacity = "0";
  toastElement.style.transform = "translate(-50%, -20px)";

  // 애니메이션 후 DOM에서 제거
  setTimeout(() => {
    toastElement.remove();
  }, 300);
}

export function attachDetailPageHandlers() {
  onClickIncreaseCounter();
  onClickDecreaseCounter();
  onClickAddToCart();
}
