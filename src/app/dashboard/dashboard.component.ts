import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent extends BaseComponent implements OnInit {
  public pieChart     : any = {};
  public candleChart  : any = {};
  public lineChart    : any = {};
  public barChart     : any = {};
  public areaChart    : any = {};
  public columnChart  : any = {};
  public heatmapChart : any = {};

  public time = 1538884800000;
  public count = 0;

  constructor(private websocket : WebSocketService){
    super();

    this.pieChart.series        = [55, 55, 13, 43, 22, 88, 99];
    this.pieChart.dataLabel     = ["Team A - 55", "Team B - 55", "Team C - 13", "Team D - 43", "Team E - 22", "Team E - 88", "Team F"];
    this.pieChart.width         = "450px";
    this.pieChart.height        = 302;
    this.pieChart.showDataLabel = false;
    this.pieChart.gradient      = true;
    this.pieChart.title         = "Moedas que estão valendo a pena";

    this.candleChart.series = this.getCandleChartSeries()
    this.candleChart.width      = "100%";
    this.candleChart.height     = 302;
    this.candleChart.titleText  = "BTC | BRL";
    this.candleChart.titleAlign = "left";

    this.lineChart.series     = [10, 41, 35, 51, 49, 62, 69, 91, 148];
    this.lineChart.height     = 302;
    this.lineChart.titleText  = "Product Trends by Month";
    this.lineChart.titleAlign = "left";
    this.lineChart.categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
    this.lineChart.dataLabel  = false;
    this.lineChart.curve      = "smooth";

    this.barChart.series     = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380];
    this.barChart.categories = ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"];
    this.barChart.width      = "450px";
    this.barChart.height     = 302;
    this.barChart.horizontal = false;
    this.barChart.dataLabel  = true;
    this.barChart.yreversed  = false;
    this.barChart.titleText  = "Mais valorizado"

    this.areaChart.series        = this.getAreaChartSeries();
    this.areaChart.height        = 302;
    this.areaChart.dataLabel     = false;
    this.areaChart.curve         = "smooth";
    this.areaChart.titleText     = "Fundamental Analysis of Stocks";
    this.areaChart.titleAlign    = "center";
    this.areaChart.subtitleText  = "Price Movements";
    this.areaChart.subtitleAlign = "left";

    this.columnChart.series = [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ];
    this.columnChart.height      = 302;
    this.columnChart.dataLabel   = false;
    this.columnChart.horizontal  = false;
    this.columnChart.categories  = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
    this.columnChart.yTitle      = "$ (thousands)";
    this.columnChart.opacity     = 1;
    this.columnChart.columnWidth = "80%";
    this.columnChart.titleText   = "Fundamental Analysis of Stocks";
    this.columnChart.titleAlign  = "center";
    
  }

  private getCandleChartSeries(){
    return [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      },
      {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
      },
      {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
      },
      {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
      },
      {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
      },
      {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      },
      {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
      },
      {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      },
      {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
      },
      {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
      }
    ]
  }

  private getAreaChartSeries(){
    return {
      monthDataSeries1: {
        prices: [
          8107.85,
          8128.0,
          8122.9,
          8165.5,
          8340.7,
          8423.7,
          8423.5,
          8514.3,
          8481.85,
          8487.7,
          8506.9,
          8626.2,
          8668.95,
          8602.3,
          8607.55,
          8512.9,
          8496.25,
          8600.65,
          8881.1,
          9340.85
        ],
        dates: [
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017",
          "29 Nov 2017",
          "30 Nov 2017",
          "01 Dec 2017",
          "04 Dec 2017",
          "05 Dec 2017",
          "06 Dec 2017",
          "07 Dec 2017",
          "08 Dec 2017"
        ]
      },
      monthDataSeries2: {
        prices: [
          8423.7,
          8423.5,
          8514.3,
          8481.85,
          8487.7,
          8506.9,
          8626.2,
          8668.95,
          8602.3,
          8607.55,
          8512.9,
          8496.25,
          8600.65,
          8881.1,
          9040.85,
          8340.7,
          8165.5,
          8122.9,
          8107.85,
          8128.0
        ],
        dates: [
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017",
          "29 Nov 2017",
          "30 Nov 2017",
          "01 Dec 2017",
          "04 Dec 2017",
          "05 Dec 2017",
          "06 Dec 2017",
          "07 Dec 2017",
          "08 Dec 2017"
        ]
      },
      monthDataSeries3: {
        prices: [
          7114.25,
          7126.6,
          7116.95,
          7203.7,
          7233.75,
          7451.0,
          7381.15,
          7348.95,
          7347.75,
          7311.25,
          7266.4,
          7253.25,
          7215.45,
          7266.35,
          7315.25,
          7237.2,
          7191.4,
          7238.95,
          7222.6,
          7217.9,
          7359.3,
          7371.55,
          7371.15,
          7469.2,
          7429.25,
          7434.65,
          7451.1,
          7475.25,
          7566.25,
          7556.8,
          7525.55,
          7555.45,
          7560.9,
          7490.7,
          7527.6,
          7551.9,
          7514.85,
          7577.95,
          7592.3,
          7621.95,
          7707.95,
          7859.1,
          7815.7,
          7739.0,
          7778.7,
          7839.45,
          7756.45,
          7669.2,
          7580.45,
          7452.85,
          7617.25,
          7701.6,
          7606.8,
          7620.05,
          7513.85,
          7498.45,
          7575.45,
          7601.95,
          7589.1,
          7525.85,
          7569.5,
          7702.5,
          7812.7,
          7803.75,
          7816.3,
          7851.15,
          7912.2,
          7972.8,
          8145.0,
          8161.1,
          8121.05,
          8071.25,
          8088.2,
          8154.45,
          8148.3,
          8122.05,
          8132.65,
          8074.55,
          7952.8,
          7885.55,
          7733.9,
          7897.15,
          7973.15,
          7888.5,
          7842.8,
          7838.4,
          7909.85,
          7892.75,
          7897.75,
          7820.05,
          7904.4,
          7872.2,
          7847.5,
          7849.55,
          7789.6,
          7736.35,
          7819.4,
          7875.35,
          7871.8,
          8076.5,
          8114.8,
          8193.55,
          8217.1,
          8235.05,
          8215.3,
          8216.4,
          8301.55,
          8235.25,
          8229.75,
          8201.95,
          8164.95,
          8107.85,
          8128.0,
          8122.9,
          8165.5,
          8340.7,
          8423.7,
          8423.5,
          8514.3,
          8481.85,
          8487.7,
          8506.9,
          8626.2
        ],
        dates: [
          "02 Jun 2017",
          "05 Jun 2017",
          "06 Jun 2017",
          "07 Jun 2017",
          "08 Jun 2017",
          "09 Jun 2017",
          "12 Jun 2017",
          "13 Jun 2017",
          "14 Jun 2017",
          "15 Jun 2017",
          "16 Jun 2017",
          "19 Jun 2017",
          "20 Jun 2017",
          "21 Jun 2017",
          "22 Jun 2017",
          "23 Jun 2017",
          "27 Jun 2017",
          "28 Jun 2017",
          "29 Jun 2017",
          "30 Jun 2017",
          "03 Jul 2017",
          "04 Jul 2017",
          "05 Jul 2017",
          "06 Jul 2017",
          "07 Jul 2017",
          "10 Jul 2017",
          "11 Jul 2017",
          "12 Jul 2017",
          "13 Jul 2017",
          "14 Jul 2017",
          "17 Jul 2017",
          "18 Jul 2017",
          "19 Jul 2017",
          "20 Jul 2017",
          "21 Jul 2017",
          "24 Jul 2017",
          "25 Jul 2017",
          "26 Jul 2017",
          "27 Jul 2017",
          "28 Jul 2017",
          "31 Jul 2017",
          "01 Aug 2017",
          "02 Aug 2017",
          "03 Aug 2017",
          "04 Aug 2017",
          "07 Aug 2017",
          "08 Aug 2017",
          "09 Aug 2017",
          "10 Aug 2017",
          "11 Aug 2017",
          "14 Aug 2017",
          "16 Aug 2017",
          "17 Aug 2017",
          "18 Aug 2017",
          "21 Aug 2017",
          "22 Aug 2017",
          "23 Aug 2017",
          "24 Aug 2017",
          "28 Aug 2017",
          "29 Aug 2017",
          "30 Aug 2017",
          "31 Aug 2017",
          "01 Sep 2017",
          "04 Sep 2017",
          "05 Sep 2017",
          "06 Sep 2017",
          "07 Sep 2017",
          "08 Sep 2017",
          "11 Sep 2017",
          "12 Sep 2017",
          "13 Sep 2017",
          "14 Sep 2017",
          "15 Sep 2017",
          "18 Sep 2017",
          "19 Sep 2017",
          "20 Sep 2017",
          "21 Sep 2017",
          "22 Sep 2017",
          "25 Sep 2017",
          "26 Sep 2017",
          "27 Sep 2017",
          "28 Sep 2017",
          "29 Sep 2017",
          "03 Oct 2017",
          "04 Oct 2017",
          "05 Oct 2017",
          "06 Oct 2017",
          "09 Oct 2017",
          "10 Oct 2017",
          "11 Oct 2017",
          "12 Oct 2017",
          "13 Oct 2017",
          "16 Oct 2017",
          "17 Oct 2017",
          "18 Oct 2017",
          "19 Oct 2017",
          "23 Oct 2017",
          "24 Oct 2017",
          "25 Oct 2017",
          "26 Oct 2017",
          "27 Oct 2017",
          "30 Oct 2017",
          "31 Oct 2017",
          "01 Nov 2017",
          "02 Nov 2017",
          "03 Nov 2017",
          "06 Nov 2017",
          "07 Nov 2017",
          "08 Nov 2017",
          "09 Nov 2017",
          "10 Nov 2017",
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017"
        ]
      }
    };
    
  }

  addData(){
    this.count = this.count + 10;
    this.time = this.time + 1800000;

    let candle = {
      x: new Date(this.time),
      y: [6608 + this.count, 6606 + this.count, 6604 + this.count, 6606 + this.count]
    }

    this.candleChart.series.push(candle);
  }

  async ngOnInit() {
    // this.websocket.send({ WebsocketType: "MARKET_REAL_TIME" });

    // let time = 1538884800000;

    // // await this.setTeste()

    // for (let i = 0; i < 500; i++) {
    //   time = time + 1800000;

    //   let candle = {
    //     x: new Date(time),
    //     y: [6608 + i, 6606 + i, 6604 + i, 6606 + i]
    //   }

    //   this.candleChart.series.push(candle);
    //   this.candleChart.series = [...this.candleChart.series];
      
    // }

    // setInterval(() => {
    //   time = time + 1800000;

    //   let candle = {
    //     x: new Date(time),
    //     y: [6608.98, 6606, 6604.07, 6606]
    //   }

    //   this.candleChart.series.push(candle);
    //   this.candleChart.series = [...this.candleChart.series];

    // }, 1000);






    // EventEmitterService.get("MARKET_REAL_TIME").subscribe((data) => {
      
    //   data = JSON.parse(data);

    //   let candleData = {
    //     x: new Date(data.startTime),
    //     y: [parseInt(data.open), parseInt(data.high), parseInt(data.low), parseInt(data.close)]
    //   };

    //   this.candleChart.series.push(candleData);
    //   this.candleChart.series = [...this.candleChart.series];

    //   this.cdr.detectChanges();
    // });
  }

}