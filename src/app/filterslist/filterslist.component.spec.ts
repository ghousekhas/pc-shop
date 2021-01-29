import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterslistComponent } from './filterslist.component';

describe('FilterslistComponent', () => {
  let component: FilterslistComponent;
  let fixture: ComponentFixture<FilterslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
