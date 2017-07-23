
<template>
  <div>
    <chartjs-horizontal-bar></chartjs-horizontal-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({

})
export default class Skills extends Vue {
  helloMsg: string = 'Hello, this is the home page';
  mylabel : string = 'TestDataLabel';
  mylabels : string[] = ['happy', 'myhappy', 'hello'];
  mydata : number[] = [100, 40, 60];
  // lifecycle hook
  mounted () {
    console.log("home page");
  }
}
Vue.component('skills', Skills)
</script>