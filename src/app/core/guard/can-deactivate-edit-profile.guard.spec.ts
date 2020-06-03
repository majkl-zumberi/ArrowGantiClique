import { TestBed } from '@angular/core/testing';

import { CanDeactivateEditProfileGuard } from './can-deactivate-edit-profile.guard';

describe('CanDeactivateEditProfileGuard', () => {
  let guard: CanDeactivateEditProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateEditProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
