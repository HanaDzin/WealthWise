import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  //another way of using the service:
  private investmentService = inject(InvestmentService);

  //to expose the results to the template
  get results() {
    return this.investmentService.resultsData;
  }
}
