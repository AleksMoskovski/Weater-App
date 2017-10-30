import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import View from '@/components/View'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
mode:'history',	
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/view',
      name: 'View',
      component: View
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
