import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  names:string="hello nirmaan students";
  salary:number=50000;
  rateofinterest=0.02;
  today=new Date();
  value:number=20;

  constructor() { }

  ngOnInit(): void {
  }

}
