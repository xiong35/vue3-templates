<template>
  <div class="home">
    <h1>hello vue3</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  const Home = defineComponent({
    name: "Home",
    components: {},
    setup(props) {
      return {};
    },
  });
  export default Home;
</script>


<style lang="scss" scoped>
  .home {
  }
</style>