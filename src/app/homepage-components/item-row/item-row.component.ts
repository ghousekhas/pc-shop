import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PcBuilderService } from 'src/app/services/pc-builder.service';
import { config } from 'src/config';

@Component({
  selector: 'tr[app-item-row]',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent implements OnInit {

  @Input() public item: any;
  @Input() public index: any;
  public image_base: string;
  public selected?: boolean;


  constructor(public auth: AuthService,private router: Router,private activatedRoute: ActivatedRoute,public orderService: PcBuilderService) { 
    // console.log(this.item);
    // console.log(this.index);
    this.image_base = config.base_url+'productimages/';
    
    
 
  }

  removeProduct(){
    this.orderService.components[this.index].selected = false;
    this.selected = false;
    this.orderService.components[this.index].item = null;
  }

  selectItem() {
    console.log('navigatoin');
    this.router.navigate(['product-selection',{item: this.item.name, index: this.index}],{skipLocationChange: true})
  }

  doSomething(){
    this.selected = !this.selected;
    console.log(this.auth.user);
  }

  ngOnInit(): void {
    console.log(this.index);
    console.log(this.item);
    this.selected = this.item.selected;
    if( this.item.name === 'bleh')
      this.selected = true;
  }

}
