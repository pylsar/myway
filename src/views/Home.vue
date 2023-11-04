<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>

    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BlogPost from '../components/BlogPost.vue';
import BlogCards from '../components/blogCard.vue';
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCards,
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

      sampleBlogCards:[
        {
          blogTitle: 'blog Card 1',
          blogCoverPhoto: 'stock-1',
          blogDate: 'Oct 1, 2023'
        },
        {
          blogTitle: 'blog Card 2',
          blogCoverPhoto: 'stock-2',
          blogDate: 'Oct 1, 2023'
        },
        {
          blogTitle: 'blog Card 3',
          blogCoverPhoto: 'stock-3',
          blogDate: 'Oct 1, 2023'
        },
        {
          blogTitle: 'blog Card 4',
          blogCoverPhoto: 'stock-4',
          blogDate: 'Oct 1, 2023'
        }
      ]
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
</style>
