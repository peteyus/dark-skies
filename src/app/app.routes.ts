import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StarsComponent } from './stars/stars.component';
import { SourcesComponent } from './sources/sources.component';

export const routes: Routes = [
    { path: 'stars', component: StarsComponent },
    { path: 'info', component: InfoComponent },
    { path: 'sources', component: SourcesComponent },
    { path: '', component: StarsComponent },
];
