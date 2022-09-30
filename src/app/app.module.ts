import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ResultadosModule } from './resultados/resultados.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    SidebarModule,
    ResultadosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
