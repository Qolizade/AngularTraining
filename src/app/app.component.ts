import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe , DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , TitleCasePipe , DatePipe], //اضافه کن
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  nameInput : string = '';
  dateInput : string = '';

  onNameChange(event: Event) {
    const Input = event.target as HTMLInputElement;
    this.nameInput = Input.value;
  }

  onDateChange(event:Event){
    const Input = event.target as HTMLInputElement;
    this.dateInput = Input.value;
  }
}
