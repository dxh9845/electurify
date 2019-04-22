import Vue from 'vue';
import './plugins/font-awesome';
import './plugins/bootstrap-vue';
import VueChatScroll from 'vue-chat-scroll';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueChatScroll);

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8081/',
  // connection: 'http://localhost:5000',
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
