<template>
     <div class="create-blog-post border col-12">
    <form @submit.prevent="createBlogPost()">
      <div class="form-group">
        <label for="title">Make</label>
        <input type="text" name="title" id="" class="form-control" placeholder="enter title..." aria-describedby="helpId"
          v-model="newBlogPost.title" required>
      </div>
      <div class="form-group">
        <label for="body">Model</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter body..."
          aria-describedby="helpId" v-model="newBlogPost.body" required>
      </div>
      
      <div class="form-group">
        <label for="img">Image</label>
        <input type="text" name="img" id="" class="form-control" placeholder="enter img..." aria-describedby="helpId"
          v-model="newBlogPost.imgUrl" required>
      </div>
      <button type="submit" class="btn btn-secondary">Add Post</button>
    </form>
    </div>
</template>


<script>
export default {
    name: 'create-blog-post',
    data(){
        return {
            newBlogPost: {}
        }
    },
    computed:{},
    methods:{
        createBlogPost(){
            this.$store.dispatch('createBlogPost', this.newBlogPost)
            this.newBlogPost = {}
        }
    },
    components:{}
}
</script>


<style scoped>

</style>