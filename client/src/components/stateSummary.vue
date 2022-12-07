<template>
  <div>
    <h3>There are {{ states.length }} states</h3>
    <h4 v-show="totalVisits">
      States you visited: {{ totalVisits }} {{ units }}
    </h4>
    <h3 id="all-visited-ms" v-show="showVisitedAlert"></h3>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "StateSummary",
  props: {
    states: Array,
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
      return this.totalVisits === this.states.length;
    },
    showVisitedAlert() {
      if (this.totalVisits == 51) {
        return swal(
          "Congratulations!",
          "You have successfully visited all the 51 states"
        );
      }
    },
  },
};
</script>

<style>
#all-visited-ms {
  color: red;
}
</style>
