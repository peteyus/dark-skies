import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StarsComponent } from './stars/stars.component';
import { SourcesComponent } from './sources/sources.component';

export const routes: Routes = [
    { path: 'stars', component: StarsComponent },
    { path: 'sources', component: SourcesComponent },
    { path: '', component: HomepageComponent },
];
