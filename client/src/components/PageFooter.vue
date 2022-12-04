<template>
  <div class="navs">
    <div id="navigation-links">
      <span class="nav-links">
        <router-link class="nav-link" to="/">Home</router-link>
      </span>
      <span class="nav-links">
        <router-link class="nav-link" to="/Credits">Site Credits</router-link>
      </span>
      <span class="nav-links">
        <router-link class="nav-link" to="/about">About this site</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
.router-link-exact-active {
  padding: 10px;
  /* background: #4b5668; */
  background: #f6f4f2;
  border-radius: 5px;
  color: black;
  font-style: italic;
}
.nav-links {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
}
.nav-link {
  text-decoration: none;
}
a {
  color: inherit;
}
.navs {
  background-color: #dda882;
  border-radius: 4px;
  width: 400px;
  height: 100;
  margin: auto;
  padding: 10px;
}
</style>
