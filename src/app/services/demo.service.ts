import {Injectable} from '@angular/core';
import {UserInterface} from "../interfaces/userInterface";
import {User} from "../classes/User";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiurl = environment.APIURL;

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiurl + '/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }

  deleteUser(userChoice: UserInterface) {
    return this.http.delete<User>(this.apiurl + '/' + userChoice.id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiurl + '/' + user.id, user);
  }

  createUser(user: User) {
    return this.http.post<User>(this.apiurl, user);
  }
}
