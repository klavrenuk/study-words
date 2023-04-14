import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HeaderNavComponent } from './components/app-header/header-nav/header-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewWordsComponent } from './components/new-words/new-words.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { WordsControlComponent } from './components/words-control/words-control.component';
import { ModalWordsComponent } from './components/modal-words/modal-words.component';
import { ModalWordItemComponent } from './components/modal-words/modal-word-item/modal-word-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HeaderNavComponent,
    DashboardComponent,
    NewWordsComponent,
    PageNoFoundComponent,
    FooterComponent,
    WordsControlComponent,
    ModalWordsComponent,
    ModalWordItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
