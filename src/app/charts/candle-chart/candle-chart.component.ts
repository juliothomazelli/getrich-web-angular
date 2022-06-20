import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.scss']
})
export class CandleChartComponent implements OnInit {
  @Input() data : any;
  @ViewChild("chart", {static: false}) chart: any;

  public chartOptions: any;

  public time = 1538884800000;
  public count = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

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
        height: this.data.height,
        zoom: {
          enabled: false
        }
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

    setInterval(() => {
      this.count = this.count + 10;
      this.time = this.time + 1800000;

      let candle = {
        x: new Date(this.time),
        y: [6608 + this.count, 6606 + this.count, 6604 + this.count, 6606 + this.count]
      }

      this.chartOptions.series[0].data.push(candle);
      this.chart.series = []
      this.chart.appendSeries(this.chartOptions.series)
      
    }, 5000);
    
  }
}
