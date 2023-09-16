import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  //! Hay que declrar los componentes para que funcionen
  declarations: [
    CounterComponent
  ],
  //! hay que exportar los componentes para que los pueda usar otro modulo
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
