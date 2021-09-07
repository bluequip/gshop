<template>
  <div id="profile_Msg">
   <div class="profile_login_msg">
     <div id="profile_Msg_Avatar">
       <a href=""><img src="../img/014cd95547629a0000002b01dd3c4e.jpg@1280w_1l_2o_100sh.jpg" alt=""><router-link class="login_btn" tag="a" to="/login">登录/注册</router-link></a>
     </div>
     <div >
<!--       link 跳转到设置页面      -->
        <div class="profile_message_icon"><a href="javascript:;"><i class="iconfont icon-notification"></i></a></div>
        <div class="profile_set_icon"><a href="javascript:;"><i class="iconfont icon-shezhi"></i></a></div>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  name: "profileMsg"
}
</script>

<style scoped>
#profile_Msg{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  z-index: 5;
}

.profile_login_msg{
  position: relative;
  display: flex;
  width: 95%;
  height: 44px;
  margin: 8px auto;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
}

#profile_Msg_Avatar {
  overflow: hidden;
  width: 44px;
  height: 44px;
  border-radius: 50%;
}

#profile_Msg_Avatar img{
  width: 100%;
  height: 100%;
}

#profile_Msg_Avatar .login_btn{
  position: absolute;
  top: 14px;
  left: 70px;
  color: #00b894;

  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.profile_message_icon,.profile_set_icon{
  display: inline-block;
}

.profile_message_icon a,.profile_set_icon a{
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.profile_message_icon i,.profile_set_icon i{
  font-size: 30px;
  padding: 0 13px;
  color: #00b894;
}


</style>