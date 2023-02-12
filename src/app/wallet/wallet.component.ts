import { Component, Inject, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { HttpUtils, MethodType } from '../utils/HttpUtils';
import { WebSocketService } from '../websocket/websocket.service';
import {MatDialog} from '@angular/material/dialog';
import { WalletOverviewComponent } from '../wallet-overview/wallet-overview.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent extends BaseComponent implements OnInit {
  public balanceInfo : any = { btcBalance: 0.00000000, balances: [] };

  constructor(private httpUtils : HttpUtils, public dialog: MatDialog) {
    super();
   }

  ngOnInit() {
    this.getWalletInfo();
  }

  getWalletInfo(){
    this.httpUtils.get("http://localhost:3000/wallet/balance").then(res => {
      this.balanceInfo = res;
      console.log(this.balanceInfo)
    }).catch(error => {
      console.log(error);
    });
  }

  getDetails() {
    const dialogRef = this.dialog.open(WalletOverviewComponent, {data: this.balanceInfo});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}