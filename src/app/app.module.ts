import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Added HttpClient and NgConfig into the service 
import { HttpClientModule } from '@angular/common/http';
// import { NgApodConfig } from '../../../config/ng-apod.config';
import { NgApodConfig } from '../../../ng-apod/config/ng-apod.config';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  // imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  // providers: [
  //   StatusBar,
  //   SplashScreen,
  //   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  // ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NgApodConfig,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
