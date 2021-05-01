<template lang="pug">
.publish
  section.hero.is-primary
    .hero-body
      p.title
        | Browse
      p.subtitle
        | Randomly find some works to take a look.

  .columns
    .column(v-for="pet in 4")
      .panel.panel-default.panel-pet(@click="$router.push('/works/contractId/tokenId')")
        .panel-heading
          h3.panel-title Scrappy
        .panel-body
          img.img-rounded.img-center(alt="140x140" data-src="holder.js/140x140" style="width: 100%;" src="https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg" data-holder-rendered="true")
          br
          br
          strong Breed
          | :
          span.pet-breed Golden Retriever
          br
          strong Age
          | :
          span.pet-age 3
          br
          strong Location
          | :
          span.pet-location Warren, MI
          br
          br
          button.btn.btn-default.btn-adopt(type="button" data-id="0") Adopt

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
