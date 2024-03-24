import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './Topbar/header.component';
import { FooterComponent } from './footer/footer.component';


import { AddressService } from './services/services/address.service';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { BorrowerComponent } from './commercial/commercial-accordian/borrower/borrower.component';
import { SecurityComponent } from './commercial/commercial-accordian/security/security.component';
import { AddressComponent } from './commercial/commercial-accordian/address/address.component';
import { RelationshipComponent } from './commercial/commercial-accordian/relationship/relationship.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    CommercialComponent,
    ConsumerComponent,
    BorrowerComponent,
    SecurityComponent,
    AddressComponent,
    RelationshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule,MatExpansionModule,CommonModule,
    MatFormFieldModule,MatInputModule,MatGridListModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
