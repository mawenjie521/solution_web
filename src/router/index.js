import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/tech',
          name: 'tech',
          component: resolve => require(['@/view/tech'], resolve),
          meta: { title: '技术查询' }
        }, {
          path: '/techdetail',
          name: 'techdetail',
          component: resolve => require(['@/view/techDetail'], resolve),
          meta: { title: '技术查询详情' }
        },
        {
          path: '/solution',
          name: 'solution',
          component: resolve => require(['@/view/solution'], resolve),
          meta: { title: '场景需求' }
        },
        {
          path: '/solution1',
          name: 'solution1',
          component: resolve => require(['@/view/solution1'], resolve),
          meta: { title: '场景需求' }
        },
        {
          path: '/solutiondetail',
          name: 'solutiondetail',
          component: resolve => require(['@/view/solutionDetail'], resolve),
          meta: { title: '场景需求' }
        },
        {
          path: '/production',
          name: 'production',
          component: resolve => require(['@/view/production'], resolve),
          meta: { title: '产品查询' }
        }, {
          path: '/productiondetail',
          name: 'productiondetail',
          component: resolve => require(['@/view/productionDetail'], resolve),
          meta: { title: '活动展示详情' }
        },
        {
          path: '/enterprise',
          name: 'enterprise',
          component: resolve => require(['@/view/enterprise'], resolve),
          meta: {
            title: '企业查询'
          },
        },
        {
          path: '/enterprisesearch',
          name: 'enterprisesearch',
          component: resolve => require(['@/view/EnterpriseSearch'], resolve),
          meta: {
            title: '企业查询'
          },
        },
      ]
    }
  ]
})
