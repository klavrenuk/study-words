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
import { PageNowFoundComponent } from './components/page-now-found/page-now-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HeaderNavComponent,
    DashboardComponent,
    NewWordsComponent,
    PageNowFoundComponent
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
