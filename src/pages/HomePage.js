import { ProductList } from "../components/products/productList/ProductList.js";
import { Search } from "../components/search/Serach.js";
import { PageLayout } from "./PageLayout.js";
import { loadHomePageData as loadHomePageDataFromLoader } from "../utils/dataLoaders.js";

/**
 * HomePage 데이터 로드
 * @param {Object} state - 페이지 상태
 * @returns {Promise<Object>} 페이지 데이터
 */
export async function loadData(state) {
  return await loadHomePageDataFromLoader(state);
}

// loading prop에 따라 UI 분기
export const HomePage = ({
  loading = true,
  limit = 20,
  search = "",
  category1 = "",
  category2 = "",
  categories = {},
  products = [],
  pagination = { total: 0 },
  sort = "price_asc",
}) => {
  return PageLayout({
    children: `${Search({
      loading,
      categories,
      limit,
      search,
      sort,
      category1,
      category2,
    })} ${ProductList({
      loading,
      products,
      pagination,
    })}`,
  });
};
