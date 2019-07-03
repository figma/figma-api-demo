import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'figma-to-angular';
  props = this.formatAMPM(new Date());
  ngOnInit() {
    interval(1000).subscribe(() => {
      this.props = this.formatAMPM(new Date());
    });
  }
  private getSlice(num): string{
    return ('0'+num).slice(-2);
  }
  private formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const time =  this.getSlice(hours) + ':' + this.getSlice(minutes);
    return {
      time,
      seconds: this.getSlice(date.getSeconds()),
      ampm
    };
  }
}
