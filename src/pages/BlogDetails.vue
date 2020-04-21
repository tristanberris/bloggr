<template>
  <div class="blog row text-colors">
    <div class="col-12 text-center ">
      <div class="" v-if="!editing" >
        <h1>{{blog.title}}</h1>
        <p>{{blog.body}}</p>
      </div>

      <div v-else-if="editing">
        <form action="" class="">
          <p>
          <input class="col-6 md-auto text-center" v-model="blog.title">
          </p>
          <p>
          <textarea class="col-6" v-model="blog.body"></textarea>
          </p>
          <button @click="editBlogPost()" class="btn btn-info">Edit Post</button>
        </form>
      </div>
      <p>
        <span>{{blog.creator.name}}</span>
        <span>
          <img :src="blog.creator.picture" alt class="img-fluid" srcset />
        </span>
      </p>
      <button v-if="$auth.isAuthenticated && this.$store.state.activeBlogPost.creatorEmail == this.profile.email" class="btn btn-danger"  @click="deleteBlogPost()">Delete</button>
      <button v-if="$auth.isAuthenticated && this.$store.state.activeBlogPost.creatorEmail == this.profile.email" @click="editing = true" type="button" class="btn btn-info">Edit Post</button>
      <comment v-for="comment in comments" :commentData="comment" :key="comment.id"> </comment>
     <CreateComment> </CreateComment>
     

      <!-- <edits v-if="$auth.isAuthenticated"></edits> -->
    </div>
  </div>
</template>


<script>
import Edits from "../components/edits";
import Comment from "../components/comment";
import CreateComment from "../components/CreateComment"
export default {
  name: "blog",
  name: "profile",
  name: "comments",
  // name: "create-comment",
  name: "createComment",
  // props: ["blogPostData"],
  data() {
    return {
      editing: false,
      newComment: {}
    };
  },
  created() {
    this.$store.dispatch("getBlogPost", this.$route.params.blogPostId);
    this.$store.dispatch("getBlogPostComments", this.$route.params.blogPostId)
  },
  computed: {
    blog() {
      return this.$store.state.activeBlogPost;
    },
     profile() {
      return this.$store.state.profile;
    },
    comments(){
      return this.$store.state.blogComments;
    }
  },
  methods: {
    deleteBlogPost() {
      this.$router.push({ name: "Blogs" });
      this.$store.dispatch("deleteBlogPost", this.blog._id);
    },
    editBlogPost(){
      this.$store.dispatch("editBlogPost", this.blog)
      this.editing = false
    },
    createComment(){
            this.$store.dispatch("createComment", this.newComment),
            this.newComment = {}
            this.$router.push({
                name: "BlogPostDetails",
                params: this.$route.params.blogPostId
            })
        }
    // editBlogPost(){
    //   this.$router.push({name: "Blogs"})
    //   this.$store.dispatch("editBlogPost", this.blog._id)
    // }
  },
  components: {
    Edits,
    Comment,
    CreateComment,
  }
};
</script>


<style scoped>
.text-colors{
    color: rgb(141, 141, 141);
}
</style>