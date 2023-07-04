<template>
  <div>
    <section class="section is-main-section">
      <card-component>
        <form @submit.prevent="submit">
          <hero-bar>
          Login
          </hero-bar>
          <br>
          <b-field >
            <b-field>
              <b-input type="email" v-model="form.email" placeholder="E-mail ID" name="email" required />
            </b-field>
          </b-field>
          <b-field>
            <b-input placeholder="Password" name="password" v-model="form.subject" required />
          </b-field>
          <b-field >
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary">Login</b-button>
              </div>
            </b-field>
          </b-field>
          New User ? <router-link to="/register">
          Register
          </router-link>
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
