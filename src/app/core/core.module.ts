import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHttpComponent } from './services/app-http/app-http.component';
import { BaseComponent } from './components/base/base.component';
import { ConirmationPopupComponent } from './components/conirmation-popup/conirmation-popup.component';



@NgModule({
  declarations: [
    AppHttpComponent,
    BaseComponent,
    ConirmationPopupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
