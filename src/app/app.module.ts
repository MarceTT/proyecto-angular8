import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';

import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderBannerComponent } from './shared/header-banner/header-banner.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostComponent } from './components/post/post.component';
import { FrontComponent } from './components/front/front.component';
import { PostFrontComponent } from './components/post-front/post-front.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewBannerComponent } from './components/new-banner/new-banner.component';
import { Page404Component } from './components/page404/page404.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BannerEditComponent } from './components/banner-edit/banner-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    FrontComponent,
    PostFrontComponent,
    NewPostComponent,
    PostEditComponent,
    BannerComponent,
    NewBannerComponent,
    Page404Component,
    ForgotPasswordComponent,
    BannerEditComponent,
    HeaderBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
