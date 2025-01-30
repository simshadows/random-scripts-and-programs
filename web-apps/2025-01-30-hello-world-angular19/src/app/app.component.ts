import {Component} from '@angular/core';
//import {RouterOutlet} from '@angular/router';

import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2025-01-30-hello-world-angular19';
}
