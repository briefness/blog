<template>
  <div class="blog-content-info">
    <RecommendCollection></RecommendCollection>
    <div class="blog-list">
      <div class="blog-list-content">
        <p class="author">
          <Avatar class="avatar" :src="authorInfo.avatar" />
          <span>{{authorInfo.userName}}</span>
          <span class="publish-time">{{articleInfo.publishTime}}</span>
        </p>
        <router-link to="/blogDetail" class="blog-title">{{articleInfo.blogTitle}}</router-link>
        <p class="blog-content">
          {{articleInfo.blogContent}}
        </p>
        <p class="meta">
          <router-link to="/blogDetail"><Icon type="eye"></Icon>{{actionInfo.pageView}}</router-link>
          <router-link to="/blogDetail"><Icon type="chatbox"></Icon>{{actionInfo.reply}}</router-link>
          <Icon type="heart"></Icon>{{actionInfo.like}}
        </p>
      </div>
      <router-link to="/blogDetail">
        <img v-lazy="articleInfo.relatedImg" class="img-blur-done" />
      </router-link>
    </div>
    <Button type="primary" long @click="loadMore">阅读更多</Button>
  </div>
</template>

<script>
import RecommendCollection from './RecommendCollection'
export default {
  name: 'BlogList',
  components: {
    RecommendCollection
  },
  data () {
    return {
      // 用戶信息
      authorInfo: {
        avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        userName: '用户名'
      },
      // 文章信息
      articleInfo: {
        publishTime: '05.08 08:45',
        blogTitle: '文章标题',
        blogContent: '这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示...',
        relatedImg: 'http://upload-images.jianshu.io/upload_images/4810847-84c483151ca77460.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      // 数据信息
      actionInfo: {
        pageView: 1000,
        reply: 10000,
        like: 10
      }
    }
  },
  mounted () {},
  methods: {
    // 阅读更多
    loadMore: function () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-content-info {
  margin-left: 25%;
  width: 40%;
}
.blog-content-info .ivu-btn-primary {
  background-color: #a5a5a5;
  border-color: #a5a5a5;
  border-radius: 20px;
  margin: 30px auto 60px;
  height: 40px;
  font-size: 15px;
  padding: 10px 15px;
}
.blog-list {
  position: relative;
}
.blog-list .author {
  margin-bottom: 14px;
}
.blog-list .author .avatar {
  margin-right: 5px;
}
.blog-list .meta {
  color: #b4b4b4;
}
.blog-list .meta a {
  margin-right: 10px;
  color: #b4b4b4;
}
.blog-list .img-blur-done {
  position: absolute;
  top: 50%;
  margin-top: -68px;
  right: 0;
  width: 150px;
  height: 120px;
}
.blog-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 24px;
  margin-bottom: 8px;
}
.blog-list-content:first-child {
  border-top: 1px solid #F0F0F0;
}
.blog-list-content {
  padding-right: 160px;
  min-height: 140px;
  margin-bottom: 17px;
  padding-bottom: 17px;
  border-bottom: 1px solid #F0F0F0;
}
.blog-list .blog-title {
  color: #333;
  display: inherit;
  text-align: left;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
}
.blog-list .publish-time{
  color: #969696;
}
.blog-list p {
  text-align: left;
}
</style>
