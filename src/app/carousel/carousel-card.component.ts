import { Component, Input } from "@angular/core";

@Component(
    {
        selector: "carousel-card",
        templateUrl:"carousel-card.component.html"
    }
)
export class CarouselCardComponent{
    @Input()
    title! :string;
    @Input()
    author! :string;
    @Input()
    imagePath! :string;

}