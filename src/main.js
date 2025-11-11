import { App } from "./App.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      serviceWorker: {
        url: "/front_7th_chapter2-1/mockServiceWorker.js",
      },
      onUnhandledRequest: "bypass",
    }),
  );

async function main() {
  App();
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
