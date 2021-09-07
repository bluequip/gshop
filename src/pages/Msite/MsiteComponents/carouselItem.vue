<template>
  <div class="swiper-wrapper">
    <slot name="carousel_pic"></slot>
  </div>
</template>

<script>
export default {
  name: "carouselItem"
}
</script>

<style scoped>
.swiper-wrapper{
  height: 100%;
}

</style>