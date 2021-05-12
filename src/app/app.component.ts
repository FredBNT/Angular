import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Gestion appareil';

  secondes: number;
  private counterSubcription: Subscription;

  constructor() {
  }

  ngOnInit(): void {

    const counter = interval(1000 /* number of milliseconds */);
    this.counterSubcription = counter.subscribe(
      (value => this.secondes = value)
    );

  }

  ngOnDestroy(): void {
    this.counterSubcription.unsubscribe();
  }



}
