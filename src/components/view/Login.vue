<template>
  <div class="login">
    <div class="logo">
      圈子
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <a class="active" href="/sign_in">登录</a>
          <b>·</b>
          <a href="/sign_up">注册</a>
        </div>
      </h4>
      <div class="login-form">
        <Form ref="userInfo" :model="userInfo" :rules="ruleValidate">
           <FormItem prop="userName">
               <Input type="password" v-model="userInfo.userName">
                 <Icon type="ios-person-outline" slot="prepend"></Icon>
               </Input>
           </FormItem>
            <FormItem prop="passwd">
                <Input type="password" v-model="userInfo.passwd">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
           <FormItem>
               <Button type="primary" @click="handleSubmit('userInfo')">登陆</Button>
           </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please enter your password'));
  }
}
const validateName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please enter your userName'));
  }
}
export default {
  name: 'Login',
  data () {
    return {
      userInfo: {
        passwd: '',
        username: ''
      },
      ruleValidate: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        userName: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
  position: relative;
}
.login .logo {
  width: 100px;
  font-size: 50px;
  position: absolute;
  top: 56px;
  left: 50px;
  color: #ea6f5a;
  cursor: pointer;
}
.login .main {
  width: 400px;
  margin: 120px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
}
.login .main .title {
  font-size: 18px;
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
}
.login .main .title a {
  padding: 10px;
}
.login .main .active {
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
</style>
