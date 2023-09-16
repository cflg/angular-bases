import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz-characters',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()//! con este decorador completo esta propiedad con valores que vienen de otro componente
  public listCharacter: Character[] = []
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter()

  deleteCharacter( index: number ): void{
    this.onDelete.emit(index)
  }
}
