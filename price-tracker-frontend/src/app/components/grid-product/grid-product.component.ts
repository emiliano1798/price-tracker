import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {  

  constructor() { }

  @Input('products')
  data!:any;  

  ngOnInit(): void {   
  }

 

}
