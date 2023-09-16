import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1500
    }, {
      name:'Goku',
      power: 10000
    }, {
      name: 'Gohan',
      power: 8000}, {
        name: 'Bulma',
        power: 150}]

  methodNewCharacter(character: Character): void {
    if (character.name.length > 0 && character.power > 0) {
    this.characters.push(character);
  }

  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1)
  }
}
