import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() data : any;

  public chartOptions : any = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: this.data.series
        }
      ],
      title: {
        text: this.data.titleText,
        align: this.data.titleAlign
      },
      chart: {
        type: "bar",
        width: this.data.width,
        height: this.data.height
      },
      plotOptions: {
        bar: {
          horizontal: this.data.horizontal
        }
      },
      dataLabels: {
        enabled: this.data.dataLabel
      },
      xaxis: {
        categories: this.data.categories
      },
      yaxis: {
        reversed: this.data.yreversed
      }
    };

    // setInterval(() => {
    //   this.chartOptions.series[0].data[0] = Math.round(
    //     (Math.random() * 100)
    //   );
    //   this.chartOptions.series = [...this.chartOptions.series];
    // }, 1000);
  }

}
