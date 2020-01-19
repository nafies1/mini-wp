<template>
    <div class="container">
      <h1>Mini WP</h1><small>by nafies1</small>
      <b-card bg-variant="light" header="Login" class="text-center mt-5">
        <b-card-text>
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card-text>
      </b-card>
    
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>
</style>