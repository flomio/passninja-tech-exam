import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'PassNinjaTest';
  walletData: { address: string, privateKey: string, publicKey: string };

  ngOnInit() {
    this.getWalletData();
  }

  async getWalletData() {
    try {
      const response = await axios.get('http://localhost:3000/');
      this.walletData = response.data;
    } catch {
      this.walletData = { address: '404', privateKey: '404', publicKey: '404' };
    }
  }
}
