import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
  }, {
    path: 'data',
    component: DataTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
