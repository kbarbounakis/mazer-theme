import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './components/full-layout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MazerModule } from '../mazer/mazer.module';

@NgModule({
  declarations: [
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MazerModule,
    RouterModule
  ]
})
export class LayoutModule { }
