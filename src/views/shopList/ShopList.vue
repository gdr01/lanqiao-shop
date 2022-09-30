<template>
    <div class="wrapper">
        <Backer message="附近商铺"/>
        <div class="nearby">
            <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
                <ShopInfo :item="item"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Backer from '@/components/Backer.vue';
import { get } from '@/utils/request';
import ShopInfo from '@/components/ShopInfo'
const useNearbyListEffect = ()=>{
    const nearbyList = ref([])
    const getNearbyList = async()=>{
        const result = await get('hotList.json')
        if(result?.errno===0 &&result?.data?.length){
            nearbyList.value = result.data
        }
    }
    return{nearbyList,getNearbyList}
}

export default {
    name:'Nearby',
    components:{Backer,ShopInfo},
    setup(){
        const {nearbyList,getNearbyList} = useNearbyListEffect()
        //请求函数获取店铺信息
        getNearbyList()
        return {nearbyList}
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
    .wrapper{
        overflow-y: auto;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: $dark-bgColor;
    }
    .nearby {
      padding: 0 0.18rem;
      &__title {
        color: $content-fontcolor;
        font-size: 0.14rem;
        font-weight: normal;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid $content-bgColor;
        padding: 0.15rem 0;
        margin: 0;
      }
      a {
        text-decoration: none;
        color: $content-fontcolor;
      }
    }
</style>