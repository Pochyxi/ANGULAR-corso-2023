import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DemoService} from "../services/demo.service";
import {UserInterface} from "../interfaces/userInterface";
import {User} from "../classes/User";

@Component({
  selector: 'app-ciclare-un-array',
  templateUrl: './ciclare-un-array.component.html',
  styleUrls: ['./ciclare-un-array.component.scss']
})
export class CiclareUnArrayComponent implements OnInit{
  public users: User[] = []
  @Output() updateUser = new EventEmitter<UserInterface>()

  constructor(private $service: DemoService) {
  }

  ngOnInit(): void {
    this.users = this.$service.getUsers()
  }

  onDeleteUser(user:User) {
    console.log(user)
    this.$service.deleteUser(user)
  }

  onUpdateUser(user: User) {
    const userCopy = {...user}
    this.updateUser.emit(userCopy)
  }
}
