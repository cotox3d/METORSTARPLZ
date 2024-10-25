import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importar el CommonModule
import { FormsModule } from '@angular/forms'; // Por si usas ngModel en formularios

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
     
    ],
    imports: [
        BrowserModule,
        CommonModule, 
        FormsModule,  
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }