import { TestBed } from '@angular/core/testing';

import { BulletinHttpService } from './bulletin-http.service';

describe('BulletinHttpService', () => {
  let service: BulletinHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
