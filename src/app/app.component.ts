import { Component } from '@angular/core';

import { RomajiService } from './service/romaji.service';
import { WordItem } from './class/word-item';

import { HttpClient } from '@angular/common/http'; // 追加

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ads: WordItem[] = [];

  constructor(private adService: RomajiService,
    private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
    // document.addEventListener('keydown', (event) => this.onKeydown(event))
    let ret = this.fetch();
    console.log(ret);
  }

  // @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log(event);
  }

  fetch() { // 追加
    return this.httpClient.get('https://tatoeba.org/ja').subscribe(data => {
        console.log(data);
    });
  }
}
