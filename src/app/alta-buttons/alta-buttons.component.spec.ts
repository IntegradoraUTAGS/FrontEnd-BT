import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaButtonsComponent } from './alta-buttons.component';

describe('AltaButtonsComponent', () => {
  let component: AltaButtonsComponent;
  let fixture: ComponentFixture<AltaButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
