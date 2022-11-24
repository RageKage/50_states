<template>
  <div>
    <p v-for="state in states" :key="state.name">
      <state-detail v-bind:state="state"></state-detail>
    </p>
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
  },
};
</script>

<style></style>
