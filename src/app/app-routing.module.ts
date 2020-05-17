import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { WelcomeComponent } from './main-container/welcome/welcome.component';

const routes: Routes = [
  { path: '/', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '/welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
