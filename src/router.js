import { createRouter, createWebHistory } from "vue-router";

const pages = import.meta.glob("@/Pages/**/*.vue");

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\/Pages\/(.*)\.vue$/)[1];
  return {
    path: name === "Index" ? "/" : `/${name.toLowerCase()}`,
    name,
    component: pages[path],
  };
});
routes.push(
  {
    path: "/.git/",
    name: "Redirect to Repo",
    redirect: "/你在找什麼",
  },
  {
    path: "/user",
    name: "userpanel",
    redirect: "/user/panel",
  },
  {
    path: "/services",
    name: "services",
    redirect: "/services/index",
  },
  {
    path: "/About/AboutThisProject/:pathMatch(.*)*",
    name: "AboutThisProject",
    redirect: to => {
      const { params } = to;
      return `/About/AboutThisProject?page=${params.pathMatch}`
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/Pages/OopsError.vue"),
    meta: {
      title: "Oops! Page not found",
    },
  },
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
