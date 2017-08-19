
<template>
<div>
  <div class="top-bar">
  <div class="container">
      <a href="#" class="r-links" v-scroll-to="'#home'">About Me</a>
      <a href="#" class="r-links" v-scroll-to="'#experience'">Experience</a>
      <a href="#" class="r-links" v-scroll-to="'#education'">Education</a>
      <a href="#" class="r-links" v-scroll-to="'#skills'">Skills</a>
    </div>
    </div>
    <div class="container">
        <home id="home"></home>
        <experience id="experience"></experience>
        <education id="education"></education>
        <skills id="skills"></skills>
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
     @import url('https://fonts.googleapis.com/css?family=Dosis');
</style>
<style lang="less">
.top-bar {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #595959;
  z-index: 10;
  line-height: 2.5em;
  height: 2.5em;
}

.router-link-exact-active {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #fdfdfd;
  font-size: 1.4em;
  &.r-links{
    padding-left: 0.5em; 
    &:hover{
       text-decoration: none;
       font-weight: bold;
       color:#efefef;
    }
    &:focus{
      text-decoration: none;
       font-weight: bold;
       color:#efefef;
    }
  }
}

body {
  background-color: #efefef;
  font-family: 'Dosis', cursive;
  color: #454545;
}
h1{
  color: #3e3e3e;
}
h3{
  color: #454545;
}
p{
  color: #454545;
}
</style>
