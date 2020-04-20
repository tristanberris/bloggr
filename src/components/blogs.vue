<template>
    <div class="blogs col-12">
        <div class="row">
            <blog v-for="blog in blogs" :blogPostData="blog" :key="blog._id"> </blog>
        </div>

    </div>
</template>


<script>
import Blog from "../components/blog"
export default {
    name: 'blogs',
    data(){
        return {}
    },
    computed:{
        blogs(){
            return this.$store.state.blogs
        }
    },
    created(){
        console.log("calling getBlogs method")
        this.$store.dispatch("getBlogPosts")
    },

    methods:{},
    components:{}
}
</script>


<style scoped>
    .blogs{
        outline: 1px solid black
    }
</style>