import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel } from "./carousel.model";

@Injectable({providedIn: 'root'})
export class CarouselService{
    private baseUrl:string = 'https://audible-app-8bd6d-default-rtdb.firebaseio.com';
    private CarouselEndpoints:string = 'carousel.json';
    constructor(private http: HttpClient){
        
    }

    getCarouselInfo(){
        console.log(this.baseUrl + this. CarouselEndpoints);
        return this.http.get<Carousel>(this.baseUrl + this. CarouselEndpoints);
    }

    modifyCarouselInfo(data:Carousel){
        return this.http.put(this.baseUrl + this. CarouselEndpoints, data);
    }
}