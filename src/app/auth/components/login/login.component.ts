import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/core/services/popup.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }

  ngOnInit(): void {
  }
  test(){
    this.toasterService.show('this is toaster');
  }

}
