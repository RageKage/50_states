<template>
  <div>
    <div>
      <state-summary v-bind:states="states"></state-summary>
    </div>
    <div class="state-list-con">
      <div class="state-con" v-for="state in states" :key="state.name">
        <state-detail
          v-bind:state="state"
          v-on:update-visited="updateVisited"
        ></state-detail>
      </div>
    </div>
  </div>
</template>

<script>
import StateDetail from "./StateDetail";
import stateSummary from "./stateSummary";

export default {
  components: {
    StateDetail,
    stateSummary,
  },
  name: "Statelist",
  data() {
    return {
      states: [],
    };
  },
  mounted() {
    this.fetchAllStates();
    // what is mounted mean? and why is it calling to the one of the functions inside the methods
  },
  methods: {
    fetchAllStates() {
      // I don't understand this
      // I think this function is returns all the states
      this.$stateService
        .getAllStates()
        .then((states) => {
          this.states = states;
        })
        .catch((err) => {
          alert('cannot fetch states list')
        console.log(err)
        });
    },
    updateVisited(stateName, visited) {
      // this updating if the state is visited or not
      this.$stateService
        .setVisited(stateName, visited)
        .then(() => {
          // I still don't understand this function
          this.fetchAllStates();
        })
        .catch((err) => {
          alert("cannot update state");
          console.log(err);
        });
    },
  },
};
</script>

<style>
.state-list-con {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.state-con {
  margin: 1rem;
}
</style>
