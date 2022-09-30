<template>
    <div class="wrapper">
        <img class="wrapper__img" src="../../assets/lanqiao-logo.svg">
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="text" placeholder="请输入手机号" v-model="username" />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="paassword" placeholder="确认密码" v-model="ensurement" />
        </div>
        <div class="wrapper__register-button" @click="handleRegister">注册</div>
        <div class="wrapper__register-link" @click="handleLogin">已有帐号去登陆</div>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {reactive,toRefs} from 'vue'
import Toast,{useToastEffect} from '../../components/Toast.vue'


//处理注册相关逻辑
const useRegisterEffect = (showToast) => {
    const data = reactive({
        username: '',
        password: '',
        ensurement: ''
    })

    const handleRegister = async () => {
        //账号不能为空
            if(!data.username){
            showToast('账号不能为空')
            return false;
        }

        //输入正确的手机号
        var myPhoneReg = /^1\d{10}$/;
        if(!myPhoneReg.test(data.username)){
            showToast('手机号码无效')
            return false;
        }

        //密码不能为空
        if(!data.password || !data.ensurement){
            showToast('密码不能为空')
            return false;
        }

        //密码不一致
        if(!data.password != data.ensurement){
            showToast('密码不一致')
            return false;
        }

        showToast('注册成功')
    }

    const { username,password,ensurement } = toRefs(data)
    return { username,password,ensurement,handleRegister}
}

//处理登录跳转
const useLoginEffect = () => {
    const router = useRouter()
    const handleLoginClick = () => {
        router.push({
            name: 'Login'
        })
    }
        return {handleLoginClick}
    }
    export default {
        name: 'Register',
        components: {Toast},
        setup() {
            const {show,toastMessage,showToast} = useToastEffect()
            const {username,password,ensurement,handleRegister} = useRegisterEffect(showToast)
            const {handleLoginClick} = useLoginEffect();
            return {
            username,password,ensurement,show,toastMessage,handleRegister,handleLoginClick
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/viriables.scss';
    .wrapper{
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        &__img{
            display: block;
            margin: 0 auto .4rem auto;
        }
        &__input{
            height: .48rem;
            margin: 0 .4rem .16rem .4rem;
            padding: 0 .16rem;
            background: #f9f9f9;
            border: .01rem solid rgab(0,0,0,0.10);
            border-radius: .06rem;
            &__content{
                margin-top: .12rem;
                line-height: .22rem;
                border: none;
                outline: none;
                width: 100%;
                background: none;
                font-size: .16rem;
                color: $content-notice-fontcolor;
                &::placeholder{
                    color: $content-notice-fontcolor;
                }
            }
        }
        &__register-button{
            margin: .32rem .4rem .16rem .4rem;
            line-height: .48rem;
            background: $btn-bgColor;
            box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
            border-radius: .04rem;
            color: $bgColor;
            font-size: .16rem;
            text-align: center;
        }
        &__register-link{
            text-align: center;
            font-size: .14rem;
            color: $content-notice-fontcolor;
        }
    }


</style>