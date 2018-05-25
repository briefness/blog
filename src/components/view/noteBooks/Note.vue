<template>
  <div class="write-note">
    <mavon-editor v-model="note"/>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      note: ''
    }
  },
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: #FFF;
}
</style>
