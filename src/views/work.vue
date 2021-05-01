<template lang="pug">
.publish
  section.hero.is-primary
    .hero-body
      p.title
        | Detail
      p.subtitle
        | your creative music, image, video, etc

  .detail
    figure.image
      img(src="https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg")
</template>

<script>
export default {
  name: 'Works',

  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
.hero
  margin 50px 0
</style>
