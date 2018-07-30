import { Component, OnInit } from '@angular/core';
import { ProductService , Product} from '../shared/product.service';
import { FormControl } from '../../../node_modules/@angular/forms';
import 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private keyword:string;
  private products:Product[];
  private imgUrl="../../assets/images/1.jpg";


  private titleFilter:FormControl=new FormControl();
  constructor(private productService:ProductService) {

   }

  ngOnInit() {
    this.products=this.productService.getProducts();

    //响应式编程
    this.titleFilter.valueChanges.subscribe(
      value=>this.keyword=value
    );
  }

  
}


