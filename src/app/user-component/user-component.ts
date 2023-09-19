import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../classes/User";
import {faPen, faTrash, faInfo} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'tr[user-component]',
  templateUrl: './user-component.html',
  styleUrls: ['./user-component.scss']
})
export class UserComponent {
  protected readonly faPen = faPen;
  protected readonly faTrash = faTrash;
  protected readonly faInfo = faInfo;

  @Input('user-data') user: User = new User();
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();
  constructor(private route: Router) {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }
}
