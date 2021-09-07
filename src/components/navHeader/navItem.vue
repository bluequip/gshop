<template>
  <div class="navItem">
    <div><slot name="login_box"></slot></div>
    <div><slot name="Search_box"></slot></div>
    <div><slot name="location_box"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navItem"
}
</script>

<style scoped>
.navItem{
  height: 44px;
  line-height: 44px;
  position: relative;
}
</style>