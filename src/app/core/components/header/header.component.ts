import { Component, EventEmitter, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onOpen = new EventEmitter();

  constructor(private viewportScroller: ViewportScroller) {}

  openUpload(): void {
    this.onOpen.emit();
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
