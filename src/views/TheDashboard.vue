<template>
  <LayoutDefaultRenderless>
    <div>
      {{ $options.name }}
    </div>
  </LayoutDefaultRenderless>
</template>

<script>
import LayoutDefaultRenderless from "@/layouts/LayoutDefaultRenderless";

export default {
  name: "TheDashboard",
  components: {
    LayoutDefaultRenderless
  }
};
</script>

<style lang="scss" scoped></style>
