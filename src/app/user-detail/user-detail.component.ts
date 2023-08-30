import {Component, Input, OnInit} from '@angular/core';
import {User} from "../classes/User";
import {DemoService} from "../services/demo.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  private userCopy: User = new User();
  private __user: User = new User();
  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private $user: DemoService) {

  }

  ngOnInit(): void {

  }

  saveUser() {
    if (this.user.id > 0) {
      this.$user.updateUser(this.user)
    } else {
      this.user.id = this.$user.getUsers().length + 1
      this.$user.addUser(this.user)
    }
  }

  resetUser() {
    if (this.user.id == 0) {
      this.user = new User()
    } else {
      this.__user = this.userCopy
    }
  }
}
