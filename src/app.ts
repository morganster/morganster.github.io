declare var require: any;
import Vue from 'vue';
var VueScrollTo = require('vue-scrollto');
var App = require('./app.vue').default;
var Education = require('./education/education.vue').default;
var Experience = require('./experience/experience.vue').default;
var Contact = require('./contact/contact.vue').default;
var Projects = require('./projects/projects.vue').default;
var Skills = require('./skills/skills.vue').default;
var Home = require('./home/home.vue').default;
Vue.use(VueScrollTo);

// tslint:disable-next-line:no-unused-expression
const app = new Vue({
                      el: '#app',
                      components: {App},
                      render: h => h('app'),
                    });
