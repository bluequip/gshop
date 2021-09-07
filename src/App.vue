<template>
  <div id="app">
    <router-view></router-view>
    <footerBar v-if="$route.meta.showFooter" ></footerBar>
  </div>
</template>

<script>
import footerBar from "@/components/tabbar/footerBar";
export default {
  name: "App",
  data(){
    return {
      isActive: true
    }
  },
  components:{
    footerBar
  }
}
</script>

<style scoped>
@import "assets/css/reset.css";
@import "assets/font/iconfont.css";
  body {
    width: 100%;
    background-color: #ecf0f1;
  }
  #app{
    width: 100%;
    font-size: 14px;
    font-family: -apple-system,Helvetica,sans-serif;
    color: #666 ;
  }
</style>
