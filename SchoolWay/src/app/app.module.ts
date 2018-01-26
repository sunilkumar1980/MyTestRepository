import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';


//Imports Modules
import { AppRoutes } from '../app/CustomModules/Routing-Module'

//Imports components from routes
import { ComponentList } from '../app/CustomModules/Routing-Module';
import { EnquiriesListComponent } from './enquiries-list/enquiries-list.component'

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SideNavigationComponent,
    ComponentList,
    EnquiriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
