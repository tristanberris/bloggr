<template>
    <div class="create-comment">
 <form @submit.prevent="createComment()">
      <div class="form-group">
        <label for="body">Comment...</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter comment" aria-describedby="helpId"
          v-model="newComment.body" required>
      </div>
      
      <button type="submit" class="btn btn-secondary">Add Comment</button>
    </form>

    </div>
</template>


<script>
export default {
    name: 'create-comment',
    data(){
        return {
            newComment: {}
        }
    },
    computed:{
        activeBlogId(){
            return this.$store.state.activeBlogPost
        }
    },
    methods:{
        createComment(){
            
            this.newComment.blogId = this.activeBlogId._id;
            this.$store.dispatch("createComment", this.newComment),
            this.newComment = {}

            
        }
    },
    components:{}
}
</script>


<style scoped>

</style>