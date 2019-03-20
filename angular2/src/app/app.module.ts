import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule,
        MatListModule, MatSidenavModule, MatTabsModule, MatIconModule, MatFormFieldModule,
        MatChipsModule} from '@angular/material';

import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThemeComponent } from './theme/theme.component';
import { ThemeService } from './theme/theme.service';

import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from './quote/quote.service';

import { ElementListComponent } from './element-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    ThemeComponent,
    QuoteComponent
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
    MatChipsModule,
    routing
  ],
  providers: [ThemeService, QuoteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
