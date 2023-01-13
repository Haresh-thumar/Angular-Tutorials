import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*---------- Mat-Module Declaration ----------*/
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

/*---------- Module Declaration ----------*/
import { LazyLoadDialogModule } from './lazy-load-dialog/lazy-load-dialog.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

/*---------- Component Declaration ----------*/
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { InfiniteScrollingComponent } from './infinite-scrolling/infinite-scrolling.component';
import { ReusableDialogComponent } from './reusable-dialog/reusable-dialog.component';
import { DialogComponent } from './reusable-dialog/dialog/dialog.component';

/*---------- Service Declaration ----------*/
import { reUsableDialogService } from './services/reUseableDialog.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DynamicInputComponent,
    InfiniteScrollingComponent,
    ReusableDialogComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    LazyLoadDialogModule,
    YouTubePlayerModule
  ],
  providers: [reUsableDialogService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
