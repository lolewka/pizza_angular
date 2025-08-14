import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private observable: Observable<number>;

  // private promise: Promise<string>;
  constructor() {
    // this.promise = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     resolve('hello');
    //   }, 2000);
    //
    // });
    this.observable = new Observable((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count++);
      }, 1000)
      setTimeout(() => {
        observer.complete();
      }, 4000)
      setTimeout(() => {
        observer.error('world');
      }, 5000)
    })
  }

  ngOnInit(): void {
    this.observable.subscribe(
      {
        next: (param: number) => {
          console.log('subscriber 1: ', param);
        },
        error: (error: string) => {
          console.log('ERROR!!' + error);
        }
      });
  }

  // this.promise.then((param: string) => {
  //   console.log(param);
  // })


  test() {
    this.observable.subscribe((param: number) => {
      console.log('subscriber 2: ', param);
    })
  }
}
