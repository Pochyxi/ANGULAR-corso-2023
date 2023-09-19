import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {DemoService} from "../services/demo.service";
import {UserInterface} from "../interfaces/userInterface";
import {User} from "../classes/User";
import {Observable} from "rxjs";
import {UserComponent} from "../user-component/user-component";

@Component({
  selector: 'app-ciclare-un-array',
  templateUrl: './users-component.html',
  styleUrls: ['./users-component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  public users$: Observable<User[]> = this.$service.getUsers();

  @Output() updateUser = new EventEmitter<UserInterface>();

  @ViewChildren(UserComponent, { read: ElementRef })
  trs!: QueryList<ElementRef>;

  constructor(private $service: DemoService) {}

  ngOnInit(): void {}

  onDeleteUser(user: User) {
    console.log(user);
    this.$service.deleteUser(user).subscribe((resp) => {
      this.trs.forEach((ele) => {
        const el = ele.nativeElement;
        if (Number(el.id) === user.id) {
          ele.nativeElement.parentNode.removeChild(el);
        }
      });
    });
  }

  onUpdateUser(user: User) {
    const userCopy = { ...user };
    this.updateUser.emit(userCopy);
  }

  ngAfterViewInit(): void {
    console.log(this.trs);
    this.trs.forEach((tr) => {
      console.log(tr);
    });
  }
}
