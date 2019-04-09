import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentyDetailsComponent } from './currenty-details.component';

describe('CurrentyDetailsComponent', () => {
  let component: CurrentyDetailsComponent;
  let fixture: ComponentFixture<CurrentyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
