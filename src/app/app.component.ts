import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `<app-header /> <app-home />`,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
