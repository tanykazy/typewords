import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from '../hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { WordItem } from '../class/word-item';

@Injectable({
  providedIn: 'root'
})
export class RomajiService {

  constructor() {
  }

  getAds() {
    return [
      new WordItem(HeroProfileComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come'
      }),

      new WordItem(HeroProfileComponent, {
        name: 'Dr IQ',
        bio: 'Smart as they come'
      }),

      new WordItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),

      new WordItem(HeroJobAdComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today'
      }),
    ];
  }
}