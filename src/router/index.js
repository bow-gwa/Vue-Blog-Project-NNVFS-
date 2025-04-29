import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from "../views/Details.vue"
import Create from "../views/Create.vue"
import Tag from '@/views/Tag.vue'
import Realtime from '@/views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true
  },
  {
    path:"/create",
    name: "Create",
    component: Create
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag
  },
  {
    path: "/realtime",
    name: "Realtime",
    component: Realtime
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
