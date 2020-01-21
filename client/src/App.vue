<template>
  <div>
    <!-- <loginVue v-if="currentPage === 'login'" v-on:change-page="changePage"></loginVue> -->
     <loginVue v-if="currentPage === 'login'" :currentPage="currentPage" @change-page="changePage"></loginVue>
    <registerVue v-if="currentPage === 'register'" :currentPage="currentPage" @change-page="changePage"></registerVue>
    <dashboardVue v-if="currentPage === 'dashboard'" :currentPage="currentPage" @change-page="changePage"></dashboardVue>
    <mainPageVue v-if="currentPage === 'main'" ></mainPageVue>
  </div>
</template>

<script>
import loginVue from './components/login';
import registerVue from './components/register';
import dashboardVue from './views/dashboard.vue';
import mainPageVue from './views/main-page.vue';

export default {
  name: 'App',
  data() {
    return {
      message: 'Hello world',
      currentPage: 'login'
    };
  },
  methods: {
    checkLogin(){
      if(localStorage.getItem('access_token')){
        this.currentPage='dashboard'
      } else {
        this.currentPage='login'
      }
    },
    changePage(page){
      this.currentPage = page
    },

  },
  
  components: {
    dashboardVue,
    loginVue,
    registerVue,
    mainPageVue

  },
  created: function(){
    this.checkLogin()
  },
  computed: {
    statusPage(){
      return this.checkLogin()
    }
  },
};
</script>

<style scoped>
</style>