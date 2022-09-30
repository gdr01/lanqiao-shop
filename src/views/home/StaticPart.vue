<template>
    <div class="main">
        <div class="wrapper">
            <div class="position">
                <span class="iconfont position_icon">&#xe641;</span>
                    杭州梦想小镇
                <span class="iconfont position_notice">&#xe642;</span>
            </div>
            <div class="search">
                <span class="iconfont">&#xe63c;</span>
                <span class="search__text">永辉超市优惠商品</span>
            </div>
        </div>
        <div class="banner">
            <img class="banner__img" src="../../assets/02.jpg" >
        </div>
        <div class="icons">
            <div class="icons__item" v-for="item in iconsList" :key="item.desc">
                <img class="icons__item__img" :src="item.imgName"/>
                <p class="icons__item__desc">{{item.desc}}</p>
            </div>
        </div>
        <div class="gap">
            <nearby></nearby>
        </div>
    </div>
</template>

<script>
    import Nearby from './Nearby.vue';
    export default {
        name :'StaticPart',
        components:{Nearby},
        setup(){
            //声明对象，vue组件中可以直接使用
            const iconsList = [
                {imgName:require('../../assets/super.png'),desc:"超市便利"},
                {imgName:require('../../assets/market.png'),desc:"菜市场"},
                {imgName:require('../../assets/fruits.png'),desc:"水果店"},
                {imgName:require('../../assets/flower.png'),desc:"鲜花绿植"},
                {imgName:require('../../assets/drug.png'),desc:"医药健康"},
                {imgName:require('../../assets/home.png'),desc:"时尚家具"},
                {imgName:require('../../assets/cake.png'),desc:"蛋糕烘焙"},
                {imgName:require('../../assets/sign.png'),desc:"签到"},
                {imgName:require('../../assets/prestige.png'),desc:"大牌免运"},
                {imgName:require('../../assets/red.png'),desc:"红包套餐"},
            ]
            return {iconsList}
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/viriables.scss';
    @import '../../style/mixins.scss';
    .main{
        //设置背景线性渐变 从上到下渐变 从4%位置开始 渐变到50%
        background-image: linear-gradient(0deg,rgba(0,145,255,0) 4%,#0091ff 50%);
  
    }
    .wrapper{
        background-color: #0091ff;
        height: 100px;
        padding: 0 0.18rem;
        .position{
            position: relative;
            padding: .16rem .24rem .16rem 0;
            line-height: .22rem;
            font-size: .16rem;
            .position_icon{
                position: relative;
                top: .01rem;
                font-size: .2rem;
            }
            .position_notice{
                position: absolute;
                right: 0;
                top: .17rem;
                font-size: .2rem;
            }
            color: #ffffff;
        }
        .search{
            margin-bottom: .12rem;
            line-height: .32rem;
            background: #ffffff;
            color: $search-fontColor;
            border-radius: .16rem;
            .iconfont{
                display: inline-block;
                padding: 0 .08rem 0 .16rem;
                font-size: .16rem;
            }
            &__text{
                display: inline-block;
                font-size: .14rem;
            }
        }
    }
    .banner{
        height: 0;
        //当父元素设定了height值时，子元素设置了overflow:hidden属性，子元素超出的部分就会隐藏
        overflow: hidden;
        padding-bottom: 25.4%;
        &__img{
            width: 100%;
        }
    }
    .icons{
        //设置盒子的弹性布局
        display: flex;
        //让盒子在必要时拆行
        flex-wrap: wrap;
        margin-top: .16rem;
        &__item{
            width: 20%;
            &__img{
                display: block;
                width: .4rem;
                height: .4rem;
                margin: 0 auto;
            }
            &__desc{
                margin: .06rem 0 .06rem 0;
                text-align: center;
                color: $content-fontcolor;
            }
        }
    }
    .gap{
        //设定高度
        height: .1rem;
        background: $content-bgColor;
    }
</style>