import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PcBuilderService } from '../services/pc-builder.service';
import Axios from 'axios';
import jsontoformdata from '@ajoelp/json-to-formdata';
import { config } from 'src/config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public items: Array<any>;
  public total: string;
  public shipping: number;


  constructor(public authService: AuthService,public buildService: PcBuilderService) {
    console.log(buildService.components);
    this.shipping = 1000;
    this.total = '';
    this.items = this.buildService.components;
    
   }

  async placeOrder(){
    var productArr = [];
    for(var i =0;i< this.items.length;i++){
      if(this.items[i].item != null && this.items[i].selected == true){
        productArr.push({
          id: this.items[i].item.id,
          amount: this.items[i].item.price
        })

      }
    }
    try{
      var formdata = jsontoformdata({
        user_id: this.authService.user.id,
        amount: this.total.toString()
      });
      formdata.append('parts',JSON.stringify(productArr))
      var result = await Axios.post(config.base_url+'orders/placeorder',formdata);
      console.log(result.data);
    }
    catch(error){
      console.log(error);
    }
  }

  calculateTotal() {
    var tots = 0;
    for(var i = 0; i < this.items.length; i++){
      try{
        if(this.items[i].item != null){
          tots = tots + this.items[i].item.price;
        }
      }
      catch(error){

      }
    }
    this.total =  tots.toString();
    this.buildService.total = tots.toString();
  }

  ngOnInit(): void {
    this.calculateTotal();


  }

}
