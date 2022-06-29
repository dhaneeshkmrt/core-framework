import { Component } from '@angular/core';
import { AutoUnSubscribe } from 'angular-auto-unsubscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@AutoUnSubscribe()
export class AppComponent {
  title = 'core-framework';
}
