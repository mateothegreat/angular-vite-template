import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import 'zone.js';
import { AppComponent } from './app/app.component';
import './styles.scss';

void bootstrapApplication(AppComponent, {
    providers: [
        provideRouter([
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./app/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
        ]),
    ],
});
