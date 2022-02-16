<template>
  <img ref="img" :alt="alt" :src="image" :class="classes" loading="lazy" />
</template>

<script>
export default {
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
</script>
