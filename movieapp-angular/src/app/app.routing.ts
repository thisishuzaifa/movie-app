import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { AboutComponent }        from './app.about';
import { HomepageComponent }        from './app.homepage';

const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
