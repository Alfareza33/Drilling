<template>
  <div>
    <modal-box :is-active="isModalActive" :trash-object-name="trashObjectName" @confirm="trashConfirm"
               @cancel="trashCancel"/>
    <b-table
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="name"
      :data="clients">
      <b-table-column custom-key="actions" cell-class="is-actions-cell" v-slot="props">
        <div class="buttons is-left">
          <button class="button is-small is-danger" type="button" @click.prevent="trashModal(props.row)">
            <b-icon icon="trash-can" size="is-small"/>
          </button>
        </div>
      </b-table-column>
      <b-table-column label="ID" field="id" sortable v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column label="Sub Category" field="sub_category" sortable v-slot="props">
        {{ props.row.size }}
      </b-table-column>
      <b-table-column label="Casing head size" field="casing_head_size" sortable v-slot="props">
        {{ props.row.casing_head_size }}
      </b-table-column>
      <b-table-column label="Top Connection Type and Size" field="top_connection_type_and_size" sortable v-slot="props">
        {{ props.row.top_connection_type_and_size }}
      </b-table-column>
      <b-table-column label="Bottom Connection Type and Size" field="bottom_connection_type_and_size" sortable v-slot="props">
        {{ props.row.bottom_connection_type_and_size }}
      </b-table-column>
      <b-table-column label="Side Connection Type and Size" field="side_connection_type_and_size" sortable v-slot="props">
        {{ props.row.side_connection_type_and_size }}
      </b-table-column>
      <b-table-column label="Prewelded Casing Connection" field="prewelded_casing_connection" sortable v-slot="props">
        {{ props.row.prewelded_casing_connection }}
      </b-table-column>
      <b-table-column label="length of prewelded casing" field="length_of_prewelded_casing" sortable v-slot="props">
        {{ props.row.length_of_prewelded_casing }}
      </b-table-column>
      <b-table-column label="remarks" field="remarks" sortable v-slot="props">
        {{ props.row.remarks }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import ModalBox from '@/components/ModalBox'

export default {
  name: 'Casing Head Table',
  components: { ModalBox },
  props: {
    dataUrl: {
      type: String,
      default: null
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalActive: false,
      trashObject: null,
      clients: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    }
  },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      return null
    }
  },
  mounted () {
    if (this.dataUrl) {
      this.isLoading = true
      axios
        .get(this.dataUrl)
        .then(r => {
          this.isLoading = false
          if (r.data && r.data.data) {
            if (r.data.data.length > this.perPage) {
              this.paginated = true
            }
            this.clients = r.data.data
          }
        })
        .catch(e => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger'
          })
        })
    }
  },
  methods: {
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false
      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    }
  }
}
</script>
