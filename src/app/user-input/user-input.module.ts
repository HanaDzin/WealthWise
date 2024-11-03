import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';

@NgModule({
  declarations: [UserInputComponent],
  imports: [FormsModule],
  exports: [UserInputComponent], //anything that should be available in modules that import this one
})
export class UserInputModule {}
