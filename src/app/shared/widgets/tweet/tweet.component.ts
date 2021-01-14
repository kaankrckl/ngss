import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() posts;
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
