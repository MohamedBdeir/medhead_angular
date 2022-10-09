import { TestBed } from '@angular/core/testing';

import { RecommandationsService } from './recommandations.service';

describe('RecommandationsService', () => {
  let service: RecommandationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommandationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
