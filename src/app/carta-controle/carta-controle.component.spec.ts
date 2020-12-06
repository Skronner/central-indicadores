import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaControleComponent } from './carta-controle.component';

describe('CartaControleComponent', () => {
  let component: CartaControleComponent;
  let fixture: ComponentFixture<CartaControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
