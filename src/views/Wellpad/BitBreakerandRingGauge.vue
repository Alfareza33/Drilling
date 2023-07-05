<template>
  <div>
    <hero-bar>
      Bit Breaker and Ring Gauge
    </hero-bar>
      <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      </div>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-end sejajar-kanan">
          <div class="navbar-item">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Location</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <input class="input" type="text" placeholder="Find an Item">
                  <a href="#" class="dropdown-item">First selection</a>
                  <a href="#" class="dropdown-item">Second selection</a>
                  <a href="#" class="dropdown-item">Third selection</a>
                  <a href="#" class="dropdown-item">Fourth selection</a>
                  <a href="#" class="dropdown-item">Fifth selection</a>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar-item">
            <div class="field has-addons">
              <div class="control">
                <input class="input" type="text" placeholder="Search...">
              </div>
              <div class="control">
                <button class="button is-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <file-picker/>
            </div>
          </b-field>
        </b-field>
    <section class="section is-main-section">

      <card-component class="has-table has-mobile-sort-spaced">
        <bit-breakerand-ring-gauge-table :data-url="`${$router.options.base}data-sources/Wellpad/bitbreakerandringgauge.json`" :checkable="true"/>
      </card-component>

    </section>
  </div>
</template>

<script>
import BitBreakerandRingGaugeTable from '@/components/Table/BitBreakerandRingGaugeTable'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Tables',
  components: { HeroBar, CardComponent, BitBreakerandRingGaugeTable }
}
</script>
