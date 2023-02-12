import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpUtils } from '../utils/HttpUtils';

@Component({
  selector: 'app-wallet-overview',
  templateUrl: './wallet-overview.component.html',
  styleUrls: ['./wallet-overview.component.scss']
})
export class WalletOverviewComponent implements OnInit {
  public balanceDetails = [];
  public displayedColumns: string[] = ['asset', 'free'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (!this.data) return;
    
    this.balanceDetails = this.data.balances ? this.data.balances : [];
  }
}
