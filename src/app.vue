
<template>
  <div>
    <div class="top-bar">
      <div class="row">
        <div class="r-links col-3 col-md-3 text-center"  v-scroll-to="'#home'">
            <span class="link-text">About Me</span>
            <span class="fa fa-user fa-icon"></span>
        </div>
        <div class="r-links col-3 col-md-3 text-center" v-scroll-to="'#experience'">
            <span class="link-text">Experience</span>
            <span class="fa fa-road fa-icon">&nbsp</span>
        </div>
        <div class="r-links col-3 col-md-3 text-center" v-scroll-to="'#education'">
            <span class="link-text">Education</span>
            <span class="fa fa-university fa-icon"></span>
        </div>
        <div class="r-links col-3 col-md-3 text-center" v-scroll-to="'#skills'">
            <span class="link-text">Skills</span>
            <span class="fa fa-line-chart fa-icon"></span>
        </div>
      </div>

    </div>
    <div class="container main-content">
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
<style src="font-awesome/css/font-awesome.min.css" lang="css"></style>
<style src="animate.css/animate.min.css" lang="css"></style>
<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Dosis');
</style>
<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
.top-bar {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #4390bc;
  z-index: 10;
  line-height: 2.5em;
  height: 2.5em;
}

.router-link-exact-active {
  font-weight: bold;
}

.r-links {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.8em;
    display: inline;
    cursor: pointer;
    padding-left: 0.5em;
    &:hover {
      text-decoration: none;
      font-weight: bold;
      color: #efefef;
    }
    &:focus {
      text-decoration: none;
      font-weight: bold;
      color: #efefef;
    }
  }


body {
  background-color: #efefef;
  font-family: 'Dosis', cursive;
  color: #454545;
}

h1 {
  font-size: 3em;
  color: #3e3e3e;
}

h3 {
  color: #454545;
}

p {
  font-size: 1.8em;
  color: #454545;
}
.social-links {
  color: #33a9b1;
  & .fa{
    font-size: 1.8em;
    padding: 0 0.1em;
  }
}

@include media-breakpoint-down(md) {
  .container {
    max-width: 100%;
  }
  .top-bar {
    height: 9.5em;
  }
  .link-text {
    display: none;
  }
  .r-links {
    height: 5.3em;
    vertical-align: middle;
    line-height: 6.5em;
    border-right: solid #efefef 1px;
    &:active{
      background-color: #68a7ca;
    }
  }
  .fa-icon {
    display: inline-block;
    font-size: 3em;
  }
  .main-content{
    margin-top:8.3em;
  }
  .social-links{
    & .fa{
    padding: 0 1em;
      font-size: 4em;
    }
  }
}
</style>
