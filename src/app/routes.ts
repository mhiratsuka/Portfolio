import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";
// import ProjectDetail from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },

      // Project list
      { path: "projects", Component: ProjectList },

      // Project Detail
    //   { path: "projects/:slug", Component: ProjectDetail },
    ],
  },
]);
