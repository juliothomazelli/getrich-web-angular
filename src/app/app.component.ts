import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { WebSocketService } from './websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class AppComponent extends BaseComponent{

  constructor(private router : Router, private websocket: WebSocketService){
    super();
  }
 
  dashboard(){
    this.router.navigateByUrl("/dashboard");
    this.websocket.connect();
  }

  market(){
    this.router.navigateByUrl("/market");
  }

  wallet(){
    this.router.navigateByUrl("/wallet");
  }

  report(){
    this.router.navigateByUrl("/report");
  }

  configuration(){
    this.router.navigateByUrl("/configuration");
  }

  logout(){

  }
}
