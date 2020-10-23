<template>
  <div :class="`${$options.name}`">
    <div :class="`${$options.name}__top`"></div>
    <div :class="`${$options.name}__menu-container`">
      <router-link :to="{ name: 'user-settings' }">
        user-settings
      </router-link>
      <router-link :to="{ name: 'dashboard' }">
        dashboard
      </router-link>
      <router-link :to="{ name: 'deals' }">
        deals
      </router-link>
      <router-link :to="{ name: 'tasks' }">
        tasks
      </router-link>
      <router-link :to="{ name: 'stats' }">
        stats
      </router-link>
      <router-link :to="{ name: 'settings' }">
        settings
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavigationBar"
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.TheNavigationBar {
  background-color: $color-dark;
  display: inline-block;
  width: 65px;
  height: 100vh;

  &__menu-container {
    display: grid;
  }
}
</style>
