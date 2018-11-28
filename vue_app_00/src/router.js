import Vue from 'vue'
import Router from 'vue-router'

//1:引入自定义的组件
import HelloContainer from "./components/HelloWorld.vue"
import HomeContainer from"./components/tabbar/HomeContainer.vue";
import LoginContainer from"./components/home/Login.vue";
import ShopContainer from"./components/shop/Product.vue";
import ShopInfoContainer from"./components/shop/ProductInfo.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:HomeContainer},
    {path:"/home",component:HomeContainer},
    {path:"/home/login",component:LoginContainer},
    {path:"/home/shop",component:ShopContainer},
    {path:"/home/shopinfo/:id",component:ShopInfoContainer},
  ]
})
