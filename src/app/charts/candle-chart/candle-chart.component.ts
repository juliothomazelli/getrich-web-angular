import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.scss']
})
export class CandleChartComponent implements OnInit {
  @Input() data : any;

  public chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: this.data.series
        }
      ],
      chart: {
        type: "candlestick",
        width: this.data.width,
        height: this.data.height
      },
      title: {
        text: this.data.titleText,
        align: this.data.titleAlign
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    }
  }
}
