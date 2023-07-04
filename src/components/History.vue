<template>
  <div>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced">
        <history-table :data-url="`${$router.options.base}data-sources/transactions.json`" :checkable="true"/>
      </card-component>
    </section>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'Tables',
  components: { CardComponent, HistoryTable }
}
</script>
