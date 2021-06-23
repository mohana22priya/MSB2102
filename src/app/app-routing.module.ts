import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularComponent } from './technologies/angular/angular.component';
import { ExpressComponent } from './technologies/express/express.component';
import { ReactComponent } from './technologies/react/react.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'news',component:NewsComponent},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'angular',component:AngularComponent},
    {path:'react',component:ReactComponent},
    {path:'express',component:ExpressComponent}
  ]},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
