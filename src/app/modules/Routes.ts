import { NewWordsComponent } from "../components/new-words/new-words.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { PageNoFoundComponent } from "../components/page-no-found/page-no-found.component";

import { IRoute } from "../models/IRouting";

class AppRoutes {
  private routes: IRoute[] = [
    {path: '', title: 'Home', component: DashboardComponent, isShowNav: true},
    {path: 'new-words', title: 'New Words', component: NewWordsComponent, isShowNav: true},
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
