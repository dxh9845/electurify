import Vue from 'vue';

// Plugins
import './plugins/font-awesome';
import './plugins/bootstrap-vue';
import VueChatScroll from 'vue-chat-scroll';
import VueSocketIO from 'vue-socket.io';

// PDF Slides
import PDFPlugin from '../../slide-shower/dist/esm';
import '../../slide-shower/dist/index.css';

// Mixins
import RoleMixin from './utils/role.mixin';
import ThemeMixin from './utils/theme.mixin';

// App
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';


Vue.mixin(ThemeMixin);
Vue.mixin(RoleMixin);
Vue.use(VueChatScroll);
Vue.use(PDFPlugin, { store });

Vue.use(new VueSocketIO({
  debug: true,
  // connection: 'http://localhost:8081/',
  // connection: 'http://localhost:5000',
  connection: 'https://young-falls-51586.herokuapp.com',
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
