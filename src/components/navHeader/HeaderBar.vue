<template>
  <div id="HeaderBar">
    <navBar>
      <navItem>
        <div slot="login_box" class="left_login iconfont icon-icon-xuanxiang"></div>
        <div slot="Search_box" class="center_search"><input type="search" placeholder="请输入内容"></div>
        <div slot="location_box" class=" right_location iconfont icon-xingzhuanggongnengtubiao-"></div>
      </navItem>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/navHeader/navBar";
import navItem from "@/components/navHeader/navItem";

export default {
  name: "HeaderBar",
  components: {
    navItem,
    navBar
  }
}
</script>

<style scoped>
.left_login {
  float: left;
  width: 16%;
  font-size: 18px;
  padding: 0 10px 0 0px;
  text-align: center;
}
/*.left_login{*/
/*  position:absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 50px;*/
/*  margin: 0 10px;*/
/*}*/
.center_search input {
  float: left;
  width: 65%;
  height: 30px;
  margin-bottom: 6px;
  margin-top: 6px;
  border: none;
  border-radius: 30px;
  padding: 15px;
  outline: none;
}
/*.center_search input{*/
/*  height: 30px;*/
/*  line-height: 30px;*/
/*  margin: 5px 50px 3px 90px;*/
/*  border-radius: 30px;*/
/*  padding: 14px;*/
/*  border: none;*/
/*}*/
.right_location {
  /*display: inline-block;*/
  width: 15%;
  float: left;
  font-size: 20px;
  /*margin-left: 1px;*/
  text-align: center;
}
/*.right_location{*/
/*  position:absolute;*/
/*  top: 0;*/
/*  right: 0;*/
/*  width: 40px;*/
/*  margin: 0 5px;*/
/*}*/
</style>