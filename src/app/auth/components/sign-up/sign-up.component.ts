import { Component, OnInit } from '@angular/core';
import { AutoUnSubscribe } from 'angular-auto-unsubscribe';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
@AutoUnSubscribe()
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
