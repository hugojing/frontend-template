<template lang="pug">
.home

  section.hero.is-primary
    .hero-body
      p.title
        | LIMITED
      p.subtitle
        | The lightest publishing & trading platform for creative works

  .columns.features
    .column
      h2.subtitle Publishing
      p Publish your creative music, image, video, etc.
      b-button(type="is-primary" size="is-large" icon-left="github") Let's Mint »
    .column
      h2.subtitle Hold & Show
      p Check the works you held, show them, and share them.
      b-button(type="is-primary" size="is-large" icon-left="github" @click="$router.push('/my/assets')") View My Assets »
    .column
      h2.subtitle Buy & Sell
      p Buy or sell your assets in our market.
      b-button(type="is-primary" size="is-large" icon-left="github" @click="popupAlert") Comming Soon ...
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {};
  },

  methods: {
    popupAlert() {
      alert('Market is comming soon!');
    },
  },
};
</script>

<style lang="stylus" scoped>
.hero
  margin 50px 0

.features
  margin 50px 0

  p
    height 80px
</style>
