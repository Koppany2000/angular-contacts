import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntDesignComponent } from './ant-design/ant-design.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { ErrorComponent } from './error/error.component';
import { GetresultsComponent } from './getresults/getresults.component';
import { GetsingleComponent } from './getsingle/getsingle.component';
import { GraphqlComponent } from './graphql/graphql.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostcontactComponent } from './postcontact/postcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';




const routes: Routes = [
   { path: 'getResults', component: GetresultsComponent },
   { path: 'login', component: LoginComponent },
   { path: 'update', component: UpdatecontactComponent },
   { path: 'delete', component: DeletecontactComponent },
   { path: 'getSingle', component: GetsingleComponent },
   { path: 'post', component: PostcontactComponent },
   { path: 'logout', component: LogoutComponent },
   { path: 'graphql', component: GraphqlComponent },
   { path: 'getSingle/:id', component: GetsingleComponent },
   { path: 'delete/:id', component: DeletecontactComponent },
   { path: 'update/:id', component: UpdatecontactComponent },
   { path: 'update', component: UpdatecontactComponent },
   { path: 'antDesign', component: AntDesignComponent },
   { path: 'error', component: ErrorComponent },
   { path: 'error/:id', component: ErrorComponent },
   { path: '', component: LoginComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }