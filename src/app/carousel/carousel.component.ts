import { Component, Input } from "@angular/core";
import { Carousel } from "./carousel.model";
import { mock_carousel } from "./mock-carousel";

@Component({
    selector: "audible-carousel",
    templateUrl:"carousel.component.html"
})
export class CarouselComponent{
    
    great_listens:Carousel[] = [];

    constructor(){
        for (var carousel of mock_carousel){
            this.great_listens.push(new Carousel(carousel));
        }
    }
}