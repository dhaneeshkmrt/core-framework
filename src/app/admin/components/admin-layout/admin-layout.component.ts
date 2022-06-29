import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AutoUnSubscribe } from 'angular-auto-unsubscribe';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
@AutoUnSubscribe()
export class AdminLayoutComponent implements OnInit {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // subscription= new Subscription();

  // constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  //   this.subscription.add(this.isHandset$.subscribe(res=>{}));
  }


}
