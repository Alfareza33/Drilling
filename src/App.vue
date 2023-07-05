<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu" @menu-click="menuClick"/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'

export default {
  name: 'home',
  components: {
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        [
          {
            to: '/',
            icon: 'home',
            label: 'Home'
          },
          {
            label: 'Warehouse',
            subLabel: 'Submenus Warehouse',
            icon: 'view-list',
            menu: [
              {
                href: '#/warehouse/casing',
                label: 'Casing'
              },
              {
<<<<<<< HEAD
                href: '#/warehouse/casingaccesories',
                label: 'Casing Accesories'
              },
              {
=======
>>>>>>> f37385d426ded707315706b4bc30aa3f12b3f94f
                href: '#/warehouse/others',
                label: 'Others'
              },
              {
                href: '#/warehouse/wellhead',
                label: 'Wellhead'
              },
              {
                href: '#/warehouse/screen',
                label: 'Screen'
              },
              {
<<<<<<< HEAD
                href: '#/warehouse/xo',
                label: 'XO'
              },
              {
                href: '#/warehouse/casinghead',
                label: 'Casing Head'
=======
                href: '#/warehouse/casinghead',
                label: 'Casing Head'
              },
              {
                href: '#/warehouse/casingaccesories',
                label: 'Casing Accesories'
              },
              {
                href: '#/warehouse/bit',
                label: 'Bit'
>>>>>>> f37385d426ded707315706b4bc30aa3f12b3f94f
              }
            ]
          },
          {
            label: 'Wellpad',
            subLabel: 'Submenus Wellpad',
            icon: 'view-list',
            menu: [
              {
                href: '#/wellpad/casing',
                label: 'Casing'
              },
              {
                href: '#/wellpad/casingaccesories',
                label: 'Casing Accesories'
              },
              {
                href: '#/wellpad/others',
                label: 'Others'
              },
              {
                href: '#/wellpad/wellhead',
                label: 'Wellhead'
              },
              {
                href: '#/wellpad/screen',
                label: 'Screen'
              },
              {
                href: '#/wellpad/xo',
                label: 'XO'
              },
              {
                href: '#/wellpad/casinghead',
                label: 'Casing Head'
              }
            ]
          },
          {
            to: '/transferitem',
            label: 'Transfer item',
            icon: 'currency-usd'
          }
        ]
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'Alfareza Mahendra',
      email: 'alfareza@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  }
}
</script>
