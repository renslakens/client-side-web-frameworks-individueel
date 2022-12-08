import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserOverviewComponent } from './pages/user/user-overview/user-overview.component';
import { CompetitionOverviewComponent } from './pages/competition/competition-overview/competition-overview.component';
import { CompetitionEditComponent } from './pages/competition/competition-edit/competition-edit.component';
import { CompetitionDetailComponent } from './pages/competition/competition-detail/competition-detail.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
    { path: 'users', pathMatch: 'full', component: UserOverviewComponent },
    { path: 'users/new', pathMatch: 'full', component: UserEditComponent },
    { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent },
    { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },

    { path: 'competitions', pathMatch: 'full', component: CompetitionOverviewComponent },
    { path: 'competitions/new', pathMatch: 'full', component: CompetitionEditComponent },
    { path: 'competitions/:id', pathMatch: 'full', component: CompetitionDetailComponent },
    { path: 'competitions/:id/edit', pathMatch: 'full', component: CompetitionEditComponent },

    { path: 'auth/register', pathMatch: 'full', component: RegisterComponent },
    { path: 'auth/login', pathMatch: 'full', component: LoginComponent },

    { path: 'about', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }