import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiConnectorService {

  private readonly baseUrl: string = 'https://api.mangadex.org/';

  constructor(private http: HttpClient) { }

  get(endpoint: string, params: Map<string, string | string[]>): Promise<any> {
    return this.http.get(this.baseUrl + endpoint, {
      params: this.parseParams(params)
    }).toPromise();
  }



  private parseParams(params: Map<string, string | string[]>): HttpParams {
    let toReturn = new HttpParams();
    console.log(params);

    params.forEach((value, key) => {
      if(value instanceof Array) {
        toReturn = toReturn.append(key, JSON.stringify(value));
      } else {
        toReturn = toReturn.append(key, value);
      }
    })

    return toReturn;
  }
}
