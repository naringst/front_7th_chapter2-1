import { ProductList } from "../components/products/productList/ProductList.js";
import { Search } from "../components/search/Serach.js";
import { PageLayout } from "./PageLayout.js";

// loading prop에 따라 UI 분기
export const HomePage = ({
  loading = true,
  limit = 20,
  search = "",
  categories = {},
  products = [],
  pagination = { total: 0 },
  sort,
}) => {
  return PageLayout({
    children: `${Search({
      loading,
      categories,
      limit,
      search,
      sort,
    })} ${ProductList({
      loading,
      products,
      pagination,
    })}`,
  });
};
