import { Injectable } from '@angular/core';
import User from './models/User';
import {HttpClient} from '@angular/common/http';
import iUser from './models/iUser';
import { Observable } from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@Injectable()

export class LoginService {

  constructor(private http: HttpClient) { }

  login(id: string, nom: string, mdp: string): Observable<User> {
    return this.http.get<iUser[]>('https://jsonplaceholder.typicode.com/users?username=' + id)
        .pipe(
            map(value => {
              if (value.length > 0) {
                return value[0];
              } else {
                throw new Error('Aucun utilisateur trouvé');
              }
            }),
            // filter(value => value.length > 0),
            // map(value => value[0]),
            map(value => new User(value.id, value.name, value.email))
        );
  }
}
