<template>
<section class="section is-main-section">
    <card-component>
      <hero-bar>
        Well Pad to Warehouse
      </hero-bar>
      <br>
      <form @submit.prevent="submit">
        <b-field label="Item name" horizontal>
          <b-field>
            <b-input v-model="form.name" placeholder="Item Name" name="name" required />
          </b-field>
        </b-field>
        <b-field label="Quantity" horizontal>
          <b-field>
            <b-input v-model="form.email" placeholder="Quantity" name="phone-number" required />
          </b-field>
        </b-field>
        <b-field label="Source Location" horizontal>
          <b-input placeholder="Source Location" v-model="form.subject" required />
        </b-field>
        <b-field label="Destination Location" horizontal>
          <b-input placeholder="Destination Location" v-model="form.subject" required />
        </b-field>
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <b-button native-type="submit" type="is-primary">Transfer</b-button>
            </div>
          </b-field>
        </b-field>
      </form>
    </card-component>
  </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Forms',
  components: { CardComponent, HeroBar },
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
