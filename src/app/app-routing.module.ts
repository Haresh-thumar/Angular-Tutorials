import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { InfiniteScrollingComponent } from './infinite-scrolling/infinite-scrolling.component';
import { LazyLoadDialogComponent } from './lazy-load-dialog/lazy-load-dialog.component';
import { ReusableDialogComponent } from './reusable-dialog/reusable-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: 'infinite-scroll', pathMatch: 'full' },
  { path: 'infinite-scroll', component: InfiniteScrollingComponent },
  { path: 'dynamic-control', component: DynamicInputComponent },
  { path: 'reusable-dialog', component: ReusableDialogComponent },
  {
    path: 'lazy-load-dialog', component: LazyLoadDialogComponent,
    loadChildren: () => import('./lazy-load-dialog/lazy-load-dialog.module').then(m => m.LazyLoadDialogModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
