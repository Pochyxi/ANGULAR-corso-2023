import {Component, OnInit} from '@angular/core';
import {User} from "../classes/User";
import {DemoService} from "../services/demo.service";
import {ActivatedRoute} from "@angular/router";
import { faInfo, faList } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  user: User = new User();

  constructor(private $user: DemoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.$user.getUser(id).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }

  protected readonly faInfo = faInfo;
  protected readonly faList = faList;
}
