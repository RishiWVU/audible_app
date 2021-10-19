import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel } from "./carousel.model";

@Injectable({providedIn: 'root'})
export class CarouselService{
    private baseUrl:string = 'https://audible-app-8bd6d-default-rtdb.firebaseio.com';
    private myInfoEndpoints:string = 'carousel.json';
    constructor(private http: HttpClient){
        
    }

    getUserInfo(){
        return this.http.get<Carousel>(this.baseUrl + this. myInfoEndpoints);
    }
}