import { Component } from '@angular/core';

import {IFooterLink} from "../../models/IFooter";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  links:IFooterLink[] = [
    {label: 'Linkedin', href: 'https://www.linkedin.com/in/klavrenuk/'},
    {label: 'Email', href: 'mailto:klavrenuk1993@gmail.com'},
    {label: 'Skype', href: 'https://join.skype.com/invite/C7ibUeK4BC9T'},
    {label: 'GitHub', href: 'https://github.com/klavrenuk'},
    {label: 'Telegram', href: 'https://t.me/klavrenuk'}
  ]
}
