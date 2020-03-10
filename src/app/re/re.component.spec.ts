import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REComponent } from './re.component';

describe('REComponent', () => {
  let component: REComponent;
  let fixture: ComponentFixture<REComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
