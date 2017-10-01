
<template>
  <div class="animated zoomIn">
     <div class="row skills">
      <div class="col-md-12">
           <h1 class="text-center">Skills</h1>
      </div>
    </div>
    <div class="row skills">
      <div class="col-xs-4 col-md-2" v-for="skill in mySkills">
        <div class="icon">
            <img class="img-fluid" v-bind:src="skill.url" v-bind:alt="skill.name">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export interface ISkill {
    url: string;
    name: string;
  };

@Component({

})
export default class Skills extends Vue {
  mySkills:ISkill[] = [
    {
      url: "../assets/angular-icon.svg",
      name: "Angular",
    },
    {
      url: "../assets/vue.svg",
      name: "VueJS",
    },
    {
      url: "../assets/nodejs-icon.svg",
      name: "NodeJS",
    },
    {
      url: "../assets/codeigniter.svg",
      name: "Codeigniter",
    },
    {
      url: "../assets/jquery.svg",
      name: "JQuery",
    },
    {
      url: "../assets/javascript.svg",
      name: "Javascript",
    },
    {
      url: "../assets/git-icon.svg",
      name: "Git",
    },
    {
      url: "../assets/css-3.svg",
      name: "CSS3",
    },
    {
      url: "../assets/html-5.svg",
      name: "HTML5",
    },
    {
      url: "../assets/typescript-icon.svg",
      name: "TypeScript",
    },
    {
      url: "../assets/mysql.svg",
      name: "MySQL",
    },
    {
      url: "../assets/php.svg",
      name: "PHP",
    },

  ];
  mylabel: string = 'Skills';
  
  // lifecycle hook
  mounted() {
  }
}
Vue.component('skills', Skills)
</script>
<style>
.icon{
  padding: 2em;
}
.skills {
   padding: 2em;
  background-color: #fff;
  color: #333;
}
.skill-col{
  margin-bottom: 2em;
}
</style>
