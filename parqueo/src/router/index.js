import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarEstancias from '../components/ListarEstancias.vue'
import DarIngreso from "../components/DarIngreso.vue"
import pagosResidentes from "../components/pagosResidentes.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listar',
    name: 'Listar',
    component: ListarEstancias
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: DarIngreso
  },
  {
    path: '/pagos',
    name: 'Pagos',
    component: pagosResidentes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
