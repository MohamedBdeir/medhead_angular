import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalDetailsComponent } from './hopital-details.component';

describe('HopitalDetailsComponent', () => {
  let component: HopitalDetailsComponent;
  let fixture: ComponentFixture<HopitalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopitalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
