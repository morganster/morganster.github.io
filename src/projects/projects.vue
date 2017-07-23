
<template>
  <div>
    <h1>{{helloMsg}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({

})
export default class Projects extends Vue {
  helloMsg: string = 'Hello, this is the Projects page';
  // lifecycle hook
  mounted () {
  }
}
Vue.component('projects', Projects)
</script>