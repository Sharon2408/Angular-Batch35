import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Services/cart.service';
import { Cartitem } from 'src/Models/cartitem';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coursecartitem',
  templateUrl: './coursecartitem.component.html',
  styleUrls: ['./coursecartitem.component.css']
})
export class CoursecartitemComponent implements OnInit {

  //constructor injection
  constructor(private cartSvc: CartService, private router:Router) { }
  //Cart List
  carts:Cartitem={
    id:0,
    name:'',
    description:'',
    fees:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }

  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.fees * item.quantity), intialValue);
    return a;
  }
  cart: Cartitem[] = [];

  delete(deleteItem: Cartitem) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.name)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['course'])
  }
  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }
}
