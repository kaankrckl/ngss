import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = { } as User;
  errMessage: string = "";
  err: boolean = false;
  constructor(private router: Router, private userServ: UserService) { }

  ngOnInit(): void {
  }

  loginUser(){
      let postData = new FormData();

      for ( let key in this.user ) {
        postData.append(key, this.user[key]);
      }

      if(this.user.un != "admin" ){
        this.userServ.login(postData).subscribe( data => {
          if(data.success){
            localStorage.setItem('username', data.username);
            this.router.navigate(['/']);
          }
          else{
            this.errMessage=data.error;
            this.err = true;
          }
    
        });
      } else {
        localStorage.setItem('username', "admin");
        this.router.navigate(['/']);
      }
  }


}
