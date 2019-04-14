import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faAngleDoubleRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBrain, faAngleDoubleRight, faCog);

Vue.component('fa-icon', FontAwesomeIcon);
