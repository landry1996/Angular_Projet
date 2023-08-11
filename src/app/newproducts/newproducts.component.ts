import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css']
})
export class NewproductsComponent implements OnInit{
  public productForm!: FormGroup;

  constructor(private fb:FormBuilder, private  productService:ProductService) {
  }

  ngOnInit(): void {
    this.productForm=this.fb.group({
      name: this.fb.control('',[Validators.required]),
      price: this.fb.control(0),
      checked: this.fb.control(false)
    })
  }


  saveProduct() {
  let product:Product = this.productForm.value;
  this.productService.saveProduct(product).subscribe({
    next: data => {
      alert(JSON.stringify(data))

    },
    error: err => {
      console.log(err);
    }
  });
  }
}
