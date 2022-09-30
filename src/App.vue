<template>
  <div>
    <!-- 用于路由管理，当我们需要对页面进行局部刷新的时候，就可以使用它。 -->
    <router-view></router-view>
    <Docker v-show="showNav"/>
  </div>
</template>

<script>
import { computed } from 'vue';
import Docker from './components/Docker.vue';
import { useRoute } from 'vue-router';
export default {
  name: 'App',
  components :{ Docker },
  setup(){
    const showNav = computed(()=>{
      //获取当前请求路径
      let nowPath = useRoute().path
      //判断路径是否正确
      if(
        nowPath=="/"||
        nowPath=="orderList"||
        nowPath=="/cratList"||
        nowPath=="/person"
      ){
        return true
      }else{
        return false
      }
    })
    return {showNav}
  }
}

</script>
<style lang="scss" scoped>
</style>
