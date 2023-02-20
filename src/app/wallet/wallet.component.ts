import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { HttpUtils, MethodType } from '../utils/HttpUtils';
import { WebSocketService } from '../websocket/websocket.service';
import {MatDialog} from '@angular/material/dialog';
import { WalletOverviewComponent } from '../wallet-overview/wallet-overview.component';
import { environment } from 'src/environments/environment';
import { CurrencyTypes, LanguageTypes } from "src/app/enum/EnumUtils";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent extends BaseComponent implements OnInit {
  @ViewChild("chart", {static: false}) chart: any;

  public balanceInfo : any = { btcBalance: 0.00000000, balances: [] };
  public chartOptions: any = this.initPieChartObject();

  constructor(private httpUtils : HttpUtils, public dialog: MatDialog) {
    super();
   }

  ngOnInit() {
    this.getWalletInfo();
  }

  getWalletInfo(){
    this.httpUtils.get("http://localhost:3000/wallet/balance").then(res => {
      this.balanceInfo = res;

      for (const item of this.balanceInfo.balances){
        if (parseFloat(item.btcValuation) == 0) continue;
        if (item.asset == "BRL") continue;

        this.chartOptions.series.push(parseFloat(item.btcValuation));
        this.chartOptions.labels.push(item.asset);
      }

      this.chart.updateOptions(this.chartOptions);
    }).catch(error => {
      console.log(error);
    });
  }

  initPieChartObject(){
    return {
      series: [],
      title: {
        text: "Cryptocurrency balance"
      },
      chart: {
        type: "pie"
      },
      dataLabels: {
        enabled: true
      },
      labels: [],
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

  getDetails() {
    const dialogRef = this.dialog.open(WalletOverviewComponent, {data: this.balanceInfo});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}