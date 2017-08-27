/**
 * Created by vincebloise on 1/24/17.
 */
import { RouterModule } from '@angular/router';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';
import HomeComponent from './home/home';
import { PersonalInterestsComponent } from './personalInterests.component/personalInterests.component';
var routes = [
    { path: '', component: HomeComponent },
    { path: 'products/:id', component: HomeComponent },
    { path: 'yo', component: YoMoFoComponent },
    { path: 'dbaa', component: HomeComponent },
    { path: '1', component: HomeComponent },
    { path: 'personalInterests', component: PersonalInterestsComponent },
    { path: '2', component: PersonalInterestsComponent }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map