import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-pj',
  templateUrl: './add-pj.component.html',
  styleUrls: ['./add-pj.component.css']
})
export class AddPjComponent {
  //! con las 2 lineas de debajo puedo pasar la informacion de una propiedad a otro componente
  @Output()
  public newCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }

  addCharacter(): void{
    if(this.character.name.length === 0 || this.character.power <= 0 ) return
    console.log(this.character);

    this.newCharacter.emit(this.character)

    this.character.name = ''
    this.character.power = 0
  }
}
