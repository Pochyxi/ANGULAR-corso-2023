import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() onNewUser = new EventEmitter()

  constructor() {}

  newUser() {
    this.onNewUser.emit()
  }
}
