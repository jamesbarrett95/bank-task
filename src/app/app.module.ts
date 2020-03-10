import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegionCountriesSelectorComponent } from './components/region-countries-selector/region-countries-selector.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionCountriesSelectorComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
