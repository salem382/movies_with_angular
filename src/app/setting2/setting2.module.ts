import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Setting2RoutingModule } from './setting2-routing.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PrivacyComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    Setting2RoutingModule
  ]
})
export class Setting2Module { }
