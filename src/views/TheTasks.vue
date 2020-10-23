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
  name: "TheTasks",
  components: {
    LayoutDefaultRenderless
  }
};
</script>

<style lang="scss" scoped></style>
