import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  //! en el constructor inyecto el servicio
  constructor(private dbzService: DbzService){
  }
  get getterCharacter(): Character[] {
      return [...this.dbzService.characters]
  }

  mainDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id)
  }
  mainNewCharacter(character: Character): void{
    this.dbzService.methodNewCharacter(character)
  }
}
