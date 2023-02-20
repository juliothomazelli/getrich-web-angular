import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { MarketService } from '../services/Market.service';
import { HttpUtils, MethodType } from '../utils/HttpUtils';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor(private websocket : WebSocketService, private marketService: MarketService){
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
}






// import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { BaseComponent } from '../base/base.component';
// import { EventEmitterService } from '../eventemitter/eventemitter.service';
// import { MarketService } from '../services/Market.service';
// import { HttpUtils, MethodType } from '../utils/HttpUtils';
// import { WebSocketService } from '../websocket/websocket.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })

// export class DashboardComponent extends BaseComponent implements OnInit, AfterViewInit {
//   @ViewChild("chart", {static: false}) chart: any;

//   public pieChart     : any = {};
//   public candleChart  : any = {};
//   public lineChart    : any = {};
//   public barChart     : any = {};
//   public areaChart    : any = {};
//   public columnChart  : any = {};
//   public heatmapChart : any = {};

//   public chartOptions: any;

//   public time = 1538884800000;
//   public count = 0;

//   constructor(private websocket : WebSocketService, private marketService: MarketService){
//     super();

//     this.pieChart.series        = [55, 55, 13, 43, 22, 88, 99];
//     this.pieChart.dataLabel     = ["Team A - 55", "Team B - 55", "Team C - 13", "Team D - 43", "Team E - 22", "Team E - 88", "Team F"];
//     this.pieChart.width         = "450px";
//     this.pieChart.height        = 302;
//     this.pieChart.showDataLabel = false;
//     this.pieChart.gradient      = true;
//     this.pieChart.title         = "Moedas que estão valendo a pena";

//     this.candleChart.series     = [];
//     this.candleChart.width      = "100%";
//     this.candleChart.height     = 302;
//     this.candleChart.titleText  = "BTC | BRL";
//     this.candleChart.titleAlign = "left";

//     this.lineChart.series     = [10, 41, 35, 51, 49, 62, 69, 91, 148];
//     this.lineChart.height     = 302;
//     this.lineChart.titleText  = "Product Trends by Month";
//     this.lineChart.titleAlign = "left";
//     this.lineChart.categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
//     this.lineChart.dataLabel  = false;
//     this.lineChart.curve      = "smooth";

//     this.barChart.series     = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380];
//     this.barChart.categories = ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"];
//     this.barChart.width      = "450px";
//     this.barChart.height     = 302;
//     this.barChart.horizontal = false;
//     this.barChart.dataLabel  = true;
//     this.barChart.yreversed  = false;
//     this.barChart.titleText  = "Mais valorizado"

//     this.areaChart.series        = this.getAreaChartSeries();
//     this.areaChart.height        = 302;
//     this.areaChart.dataLabel     = false;
//     this.areaChart.curve         = "smooth";
//     this.areaChart.titleText     = "Fundamental Analysis of Stocks";
//     this.areaChart.titleAlign    = "center";
//     this.areaChart.subtitleText  = "Price Movements";
//     this.areaChart.subtitleAlign = "left";

//     this.columnChart.series = [
//       {
//         name: "Net Profit",
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
//       },
//       {
//         name: "Revenue",
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
//       },
//       {
//         name: "Free Cash Flow",
//         data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
//       }
//     ];
//     this.columnChart.height      = 302;
//     this.columnChart.dataLabel   = false;
//     this.columnChart.horizontal  = false;
//     this.columnChart.categories  = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
//     this.columnChart.yTitle      = "$ (thousands)";
//     this.columnChart.opacity     = 1;
//     this.columnChart.columnWidth = "80%";
//     this.columnChart.titleText   = "Fundamental Analysis of Stocks";
//     this.columnChart.titleAlign  = "center";
    
//   }

//   async ngOnInit() {
//     this.chartOptions = {
//       series: [
//         {
//           name: "candle",
//           data: []
//         }
//       ],
//       chart: {
//         type: "candlestick",
//         width: this.candleChart.width,
//         height: this.candleChart.height
//       },
//       title: {
//         text: this.candleChart.titleText,
//         align: this.candleChart.titleAlign
//       },
//       xaxis: {
//         type: "datetime"
//       },
//       yaxis: {
//         tooltip: {
//           enabled: true
//         }
//       }
//     }

//     this.marketService.get("/candles", {symbol: "BTCBRL", interval: "1m"}).then((response : any) => {
//       let data = [];
      
//       for (let i = 0; i < response.length; i++) {
//         let candleData = {
//           x: new Date(response[i].closeTime),
//           y: [parseInt(response[i].open), parseInt(response[i].high), parseInt(response[i].low), parseInt(response[i].close)]
//         };

//         data.push(candleData);
//       }

//       this.chartOptions.series[0].data = data;
//       this.chart.updateSeries(this.chartOptions.series);
//     }).catch((error: any) => {
//       console.log(error);
//     });
//   }

//   ngAfterViewInit(): void {
//       this.websocket.send({ WebsocketType: "MARKET_REAL_TIME" });

//       EventEmitterService.get("MARKET_REAL_TIME").subscribe((data) => {
//         data = JSON.parse(data);
//         console.log(data);

//         let candleData = {
//           x: new Date(data.closeTime),
//           y: [parseInt(data.open), parseInt(data.high), parseInt(data.low), parseInt(data.close)]
//         };

//         this.chartOptions.series[0].data.push(candleData);
//         this.chart.updateSeries(this.chartOptions.series);
//       });
//   }
// }