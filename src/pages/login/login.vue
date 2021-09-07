<template>
  <div id="p_login_box">
      <div class="p_login_title">
        <span class="iconfont icon-back" @click="userclick"></span>
        <!-- <router-link class="iconfont icon-back" to="/profile" tag="span"></router-link> -->
        <span class="p_help_text">帮助</span>
      </div>
      <section class="p_login_form">
        <div class="p_login_form_title">用户登录</div>
        <div class="login_choose_method">
          <span @click="isActive=!isActive" class="loginByUsername" :class="{Active:isActive}">密码登录</span>
          <span @click="isActive=!isActive" class="loginByTel" :class="{Active:!isActive}">手机登录</span>
        </div>
        <form v-if="isActive">
            <div class="form-group  form_father">
              <i class="iconfont icon-icon-person"></i>
              <input type="tel" v-model="tel" class="form-control login_username" name="tel" ref="telValue"  :placeholder="telPlaceholder" autocomplete="off">
            </div>
            <div class="form-group form_father ">
              <i class="icon-tuanduicankaoxian-6 iconfont"></i>
              <input type="password" v-model="password" class="form-control login_password" name="password"  :placeholder="pwdTelPlaceholder" autocomplete="off">
            </div>
          <button type="submit" :disabled="!protocol" :class="{btnDisabled:!protocol}" class="btn">登录</button>
          <div class="login_else">
            <a href="javascript:;">前往注册</a>
            <a href="javascript:;">忘记密码</a>
          </div>
        </form>
        <form v-else>
          <div class="form-group form_father">
              <i class="iconfont icon-icon-person"></i>
              <input type="text" v-model="username" class="form-control login_username"  name="username"  placeholder="| 请输入电话号码" autocomplete="off">
          </div>
          <div class="form-group form_father">
              <i class="icon-tuanduicankaoxian-6 iconfont"></i>
              <input type="password" v-model="tel_password" class="form-control login_password"  name="password" placeholder="| 请输入密码" autocomplete="off">
          </div>
          <div class="login_else">
            <a href="javascript:;" >前往注册</a>
            <a href="javascript:;">忘记密码</a>
          </div>
          <button type="submit" :disabled="!protocol" :class="{btnDisabled:!protocol}" class="btn">登录</button>
        </form>
        <div class="login_protocol">
          <div class="form-check">
            <input v-model="protocol" type="checkbox" class="form-check-input" id="exampleCheck1">
            <span>我已阅读并同意<a href="javascript:;">《硅谷外卖用户协议》</a>、<a href="javascript:;">《隐私协议》</a> 、并授权硅谷使用使用该硅谷账号信息
              (如昵称、头像、收货地址)进行统一管理</span>
          </div>
        </div>
      </section>
  </div>
</template>

<script>

export default {
  name: "login",
  data(){
    return {
      isActive: true,
      telPlaceholder: "| 请输入用户名",
      pwdTelPlaceholder: "| 请输入验证码",
      username:"",
      password:"",
      tel_password:"",
      tel:"",
      protocol: false
    }
  },
  methods: {
    userclick(){
      this.$router.replace("/profile")
    }
  },
}
</script>

<style scoped>
.p_login_title{
  display: flex;
  height: 44px;
  line-height: 44px;
  padding: 10px 30px;
  justify-content: space-between;
}


.p_login_title span{
  color: #1dd1a1;
  font-size: 20px;
  font-weight: bolder;
}
/*注册页面*/
.p_login_form {
  margin: 60px auto;
  width: 100%;
}

.p_login_form_title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
  color: #747d8c;
  font-style: initial;
}

.login_choose_method{
  text-align: center;
}

.loginByUsername ,.loginByTel{
  width: 80px;
}

.loginByUsername,.loginByTel{
  display: inline-block;
  padding: 20px;
}

.Active{
  border-bottom: 2px solid #1dd1a1;
  text-decoration: #1dd1a1;
}

/*输入框*/
.form-group {
  position: relative;
}

.login_username,.login_password {
  padding-left: 40px;
}

.form-group .login_username{
  position: absolute;
  margin-top: 20px;
  left: 52%;
  transform: translate(-50%,-50%);
  width: 70%;
  outline: none;
  border: 1px solid #ccc;
  height: 35px;
  border-radius: 5px;
}

.form-group .login_password {
  position: absolute;
  margin-top: 80px;
  left: 52%;
  transform: translate(-50%,-50%);
  width: 70%;
  outline: none;
  border: 1px solid #ccc;
  height: 35px;
  border-radius: 5px;
}

.form-group .icon-icon-person{
  position: absolute;
  z-index: 5;
  top: 13px;
  left: 53px;
}

.form-group .icon-tuanduicankaoxian-6{
  position: absolute;
  z-index: 5;
  top: 73px;
  left: 53px;
}

.btn{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding:10px 50px;
  border-radius: 10px;
  background-color: #05c46b;
  color: white;
  border: none;
}

.form-check {
  position: absolute;
  bottom: 1%;
  right: 0;
  padding: 20px;
}

.form-group span{
  text-indent: 2.5em;
  font-size: 8px;
  text-align: left;
}

.login_else a:first-child{
  position: absolute;
  text-decoration: none;
  top: 50%;
  left: 10%;
  color: #cccccc;
  -webkit-tap-highlight-color: transparent;
}

.login_else a:last-child{
  position: absolute;
  text-decoration: none;
  top: 50%;
  right: 10%;
  color: #cccccc;
  -webkit-tap-highlight-color: transparent;
}

.login_else a:hover{
  color: #05c46b;
}

.btnDisabled{
  background-color: #d2dae2;
}

</style>