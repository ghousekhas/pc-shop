import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  url: any;
 

  constructor() {
    this.url = '';
   }

  onChangeEvent(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) =>{
        this.url= event.target?.result
      }


    }

  }

  ngOnInit(): void {
  }

}
