declare var require: any;
import Vue from 'vue';
var VueScrollTo = require('vue-scrollto');
var App = require('./app.vue').default;
require('./education/education.vue');
require('./experience/experience.vue');
require('./contact/contact.vue');
require('./projects/projects.vue');
require('./skills/skills.vue');
require('./home/home.vue');
Vue.use(VueScrollTo);

// tslint:disable-next-line:no-unused-expression
const app = new Vue({
                      el: '#app',
                      components: {App},
                      render: h => h('app'),
                    });
