import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe], //اضافه کن
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  nameInput: string = '';
  dateInput: string = '';
  currencyInput: string = '';

  onNameChange(event: Event) {
    const Input = event.target as HTMLInputElement;
    this.nameInput = Input.value;
  }

  onDateChange(event: Event) {
    const Input = event.target as HTMLInputElement;
    this.dateInput = Input.value;
  }

  onCurrencyChange(event:Event){
    const Input = event.target as HTMLInputElement;
    this.currencyInput = Input.value;
  }
}
