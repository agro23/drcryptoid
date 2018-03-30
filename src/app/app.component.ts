import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptos: any;
  title = 'Dr.CryptoID';

  constructor(private _data: DataService) {

  }

  ngOnInit() {
      this._data.getPrices()
        .subscribe(res => {
          this.cryptos = res;
          //console.log(res);
        });
    }
  
}
