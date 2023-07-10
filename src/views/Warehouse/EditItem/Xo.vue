<template>
  <div>
    <section class="section is-main-section">
      <card-component>
        <form @submit.prevent="submit">
          <hero-bar>
          Edit item
          </hero-bar>
          <br>
          <b-field horizontal label="ID">
            <b-field>
              <b-input placeholder="ID" name="id" required />
            </b-field>
          </b-field>
          <b-field horizontal label="Unit">
            <b-input placeholder="Unit" v-model="form.subject" required />
          </b-field>
          <b-field horizontal label="Sub Category">
            <b-input placeholder="Sub Category" v-model="form.subject" required />
          </b-field>
          <b-field horizontal label="Size">
            <b-input placeholder="Size" v-model="form.subject" required />
          </b-field>
          <b-field horizontal label="Remarks">
            <b-input placeholder="Remarks" v-model="form.subject" required />
          </b-field>
          <div class="field is-horizontal">
        </div>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary">Submit</b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
import find from 'lodash/find'
import HeroBar from '@/components/HeroBar'
import CardComponent from '@/components/CardComponent'

export default {
  name: 'ClientForm',
  components: { CardComponent, HeroBar },
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      isLoading: false,
      form: this.getClearFormObject(),
      createdReadable: null,
      isProfileExists: false
    }
  },
  computed: {
    titleStack () {
      let lastCrumb

      if (this.isProfileExists) {
        lastCrumb = this.form.name
      } else {
        lastCrumb = 'New client'
      }

      return [
        'Admin',
        'Clients',
        lastCrumb
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getClearFormObject () {
      return {
        size: null,
        grade: null,
        pounder: null,
        bop: null,
        wellding: null,
        range: null,
        remarks: null,
        connection: null,
        created_date: new Date(),
        created_mm_dd_yyyy: null,
        progress: 0
      }
    },
    getData () {
      if (this.id) {
        axios
          .get(`${this.$router.options.base}data-sources/Warehouse/casing.json`)
          .then(r => {
            const item = find(r.data.data, item => item.id === parseInt(this.id))

            if (item) {
              this.isProfileExists = true
              this.form = item
            } else {
              this.$router.push({ name: 'client.new' })
            }
          })
          .catch(e => {
            this.$buefy.toast.open({
              message: `Error: ${e.message}`,
              type: 'is-danger',
              queue: false
            })
          })
      }
    },
    input (v) {
      this.createdReadable = dayjs(v).format('MMM D, YYYY')
    },
    submit () {
      this.isLoading = true
    }
  },
  watch: {
    id (newValue) {
      this.isProfileExists = false

      if (!newValue) {
        this.form = this.getClearFormObject()
      } else {
        this.getData()
      }
    }
  }
}
</script>
