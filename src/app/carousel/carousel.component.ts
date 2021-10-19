import {Component, Injectable, OnInit} from "@angular/core";
import { Carousel } from "./carousel.model";
import { CarouselService } from "./carousel.service";

@Component({
    selector:"audible-user-info",
    templateUrl: "user-info.component.html"
})
export class CarouselComponent implements OnInit {
    myInfo: Carousel | undefined;
    constructor(private CarouselService:CarouselService){
   }
   ngOnInit(): void{
       console.log("Registering showUserInfo as a subscriber");
       this.showUserInfo();
   }
 
   showUserInfo(){
       this.CarouselService.getUserInfo().subscribe((data: Carousel) => {
           console.log(data);
           this.myInfo = data;
       })
   }
}