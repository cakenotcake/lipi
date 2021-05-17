import { Component, OnInit } from '@angular/core';
import { NAV } from '../common/strings';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  buttons = [
    {
      asset: 'assets/icons/today.svg',
      label: NAV.home
    },
    {
      asset: 'assets/icons/search.svg',
      label: NAV.search
    },
    {
      asset: 'assets/icons/download.svg',
      label: NAV.downloads
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
