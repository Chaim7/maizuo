<template>
  <ul class = 'lv-tabs'>
      <li class="lv-tabs__item"
      v-for = '(item,index) in tabs'
      :key='index'
      :class="{'active': value == index}"
      @click = 'value = index'>{{item}}</li>
      <div class="lv-tabs__line">
          <span style='width:56px'></span>
      </div>
  </ul>
</template>

<script>
export default {
  name: 'Lvtabs',
  props: {
    vslue: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default () {
        return [
          '正在上映', '即将上映'
        ]
      }
    }
  },
  data () {
    return {
      value: this.value
    }
  }
}
</script>

<style lang = 'scss'>
@import '~@/assets/styles/mixins.scss';
.active{
    color:#ff5f16;
    transform:tanslateX(100%)
}
.lv-tabs{
    @include border-bottom;
      height: 50px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
    transition: transform .2s cubic-bezier(.35,0,.25,1);
    transition: transform .2s cubic-bezier(.35,0,.25,1);
    position: relative;
    &__item{
        flex:1;
        text-align: center;
    }
    &__line{
        display:flex;
        position:absolute;
        height:2px;
        bottom:0;
        left:0;
        width:50%;
        justify-content: center;
        transition: transform 0.3s ease-in;
         span {
      background: #ff5f16;
    }
    }
}
</style>
