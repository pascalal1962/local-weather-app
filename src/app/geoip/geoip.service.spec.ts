import { TestBed, inject } from '@angular/core/testing';

import { GeoipService } from './geoip.service';

describe('GeoipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoipService]
    });
  });

  it('should be created', inject([GeoipService], (service: GeoipService) => {
    expect(service).toBeTruthy();
  }));
});
