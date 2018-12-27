<template>
  <div class="app-Product">
    <!-- 顶部搜索栏-->    
    <div class="top">
        <img src="http://127.0.0.1:3000/img/back.png" @click="backhome">
        <input type="search" class="" placeholder="输入产品名称或代码">
        <a href="#">
            <img src="http://127.0.0.1:3000/img/product_category_menu.png">
        </a>
    </div>
    <!-- 商品列表 -->
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in productlist" :key="item.id">
            <a @click="go_productinfo(item.id)" class="product_list">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    {{item.title}}
                    <div class="product_list_middle">
                        <span>{{item.details}}</span>
                        <div>
                            <img src="http://127.0.0.1:3000/img/pv.png">
                            <span> {{item.PV}}</span>
                        </div>
                    </div>
                    <p>￥{{item.price}}</p>
                </div>
            </a>
        </li>
    </ul>
  </div>
</template>
<script>
  export default {
        data(){
            return{
                productlist:[],
            }
        },
        methods:{
            getProductList(){
                this.$http.get("productlist").then(result=>{
                    this.productlist = result.body;
                })
            },
            backhome(){
                this.$router.push("/home")
            },
            go_productinfo(id){
                this.$router.push("/home/shopinfo/"+id)
            }
        },
        created() {
            this.getProductList();
        },
    }
</script>
<style>
      /* 顶部 logo 搜索栏 */
    .app-Product{
        padding-bottom:100px;
    }
    .app-Product div.top{
        padding-top:5px;
        padding-left:10px;
        display:flex;
        background-color: #eee;
    }
    .app-Product div.top>img{
        height:24px;
        margin-top:5px;
        margin-right:20px;
    }
    .app-Product div.top input{
        width:270px;
        height:32px;
        margin-right:16px;
        margin-bottom:5px;
    }
    .app-Product div.top a{
      margin-top:5px;
    }
    /* 商品列表 */
    .app-Product .product_list{
        padding-bottom:0 !important
    }
    .app-Product .product_list .mui-pull-left{
        max-width:100px;
        height:100px;
    }
    .app-Product .product_list .mui-media-body{
        padding-left:30px;
        color: #3d3e3e;
        font-size:16px;
        line-height:30px;
    }
    .app-Product .product_list .product_list_middle{
        display:flex;
        justify-content:space-between;
        margin-top:-10px;
    }
    .app-Product .product_list_middle span{
        font-size: 12px;
        color:#8b8b8b;
    }
    .app-Product .mui-media-body p{
        font-size: 16px;
        color:#a51f2d;
        margin-top:20px;
    }
</style>