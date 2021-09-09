import { lazy } from "react";
const Home = lazy(() => import("../pages/Home/index"));


export const paths = {
  home: "Home",

};
export const routes = {
  [paths.home]: {
    name: "Home",
    path: "/",
    component: Home,
  },
 
};
