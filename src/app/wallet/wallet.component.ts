import { Component, OnInit } from '@angular/core';
import { HttpUtils, MethodType } from '../utils/HttpUtils';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private httpUtils : HttpUtils, private webSocketService : WebSocketService) { }

  ngOnInit(): void {
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
