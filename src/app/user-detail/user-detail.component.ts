import {Component, Input, OnInit} from '@angular/core';
import {User} from "../classes/User";
import {DemoService} from "../services/demo.service";
import {ActivatedRoute, Router} from "@angular/router";
import { faList } from '@fortawesome/free-solid-svg-icons';

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

  constructor(
    private $user: DemoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = new User();

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        const id = Number(params.get('id'));
        this.$user.getUser(id).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }

  saveUser() {
    let obs;

    if (this.user.id > 0) {
      obs = this.$user.updateUser(this.user);
    } else {
      obs = this.$user.createUser(this.user);
    }

    obs.subscribe((resp) => {
      console.log('resp', resp);
      this.router.navigate(['users']);
    });
  }

  resetUser() {
    if (this.user.id == 0) {
      this.user = new User();
    } else {
      this.__user = this.userCopy;
    }
  }

  protected readonly faList = faList;
}
