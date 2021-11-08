import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicNavbarComponent } from './components/dynamic-navbar/dynamic-navbar.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MaterialModule } from './shared-elements/utils/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { authInterceptorProviders } from './shared-elements/interceptors/auth-interceptor';
import { tokenInterceptorProviders } from './shared-elements/interceptors/auth.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    DynamicNavbarComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    CdkTableModule
  ],
  providers: [
    authInterceptorProviders,
    tokenInterceptorProviders,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
