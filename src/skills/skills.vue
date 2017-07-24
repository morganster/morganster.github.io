
<template>
  <div>
    <h1 class="text-center">Skills</h1>
    <div class="row">
      <div class="col-md-6">
        <chartjs-horizontal-bar :data="mydata" :datalabel="mylabel" :option="myoption" :labels="mylabels"></chartjs-horizontal-bar>
      </div>
      <div class="col-md-6">
            <chartjs-horizontal-bar :data="mydata" :datalabel="mylabel" :option="myoption" :labels="mylabels"></chartjs-horizontal-bar>
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
  mydata: number[] = [90, 90, 70, 90, 90, 90, 80];
  myoption = {
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
        display: true,
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          offsetGridLines: false
        },
      }],
      yAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
    },
  }
  mydatasets:[{
                label: "My first dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [''],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [90, 90, 70, 90, 90, 90, 80],
                spanGaps: false,
            }
            ];

  // lifecycle hook
  mounted() {
    console.log("home page");
  }
}
Vue.component('skills', Skills)
</script>