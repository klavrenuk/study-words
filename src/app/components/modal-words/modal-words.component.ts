import { Component } from '@angular/core';
import { IWord } from 'src/app/models/IWord';

/*
  List of words.
  We can remove/edit
*/

@Component({
  selector: 'app-modal-words',
  templateUrl: './modal-words.component.html',
  styleUrls: ['./modal-words.component.less']
})
export class ModalWordsComponent {
  words:IWord[] = [];

  save() {
    console.log('save');
  }

  remove() {

  }
}
