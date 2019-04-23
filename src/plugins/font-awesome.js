import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBrain, faAngleDoubleRight, faCog, faMicrophone, faInfo, faComments, faPalette, faMoon, faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBrain, faAngleDoubleRight, faCog, faMicrophone, faInfo, faComments, faPalette, faMoon, faSun);

Vue.component('fa-icon', FontAwesomeIcon);
