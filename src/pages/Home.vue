
<template>
    <div class=" blogs col-12">
        <div class="row text-center justify-content-left">
          <create-blog-post v-if="$auth.isAuthenticated"> </create-blog-post>
            <blog v-for="blog in blogs" :blogPostData="blog" :key="blog._id"> </blog>
        </div>

    </div>
</template>


<script>
import Blog from "../components/blog"
import CreateBlogPost from "../components/CreateBlogPost"
export default {
    name: 'blogs',
    data(){
        return {}
    },
    computed:{
        blogs(){
            return this.$store.state.blogPosts
        }
    },
    created(){
        console.log("calling getBlogs method")
        this.$store.dispatch("getBlogPosts")
    },

    methods:{},
    components:{
      Blog,
      CreateBlogPost
    }
}
</script>


<style scoped>
    .blogs{
        outline: 1px solid black
    }
</style>