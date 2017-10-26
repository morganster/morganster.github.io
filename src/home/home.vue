
<template>
  <div class="animated zoomIn">
    <div class="row intro">
      <div class="col-lg-6 col-md-12 col-xs-12 col-sm-12">
        <img src="../assets/profile.jpg" class="img-fluid rounded-circle">
        <h3 class="text-center">Carlos Eduardo Jaramillo L</h3>
        <h4 class="text-center">Front End Developer</h4>
        <div class="text-center">
          <a href="mailto:cejl397@gmail.com" target="_blank" class="social-links">
            <i class="fa fa-envelope"></i>
          </a>
          <a href="https://github.com/morganster" target="_blank" class="social-links">
            <i class="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/carlosjar/" target="_blank" class="social-links">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://piratesofjs.wordpress.com" target="_blank" class="social-links">
            <i class="fa fa-wordpress"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-xs-12 col-sm-12 about-me">
  
        <h1 class="text-center">Welcome to my online resume</h1>
        <p>Hi, I'm a passionate front end developer, who always tries to make incredible web applications that impact and love many people.
my main skills are angular, vuejs, html5, javascript, typscript, css and taskers like gulp, webpack etc. with enough experience with backend languages like php with codeigniter, yii and symfony and databases like mysql, sql server. 
and well I also have some knowledge of apple swift xD.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
})
export default class Home extends Vue {
  mounted() {
  }
}
Vue.component('home', Home)
</script>
<style lang="less">
.intro {
  background-color: #e8e8e8;
  padding: 3em;
}
.about-me{
  padding: 1em;
}


</style>
