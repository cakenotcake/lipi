import { Component, OnInit } from '@angular/core';
import { MangaService } from '../service/manga.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string = ''

  constructor(private manga: MangaService) { }

  ngOnInit(): void {
  }

  search() {
    this.manga.fetchManga(this.query);
  }
}
