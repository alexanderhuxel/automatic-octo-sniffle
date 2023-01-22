import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  list: string = '';
  lastItem: any = 1;
  items: string = '1';

  endpoint: string = 'https://reservision.alexhuxel.de/backend.php?';

  public getList(length: number) {
    this.http
      .get(
        this.endpoint +
          new HttpParams().set('function', 'list').set('length', length),
        { responseType: 'text' }
      )
      .subscribe({
        next: (data) => {
          this.list = data;
        },
        error: (error) => {
          this.list = error;
        },
      });
  }

  public increaseItems(currentNumber: number) {
    this.http
      .get(
        this.endpoint +
          new HttpParams()
            .set('function', 'increaseItem')
            .set('currentNumber', currentNumber),
        { responseType: 'text' }
      )
      .subscribe({
        next: (data) => {
          this.items = this.items + ', ' + data;
          this.lastItem++;
        },
        error: (error) => {
          this.items = error;
        },
      });
  }
}
