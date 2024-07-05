import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any;
  constructor(us: UserService) {
    us.getUsers().subscribe(u=> {this.users=u;console.log('next')},e=>console.log('errorrrrr'),()=>console.log('complete'));
  }

  /*getData(u: any) {
    this.users = u;
    console.log(this.users);
  }*/
}
