import { TestBed } from '@angular/core/testing';

import { RemoveQuestionService } from './remove-question.service';

describe('RemoveQuestionService', () => {
  let service: RemoveQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
