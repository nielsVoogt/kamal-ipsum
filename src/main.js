import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)

new Vue({
  el: '#app',
  render: h => h(App)
})
