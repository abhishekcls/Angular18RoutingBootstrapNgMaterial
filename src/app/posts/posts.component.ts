import { Component, OnDestroy, OnInit} from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit,OnDestroy {
  posts: Post[];
  s:Subscription;
  constructor(private ps: PostsService) {
    this.posts = [];
    this.s= this.ps.getPosts().subscribe(p => { this.posts = p; console.log(this.posts) });

    console.log('cons')
  }

  ngOnInit() {
    console.log('init')
  }

  ngOnDestroy(){
    this.s.unsubscribe();
  }
  submit(data:Post){
    console.log(data);
    this.ps.savePost(data).subscribe(d=>{console.log(d);this.posts.push(d)});
  }
}
