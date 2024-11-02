import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // bindable property that is exposed from this to parent component
  // so that the parent component can pass data into this component

  //if working with signals: results = input<type>()
  // ? --> optional property (might also be undefined), ! --> always will be the defined in the declared shape

  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]; //array of such objects
}
