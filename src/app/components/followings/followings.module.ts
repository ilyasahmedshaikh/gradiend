import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowingsRoutingModule } from './followings-routing.module';
import { FollowingsComponent } from './followings.component';


@NgModule({
  declarations: [
    FollowingsComponent
  ],
  imports: [
    CommonModule,
    FollowingsRoutingModule
  ]
})
export class FollowingsModule { }
