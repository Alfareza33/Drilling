<template>
  <div>
    <hero-bar :has-right-visible="false">
      Home
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget class="tile is-child" type="is-primary" icon="chart-timeline-variant" :number="512" label="Total Amount in All Inventory"/>
        <card-widget class="tile is-child" type="is-info" icon="chart-timeline-variant" :number="7770" label="Total Amount in Well Pad"/>
        <card-widget class="tile is-child" type="is-info" icon="chart-timeline-variant" :number="256" label="Total Amount in Warehouse"/>
      </tiles>
      <card-component class="has-table has-mobile-sort-spaced">
        <hometable :data-url="`${$router.options.base}data-sources/data.json`"/>
      </card-component>
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar'
import Hometable from '@/components/Hometable'
import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import CardWidget from '@/components/CardWidget'

export default {
  name: 'home',
  components: {
    HeroBar, Hometable, Tiles, CardComponent, CardWidget
  },
  mounted () {
    this.fillChartData()

    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  }
}
</script>
