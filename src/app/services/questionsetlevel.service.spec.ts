import { TestBed } from '@angular/core/testing';

import { QuestionsetlevelService } from './questionsetlevel.service';

describe('QuestionsetlevelService', () => {
  let service: QuestionsetlevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsetlevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
