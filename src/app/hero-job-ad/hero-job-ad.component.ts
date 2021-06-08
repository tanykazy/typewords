import { Component, Input, OnInit } from '@angular/core';

import { Words } from '../interface/words';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.css']
})
export class HeroJobAdComponent implements OnInit, Words {
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
