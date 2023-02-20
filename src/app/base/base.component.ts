import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import translate from "../../translate.json";
import { LanguageTypes } from '../enum/EnumUtils';

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
    if (environment.language == LanguageTypes.PT){
      return translate.PT;
    }

    if (environment.language == LanguageTypes.EN){
      return translate.EN;
    }

    return translate.PT;
  }

}
