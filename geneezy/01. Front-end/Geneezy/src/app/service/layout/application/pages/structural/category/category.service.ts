import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable, take } from 'rxjs';
import { BaseUrl } from 'src/app/common/helpers/class/base-url/base-url';
import { Category } from 'src/app/domain/entity/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) {}

  public getAllCategorys(): Observable<TreeNode<Category>[]> {
    return this.http.get<TreeNode<Category>[]>(`${BaseUrl.baseUrl}/category`).pipe(take(1));
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${BaseUrl.baseUrl}/category/id/${id}`).pipe(take(1));
  }

  public postCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${BaseUrl.baseUrl}/category`, category).pipe(take(1));
  }

  public putCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${BaseUrl.baseUrl}/category/id/${id}`, category).pipe(take(1));
  }

  public deleteCategoryById(id: number): Observable<Category> {
    return this.http.delete<Category>(`${BaseUrl.baseUrl}/category/id/${id}`).pipe(take(1));
  }
}
