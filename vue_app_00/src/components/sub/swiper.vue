<template>
    <div class="app-subswiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return{}
        },
        props:["list"]
    }
</script>
<style>
    .app-subswiper .mint-swipe{
        height:150px;
    }
    .app-subswiper .mint-swipe img{
        height:150px;
        width:100%;
    }
</style>