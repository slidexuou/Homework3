import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TopContentComponent } from './topcontent/topcontent.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { MainContentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { SubContentComponent } from './subcontent/subcontent.component';



@NgModule({
  declarations: [
    AppComponent,HomeComponent,HeaderComponent,TopContentComponent,SearchBarComponent,MainContentComponent,FooterComponent,SubContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
