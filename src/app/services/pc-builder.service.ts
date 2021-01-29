import { Injectable } from '@angular/core';

export interface OrderComponentItem{
   name: string,
   selected: boolean,
   item?: any
   
}


@Injectable({
  providedIn: 'root'
})
export class PcBuilderService {
  public components: Array<OrderComponentItem>;
  public selectedComponents: any;
  public total: string;

  constructor() { 
    this.total ='';
    this.components = [
      {name: 'cpu',
        selected: false
      },
      {name: 'motherboard',
        selected: false
      },
      {name: 'gpu',
      selected: false},
      {name: 'ram',
      selected: false},
      {name: 'HDD',
      selected: false},
      {name: 'SSD',
      selected: false},
      {name: 'PSU',
      selected: false},
      {name: 'Tower',
      selected: false},
      {name: 'Monitor',
        selected: false}
    ]
  }
}
