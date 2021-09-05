import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class AppComponent extends BaseComponent{

  constructor(private router : Router){
    super();
  }
 
  dashboard(){
    this.router.navigateByUrl("/dashboard");
  }

  market(){
    this.router.navigateByUrl("/market");
  }

  wallet(){
    this.router.navigateByUrl("/wallet");
  }

  configuration(){
    this.router.navigateByUrl("/configuration");
  }

  logout(){

  }
}
