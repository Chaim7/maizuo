<template>
  <div class = 'home-page'>
  <LvSwiper :slides = 'bannerList'></LvSwiper>
  <Lvtabs></Lvtabs>
</div>
</template>

<script>
import Swiper from '../../components/Swiper'
import { getbannerList } from '../../api/film'
import Tabs from '../../components/Tabs'
export default {
  data () {
    return {
      bannerList: []
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
