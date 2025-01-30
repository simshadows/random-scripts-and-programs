import {Component, Input} from '@angular/core';

import {Counter} from '../counter';

@Component({
  selector: 'hello-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  title = 'hello-counter';

  @Input() counterFoobar!: Counter;
}
