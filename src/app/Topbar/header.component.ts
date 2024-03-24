import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class TopbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor() { }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}