import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Giaotiep } from '../model/giaotiep';

@Injectable({ providedIn: 'root' })
export class ServiceData{

   
    constructor(private http: HttpClient){}

   
    getdata(url: string){
        return this.http.get<Giaotiep[]>(url);
    }
}