import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Alert, ConfigProvider } from 'ant-design-vue';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(ConfigProvider).use(Alert);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
