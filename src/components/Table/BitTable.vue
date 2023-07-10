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
      :data="clients" >
      <b-table-column custom-key="actions" cell-class="is-actions-cell" v-slot="props">
        <div class="buttons is-left">
          <router-link :to="{name:'edit.bit', params: {id: props.row.id}}" class="button is-small is-primary">
            <b-icon icon="account-edit" size="is-small"/>
          </router-link>
          <button class="button is-small is-danger" type="button" @click.prevent="trashModal(props.row)">
            <b-icon icon="trash-can" size="is-small"/>
          </button>
        </div>
      </b-table-column>
      <b-table-column label="Size" field="size" sortable v-slot="props">
        {{ props.row.size }}
      </b-table-column>
      <b-table-column label="Maufacturer" field="manufacturer" sortable v-slot="props">
        {{ props.row.manufacturer }}
      </b-table-column>
      <b-table-column label="Type" field="type" sortable v-slot="props">
        {{ props.row.type }}
      </b-table-column>
      <b-table-column label="iadc Code" field="iadc_code" sortable v-slot="props">
        {{ props.row.iadc_code }}
      </b-table-column>
      <b-table-column label="Bit Code" field="bit_code" sortable v-slot="props">
        {{ props.row.bit_code }}
      </b-table-column>
      <b-table-column label="Rock Bit or Mill tooth" field="rock_bit_or_mill_tooth" sortable v-slot="props">
        {{ props.row.rock_bit_or_mill_tooth }}
      </b-table-column>
      <b-table-column label="Nozzle Information" field="nozzle_information" sortable v-slot="props">
        {{ props.row.nozzle_information }}
      </b-table-column>
      <b-table-column label="Remarks" field="remarks" sortable v-slot="props">
        {{ props.row.remarks }}
      </b-table-column>
      <b-table-column label="New or Used" field="new_or_used" sortable v-slot="props">
        {{ props.row.new_or_used }}
      </b-table-column>
      <b-table-column label="Serial Number" field="serial_number" sortable v-slot="props">
        {{ props.row.serial_number }}
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import ModalBox from '@/components/ModalBox'

export default {
  name: 'Wellhead Table',
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
