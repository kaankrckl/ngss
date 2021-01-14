import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() imgurl;
  @Input() data;
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
