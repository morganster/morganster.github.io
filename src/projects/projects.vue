
<template>
  <div>
    <h1 class="text-center">{{helloMsg}}</h1>
    <carousel :autoplay="true" :navigationEnabled="true">
    <slide>
      Slide 1 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
    <slide>
      Slide 3 Content
    </slide>
    <slide>
      Slide 5 Content
    </slide>
    <slide>
      Slide 6 Content
    </slide>
    <slide>
      Slide 7 Content
    </slide>
  </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Carousel, Slide } from 'vue-carousel';

@Component({
  
})
export default class Projects extends Vue {
  helloMsg: string = 'Some Projects that i worked on';
  // lifecycle hook
  mounted () {
  }
}
Vue.component('projects', Projects)
</script>