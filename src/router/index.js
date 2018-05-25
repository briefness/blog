import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: "Index" */ '@/components/Index')
const BlogList = () => import(/* webpackChunkName: "Index" */ '@/components/view/blogList/BlogList')
const BlogDetail = () => import(/* webpackChunkName: "Index" */ '@/components/view/blogDetail/BlogDetail')
const NoteBooks = () => import(/* webpackChunkName: "Index" */ '@/components/view/noteBooks/Note')

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
    }
  ]
})
