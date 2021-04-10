
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-CClock',
  templateUrl: 'CClock.component.html',
})
export class CClockComponent  {
  @Input() props: any;
}
