
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
export default class Education extends Vue {
  helloMsg: string = 'Hello, this is the Education page';
  // lifecycle hook
  mounted () {
  }
}
Vue.component('education', Education) // register component globally
</script>