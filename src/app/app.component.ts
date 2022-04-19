import { Component, VERSION } from '@angular/core';
interface TestData {
  id: number;
  name: string;
  code_num: string;
  category: string;
  price: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // public shoeShowName: string = 'shoes';
  public value: string = 'null';

  // public showShoesName(): void {
  //   this.shoeShowName;
  //   console.log(this.shoeShowName);
  // }

  public toggleAll(): void {
    console.log('value:' + this.value);
    // if (this.value === 'shoes') {
    //   this.showShoesName();
    // }
  }
  products: TestData[] = [
    { id: 1, name: 'adidas', code_num: 'S111', category: 'shoes', price: 5000 },
    { id: 2, name: 'nike', code_num: 'S123', category: 'shoes', price: 4000 },
    { id: 3, name: 'Lee', code_num: 'T144', category: 'clothes', price: 7000 },
    {
      id: 4,
      name: 'rayban',
      code_num: 'G124',
      category: 'sunglass',
      price: 20000,
    },
    {
      id: 5,
      name: 'police',
      code_num: 'G222',
      category: 'sunglass',
      price: 5000,
    },
  ];
}
