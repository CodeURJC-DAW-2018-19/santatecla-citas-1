import { RouterModule } from '@angular/router';
import { ElementListComponent } from './element-list.component';
import { ThemeComponent } from './theme/theme.component';
import { QuoteComponent } from './quote/quote.component';
import { RegisterComponent } from './auth/register.component';
import { FormQuoteComponent } from './quote/formQuote.component';
import { FormThemeComponent } from './theme/formTheme.component';
import { HistogramComponent } from './histogram/histogram.component';

const appRoutes = [
  { path: '' , component: ElementListComponent  },
  { path: 'theme/:id', component: ThemeComponent  },
  { path: 'newTheme', component: FormThemeComponent  },
  { path: 'theme/edit/:id', component: FormThemeComponent },
  { path: 'quote/:id', component: QuoteComponent  },
  { path: 'newQuote', component: FormQuoteComponent  },
  { path: 'quote/edit/:id', component: FormQuoteComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'histogram', component: HistogramComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);
