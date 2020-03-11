import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCountriesSelectorComponent } from './region-countries-selector.component';
import { HttpClientModule } from '@angular/common/http';

describe('RegionCountriesSelectorComponent', () => {
  let component: RegionCountriesSelectorComponent;
  let fixture: ComponentFixture<RegionCountriesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ RegionCountriesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCountriesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
