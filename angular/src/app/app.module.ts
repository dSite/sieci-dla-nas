import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RestService } from './rest.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { NetworksComponent } from './networks/networks.component';
import { NetworkListComponent } from './networks/network-list/network-list.component';
import { NetworkItemComponent } from './networks/network-list/network-item/network-item.component';
import { NetworkDetailsComponent } from './networks/network-details/network-details.component';
import {AlertModule, CarouselModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    NetworksComponent,
    NetworkListComponent,
    NetworkItemComponent,
    NetworkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    CarouselModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
