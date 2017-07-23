declare var require: any;
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'hchs-vue-charts';
var App = require('./app.vue').default;
var Education = require('./education/education.vue').default;
var Experience = require('./experience/experience.vue').default;
var Contact = require('./contact/contact.vue').default;
var Projects = require('./projects/projects.vue').default;
var Skills = require('./skills/skills.vue').default;
var Home = require('./home/home.vue').default;

Vue.use(VueRouter);
Vue.use((window as any).VueCharts);

const routes = [
  {path: '/', component: Home},
  {path: '/experience', component: Experience},
  {path: '/education', component: Education},
  {path: '/projects', component: Projects},
  {path: '/skills', component: Skills},
  {path: '/contact', component: Contact},
];

const router = new VueRouter({
  routes,
});
// tslint:disable-next-line:no-unused-expression
const app = new Vue({
                      router,
                      el: '#app',
                      components: {App},
                      render: h => h('app')
                    });
