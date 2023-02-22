import { Component } from '@angular/core';
import { IRoute } from 'src/app/models/IRouting';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent {
  routers:IRoute[] = [];
}
