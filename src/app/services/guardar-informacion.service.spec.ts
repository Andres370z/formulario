import { TestBed } from '@angular/core/testing';

import { GuardarInformacionService } from './guardar-informacion.service';

describe('GuardarInformacionService', () => {
  let service: GuardarInformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarInformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
