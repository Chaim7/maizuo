<template>
  <div class = 'page-home'>
      <div class = 'page-home__view'>
        <router-view></router-view>
      </div>
      <!-- tabbar -->
  <mt-tabbar v-model = "selected">
  <mt-tab-item id="外卖">
    <i class="iconfont icon-component "> </i>
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
     <i class="iconfont icon-bussiness-man"> </i>
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
     <i class="iconfont icon-all"> </i>
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
     <i class="iconfont icon-auto"> </i>
    我的
  </mt-tab-item>
</mt-tabbar>
</div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'Home',
  components: {
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem
  },
  data () {
    return {
      selected: '外卖'
    }
  }
}
</script>

<style lang = 'scss'>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__view {
    flex: 1;
    overflow-y: auto;
  }

  .mint-tabbar {
    position: static;

    .mint-tab-item {
      color: #797d82;

      &.is-selected {
        background-color: transparent;
        color: #ff5f16;
      }
    }

    .iconfont {
      font-size: 24px;
      display:block;
    }
  }
}
</style>
