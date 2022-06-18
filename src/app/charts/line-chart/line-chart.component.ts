import { Component, Input, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data : any;

  public chartOptions: any;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.data.series
        }
      ],
      chart: {
        height: this.data.height,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: this.data.dataLabel
      },
      stroke: {
        curve: this.data.curve
      },
      title: {
        text: this.data.titleText,
        align: this.data.titleAlign
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.data.categories
      }
    };

    let count = 0;
    setInterval(() => {
      count = count + 10;

      // this.chartOptions.series[0].data.push(count);
      // this.chartOptions.xaxis.categories.push(count.toString());

      // this.chartOptions.series = [...this.chartOptions.series];
      // this.chartOptions.xaxis = [...this.chartOptions.xaxis];
    }, 10000);
  }

}
