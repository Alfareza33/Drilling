<template>
  <div>
    <hero-bar>
      Transfer item
    </hero-bar>
    <button  class="button is-white is-medium" @click="component ='Welltowellpad'">WH to WP</button>
    <button  class="button is-white is-medium" @click="component ='Wellpadtowell'">WP to WH</button>
    <button  class="button is-white is-medium" @click="component ='History'">History</button>
    <keep-alive>
    <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar'
import Wellpadtowell from '@/components/Wellpadtowell'
import Welltowellpad from '@/components/Welltowellpad'
import History from '@/components/History'

export default {
  name: 'Transfer item',
  components: { HeroBar, Wellpadtowell, History, Welltowellpad },
  data () {
    return {
      component: 'Wellpadtowell'
    }
  },
  methods: {
    submit () {}
  }
}
</script>
