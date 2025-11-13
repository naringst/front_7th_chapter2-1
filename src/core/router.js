import { ErrorPage } from "../pages/ErrorPage.js";

// 정적 라우트 매칭
function matchStaticRoute(route, currentPath) {
  return route.path === currentPath;
}

// 동적 라우트 매칭
function matchDynamicRoute(route, currentPath) {
  if (!route.path.includes(":")) return false;

  // '/product/:id' → /^\/product\/[^/]+$/
  const regex = new RegExp("^" + route.path.replace(/:\w+/g, "[^/]+") + "$");
  return regex.test(currentPath);
}

// 동적 파라미터 추출
function extractParams(routePath, currentPath) {
  const paramNames = routePath
    .split("/")
    .filter((p) => p.startsWith(":"))
    .map((p) => p.slice(1));

  const paramValues = currentPath.split("/").slice(-paramNames.length);
  return Object.fromEntries(paramNames.map((n, i) => [n, paramValues[i]]));
}

export function createRouter(routes, state) {
  // base path 설정 (개발: /, 배포: /front_7th_chapter2-1/)
  const basePath = import.meta.env.BASE_URL || "/";

  /**
   * base path 제거해서 실제 경로만 추출
   * /front_7th_chapter2-1/ → /
   * /front_7th_chapter2-1/product/123 → /product/123
   */
  const getPathWithoutBase = (fullPath) => {
    if (basePath === "/") return fullPath;
    return fullPath.replace(basePath, "/");
  };

  const initRouter = () => {
    window.addEventListener("popstate", handleRoute);
    handleRoute(); // 첫 화면 렌더링
  };

  const navigateTo = (path) => {
    // base path 포함해서 URL 변경
    const fullPath = basePath + path.replace(/^\//, "");
    window.history.pushState({}, "", fullPath);
    handleRoute();
  };

  /**
   *
   * NOTE 전체적으로 사용자 이벤트 발생 -> URL 변경 -> handleRoute() 호출 -> 상태 동기화 -> 페이지 렌더링 되도록 설정
   */
  const handleRoute = async () => {
    // 현재 URL에서 base path 제거
    const fullPath = window.location.pathname;
    const currentPath = getPathWithoutBase(fullPath);

    // URL에서 searchParams 파싱 → Store 업데이트
    const urlParams = new URLSearchParams(window.location.search);
    const searchParamsState = {
      limit: parseInt(urlParams.get("limit")) || 20,
      search: urlParams.get("search") || "",
      category1: urlParams.get("category1") || "",
      category2: urlParams.get("category2") || "",
      current: parseInt(urlParams.get("current")) || 1,
      sort: urlParams.get("sort") || "price_asc",
    };

    // 전역 상태 업데이트 (URL이 단일 진실 공급원)
    state.setState(searchParamsState);

    const matchedRoute =
      routes.find((r) => matchStaticRoute(r, currentPath)) || routes.find((r) => matchDynamicRoute(r, currentPath));

    const $root = document.querySelector("#root");
    if (!matchedRoute) {
      // 404 페이지 렌더링
      $root.innerHTML = ErrorPage();

      return;
    }

    // params 처리 (동적일 경우만)
    const params = matchedRoute.path.includes(":") ? extractParams(matchedRoute.path, currentPath) : {};

    // 페이지 컴포넌트 생성 (페이지가 자신의 컴포넌트를 생성)
    const component = matchedRoute.element();

    // 컴포넌트 마운트
    await component.mount(
      {
        ...state.getState(),
        params,
      },
      $root,
    );
  };

  return { initRouter, navigateTo };
}
