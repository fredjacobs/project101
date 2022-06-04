import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ProjectsListView from "../components/ProjectsListView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/projectslistview",
    name: "projectsListView",
    component: ProjectsListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
