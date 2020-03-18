import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CountriesService } from 'src/app/services/countries.service';
import { GetAsiaCountries } from 'src/app/store/actions/asia.actions';
import { GetEuropeCountries } from 'src/app/store/actions/europe.actions';
import { selectEuropeanCountriesList } from 'src/app/store/selectors/europe.selectors';
import { IAppState } from 'src/app/store/state/app.state';


@Component({
  selector: 'app-region-countries-selector',
  templateUrl: './region-countries-selector.component.html',
  styleUrls: ['./region-countries-selector.component.scss']
})
export class RegionCountriesSelectorComponent implements OnInit {

  public euCountryData$ = this.store.pipe(select(selectEuropeanCountriesList));

  constructor(
    public countriesService: CountriesService,
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
  }

  public handleDropdownChange(selectedRegion: string): void {

    selectedRegion === 'Europe'
      ? this.store.dispatch(new GetEuropeCountries())
      : this.store.dispatch(new GetAsiaCountries());

    setTimeout(() => {
      console.log('DATA INSIDE COMPONENT');
      this.euCountryData$.subscribe(data => console.log(data));
    }, 5000);
  }
}
