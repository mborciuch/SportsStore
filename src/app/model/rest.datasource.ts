import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {Observable} from 'rxjs';
import {Order} from './order.model';
import {Injectable} from '@angular/core';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDatasource {

  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL + 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseURL + 'orders', order);
  }

}
