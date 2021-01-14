import { Component, OnInit } from '@angular/core';

import { InfoService } from 'src/app/services/info.service'
import { UserMain } from 'src/app/models/userMain';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  posts: Array<any>;
  loading: boolean = true;
  userdata: boolean = false;
  postdata: boolean = false;
  tododata: boolean = false;
  albumdata: boolean = false;
  postCount: number = 0;
  completed: number;
  unfinished: number;
  todos: Array<any>;
  albums: Array<any>;
  userAlbums: number;
  users: Array<any> = [];
  userid:string = "1";
  user= { } as UserMain;
  constructor(private infoServ : InfoService) { 
    this.infoServ.getAllUsers().subscribe(data=> {
      this.users = data;
    })
  }

  ngOnInit(): void {
    this.getUsersInfo(1);
  }


  getUsersInfo(id){
    this.loading = true;
    this.infoServ.getUser(id).subscribe(data => {
      this.user = data;
      this.loading = false;
    }, error => {
      this.loading = true;
    });

    this.infoServ.getAllPosts().subscribe(data => {
      let allPosts = [];
      allPosts = data;
      this.posts = allPosts.filter(elem => elem.userId == id);
      this.postCount = this.posts.length;
      this.loading = false;
    }, error => {
      this.loading = true;
    });

    this.infoServ.getTodos().subscribe(data =>{
      this.todos = data;
      this.completed = this.todos.filter(data => data.completed == true && data.userId == id).length;
      this.unfinished = this.todos.length - this.completed;
      this.loading = false;
  }, error => {
    this.loading = true;
  });

  this.infoServ.getAllAlbums().subscribe(data =>{
    this.albums = data;
    this.userAlbums = this.albums.filter(data => data.userId == id).length;
    this.loading = false;
  }), error => {
    this.loading = true;
  };

  }

}
