import { Routes, RouterModule } from '@angular/router';
import { ElementListComponent } from './element-list.component';
import { ThemeComponent } from './theme/theme.component';
import { QuoteComponent } from './quote/quote.component';
import { LoginComponent } from './login/login.component';
import { FormQuoteComponent } from './quote/formQuote.component';
import { FormThemeComponent } from './theme/formTheme.component';

const appRoutes = [
  { path: '' , component: ElementListComponent  },
  { path: 'theme', component: ThemeComponent  },
  { path: 'quote', component: QuoteComponent  },
  { path: 'formQuote', component: FormQuoteComponent  },
  { path: 'formTheme', component: FormThemeComponent  },
  { path: 'login', component: LoginComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);
