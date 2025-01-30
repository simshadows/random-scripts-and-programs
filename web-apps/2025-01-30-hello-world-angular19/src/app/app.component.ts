import {Component} from '@angular/core';

import {CounterModule} from './counter/counter.module';

@Component({
  selector: 'app-root',
  imports: [CounterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  foobarLabelName = "value:";
}
