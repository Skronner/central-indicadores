import { TestBed } from '@angular/core/testing';

import { CartaControleService } from './carta-controle.service';

describe('CartaControleService', () => {
  let service: CartaControleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartaControleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
