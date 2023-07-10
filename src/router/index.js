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
      title: 'Transfer item'
    },
    path: '/transferitem',
    name: 'transferitem',
    component: () => import(/* webpackChunkName: "transactions" */ '../views/Transferitem.vue')
  },
  {
    meta: {
      title: 'Usage item'
    },
    path: '/usageitem',
    name: 'usageitem',
    component: () => import(/* webpackChunkName: "transactions" */ '../views/Usageitem.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  // Warehouse section
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
    name: 'Casing Accesories',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/CasingAccesories.vue'),
    props: true
  },
  {
    meta: {
      title: 'Others'
    },
    path: '/warehouse/others',
    name: 'Others',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Others.vue'),
    props: true
  },
  {
    meta: {
      title: 'Wellhead'
    },
    path: '/warehouse/wellhead',
    name: 'Wellhead',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Wellhead.vue'),
    props: true
  },
  {
    meta: {
      title: 'Bit'
    },
    path: '/warehouse/bit',
    name: 'Bit',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Bit.vue'),
    props: true
  },
  {
    meta: {
      title: 'Bit Breaker and Ring Gauge'
    },
    path: '/warehouse/bitbreakerandringgauge',
    name: 'Bit Breaker and Ring Gauge',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/BitBreakerandRingGauge.vue'),
    props: true
  },
  {
    meta: {
      title: 'Screen'
    },
    path: '/warehouse/screen',
    name: 'Screen',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Screen.vue'),
    props: true
  },
  {
    meta: {
      title: 'Tools'
    },
    path: '/warehouse/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Tools.vue'),
    props: true
  },
  {
    meta: {
      title: 'XO'
    },
    path: '/warehouse/xo',
    name: 'casing',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Xo.vue'),
    props: true
  },
  {
    meta: {
      title: 'Casing Head'
    },
    path: '/warehouse/casinghead',
    name: 'Casing Head',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Warehouse/Casinghead.vue'),
    props: true
  },
  // This is the section of Add Item of Warehouse list
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/casing/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Casing.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/casingaccesories/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/CasingAccesories.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/others/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Others.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/wellhead/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Wellhead.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/bit/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Bit.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/bitbreakerandringgauge/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/BitBreakerandRingGauge.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/screen/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Screen.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/tools/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Tools.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/xo/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Xo.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/warehouse/casinghead/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Warehouse/AddItem/Casinghead.vue')
  },
  // Wellpad section
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
    name: 'Casing Accesories',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/CasingAccesories.vue'),
    props: true
  },
  {
    meta: {
      title: 'Others'
    },
    path: '/wellpad/others',
    name: 'Others',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Others.vue'),
    props: true
  },
  {
    meta: {
      title: 'Wellhead'
    },
    path: '/wellpad/wellhead',
    name: 'Wellhead',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Wellhead.vue'),
    props: true
  },
  {
    meta: {
      title: 'Bit'
    },
    path: '/wellpad/bit',
    name: 'Bit',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Bit.vue'),
    props: true
  },
  {
    meta: {
      title: 'Bit Breaker and Ring Gauge'
    },
    path: '/wellpad/bitbreakerandringgauge',
    name: 'Bit',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/BitBreakerandRingGauge.vue'),
    props: true
  },
  {
    meta: {
      title: 'Screen'
    },
    path: '/wellpad/screen',
    name: 'Screen',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Screen.vue'),
    props: true
  },
  {
    meta: {
      title: 'Tools'
    },
    path: '/wellpad/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Tools.vue'),
    props: true
  },
  {
    meta: {
      title: 'XO'
    },
    path: '/wellpad/xo',
    name: 'casing',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Xo.vue'),
    props: true
  },
  {
    meta: {
      title: 'Casing Head'
    },
    path: '/wellpad/casinghead',
    name: 'Casing Head',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/Wellpad/Casinghead.vue'),
    props: true
  },
  // This is the section of Add Item of Wellpad list
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/casing/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Casing.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/casingaccesories/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/CasingAccesories.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/others/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Others.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/wellhead/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Wellhead.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/bit/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Bit.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/bitbreakerandringgauge/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/BitBreakerandRingGauge.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/screen/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Screen.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/tools/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Tools.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/xo/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Xo.vue')
  },
  {
    meta: {
      title: 'Add Item'
    },
    path: '/wellpad/casinghead/additem',
    name: 'add item',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Wellpad/AddItem/Casinghead.vue')
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
