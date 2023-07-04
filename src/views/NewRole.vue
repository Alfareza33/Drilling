<template>
  <div>
    <section class="section is-main-section">
      <card-component>
        <form @submit.prevent="submit">
          <hero-bar>
          New Role
          </hero-bar>
          <br>
          <b-field label="Full name" horizontal>
            <b-field >
              <div class="select">
              <select>
                <option>Select an item</option>
                <option>Hidayah Husnul Khatimah</option>
                <option>M. Hakim Adiprasetya</option>
              </select>
            </div>
            </b-field>
          </b-field>
          <b-field label="Role" horizontal>
            <div class="select">
            <select>
              <option>Select an item</option>
              <option>Sender</option>
              <option>Recipient</option>
              <option>Order Maker</option>
            </select>
          </div>
          </b-field>
          <b-field >
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary" expanded>Add New Role</b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
    </section>
  </div>
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
        email: null,
        password: null
      },
      customElementsForm: {
        checkbox: [],
        radio: null,
        switch: true,
        file: null
      }
    }
  },
  methods: {
    submit () {}
  }
}
</script>
