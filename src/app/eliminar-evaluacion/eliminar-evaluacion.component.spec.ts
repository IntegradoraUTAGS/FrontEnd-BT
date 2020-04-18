import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEvaluacionComponent } from './eliminar-evaluacion.component';

describe('EliminarEvaluacionComponent', () => {
  let component: EliminarEvaluacionComponent;
  let fixture: ComponentFixture<EliminarEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
