import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Giaotiep } from '../model/giaotiep';
import { Love } from '../model/love';

@Injectable({ providedIn: 'root' })
export class SavelLove{
    private url: string ="http://localhost:3000";
    constructor(private http: HttpClient) { }
    getAll() {
        return this.http.get<Love[]>(this.url+'/love');
    }

    getById(STT: string) {
        return this.http.get<Giaotiep[]>(this.url+'/love?STT=' + STT);
    }
    getID(STT: string){
       
    }

    add(love: Giaotiep) {
     
        return this.http.post(this.url+'/love', love);
    }


    delete(id: number) {
        return this.http.delete(this.url+'/love/' + id);
    }
}