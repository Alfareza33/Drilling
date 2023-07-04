<template>
  <div>
    <section class="section is-main-section">

      <card-component class="has-table has-mobile-sort-spaced">
        <inventory-table-all :data-url="`${$router.options.base}data-sources/inventory.json`" :checkable="true"/>
      </card-component>

    </section>
  </div>

</template>

<script>
import InventoryTableAll from '@/components/InventoryTableAll'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'Tables',
  components: { CardComponent, InventoryTableAll }
}
</script>
