import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themeName = 'Black'
  themeColor: any

  constructor() {

  }

  ngOnInit(): void {
  }

  themeSwitcher(target:any):void {
    if (target.checked) {
      document.body.classList.remove('black')
      document.body.classList.add('white')
      this.themeName = 'White'
    }

    else {
      document.body.classList.remove('white')
      document.body.classList.add('black')
      this.themeName = 'Black'
      this.themeColor = false
    }
  }

}
