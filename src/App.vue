<template>
  <component :is="layout">
    <router-view v-model:layout="layout" />
  </component>
</template>

<script>
export default {
  data() {
    return {
      layout: "div" //fallback option
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/base";
</style>
