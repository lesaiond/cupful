import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories = [
    { id: 1, imgCoffee: 'link-to-img-1', title: 'Cold Coffee' },
    { id: 2, imgCoffee: 'link-to-img-2', title: 'Hot Coffee' },
    { id: 3, imgCoffee: 'link-to-img-3', title: 'Health Coffee' },
    { id: 4, imgCoffee: 'link-to-img-4', title: 'Iced Coffee' },
    { id: 5, imgCoffee: 'link-to-img-5', title: 'Espresso' },
    { id: 6, imgCoffee: 'link-to-img-6', title: 'Latte' },
    { id: 7, imgCoffee: 'link-to-img-7', title: 'Cappuccino' },
    { id: 8, imgCoffee: 'link-to-img-8', title: 'Mocha' },
  ];

  getAllCategories() {
    return this.categories;
  }
}
