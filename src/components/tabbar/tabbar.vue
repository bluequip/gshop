<template>
  <div class="footer">
    <slot>
    </slot>
  </div>
</template>
<script>

export default {
  name: "tabbar"
}
</script>

<style scoped>
  .footer{
    display: flex;
    position: fixed;
    height: 52px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
  }
</style>