import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaSearchComponent } from './clima-search/clima-search.component';
import { ClimaCardComponent } from './clima-card/clima-card.component';
import { FormsModule } from '@angular/forms';
import { ToCelciusPipe } from './to-celcius.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClimaSearchComponent,
    ClimaCardComponent,
    ToCelciusPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
