import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isClicked: boolean;
  constructor() { }

  ngOnInit() { 
    this.isClicked = false;
  }
    toggleDropdown() {
      this.isClicked = !this.isClicked;
  }
  toggleDropdown1() {
    this.isClicked= !this.isClicked;
  }
}