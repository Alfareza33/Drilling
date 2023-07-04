<template>
<section class="section is-main-section">
    <card-component>
      <hero-bar>
        Sell Items
      </hero-bar>
      <br>
      <form @submit.prevent="submit">
        <b-field label="Customer" horizontal>
          <b-field>
            <b-input v-model="form.name" placeholder="Name" name="name" required />
          </b-field>
        </b-field>
        <b-field horizontal>
          <b-field>
            <b-input v-model="form.email" placeholder="Phone number" name="phone-number" required />
          </b-field>
        </b-field>
        <b-field horizontal>
          <b-input placeholder="Address" v-model="form.subject" required />
        </b-field>
        <hr>
        <b-field label="Product" horizontal>
          <b-input placeholder="Product Name" v-model="form.subject" required />
        </b-field>
        <b-field horizontal>
          <p>Select a product to view details/ 20 in inventory, 85 Recommended limit/ No details</p>
        </b-field>
        <b-field horizontal>
          <b-input placeholder="Price" v-model="form.subject" required />
        </b-field>
        <b-field horizontal>
          <b-input placeholder="No. of Item" v-model="form.subject" required />
        </b-field>
        <b-field horizontal>
          <b-input placeholder="Expiry Date" v-model="form.subject" required />
        </b-field>
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <file-picker/>
            </div>
          </b-field>
        </b-field>
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
</template>

<script>
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Forms',
  components: { CardComponent, FilePicker, HeroBar },
  data () {
    return {
      isLoading: false,
      form: {
        name: null,
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null
      },
      customElementsForm: {
        checkbox: [],
        radio: null,
        switch: true,
        file: null
      },
      departments: [
        'Business Development',
        'Marketing',
        'Sales'
      ]
    }
  },
  methods: {
    submit () {}
  }
}
</script>
