import { TestBed } from '@angular/core/testing';

import { ScoresConsumerService } from './scores-consumer.service';

describe('ScoresConsumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoresConsumerService = TestBed.get(ScoresConsumerService);
    expect(service).toBeTruthy();
  });
});
