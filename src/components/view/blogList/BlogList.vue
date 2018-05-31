<template>
  <div class="blog-content-info">
    <RecommendCollection></RecommendCollection>
    <div class="blog-list" v-for="(blog, index) in blogList" :key="index">
      <div class="blog-list-content">
        <p class="author">
          <Avatar class="avatar" :src="blog.avatar" />
          <span>{{blog.userName}}</span>
          <span class="publish-time">{{blog.publishTime}}</span>
        </p>
        <router-link to="/blogDetail" class="blog-title">{{blog.blogTitle}}</router-link>
        <p class="blog-content">
          {{blog.blogContent}}
        </p>
        <p class="meta">
          <router-link to="/blogDetail"><Icon type="eye"></Icon>{{blog.pageView}}</router-link>
          <router-link to="/blogDetail"><Icon type="chatbox"></Icon>{{blog.reply}}</router-link>
          <Icon type="heart"></Icon>{{blog.like}}
        </p>
      </div>
      <router-link to="/blogDetail">
        <img v-lazy="blog.relatedImg" class="img-blur-done" />
      </router-link>
    </div>
    <Button type="primary" long @click="loadMore" v-if="!loading">阅读更多</Button>
    <div class="load-more-loading" v-if="loading">
      <Spin fix>
        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
        <div>一路小跑...</div>
      </Spin>
    </div>
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
      loading: false,
      blogList: [
        {
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          userName: '用户名',
          publishTime: '05.08 08:45',
          blogTitle: '文章标题',
          blogContent: '这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示...',
          relatedImg: 'http://upload-images.jianshu.io/upload_images/4810847-84c483151ca77460.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
          pageView: 1000,
          reply: 10000,
          like: 10
        },
        {
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          userName: '用户名',
          publishTime: '05.08 08:45',
          blogTitle: '文章标题',
          blogContent: '这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示...',
          relatedImg: 'http://upload-images.jianshu.io/upload_images/4810847-84c483151ca77460.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
          pageView: 1000,
          reply: 10000,
          like: 10
        },
        {
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          userName: '用户名',
          publishTime: '05.08 08:45',
          blogTitle: '文章标题',
          blogContent: '这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示...',
          relatedImg: 'http://upload-images.jianshu.io/upload_images/4810847-84c483151ca77460.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
          pageView: 1000,
          reply: 10000,
          like: 10
        }
      ]
    }
  },
  mounted () {},
  methods: {
    // 阅读更多
    loadMore () {
      this.loading = true
      // let loadingAction = setInterval(() => {
      //   this.loading = false
      //   clearInterval(loadingAction)
      // }, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~assets/less/common.less';
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
/* 内容加载中 */
.blog-content-info .load-more-loading {
  position: relative;
  height: 40px;
  margin: 30px auto 60px;
}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
  color: @main_color;
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
  padding-top: 17px;
  padding-bottom: 17px;
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
