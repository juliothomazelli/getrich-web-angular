import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import translate from "../../translate.json";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public translate : any;

  constructor() { 
    this.translate = this.setTranslate();
  }

  ngOnInit(){
    
  }

  setTranslate(){
    if (environment.language == "portuguese"){
      return translate.portuguese;
    }

    if (environment.language == "english"){
      return translate.english;
    }

    return translate.portuguese;
  }

}
