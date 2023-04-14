import { Component } from '@angular/core';

import { IWord } from 'src/app/models/IWord';

import Word from "../../services/Word";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent {
  // public word:IWord = Word;
}
