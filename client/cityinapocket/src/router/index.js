import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Home from '../views/HomeView.vue'
import Landing from '../views/LandingView.vue'
import Emergency from '../views/EmergencyView.vue'
import Attractions from '../views/AttractionsView.vue'
import Profile from '../views/ProfileView.vue'
import Restaurants from '../views/RestaurantsView.vue'
import Transportations from '../views/TransportationsView.vue'
import Provider from '../views/ProviderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  {
    path: '/emergency-services',
    name: 'emergency',
    component: Emergency
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: Attractions
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/transportations',
    name: 'transportations',
    component: Transportations
  },
  {
    path: '/provider/:id',
    name: 'provider',
    component: Provider
  }
]

const router = new VueRouter({
  routes
})

export default router
