import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
   public products : Array<Product>=[];
   public Keyword: string="";

  constructor(private productService:ProductService) {

  }
  ngOnInit(): void {
    this.getProduct();
  }
  public getProduct(){
      this.productService.getProduct(1,3)
          .subscribe(
              {
                  next:data=>{
                      this.products = data
                  },
                  error: err=>{
                      console.log(err);
                  }

              }
          )
      //this.products$=this.productService.getProduct();
  }



  handleCheckProduct(product: Product) {
      //this.http.patch("http://localhost:8089/products"+product.id,{checked:!product.checked});
      // ou celle du haut
      this.productService.CheckProduct(product)
          .subscribe(

          {
              next: updateProduct => {
                  product.checked = !product.checked;
              }
                  })
              }


    handleDelete(product: Product) {
      if(confirm("Etes-vous sur ?"))
      this.productService.deleteProduct(product).subscribe({
          next:data=>{
              //this.getProduct();
              this.products=this.products.filter(p=>p.id!=product.id);
          }
      })


    }

    searchProduct() {
      this.productService.searchProducts(this.Keyword).subscribe({
          next:data=>{
              this.products=data;
          },
          error:err => {
              console.log(err);
          }
      })

    }
}
