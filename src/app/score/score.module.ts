import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { AttemptsRegisterComponent } from './attempts-register/attempts-register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ScoreDisplayComponent, AttemptsRegisterComponent],
  exports: [ScoreDisplayComponent, AttemptsRegisterComponent]
})
export class ScoreModule {
}
