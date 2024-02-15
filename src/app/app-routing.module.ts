import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { SidebarComponent } from './componants/sidebar/sidebar.component';
import { CreateCommComponent } from './componants/create-comm/create-comm.component';
import { CommitteesComponent } from './componants/committees/committees.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"create",component:CreateCommComponent},
  {path:'committees',component:CommitteesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
