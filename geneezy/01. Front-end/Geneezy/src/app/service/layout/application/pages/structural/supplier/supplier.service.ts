import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from 'src/app/domain/entity/supplier/supplier';
import { BaseUrl } from 'src/app/common/helpers/class/base-url/base-url';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  public getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${BaseUrl.baseUrl}/supplier`).pipe(take(1));
  }

  public getSuppliersById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${BaseUrl.baseUrl}/supplier/id/${id}`).pipe(take(1));
  }

  public postSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${BaseUrl.baseUrl}/supplier`, supplier).pipe(take(1));
  }

  public putSupplier(id: number, supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${BaseUrl.baseUrl}/supplier/id/${id}`, supplier).pipe(take(1));
  }

  public deleteSupplierById(id: number): Observable<Supplier> {
    return this.http.delete<Supplier>(`${BaseUrl.baseUrl}/supplier/id/${id}`).pipe(take(1));
  }

}
