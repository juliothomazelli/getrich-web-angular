import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ObjectUtils } from "./ObjectUtils";
import binance_api from "../../binance_api.json";

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
      return "http://localhost:3000/";

    return "AQUI VAI O LINK DE PRODUCAO";
  }

  public getWssBaseUrl() : string {
    if (this.isTesting)
      return "ws://localhost:8080/";

    return "AQUI VAI O LINK DE PRODUCAO";
  }

  public publicRequest(method : MethodType, url : string){
    return new Promise(
      (resolve, reject) => {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Cache-Control', 'no-cache');
        headers = headers.set('Content-Type', 'application/json');

        headers = headers.set('authorization', 'getrich987');

        let sendUrl = this.getBaseUrl() + url;

        if (method == MethodType.GET){
          this.http.get(sendUrl, {headers: headers, observe: 'response'}).toPromise().then((response) => {
            if (ObjectUtils.isNullOrUndefined(response) || ObjectUtils.isNullOrUndefined(response.body)){
              return reject({Error: "Unknown error"});  
            }

            return resolve(response.body);
          }).catch((error) => {
            return reject(error);
          });
        }
      }
    );
  }
}