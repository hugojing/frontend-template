<template lang="pug">
#app
  the-navbar
  router-view
</template>

<script>
import TheNavbar from '@/components/navbar';

export default {
  name: 'App',

  components: {
    TheNavbar,
  },

  data() {
    return {};
  },
};
</script>

<style lang="stylus">
#app
  max-width 980px
  margin 0 auto
  padding 0 15px
</style>
