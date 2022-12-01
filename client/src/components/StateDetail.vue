<template>
  <div class="state-info">
    <span class="state-name">{{ state.name }}</span>
    <div>
      <input
        type="checkbox"
        class="visit-state"
        v-model="visited"
        v-on:change="visitedChanged"
      />
    </div>
    <div>
      <!-- this will take you to the map of the state you click on and the route is going to look like /map/Minnesota -->
      <router-link v-bind:to="{name:'StateMap', params: {state: state.name}}">
        <img class="map-icon" src="@/assets/25530.jpg" alt="link to state map">
      </router-link>


    </div>
  </div>
</template>

<script>
export default {
  name: "StateDetail",
  emits:['update-visited'],
  props: {
    state: Object,
  },
  data(){
    return {
      visited: this.state.visited
    }
  },
  methods: {
    visitedChanged(){
      this.$emit('update-visited', this.state.name, this.visited)
    }
  }
};
</script>

<style scoped>
.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px solid gainsboro;
  border-radius: 0.3rem;
  background-color: whitesmoke;
}

.visit-state {
  margin: 1rem;
  text-align: center;
}

.map-icon{
  width: 2rem;
  height: 2rem;
}
</style>
