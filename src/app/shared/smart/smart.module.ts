import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [DragAndDropComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class SmartModule { }
