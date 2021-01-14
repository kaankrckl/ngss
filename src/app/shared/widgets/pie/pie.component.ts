import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { InfoService } from 'src/app/services/info.service'

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartOptions: {};
  completed: number;
  unfinished: number;
  Highcharts = Highcharts;
  todos: Array<any>;

    constructor(private infoServ: InfoService) { 

    }

  ngOnInit(): void {
      this.pieSetup();
  };

  createPie(){
    this.chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Completion rates of todos'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Completed',
                y: this.completed,
                sliced: true,
                selected: true
            }, {
                name: 'Unfinished',
                y: this.unfinished
            }]
        }]
  }

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300)
  }

  pieSetup(){
    this.infoServ.getTodos().subscribe(data =>{
        this.todos = data;
        this.completed = this.todos.filter(data => data.completed == true).length;
        this.unfinished = this.todos.length - this.completed;
        this.createPie();
    }, error => {
      });
  }

}
