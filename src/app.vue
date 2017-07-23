
<template>
  <div>
    <div class="top-bar">
      <a href="#" v-scroll-to="'#home'">About Me</a>
      <a href="#" v-scroll-to="'#experience'">Experience</a>
      <a href="#" v-scroll-to="'#education'">Education</a>
      <a href="#" v-scroll-to="'#skills'">Skills</a>
      <a href="#" v-scroll-to="'#projects'">Projects</a>
      <a href="#" v-scroll-to="'#contact'">Contact</a>
    </div>
    <div class="container">
        <home id="home"></home>
        <experience id="experience"></experience>
        <education id="education"></education>
        <skills id="skills"></skills>
        <projects id="projects"></projects>
        <contact id="contact"></contact>
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
