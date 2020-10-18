import axios from 'axios'
import Vue from 'vue'

export default () => {
  Vue.prototype.$axios = axios.create({
    baseURL: 'https://limehometest-back.herokuapp.com'
  })
}
