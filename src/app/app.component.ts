import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage: number = 0;
  isExist: boolean = false;

  setActiveClass(index: number) {
    return index === this.currentPage ? 'active' : '';
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'blusky beach',
      url: 'assets/images/blusky beach.jpg',
    },
    {
      title: 'island beach',
      url: 'assets/images/island beach.jpg',
    },
    {
      title: 'orange beach',
      url: 'assets/images/orange beach.jpg',
    },
    {
      title: 'purple beach',
      url: 'assets/images/purple beach.jpg',
    },
    {
      title: 'beautiful beach',
      url: 'assets/images/beautiful beach.jpg',
    },
    {
      title: 'good beach',
      url: 'assets/images/good beach.jpg',
    },
    {
      title: 'hd beach',
      url: 'assets/images/hd beach.jpg',
    },
    {
      title: 'crazy beach',
      url: 'assets/images/crazy beach.jpg',
    },
    {
      title: 'boate beach',
      url: 'assets/images/boate beach.jpg',
    },
    {
      title: 'sadaf beach',
      url: 'assets/images/sadaf beach.jpg',
    },
  ];
}
