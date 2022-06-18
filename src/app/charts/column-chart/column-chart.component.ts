import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  @Input() data : any;

  public chartOptions : any = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: this.data.series,
      chart: {
        type: "bar",
        height: this.data.height
      },
      plotOptions: {
        bar: {
          horizontal: this.data.horizontal,
          columnWidth: this.data.columnWidth,
          endingShape: "rounded"
        }
      },
      title: {
        text: this.data.titleText,
        align: this.data.titleAlign
      },
      dataLabels: {
        enabled: this.data.dataLabel
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"]
      },
      xaxis: {
        categories: this.data.categories
      },
      yaxis: {
        title: {
          text: this.data.yTitle
        }
      },
      fill: {
        opacity: this.data.opacity ? this.data.opacity : 1
      },
      tooltip: {
        y: {
          formatter: (val: any) => {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}
