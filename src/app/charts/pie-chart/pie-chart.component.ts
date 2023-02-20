import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() data : any;

  public chartOptions: any;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: this.data.series,
      title: {
        text: this.data.title ? this.data.title : ""
      },
      chart: {
        height: this.data.height,
        width: this.data.width,
        type: "pie"
      },
      dataLabels: {
        enabled: this.data.showDataLabel
      },
      autoUpdateSeries: true,
      fill: {
        type: this.data.gradient ? "gradient" : ""
      },
      labels: this.data.dataLabel,
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "top"
            }
          }
        }
      ]
    };
  }
}
