new Vue({
    el: '#app',
    data:{
        message: 'Mantap jiwa!',
        currentPage: 'login',
        articles: '',
        mySeries: false,
        myPost: false,
        myCalender: false,
        myProfile: false,
        addArticle: false,
        email: '',
        password: ''

    },
    methods:{
        pageSelector(page){
            this.currentPage = page
        },
        getArticles(){
            axios({
                method: 'get',
                url: 'http://localhost:3000/articles',
              })
                .then( (response)=> {
                  this.articles = response.data
                })
                .catch(err=>{
                    console.log(err);                    
                })
        },
        showCard(section){
            let parts = ['mySeries', 'myPost', 'myCalender', 'myProfile', 'addArticle']
            parts.forEach(part=>{
                if (part !== section) this[part] = false
            })
            this[section] = true
        },
        showAll(){
            this.mySeries = true
            this.myPost = true
            this.myCalender = true
            this.myProfile = true
        },
        showDashboard(){
            this.pageSelector('dashboard')
            this.showAll()
        }
    },
    created(){
        this.getArticles()
    }
})