import { Component } from '@angular/core';
import AppRoutes from '../../../modules/Routes'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent {
  protected appRoutes = AppRoutes;
}
