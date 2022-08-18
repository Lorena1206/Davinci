import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public http: HttpClient
  ) { }

  realizarCargue(data: any) {
    let Peticion = {
      data: data
    };
    return this.http.post('http://localhost:4201/cargue', Peticion, { headers: httpHeaders });

  }







}

