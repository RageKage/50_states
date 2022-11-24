<template>
  <div id="block-header">
    <h1 id="title">Have you visited every state?</h1>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      block: null,
    };
  },
};
</script>

<style scoped>
/* #block-header {
    margin-top: 20px;
    margin-bottom: 20px;
    background: cadetblue;
    } */

#block-header {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  background-color: saddlebrown;
  background-image: url("~@/assets/map_header.jpg");
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: cover;
}

#title {
  font-weight: 500;
  color: white;
}
</style>
