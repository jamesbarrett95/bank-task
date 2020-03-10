import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-region-countries-selector',
  templateUrl: './region-countries-selector.component.html',
  styleUrls: ['./region-countries-selector.component.scss']
})
export class RegionCountriesSelectorComponent implements OnInit {

  public euCountryData: Country[];
  public asiaCountryData: Country[];

  public displayAsia = false;
  public displayEu = false;

  @Output() countryToViewEmitter = new EventEmitter<Country>();

  constructor(public countriesService: CountriesService) { }

  ngOnInit() {
  }

  public handleDropdownChange(selectedRegion: string): void {
    const region = selectedRegion.toLowerCase();

    // Prevent successive API calls
    if (region == 'europe' && this.euCountryData) {
      this.displayAsia = false;
      this.displayEu = true;
      return;
    }
    if (region == 'asia' && this.asiaCountryData) {
      this.displayEu = false;
      this.displayAsia = true;
      return;
    };
    region == 'europe' ? this.getEuropeCountries() : this.getAsiaCountries();
  }

  public getAsiaCountries(): void {
    this.countriesService.getAsiaCoutries().subscribe(asiaCountryData => {
      this.asiaCountryData = asiaCountryData;
      this.displayAsia = true;
      this.displayEu = false;
    })
  }

  public getEuropeCountries(): void {
    this.countriesService.getEuropeCoutries().subscribe(euCountryData => {
      this.euCountryData = euCountryData;
      this.displayEu = true;
      this.displayAsia = false;
    })
  }

  public getAsiaCountryData(selectedCountry: string): void {
    const countryToView = this.asiaCountryData.find(country => country.name == selectedCountry);
    this.countryToViewEmitter.emit(countryToView);
  }

  public getEuropeCountryData(selectedCountry: string): void {
    const countryToView = this.euCountryData.find(country => country.name == selectedCountry);
    this.countryToViewEmitter.emit(countryToView);
  }

}
