import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themeName = 'White';
  themeColor: any;
  storedTheme:string | null = localStorage.getItem('theme-color');

  constructor() {

  }

  ngOnInit(): void {
  }

  themeSwitcher(target:any):void {
    if (target.checked) {
      document.body.classList.remove('black')
      document.body.classList.add('white')
      // this.themeName = 'White'
      localStorage.setItem('theme-color', 'white');
      this.storedTheme = localStorage.getItem('theme-color');
    }

    else {
      document.body.classList.remove('white')
      document.body.classList.add('black')
      localStorage.setItem('theme-color', 'black');
      this.storedTheme = localStorage.getItem('theme-color');
      // this.themeName = 'Black'
      this.themeColor = false
    }
  }


}
