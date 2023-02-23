import { Component } from '@angular/core';

import { IWord } from 'src/app/models/IWord';

@Component({
  selector: 'app-words-control',
  templateUrl: './words-control.component.html',
  styleUrls: ['./words-control.component.less']
})
export class WordsControlComponent {
  words:IWord[] = [];

  save() {
    console.log('save');
  }

  add() {
    console.log('add');
  }

  remove(word:IWord) {
    console.log('remove');
  }
}
