import { ContentChild, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:post[]=[];
  private postupdate=new Subject<post[]>();

  getupdate(){
    return this.postupdate.asObservable()
  }
  constructor() { }

  Takedata(title:string, content: string, dateTime: any){
        const post:post={title:title, content: content, dateTime: new Date()}
        this.posts.push(post);
        this.postupdate.next([...this.posts])
  }
  SendData(){
    return [...this.posts];
  }
}
