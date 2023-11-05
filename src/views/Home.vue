<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>

    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>

    <div class="updates">
      <div class="container">
        <h3>Never miss a post. Register for you free acount today!</h3>
        <router-link class="router-button" to="#">
          Regisrter for new blogs
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/blogCard.vue';
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
  },
  data(){
    return{
      welcomeScreen: {
        title: 'Welcome post',
        blogPost: 'some text',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost:[
        {
          title: 'some title1',
          blogHTML: ' some blog HTML1',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'some title2',
          blogHTML: ' some blog HTML2',
          blogCoverPhoto: 'designed-for-everyone'
        }
      ],


    }
  },
  computed: {
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap{
    h3{
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }

  .updates{
    .container{
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media(min-width: 800px){
        padding: 125px 25px;
        flex-direction: row;
      }
    }
    .router-button{
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media(min-width: 800px){
        margin-left: auto;
      }
    }

    h3{
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px){
        text-align: initial;
        font-size: 40px;
      }
    }
  }
</style>
