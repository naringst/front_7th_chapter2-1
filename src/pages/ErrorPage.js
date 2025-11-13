import { Error404 } from "../components/Error";
import { PageLayout } from "./PageLayout";

export const ErrorPage = () => {
  return PageLayout({
    children: Error404,
  });
};
