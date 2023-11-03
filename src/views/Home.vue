<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>

import BlogPost from '../components/BlogPost.vue';
export default {
  name: "Home",
  components: {
    BlogPost
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
      ]
    }
  }
};
</script>
