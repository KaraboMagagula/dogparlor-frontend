import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTaskComponent } from './staff-task.component';

describe('StaffTaskComponent', () => {
  let component: StaffTaskComponent;
  let fixture: ComponentFixture<StaffTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffTaskComponent]
    });
    fixture = TestBed.createComponent(StaffTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
