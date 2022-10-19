import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable , of } from "rxjs";
import {  tap, delay } from "rxjs/operators"
import { Data } from "@angular/router";

@Injectable({
    providedIn: 'root'
})


export class DataService
{

  /*  private _loggedInUser!: boolean;

    get loggedInUser():boolean {
        return this._loggedInUser;
    }
    set loggedInUser(user: boolean) {
        this._loggedInUser = user;
    }

*/

    constructor(private _http:HttpClient) { }

    
    apiUrl = 'http://localhost:3000';
    login(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl}/login`,data);
        
    }

    apiUrl2 = 'http://localhost:3000';
    loginAdmin(data:any):Observable<any>
    {
        return this._http.post(`${this.apiUrl}/loginAdmin`,data);
        
    }

  
    
 }
 


