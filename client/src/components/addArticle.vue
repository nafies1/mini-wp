<template>
  <div>
      <h1>Add Article</h1>
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="title-group" label="Title :" label-for="title" description="Enter your title article here." >
            <b-form-input id="title" v-model="title" type="text" placeholder="Enter title" ></b-form-input>
        </b-form-group>
        <tinymce id="d1" v-model="content"></tinymce>
        <label for="file" class="mt-4">Add featured image :</label>
        <b-form-file id="file" v-model="file" :state="Boolean(file)" placeholder="Choose an image or drop it here..." drop-placeholder="Drop image here..."></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <b-button type="submit" variant="primary" class="mt-3">Submit</b-button>
      </b-form>
  </div>
  
</template>

<script>
import axios from '../helpers/axios'
export default{
    data(){
        return {
            content : '',
            title: '',
            file: null
        };
    },
    methods: {
        onSubmit(){
            console.log(this.content);
            console.log(this.title);
            console.log(this.file);
            const {content, title, file} = this
            const photoFormData = new FormData();
            // dict of all elements
            photoFormData.append("featured_image", file);
            photoFormData.append("title", title);
            photoFormData.append("content", content);

            axios({
                method: "POST",
                url: "/article",
                data: photoFormData,
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=${form._boundary}',
                    token: localStorage.getItem('access_token')
                }
            })
              .then(({data})=>{
                  console.log(data);
                  
              })
              .catch(err=>{
                  console.log(err.message);
                  
              })
        },
        changePart(){
            console.log('dari navbar');            
            this.$emit('change-part', 'article')
        }
    },
}
</script>

<style>

</style>

