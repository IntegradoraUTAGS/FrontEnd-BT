import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanteFormComponent } from './vacante-form.component';

describe('VacanteFormComponent', () => {
  let component: VacanteFormComponent;
  let fixture: ComponentFixture<VacanteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
