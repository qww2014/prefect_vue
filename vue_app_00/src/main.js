import Vue from 'vue'
import App from './App.vue'
import router from './router'

//0:引入mui css  文件
import'mint-ui/lib/style.css'
Vue.config.productionTip = false

//0：引入mui css文件 大部分组件都要使用css在main.js引用
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//1.引入组件mint-ui库Header
  //-引入指定组件
  //import { Header,Swipe,SwipeItem,Button,Lazyload } from "mint-ui";
  //-注册当前项目中
  //Vue.component(Header.name,Header)
  //Vue.component(Swipe.name,Swipe)
  //Vue.component(SwipeItem.name,SwipeItem)
  //Vue.component(Button.name,Button)
  //Vue.use(Lazyload)

//完整引入mint-ui
import MintUI from "mint-ui";
Vue.use(MintUI)

//2.引入vue-resource  发送ajax
  //-引入vue-resource 库所有组件
  import VueResource from "vue-resource";
  //-将所有组件注册
  Vue.use(VueResource);

  //#配置信息  配置VueResource服务器根目录
  Vue.http.options.root = "http://127.0.0.1:3000/"
  //#修改请求头 POST
  //Vue.http.options.emulateJSON = true;
//4. 创建Vuex实例对象
  //4.1 下载安装Vuex   npm i vuex -D
  //4.2 引入Vuex
  import Vuex from "vuex";
  //4.3 注册Vue实例
  Vue.use(Vuex);
  //4.4 创建Vuex实例对象
  var store = new Vuex.Store({
    state:{count:0},      //购物车中商品的数量
    mutations:{
      increment(state,c){   //修改共享数据的两个方法
        state.count += c;
      },  
      substract(state){   //参数修改共享数据
        state.count--
      }   
    },
    getters:{
      optCount:function(state){
        return state.count;   //返回共享数据
      }
    },
  });
//5. 注册Vue实例

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
