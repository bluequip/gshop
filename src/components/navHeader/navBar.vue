<template>
  <div class="headerNav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
.headerNav {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #1dd1a1;
  box-shadow: 0 1px 3px #ccc;
  z-index: 8;
}
</style>