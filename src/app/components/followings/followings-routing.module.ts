import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FollowingsComponent } from './followings.component';

const routes: Routes = [
  { path: '', component: FollowingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowingsRoutingModule { }
