import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../components/welcome'
import whoiam from '../components/whoiam'
import whatidid from '../components/whatidid'
import whatido from '../components/whatido'
import whatilldo from '../components/whatilldo'
import getintouch from '../components/getintouch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: welcome
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/whoiam',
      name: 'whoiam',
      component: whoiam
    },
    {
      path: '/whatidid',
      name: 'whatidid',
      component: whatidid
    },
    {
      path: '/whatido',
      name: 'whatido',
      component: whatido
    },
    {
      path: '/whatilldo',
      name: 'whatilldo',
      component: whatilldo
    },
    {
      path: '/getintouch',
      name: 'getintouch',
      component: getintouch
    },
  ]
})
