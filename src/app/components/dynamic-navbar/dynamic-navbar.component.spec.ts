import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNavbarComponent } from './dynamic-navbar.component';

describe('DynamicNavbarComponent', () => {
  let component: DynamicNavbarComponent;
  let fixture: ComponentFixture<DynamicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
