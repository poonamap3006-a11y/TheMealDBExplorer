import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeal } from './search-meal';

describe('SearchMeal', () => {
  let component: SearchMeal;
  let fixture: ComponentFixture<SearchMeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMeal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMeal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
