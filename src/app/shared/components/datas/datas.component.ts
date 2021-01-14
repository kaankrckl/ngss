import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { InfoService } from 'src/app/services/info.service'

export interface AllPosts {
  userId: number;
  id: number;
  title: number;
  body: string;
  
}

let POST_DATA: AllPosts[] = [];

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'content'];
  dataSource =new MatTableDataSource(POST_DATA);
  users: Array<any> = [];
  userid:string = "1";
  posts: any = [];
  loading: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private infoServ: InfoService) {
    this.infoServ.getAllUsers().subscribe(data=> {
      this.users = data;
    })
   }
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getUsersPosts(1);
  }

  getUsersPosts(id){
    this.loading = true;
    this.infoServ.getAllPosts().subscribe(data => {
      this.posts = data;
     let usersPosts =  this.posts.filter(item => item.userId == id);
     this.dataSource.data = usersPosts
     this.loading = false;
    }, error => {
      this.loading = true;
    })
  }

}
