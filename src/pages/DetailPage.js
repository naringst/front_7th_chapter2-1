import { getProduct } from "../api/productApi";
import { Footer } from "../components";
import { BackButton } from "../components/products/productDetail/BackButton";
import { Breadcrumb } from "../components/products/productDetail/Breadcrumb";
import { DetailHeader } from "../components/products/productDetail/DetailHeader";
import { DetailInfo } from "../components/products/productDetail/DetailInfo";
import { RelatedItems } from "../components/products/productDetail/RelatedItems";

export const DetailPage = async ({ params }) => {
  const { id } = params;
  //불러오기 전에는 로딩 false -> 불러오면 true
  const product = await getProduct(id);

  return /*HTML*/ `
    <div class="min-h-screen bg-gray-50">
      ${DetailHeader()}
      <main class="max-w-md mx-auto px-4 py-4">
      ${Breadcrumb({ category1: product.category1, category2: product.category2 })}
      ${DetailInfo({ product })}
      ${BackButton()}
      ${RelatedItems()}
      </main>
      ${Footer()}
    </div>
`;
};
