module.exports = {
  '/': {
    name: 'home',
    component (resolve) {
      require(['./pages/home/home.vue'], resolve)
    }
  },
  '/orders': {
    name: 'orders',
    component (resolve) {
      require(['./pages/orders/orders.vue'], resolve)
    }
  },
  '/profile': {
    name: 'profile',
    component (resolve) {
      require(['./pages/profile/profile.vue'], resolve)
    }
  },
  '/activities': {
    name: 'activities',
    component (resolve) {
      require(['./pages/activities/activities.vue'], resolve)
    }
  },
  '/contect': {
    name: 'contect',
    component (resolve) {
      require(['./pages/contect/contect.vue'], resolve)
    }
  },
  '/signin': {
    name: 'signin',
    component (resolve) {
      require(['./pages/signin/signin.vue'], resolve)
    }
  },
  '/game': {
    name: 'game',
    component (resolve) {
      require(['./pages/game/game.vue'], resolve)
    }
  }
}
