
<template>
  <div class="animated zoomIn">
     <div class="row skills">
      <div class="col-md-12">
           <h1 class="text-center">Skills</h1>
      </div>
    </div>
    <div class="row skills">
      <div class="col-md-6">
        <chartjs-horizontal-bar :data="myData" :datalabel="mylabel" :labels="mylabels" :bordercolor="myBackgroundColor" :backgroundcolor="myBackgroundColor" :option="myOption" ></chartjs-horizontal-bar>
      </div>
      <div class="col-md-6">
            <chartjs-horizontal-bar :data="mydataSecond" :datalabel="mylabel" :option="myOption" :labels="mylabelsSecond" :bordercolor="myBackgroundColorSecond" :backgroundcolor="myBackgroundColorSecond" ></chartjs-horizontal-bar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({

})
export default class Skills extends Vue {
  mylabel: string = 'Skills';
  mylabels: string[] = ['Angularjs', 'Angular', 'Vuejs', 'html', 'css', 'javascript', 'typescript'];
  mylabelsSecond: string[] = ['mysql', 'php', 'photoshop', 'nodejs', 'express', 'webpack', 'linux'];
  myColors: string[] = ["fafafa","cacaca"];
  myData: any[] = [90, 90, 70, 90, 95, 90, 80];
  /*myData: any[] = [{label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]}];*/
  myBackgroundColor: string[] = ["#a6120d","#dd0031", "#41b883","#f47933","#008fd5","#faab4b","#0074c1"];
  myBackgroundColorSecond: string[] = ["#017495","#777bb4", "#35c1e6","#90c53f","#707070","#7d9ede","#010101"];
  mydataSecond: number[] = [90, 90, 76, 70, 65, 80, 85];
  myOption = {
     legend: {
            display: false,
            },
    responsive: true,
    maintainAspectRatio: true,
    label: {
      display: false,
    },

    scales: {
      xAxes: [{
        gridLines: {
                    display:false
                },
        display: true,
        ticks: {
          beginAtZero: true,
        },
      }],
      yAxes: [{
            gridLines: {
                display: false

            }
        }]
    },
  }

  // lifecycle hook
  mounted() {
  }
}
Vue.component('skills', Skills)
</script>
<style>
.skills {
   padding: 2em;
  background-color: #fff;
  color: #333;
}
</style>
