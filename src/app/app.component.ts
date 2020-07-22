import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wolfpack';
  isOpen: boolean;

  openUpload() {
    this.isOpen = true;
  }

  closeUpload() {
    this.isOpen = false;
  }
}
