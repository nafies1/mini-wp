<template>
  <div>
    <dashboardVue v-if="currentPage === 'dashboard'"></dashboardVue>
    <loginVue v-if="currentPage === 'login'"></loginVue>
    <registerVue v-if="currentPage === 'register'"></registerVue>
    <mainPageVue v-if="currentPage === 'main'"></mainPageVue>
  </div>
</template>

<script>
import formNafies from './components/form'
import loginVue from './views/login.vue';
import registerVue from './views/register.vue';
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
  components: {
    formNafies,
    dashboardVue,
    loginVue,
    registerVue,
    mainPageVue

  }
};
</script>

<style scoped>
</style>