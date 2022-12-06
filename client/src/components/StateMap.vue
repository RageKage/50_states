<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>

    <div id="map-container">
      <l-map
        v-if="dataReady"
        ref="map"
        v-on:ready="onMapReady"
        v-bind:center="mapCenter"
        v-bind:zoom="state.zoom"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        >
        </l-tile-layer>
      </l-map>
    </div>
    <div>
      <!-- <router-view  v-if="NotFound" to="/pageNotFound"></router-view> -->
      <router class="go"></router>
      <router-link v-if="NotFound" to="/pageNotFound">hi</router-link>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "StateMap",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      state: {},
      dataReady: false, // true if data is ready
      mapReady: false, // true if map is ready
      NotFound: false, //  this will turn
    };
  },
  mounted() {
    this.state.name = this.$route.params.state;
    this.fetchStateData();
    // this.state.visited = this.$route.params.state
  },
  methods: {
    fetchStateData() {
      // this will return only one state but I don't understand what mounted does
      this.$stateService
        .getOneState(this.state.name)
        .then((state) => {
          console.log(state.name)
          this.state = state;
          this.dataReady = true; // when the data is ready it will be true
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            // this will catch if the error is a 404
            this.state.name = "?";
            this.NotFound = true;
            this.$router.push("pageNotFound");
          } else {
            // this is a server error
            alert("Error fetching data about state");
            console.log(err);
          }
        });
    },
    onMapReady() {
      this.mapReady = true; // when the map is ready it will be true
    },
    setMapView() {
      // this checks if both the map and the data are ready
      if (this.mapReady && this.dataReady) {
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom);
        // this will show the correct map view using the computed properties and the zoom level
      }
    },
  },
  computed: {
    mapCenter() {
      // this manually sets the lon and lat
      return [this.state.lat, this.state.lon];
    },
  },
};
</script>

<style scoped>
#map-container {
  height: 30rem;
}
</style>
