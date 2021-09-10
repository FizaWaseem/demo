import { lazy } from "react";
const Home = lazy(() => import("../pages/Home/index"));


export const paths = {
  home: "Home",
  work: "Work",
  graph:"GraphicDesign",
};
export const routes = {
  [paths.home]: {
    name: "Home",
    path: "/",
    component: Home,
  },
  [paths.work]: {
    name: "Work",
    path: "/MyWork",
    component: Home,
  },
  [paths.graph]: {
    name: "GraphicDesign",
    path: "/GraphicDesign",
    component: Home,
  },
 
};
