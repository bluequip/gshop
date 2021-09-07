<template>
  <div class="tabBar_item" @click="itemClick">
    <div v-if="!isActive" :style="activeStyle">
      <slot name="item_icon"></slot>
    </div>
    <div v-else :style="activeStyle">
      <slot name="item_icon_a"></slot>
    </div>
    <div>
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activeItem: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      isAct: false
    }
  }
  ,
  computed: {
    isActive() {
      //判断路径中是否包含当前点击的
      return this.$route.path.indexOf(this.path) !== -1;
    }
    ,
    activeStyle() {
      return this.isActive ? {color: this.activeItem} : {};
    }
  }
  ,
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err) // 路由跳转
    }
  }
}
</script>

<style scoped>
.tabBar_item {
  flex: 1;
  text-align: center;
  border: none;
}

</style>