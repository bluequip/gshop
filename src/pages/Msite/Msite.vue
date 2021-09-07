<template>
  <div class="Msite_box">
    <HeaderBar></HeaderBar>
    <carousel></carousel>
    <tableBar></tableBar>
    <switchTab :switchMsg="switchMsg"></switchTab>
    <businessInfo></businessInfo>
  </div>
</template>

<script>
import HeaderBar from "@/components/navHeader/HeaderBar";
import carousel from "@/pages/Msite/MsiteComponents/carousel";
import tableBar from "@/pages/Msite/MsiteComponents/tableBar";
import switchTab from "@/pages/Msite/MsiteComponents/switchTab";
import businessInfo from "@/components/common/businessInfo";

import {getCarouselPic} from "@/network/homeaxios";

export default {
  name: "Msite",
  components:{
    HeaderBar,
    carousel,
    tableBar,
    switchTab,
    businessInfo
  },
  data(){
    return {
      switchMsg:[
        {id:1,name:"天天神劵"},
        {id:2,name:"配送减免"},
        {id:3,name:"会员商家"}
      ]
    }
  },
  created(){
    getCarouselPic()
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
 .Msite_box{
   width: 100%;
   position: relative;
 }
</style>