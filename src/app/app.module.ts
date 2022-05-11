import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GetresultsComponent } from './getresults/getresults.component';
import { PostcontactComponent } from './postcontact/postcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { GetsingleComponent } from './getsingle/getsingle.component';
import { LoginComponent } from './login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TokenInterceptor } from './token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GetresultsComponent,
    PostcontactComponent,
    UpdatecontactComponent,
    DeletecontactComponent,
    GetsingleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
