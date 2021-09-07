<template>
  <div class="profile_collect_box">
    <div class="profileCollect">
      <div class="profile_collect_title">我的收藏</div>
      <div class="profile_collect_pic">
        <!--      v-for 遍历数据进行 循环 -->
        <div class="profileCollect_Item" slot="collectItem"><a href=""><img src="../img/20191210100052765276.jpg" alt=""></a></div>
        <div class="profileCollect_Item" slot="collectItem"><a href=""><img src="../img/R-C (3).jpg" alt=""></a></div>
        <div class="profileCollect_Item" slot="collectItem"><a href=""><img src="../img/R-C.png" alt=""></a></div>
      </div>
      <div class="profile_more_collect"><span>{{shopCount}}家店铺</span> <i class="icon-arrow-right-bold iconfont"></i></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProfileCollect",
  data(){
    return {
      shopCount: 3
    }
  }
}
</script>

<style scoped>
.profile_collect_box{
  padding-top: 65px;
}

.profileCollect{
  position: relative;
  width: 95%;
  height: 150px;
  margin: 0px auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 1px 2px #ccc;
}

.profile_collect_title{
  height: 35px;
  line-height: 35px;
  padding-left: 15px;
  font-size: 16px;
  font-weight: bolder;
  color: #2f3542;
}

.profile_collect_pic{
  display: flex;
  justify-content: space-between;
  padding: 10px ;
  align-items: center;
}

.profileCollect_Item  {
  width: 120px;
  height: 90px;
}
.profileCollect_Item img{
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.profile_more_collect{
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 150px;
  border-radius: 0 20px 20px 0;
  background-color: white;
  opacity: 0.8;
  text-align: center;
  line-height: 150px;
}

.profile_more_collect i{
  font-size: 11px;
}
</style>