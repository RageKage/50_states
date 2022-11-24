<template>
  <div>
    <div id="navigation-links">
      <span class="nav-link">
        <router-link to="/">Home</router-link>
      </span>
      <span class="nav-link">
        <router-link to="/about">About this site</router-link>
      </span>
    </div>

    <p>
      Header image by
      <a href="https://unsplash.com/photos/iDzKdNI7Qgc">@jordanmadrid</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
.nav-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
}
</style>
