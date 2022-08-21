import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSidebar from './reducers/sidebar.reducer';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromSidebar.sidebarFeatureKey, fromSidebar.reducer)
  ],
  exports: [
    SidebarComponent
  ]
})
export class MazerModule { }
