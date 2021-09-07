<template>
  <a class="businessInfoItem" href="javascript:;" >
    <div :class="{hidden:isHidden}" @click="isHidden=!isHidden">
      <div v-show="isHidden" class="hidden_similar">
        <div @click.stop="" class="hidden_similar_icon"><i class="iconfont icon-eye-close1"></i><p>不喜欢</p></div>
      </div>
      <div v-show="isHidden" class="hidden_unlike">
        <div @click.stop="" class="hidden_unlike_icon"><i class="iconfont icon-icon-sousuo"></i><p>找相似</p></div>
      </div>
    </div>
    <div class="businessInfoItem_img">
      <img src="./img/R-C (2).jpg" alt="商品图片">
    </div>
    <div class="businessInfoItem_message">
      <span class="businessInfoItem_title">十一号铺</span>
      <i class="iconfont icon-add" @click="clickHidden"></i>
      <p class="mouthCount"><i class="iconfont icon-star-full"></i>月售{{businessCount}} <span>人均{{money}}</span></p>
      <p>起送￥ 20 配送￥ 6.5</p>
      <p class="businessInfoItem_message_label">
        <span>35减10</span><span>35减10</span><span>35减10</span><span>35减10</span>
        <i class="iconfont icon-arrow-down"></i>
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "businessInfoItem",
  data(){
    return {
      businessCount: 18,
      money: 15,
      isHidden: false
    }
  },
  methods:{
    clickHidden(){
      this.isHidden = !this.isHidden;
    }
  }
}
</script>

<style scoped>
.businessInfoItem{
  display: flex;
  width: 94%;
  max-width: 1024px;
  /*min-width: 365px;*/
  height: 140px;
  margin: 10px auto;
  color: #636e72;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #cccccc;
}
.businessInfoItem_img{
  flex: 1;
  overflow: hidden;
  width: 40%;
  height: 72%;
  padding: 20px;
}
.businessInfoItem_img img{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.businessInfoItem_message {
  position: relative;
  flex: 2;
  width: 40%;
  padding: 16px 0 0 20px;

}

.businessInfoItem_title{
  font-weight: bolder;
  font-size: 24px;
  color: #00b894;
}

.businessInfoItem_message .icon-add{
  position: absolute;
  top: 15px;
  right: 10px;
}

.icon-star-full{
  color: #f6e58d;
  padding-right: 5px;
}

.businessInfoItem_message p{
  padding-top: 10px;
  padding-bottom: 5px;
}

.businessInfoItem_message_label{
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  /*text-overflow: ellipsis;*/
}

.businessInfoItem_message_label span{
  border-radius: 5px;
  border: 1px solid red;
  padding: 1px;
  margin-left: 5px;
}

.icon-arrow-down{
  position: absolute;
  bottom: 15px;
  right: 10px;
}

.hidden {
  position: absolute;
  display: flex;
  width: 94%;
  max-width: 1024px;
  /*min-width: 365px;*/
  height: 140px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: black;
  opacity: 0.8;
  box-shadow: 1px 1px 5px #cccccc;
  z-index: 2;
}

.hidden_similar ,.hidden_unlike{
  flex: 1;
}

.hidden_unlike .hidden_unlike_icon{
  position: relative;
  width: 44%;
  height: 55%;
  border-radius: 50%;
  transform: translate(20%,40%);
  background-color: #fff;
}

.hidden_similar .hidden_similar_icon{
  position: relative;
  width: 44%;
  height: 55%;
  border-radius: 50%;
  transform: translate(100%,40%);
  background-color: #fff;
}

.hidden_unlike .hidden_unlike_icon i,.hidden_similar .hidden_similar_icon i{
  position: absolute;
  top: 10px;
  right: 25px;
  color: black;
  font-size: 30px;
}

.hidden_unlike .hidden_unlike_icon p,.hidden_similar .hidden_similar_icon p{
  position: absolute;
  top: 47px;
  right: 14px;
  font-size: 16px;
}
</style>