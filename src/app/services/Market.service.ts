import { Injectable } from "@angular/core";
import { HttpUtils } from "../utils/HttpUtils";

@Injectable()
export class MarketService {
  private controller: string = "/market";

  constructor(private httpUtils: HttpUtils){}

  public async get(endpoint: string, object: any){
    try {
      let url = this.controller + endpoint;

      let response = await this.httpUtils.get(url, object);

      return response;
    } catch (error) {
      throw (error);
    }
  }
}