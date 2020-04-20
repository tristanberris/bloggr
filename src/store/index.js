import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogPosts: [],
    activeBlogPost: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogPosts(state, blogs){
      state.blogPosts = blogs
    },
    setActiveBlogPost(state, blogPost){
      state.activeBlogPost = blogPost
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogPosts({commit}){
      try {
        let res = await api.get('blogs')
        commit("setBlogPosts", res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogPost({commit, dispatch}, blogPostId){
      try {
        let res = await api.get( `blogs/${blogPostId}`)
        console.log(res.data.blog)
        commit('setActiveBlogPost', res.data.blog)
      } catch (error) {
        console.error(error)
      }
    },
    async createBlogPost({commit, dispatch}, newBlogPost){
      try {
        let res = await api.post('blogs', newBlogPost )
        dispatch('getBlogPosts')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlogPost({commit, dispatch}, blogPostId){
      try {
        await api.delete('blogs/' + blogPostId)
        dispatch('getBlogPosts')
      } catch (error) {
        console.error(error)
      }
    },
    async editBlogPost({commit, dispatch},  edits){
      try {
        console.log("EditBlogPosts? " + edits)
        let res = await api.put(`blogs/${edits._id}`, edits)
        commit("setActiveBlogPost", res.data);
        dispatch('getBlogPost')

      } catch (error) {
        console.error(error)
      }
    }
  },
});
