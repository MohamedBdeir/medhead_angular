import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecToHopitalComponent } from './add-spec-to-hopital.component';

describe('AddSpecToHopitalComponent', () => {
  let component: AddSpecToHopitalComponent;
  let fixture: ComponentFixture<AddSpecToHopitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecToHopitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecToHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
