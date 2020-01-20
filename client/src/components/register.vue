<template>
    <div class="container">
        <h1>Mini WP</h1><small>by nafies1</small>
        <b-card bg-variant="light" header="Register" class="text-center mt-5">
            <b-card-text>
              
                 <b-form @submit.prevent="onSubmit">
                    <b-form-group id="input-group-0" label="Your Name:" label-for="input-0">
                    <b-form-input
                        id="input-0"
                        v-model="name"
                        type="text"
                        required
                        placeholder="Enter Your Name"
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-groups-1"
                    label="Email address:"
                    label-for="inputs-1"
                    description="We'll never share your email with anyone else."
                    >
                    <b-form-input
                        id="inputs-1"
                        v-model="email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-groups-2" label="Your Password:" label-for="input-2">
                    <b-form-input
                        id="inputs-2"
                        v-model="password"
                        type="password"
                        required
                        placeholder="Enter Password"
                    ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <br>
                    <small>or sign in with your google account</small>
                </b-form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from '../helpers/axios'

export default {
    name: 'RegisterPage',
    data() {
      return {
        email: '',
        password: '',
        name : '',
        message : ''
      }
    },
    methods: {
      onSubmit() {
        console.log(this.email, this.password);
        axios({
          method: 'post',
          url: '/user/register',
          data: {
            name: this.name,
            email : this.email,
            password: this.password
          }
        })
          .then(({data}) =>{
            
            console.log(data)
          })
          .catch(err=>{
            console.log(err.message);
            if (err.message === 'Request failed with status code 400') this.message = 'Email / Password salah'
          })
        this.email = ''
        this.password = ''
        this.name = ''
      }
    }
}
</script>

<style>

</style>