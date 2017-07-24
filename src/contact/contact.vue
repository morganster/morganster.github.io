
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
export default class Contact extends Vue {
  helloMsg: string = "Let's talk!";
  // lifecycle hook
  mounted () {
  }
}
Vue.component('contact', Contact)
</script>