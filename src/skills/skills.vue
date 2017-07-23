
<template>
  <div>
    <chartjs-horizontal-bar :data="mydata" :labels="mylabels"></chartjs-horizontal-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({

})
export default class Skills extends Vue {
  mylabel : string = 'Skills';
  mylabels : string[] = ['Angularjs', 'Angular', 'Vuejs','html','css','javascript','typescript'];
  mydata : number[] = [90, 40, 60,90,90,90,80];
  // lifecycle hook
  mounted () {
    console.log("home page");
  }
}
Vue.component('skills', Skills)
</script>