import { Injectable } from "@angular/core";
import { HttpUtils } from "../utils/HttpUtils";

@Injectable()
export class OrderService {
  private controller: string = "/order";

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

  public async post(endpoint: string, object: any){
    try {
      let url = this.controller + endpoint;

      let response = await this.httpUtils.post(url, object);

      return response;
    } catch (error) {
      throw (error);
    }
  }

  public async put(endpoint: string, object: any){
    try {
      let url = this.controller + endpoint;

      let response = await this.httpUtils.put(url, object);

      return response;
    } catch (error) {
      throw (error);
    }
  }

  public async delete(endpoint: string, object: any){
    try {
      let url = this.controller + endpoint;

      let response = await this.httpUtils.delete(url, object);

      return response;
    } catch (error) {
      throw (error);
    }
  }
}