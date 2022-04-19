import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   x:Boolean = false;
   nome:string = "" ;

  constructor(){ }

  ngOnInit(): void {
  }

  alterar():void{
    this.x = !this.x;
  }

}
