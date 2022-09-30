<template>
    <div class="docker">
        <!-- 动态样式 -->
        <div v-for="item in dockerList" :class="{'docker__item':true}" :key="item.icon">
            <router-link :to="item.to">
                <div class="iconfont" v-html="item.icon"></div>
                <div class="docker__title">{{item.text}}</div>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
    name:'Docker',
    setup(){
        //由于其他页面暂缺，此处都为Home
        const dockerList = [
            {icon:'&#xe6d9;',text:'首页',to:{name:'Home'}},
            {icon:'&#xe63b;',text:'购物车',to:{name:'Home'}},
            {icon:'&#xe63a;',text:'订单',to:{name:'Home'}},
            {icon:'&#xe6df;',text:'我的',to:{name:'Home'}},
        ];
        return {dockerList}
    }
}

</script>

<style lang="scss" scoped>
    @import '../style/viriables.scss';
    .docker{
        display: flex;
        //元素的高度或者宽度包含边框和内边距
        box-sizing: border-box;
        position: fixed;
        padding: 0 .18rem;
        left: 0;
        bottom: 0.03rem;
        width: 100%;
        height: .49rem;
        border-top: .01rem solid $content-bgColor;
        //设置水平布局，水平分割距离 是每个元素间距相同（两端对齐）
        justify-content: space-between;

        &__item {
            text-align: center;
            a {
                color: $content-fontcolor;
                //设置下划线样式
                text-decoration: none;
            }
            .iconfont{
                margin: .07rem 0 .02rem 0;
                font-size: .22rem;
            }
        }
        &__title{
            font-size: .22rem;
            transform: scale(.5,.5);
            transform-origin: center top;
        }
    }
    a.active{
        color: #1fa4fc;
    }
</style>