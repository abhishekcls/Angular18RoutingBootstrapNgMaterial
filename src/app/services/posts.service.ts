import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  basepath='https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.basepath+'/posts');
  }

  getPostByID(id:string):Observable<Post>{
    return this.http.get<Post>(`${this.basepath}/posts/${id}`);
  }

  savePost(data:Post):Observable<Post>{
    return this.http.post<Post>(this.basepath+'/posts',data);
  }
}
