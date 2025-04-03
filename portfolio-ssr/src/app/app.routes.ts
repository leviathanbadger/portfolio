import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{
    component: DefaultLayoutComponent, path: '', children: [{
        component: NotFoundComponent, path: '**'
    }]
}];
