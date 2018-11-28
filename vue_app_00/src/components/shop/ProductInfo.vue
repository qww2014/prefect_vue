<template>
  <div class="app-ProductInfo">
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
      <p>
    　　有效去除空调蒸发器上的油及其它污染物，消除空气异味；自动分散空调上的固体粉尘；在空调蒸发器的翅片上形成保护膜，延长空调使用寿命；防止滤光板和金属框被腐蚀；气味芳香、清新自然；适用于家庭、医院、诊所、食物加工场等空调。
      </p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        productlist:[{img_url:""}],
        id:0
      }
    },
    methods:{
      go_login(){
        this.$router.push("/home/login")
      },
      getProductList(){
        var vm = this
        vm.id = this.$route.params.id;
        vm.$http.get("productlist?id="+this.id).then(result=>{
          vm.productlist = result.body
          console.log(vm.productlist)
        })
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
</style>