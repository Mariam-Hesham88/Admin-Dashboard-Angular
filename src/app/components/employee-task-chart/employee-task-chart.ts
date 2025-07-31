import { Component } from '@angular/core';
import { ChartConstructorType, HighchartsChartDirective } from 'highcharts-angular';
import { HighchartsChartComponent } from "highcharts-angular";

@Component({
  selector: 'app-employee-task-chart',
  imports: [HighchartsChartComponent],
  templateUrl: './employee-task-chart.html',
  styleUrl: './employee-task-chart.scss'
})
export class EmployeeTaskChart {
  chartOptions: Highcharts.Options = { 
chart: {
      type: 'pie'
    },
    title: {
      text: 'Tasks per Employee'
    },
    series: [{
      name: 'Tasks',
      type: 'pie',
      data: [
        { name: 'Ahmed', y: 5 },
        { name: 'Sara', y: 3 },
        { name: 'Omar', y: 7 },
        { name: 'Nour', y: 3 },
        { name: 'Layla', y: 2 }
      ]
    }]
  }; // Required
  chartConstructor: ChartConstructorType = 'chart'; // Optional, defaults to 'chart'
  updateFlag: boolean = false; // Optional
  oneToOneFlag: boolean = true; // Optional, defaults to false
}
