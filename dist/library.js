'use strict';

var vue = require('vue');

var script = {
  name: "v-placeholder",
  props: {
    src: String,
    alt: String,
    placeholder: String,
    classes: String,
  },
  computed: {
    image() {
      return this.placeholder ? this.placeholder : this.src;
    },
  },
  mounted() {
    if (this.placeholder) {
      const img = new Image();
      img.src = this.src;
      const ref = this;
      img.onload = () => {
        ref.$refs.img.src = ref.src;
      };
    }
  },
};

const _hoisted_1 = ["alt", "src"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("img", {
    ref: "img",
    alt: $props.alt,
    src: $options.image,
    class: vue.normalizeClass($props.classes),
    loading: "lazy"
  }, null, 10 /* CLASS, PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "src/v-placeholder.vue";

const plugin = {
  install(Vue) {
    Vue.component("v-placeholder", script);
  },
};

module.exports = plugin;
