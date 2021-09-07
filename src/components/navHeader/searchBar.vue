<template>
  <div id="SearchBar">
    <navBar>
      <navItem>
        <div class="Search_box" slot="Search_box"><input type="search" placeholder="请输入要搜索的订单"></div>
        <div  slot="login_box" class="Search_icon iconfont icon-search"></div>
      </navItem>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/navHeader/navBar";
import navItem from "@/components/navHeader/navItem";
export default {
  name: "searchBar",
  components:{
    navItem,
    navBar
  }
}
</script>

<style scoped>
  .Search_box input{
    float: left;
    width: 80%;
    height: 30px;
    margin: 6px 5px 6px 15px;
    border: none;
    border-radius: 30px;
    padding: 15px;
    outline: none;
  }
  .Search_icon{
    position: absolute;
    top: 0;
    right: 0;
    float: right;
    width: 60px;
    text-align: center;
  }
</style>