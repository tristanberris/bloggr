<template>
    <div class="editComment border col-12">
    <form @submit.prevent="editCommentMethod()">
      <div class="form-group">
        <label for="body">Edit:</label>
        <input type="text" name="body" id="" class="form-control" placeholder="edit comment..."
          aria-describedby="helpId" v-model="editComment.body" required>
      </div>

      <button type="submit" class="btn btn-secondary">Edit Comment</button>
    </form>
    </div>
</template>


<script>
export default {
    name: 'editComment',
    data(){
        return {
            editComment: {}
        }
    },
    computed:{},
    methods:{
        editCommentMethod(){
            this.$store.dispatch('editComment', this.editComment)
            this.editComment = {}
            console.log("editComment " + this.editComment)
        }
    },
    components:{}
}
</script>


<style scoped>

</style>