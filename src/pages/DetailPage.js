import { Footer } from "../components";
import { BackButton } from "../components/products/productDetail/BackButton";
import { Breadcrumb } from "../components/products/productDetail/Breadcrumb";
import { DetailHeader } from "../components/products/productDetail/DetailHeader";
import { DetailInfo } from "../components/products/productDetail/DetailInfo";
import { RelatedItems } from "../components/products/productDetail/RelatedItems";

// loading prop에 따라 UI 분기
export const DetailPage = ({ loading = true, product = null }) => {
  return /*HTML*/ `
    <div class="min-h-screen bg-gray-50">
      ${DetailHeader()}
      <main class="max-w-md mx-auto px-4 py-4">
      ${
        loading
          ? `
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      `
          : `
        ${Breadcrumb({ category1: product.category1, category2: product.category2 })}
        ${DetailInfo({ product })}
        ${BackButton()}
        ${RelatedItems()}
      `
      }
      </main>
      ${Footer()}
    </div>
`;
};
