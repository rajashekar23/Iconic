import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoservService {
  products = [
    {
      name: 'test',
      pdid: 'kksjhdkjsdhf',
      price: 2738
    }
  ];
  getItems() {
return this.products;
  }



























  constructor() {}
}
