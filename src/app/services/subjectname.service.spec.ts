import { TestBed } from '@angular/core/testing';

import { SubjectnameService } from './subjectname.service';

describe('SubjectnameService', () => {
  let service: SubjectnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
