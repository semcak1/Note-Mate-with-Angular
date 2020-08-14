import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLAyoutComponent } from './main-layout.component';

describe('MainLAyoutComponent', () => {
  let component: MainLAyoutComponent;
  let fixture: ComponentFixture<MainLAyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLAyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLAyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
