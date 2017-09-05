import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterSwordComponent } from './master-sword/master-sword.component';
import { HylianShieldComponent } from './hylian-shield/hylian-shield.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MasterSwordComponent,
  	HylianShieldComponent
  ],

  exports: [
  	MasterSwordComponent,
  	HylianShieldComponent
  ]
})
export class EquipmentModule { }
