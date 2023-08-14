import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { BaseUrl } from 'src/app/common/helpers/class/base-url/base-url';
import { SelectItemStructure } from 'src/app/common/helpers/interface/select-item-structure/select-item-structure';
import { Product } from 'src/app/domain/entity/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor (private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BaseUrl.baseUrl}/product`).pipe(take(1));
  }

  public getAllCategoriesInList(): Observable<SelectItemStructure[]> {
    return this.http.get<SelectItemStructure[]>(`${BaseUrl.baseUrl}/category/list`).pipe(take(1));
  }

  public getProductsById(idProduct: number): Observable<Product> {
    return this.http.get<Product>(`${BaseUrl.baseUrl}/product/id/${idProduct}`).pipe(take(1));
  }

  public postProducts(Product: Product): Observable<Product> {
    return this.http.post<Product>(`${BaseUrl.baseUrl}/product`, Product).pipe(take(1));
  }

  public putProducts(idProduct: number, Product: Product): Observable<Product> {
    return this.http.put<Product>(`${BaseUrl.baseUrl}/product/id/${idProduct}`, Product).pipe(take(1));
  }

  public deleteProductById(idProduct: number): Observable<Product> {
    return this.http.delete<Product>(`${BaseUrl.baseUrl}/product/id/${idProduct}`).pipe(take(1));
  }
  
}
