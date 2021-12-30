import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  atributoLegal = "valor Qualquer";

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  fazerAlgo(): void {
    console.log("fazendo algo");
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe((e) => {
      console.log(e);
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
