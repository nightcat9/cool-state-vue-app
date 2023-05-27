import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StateListView from '../views/StateListView.vue'
import StateInfoView from '../views/StateInfoView.vue'
import BirdListView from '../views/BirdListView.vue'
import FlowerListView from '../views/FlowerListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/states',
    name: 'states',
    component: StateListView
  },
  {
    path: '/states/:abbr',
    component: StateInfoView
  },
  {
    path: '/birds',
    name: 'birds',
    component: BirdListView
  },
  {
    path: '/flowers',
    name: 'flowers',
    component: FlowerListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
