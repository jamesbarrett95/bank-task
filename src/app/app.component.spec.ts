import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RegionCountriesSelectorComponent } from './components/region-countries-selector/region-countries-selector.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
