import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import(/* webpackChunkName: "Login" */ '@/components/view/Login')
const Index = () => import(/* webpackChunkName: "Index" */ '@/components/Index')
const BlogList = () => import(/* webpackChunkName: "BlogList" */ '@/components/view/blogList/BlogList')
const BlogDetail = () => import(/* webpackChunkName: "BlogDetail" */ '@/components/view/blogDetail/BlogDetail')
const NoteBooks = () => import(/* webpackChunkName: "NoteBooks" */ '@/components/view/noteBooks/Note')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: BlogList
        },
        {
          path: '/blogList',
          name: 'BlogList',
          component: BlogList
        },
        {
          path: '/blogDetail',
          name: 'BlogDetail',
          component: BlogDetail
        },
        {
          path: '/noteBooks',
          name: 'NoteBooks',
          component: NoteBooks
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
