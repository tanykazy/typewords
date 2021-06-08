import { TestBed } from '@angular/core/testing';

import { RomajiService } from './romaji.service';

describe('RomajiService', () => {
  let service: RomajiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomajiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
