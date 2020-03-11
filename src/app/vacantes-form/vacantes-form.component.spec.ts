import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesFormComponent } from './vacantes-form.component';

describe('VacantesFormComponent', () => {
  let component: VacantesFormComponent;
  let fixture: ComponentFixture<VacantesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
