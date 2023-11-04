import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:number
  loading:boolean = false;
  products !:Product
  constructor(private activeRouter:ActivatedRoute, private http:ProductsService)
  {
    this.id = Number(activeRouter.snapshot.paramMap.get("id"))
    
  }
  ngOnInit(): void {
    this.showDataProduct()
  }
  showDataProduct(){
    this.loading=true;

    this.http.getProductById(this.id).subscribe({next:(res:any)=>{
      this.products=res
      this.loading=false;
  
    },error:(er)=>{
      alert(er.massege);
      this.loading=false;
  
    }})


  }

}
