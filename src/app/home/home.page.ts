import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  option = {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 1,
  };

  constructor() {}

}
