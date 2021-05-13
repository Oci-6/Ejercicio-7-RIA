import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../_models/hospital'

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor() { }

  hospitales: Hospital[] = [{id: 1, nombre: "Clinicas"},{id: 2, nombre: "Maciel"},{id: 3, nombre: "Pasteur"},{id: 4, nombre: "Pereira Rosell"},{id: 5, nombre: "Americano"}];

 
  public getAll(): Observable<Hospital[]> {
    const result = new Observable<Hospital[]>(observer => {
      setTimeout(() => {
        observer.next(this.hospitales);
      }, 1000);
    });
    return result;
  }

  public addHospital(x: Hospital): Observable<Hospital>{
    const result= new Observable<Hospital>(observer => {
      setTimeout(()=>{
        this.hospitales.push(x);
        observer.next(x);
      }, 1000);
    });
    return result;
  }
}
