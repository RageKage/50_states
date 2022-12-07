<template>
  <div>
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";
import StateList from "./components/StateList.vue";



// the router-view means it will render all the components below, like showing the content.
export default {
  name: "App",
  components: {
    PageHeader, // this shows what you see at the top of the page
    PageFooter, // this shows what you see at the bottom of the page
    StateList, // this shows what you see in the middle and this contains the state info like the map, 
    // the name it will show you everything
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
