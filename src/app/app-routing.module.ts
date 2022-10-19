import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserComponent } from './components/user/user.component';
import { CommunityComponent } from './components/community/community.component';
import { CityComponent } from './components/city/city.component';
import { ComplainComponent } from './components/complain/complain.component';
import { CreateComponent } from './components/create/create.component';
import { StaffdashComponent } from './staffdash/staffdash.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { NoticeComponent } from './notice/notice.component';
import { LocalserviceComponent } from './localservice/localservice.component';
import { LocalservicecategoryComponent } from './localservicecategory/localservicecategory.component';
import { SecurityComponent } from './security/security.component';
import { SocietydirectoryComponent } from './societydirectory/societydirectory.component';
import { BlockComponent } from './block/block.component';
import { FloorComponent } from './floor/floor.component';
import { FlatComponent } from './flat/flat.component';
import { GateComponent } from './gate/gate.component';


const routes: Routes = [
  {path: 'home', component: MainComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'features', component: BodyComponent},
  
  {path: 'contact', component:ContactComponent},
  {path: 'login', component: LoginComponent},
  
  {path: 'admin', component: AdminComponent},
  {path: 'staff', component: StaffdashComponent},
  {path: 'admin/:dashboard', component: DashboardComponent},
  {path: 'staff/:staffdashboard', component: StaffdashboardComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'user', component: UserComponent},
  {path: 'notice', component: NoticeComponent},
  {path: 'emergency', component: EmergencyComponent},
  {path: 'localservices', component: LocalserviceComponent},
  {path: 'servicecategory', component: LocalservicecategoryComponent},
  {path: 'city', component: CityComponent},
  {path: 'flat', component: FlatComponent},
  {path: 'block', component: BlockComponent},
  {path: 'floor', component: FloorComponent},
  {path: 'gate', component: GateComponent},
  {path: 'directory', component: SocietydirectoryComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'complain', component: ComplainComponent},
  {path: 'create', component: CreateComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
