<template>
 <div class="app-container">
    <!--1——容器显示不同组件-->
    <router-view></router-view>
    <!--2——底部导航栏-->
    <nav class="mui-bar mui-bar-tab">
        <div class="mui-tab-item" v-for="item in index_list" :key="item.id" @click="click_index(item.id)">
            <img :src="item.img_url">
            <p>{{item.title}}</p>
        </div>
    </nav>
 </div>
</template>
<script>
      export default {
        data(){
            return{
                index_list:[],
            }
        },
        methods:{
            getIndexList(){
                this.$http.get("index_list").then(result=>{
                    this.index_list = result.body;
                })
            },
            click_index(i){
                var id = i;
                if(id == 1){
                    this.$router.push("/home")
                };
                if(id == 2 || id == 4 || id == 5){
                    this.$router.push("/home/login")
                };
                if(id == 3){
                    this.$toast('此功能仅支持手机端微信操作 ！')
                }
            }
        },
        created() {
            this.getIndexList();
        },
    }
</script>
<style>
    body{
        background:#fff !important;
    }
   .app-container{
        overflow-x:hidden;
   }
   /* 底部导航栏 */
   .app-container .mui-bar{
       padding-top:5px;
   }
   .app-container .mui-bar p{
       margin:0;
   }
</style>
