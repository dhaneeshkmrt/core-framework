import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  durationInSeconds = 3
  defaultConfig:MatSnackBarConfig = {
    // duration: this.durationInSeconds * 1000,
    horizontalPosition: 'end',
    verticalPosition: 'bottom',
    panelClass: 'toaster-container',
  }

  constructor(private _snackBar: MatSnackBar) { }

  show(message: string, action?: string, config?: MatSnackBarConfig<any>){
    return this._snackBar.open(message, action, {...this.defaultConfig, ...config})
  }

  
  
  showComponent(component: ComponentType<unknown>, config?: MatSnackBarConfig<any>){
    return this._snackBar.openFromComponent(component, {...this.defaultConfig, ...config});
  }

  showTemplate(template: TemplateRef<any>, config?: MatSnackBarConfig<any>){
    return this._snackBar.openFromTemplate(template, {...this.defaultConfig, ...config});
  }

}
