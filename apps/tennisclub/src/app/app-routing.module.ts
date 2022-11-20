import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserOverviewComponent } from './pages/user/user-overview/user-overview.component';

const routes: Routes = [
    { path: 'users', pathMatch: 'full', component: UserOverviewComponent },
    { path: 'users/new', pathMatch: 'full', component: UserEditComponent },
    { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent },
    { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },

    { path: 'about', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }