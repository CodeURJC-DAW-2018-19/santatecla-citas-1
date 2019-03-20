import { Routes, RouterModule } from '@angular/router';
import { ElementListComponent } from './element-list.component';
import { ThemeComponent } from './theme/theme.component';
import { QuoteComponent } from './quote/quote.component';

const appRoutes = [
  { path: '' , component: ElementListComponent  },
  { path: 'theme', component: ThemeComponent  },
  { path: 'quote', component: QuoteComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);
