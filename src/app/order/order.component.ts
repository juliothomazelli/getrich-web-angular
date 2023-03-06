import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { OrderService } from '../services/Order.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

import { SymbolType } from '../enum/Symbol.enum';
import { DateUtils } from '../utils/DateUtils';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { ObjectUtils } from '../utils/ObjectUtils';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatSort) sort: any;
  columns : any = [
    {
      columnDef: 'Id',
      header: 'Id',
      cell: (order: any) => `${order.Id}`,
    },
    {
      columnDef: 'Side',
      header: 'Side',
      cell: (order: any) => `${order.Side == 1 ? "BUY" : "SELL"}`,
    },
    {
      columnDef: 'Symbol',
      header: 'Symbol',
      cell: (order: any) => `${order.Symbol}`,
    },
    {
      columnDef: 'Type',
      header: 'Type',
      cell: (order: any) => this.orderTypeFormat(order.Type),
    },
    {
      columnDef: 'Status',
      header: 'Status',
      cell: (order: any) => this.orderStatusFormat(order.Status),
    },
    {
      columnDef: 'CreateDate',
      header: 'Date',
      cell: (order: any) => `${order.CreateDate}`,
    },
    {
      columnDef: 'Price',
      header: 'Price',
      cell: (order: any) => `${order.Price}`,
    },
    {
      columnDef: 'Quantity',
      header: 'Quantity',
      cell: (order: any) => `${order.Quantity}`,
    },
  ];
  
  dataSource : any = []
  displayedColumns = this.columns.map((c : any) => c.columnDef);
  myControl : any = new FormControl();
  options: any[] = ["BTCBRL", "ETHBRL"];
  filteredOptions: any;
  loadingOrders: boolean = false;
  filter : any = { id: "", type: "", side: "", status: "", symbol: "", from: "", to: "" }

  constructor(private orderService: OrderService, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((value : any) => this._filter(value)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  orderStatusFormat(status: number){
    if (status == 1){
      return "CANCELED";
    }

    if (status == 2){
      return "EXPIRED";
    }

    if (status == 3){
      return "FILLED";
    }

    if (status == 4){
      return "NEW";
    }

    if (status == 5){
      return "PARTIALLY_FILLED";
    }

    if (status == 6){
      return "PENDING_CANCEL";
    }

    if (status == 7){
      return "REJECTED";
    }

    return "";
  }
  
  orderTypeFormat(type: number){
    if (type == 1) return "LIMIT";
    if (type == 2) return "LIMIT_MAKER";
    if (type == 3) return "MARKET";
    if (type == 4) return "STOP";
    if (type == 5) return "STOP_MARKET";
    if (type == 6) return "STOP_LOSS_LIMIT";
    if (type == 7) return "TAKE_PROFIT_LIMIT";
    if (type == 8) return "TAKE_PROFIT_MARKET";
    if (type == 9) return "TRAILING_STOP_MARKET";

    return "";
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  loadOrders(){
    let sendData : any = {};

    if (this.filter.id){
      sendData.id = this.filter.id;
    }

    if (this.filter.side){
      sendData.side = this.filter.side;
    }

    if (this.filter.type){
      sendData.type = this.filter.type;
    }

    if (this.filter.status){
      sendData.status = this.filter.status;
    }

    if (this.filter.symbol){
      sendData.symbol = this.filter.symbol;
    }

    if (this.filter.from && this.filter.to){
      sendData.from = DateUtils.formatDateTime(this.filter.from);
      sendData.to = DateUtils.formatDateTime(this.filter.to, false);
    }

    this.loadingOrders = true;
    this.orderService.get("/load", sendData).then((res: any) => {
      for (const item of res){
        item.CreateDate = new Date(item.CreateDate);

        item.CreateDate = DateUtils.formatDateTime(item.CreateDate)
      }

      this.dataSource = new MatTableDataSource(res);
    }).catch(err => {

    }).finally(() => {
      this.loadingOrders = false;
    });
  }

  openOrderDetail(order: any = undefined){
    if (order){
      order.Side   = order.Side.toString();
      order.Status = order.Status.toString();
      order.Type   = order.Type.toString();
    }
    
    const dialogRef = this.dialog.open(OrderDetailComponent, {data: {order: ObjectUtils.copy(order)}});

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  fromChange(event: any){
    console.log(event)
  }

  toChange(event: any){
    console.log(event)
  }

  processOrders(orders: any){
    console.log(orders);
  }
}
