<template>
  <div class="swiper-container">
    <carouselItem>
      <div class="swiper-slide" slot="carousel_pic"><a href=""><img src="../img/R-C (2).jpg" alt=""></a></div>
      <div class="swiper-slide" slot="carousel_pic"><a href=""><img src="../img/R-C.jpg" alt=""></a></div>
      <div class="swiper-slide" slot="carousel_pic"><a href=""><img src="../img/R-C (1).jpg" alt=""></a></div>
    </carouselItem>
  </div>
</template>

<script>
import carouselItem from "@/pages/Msite/MsiteComponents/carouselItem";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: "carousel",
  components:{
    carouselItem
  },
  mounted(){
    new Swiper('.swiper-container', {
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
  }
}
</script>

<style scoped>
 .swiper-container {
   margin-top: 44px;
   width: 100%;
   height: 200px;
 }

 .swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;
   /* Center slide text vertically */
   display: -webkit-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;
 }

 .swiper-slide a{
   width: 100%;
   height: 200px;
 }

 .swiper-slide img{
   width: 100%;
   height: 100%;
   vertical-align: middle;
 }

</style>