import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Home'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Register'
    },
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Forms.vue')
  },
  {
    meta: {
      title: 'New Role'
    },
    path: '/newrole',
    name: 'newrole',
    component: () => import(/* webpackChunkName: "forms" */ '../views/NewRole.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/AddItem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/Casingform.vue')
  },
  {
    meta: {
      title: 'Edit Item'
    },
    path: '/EditItem',
    name: 'edit item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/Casingedit.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Login.vue')
  },
  {
    meta: {
      title: 'Transferitem'
    },
    path: '/transferitem',
    name: 'transferitem',
    component: () => import(/* webpackChunkName: "transactions" */ '../views/Transferitem.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    meta: {
      title: 'Casing'
    },
    path: '/warehouse/casing',
    name: 'casing',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Casing.vue'),
    props: true
  },
  {
    meta: {
      title: 'Casing Accesories'
    },
    path: '/warehouse/casingaccesories',
    name: 'casing',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/CasingAccesories.vue'),
    props: true
  },
  {
    meta: {
      title: 'Bit'
    },
    path: '/warehouse/bit',
    name: 'wbit',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Bit.vue'),
    props: true
  },
  {
    meta: {
      title: 'Casing'
    },
    path: '/wellpad/casing',
    name: 'casing',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Casing.vue'),
    props: true
  },
  {
    meta: {
      title: 'Casing Accesories'
    },
    path: '/wellpad/casingaccesories',
    name: 'casing',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/CasingAccesories.vue'),
    props: true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
