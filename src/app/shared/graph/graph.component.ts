import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { AdminService } from 'src/app/core/services/admin.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})


export class GraphComponent {
  yearWiseDetails!:any
  data!:any
  categories!:any
  constructor(
    private adminService:AdminService
  ){}
  chart :ApexChart = {
    type:'bar',
    height:'350'
  }
  chartOptions!:ChartOptions  
  ngOnInit(){
    this.getYearWiseDetailsFilter()
  }
  getYearWiseDetailsFilter(){
    this.adminService.getYearWiseDetails({}).subscribe((response:IRESPONSE)=>{
      if(response.status){
        console.log(this.chartOptions);
        
        this.yearWiseDetails = response?.counts
        this.data = response?.counts.map((val:any)=>val.count)
        this.categories = response?.counts.map((val:any)=>val.month)
        console.log(this.data);
        console.log(this.categories);
        console.log(this.chartOptions);
        this.chartOptions =  {
          series: [
            {
              name: "Content Uploaded",
              data: this.data
            }
          ],
          dataLabels: {
            enabled: true
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            categories: this.categories
          },
          fill: {
            opacity: 1
          },
          yaxis: {
            title: {
              text: "$ (thousands)"
            }
          },
        };
      }
    })
  }

}
