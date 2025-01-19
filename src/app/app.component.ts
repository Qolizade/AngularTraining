import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string;
  includeLatters: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;
  length: number = 0;

  constructor() {
    this.password = '';
  }

  onButtonClick() {
    const numbers = '123456789';
    const letters = 'abcdefghijklmnoprstuvwxyz';
    const symbols = '!@#$%^&*()_+-';
    let validChar = '';
    if (this.includeNumber) {
      validChar += numbers;
    }
    if (this.includeLatters) {
      validChar += letters;
    }
    if (this.includeSymbol) {
      validChar += symbols;
    }
    let generatedPassword = '';
    for (let index = 0; index < this.length; index++) {
      let index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
      this.password = generatedPassword;
    }
  }

  getPassword() {
    return this.password;
  }

  onChangeLatter() {
    this.includeLatters = !this.includeLatters;
  }

  onChangeSymbol() {
    this.includeNumber = !this.includeNumber;
  }

  onChangeNumber() {
    this.includeSymbol = !this.includeSymbol;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) this.length = parsedValue;
  }
}
