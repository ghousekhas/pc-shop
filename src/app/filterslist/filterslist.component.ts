import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as noUiSlider from 'nouislider';
@Component({
  selector: 'app-filterslist',
  templateUrl: './filterslist.component.html',
  styleUrls: ['./filterslist.component.scss']
})
export class FilterslistComponent implements OnInit {

  @ViewChild('slider') slider!: ElementRef;
  public filtersList: boolean = true;
  public filtersBar: boolean = true;
  public filterHeadText: string = "Coff";
  public list = [1,2,3];


  constructor() { }

  ngOnInit(): void {
    noUiSlider.create(this.slider.nativeElement,{
      start: [20,80],
      connect: true,
      range: {
        max: 100,
        min: 0
      }
    });


  }

}
