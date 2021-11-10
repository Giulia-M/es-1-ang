import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogFormSearchComponent } from './catalog-form-search.component';

describe('CatalogFormSearchComponent', () => {
  let component: CatalogFormSearchComponent;
  let fixture: ComponentFixture<CatalogFormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogFormSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
