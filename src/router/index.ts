import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: BooksView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
      }
  ]
})

export default router
