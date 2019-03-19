import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule,
        MatListModule, MatSidenavModule, MatTabsModule, MatIconModule, MatFormFieldModule,
        MatChipsModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';
import { QuoteService } from './quote.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  providers: [ThemeService, QuoteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
