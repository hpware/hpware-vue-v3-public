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
    path: "/about/aboutthisproject/:pathMatch(.*)*",
    name: "About This Project",
    redirect: to => {
      const { params } = to;
      return `/About/AboutThisProject?page=${params.pathMatch}`
    }
  },
  {
    path: "/about/bot/:pathMatch(.*)*",
    name: "About This Bot",
    redirect: to => {
      const { params } = to;
      return `/About/Bot?page=${params.pathMatch}`
    }
  },
  {
    path: "/go/:pathMatch(.*)*",
    name: "Go to Link",
    redirect: to => {
      const { params } = to;
      return `/go?l=${params.pathMatch}`
    }
  },
  {
    path: "/About/Github-Org/:pathMatch(.*)*",
    name: "About This Github Orginization",
    redirect: to => {
      const { params } = to;
      return `/About/Github-Org?page=${params.pathMatch}`
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
