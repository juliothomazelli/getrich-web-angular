import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public order : any;

  constructor(public dialogRef: MatDialogRef<OrderDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.order = this.data.order ? this.data.order : this.orderObject();
  }

  closeModal(){
    this.dialogRef.close();
  }

  confirmModal(){
    console.log(this.order)
  }

  orderObject(){
    return {
      Id         : "",
      Symbol     : "",
      Side       : "",
      Status     : "",
      Type       : "",
      CreateDate : "",
      Price      : "",
      Quantity   : ""
    }
  }

}
