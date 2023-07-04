<template>
  <div>
    <section class="section is-main-section">

      <card-component class="has-table has-mobile-sort-spaced">
        <inventory-table-near-expiry :data-url="`${$router.options.base}data-sources/inventory.json`" :checkable="true"/>
      </card-component>

    </section>
  </div>

</template>

<script>
import InventoryTableNearExpiry from '@/components/InventoryTableNearExpiry'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'Tables',
  components: { CardComponent, InventoryTableNearExpiry }
}
</script>
