<template>
  <div class="Msite_tabBar">
    <!--    v-for遍历数据进行传递  -->
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guozhi"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiu"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-miantiao"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kuangquanshui"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mifan"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tiandian"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuiguo"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
    <div class="tableBar_Item">
      <a href="javascript:;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dabao"></use>
        </svg>
        <p>果汁饮品</p>
      </a>
    </div>
  </div>
</template>

<script>
import "../../../assets/font/iconfont.js"

export default {
  name: "tableBar"
}
</script>

<style scoped>
.icon {
  width: 100%;
  height: 50%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.Msite_tabBar {
  display: flex;
  width: 94%;
  height: 180px;
  max-width: 1024px;
  margin: 10px auto 5px auto;
  flex-wrap: wrap;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #cccccc;
}

.tableBar_Item {
  box-sizing: border-box;
  padding-top: 10px;
  width: 25%;
  height: 50%;
}

.tableBar_Item a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  color: #2ecc71;
}

.tableBar_Item a p {
  padding-top: 5px;
}
</style>