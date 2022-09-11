import { TestBed } from '@angular/core/testing';

import { JWTHandlerService } from './jwthandler.service';

describe('JWTHandlerService', () => {
  let service: JWTHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
