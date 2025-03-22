import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private ProductsService:ProductsService){
 }
 products!:any[]
 ngOnInit():void{
  this.products=this.ProductsService.getallproducts()
 }

  

}
