import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {DimUser} from '../../controller/model/dim-user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
  }
  get userLogin(): DimUser {
    return this.userService.userLogin;
  }

}
