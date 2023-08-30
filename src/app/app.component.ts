import { Component } from '@angular/core';
import {UserInterface} from "./interfaces/userInterface";
import {User} from "./classes/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-new';
  userSelected: User = new User();
  showForm = false;

  updateUser(user: UserInterface) {
    this.showForm = true;
    this.userSelected = user;
  }

  newUser() {
    this.userSelected = new User();
    this.showForm = !this.showForm;
  }
}
