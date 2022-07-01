import { Component, OnInit } from '@angular/core';

export interface Product{
  id:number,
  name:string,
  price: number,
  img: string
} 


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [
    {id: 1, name: "BLb", price: 1.4, img: "https://krot.info/uploads/posts/2021-01/1610204163_5-p-krasivii-myatnii-fon-12.jpg"},
    {id: 2, name: "BLb", price: 1.4, img: "https://krot.info/uploads/posts/2021-01/1610204163_5-p-krasivii-myatnii-fon-12.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
