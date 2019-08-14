import { TestBed } from '@angular/core/testing';

import { TtsSmsService } from './tts-sms.service';

describe('TtsSmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TtsSmsService = TestBed.get(TtsSmsService);
    expect(service).toBeTruthy();
  });
});
