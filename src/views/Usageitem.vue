<template>
  <div>
    <hero-bar>
      Usage item
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
import Wellpadtowell from '@/components/Usageitem/Wellpadtowell'
import Welltowellpad from '@/components/Usageitem/Welltowellpad'
import History from '@/components/Usageitem/History'

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
