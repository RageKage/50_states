<template>
  <div>
    <p>There are {{ states.length }} states</p>
    <p>States you visited: {{ totalVisits }} {{ units }}</p>
    <p id="all-visited-ms" v-if="allVisited">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaav
    </p>
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
        return "state";
      } else {
        return "states";
      }
    },
    allVisited() {
        // TODO fix this error that shows up in the when it should not be showing up and ask clara how to get around it
    //   if (this.totalVisits == this.states.length) {
    //     return alert('it should show up')
    //     // swal(
    //     //   "Congratulations!",
    //     //   "You have successfully visited all the 51 states"
    //     // ); 
    
    //   } else {

    //         alert('it should not show up')
        
    //   }
    },
  },
};
</script>

<style></style>
