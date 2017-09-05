import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TurretComponent } from './turret/turret.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	LaserCannonComponent,
  	TurretComponent
  ],
  exports: [
  	LaserCannonComponent,
  	TurretComponent
  ]
})
export class EngineerModule { }
