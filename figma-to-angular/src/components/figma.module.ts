import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CClockComponent } from './CClock.component';
import { CFClockComponent } from './CFClock.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ CClockComponent, CFClockComponent ],
  exports: [ CClockComponent, CFClockComponent ],
})
export class FigmaModule { }