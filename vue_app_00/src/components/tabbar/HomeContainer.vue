<template>
  <div class="app-HomeContainer" v-if="logo.length>0?true:false">
  <!-- 顶部搜索栏-->    
    <div class="top">
        <img :src="logo[0].img_url">
        <input type="search" class="" placeholder="输入产品名称或代码">
        <a href="#">
            <img :src="logo[1].img_url">
            <p>验一验</p>
        </a>
    </div>
  <!-- 轮播图 -->
    <swiper-box :list="imagelist"></swiper-box>
  <!-- 八宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" v-for="item in bagong" :key="item.id" @click="click_bagong(item.id)">
            <img :src="item.img_url" />
            <div class="mui-media-body">{{item.title}}</div>
        </li>
    </ul>
  <!-- 最新通告 -->
    <div class="zuixin">
        <div class="zuixin_div1">
            <img :src="logo[2].img_url">
        </div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in zuixin" :key="item.id">
                <p>{{item.title}}</p>
            </mt-swipe-item>
        </mt-swipe>
    </div>
  <!-- 分隔条 -->
    <div class="divider"></div>
  <!-- 图文表格 -->
    <div class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in imagelist1" :key="item.id">
                <a @click="goshop">
                    <img class="mui-media-object" :src="item.img_url">
                </a>
            </li>
        </ul>    
    </div>
  </div>
</template>
<script>
  import swiper from "../sub/swiper.vue";

  export default {
        data(){
            return{
                imagelist:[],
                logo:[],
                bagong:[],
                zuixin:[],
                imagelist1:[],
            }
        },
        methods:{
            getImageList(){
                this.$http.get("imagelist").then(result=>{
                    this.imagelist = result.body;
                })
            },
            getLogo(){
                this.$http.get("select").then(result=>{ 
                    this.logo = result.body
                })
            },
            getBagongge(){
                this.$http.get("bagongge").then(result=>{
                    this.bagong = result.body
                })
            },
            getZuixin(){
                this.$http.get("zuixin").then(result=>{
                    this.zuixin = result.body
                })
            },
            getImageList1(){
                this.$http.get("imagelist1").then(result=>{
                    this.imagelist1 = result.body;
                })
            },
            click_bagong(i){
                var id = i;
                if(id == 1){
                    this.$router.push("/home/shop")
                };
                if(id == 2 || id == 4 || id == 5 || id == 6 || id == 7 || id == 8){
                    this.$router.push("/home/login")
                };
                if(id == 3){
                    this.$toast('此功能仅支持手机端微信操作 ！')
                }
            },
            goshop(){
                this.$router.push("/home/shop")
            }
        },
        created() {
            this.getImageList();
            this.getLogo();
            this.getBagongge();
            this.getZuixin();
            this.getImageList1();
        },
        components:{
            "swiper-box":swiper
        },
    }
</script>
<style>
    /* 顶部 logo 搜索栏 */
    .app-HomeContainer div.top{
        padding-top:15px;
        padding-left:10px;
        display:flex;
        background-color: #fcfcfc;
    }
    .app-HomeContainer div.top>img{
        height:35px;
        margin-right:15px;
    }
    .app-HomeContainer div.top input{
        width:226px;
        height:32px;
        margin-right:16px;
    }
    .app-HomeContainer div.top a{
        display:block;
        height:34px;
        color:#b7b6b9;
        font-size:12px;
        text-align:center;
    }
    .app-HomeContainer div.top p{
        font-size:12px;
        margin-top:-8px;
    }
    /* 八宫格 */
    .app-HomeContainer .mui-table-view{
        padding-top:20px !important;
        background:#fff !important;
        margin-bottom:20px !important;
    }
    .app-HomeContainer .mui-grid-9 .mui-table-view-cell{
        padding:0 !important;
        border:0 !important;
        margin-bottom:10px !important;
    }
    .app-HomeContainer .mui-media-body{
        color: #858585 !important;
        font-family: 华文细黑;
        font-size: 13px !important;
        margin-right:0 !important;
    }
    /* 最新 */
    .app-HomeContainer .zuixin{
        display:flex;
        border-top:1px solid #ddd;
        padding:10px;
    }
    .app-HomeContainer .zuixin .zuixin_div1{
        padding-right:8px;
        border-right:1px solid #ddd;
    }
    .app-HomeContainer .zuixin img{
        width:70px;
        height:13px;
    }
    .app-HomeContainer .zuixin .mint-swipe{
        width:300px;
        height:18px;
    }
    .app-HomeContainer .zuixin p{
        font-size:13px;
        color:#000;
        margin-left:8px;
        margin-bottom:0;
    }
    /* 分隔条 */
    .app-HomeContainer .divider{
        height:10px;
        background-color:#f1f1f1;
    }
    /* 图文表格 */
    .app-HomeContainer .mui-content{
        margin-bottom:55px;
    }
    .app-HomeContainer .mui-content ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 7px !important;
        padding:0;
    }
    .app-HomeContainer .mui-content ul a{
        padding:0 !important;
    }
</style>