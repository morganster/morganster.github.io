
<template>
  <div>
    <div class="top-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/education">Education</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link class="pull-right" to="/contact">Contact</router-link>
    </div>
    <div class="container">
      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="{ enter: 1500, leave: 100 }">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  propMessage: string;
  // inital data
  msg: number = 123;
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage;
  // lifecycle hook
  mounted() {
    this.greet();
  }
  // computed
  get computedMsg() {
    return 'computed ' + this.msg;
  }
  // method
  greet() {
    // alert('greeting: ' + this.msg);
  }
}
</script>
<style src="bootstrap/less/bootstrap.less" lang="less"></style>
<style src="font-awesome/css/font-awesome.min.css" lang="css"></style>
<style src="animate.css/animate.min.css" lang="css"></style>
<style lang="css">
      @import url('https://fonts.googleapis.com/css?family=Neucha');
</style>
<style lang="css">
.top-bar {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #595959;
  z-index: 10;
}

.router-link-exact-active {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #fdfdfd;
  font-size: 1.4em;
}

body {
  background-color: #efefef;
  font-family: 'Neucha', cursive;
}
</style>
