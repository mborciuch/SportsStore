import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product.model';
import {Observable} from 'rxjs';
import {Order} from './order.model';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDatasource {

  baseURL: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL + 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseURL + 'orders', order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseURL + 'login', {
      username: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL + "products", product, this.getOptions());
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.baseURL}products/${product.id}`,
      product, this.getOptions());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseURL}products/${id}`,
      this.getOptions());
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseURL + "orders", this.getOptions());
  }
  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseURL}orders/${id}`,
      this.getOptions());
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseURL}orders/${order.id}`,
      order, this.getOptions());
  }



  private getOptions(){
    return {
      headers: new HttpHeaders({
        "Authorization" : `Bearer<${this.auth_token}>`
      })
    }
  }

}
