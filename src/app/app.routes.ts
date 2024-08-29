import { Routes } from '@angular/router';
import { IncludeDebitViewComponent } from './components/include-debit-view/include-debit-view.component';
import { ListDebitViewComponent } from './components/list-debit-view/list-debit-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/include-debit', pathMatch: 'full' },
  { path: 'include-debit', component: IncludeDebitViewComponent },
  { path: 'list-debit', component: ListDebitViewComponent },
];