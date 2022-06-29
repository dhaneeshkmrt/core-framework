import { Component, OnInit } from '@angular/core';
import { AutoUnSubscribe } from 'angular-auto-unsubscribe';

@Component({
  selector: 'app-authendication',
  templateUrl: './authendication.component.html',
  styleUrls: ['./authendication.component.scss']
})
@AutoUnSubscribe()
export class AuthendicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
