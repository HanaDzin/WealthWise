import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  //property to be turned into a custom event (when clicked on button, calculations from app component execute)
  calculate = output<InvestmentInput>();

  onSubmit() {
    //call the output property to emit the event that needs to be caught in app component
    //taking into consideration that strings need to be converted to numbers - using the + symbol

    //when working with signals, we should read them by adding ()
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

    //resetting form after submission
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('0');
    this.enteredExpectedReturn.set('0');
  }
}
