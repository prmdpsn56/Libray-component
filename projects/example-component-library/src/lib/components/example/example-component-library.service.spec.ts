import { TestBed } from '@angular/core/testing';

import { ExampleComponentLibraryService } from './example-component-library.service';

describe('ExampleComponentLibraryService', () => {
  let service: ExampleComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
