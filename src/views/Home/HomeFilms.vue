<template>
  <div class = 'home-page'>
  <LvSwiper :slides = 'bannerList'></LvSwiper>
  <Lvtabs v-model="curTabIndex" :value="curTabIndex" @abc='curTabIndex = $event' :tabs="['正在上映', '即将上映']"></Lvtabs>
  <router-view></router-view>
</div>
</template>

<script>
import Swiper from '../../components/Swiper'
import { getbannerList } from '../../api/film'
import Tabs from '../../components/Tabs'
export default {
  data () {
    return {
      bannerList: [],
      curTabIndex: this.$route.name === 'nowplaying' ? 0 : 1 // 当前选中的下标
    }
  },
  watch: {
    curTabIndex (newVal) {
      // 当 curTabIndex 变化时，控制路由跳转
      let name = newVal === 0 ? 'nowplaying' : 'comingsoon'
      this.$router.replace({ name })
    }
  },
  components: {
    [Swiper.name]: Swiper,
    [Tabs.name]: Tabs
  },
  created () {
    getbannerList({
      type: 2,
      cityId: 440300,
      k: 1388702
    }).then((response) => {
      let result = response.data
      if (response.data.status === 0) {
        this.bannerList = result.data.map(item => item.imgUrl)
      }
    })
  }
}
</script>

<style lang = 'scss'>
</style>
