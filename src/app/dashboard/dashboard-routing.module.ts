import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitsComponent } from './pages/habits/habits.component';


const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: HabitsComponent,
        children: [
           
            /*{ path: '', loadChildren: () => import('../profile/profile.module').then(mod => mod.ProfileModule), },*/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }