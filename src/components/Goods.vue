<template>
    <div class="product__item">
      <slot name="checker"></slot>
      <img class="product__item__img" :src="item.imgUrl" />
      <div class="product__item__detail">
        <h4 class="product__item__title">{{item.name}}</h4>
        <p class="product__item__sales">月售 {{item.sales}} 件</p>
        <p class="product__item__price">
          <span class="product__item__yen">&yen;</span>{{item.price}}
          <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
        </p>
      </div>
      <div class="product__number">
        <span
          class="product__number__minus iconfont" @click="handleDecreaseClick">&#xeb86;
        </span>
        <slot name="count"></slot>
        <span
          class="product__number__plus iconfont" @click="handleIncreaseClick">&#xeb83;
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        emits: ['increase','decrease'],
        setup(props,{ emit }){
            const handleIncreaseClick = () =>{emit("increase")};
            const handleDecreaseClick = () =>{emit("decrease")};
            return{
                handleIncreaseClick,
                handleDecreaseClick
            }
        }
}
</script>

<style lang="scss" scoped>
    @import '../style/viriables.scss';
    @import '../style/mixins.scss';
    .product {
        &__item {
        position: relative;
        display: flex;
        align-items: center;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid $content-bgColor;
        &__detail {
            overflow: hidden;
        }
        &__img {
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }
        &__title {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis;
        }
        &__sales {
            margin: .06rem 0;
            font-size: .12rem;
            color: $content-fontcolor;
        }
        &__price {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $hightlight-fontColor;
        }
        &__yen {
            font-size: .12rem;
        }
        &__origin {
            margin-left: .06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: $light-fontColor;
            text-decoration: line-through;
        }
    .product__number {
            position: absolute;
            right: 0;
            bottom: .12rem;
            line-height: .18rem;
            &__minus {
            position:relative;
            top: .02rem;
            color: $medium-fontColor;
            margin-right: .05rem;
            }
            &__plus {
            position:relative;
            top: .02rem;
            color: $btn-bgColor;
            margin-left: .05rem;
            }
        }
    }

}
</style>

