
import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: import('../views/home')
    },
    {
      path: "/miniPrograms",
      name: "miniPrograms",
      component: import('../views/miniPrograms')
    },
    {
      path: "/myWallet",
      name: "myWallet",
      component: import('../views/myWallet')
    },
    {
      path: "/myApply",
      name: "myApply",
      component: import('../views/myApply')
    },
    {
      path: "/user",
      name: "user",
      component: import('../views/user')
    }
  ]

 const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router