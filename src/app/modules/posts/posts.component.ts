import { Component, OnInit } from '@angular/core';
import { UserMain } from 'src/app/models/userMain';
import { InfoService } from 'src/app/services/info.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Array<any>;
  usersPosts: Array<any>;
  loading: boolean = true;
  userdata: boolean = false;
  postdata: boolean = false;
  size: number = 5;
  users: Array<any> = [];
  userid:string = "1";
  user= { } as UserMain;
  userAddress: Object = {};
  companyPhrase: string = "";
  companyName: string = "";
  companySolution: string = "";
  constructor(private infoServ : InfoService) {
    this.infoServ.getAllUsers().subscribe(data=> {
      this.users = data;
    })
   }

  ngOnInit(): void {
    this.setupPosts(1);
    this.getUserInfo(1);

  }

  setupPosts(id){
    this.infoServ.getAllPosts().subscribe(data => {
      let allPosts = [];
      allPosts = data;
      this.usersPosts = allPosts.filter(elem => elem.userId == id);
      if(this.usersPosts.length< this.size){
        this.posts = this.usersPosts;
      }else
      this.posts = this.usersPosts.slice(-this.size)
      this.loading = false;
    }, error => {
      this.loading = true;
    })
    this.getUserInfo(id);  
  }

  getUserInfo(id){
    this.loading = true;
    this.infoServ.getUser(id).subscribe(data => {
      this.user = data;
      this.loading = false;
    }, error => {
      this.loading = true;
    });
  }


}
