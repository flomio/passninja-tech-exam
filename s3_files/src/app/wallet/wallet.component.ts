import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements DoCheck {
  qrCodePrefix = 'https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr';
  @Input() walletData: { address: string, privateKey: string, publicKey: string };
  qrCodeSrc = '';

  constructor() {
  }

  ngDoCheck() {
    if (this.walletData) {
      this.qrCodeSrc = `${this.qrCodePrefix}&chl=bitcoin:${this.walletData.address}?amount=.01%26`;
      console.log(this.qrCodeSrc)
    }
  }

}
