import { Component } from '@angular/core';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent {
  post: Post;
  s:Subscription;
  constructor(private ps: PostsService,ar:ActivatedRoute) {
    this.post={};
    this.s= this.ps.getPostByID(ar.snapshot.params['id']).subscribe(p => { this.post = p; console.log(this.post) });

    console.log('cons')
  }

  ngOnInit() {
    console.log('init')
  }

  ngOnDestroy(){
    this.s.unsubscribe();
  }
}
