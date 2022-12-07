<template>
  <div>
    <h3>There are {{ states.length }} states</h3>
    <h4 v-show="totalVisits">States you visited: {{ totalVisits }} {{ units }}</h4>
    <h3 id="all-visited-ms" v-show="allVisited">Congratulations!, You have successfully visited all the 51 states </h3>
    <!-- <p>There are {{ states.length }} states</p> -->
    <!-- <p>States you visited: {{ totalVisits }} {{ units }}</p> -->
    <!-- <p id="all-visited-ms" v-show="allVisited">Congratulations!, You have successfully visited all the 51 states </p> -->
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "StateSummary",
  props: {
    states: Array,
  },
  mounted() {
    if (this.allVisited) {
      this.showAllVisitedAlert()
    }
  },
  methods: {
    showAllVisitedAlert() {
      swal(
        "Congratulations!",
          "You have successfully visited all the 51 states" 
          );
      }
  },
  watch: {
    // https://vuejs.org/guide/essentials/watchers.html
    // watchers take an action every time a data or computed property changes
    // the argument is the latest value of the data/computed property 
    allVisited(vistedEverywhere) {
      if (vistedEverywhere) {
        this.showAllVisitedAlert()
      }
    }
  },
  computed: {
    totalVisits() {
      let visitedCount = 0;
      this.states.forEach((state) => {
        if (state.visited) {
          visitedCount++; // if the state is visited add one
        }
      });
      return visitedCount;
    },
    units() {
      if (this.totalVisits == 1) {
        return "State";
      } else {
        return "States";
      }
    },
    allVisited() {

      // this method is called every time anything changes
      // swal(
      //   "Congratulations!",
      //     "You have successfully visited all the 51 states" 
      //     ); 
          
          return  this.totalVisits === this.states.length
 
    },
  },
};
</script>

<style>

#all-visited-ms {
  color: red;
}
</style>
