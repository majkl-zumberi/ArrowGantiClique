import { TestBed } from '@angular/core/testing';

import { MemeListService } from './meme-list.service';

describe('MemeListService', () => {
  let service: MemeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
