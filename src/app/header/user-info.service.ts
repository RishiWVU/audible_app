import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService{
    private baseUrl:string = 'https://audible-app-8bd6d-default-rtdb.firebaseio.com';
    private myInfoEndpoints:string = 'my-info.json';
    constructor(private http: HttpClient){
        
    }

    getUserInfo(){
        return this.http.get<UserInfo>(this.baseUrl + this. myInfoEndpoints);
    }
}