import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddPjComponent } from './components/add-pj/add-pj.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [//! declaro el componente para poder utilizarlo
    MainPageComponent, ListComponent, AddPjComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [//! exporto el componente para usarlo en app.module
    MainPageComponent
  ]
})
export class DbzModule { }
