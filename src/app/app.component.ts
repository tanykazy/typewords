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

  constructor(private romajiService: RomajiService,
    private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.ads = this.romajiService.getAds();
    // document.addEventListener('keydown', (event) => this.onKeydown(event))
    let ret = this.fetch();
    console.log(ret);
  }

  // @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log(event);
  }

  fetch() { // 追加
    return this.httpClient.get('https://yomi-tan.jp/api/yomi.php?ic=UTF-8&oc=UTF-8&k=h&n=3&t=%E6%BC%A2%E5%AD%97').subscribe(data => {
        console.log(data);
    });
  }
}
