import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './postslist/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private getdata:PostsService) { }

  ngOnInit(): void {
  }
  Onpost(formdata:NgForm){
    if(!formdata.invalid){
    this.getdata.Takedata(formdata.value.title, formdata.value.content, formdata.value.dateTime)
    formdata.resetForm()
  }
  else{
    return;
  }
}
}
