const routes = [
  {
    path: '/three',
    component: () => import('@/views/ThreeView.vue'),
    meta: {
      requireAuth: true
    }
  }
]

export default routes
