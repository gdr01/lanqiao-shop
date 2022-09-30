<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺
          <router-link to="/shopList">查看更多</router-link>
        </h3>
            <router-link
                v-for="item in nearbyList"
                :key="item._id"
                :to="`/shop/${item._id}`"
                >
              <ShopInfo :item="item"/>
            </router-link>

    </div>
</template>

<script>
import {ref} from 'vue'
import {get} from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

//请求附近店铺数据
const useNearbyListEffect =()=>{

    const nearbyList = ref([]);
    //请求mock数据，从hostList.json中获取
    const getNearbyList = async() =>{
        const result = await get('hotList.json')
        //请求成功了，并且拿到了数据
        if(result?.errno ===0 && result?.data?.length){
            nearbyList.value = result.data
        }
    }
    return {nearbyList,getNearbyList}

}

export default{
    name: 'Nearby',
    components:{ShopInfo},
    setup(){
        const {nearbyList,getNearbyList} = useNearbyListEffect()
        //调用函数获取数据
        getNearbyList();
        console.log("nearbyList=",nearbyList)
        return {nearbyList}
    }
}

</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
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