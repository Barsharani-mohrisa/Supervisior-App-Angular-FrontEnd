import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { BodyComponent } from './components/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { MatOption } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { CommunityComponent } from './components/community/community.component';
import { CityComponent } from './components/city/city.component';
import { ComplainComponent } from './components/complain/complain.component';
import { CreateComponent } from './components/create/create.component';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import {MatExpansionModule} from '@angular/material/expansion';

import { StaffService } from './services/staff.service';
import { StaffdashComponent } from './staffdash/staffdash.component';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { NoticeComponent } from './notice/notice.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LocalservicecategoryComponent } from './localservicecategory/localservicecategory.component';
import { LocalserviceComponent } from './localservice/localservice.component';
import { SecurityComponent } from './security/security.component';
import { SocietydirectoryComponent } from './societydirectory/societydirectory.component';
import { BlockComponent } from './block/block.component';
import { FloorComponent } from './floor/floor.component';
import { FlatComponent } from './flat/flat.component';
import { GateComponent } from './gate/gate.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    RegisterComponent,
    FooterComponent,
    FormComponent,
    BodyComponent,
    NotfoundComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    SidenavComponent,
    AdminComponent,
    NavbarComponent,
    UserComponent,
    CommunityComponent,
    CityComponent,
    ComplainComponent,
    CreateComponent,
    StaffdashComponent,
    UpdatestaffComponent,
    StaffdashboardComponent,
    NoticeComponent,
    EmergencyComponent,
    LocalservicecategoryComponent,
    LocalserviceComponent,
    SecurityComponent,
    SocietydirectoryComponent,
    BlockComponent,
    FloorComponent,
    FlatComponent,
    GateComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    NgChartsModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    CdkAccordionModule,
    MatExpansionModule,
    NgbModule,
    NgChartsModule,
    NgxPaginationModule

  ],
  providers: [DataService, ApiService, StaffService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
