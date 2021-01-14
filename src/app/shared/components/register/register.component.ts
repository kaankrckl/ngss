import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = { } as User;
  errMessage: string = "";
  err: boolean = false;

  constructor(private router: Router, private userServ: UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
      let postData = new FormData();

      for ( let key in this.user ) {
        postData.append(key, this.user[key]);
      }

      this.userServ.register(postData).subscribe( data => {
        if(data.success){
          this.router.navigate(['/login']);
        }
        else{
          this.errMessage=data.error;
          this.err = true;
        }
      });
    
  }

}
