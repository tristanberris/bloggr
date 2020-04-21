<template>
  <div class="about blogs text-center col-12">

    <h1>Welcome {{ profile.name }}</h1>
    <p>

    <img class="rounded" :src="profile.picture" alt="" />
    </p>
    <p>{{ profile.email }}</p>


    <div class="">

    <blog v-for="blog in blogsById" :blogPostData="blog" :key="blog._id"> </blog>
    </div>
    </div>
</template>

<script>
import Blog from "../components/blog"
export default {
  name: "Profile",
  name: "blogs",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs(){
      return this.$store.state.blogPosts
        },
    blogsById: function(){
      return this.$store.state.blogPosts.filter(email => {
        return email.creatorEmail.match(this.profile.email)
      })
    }
  },
  created(){
        console.log("calling getBlogs method")
        this.$store.dispatch("getBlogPosts")
        this.$store.dispatch("getProfile")
    },
    components:{
      Blog,
      // CreateBlogPost
    }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

 