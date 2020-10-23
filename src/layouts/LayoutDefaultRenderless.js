import LayoutDefault from "@/layouts/LayoutDefault";

export default {
  name: "LayoutDefaultRenderless",
  created() {
    console.log(this.$parent);
    this.$parent.$emit("update:layout", LayoutDefault);
  },
  render() {
    return this.$slots.default();
  }
};
