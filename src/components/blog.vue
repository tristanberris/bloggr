<template>
    <div class="blog border  col-10 text-left  text-colors spacing m-3 p-2" @click="selectBlogPost()">
        
        <h1 class="overflow">{{blogPostData.title}}</h1>
        <p class="overflow ">{{blogPostData.body}}</p>
        <p class="overflow">Author:  {{blogPostData.creator.name}} </p>
        <span></span>
        <!-- <img :src="blogPostData.imgUrl" alt="" class="img-fluid" srcset /> -->

    </div>
    
</template>


<script>
export default {
    name: 'blog',
    props: ["blogPostData"],
    data(){
        return {}
    },
    computed:{},
    methods:{
        selectBlogPost(){
            this.$store.commit("setActiveBlogPost", {});
            this.$router.push({
                name:"BlogPostDetails",
                params: {blogPostId: this.blogPostData._id}
            })
        }
    },
    components:{}
}
</script>


<style scoped>
.text-colors{
    color: rgb(141, 141, 141);
}
.spacing{

}
.overflow {
 white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 125ch;
}
</style>