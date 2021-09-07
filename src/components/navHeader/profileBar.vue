<template>
  <div id="profileBar">
    <navBar>
      <navItem>
        <div slot="login_box" class="profile_title">我的</div>
      </navItem>
    </navBar>
  </div>
</template>

<script>
import navBar from "@/components/navHeader/navBar";
import navItem from "@/components/navHeader/navItem";
export default {
  name: "Profile",
  components:{
    navBar,
    navItem
  }
}
</script>

<style scoped>
#profileBar{
  position: fixed;
}

 .profile_title{
   text-align: center;
   font-size: 24px;
   font-weight: bold;
   color: #f1f2f6;
 }
</style>