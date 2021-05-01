import 'buefy/dist/buefy.css';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Buefy from 'buefy';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import locale from './locale';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(Buefy);

const i18n = new VueI18n(locale);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
