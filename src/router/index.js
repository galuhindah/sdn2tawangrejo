import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SejarahView from '@/views/SejarahView.vue'
import VisiMisiView from '@/views/VisiMisiView.vue'
import LoginView from '@/views/LoginView.vue'
import StaffView from '@/views/StaffView.vue'
import SiswaView from '@/views/SiswaView.vue'
import DashboardView from '@/views/Admin/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/sejarah',
    name: 'sejarah',
    component: SejarahView
  },
  {
    path: '/visi-misi',
    name: 'visi-misi',
    component: VisiMisiView
  },
  {
    path: '/guru-dan-karyawan',
    name: 'guru-dan-karyawan',
    component: StaffView
  },
  {
    path: '/data-siswa',
    name: 'data-siswa',
    component: SiswaView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true, isAdmin: true }
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true, isAdmin: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Menambahkan guard navigation sebelum menerapkan route
router.beforeEach((to, from, next) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedInUser) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      if (to.matched.some(record => record.meta.isAdmin)) {
        if (loggedInUser.role === "admin") {
          next();
        } else {
          next({ path: "/login", query: { redirect: to.fullPath } });
        }
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router
