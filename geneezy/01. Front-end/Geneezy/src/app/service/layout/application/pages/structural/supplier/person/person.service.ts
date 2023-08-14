import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/domain/entity/person/person';
import { BaseUrl } from 'src/app/common/helpers/class/base-url/base-url';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getPersonsById(id: number): Observable<Person> {
    return this.http.get<Person>(`${BaseUrl.baseUrl}/person/id/${id}`).pipe(take(1));
  }

  public getPersonByIdSupplier(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${BaseUrl.baseUrl}/person/supplier/${id}`).pipe(take(1));
  }

  public postPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${BaseUrl.baseUrl}/person`, person).pipe(take(1));
  }

  public putPerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${BaseUrl.baseUrl}/person/id/${id}`, person).pipe(take(1));
  }

  public deletePersonById(id: number): Observable<Person> {
    return this.http.delete<Person>(`${BaseUrl.baseUrl}/person/id/${id}`).pipe(take(1));
  }

}
