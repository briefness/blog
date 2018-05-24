<template>
  <div class="comment-list">
    <div class="top-title">
      <div class="pull-left">
        <span>{{commentCount}}条评论</span>
        <a class="author-only" @click="justLookAuthor">只看作者</a>
      </div>
      <div class="pull-right">
        <a @click="timeSequence">按时间正序</a>
        <a @click="timeInverted">按时间倒序</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  data () {
    return {
      commentCount: 63
    }
  },
  mounted () {},
  methods: {
    // 只看作者
    justLookAuthor: function () {},
    // 按时间正序
    timeSequence: function () {},
    // 按时间倒序
    timeInverted: function () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment-list .top-title {
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  border-bottom: 1px solid #f0f0f0;
}
.comment-list .top-title span {
  vertical-align: middle;
}
.comment-list .top-title .author-only {
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 12px;
  color: #969696;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}
.comment-list .top-title .pull-right a {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #969696;
  display: inline-block;
}
</style>
