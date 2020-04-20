<template>
     <div class="edits border col-12">
    <form @submit.prevent="editBlogPost()">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" id="" class="form-control" placeholder="enter title..." aria-describedby="helpId"
          v-model="edits.title" required>
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter body..."
          aria-describedby="helpId" v-model="edits.body" required>
      </div>
      
      <div class="form-group">
        <label for="img">Image</label>
        <input type="text" name="img" id="" class="form-control" placeholder="enter img..." aria-describedby="helpId"
          v-model="edits.imgUrl" required>
      </div>
      <button type="submit" class="btn btn-secondary">Edit Post</button>
    </form>
    </div>
</template>

<script>
export default {
    name: 'edits',
    data(){
        return {
            edits: {}
        }
    },
    computed:{},
    methods:{
        editBlogPost(){
            this.$store.dispatch('editBlogPost', this.edits)
            this.edits = {}
            console.log("edits"+ this.edits)
        }
    },
    components:{}
}
</script>


<style scoped>

</style>