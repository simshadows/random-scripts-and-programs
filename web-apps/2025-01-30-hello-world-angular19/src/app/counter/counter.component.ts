import {Component, Input} from '@angular/core';

@Component({
  selector: 'hello-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() labelName!: string;
}
