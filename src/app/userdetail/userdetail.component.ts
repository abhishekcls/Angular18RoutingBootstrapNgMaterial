import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent implements OnDestroy {
  id: string;
  user: any;
  s: Subscription;
  constructor(ar: ActivatedRoute, us: UserService) {
    this.id = ar.snapshot.params['id'];
    this.s = us.getUserByID(this.id).subscribe(u => this.user = u);
  }

  ngOnDestroy() {
    this.s.unsubscribe();
  }
}
