import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products!:any[];
  productscategories!:any[];
  loading:boolean = false;
  cartProducts:any[]=[]
constructor(private serviceProduct:ProductsService){}
  ngOnInit(): void {
    this.getProducts()
    this.getProductscategories()
  }
getProducts(){
  this.loading=true;
  this.serviceProduct.getAllProducts().subscribe({next:(res:any)=>{
    this.products=res
    this.loading=false;

  },error:(er)=>{
    alert(er.massege);
    this.loading=false;

  }})
}

getProductscategories(){
  this.serviceProduct.getAllCategories().subscribe({next:(res:any)=>{
    this.productscategories = res
  },error:(er)=>{
    alert(er.massege);
  }})
}
filterCategory(value:any)
{
  let data = value.target.value;
  (data == "All")?this.getProducts():this.getAllProductsByCategory(data)
  
}
getAllProductsByCategory(value:any){
  this.loading=true;
this.serviceProduct.getProductsByCategory(value).subscribe({next:(res:any)=>{
    this.products=res
    this.loading=false;

  },error:(er)=>{
    alert(er.massege);
    this.loading=false;

  }})

}

trackByFun (index:number,item:any){
  return item.id
}

addToCart(event:any){
  if("cart" in localStorage){
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProducts.find(item => item.id == event.id)
    if(exist){
      alert("the product already in your cart")
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
    
  }else{
    this.cartProducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

}
}
