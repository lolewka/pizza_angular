import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private observable: Observable<string>;
  // private promise: Promise<string>;
  constructor() {
    // this.promise = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     resolve('hello');
    //   }, 2000);
    //
    // });
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('hello');
      }, 2000)
      setTimeout(() => {
        observer.next('world');
      }, 3000)
    })
  }

  ngOnInit(): void {
    this.observable.subscribe((param: string) => {
      console.log(param);
    })
    // this.promise.then((param: string) => {
    //   console.log(param);
    // })
  }
}
