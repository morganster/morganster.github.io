
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
        <p>Hello, i am a front end developer with some knowledge in others areas like backend and servers, my main field of work is the front end, 
          in my career i have developed a wide range web applications built on top of mvc php frameworks like codeiginiter, yiiframework,
          using frontend technologies like jquery-ui, bootstrap and AngularJS and also have applied these technologies to HTML5 hybrid mobile development
          with ionic framework and also I have developed skills in apple swift for native iOS development. i'm  always seeking better ways to do 
          amazing apps and websites using latest technologies and usability patterns.</p>
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
