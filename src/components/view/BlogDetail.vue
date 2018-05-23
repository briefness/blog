<template>
  <div class="blog-detail-info">
    <div class="blog-info">
      <p class="title">文章标题</p>
      <div class="author">
        <img :src="authorInfo.avatar" />
        <div class="info">
          <span class="name">{{authorInfo.name}}</span>
          <Button type="primary" shape="circle" size="small">
            <Icon type="android-add"></Icon>
            关注
          </Button>
          <div class="meta">
            <span>{{meta.publishTime}}</span>
            <span>字数 {{meta.wordage}}</span>
            <span>阅读 {{meta.viewsCount}}</span>
            <span>评论 {{meta.commentsCount}}</span>
            <span>喜欢 {{meta.likesCount}}</span>
            <span>赞赏 {{meta.rewardsCount}}</span>
          </div>
        </div>
      </div>
      <div class="show-content" v-html="blogContentHtml"></div>
    </div>
    <div class="support-author">
      <p>你来，已是清风拂面</p>
      <Button type="primary" @click="supportAuthor">赞赏支持</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  data () {
    return {
      authorInfo: {
        avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        name: '我的名字'
      },
      meta: {
        publishTime: '2018.05.12 08:22',
        wordage: 1000,
        viewsCount: 1000,
        commentsCount: 1000,
        likesCount: 1000,
        rewardsCount: 3
      },
      blogContentHtml: '<p>我都是金佛山的附件soID金佛山的</p><img src="//upload-images.jianshu.io/upload_images/9215795-4a96efa0165df0bc.jpg" width="110%" style="margin-left: -5%;" />'
    }
  },
  mounted () {},
  methods: {
    // 支持作者
    supportAuthor: function () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-detail-info {
  margin: 0 auto;
  width: 40%;
}
.blog-detail-info .show-content {
  font-size: 16px;
}
.blog-detail-info .title {
  margin-top: 20px;
  font-size: 34px;
  font-weight: 700;
}
.blog-detail-info .author {
  margin: 30px 0 40px;
  text-align: left;
}
.blog-detail-info .author img {
  width: 48px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.blog-detail-info .author .info {
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
}
.blog-detail-info .author .info .name {
  font-size: 16px;
}
.blog-detail-info .author .info .meta {
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
}
.blog-detail-info .ivu-btn-primary {
  background-color: #42c02e;
  border-color: #42c02e;
}
/* 支持作者 */
.blog-detail-info .support-author {
  min-height: 144px;
  margin-top: 20px;
  padding: 20px 0;
  text-align: center;
}
.blog-detail-info .support-author p {
  padding: 0 30px;
  margin-bottom: 20px;
  min-height: 24px;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: #969696;
}
.blog-detail-info .support-author .ivu-btn-primary {
  margin-bottom: 20px;
  padding: 8px 25px;
  font-size: 16px;
  background-color: #ea6f5a;
  border-radius: 20px;
  border-color: #ea6f5a;
}
</style>
