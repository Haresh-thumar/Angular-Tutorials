import { Component, OnInit } from '@angular/core';
import { LazyLoadService } from './service/lazy-load.service';

@Component({
  selector: 'app-lazy-load-dialog',
  templateUrl: './lazy-load-dialog.component.html',
  styleUrls: ['./lazy-load-dialog.component.scss']
})
export class LazyLoadDialogComponent implements OnInit {

  constructor(public lazyDialog: LazyLoadService) { }

  ngOnInit(): void {
  }

}
