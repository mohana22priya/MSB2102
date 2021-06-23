import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

str:string="hello batch-34";




test(data:string):void{
  console.log("test is called",data);
}
counter:number=1;
incvalue()
{
this.counter++; //counter+1=1+1=2
}
status:boolean=true;
changestatus()
{
this.status=!this.status;
}

numbers:number[]=[10,20,30,40,50];



  n:number=100;
  name:string="Nirmaan org";
  imgurl:string="https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
