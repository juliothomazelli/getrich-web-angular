import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketComponent } from './market/market.component';
import { ReportComponent } from './report/report.component';
import { WalletComponent } from './wallet/wallet.component';

const childRoutes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'market',
    component: MarketComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  }
]

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        children: childRoutes
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
