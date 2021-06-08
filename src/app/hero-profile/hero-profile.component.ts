import { Component, Input, OnInit } from '@angular/core';

import { Words } from '../interface/words';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit, Words {
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
