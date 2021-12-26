import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRagisterComponent } from './components/account-ragister/account-ragister.component';
import { AppHomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'ragister', component: AccountRagisterComponent},
  {path: 'home', component: AppHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
