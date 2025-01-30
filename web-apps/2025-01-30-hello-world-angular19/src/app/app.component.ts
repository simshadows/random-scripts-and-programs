import {Component} from '@angular/core';

import {CounterComponent} from './counter/counter.component';

import {Counter} from './counter';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2025-01-30-hello-world-angular19';

  counterFoobar: Counter = {
    name: "blah blah lmao",
    cntNum: 2,
  };
}
