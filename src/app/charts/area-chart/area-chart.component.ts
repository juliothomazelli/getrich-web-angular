import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @Input() data : any;

  public chartOptions : any = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: this.data.series.monthDataSeries3.prices
        }
      ],
      chart: {
        type: "area",
        height: this.data.height,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: this.data.dataLabel
      },
      stroke: {
        curve: this.data.curve ? this.data.curve : "smooth"
      },

      title: {
        text: this.data.titleText ? this.data.titleText : "",
        align: this.data.titleAlign ? this.data.titleAlign : ""
      },
      subtitle: {
        text: this.data.subtitleText ? this.data.subtitleText : "",
        align: this.data.subtitleAlign ? this.data.subtitleAlign : ""
      },
      labels: this.data.series.monthDataSeries3.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

}
