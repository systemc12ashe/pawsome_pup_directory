
import { NgModule } from '@angular/core'; 
  
// Importing forms module 
import { FormsModule, ReactiveFormsModule  }  
from '@angular/forms'; 
import { BrowserModule }  
from '@angular/platform-browser'; 
import { BrowserAnimationsModule }  
from '@angular/platform-browser/animations'; 
   
import { AppComponent }   from './app.component'; 
import { NgbModule } 
from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
   
@NgModule({ 
  bootstrap: [ 
    AppComponent 
  ], 
  declarations: [ 
    AppComponent, HomeComponent, HeaderComponent, FooterComponent 
  ], 
  imports: [ 
    FormsModule, 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    NgbModule 
  ] 
}) 
export class AppModule { }
