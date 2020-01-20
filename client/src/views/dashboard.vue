<template>
  <div class="container">
        <h1>Mini WP</h1><small>by nafies1</small>
        <b-card bg-variant="light" header="Mantap jiwa" class="text-center mt-5">
            <b-card-text>
              Articles yang dibuat diambil dari server bal bla bla
              <div>ini dashboard</div>
            </b-card-text>
        </b-card>
        <br>
        <button><a href="#" @click.prevent="logout">Logout</a></button>
        
    </div>
</template>

<script>
export default {
  methods: {
    logout(){
      localStorage.removeItem("access_token");
      console.log('Berhasil logout');
    }
  },
}
</script>

<style>

</style>