import Vue from 'vue'
import App from './App.vue'
import initPlugins from './plugins'

Vue.config.productionTip = false

const app = {
  render: h => h(App),
}

initPlugins()

export default new Vue(app).$mount('#app')
