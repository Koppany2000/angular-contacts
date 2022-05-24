import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ViewChild} from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GetresultsComponent } from './getresults/getresults.component';
import { PostcontactComponent } from './postcontact/postcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { GetsingleComponent } from './getsingle/getsingle.component';
import { LoginComponent } from './login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TokenInterceptor } from './token-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { GraphqlComponent } from './graphql/graphql.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';

import {MatTableModule} from '@angular/material/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AntDesignComponent } from './ant-design/ant-design.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GetresultsComponent,
    PostcontactComponent,
    UpdatecontactComponent,
    DeletecontactComponent,
    GetsingleComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    UsersComponent,
    GraphqlComponent,
    AntDesignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
    NzTableModule,
    NzDropDownModule,
    NzResultModule,
    NzLayoutModule,
    NzNotificationModule,
    NzIconModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  },{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
