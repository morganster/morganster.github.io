declare var require: any;
import Vue from 'vue';
import 'hchs-vue-charts';
var VueScrollTo = require('vue-scrollto');
import VueCarousel from 'vue-carousel';
var App = require('./app.vue').default;
var Education = require('./education/education.vue').default;
var Experience = require('./experience/experience.vue').default;
var Contact = require('./contact/contact.vue').default;
var Projects = require('./projects/projects.vue').default;
var Skills = require('./skills/skills.vue').default;
var Home = require('./home/home.vue').default;

Vue.use((window as any).VueCharts);
Vue.use(VueScrollTo);
Vue.use(VueCarousel);

// tslint:disable-next-line:no-unused-expression
const app = new Vue({
                      el: '#app',
                      components: {App},
                      render: h => h('app'),
                    });
