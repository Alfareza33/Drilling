<template>
  <div>
    <section class="section is-main-section">
      <card-component>
        <form @submit.prevent="submit">
          <hero-bar>
          Register
          </hero-bar>
          <br>
          <b-field horizontal>
            <b-field>
              <b-input v-model="form.name" placeholder="Full Name" name="name" required />
            </b-field>
          </b-field>
          <b-field horizontal>
            <b-field>
              <b-input v-model="form.username" placeholder="Username" name="username" required />
            </b-field>
          </b-field>
          <b-field horizontal>
            <b-field>
              <b-input type="email" v-model="form.email" placeholder="E-mail ID" name="email" required />
            </b-field>
          </b-field>
          <b-field horizontal>
            <b-input placeholder="Password" v-model="form.subject" required />
          </b-field>
          <b-field horizontal>
            <b-input placeholder="Confirm Password" v-model="form.subject" required />
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
        name: null,
        email: null,
        password: null,
        address: null
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
