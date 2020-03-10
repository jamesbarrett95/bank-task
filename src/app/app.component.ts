import { Component } from '@angular/core';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public countryDataToView: Country;

  public viewCountryData(country: Country): void {
    this.countryDataToView = country;
  }

}
