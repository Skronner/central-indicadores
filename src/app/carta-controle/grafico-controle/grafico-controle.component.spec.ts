import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoControleComponent } from './grafico-controle.component';

describe('GraficoControleComponent', () => {
  let component: GraficoControleComponent;
  let fixture: ComponentFixture<GraficoControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
