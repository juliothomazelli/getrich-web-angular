import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatNativeDateModule } from '@angular/material/core';
import { BaseComponent } from './base/base.component';
import { MarketComponent } from './market/market.component';
import { WalletComponent } from './wallet/wallet.component';
import { ConfigurationComponent } from './configuration/configuration.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpUtils } from './utils/HttpUtils';
import { HttpClientModule } from '@angular/common/http';
import { WebSocketService } from './websocket/websocket.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { CandleChartComponent } from './charts/candle-chart/candle-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { HeatmapChartComponent } from './charts/heatmap-chart/heatmap-chart.component';
import { MarketService } from './services/Market.service';
import { WalletOverviewComponent } from './wallet-overview/wallet-overview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/Order.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BaseComponent,
    MarketComponent,
    WalletComponent,
    ConfigurationComponent,
    PieChartComponent,
    LineChartComponent,
    CandleChartComponent,
    BarChartComponent,
    AreaChartComponent,
    ColumnChartComponent,
    HeatmapChartComponent,
    WalletOverviewComponent,
    OrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatListModule,
    MatTooltipModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDialogModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxChartsModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [
    HttpUtils,
    MarketService,
    OrderService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
