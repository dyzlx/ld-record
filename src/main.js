// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import A from './js/print.js'
import navModel from './components/navModel'
import handleModel from './components/handleModel'
import "./css/index.css"


Vue.config.productionTip = false

console.log(A.a)

/* eslint-disable no-new */
new Vue({
  el: '#record',
  router,
  components: {
    App,
    navModel,
    handleModel
  },
})
