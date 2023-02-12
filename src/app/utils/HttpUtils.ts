import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ObjectUtils } from "./ObjectUtils";
import binance_api from "../../binance_api.json";
import { StorageUtils, StorageUtilsTypes } from "./StorageUtils";

export enum MethodType{
  GET    = "GET",
  POST   = "POST",
  PUT    = "PUT",
  PATCH  = "PATCH",
  DELETE = "DELETE"
}

@Injectable()
export class HttpUtils {
  private isTesting : boolean = true;

  private TIMEOUT = 15000;

  constructor(private http: HttpClient){}

  public getBaseUrl() : string{
    if (this.isTesting)
      return "http://localhost:3000";

    return "AQUI VAI O LINK DE PRODUCAO";
  }

  public getWssBaseUrl() : string {
    if (this.isTesting)
      return "ws://localhost:8080/";

    return "AQUI VAI O LINK DE PRODUCAO";
  }

  private prepareHeaders(){
    let headers = new HttpHeaders();

    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Cache-Control', 'no-cache');
    headers = headers.set('Content-Type', 'application/json');
  
    // if (!ObjectUtils.isNullOrUndefined(StorageUtils.getData(StorageUtilsTypes.sessionToken))){
    //   headers = headers.set('authorization', StorageUtils.getData(StorageUtilsTypes.sessionToken));
    // }

    return headers;
  }

  public get(url: string, object: any = undefined){
    return new Promise((resolve, reject) => {
      let headers = this.prepareHeaders();

      if (object){
        url = this.makeQuerystring(url, object);
      }
  
      this.http.get(url, {headers: headers, observe: 'response'}).toPromise().then(response => {
        return resolve(response.body);
      }).catch(error => {
        return reject(error);
      });
    });
  }

  public post(url: string, object: any){
    return new Promise((resolve, reject) => {
      let body = '';

      let headers = this.prepareHeaders();
      
      if (!ObjectUtils.isNullOrUndefined(object)){
        body = JSON.stringify(object);
      }
  
      this.http.post(url, body, {headers: headers, observe: 'response'}).toPromise().then(response => {
        return resolve(response.body);
      }).catch(error => {
        return reject(error);
      });
    });
  }

  public put(url: string, object: any){
    return new Promise((resolve, reject) => {
      let body = '';

      let headers = this.prepareHeaders();
      
      if (!ObjectUtils.isNullOrUndefined(object)){
        body = JSON.stringify(object);
      }
  
      this.http.put(url, body, {headers: headers, observe: 'response'}).toPromise().then(response => {
        return resolve(response.body);
      }).catch(error => {
        return reject(error);
      });
    });
  }

  public delete(url: string, object: any){
    return new Promise((resolve, reject) => {
      let headers = this.prepareHeaders();
      
      this.http.delete(url, {headers: headers, observe: 'response'}).toPromise().then(response => {
        return resolve(response.body);
      }).catch(error => {
        return reject(error);
      });
    });
  }

  private makeQuerystring(url: string, object: any){
    url = this.getBaseUrl() + url;

    if (ObjectUtils.isNullOrUndefined(object)){
      return url;
    }

    let count = 0;
    for (const property in object){
      count += 1;

      if (count == 1){
        url += '?' + property + '=' + object[property]
        continue;
      }

      url += '&' + property + '=' + object[property];
    }

    return url;
  }
}