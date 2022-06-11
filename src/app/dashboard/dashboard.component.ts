import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { BaseComponent } from '../base/base.component';
import { EventEmitterUtils } from '../utils/EventEmitterUtils';
import { HttpUtils, MethodType } from '../utils/HttpUtils';
import { DateUtils } from "../utils/DateUtils";
import binance_api from "../../binance_api.json";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent extends BaseComponent implements OnInit, OnDestroy {
  multi: any = [
    {
      "name": "Data",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    }
  ];

  view: any = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Data';
  counter = 99;

  colorScheme : any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(private httpUtils : HttpUtils, private changeDetector: ChangeDetectorRef){
    super();

    this.multi[0].series = this.initData()
  }

  initData() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        "name": i.toString(),
        "value": Math.random()
      });
    }
    return array;
  }

  getRandomArbitrary(min : number, max : number) {
    return Math.random() * (max - min) + min;
  }

  ngOnInit(){
    let teste = 0;
    setInterval(() => {
      teste += 1;

      let serie = {
        "name": teste.toString(),
        "value": this.getRandomArbitrary(-2000, 2000)
      }

      this.multi[0].series.push(serie);

      this.multi = [...this.multi];
    }, 1000);
  }

  ngOnDestroy(){
  }

  logout(){

  }

  onSelect(data : any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}


// multi: any = [
//   {
//     "name": "Germany",
//     "series": [
//       {
//         "name": "1990",
//         "value": 62000000
//       },
//       {
//         "name": "2010",
//         "value": 73000000
//       },
//       {
//         "name": "2011",
//         "value": 89400000
//       }
//     ]
//   },

//   {
//     "name": "USA",
//     "series": [
//       {
//         "name": "1990",
//         "value": 250000000
//       },
//       {
//         "name": "2010",
//         "value": 309000000
//       },
//       {
//         "name": "2011",
//         "value": 311000000
//       }
//     ]
//   },

//   {
//     "name": "France",
//     "series": [
//       {
//         "name": "1990",
//         "value": 58000000
//       },
//       {
//         "name": "2010",
//         "value": 50000020
//       },
//       {
//         "name": "2011",
//         "value": 58000000
//       }
//     ]
//   },
//   {
//     "name": "UK",
//     "series": [
//       {
//         "name": "1990",
//         "value": 57000000
//       },
//       {
//         "name": "2008",
//         "value": 62000000
//       }
//     ]
//   }
// ];