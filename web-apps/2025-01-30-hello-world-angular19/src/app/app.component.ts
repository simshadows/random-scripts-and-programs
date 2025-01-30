import {Component} from '@angular/core';

import {CounterModule} from './counter/counter.module';
import {DepsDemoAModule} from './deps-demo-a/deps-demo-a.module';

@Component({
  selector: 'app-root',
  imports: [CounterModule, DepsDemoAModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  foobarLabelName = "value:";
}
