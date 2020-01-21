<template>
  <div class="container">
        <!-- <h1>Mini WP</h1><small>by nafies1</small> -->
        <nNavbar @log-out="logout" @change-part="changePart"></nNavbar>
        <div v-if="part === 'article'">
            <b-row>
            <b-col sm="4" v-for="article in articles" :key="article._id">
              <b-card bg-variant="light" :header="article.title" class="text-center mt-3">
                <b-card-text>
                  {{article.content}}
                </b-card-text>
              </b-card>
            </b-col>
          <b-row>
        </div>
        
        <div class="mt-3" v-if="part === 'addArticle'">
          <addArticle></addArticle>
        </div>
    </div>
</template>

<script>
import axios from '../helpers/axios'
import nNavbar from '../components/navbar'
import addArticle from '../components/addArticle'

export default {
  name: 'DashboardPage',
  data() {
    return {
      articles: '',
      part: 'article',
    }
  },
  props:['currentPage'],
  components:{
    nNavbar,
    addArticle
  },
  methods: {
    logout(){
      localStorage.removeItem("access_token");
      this.changePage('login')
    },
    changePage(page){
      console.log('dari dashboard page',page);
      this.$emit('change-page', page)
    },
    getArticle(){
      axios({
          method: 'get',
          url: '/article'
        })
          .then(({data}) =>{
            console.log(data)
            this.articles = data
          })
          .catch(err=>{
            console.log(err);
          })
    },
    changePart(part){
      this.part = part
    }
  },
  created() {
    this.getArticle()
  },
}
</script>

<style>

</style>