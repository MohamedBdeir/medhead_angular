import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalMenuComponent } from './hopital-menu.component';

describe('HopitalMenuComponent', () => {
  let component: HopitalMenuComponent;
  let fixture: ComponentFixture<HopitalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopitalMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopitalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
