<template>
  <div id="profile_box">
    <profileMsg></profileMsg>
    <ProfileCollect></ProfileCollect>
  </div>
</template>

<script>
import ProfileCollect from "@/pages/Profile/profileComponents/ProfileCollect";
import profileMsg from "@/pages/Profile/profileComponents/profileMsg";
export default {
  name: "profile",
  components:{
    ProfileCollect,
    profileMsg
  }
}
</script>

<style scoped>
#profile_box{
  width: 100%;

  
}

</style>