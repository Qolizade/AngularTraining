import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ CardsComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts: any[] = [
    {
      title: 'Trees',
      ImageUrl: 'assets/images/Tree.jpg',
      UserName: 'James Bound',
      Caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloribus.',
    },
    {
      title: 'Bike',
      ImageUrl: 'assets/images/Bike.jpg',
      UserName: 'John Smith',
      Caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloribus.',
    },
    {
      title: 'World',
      ImageUrl: 'assets/images/World.jpg',
      UserName: 'Christian bale',
      Caption:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloribus.',
    },
  ];
}
