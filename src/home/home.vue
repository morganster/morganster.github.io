
<template>
  <div>
    <div class="row intro">
      <div class="col-md-4">
        <img src="../assets/profile.jpg" class="img-responsive img-circle">
        <h3 class="text-center">Carlos Eduardo Jaramillo L</h3>
        <h4 class="text-center">Front End Developer</h4>
        <div class="text-center">
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
      <div class="col-md-8">
  
        <h1>Welcome to my online resume</h1>
        <p>I have developed a wide range web applications build on top of mvc php frameworks like codeiginiter, yiiframework, using frontend technologies like jquery-ui, bootstrap and AngularJS. I also have applied these technologies to HTML5 hybrid mobile development with ionic framework, also I have developed skills in apple swift for native iOS development. </p>
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
<style lang="css">
.intro {
  background-color: #e8e8e8;
  padding: 3em;
}

.social-links {
  color: #33a9b1;
}
</style>
