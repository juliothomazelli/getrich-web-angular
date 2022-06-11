import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { HttpUtils, MethodType } from '../utils/HttpUtils';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent extends BaseComponent implements OnInit {
  public totalAmount : number = 0;

  constructor(private httpUtils : HttpUtils, private webSocketService : WebSocketService) {
    super();
   }

  ngOnInit() {
    
  }

  registerOnWebsocket(){
    
  }

  teste(){
    let queryString = '?symbol=ADABRL&interval=15m';

    this.httpUtils.publicRequest(MethodType.GET, 'market/candlesticket_data' + queryString).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  websocket(){
    this.webSocketService.send("Testando");
  }
}
