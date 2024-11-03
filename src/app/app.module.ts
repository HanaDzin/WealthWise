import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser'; //instead of FormsModule bc it contains it

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent], //define the root component of the app
})
export class AppModule {}
