import { Injectable } from "@angular/core";
import { EventEmitterService } from "../eventemitter/eventemitter.service";
import { HttpUtils } from "../utils/HttpUtils";
import { ObjectUtils } from "../utils/ObjectUtils";

export enum WebSocketMessageTypes{
  CHAT         = 'CHAT',
  NOTIFICATION = 'NOTIFICATION'
}

@Injectable()
export class WebSocketService {
  public webSocket: any = null;

  constructor(private httpUtils : HttpUtils){}

  public connect(){
    this.webSocket = new WebSocket(this.httpUtils.getWssBaseUrl());

    this.webSocket.onopen    = (evt: Event) => { this.onOpen(evt); };
    this.webSocket.onclose   = (evt: Event) => { this.onClose(evt); };
    this.webSocket.onmessage = (evt: Event) => { this.onMessage(evt); };
    this.webSocket.onerror   = (evt: Event) => { this.onError(evt); };
  }

  public close() {
    if (this.webSocket) {      
      this.webSocket.close();
    }

    this.webSocket = null;
  }

  public send(message: any) {
    this.webSocket.send(JSON.stringify(message));
  }

  private onOpen(evt : any) {
    //this.webSocket.send(JSON.stringify('message'));
  }

  private onClose(evt : any) {
    console.log(evt);
  }

  public onMessage(message : any) {
    if (ObjectUtils.isNullOrUndefined(message) || ObjectUtils.isNullOrUndefined(message.data)){
      return;
    }

    EventEmitterService.get('MARKET_REAL_TIME').emit(message.data);
  }

  private onError(evt : any) {
    this.webSocket.close();
  }
}