import { createRouter, createWebHashHistory } from "vue-router";
import StateList from "@/components/StateList.vue";
import AboutSite from "@/components/AboutSite.vue";
import StateMap from "@/components/StateMap.vue";
import pageNotFound from "@/components/pageNotFound.vue";
import Credits from "@/components/Credits.vue";
import StatesVisited from "@/components/StatesVisited.vue";

export default createRouter({
  history: createWebHashHistory(),
  // this is pathways for links that will take you to new pages for example http://localhost:8080/#/about
  // no need to communicate with the app
  routes: [
    {
      path: "/",
      name: "StateList",
      component: StateList,
    },
    {
      path: "/about",
      name: "AboutSite",
      component: AboutSite,
    },
    {
      path: "/map/:state",
      name: "StateMap",
      component: StateMap,
    },
    {
      // path: "/map/pageNotFound",
      path: "/:pathMatch(.*)*", // this will match any existing paths and if it doesn't exist then it take them to this path
      name: "notfound/404",
      component: pageNotFound,
    },
    {
      path: "/Credits",
      name: "SiteCredits",
      component: Credits,
    },
    {
      path: "/Visited",
      name: "VisitedList",
      component: StatesVisited,
    },
  ],
});
