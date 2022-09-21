import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { KvizListComponent } from './kviz/kviz-list/kviz-list.component';
import { KvizItemComponent } from './kviz/kviz-list/kviz-item/kviz-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IstraziComponent } from './istrazi/istrazi.component';
import { NoviKvizComponent } from './kviz/novi-kviz/novi-kviz.component';
import { KvizoviUTrenduComponent } from './kviz/kvizovi-u-trendu/kvizovi-u-trendu.component';
import { MojiKvizoviComponent } from './kviz/moji-kvizovi/moji-kvizovi.component';
import { RijeseniKvizoviComponent } from './kviz/rijeseni-kvizovi/rijeseni-kvizovi.component';
import { KvizListExpandedComponent } from './kviz/kviz-list/kviz-list-expanded/kviz-list-expanded.component';
import { KvizDetailComponent } from './kviz/kviz-detail/kviz-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './login/auth-interceptor.service';
import { PlayKvizComponent } from './kviz/play-kviz/play-kviz.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    KvizListComponent,
    KvizItemComponent,
    IstraziComponent,
    NoviKvizComponent,
    KvizoviUTrenduComponent,
    MojiKvizoviComponent,
    RijeseniKvizoviComponent,
    KvizListExpandedComponent,
    KvizDetailComponent,
    LoginComponent,
    PlayKvizComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
