import { createRouter, createWebHashHistory } from "vue-router";
import StateList from '@/components/StateList.vue';
import AboutSite from '@/components/AboutSite.vue';


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "StateList",
      component: StateList,
    },
    {
        path: "/about",
        name: "AboutSite",
        component: AboutSite
    }
  ],
});
