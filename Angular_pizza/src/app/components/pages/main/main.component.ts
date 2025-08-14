import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

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

      const interval = setInterval(() => {
        observer.next(count++);
      }, 1000);
      const timout1 = setTimeout(() => {
        observer.complete();
      }, 4000);
      const timout2 = setTimeout(() => {
        observer.error('world');
      }, 5000);
      return {
        unsubscribe() {
          clearInterval(interval);
          clearTimeout(timout1);
          clearTimeout(timout2);
        }
      }
    });
  }

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(
      {
        next: (param: number) => {
          console.log('subscriber 1: ', param);
        },
        error: (error: string) => {
          console.log('ERROR!!' + error);
        }
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
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
