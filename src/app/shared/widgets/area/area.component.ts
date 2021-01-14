import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { InfoService } from 'src/app/services/info.service'
import { UserInfo } from 'src/app/models/userInfo'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  users: Array<any>;
  usertodo: Array<any>;
  userInfo: Array<any> =[];
  chartOptions: UserInfo;
  Highcharts = Highcharts;

    constructor(private infoServ: InfoService) { 
            this.infoServ.getAllUsers().subscribe(data =>{
                this.users = data;
                this.users.forEach(item => {
                let userID = item.id;
                    this.infoServ.getTodo(item.id).subscribe(data => {
                    this.usertodo = data;
                    this.createBar()
                    let count = this.usertodo.filter(item => item.completed ==true).length;
                    this.userInfo.push({"name": userID, "y": count});
                    this.userInfo.forEach(item =>{
                        
                        this.chartOptions.series[0].data.push({"name":"userid " +item.name,"y":item.y})
                    });
                });
            }, error => {
              });
        });
    }

  ngOnInit(): void {
 
    };

    createBar(){
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Completed Todo counts by User ID'
            },
            subtitle: {
                text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Completed Todos'
                }
        
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: ''
                    }
                }
            },
        
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: ''
            },
        
            series: [
                {
                    name: "Todo",
                    colorByPoint: true,
                    data: [
                        {}
                    ]
                }
            ] 
    }
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300)
  }

}
