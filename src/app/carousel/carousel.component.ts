import {Component, Injectable, OnInit} from "@angular/core";
import { Carousel } from "./carousel.model";
import { CarouselService } from "./carousel.service";

@Component({
    selector:"audible-carousel",
    templateUrl: "carousel.component.html"
})
export class CarouselComponent implements OnInit {
    Carousel: Carousel | undefined;
    constructor(private CarouselService:CarouselService){
   }
   ngOnInit(): void{
       console.log("Registering showCarouselInfo as a card");
       this.showCarouselInfo();
   }
 
   showCarouselInfo(){
       this.CarouselService.getCarouselInfo().subscribe((data: Carousel) => {
           console.log(data);
           this.Carousel = data;
       })
   }
}