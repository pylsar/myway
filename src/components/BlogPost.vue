<template>
    <div class="blog-wrapper" :class="{'no-user': !user}">
        <div class="blog-content">
            <div class="blog-content-box">
                <!-- TODO: переписать условие по дивам -->
                <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
                <h2 v-else> {{ post.title }}</h2>
                <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
                <p v-else class="content-preview">{{ post.blogHTML }}</p>
                <router-link v-if="post.welcomeScreen" to="#" class="link link-light">
                    Login/Register 
                </router-link>
                <router-link v-else to="#" class="link">
                    View Post 
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
            <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" :alt="`${post.title}`">
            <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" :alt="`${post.title}`">
        </div>
    </div>
</template>

<script>
// import Arrow from '../assets/Icons/arrow-right-light.svg';
export default{
    name: 'blogPost',

    props: ['post'],
    components: {
        // Arrow
    },
    computed: {
        user(){
            return this.$store.state.user;
        }
    }
}
</script>

<style lang="scss" scoped>

.blog-wrapper{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    @media(min-width: 700px){
        min-height: 650px;
        max-height: 650px;
        flex-direction: row;
    }

    .blog-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
        @media(min-width: 700px){
            order: 1;
        }
        
        @media(min-width: 800px){
            flex: 3;
        }

        .blog-content-box{
            max-width: 375px;
            padding: 72px 24px;
            @media(min-width: 700px) {
                padding: 0 24px;
            }

            h2{
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 24px;
                @media(min-width: 700px) {
                    font-size: 40px;
                }
            }

            p{
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }

            .content-preview{
                width: 250px;
                font-size: 13px;
                max-height: 24px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .link{
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: all .5s ease-in-out;
                &:hover{
                    border-bottom-color: #303030;
                }
            }

            .link-light{
                &:hover{
                    border-bottom-color: #ffffff; 
                }
            }
        }
    }


    .blog-photo{
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0,0,0, .1), 0 2px 4px -1px rgba(0,0,0, .06);
        @media(min-width: 700px){
            order: 2;
        }
        @media(min-width: 800px){
            flex: 4;
        }

        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &:nth-child(even){
        .blog-content{
            order: 2;
        }

        .blog-photo{
            order: 1;
        }
    }
}

.no-user:first-child{
    background-color: #303030;
    color: #fff;
}

</style>