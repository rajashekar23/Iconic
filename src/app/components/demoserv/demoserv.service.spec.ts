import { TestBed } from '@angular/core/testing';

import { DemoservService } from './demoserv.service';

describe('DemoservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoservService = TestBed.get(DemoservService);
    expect(service).toBeTruthy();
  });
});
