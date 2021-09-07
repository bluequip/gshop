<template>
  <div class="businessInfo">
<!--   给businessInfoItem 添加v-for 遍历后台传递的数据 -->
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
    <businessInfoItem></businessInfoItem>
  </div>
</template>


<script>
import businessInfoItem from "@/components/common/businessInfoItem";
export default {
  name: "businessInfo",
  components:{
    businessInfoItem
  }
}
</script>

<style scoped>
.businessInfo{
  width: 100%;
  margin: 0 auto;
}
</style>