import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/product';

const apiUrl = environment.apiUrl;

@Injectable()
export class ProductService {

 private totalProducts = 0;
  private productsSubject = new BehaviorSubject<Product[]>([]);

  get products$() {
    return this.productsSubject.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  refreshProducts(filter: any = {}) {

    this.http.get<Product[]>(`${apiUrl}/products`, {
      params: {
        _page: '1',
        _limit: '10',
        ...filter.text && {q:filter.text },
        ...filter.category && {category: filter.category}
      }
      }).subscribe(prods => this.productsSubject.next(prods));
  }

  getRandomProducts() {
    const pages = Math.ceil(this.totalProducts / 3);
    const randomPage = Math.floor(Math.random() * (pages  + 1)) || 1;
    return this.http.get<Product[]>(`${apiUrl}/products`, {
      observe:'response',
      params: {
        _page: randomPage.toString(),
        _limit: '3'
      }
    }).pipe(
      tap(res => this.totalProducts = parseInt(res.headers.get('x-total-count'))),
      map(res => res.body)
      )
  }
}
