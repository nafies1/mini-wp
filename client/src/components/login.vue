<template>
    <div class="container">
        <h1>Mini WP</h1><small>by nafies1</small>
        <b-card bg-variant="light" header="Login" class="text-center mt-5">
            <b-card-text>
              <b-alert show variant="danger" v-if="failed">{{message}}</b-alert>
              <b-alert show variant="success" v-if="success">{{message}}</b-alert>
              
                 <b-form @submit.prevent="onSubmit">
                    <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                    >
                    <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="password"
                        type="password"
                        required
                        placeholder="Enter Password"
                    ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <br>
                    <small>or sign in with your google account</small>
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                    <a href="#" @click.prevent="logout"></a>
                    <!-- <a href="#" @click="signOut">Sign out</a> -->
                </b-form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from '../helpers/axios'

export default {
    name: 'Login-page',
    data() {
      return {
        email: '',
        password: '',
        message : '',
        success: false,
        failed: false
      }
    },
    methods: {
      onSubmit() {
        console.log(this.email, this.password);
        axios({
          method: 'post',
          url: '/user/login',
          data: {
            email : this.email,
            password: this.password
          }
        })
          .then(({data}) =>{
            console.log(data)
            localStorage.setItem('access_token', data.token);
            this.success = true
            this.message = 'Login success'
            setTimeout(()=>{ this.success = false}, 3000);
          })
          .catch(err=>{
            console.log(err.message);
            if (err.message === 'Request failed with status code 400') {
              this.failed = true
              this.message = 'Email / Password salah'
            }
            setTimeout(()=>{ this.failed = false}, 3000);
          })
        this.email = ''
        this.password = ''
      },
      // onSignIn(googleUser) {
      // const id_token = googleUser.getAuthResponse().id_token;
      // console.log(id_token);
      // axios({
      //   method: 'post',
      //   url: `/user/google-sign`,
      //   headers: {
      //       id_token
      //   }
      // })
      //   .then(({ data }) => {
      //     if(data.token){
      //         localStorage.setItem('access_token', data.token);
      //         console.log(data);
      //         this.email = ''
      //         this.password = ''
      //         // this.changePage('dashboard')
      //     }
            
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // },
      // signOut() {
      // const auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(() => {
      //   console.log('User signed out.');
      //   localStorage.removeItem("access_token");
      //   });
      // },
      changePage(page){
        console.log('dari login page',page);
        this.$emit('change-page', page)
      }
    }
    
}
</script>

<style>

</style>