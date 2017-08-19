
<template>
  <div>
    <div class="row education">
    <h1 class="text-center">{{helloMsg}}</h1>
      <div class="col-md-4" v-for="edu in education">
        <h3 v-bind:text-content.prop="edu.year"></h3>
        <h3 v-bind:text-content.prop="edu.place"></h3>
        <h3 v-bind:text-content.prop="edu.title"></h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({

})
export default class Education extends Vue {
  helloMsg: string = 'Education';
  education = [
    {
      place: "Tecnologico Pascual Bravo",
      year: "2011",
      title: "Electronic tech",
    },
    {
      place: "Universidad de Antioquia",
      year: "2013",
      title: "Software Engineer",
    },
    {
      place: "University of Maryland - Coursera",
      year: "2015",
      title: "CiberSecuity Especialization",
    },
  ];
  // lifecycle hook
  mounted() {
  }
}
Vue.component('education', Education) // register component globally
</script>
<style>
  .education{
    padding: 2em;
    background-color: #e8e8e8;
  }
</style>
