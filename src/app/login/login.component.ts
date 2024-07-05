import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(user: any) {
    if (user.uname == 'admin' && user.pass == '12345') {
      localStorage.setItem('user','Admin');
    }
    else
      alert('failed');
  }
  logout(){
    localStorage.removeItem('user');
  }
}
