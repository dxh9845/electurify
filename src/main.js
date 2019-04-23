import Vue from 'vue';
import './plugins/font-awesome';
import './plugins/bootstrap-vue';
import VueChatScroll from 'vue-chat-scroll';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import PDFPlugin from '../../slide-shower/dist/esm';
import '../../slide-shower/dist/index.css';
import ThemeMixin from './utils/theme.mixin';

Vue.mixin(ThemeMixin);
Vue.use(VueChatScroll);
Vue.use(PDFPlugin, { store });

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8081/',
  // connection: 'https://young-falls-51586.herokuapp.com',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
