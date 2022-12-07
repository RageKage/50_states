<template>
  <div>
    <div>
      <h1>You've visited these states</h1>
      <!-- <h2>{{ units }} total of {{ this.states.length }} states</h2> -->
      <h2>Total {{ units }}  : {{this.states.length}}</h2>
      <p id="visited-states" v-for="state in states" :key="state.name">
        {{ state.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitedList",
  data() {
    return {
      states: {},
    };
  },
  mounted() {
    this.fetchStates();
    // what is mounted mean? and why is it calling to the one of the functions inside the methods
  },
  methods: {
    fetchStates() {
      // I don't understand this
      this.$stateService
        .stateVisited()
        .then((state) => {
          this.states = state;
        })
        .catch((err) => {
          alert("cannot fetch states list");
          console.log(err);
        });
    },
  },
  computed: {
    units() {
      if (this.states.length >= 1) {
        return "States";
      } else {
        return "State";
      }
      
    },
  },
};
</script>

<style scoped>
#visited-states {
  font-size: 1.5rem;
  justify-content: center;
  color: white;
  background-color: #ce824b;
  border-radius: 4px;
  width: 300px;
  height: 100;
  margin: auto;
  padding: 10px;
  display: inline-table;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
  text-align: center;
}
</style>
