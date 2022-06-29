import { Component, OnInit } from '@angular/core';
import { AutoUnSubscribe } from 'angular-auto-unsubscribe';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
@AutoUnSubscribe()
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
