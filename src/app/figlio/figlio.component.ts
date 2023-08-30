import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../classes/User";

@Component({
  selector: 'tr[app-figlio]',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent {
  @Input('user-data') user: User = new User()
  @Output('onDeleteUser') userDeleted = new EventEmitter()
  @Output() onSelectUser = new EventEmitter()
  constructor() {}

  deleteUser() {
    this.userDeleted.emit(this.user)
  }

  updateUser() {
    this.onSelectUser.emit(this.user)
  }
}
