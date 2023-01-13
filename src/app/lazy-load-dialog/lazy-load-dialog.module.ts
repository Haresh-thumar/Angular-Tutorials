import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadDialogRoutingModule } from './lazy-load-dialog-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LazyLoadDialogRoutingModule,
    MatListModule,
    MatFormFieldModule,
    YouTubePlayerModule,
    MatDialogModule,
    HttpClientModule
  ],
})
export class LazyLoadDialogModule { }
