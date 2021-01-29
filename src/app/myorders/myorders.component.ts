import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import Axios from 'axios';
import jsontoformdata from '@ajoelp/json-to-formdata';
import { config } from 'src/config';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {
  public itemDetails: any;
  public items: any;
  public isAdmin: boolean;

  constructor(public authService: AuthService) {
    this.isAdmin = this.authService.user.admin;
    this.itemDetails = [];
   }

  async loadProducts(){
    try{
      var res = await Axios.post(config.base_url+'orders/placeorder?',jsontoformdata({
        action: this.isAdmin ? 'getAllOrders': 'getOrders',
        user_id: this.authService.user.id

      }));
      console.log(res.data);
      var data = res.data.response;
      console.log(data.length);
      this.items = data;
      for(var prop in data[0]){
        this.itemDetails.push(prop);
      }
      console.log(this.items);
      console.log(this.itemDetails);

    }
    catch(error){
      console.log(error);

    }
  }

  ngOnInit(): void {
    this.loadProducts();
  }

}
