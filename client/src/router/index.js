import { createRouter, createWebHashHistory } from "vue-router";
import StateList from '@/components/StateList.vue';
import AboutSite from '@/components/AboutSite.vue';
import StateMap from '@/components/StateMap.vue';


export default createRouter({
  history: createWebHashHistory(),
  // this is pathways for links that will take you to new pages for example http://localhost:8080/#/about
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
    },
    {
      path:'/map/:state',
      name: 'StateMap',
      component: StateMap
    }
    

  ],
})
