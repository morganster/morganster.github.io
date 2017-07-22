
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
export default class Product extends Vue {
  helloMsg: string = 'Hello, this is the home page';
  // lifecycle hook
  mounted () {
    console.log("home page");
  }
}
</script>