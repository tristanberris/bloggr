<template>
  <div class="comment blog col-12 text-colors">
    <div v-if="!editing ">
      <h1>{{commentData.creator.name}}</h1>
      <p>{{commentData.body}}</p>
    </div>
    <div v-else-if="editing">
      <form >
        <div class="form-group">
          <label for="body">Edit:</label>
          <input
            type="text"
            name="body"
            id
            class="form-control"
            placeholder="edit comment..."
            aria-describedby="helpId"
            v-model="commentData.body"
            required
          />
        </div>

        <button @click="editCommentMethod()" class="btn btn-secondary">Edit Comment</button>
      </form>
    </div>
    <div v-if="$auth.isAuthenticated && this.commentData.creator.name == this.profile.name">
    <button @click="editing = true" type="button" class="btn btn-info">Edit Post</button>
    <button @click="deleteComment()" class="btn btn-danger">Delete</button>
    </div>

    <!-- <EditComment></EditComment> -->
  </div>
</template>


<script>
import EditComment from "./EditComment";

export default {
  name: "comment",
  name:"profile",
  name: "blog",
//   name: "editedComment",
  props: ["commentData"],
  data() {
    return {
      editing: false,
      editComment: {}
    };
  },
  created(){
          this.$store.dispatch("getBlogPost", this.$route.params.blogPostId);
          this.$store.dispatch("getBlogPostComments", this.$route.params.blogPostId)
  },
  computed: {
    //   comments(){
    //   return this.$store.state.blogComments;
     blog() {
      return this.$store.state.activeBlogPost;
    },
    comments(){
      return this.$store.state.blogComments;
    },
     profile() {
      return this.$store.state.profile;
    },
    
  },
  methods: {
      editCommentMethod(){
            this.$store.dispatch('editComment', this.commentData)
            console.log("editComment " + this.commentData)
            this.editing = false
            this.editComment = {}
      },
      deleteComment() {
    //   this.$router.push({ name: "Comments" });
      this.$store.dispatch('deleteComment', this.commentData);
      console.log("deleted Comment Id" + this.commentData)
    },
  },
      components: {
        // EditComment
}
}
</script>


<style scoped>
.text-colors {
  color: rgb(141, 141, 141);
}
</style>