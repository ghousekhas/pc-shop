import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Axios from 'axios';
import { config } from 'src/config';
import { PcBuilderService } from '../services/pc-builder.service';
import * as qs from 'qs';

@Component({
  selector: 'app-productselection',
  templateUrl: './productselection.component.html',
  styleUrls: ['./productselection.component.scss']
})
export class ProductselectionComponent implements OnInit {


  public index: number;
  public params?: Params;
  public name?: string;
  public image_url: string;
  public selectedIndex: number; 
  public itemDetails: Array<string>;
  @ViewChild('displayDetails') displayDetails?: ElementRef;

  public items: Array<any>;

  constructor(public orderService: PcBuilderService,public router: Router,public activeRoute: ActivatedRoute
      ) {
    this.itemDetails =[];

    this.items = [{}];
    this.index = 0;
    this.selectedIndex = 0;
    this.image_url = config.base_url+'productimages/';
    // for(var i=0;i<100;i++){
    //   this.items.push(i);
    // }

   }

   goBack(){
     this.router.navigate(['/home-page'])
   }

  selectItem(){
   // this.orderService.components[this.index].name = 'product'+ this.name+ ind;
    this.orderService.components[this.index].selected = true;
    this.orderService.components[this.index].item = this.items[this.selectedIndex];

    this.router.navigate(['/home-page']);

  }

  async loadProducts(){
    try{
      var res = await Axios.get(config.base_url+'products/getproducts?'+qs.stringify({
        type: this.name
      }));
      console.log(res.data);
      var data = res.data.response1;
      console.log(data.length);
      this.items = data;
      for(var prop in data[0]){
        this.itemDetails.push(prop);
      }

    }
    catch(error){
      console.log(error);

    }
  }


  closeActive(){
    this.displayDetails?.nativeElement.classList.remove("active");
  }

  viewClicked(ind: number){
    this.selectedIndex = ind;
    this.displayDetails?.nativeElement.classList.add("active");

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
      console.log(params);
      this.params = params;
      console.log(params['index']);
      this.index = params['index'];
      this.name = params['item'];
      this.loadProducts();
    })
  }

}
