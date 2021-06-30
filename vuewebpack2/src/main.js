// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true;


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

router.beforeEach((to, from, next) => {
  //console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) {
    //console.log('need to verify here');
    const api = `${process.env.API_PATH}/api/user/check`;
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login'
        });
      }
    });
  }
  else {
    //不用驗証就放行
    next();
  }
  
})


