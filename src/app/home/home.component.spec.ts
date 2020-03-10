import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/re/re.component.spec.ts
import { REComponent } from './re.component';

describe('REComponent', () => {
  let component: REComponent;
  let fixture: ComponentFixture<REComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REComponent ]
=======
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
>>>>>>> 9cfe8d9bea822fb05c7283cf2094bbd8667580cb:src/app/home/home.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/re/re.component.spec.ts
    fixture = TestBed.createComponent(REComponent);
=======
    fixture = TestBed.createComponent(HomeComponent);
>>>>>>> 9cfe8d9bea822fb05c7283cf2094bbd8667580cb:src/app/home/home.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
