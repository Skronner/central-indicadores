import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable(/* {
  providedIn: 'any'
} */)
export class CartaControleService {
  // private responseArray = [];

  constructor(private http: HttpClient) {}

  getListaIndicadores(): Observable<any[]> {
    return this.http.get('http://localhost:3000/indicadores/teste').pipe(
      map((responseData) => {
        const responseArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            responseArray.push({ ...responseData[key], id: key });
          } else {
            console.log('It haven´t the key as property');
          }
        }
        return responseArray;
      })
    );
  }
}
