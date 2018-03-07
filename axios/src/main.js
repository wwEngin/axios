import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/base.css'
import 'mint-ui/lib/style.css'
import '../static/conf/address.js'
import store from './store'
import {Base64} from 'js-base64'
import axios from 'axios'
import {
  Header,
  Button,
  Radio,
  Popup ,
  Spinner,
  InfiniteScroll,
  Loadmore ,
  DatetimePicker,
  TabItem,
  TabContainer,
  TabContainerItem,
  Navbar
} from 'mint-ui'

Vue.use(router)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
Vue.component(Popup.name, Popup)
Vue.component(Spinner.name, Spinner)
Vue.component(Loadmore.name, Loadmore)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.use(InfiniteScroll)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.Base64 = Base64

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
