import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {

  isList!: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
