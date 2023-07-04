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
                href: '#/warehouse/casingaccesories',
                label: 'Casing Accesories'
              },
              {
                href: '#/warehouse/bit',
                label: 'Bit'
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
