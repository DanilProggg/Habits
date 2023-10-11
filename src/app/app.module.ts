import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  declarations: [
    
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
