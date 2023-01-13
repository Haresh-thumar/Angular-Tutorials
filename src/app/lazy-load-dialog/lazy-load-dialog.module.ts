import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LazyLoadDialogRoutingModule } from './lazy-load-dialog-routing.module';
import { LazyLoadService } from './service/lazy-load.service';



@NgModule({
  declarations: [
  ],
  imports: [
    LazyLoadDialogRoutingModule,
    CommonModule,
  ],
  providers: [LazyLoadService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class LazyLoadDialogModule { }
