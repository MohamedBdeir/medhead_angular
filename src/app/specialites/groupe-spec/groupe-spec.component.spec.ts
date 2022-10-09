import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeSpecComponent } from './groupe-spec.component';

describe('GroupeSpecComponent', () => {
  let component: GroupeSpecComponent;
  let fixture: ComponentFixture<GroupeSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupeSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
