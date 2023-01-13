import { Component, OnInit } from '@angular/core';
import { reUsableDialogService } from '../services/reUseableDialog.service';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.scss']
})
export class ReusableDialogComponent implements OnInit {

  constructor(private dialogService: reUsableDialogService) { }

  ngOnInit(): void {
  }

  yesNoDialog() {
    this.dialogService.confirmDialog({
      title: 'Title',
      message: 'Are you sure you want to do this?',
      confirmCaption: 'Yes',
      cancelCaption: 'No',
    }).subscribe((res) => {
      if (res) {
        console.log('The title said YES')
      } else {
        console.log('The title said NO')
      };
    });
  }

  confirmCancel() {
    this.dialogService.confirmDialog({
      title: 'Please confirm action',
      message: 'Please confirm whether you want to do this!',
      confirmCaption: 'Confirm',
      cancelCaption: 'Cancel',
    }).subscribe((res) => {
      if (res) {
        console.log('The title said YES')
      } else {
        console.log('The title said NO')
      };
    });
  }

  yesNotSure() {
    this.dialogService.confirmDialog({
      title: 'Are you sure?',
      message: 'Are you sure you want to do this?',
      confirmCaption: 'Yes',
      cancelCaption: 'Not sure!',
    }).subscribe((res) => {
      if (res) {
        console.log('The title said YES')
      } else {
        console.log('The title said NO')
      };
    });
  }

}
