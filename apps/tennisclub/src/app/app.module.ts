import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { UserOverviewComponent } from './pages/user/user-overview/user-overview.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserOverviewComponent,
    UserEditComponent,
    UserDetailComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }