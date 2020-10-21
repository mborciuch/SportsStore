import {Injectable} from '@angular/core';
import {RestDatasource} from './rest.datasource';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDatasource) {
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }

  get  authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }

  clear() {
    this.dataSource.auth_token = null;
  }

}
