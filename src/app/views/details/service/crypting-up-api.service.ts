import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AssetsModel} from "../model/assets-model";
import {SpecificAssetsModel} from "../model/specific-assets-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CryptingUpApiService {

  urlApi = "https://www.cryptingup.com/api/assets"

  constructor(
    private http: HttpClient
  ) { }

  async getNumberAllAssets(): Promise<AssetsModel | undefined>{
    let params = new HttpParams();

    try {
      return await this.http.get<AssetsModel>(this.urlApi).toPromise();
    }
    catch (error){
      throw error
    }
  }

   async getAllAssets(size: number,start: number): Promise<AssetsModel | undefined>{
    try {
      return await this.http.get<AssetsModel>(this.urlApi, { "params": {
        size: size,
        start: start,
        }}).toPromise();
    }
    catch (error){
     throw error
    }
  }

  async getSpecificAsset(assetId: string): Promise<SpecificAssetsModel | undefined>{
    try {
      return await this.http.get<SpecificAssetsModel>(this.urlApi + '/' + assetId ).toPromise()
    }
    catch (error){
      throw error
    }
  }
}
