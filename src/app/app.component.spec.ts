import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Country } from './models/Country';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let countryData: Country;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      countryData = {name: 'test', capital: 'test', population: 9999, currencies: ['test, test'], flag: 'test'};
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the countryDataToView variable so it can be passed to country details ', () => {
    component.viewCountryData(countryData);
    fixture.detectChanges();
    expect(component.countryDataToView).toBe(countryData);
  });

});
