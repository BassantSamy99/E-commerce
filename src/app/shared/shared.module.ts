import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { FilterComponent } from './components/filter/filter.component';




@NgModule({
  declarations: [
    NavBarComponent,
    LoadingComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    NavBarComponent,
    LoadingComponent,
    FilterComponent
  ]
})
export class SharedModule { }
