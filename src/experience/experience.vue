
<template>
  <div>
    <div class="experience">
      <h1>Experience</h1>
      <p>In my career i continually keep myself learning and state updated with new practices, trends and technologies </p>
      <div class="row" v-for="exp in exps">
        <div class="col-md-4">
          <a :href="exp.url" class="text-center">
            <img class="logo img-responsive img-circle" v-bind:src="exp.logo">
          </a>
        </div>
        <div class="col-md-8">
          <h1 v-bind:text-content.prop="exp.title"></h1>
          <h2 v-bind:text-content.prop="exp.duration"></h2>
          <p v-bind:text-content.prop="exp.description"></p>
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
  exps= [
    {
      logo:"./assets/logo-globant.png",
      url: "http://www.globant.com",
      description:"Full stack Developer",
      title:"Globant - We are ready",
      duration:"2017 - present",
    },
    {
      logo:"./assets/logo-tigoune.png",
      url: "http://une.com.co",
      description:"Full stack Developer,  Design and implementation of indicators for de sales forces in a web application,"
                    +" design a implementation a html5 mobile application for selling, customer management and all the supply chain for the sales of the company,"
                   +"this app was built in twitter bootstrap, jquery mobile, CodeIgniter, Mysql on a lamp server",
      title:"TigoUne",
      duration:"2011 - 2017",
    },
    {
      logo:"./assets/logo-edu.png",
      url: "http://edu.gov.co",
      description:"Full stack Developer",
      title:"Empresa de Desarrollo Urbano",
      duration:"2010 - 2011",
    },
    
  ];
  mounted() {
    console.log("home page");
  }
}
</script>
<style>
.experience {
  padding: 2em;
  background-color: #33a9b1;
  color: #fff;
}

.logo {
  padding: 1em;
  width: 100%;
}

.tigo-une {
  background-color: #00377B;
}
</style>
