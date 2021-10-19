import { Component } from "@angular/core";
import { Carousel } from "../carousel/carousel.model";
import { CarouselService } from "../carousel/carousel.service";
import { DatabaseService } from "./database.service";

@Component({
    selector: 'audible-edit-carousel',
    templateUrl: 'edit-carousel.component.html'
})

export class EditCarouselComponent{

    constructor(private infoService: CarouselService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateCarousel(data:Carousel){
        console.log("You pressed the button");
        console.log(data);
        this.infoService.modifyCarouselInfo(data).subscribe(data=>{
            console.log("Updated information sent to backend");
        });
    }
}