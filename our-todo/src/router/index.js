import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Todo from '../views/Todo.vue'

const routes = [
  {
    path: '/',
    name: 'signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
