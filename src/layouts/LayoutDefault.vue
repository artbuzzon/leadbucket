<template>
  <div :class="`${$options.name}`">
    <TheNavigationBar />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script>
import TheNavigationBar from "@/components/Navigation/TheNavigationBar";

export default {
  name: "LayoutDefault",
  components: {
    TheNavigationBar
  },
  created() {
    console.log(this.$options.name);
  }
};
</script>

<style lang="scss" scoped>
.LatoutDefault {
  height: 100vh;
}

.main {
  display: inline-block;
}
</style>
