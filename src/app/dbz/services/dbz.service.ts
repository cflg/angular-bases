import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
//! este decorador sirve para decir que es un servicio
//! permite la inyeccion de dependencias
//! providedIn: 'root' sirve para que se pueda usar en toda la app
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
      {
        id: uuid(),
        name: 'Krillin',
        power: 1500
      }, {
        id: uuid(),
        name:'Goku',
        power: 10000
      }, {
        id: uuid(),
        name: 'Gohan',
        power: 8000}, {
          id: uuid(),
          name: 'Bulma',
          power: 150}]

  methodNewCharacter(character: Character): void {
    if (character.name.length > 0 && character.power > 0) {
      const newCharacter: Character = {
        id: uuid(),
        ...character
      }
    this.characters.push(newCharacter);
  }

  }

  /* onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1)
  } */

  onDeleteCharacterById(id: string | undefined): void {
    this.characters = this.characters.filter(char => {
      return char.id !== id
    })
  }
}
