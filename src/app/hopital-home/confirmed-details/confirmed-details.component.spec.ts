import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedDetailsComponent } from './confirmed-details.component';

describe('ConfirmedDetailsComponent', () => {
  let component: ConfirmedDetailsComponent;
  let fixture: ComponentFixture<ConfirmedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
