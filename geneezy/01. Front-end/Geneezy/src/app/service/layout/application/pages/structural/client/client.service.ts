import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/domain/entity/client/client';
import { BaseUrl } from 'src/app/common/helpers/class/base-url/base-url';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  constructor(private http: HttpClient) {}

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${BaseUrl.baseUrl}/client`).pipe(take(1));
  }

  public getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${BaseUrl.baseUrl}/client/id/${id}`).pipe(take(1));
  }

  public postClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${BaseUrl.baseUrl}/client`, client).pipe(take(1));
  }

  public putClient(id: number, Client: Client): Observable<Client> {
    return this.http.put<Client>(`${BaseUrl.baseUrl}/client/id/${id}`, Client).pipe(take(1));
  }

  public deleteClientById(id: number): Observable<Client> {
    return this.http.delete<Client>(`${BaseUrl.baseUrl}/client/id/${id}`).pipe(take(1));
  }
}
