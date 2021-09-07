<template>
  <div class="footer_Bar">
    <tabbar>
      <tabBarItem path="/msite" activeItem="blue">
        <div slot="item_icon" class="iconfont icon-tuanduicankaoxian-2"></div>
        <div slot="item_icon_a" class="iconfont icon-lvsefenkaicankaoxianban-3"></div>
        <div slot="item_text">店铺</div>
      </tabBarItem>
      <tabBarItem path="/search" activeItem="#ff7f50">
        <div slot="item_icon" class="iconfont icon-tuanduicankaoxian-5"></div>
        <div slot="item_icon_a" class="iconfont icon-lvsefenkaicankaoxianban-5"></div>
        <div slot="item_text">搜索</div>
      </tabBarItem>
      <tabBarItem path="/order" activeItem="#ff6b81">
        <div slot="item_icon" class="iconfont icon-tuanduicankaoxian-1"></div>
        <div slot="item_icon_a" class="iconfont icon-lvsefenkaicankaoxianban-1"></div>
        <div slot="item_text">订单</div>
      </tabBarItem>
      <tabBarItem path="/profile" activeItem="#5352ed">
        <div slot="item_icon" class="iconfont icon-tuanduicankaoxian-"></div>
        <div slot="item_icon_a" class="iconfont icon-lvsefenkaicankaoxianban-"></div>
        <div slot="item_text">我的</div>
      </tabBarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";
import tabBarItem from "@/components/tabbar/tabBarItem";
export default {
  name: "footerBar",
  components:{
    tabbar,
    tabBarItem
  }
}
</script>

<style scoped>
.footer_Bar{
  padding-top: 50px;
}

.iconfont{
  margin-top: 5px;
  margin-bottom: 3px;
  font-size: 21px;
}
</style>