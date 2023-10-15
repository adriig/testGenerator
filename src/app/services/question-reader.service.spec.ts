import { TestBed } from '@angular/core/testing';

import { QuestionReaderService } from './question-reader.service';

describe('QuestionReaderService', () => {
  let service: QuestionReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
