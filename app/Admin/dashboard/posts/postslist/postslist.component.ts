import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {
 
  postlist :post[] = []
  postSub!: Subscription;
  constructor(private getDataFromService:PostsService) { }

  ngOnInit(): void {
    this.postlist= this.getDataFromService.SendData();
    console.log(this.postlist)
    this.postSub=this.getDataFromService.getupdate().subscribe((result:post[])=>{
       this.postlist=result;
    })

  }
  ngOnDestroy(){
    this.postSub.unsubscribe()
  }
   
}
