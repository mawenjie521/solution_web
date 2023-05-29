// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui';
import '@/assets/fonts/font.css'
import 'element-ui/lib/theme-chalk/index.css';
import './lib/lib-flexible'
import Vue2OrgTree from 'vue2-org-tree'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'hDRhHrMllwO7iUPQPmPliztdM7RkRbow'
})
Vue.use(Vue2OrgTree)
Vue.prototype.axios = axios
console.log(axios);
// axios.defaults.baseURL = process.env.API_ROOT
process.env.NODE_ENV == 'production'; //生产环境
process.env.NODE_ENV == 'development'; //开发环境
// console.log(abc);
// console.log(axios.defaults.baseURL);
/* 路由 */
import router from './router'
/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'
import './assets/css/app.css'


/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name, Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
