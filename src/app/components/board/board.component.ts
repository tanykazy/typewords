import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @HostBinding('tabIndex') tabIndex = '0';

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log(event);
  }
}
