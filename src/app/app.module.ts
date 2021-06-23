import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularComponent } from './technologies/angular/angular.component';
import { ExpressComponent } from './technologies/express/express.component';
import { ReactComponent } from './technologies/react/react.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ContactusComponent,
    AboutusComponent,
    NewsComponent,
    TechnologiesComponent,
    AngularComponent,
    ExpressComponent,
    ReactComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
