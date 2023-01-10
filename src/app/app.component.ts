import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDocVisible: boolean = false;

  title = 'GifsApp';

  closeDoc(){
    this.isDocVisible = false;
  }

  openDoc(){
    this.isDocVisible = true;
  }
}
