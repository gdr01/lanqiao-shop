<template>
    <!-- style 行内样式，优先级最高 -->
    <!-- 此处的样式根据transparentBG的值把背景设置为透明，字体设置为白色 -->
    <div class="title" :style="{color:transparentBG&&'#fff',background:transparentBG&&'transparent'}">
        <div class="iconfont title__back" :style="{color:transparentBG&&'#fff'}" @click="handleBackClick">
            &#xe65c;
        </div>
        <div class="title__text">{{msg}}</div>
        <div class="title__add">
            <!-- 插槽，占位用的 -->
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
export default {
    props:['transparentBG','message'],
    setup(props){
        const msg = ref(props.message)
        const router = useRouter()
        //返回到上一个路由
        const handleBackClick = ()=>{router.back()}
        return {
            msg,handleBackClick
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../style//viriables.scss';
    .title{
        display: flex;
        line-height: .44rem;
        background: $bgColor;
        font-size: .16rem;
        color: $content-fontcolor;
        text-align: center;
        &__back {
            width: .2rem;
            margin-left: .18rem;
            font-size: .26rem;
            color: #b6b6b6;
        }
        &__text{
            flex: 1;
            text-align: center;
        }
        &__add{
            margin-right: .2rem;
            font-size: .14rem;
        }
    }
</style>