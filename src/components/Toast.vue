<template>
    <div class="toast">
        {{message}}
    </div>
</template>

<script>
    import { reactive,toRefs } from 'vue'
    export default{
        props:['message']
    }
    export const useToastEffect =() =>{
        //定义toast两个属性，一个是控制是否现实的状态，一个是显示的文本内容
        const toastData = reactive({
            show : false,
            toastMessage :''
        })
        const showToast = (message) =>{
            //根据外部组件传递的参数 进行message值的设置
            toastData.show = true
            toastData.toastMessage = message
            //延迟2000毫秒，改变toastData的值
            setTimeout(()=>{
                toastData.show = false
                toastData.toastMessage = ''
            },2000)
        }
        const {show,toastMessage} = toRefs(toastData)
        return {show,toastMessage,showToast}
    }
</script>

<style lang="scss" scoped>
    @import '../style/viriables.scss';
    .toast{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: .1rem;
        background: rgba(0,0,0,0.35);
        border-radius: .05rem;
        color: $bgColor;
    }
</style>