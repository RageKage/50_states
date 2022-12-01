<template>
  <div class="state-list-con">
    <div class="state-con" v-for="state in states" :key="state.name">
      <state-detail
        v-bind:state="state"
        v-on:update-visited="updateVisited"
      ></state-detail>
    </div>
  </div>
</template>

<script>
import StateDetail from "./StateDetail";

export default {
  components: {
    StateDetail,
  },
  name: "Statelist",
  data() {
    return {
      states: [],
    };
  },
  mounted() {
    this.fetchAllStates();
  },
  methods: {
    fetchAllStates() {
      this.$stateService.getAllStates().then((states) => {
        this.states = states;
      });
    },
    updateVisited(stateName, visited) {
      this.$stateService.setVisited(stateName, visited).then(() => {
        this.fetchAllStates()
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
