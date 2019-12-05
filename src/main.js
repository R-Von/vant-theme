import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
Vue.config.productionTip = false

import 'vant/lib/button/style/less'

Vue.use(Vant);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
