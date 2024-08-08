import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog',
      //redirect:'/post'
      redirect: { name: 'blog' }
    },
    {
      path: '/post',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:post',
      name: 'Post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/user/:user/post/:post',
      name: 'UserPost',
      component: () => import('../views/UserPostView.vue')
    },
    {
      path: '/compras/:orderId(\\d+)',
      name: 'Order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/compras/:producName',
      name: 'Produc',
      component: () => import('../views/ProducView.vue')
    },
    {
      path: '/users/:userId(\\d+)?',
      name: 'Users',
      component: () => import('../views/UserView.vue'),
      props: true,
      children:
        [
          {
            path: '',
            name: 'userIndex',
            component: () => import('../views/users/IndexView.vue')
          },
          // users/:userId/profile
          {
            path: 'profile',
            name: 'userProfile',
            component: () => import('../views/users/ProfileView.vue')
          },
          // users/:userId/courses
          {
            path: 'courses',
            name: 'userCourses',
            component: () => import('../views/users/CoursesView.vue')
          }
        ]
    },
    {
      path: '/:pathMatch(.*)',
      name: 'User',
      component: () => import('../views/NotFountView.vue')
    }
  ]
})

export default router
