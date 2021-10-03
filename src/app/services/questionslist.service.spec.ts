import { TestBed } from '@angular/core/testing';

import { QuestionslistService } from './questionslist.service';

describe('QuestionslistService', () => {
  let service: QuestionslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
