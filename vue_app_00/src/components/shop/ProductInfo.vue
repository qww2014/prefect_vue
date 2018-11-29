<template>
  <div class="app-ProductInfo" v-if="productlist.length>0?true:false">
    <div class="p-20 top_img">
      <img :src="productlist[id-1].img_url">
    </div>
    <div class="divider"></div>
    <div class="p-20 product">
      <p class="title">{{productlist[id-1].title}}</p>
      <p class="details">产品代号：{{productlist[id-1].details}}</p>
      <span class="PV">产品规格： --</span>
      <span class="PV"> PV：{{productlist[id-1].PV}}</span>
      <p class="price">￥{{productlist[id-1].price}}</p>
    </div>
    <div class="divider"></div>
    <div class="p-20 login" @click="go_login">
      <span>未登录(未设置 购货顾客)</span>
    </div>
    <div class="divider"></div>
    <div class="p-20">
      <p class="describe1">产品描述：</p>
      <p class="describe2">产品特点与功效：</p>
      <div v-html="productlist[this.id-1].describe" class="describe3">
        <div>{{productlist[this.id-1].describe}}</div>
      </div>
    </div>
    <div class="footer">
      <router-link to="/home">
        <img src="http://127.0.0.1:3000/img/home_qn.png">
        <p>首页</p>
      </router-link>
      <router-link to="/home/login">
        <img src="http://127.0.0.1:3000/img/cart_qn.png">
        <p>购物车</p>
      </router-link>
      <div @click="toast_login">加入购物车</div>
      <div @click="toast_login">立即购买</div>
      <div@click="back_product">上一页</div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        productlist:[],
      }
    },
    methods:{
      go_login(){
        this.$router.push("/home/login")
      },
      getProductList(){
        this.id = this.$route.params.id;
        this.$http.get("productlist?id="+this.id).then(result=>{
          this.productlist = result.body
        })
      },
      toast_login(){
        this.$toast('您还没有登录，请登录 ！')
      },
      back_product(){
        this.$router.push("/home/shop")
      }
    },
    created(){
      this.getProductList()
    }
  }
</script>
<style>
  .app-ProductInfo{
    padding-bottom:50px;
  }
  .app-ProductInfo .p-20{
    padding:20px;
  }
  .app-ProductInfo .top_img{
    text-align:center;
  }
  .app-ProductInfo .divider{
    background-color:#f1f1f1;
    height:10px;
  }
  .app-ProductInfo .title{
    color:#3d3e3e;
    font-size:18px;
    line-height:30px;
    margin:0;
  }
  .app-ProductInfo .details{
    margin:0;
  }
  .app-ProductInfo .PV{
    font-size:14px;
    color: #8f8f94;
    margin-right:30px;
  }
  .app-ProductInfo .price{
    margin:0;
    margin-top:10px;
    color: #a51f2d;
    font-size:16px;
  }
  .app-ProductInfo .login{
    font-size:13px;
    padding-top:10px;
    padding-bottom:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .login::after{
    content:"";
    width:10px;
    height:10px;
    border-top:2px solid #ccc;
    border-right:2px solid #ccc;
    transform:rotate(45deg);
  }
  .app-ProductInfo .describe1{
    padding-bottom:8px;
    border-bottom:1px solid #ddd;
    font-size:13px;
    color:#000;
  }
  .app-ProductInfo .describe2{
    color:#595a5a;
    font-size:14px;
    font-weight:bold;
  }
  .app-ProductInfo .describe3 p{
    text-indent:2em;
  }
  .app-ProductInfo .footer{
    border-top:1px solid #ddd;
    width:100%;
    display:flex;
    z-index:11;
    position:fixed;
    bottom:0px;
    background-color:#fff;
  }
  .app-ProductInfo .footer a{
    padding:5px;
    display:block;
    width:17%;
    height:55px;
    text-align:center;
    border-right:1px solid #ddd;
  }
  .app-ProductInfo .footer div{
    width:22%;
    display:flex;
    align-items:center;
    color:#fff;
    font-size:15px;
    justify-content:center;
    background-color:#e66529;
  }
  .app-ProductInfo .footer div:nth-child(4){
    background-color:#a93033;
  }
  .app-ProductInfo .footer div:last-child{
    background-color:#911480;
  }
</style>