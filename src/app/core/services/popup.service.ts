import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationPopupComponent } from '../components/confirmation-popup/confirmation-popup.component';
import { DialogData } from '../interfaces/dialog-data.interface';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(public _dialog: MatDialog) { }

  showYesNoConfirmationPopup(data: DialogData, config?: MatDialogConfig ): Observable<string>{
    const dialogData: DialogData = {
      actionButtons:['Yes'],
      closeButtonLabel: 'No',
      title: data?.title ?? '',
      message: data?.message ?? '',
      primaryButtonIndex: data.primaryButtonIndex ?? 0,
    }

    if(!config){
      config = new MatDialogConfig();
    }
    config.data =dialogData;

    const dialogRef = this._dialog.open(ConfirmationPopupComponent, config);
    return dialogRef.afterClosed();
  }

  showOkCancelConfirmationPopup(data: DialogData, config?: MatDialogConfig ): Observable<string>{
    const dialogData: DialogData = {
      actionButtons:['Ok'],
      closeButtonLabel: 'Cancel',
      title: data?.title ?? '',
      message: data?.message ?? '',
      primaryButtonIndex: data.primaryButtonIndex ?? 0,
    }

    if(!config){
      config = new MatDialogConfig();
    }
    config.data =dialogData;

    const dialogRef = this._dialog.open(ConfirmationPopupComponent, config);
    return dialogRef.afterClosed();
  }

  showCustomPopup(dialogData: DialogData, config?: MatDialogConfig ): Observable<string>{

    if(!config){
      config = new MatDialogConfig();
    }
    
    config.data =dialogData;

    const dialogRef = this._dialog.open(ConfirmationPopupComponent, config);
    return dialogRef.afterClosed();
  }
}
