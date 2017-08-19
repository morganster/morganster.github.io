
<template>
  <div class="animated fadeInRight">
      <div class="row experience">
        <div class="col-md-12">
          <h1 class="text-center">Experience</h1>
          <p class="text-center text-secondary text-bold">In my career i continually keep myself learning and state updated with new practices, trends and technologies </p>
          <div class="row">
            <div class="col-md-4"  v-for="exp in exps">
              <a :href="exp.url" class="text-center">
                <img class="logo img-responsive img-circle" v-bind:src="exp.logo">
              </a>
               <h1 v-bind:text-content.prop="exp.title"></h1>
              <h3 class="text-secondary" v-bind:text-content.prop="exp.duration"></h3>
              <p class="text-secondary" v-bind:text-content.prop="exp.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({

})
export default class Experience extends Vue {
  exps = [
    
    {
      logo: "./assets/logo-edu.png",
      url: "http://edu.gov.co",
      description: 'Full stack Developer, Design, Mainteinance and implementation of a system to track, follow and manage construction projects for the local goverment. '
       + 'this projects were achieved using mysql,codeigniter and for the client side JQuery, JQuery UI.',
      title: "EDU",
      duration: "2010 - 2011",
    },
    {
      logo: "./assets/logo-tigoune.png",
      url: "http://une.com.co",
      description: "Full stack Developer,  Design and implementation of indicators for de sales forces in a web application,"
      + " design a implementation a html5 mobile application for selling, customer management and all the supply chain for the sales of the company,"
      + "this app was built in twitter bootstrap, jquery mobile, CodeIgniter, Mysql on a lamp server",
      title: "TigoUne",
      duration: "2011 - 2017",
    },
    {
      logo: "./assets/logo-globant.png",
      url: "http://www.globant.com",
      description: "Web UI Developer, Implementation of client side behaviour, and visual designs using frontend frameworks like Bootstrap, Angularjs, Angular.",
      title: "Globant",
      duration: "2017 - present",
    },

  ];
  mounted() {
    console.log("home page");
  }
}
Vue.component('experience', Experience)
</script>
<style>
.experience {
  padding: 2em;
  background-color: #fff;
  color: #333;
}

.logo {
  padding: 1em;
  width: 100%;
}

.text-secondary{
  color:#454545;
}

.text-bold{
  font-weight: bold;
}

.tigo-une {
  background-color: #00377B;
}
</style>
