<template>
  <div class="switchTab" >
<!--    v-for来显示 添加的数据 -->

      <a href="javascript:;"
         v-for="(item,index) in switchMsg" :key="item.id"
        @click="itemClick(index)"
      >
        <span :class="{Active:index===currentIndex}">{{item.name}}</span>
      </a>

  </div>
</template>

<script>
export default {
  name: "switchTab",
  data(){
    return {
      currentIndex: 0
    }
  },
  props:{
    switchMsg:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      // this.$emit("switchClick",index)
    }
  }
}
</script>

<style scoped>
 .switchTab {
   display: flex;
   position: sticky;
   top: 44px;
   width: 96%;
   max-width: 1024px;
   /*min-width: 370px;*/
   height: 50px;
   margin: 0 auto;
   background-color: #fff;
   z-index: 5;
 }

 .switchTab a{
   flex: 1;
   text-align: center;
   line-height: 50px;
   -webkit-tap-highlight-color: transparent;
   text-decoration: none;
 }

 .switchTab a span{
   padding: 6px 20px;
   border: 1px solid #ccc;
   color: #576574;
   border-radius: 5px;
 }

.Active{
   background-color: #1dd1a1;
 }
</style>