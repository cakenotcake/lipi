import { Injectable } from '@angular/core';
import { ApiConnectorService } from './api-connector.service';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private readonly ENDPOINT = 'manga';

  constructor(private connector: ApiConnectorService) { }

  async fetchManga(title: string) {
    let queryParams: Map<string, string | string[]> = new Map();
    queryParams.set('title', title);
    let x = await this.connector.get(this.ENDPOINT, queryParams);
    console.log(x);
  }
}
