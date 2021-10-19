import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { CarouselCardComponent } from "../carousel/carousel-card.component";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<CarouselCardComponent []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<CarouselCardComponent>('carousel').valueChanges();
    }

    public showData(){
        this.items.subscribe((data: CarouselCardComponent []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
            console.log(data);
        })
    }
}