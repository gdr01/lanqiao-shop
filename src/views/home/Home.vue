<template>
    <div class="wrapper">
        <StaticPart />
    </div>
</template>
<script>
import StaticPart from './StaticPart.vue';
    export default{
        name: 'Home',
        components:{ StaticPart }
    }
</script>
<style lang="scss" scoped>
    .wrapper{
        overflow-y: auto;
        position: absolute;
        left: 0;
        top: 0;
        bottom: .5rem;
        right: 0;
    }
</style>