import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    // document.addEventListener('keydown', (event) => this.onKeydown(event))
  }

  // @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log(event);
  }
}
