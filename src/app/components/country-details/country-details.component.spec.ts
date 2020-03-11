import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    component.countryDataToView = {name: 'test', capital: 'test', population: 9999, currencies: ['test, test'], flag: 'test'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should extract country details when the component initialises', () => {
    // component.ngOnInit();
  });

  it('should extract country details when the component changes', () => {
    // component.ngOnChanges();
  });
});
