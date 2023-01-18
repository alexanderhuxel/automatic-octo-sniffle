import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fizzbuzz';

  getValueofFormAndFillList(val: any) {
    this.backend.getList(val.number);
  }

  constructor(public backend: BackendService) {}
}
