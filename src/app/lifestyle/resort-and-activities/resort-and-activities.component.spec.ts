import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortAndActivitiesComponent } from './resort-and-activities.component';

describe('ResortAndActivitiesComponent', () => {
  let component: ResortAndActivitiesComponent;
  let fixture: ComponentFixture<ResortAndActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortAndActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortAndActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
