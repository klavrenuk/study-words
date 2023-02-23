import { NewWordsComponent } from "../components/new-words/new-words.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { PageNoFoundComponent } from "../components/page-no-found/page-no-found.component";
import { WordsControlComponent } from "../components/words-control/words-control.component";

import { IRoute } from "../models/IRouting";

class AppRoutes {
  private routes: IRoute[] = [
    {path: '', title: 'Home', component: DashboardComponent, isShowNav: true},
    {path: 'words-control', title: 'Words Control', component: WordsControlComponent, isShowNav: true},
    {path: '**', component: PageNoFoundComponent}
  ];

  getAllRoutes():IRoute[] {
    return this.routes;
  }

  getNavMenuRoutes():IRoute[] {
    return this.routes.filter((route) => route.isShowNav);
  }
}

export default new AppRoutes();
