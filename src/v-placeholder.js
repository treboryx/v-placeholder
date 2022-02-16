import vPlaceholder from "./v-placeholder.vue";

const plugin = {
  install(Vue) {
    Vue.component("v-placeholder", vPlaceholder);
  },
};

export default plugin;
